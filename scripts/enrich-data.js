const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const INPUT_FILE = path.join(__dirname, '../public/goodreads_library_export.csv');
const OUTPUT_FILE = path.join(__dirname, '../public/data.csv');

async function main() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Input file not found: ${INPUT_FILE}`);
    process.exit(1);
  }

  const csvContent = fs.readFileSync(INPUT_FILE, 'utf8');
  
  // Parse CSV
  const parseResult = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: true,
  });

  if (parseResult.errors.length > 0) {
    console.error('CSV Parsing errors:', parseResult.errors);
  }

  let books = parseResult.data;
  console.log(`Found ${books.length} books in input.`);

  // Load existing enriched data
  const existingDataMap = new Map();
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
        const existingContent = fs.readFileSync(OUTPUT_FILE, 'utf8');
        const existingParse = Papa.parse(existingContent, { header: true, skipEmptyLines: true });
        existingParse.data.forEach(book => {
            if (book['Book Id']) {
                existingDataMap.set(book['Book Id'], book);
            }
        });
        console.log(`Loaded ${existingDataMap.size} existing enriched records.`);
    } catch (e) {
        console.warn('Could not read existing data file, proceeding with full enrichment.');
    }
  }

  // Enrich data
  // Clean ISBNs and prepare for fetching
  // Goodreads export wraps ISBNs in ="..." to prevent Excel auto-formatting
  // e.g., ="9780140449068" -> 9780140449068
  
  const enrichedBooks = [];
  const batchSize = 10; // Open Library API limit is usually around this or higher, but let's be safe
  
  for (let i = 0; i < books.length; i += batchSize) {
    const batch = books.slice(i, i + batchSize);
    console.log(`Processing batch ${i / batchSize + 1}/${Math.ceil(books.length / batchSize)}...`);
    
    // 1. Separate books needing enrichment
    const booksToEnrich = [];
    const booksToKeep = [];

    batch.forEach(book => {
        const bookId = book['Book Id'];
        const existingBook = existingDataMap.get(bookId);
        if (existingBook && (existingBook['Genres'] || existingBook['CoverUrl'])) {
            // Optimistic update for existing books (no fetch)
            const isbn = existingBook['ISBN13'] || existingBook['ISBN'];
            if (isbn) {
                const cleanIsbn = isbn.replace(/[="]/g, '').trim();
                if (cleanIsbn) {
                    let urls = existingBook['CoverUrl'] ? existingBook['CoverUrl'].split('|') : [];
                    const olUrl = `https://covers.openlibrary.org/b/isbn/${cleanIsbn}-L.jpg`;
                    if (!urls.includes(olUrl)) {
                        urls.push(olUrl);
                        // Clean
                        urls = [...new Set(urls)].filter(u => u);
                        existingBook['CoverUrl'] = urls.join('|');
                    }
                }
            }
            delete existingBook['CoverSmallUrl'];
            booksToKeep.push(existingBook);
        } else {
            booksToEnrich.push(book);
        }
    });

    enrichedBooks.push(...booksToKeep);
    if (booksToEnrich.length === 0) continue;

    // 2. Prepare ISBNs
    const isbnMap = {};
    const keysToFetch = [];

    booksToEnrich.forEach(book => {
        let isbn = book['ISBN13'] || book['ISBN'];
        if (isbn) isbn = isbn.replace(/[="]/g, '').trim();
        book._cleanIsbn = isbn; // store temp
        
        if (isbn && isbn.length > 0) {
            const key = `ISBN:${isbn}`;
            isbnMap[key] = book;
            keysToFetch.push(key);
        }
    });

    // 3. Batch Fetch Metadata (Genres)
    let metadataMap = {};
    if (keysToFetch.length > 0) {
        try {
            const url = `https://openlibrary.org/api/books?bibkeys=${keysToFetch.join(',')}&jscmd=data&format=json`;
            const response = await fetch(url);
            if (response.ok) {
                metadataMap = await response.json();
            }
        } catch (e) {
            console.error('Metadata fetch failed', e);
        }
    }

    // 4. Resolve Covers & Finalize
    const enrichedBatch = await Promise.all(booksToEnrich.map(async (book) => {
        const isbn = book._cleanIsbn;
        const key = `ISBN:${isbn}`;
        const metadata = metadataMap[key] || {};
        
        // Genres
        let genres = book['Genres'] || '';
        if (!genres && metadata.subjects) {
            genres = metadata.subjects.slice(0, 5).map(s => s.name).join('; ');
        }

        // COVERS
        // Start with existing URLs if any
        let validCoverUrls = book['CoverUrl'] ? book['CoverUrl'].split('|') : [];
        
        if (isbn) {
            // A. Always add Direct OpenLibrary (Large) - Optimistic Generation
            const olUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
            if (!validCoverUrls.includes(olUrl)) {
                 validCoverUrls.push(olUrl);
            }
            
            // B. Try Google Books (Metadata only, no image download check)
            try {
                const gRes = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
                if (gRes.ok) {
                    const gData = await gRes.json();
                    if (gData.totalItems > 0) {
                            const imgLinks = gData.items[0].volumeInfo?.imageLinks;
                            if (imgLinks) {
                                // Try largest to smallest
                                const candidates = [
                                    imgLinks.extraLarge,
                                    imgLinks.large,
                                    imgLinks.medium,
                                    imgLinks.thumbnail
                                ];
                                
                                for (const c of candidates) {
                                    if (c) {
                                        const secure = c.replace('http://', 'https://');
                                        if (!validCoverUrls.includes(secure)) {
                                            validCoverUrls.push(secure);
                                            // Found a google cover, maybe one is enough? 
                                            // Let's take the best one.
                                            break;
                                        }
                                    }
                                }
                            }
                    }
                }
            } catch(e) {}

            // C. Fallback to Metadata cover
            if (metadata.cover) {
                 const bestMeta = metadata.cover.large || metadata.cover.medium || metadata.cover.small;
                 if (bestMeta && !validCoverUrls.includes(bestMeta)) {
                     validCoverUrls.push(bestMeta);
                 }
            }
            
            // D. Try via OLID
            if (metadata.identifiers && metadata.identifiers.openlibrary && metadata.identifiers.openlibrary.length > 0) {
                const olid = metadata.identifiers.openlibrary[0]; // Take first
                const olidUrl = `https://covers.openlibrary.org/b/olid/${olid}-L.jpg`;
                if (!validCoverUrls.includes(olidUrl)) {
                     validCoverUrls.push(olidUrl);
                }
            }
        }
        
        // Remove duplicates and empty strings
        validCoverUrls = [...new Set(validCoverUrls)].filter(u => u);

        const coverUrlString = validCoverUrls.join('|');
        const finalBook = { ...book, Genres: genres, CoverUrl: coverUrlString };
        delete finalBook._cleanIsbn;
        return finalBook;
    }));

    enrichedBooks.push(...enrichedBatch);
    
    
    // Respect API rate limits
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Write to CSV
  // Explicitly specify columns/order if needed, but Papaparse unparse handles generic objects
  const csvOutput = Papa.unparse(enrichedBooks);
  fs.writeFileSync(OUTPUT_FILE, csvOutput);
  console.log(`Enriched data written to ${OUTPUT_FILE}`);
}
// Helper to validate image existance and size
async function isValidImage(url) {
    if (!url) return false;
    try {
        const res = await fetch(url);
        if (!res.ok) return false;
        
        const blob = await res.blob();
        if (blob.size < 1000) return false; // Basic heuristic: < 1KB is likely placeholder or blank
        
        // Strictly creating an ImageBitmap to check dimensions require DOM (in browser) 
        // or a library like 'canvas' or 'sharp' in Node.
        // Since we don't want to add dependencies instantly, we can rely on Content-Length or Size.
        // OpenLibrary placeholders are ~43 bytes or very small.
        // 1x1 pixels are super small.
        
        return true;
    } catch (e) {
        return false;
    }
}

main().catch(console.error);
