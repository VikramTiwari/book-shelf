import './style.css';
import { loadAllBooks } from './common/data.js';
import { initSearch } from './common/search.js';

// Setup View Switching Logic
const toggleBtn = document.getElementById('view-toggle');
let currentView = 'carousel'; // 'carousel' | 'library'

// Module Cache
let carouselModule = null;
let libraryModule = null;

// Initialize Search
loadAllBooks().then(books => {
    initSearch(books, (bookId) => {
        // Handle selection
        const url = new URL(window.location);
        url.searchParams.set('book', bookId);
        window.history.pushState({}, '', url);
        
        // Trigger view update
        if (currentView === 'library') {
             loadLibraryView();
        } else {
             loadCarouselView();
        }
    });
});

async function loadLibraryView() {
    if (!libraryModule) {
        libraryModule = await import('./library/LibraryApp.js');
    }
    libraryModule.initLibrary();
}

async function stopLibraryView() {
    if (libraryModule) {
        libraryModule.stopLibrary();
    }
}

async function loadCarouselView() {
    if (!carouselModule) {
        carouselModule = await import('./carousel/CarouselApp.js');
    }
    carouselModule.initCarousel();
}

async function stopCarouselView() {
    if (carouselModule) {
        carouselModule.stopCarousel();
    }
}

// Router Logic
async function handleRoute() {
    const path = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);

    // Redirect Root to Preference
    if (path === '/' || path === '/index.html') {
        const pref = localStorage.getItem('preferredView');
        const url = new URL(window.location);
        if (pref === 'library') {
            url.pathname = '/library';
        } else {
            url.pathname = '/carousel';
        }
        window.history.replaceState({}, '', url);
        handleRoute(); // Re-run with new path
        return;
    }

    if (path === '/library') {
        if (currentView !== 'library') {
            await stopCarouselView();
            await loadLibraryView();
            currentView = 'library';
            updateToggleBtnState('library');
        }
    } else {
        // Default to carousel for /carousel or / or anything else
        if (currentView !== 'carousel') {
            await stopLibraryView();
            await loadCarouselView();
            currentView = 'carousel';
            updateToggleBtnState('carousel');
        }
    }
}

function updateToggleBtnState(view) {
    if (!toggleBtn) return;
    if (view === 'library') {
        toggleBtn.querySelector('#icon-library').classList.add('hidden');
        toggleBtn.querySelector('#icon-carousel').classList.remove('hidden');
    } else {
        toggleBtn.querySelector('#icon-library').classList.remove('hidden');
        toggleBtn.querySelector('#icon-carousel').classList.add('hidden');
    }
}

// Initialize based on current URL
// Set initial state explicitly to trigger first load
currentView = null; 
handleRoute();

// Handle Back/Forward
window.addEventListener('popstate', async () => {
    // Force init to ensure URL sync happens even if view is same
    const path = window.location.pathname;
    if (path === '/library') {
        if (currentView !== 'library') {
             await stopCarouselView();
             await loadLibraryView();
             currentView = 'library';
             updateToggleBtnState('library');
        } else {
             await loadLibraryView();
        }
    } else {
        if (currentView !== 'carousel') {
             await stopLibraryView();
             await loadCarouselView();
             currentView = 'carousel';
             updateToggleBtnState('carousel');
        } else {
             await loadCarouselView();
        }
    }
});

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const url = new URL(window.location);
        url.search = ''; // Clear query params on switch logic
        
        if (currentView === 'carousel') {
            // Switch to Library
            localStorage.setItem('preferredView', 'library');
            url.pathname = '/library';
            window.history.pushState({}, '', url);
            handleRoute();
        } else {
            // Switch to Carousel
            localStorage.setItem('preferredView', 'carousel');
            url.pathname = '/carousel';
            window.history.pushState({}, '', url);
            handleRoute();
        }
    });
}
