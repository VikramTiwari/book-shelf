import * as THREE from 'three';
import { camera, controls, renderer, scene } from './LibraryApp.js';
import { navigationGrid, bookMeshes, scrollBounds } from './view.js';
import { booksData } from './data.js';
import { formatDate } from './utils.js';
import { CONFIG } from './config.js';

let currentFocus = { row: 0, col: 0 };
let selectedBook = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

let _camera, _controls;

export function setupInteraction(cam, ctrl) {
    _camera = cam;
    _controls = ctrl;

    // We attach listeners to window, but we should verify if we are active?
    // Listeners are global. The main app might also have listeners.
    // We should probably check if the target is within our container or if we are active.
    // simpler: check if event target is within #library-app or context.
    
    // For specific UI elements, it's fine.
    // For window resize/mousemove/click, we might conflict.
    
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onMouseClick);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('wheel', onWheel, { passive: false });

    ctrl.addEventListener('change', checkScrollPosition);
    checkScrollPosition();

    // Scoped listener
    const closeBtn = document.querySelector('#library-app .close-btn');
    if(closeBtn) closeBtn.addEventListener('click', hideDetails);
}

function onWheel(event) {
    // Only intercept if library is visible/active?
    // Check if #library-app is not hidden
    const app = document.getElementById('library-app');
    if (!app || app.classList.contains('hidden')) return;

    event.preventDefault();
    const delta = event.deltaY * 0.01;
    if (_camera && _controls) {
        const oldY = _camera.position.y;
        let newY = oldY - delta;
        newY = Math.max(scrollBounds.min, Math.min(scrollBounds.max, newY));

        const diff = newY - oldY;
        if (Math.abs(diff) > 0.0001) {
            _camera.position.y = newY;
            _controls.target.y += diff;
        }
    }
}

