import Fuse from 'fuse.js';

let fuse;
let searchOpen = false;
let onBookSelectCallback = null;

export function initSearch(books, onSelect) {
    onBookSelectCallback = onSelect;

    const options = {
        keys: ['title', 'author'],
        threshold: 0.4, // Fuzzy match threshold
        distance: 100,
    };
    fuse = new Fuse(books, options);

    setupUI();
}

function setupUI() {
    const searchWrapper = document.getElementById('search-wrapper');
    const searchBtn = document.getElementById('search-btn');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const resultsContainer = document.getElementById('search-results');

    if (!searchBtn || !searchContainer || !searchInput) return;

    // Toggle Open
    searchBtn.addEventListener('click', () => {
        searchOpen = true;
        searchBtn.classList.add('hidden');
        searchContainer.classList.remove('hidden');
        searchWrapper.classList.add('active'); // specific styling class
        searchInput.focus();
    });

    // Close
    searchClose.addEventListener('click', () => {
        closeSearch();
    });

    // Handle Input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.length > 0) {
            const results = fuse.search(query);
            renderResults(results);
        } else {
            resultsContainer.innerHTML = '';
            resultsContainer.classList.add('hidden');
        }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (searchOpen && !searchWrapper.contains(e.target)) {
            closeSearch();
        }
    });
}

function closeSearch() {
    searchOpen = false;
    const searchWrapper = document.getElementById('search-wrapper');
    const searchBtn = document.getElementById('search-btn');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    searchBtn.classList.remove('hidden');
    searchContainer.classList.add('hidden');
    searchWrapper.classList.remove('active');
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    resultsContainer.classList.add('hidden');
}

function renderResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.classList.add('hidden');
        return;
    }

    resultsContainer.classList.remove('hidden');

    results.slice(0, 10).forEach(result => { // Limit to 10
        const item = result.item;
        const div = document.createElement('div');
        div.className = 'search-result-item';
        
        div.innerHTML = `
            <div class="result-info">
                <div class="result-title">${item.title}</div>
                <div class="result-author">${item.author}</div>
            </div>
        `;

        div.addEventListener('click', () => {
            if (onBookSelectCallback) {
                onBookSelectCallback(item.id);
            }
            closeSearch();
        });

        resultsContainer.appendChild(div);
    });
}
