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
function getBasePath() {
    let path = window.location.pathname;
    // Strip trailing slash if present (unless root, but covered below)
    if (path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    
    // Check for known sub-routes and strip them
    // Note: We check longest matches first if there were overlapping ones, but here unique.
    const suffixes = ['/library', '/carousel', '/index.html'];
    for (const suffix of suffixes) {
        if (path.endsWith(suffix)) {
            return path.substring(0, path.length - suffix.length);
        }
    }
    
    return path;
}

async function handleRoute() {
    const path = window.location.pathname;
    const basePath = getBasePath();
    
    // Construct expected paths
    const libraryPath = basePath + '/library';
    const carouselPath = basePath + '/carousel';
    
    // Redirect Root to Preference
    // Matches: basePath (empty or /books), basePath/, basePath/index.html
    if (path === basePath || path === basePath + '/' || path === basePath + '/index.html') {
        const pref = localStorage.getItem('preferredView');
        const url = new URL(window.location);
        if (pref === 'library') {
            url.pathname = libraryPath;
        } else {
            url.pathname = carouselPath;
        }
        window.history.replaceState({}, '', url);
        handleRoute(); // Re-run with new path
        return;
    }

    if (path === libraryPath) {
        if (currentView !== 'library') {
            await stopCarouselView();
            await loadLibraryView();
            currentView = 'library';
            updateToggleBtnState('library');
        }
    } else {
        // Default to carousel for /carousel or unknown (fallback) 
        // We treat everything else as Carousel basically, which is safe.
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
    handleRoute(); // Reuse logic
});

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const url = new URL(window.location);
        url.search = ''; // Clear query params on switch logic
        const basePath = getBasePath();
        
        if (currentView === 'carousel') {
            // Switch to Library
            localStorage.setItem('preferredView', 'library');
            url.pathname = basePath + '/library';
            window.history.pushState({}, '', url);
            handleRoute();
        } else {
            // Switch to Carousel
            localStorage.setItem('preferredView', 'carousel');
            url.pathname = basePath + '/carousel';
            window.history.pushState({}, '', url);
            handleRoute();
        }
    });
}
