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
    
    const isbnMap = {};
    const keysToFetch = [];

    batch.forEach(book => {
      const bookId = book['Book Id'];
      const existingBook = existingDataMap.get(bookId);

      // Check if already enriched nicely
      if (existingBook && (existingBook['Genres'] || existingBook['CoverUrl'])) {
          enrichedBooks.push(existingBook);
          // console.log(`Skipping ${book['Title']} (already enriched)`);
          return; 
      }

      let isbn = book['ISBN13'] || book['ISBN'];
      // Clean extracted ISBN
      if (isbn) {
        isbn = isbn.replace(/[="]/g, '').trim();
      }
      
      if (isbn && isbn.length > 0) {
        const key = `ISBN:${isbn}`;
        isbnMap[key] = book;
        keysToFetch.push(key);
      } else {
        // No ISBN, keep as is
         enrichedBooks.push({ ...book, Genres: '', CoverUrl: '', CoverSmallUrl: '' });
      }
    });

    if (keysToFetch.length > 0) {
      try {
        const url = `https://openlibrary.org/api/books?bibkeys=${keysToFetch.join(',')}&jscmd=data&format=json`;
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Failed to fetch metadata for batch starting at ${i}: ${response.statusText}`);
            // Push original books if fetch fails
            batch.forEach(b => enrichedBooks.push({ ...b, Genres: '', CoverUrl: '', CoverSmallUrl: '' }));
            continue;
        }
        
        const data = await response.json();

        keysToFetch.forEach(key => {
            const book = isbnMap[key];
            const metadata = data[key];
            let genres = [];
            let coverUrl = '';
            let coverSmallUrl = '';

            if (metadata) {
                if (metadata.subjects) {
                    genres = metadata.subjects.map(s => s.name);
                } else if (metadata.subject_places) {
                    // Fallback to places
                }
                
                if (metadata.cover) {
                    coverUrl = metadata.cover.large || metadata.cover.medium || metadata.cover.small || '';
                    coverSmallUrl = metadata.cover.medium || metadata.cover.small || '';
                }
            }
            
            enrichedBooks.push({
                ...book,
                Genres: genres.slice(0, 5).join('; '),
                CoverUrl: coverUrl,
                CoverSmallUrl: coverSmallUrl
            });
        });
      } catch (error) {
        console.error('Error fetching data:', error);
         // Push original books if error
         keysToFetch.forEach(key => {
             enrichedBooks.push({ ...isbnMap[key], Genres: '', CoverUrl: '', CoverSmallUrl: '' });
          });
      }
    } else {
        // Books in batch had no ISBNs, already handled in the loop?
        // Wait, the loop adds to enrichedBooks ONLY if no ISBN.
        // If ISBN exists, it adds to keysToFetch.
        // So we are good.
    }
    
    // Respect API rate limits
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Write to CSV
  // Explicitly specify columns/order if needed, but Papaparse unparse handles generic objects
  const csvOutput = Papa.unparse(enrichedBooks);
  fs.writeFileSync(OUTPUT_FILE, csvOutput);
  console.log(`Enriched data written to ${OUTPUT_FILE}`);
}

main().catch(console.error);
