
import { loadAllBooks } from '../common/data.js';

let isActive = false;
const appContainer = document.getElementById('app');
const uiControls = document.getElementById('ui-controls');
const searchWrapper = document.getElementById('search-wrapper');

let currentBooks = [];
let sortColumn = 'Date';
let sortDirection = 'desc'; // 'asc' or 'desc'

export async function initTable() {
    if (isActive) return;
    isActive = true;

    // Hide standard UI controls for this special view
    if (uiControls) {
        uiControls.classList.add('hidden');
    }
    if (searchWrapper) {
        searchWrapper.classList.add('hidden');
    }

    if (appContainer) {
        appContainer.innerHTML = '';
        appContainer.classList.remove('hidden');
        
        // Add loading state
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading-state';
        loadingDiv.textContent = 'Loading Library Database...';
        loadingDiv.style.color = '#fff';
        loadingDiv.style.padding = '2rem';
        loadingDiv.style.textAlign = 'center';
        loadingDiv.style.fontFamily = 'monospace';
        appContainer.appendChild(loadingDiv);

        try {
            currentBooks = await loadAllBooks();
            renderTable();
        } catch (error) {
            console.error('Failed to load books for table view:', error);
            loadingDiv.textContent = 'Error loading database.';
            loadingDiv.style.color = '#ff4444';
        }
    }
}

export function stopTable() {
    isActive = false;
    currentBooks = [];
    if (appContainer) {
        appContainer.innerHTML = '';
    }
    
    // Restore UI controls
    if (uiControls) {
        uiControls.classList.remove('hidden');
    }
    if (searchWrapper) {
        searchWrapper.classList.remove('hidden');
    }
}

function handleSort(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    renderTable();
}

function getSortValue(book, column) {
    switch (column) {
        case 'ID': return parseInt(book.id) || 0;
        case 'Title': return (book.title || '').toLowerCase();
        case 'Author': return (book.author || '').toLowerCase();
        case 'Published Year': return parseInt(book.original_year || book.year) || 0;
        case 'Activity': return book.date_read ? 'Read' : 'Added';
        case 'Date': return new Date(book.date_read || book.date_added || 0).getTime();
        case 'Genre': return (book.genre || '').toLowerCase();
        case 'Avg ★': return parseFloat(book.average_rating) || 0;
        case 'Pages': return parseInt(book.pages) || 0;
        default: return '';
    }
}

function renderTable() {
    if (!appContainer) return;
    appContainer.innerHTML = '';

    // Sort Data
    const sortedBooks = [...currentBooks].sort((a, b) => {
        const valA = getSortValue(a, sortColumn);
        const valB = getSortValue(b, sortColumn);

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.color = '#fff';
    container.style.fontFamily = 'monospace';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.overflow = 'auto';
    container.style.boxSizing = 'border-box';
    container.style.background = '#1a1a1a';

    const title = document.createElement('h1');
    title.textContent = "Vik's Library";
    title.style.marginBottom = '1rem';
    title.style.borderBottom = '1px solid #444';
    title.style.paddingBottom = '0.5rem';
    container.appendChild(title);

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontSize = '14px';

    // Headers
    const headers = ['ID', 'Title', 'Author', 'Published Year', 'Activity', 'Date', 'Genre', 'Avg ★', 'Pages'];
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    headers.forEach(h => {
        const th = document.createElement('th');
        th.style.textAlign = 'left';
        th.style.padding = '10px';
        th.style.borderBottom = '1px solid #666';
        th.style.color = sortColumn === h ? '#fff' : '#aaa';
        th.style.cursor = 'pointer';
        th.style.userSelect = 'none';
        
        let label = h;
        if (sortColumn === h) {
            label += sortDirection === 'asc' ? ' ↑' : ' ↓';
        }
        th.textContent = label;
        
        th.addEventListener('click', () => handleSort(h));
        th.addEventListener('mouseenter', () => th.style.color = '#fff');
        th.addEventListener('mouseleave', () => {
            if (sortColumn !== h) th.style.color = '#aaa';
        });

        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);

    // Body
    const tbody = document.createElement('tbody');
    sortedBooks.forEach((book, index) => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.addEventListener('mouseenter', () => tr.style.background = '#333');
        tr.addEventListener('mouseleave', () => tr.style.background = 'transparent');

        // Logic for Activity Columns
        let rawDate = book.date_read || book.date_added || '-';
        const dateDisplay = rawDate;
        const activityName = book.date_read ? 'Read' : 'Added';

        const fields = [
            book.id,
            book.title,
            book.author,
            book.original_year || book.year || '-', 
            activityName,
            dateDisplay,
            book.genre || '-',
            book.average_rating || '-',
            book.pages || '-'
        ];

        fields.forEach(f => {
            const td = document.createElement('td');
            td.textContent = f;
            td.style.padding = '10px';
            td.style.borderBottom = '1px solid #333';
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);
    
    appContainer.appendChild(container);
}
