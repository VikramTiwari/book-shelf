import './style.css';
import { initLibrary, stopLibrary } from './library/LibraryApp.js';
import { initCarousel, stopCarousel } from './carousel/CarouselApp.js';

// Setup View Switching Logic
const toggleBtn = document.getElementById('view-toggle');
let currentView = 'carousel'; // 'carousel' | 'library'

// Initialize Default View
initCarousel();

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        if (currentView === 'carousel') {
            // Switch to Library
            stopCarousel();
            initLibrary();
            
            toggleBtn.querySelector('#icon-library').classList.add('hidden');
            toggleBtn.querySelector('#icon-carousel').classList.remove('hidden');
            currentView = 'library';
        } else {
            // Switch to Carousel
            stopLibrary();
            initCarousel();
            
            toggleBtn.querySelector('#icon-library').classList.remove('hidden');
            toggleBtn.querySelector('#icon-carousel').classList.add('hidden');
            currentView = 'carousel';
        }
    });
}
