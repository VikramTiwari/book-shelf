export let allBooksData = [];

export function loadAllBooks() {
    return fetch('./data.csv')
        .then(res => res.text())
        .then(csvText => {
            const data = parseCSV(csvText);
            allBooksData = data;
            return data;
        })
        .catch(err => {
            console.error("Error loading books:", err);
            return [];
        });
}

export function getLibraryBooks(books) {
    if (!books) books = [];
    
    // Bucket Sort for Library
    const toRead = books.filter(b => b.shelf === 'to-read');
    const current = books.filter(b => b.shelf === 'currently-reading');
    const read = books.filter(b => b.shelf === 'read' || (!b.shelf && b.date_read));

    // Sort To Read: Oldest added -> Newest added
    toRead.sort((a, b) => {
        const dateA = a.date_added || '0';
        const dateB = b.date_added || '0';
        return dateA > dateB ? 1 : -1;
    });

    // Sort Read: Newest read -> Oldest read
    read.sort((a, b) => {
        const dateA = a.date_read || '0';
        const dateB = b.date_read || '0';
        return dateA < dateB ? 1 : -1;
    });

    // Library needs a flat list in specific order?
    // LibraryApp expects buildFullBookshelf to take one array and it handles sections.
    // data.js in Library returned [...toRead, ...current, ...read].
    return [...toRead, ...current, ...read];
}

export function getCarouselBooks(books) {
    if (!books) books = [];
    
    // Carousel shows only Read books
    const readBooks = books.filter(b => 
        (b.shelf === 'read' || !!b.date_read) && b.date_read
    );

    // Sort by Date Read (Newest first)
    readBooks.sort((a, b) => {
        const d1 = new Date(a.date_read);
        const d2 = new Date(b.date_read);
        return d2 - d1;
    });

    return readBooks;
}

function parseCSV(text) {
    const lines = text.split('\n');
    const headers = parseCSVLine(lines[0]);
    const books = [];

    const getIndex = (name) => headers.indexOf(name);

    const idxTitle = getIndex('Title');
    const idxAuthor = getIndex('Author');
    const idxISBN = getIndex('ISBN13');
    const idxISBNFallback = getIndex('ISBN');
    const idxRating = getIndex('My Rating');
    const idxAvgRating = getIndex('Average Rating');
    const idxReview = getIndex('My Review');
    const idxDateRead = getIndex('Date Read');
    const idxDateAdded = getIndex('Date Added');
    const idxPages = getIndex('Number of Pages');
    const idxShelf = getIndex('Exclusive Shelf');
    const idxYear = getIndex('Year Published');
    const idxOrigYear = getIndex('Original Publication Year');
    const idxGenre = getIndex('Genres'); // Note: CSV header might be 'Genre' or 'Genres'
    const idxGenreFallback = getIndex('Genre');
    const idxId = getIndex('Book Id');

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;

        try {
            const row = parseCSVLine(lines[i]);
            
            // Safe Retrieval
            const getValue = (idx) => (idx !== -1 && row[idx]) ? row[idx] : '';

            let isbn = getValue(idxISBN) || getValue(idxISBNFallback) || '';
            isbn = isbn.replace(/[="]/g, '');

            let coverUrlStr = row['CoverUrl'] || ''; 
            let coverUrls = coverUrlStr ? coverUrlStr.split('|') : [];
            let coverUrl = coverUrls.length > 0 ? coverUrls[0] : '';
            
            // Fallback generation if no enriched URL and we have an ISBN
            if (!coverUrl && isbn && isbn.match(/^\d+$/)) {
                // Direct OpenLibrary URL to avoid local proxy dependency
                coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
                coverUrls = [coverUrl];
            }

            const title = getValue(idxTitle);

            if (title) {
                books.push({
                    id: getValue(idxId),
                    title: title,
                    author: getValue(idxAuthor),
                    cover_url: coverUrl, // Primary (first)
                    cover_urls: coverUrls, // All candidates
                    rating: parseInt(getValue(idxRating)) || 0,
                    review: getValue(idxReview),
                    date_read: getValue(idxDateRead),
                    date_added: getValue(idxDateAdded),
                    pages: parseInt(getValue(idxPages)) || 300,
                    shelf: getValue(idxShelf),
                    year: getValue(idxYear) || getValue(idxOrigYear) || '',
                    original_year: getValue(idxOrigYear) || getValue(idxYear) || '',
                    genre: getValue(idxGenre) || getValue(idxGenreFallback) || '',
                    isbn: isbn,
                    average_rating: parseFloat(getValue(idxAvgRating)) || 0
                });
            }
        } catch (e) {
            console.warn('Skipping CSV line', i, e);
        }
    }
    return books;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);

    return result.map(val => {
        val = val.trim();
        if (val.startsWith('"') && val.endsWith('"')) {
            return val.slice(1, -1).replace(/""/g, '"');
        }
        return val;
    });
}
