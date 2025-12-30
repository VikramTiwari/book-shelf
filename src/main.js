import './style.css';
import { initLibrary, stopLibrary } from './library/LibraryApp.js';
import { initCarousel, stopCarousel } from './carousel/CarouselApp.js';

// Setup View Switching Logic
const toggleBtn = document.getElementById('view-toggle');
let currentView = 'carousel'; // 'carousel' | 'library'

// Router Logic
function handleRoute() {
    const path = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');

    if (path === '/library') {
        if (currentView !== 'library') {
            stopCarousel();
            initLibrary();
            currentView = 'library';
            updateToggleBtnState('library');
        }
    } else {
        // Default to carousel for /carousel or / or anything else
        if (currentView !== 'carousel') {
            stopLibrary();
            initCarousel();
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
window.addEventListener('popstate', () => {
    // Force init to ensure URL sync happens even if view is same
    const path = window.location.pathname;
    if (path === '/library') {
        if (currentView !== 'library') {
             stopCarousel();
             initLibrary();
             currentView = 'library';
             updateToggleBtnState('library');
        } else {
             initLibrary();
        }
    } else {
        if (currentView !== 'carousel') {
             stopLibrary();
             initCarousel();
             currentView = 'carousel';
             updateToggleBtnState('carousel');
        } else {
             initCarousel();
        }
    }
});

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const url = new URL(window.location);
        url.search = ''; // Clear query params on switch logic
        
        if (currentView === 'carousel') {
            // Switch to Library
            url.pathname = '/library';
            window.history.pushState({}, '', url);
            handleRoute();
        } else {
            // Switch to Carousel
            url.pathname = '/carousel';
            window.history.pushState({}, '', url);
            handleRoute();
        }
    });
}