function onWindowResize() {
    const app = document.getElementById('library-app');
    if (!app || app.classList.contains('hidden')) return;

    if (!_camera) return;
    _camera.aspect = window.innerWidth / window.innerHeight;
    _camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onMouseClick(event) {
    const app = document.getElementById('library-app');
    if (!app || app.classList.contains('hidden')) return;

    if (event.target.closest('.book-details')) return;
    if (!_camera) return;

    raycaster.setFromCamera(mouse, _camera);
    const intersects = raycaster.intersectObjects(bookMeshes, true);

    if (intersects.length > 0) {
        const target = intersects[0].object.parent;
        if (target && target.userData.id !== undefined) {
            selectBook(target);
        }
    } else {
        deselectBook();
    }
}

export function updateFocus(row, col, shouldMoveCamera = false) {
    currentFocus = { row, col };
    if (!navigationGrid[row]) return;
    const mesh = navigationGrid[row][col];
    if (mesh) {
        selectBook(mesh);

        if (shouldMoveCamera && _camera && _controls) {
            const targetY = mesh.position.y;
            _controls.target.y = targetY;
            _camera.position.y = targetY;
        }
    }
}

function selectBook(mesh) {
    if (selectedBook === mesh) return;
    if (selectedBook) deselectBook();

    selectedBook = mesh;

    const targetPos = mesh.userData.originalPos.clone();
    targetPos.z += 4;
    targetPos.y += 0.5;

    const targetRot = new THREE.Euler(0, -Math.PI / 2, 0);

    mesh.userData.targetPos = targetPos;
    mesh.userData.targetRot = targetRot;
    mesh.userData.isAnimating = true;

    loadCoverTexture(mesh);

    if (booksData && booksData[mesh.userData.id]) {
        showDetails(booksData[mesh.userData.id]);
    }
}

function loadCoverTexture(mesh) {
    if (mesh.userData.id !== undefined && booksData[mesh.userData.id]) {
        const book = booksData[mesh.userData.id];
        ['CoverRight', 'CoverLeft'].forEach(partName => {
            const coverMesh = mesh.children.find(c => c.name === partName);
            if (coverMesh) {
                const coverMat = coverMesh.material;
                if (book.cover_url && !book.cover_url.includes('placehold.co') && !coverMat.map) {
                    const year = parseInt(book.year) || new Date().getFullYear();
                    const age = Math.max(0, new Date().getFullYear() - year);
                    const ageFactor = Math.min(age, 100) / 100;

                    const tint = new THREE.Color(1, 1, 1).lerp(new THREE.Color(0.85, 0.75, 0.6), ageFactor * 0.9);
                    coverMat.color.copy(tint);

                    const loader = new THREE.TextureLoader();
                    loader.load(book.cover_url, (texture) => {
                        texture.colorSpace = THREE.SRGBColorSpace;
                        coverMat.map = texture;
                        coverMat.needsUpdate = true;
                    });
                }
            }
        });
    }
}

function deselectBook() {
    if (window.coverLoadTimeout) clearTimeout(window.coverLoadTimeout);
    if (!selectedBook) return;

    const mesh = selectedBook;
    mesh.userData.targetPos = mesh.userData.originalPos;
    mesh.userData.targetRot = mesh.userData.originalRot;
    mesh.userData.isAnimating = true;

    selectedBook = null;
    hideDetails();
}

function showDetails(book) {
    // Ensure we scope to library-app
    const container = document.getElementById('library-app');
    if (!container) return;
    
    const el = container.querySelector('.book-details');
    if(!el) return;

    if (selectedBook && _camera) {
        const pos = selectedBook.position.clone();
        pos.project(_camera);
        if (pos.x > 0) {
            el.classList.add('position-left');
        } else {
            el.classList.remove('position-left');
        }
    }

    const titleEl = container.querySelector('#detail-title');
    if(titleEl) {
        titleEl.textContent = book.title;
        if (book.fontName) titleEl.style.fontFamily = `"${book.fontName}", sans-serif`;
        else titleEl.style.fontFamily = '';
    }
    
    const authorEl = container.querySelector('#detail-author');
    if(authorEl) authorEl.textContent = book.author;
    
    const yearEl = container.querySelector('#detail-year');
    if(yearEl) yearEl.textContent = book.year ? `Published: ${book.year}` : "";
    
    const reviewEl = container.querySelector('#detail-review');
    if(reviewEl) reviewEl.textContent = book.review ? `"${book.review}"` : "";

    const formattedDate = formatDate(book.date_read);
    const dateEl = container.querySelector('#detail-date');
    if(dateEl) dateEl.textContent = formattedDate ? `Read on: ${formattedDate}` : "";

    const ratingEl = container.querySelector('#detail-rating');
    if(ratingEl) ratingEl.textContent = '★'.repeat(book.rating) + '☆'.repeat(5 - book.rating);
    
    el.classList.remove('hidden');
}

function hideDetails() {
    const container = document.getElementById('library-app');
    if (container) {
        const el = container.querySelector('.book-details');
        if (el) el.classList.add('hidden');
    }
    if (selectedBook) deselectBook();
}

function checkScrollPosition() {
    if (!_camera) return;
    const y = _camera.position.y;
    const threshold = 3.0;
    const nearTop = Math.abs(y - scrollBounds.max) < threshold;
    const nearBottom = Math.abs(y - scrollBounds.min) < threshold;

    const header = document.querySelector('#library-app .header');
    if (header) {
        if (nearTop || nearBottom) {
            header.classList.remove('hidden');
        } else {
            header.classList.add('hidden');
        }
    }
    checkVisibleShelves();
}

function checkVisibleShelves() {
    if (!_camera || !navigationGrid || navigationGrid.length === 0) return;
    const camY = _camera.position.y;
    const viewHeight = 15;

    navigationGrid.forEach((row) => {
        if (!row || row.length === 0) return;
        const rowY = row[0].position.y;
        if (Math.abs(rowY - camY) < viewHeight) {
            const rightEnd = row[row.length - 1];
            loadCoverTexture(rightEnd);
        }
    });
}

let currentShelfIndex = 0;
export function moveShelf(direction) {
    if (!navigationGrid || navigationGrid.length === 0) return;
    if (!_camera || !_controls) return;

    let newIndex = currentShelfIndex + direction;
    newIndex = Math.max(0, Math.min(newIndex, navigationGrid.length - 1));
    if (newIndex === currentShelfIndex) return;

    currentShelfIndex = newIndex;
    const targetRow = navigationGrid[currentShelfIndex];
    if (targetRow && targetRow.length > 0) {
        const bookY = targetRow[0].position.y;
        const currentCamY = _camera.position.y;
        const currentTargetY = _controls.target.y;
        const offset = currentCamY - currentTargetY;
        animateCameraToY(bookY, offset);
    }
}

function animateCameraToY(targetY, currentOffset) {
    const startY = _controls.target.y;
    const dist = targetY - startY;
    const startTime = performance.now();
    const duration = 500;

    function update(time) {
        const elapsed = time - startTime;
        const t = Math.min(1, elapsed / duration);
        const ease = t * (2 - t);
        const newTargetY = startY + dist * ease;
        _controls.target.y = newTargetY;
        _camera.position.y = newTargetY + 5; 

        if (t < 1) {
            requestAnimationFrame(update);
        } else {
            _controls.target.y = targetY;
            _camera.position.y = targetY + 5;
            checkScrollPosition();
        }
    }
    requestAnimationFrame(update);
}
