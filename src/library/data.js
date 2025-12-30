
import { buildFullBookshelf } from './view.js';

export let booksData = [];

export function loadBooks() {
    return fetch('/data.csv')
        .then(res => res.text())
        .then(csvText => {
            let data = parseCSV(csvText);

            // Bucket Sort
            const toRead = data.filter(b => b.shelf === 'to-read');
            const current = data.filter(b => b.shelf === 'currently-reading');
            const read = data.filter(b => b.shelf === 'read' || (!b.shelf && b.date_read));

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

            const finalData = [...toRead, ...current, ...read];
            booksData = finalData;

            buildFullBookshelf(finalData);
            return finalData;
        })
        .catch(err => console.error("Error loading books:", err));
}

function parseCSV(text) {
    const lines = text.split('\n');
    const headers = parseCSVLine(lines[0]);
    const books = [];

    const getIndex = (name) => headers.indexOf(name);

    const idxTitle = getIndex('Title');
    const idxAuthor = getIndex('Author');
    const idxISBN = getIndex('ISBN13');
    const idxRating = getIndex('My Rating');
    const idxReview = getIndex('My Review');
    const idxDateRead = getIndex('Date Read');
    const idxDateAdded = getIndex('Date Added');
    const idxPages = getIndex('Number of Pages');
    const idxShelf = getIndex('Exclusive Shelf');
    const idxYear = getIndex('Year Published');
    const idxOrigYear = getIndex('Original Publication Year');
    const idxGenre = getIndex('Genre');
    const idxId = getIndex('Book Id');

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;

        try {
            const row = parseCSVLine(lines[i]);

            let isbn = row[idxISBN] || '';
            isbn = isbn.replace(/[="]/g, '');

            let coverUrl = 'https://placehold.co/400x600/1a1a20/FFF?text=No+Cover';
            if (isbn && isbn.match(/^\d+$/)) {
                coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
            }

            if (row[idxTitle]) {
                books.push({
                    id: row[idxId] || '',
                    title: row[idxTitle],
                    author: row[idxAuthor],
                    cover_url: coverUrl,
                    rating: parseInt(row[idxRating]) || 0,
                    review: row[idxReview] || '',
                    date_read: row[idxDateRead] || '',
                    date_added: row[idxDateAdded] || '',
                    pages: parseInt(row[idxPages]) || 300,
                    shelf: row[idxShelf] || '',
                    year: row[idxYear] || row[idxOrigYear] || '',
                    genre: row[idxGenre] || ''
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
