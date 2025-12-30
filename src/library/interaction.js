import * as THREE from 'three';
import { camera, controls, renderer, scene } from './LibraryApp.js';
import { navigationGrid, bookMeshes, scrollBounds } from './view.js';
import { formatDate } from './utils.js';
import { CONFIG } from './config.js';

let currentFocus = { row: 0, col: 0 };
let selectedBook = null;
let isFlipped = false;
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
    if (event.target.closest('.nav-buttons')) return;
    if (!_camera) return;

    raycaster.setFromCamera(mouse, _camera);
    const intersects = raycaster.intersectObjects(bookMeshes, true);

    if (intersects.length > 0) {
        const target = intersects[0].object.parent;
        if (target && target.userData && target.userData.id !== undefined) {
             if (selectedBook === target) {
                 // Already selected, toggle flip
                 toggleFlip();
             } else {
                 // Select new book
                 selectBook(target);
             }
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

    // Front facing (0,0,0) - Show the cover
    const targetRot = new THREE.Euler(0, 0, 0);
    const targetScale = mesh.userData.originalScale.clone().multiplyScalar(1.3);
    
    mesh.userData.targetPos = targetPos;
    mesh.userData.targetRot = targetRot;
    mesh.userData.targetScale = targetScale;
    mesh.userData.isAnimating = true;
    mesh.userData.isSelected = true;
    isFlipped = false;



    loadCoverTexture(mesh);

    // Animate Book to Center of View
    // We want the book to move to where the camera is looking (controls.target.x)
    // The camera doesn't move, the book moves to it.
    if (_controls) {
        mesh.userData.targetPos.x = _controls.target.x;
    }

    // Use userData directly
    if (mesh.userData) {
        // Update URL
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('book', mesh.userData.id);
        window.history.replaceState(null, '', newUrl);
        if (mesh.userData.title) {
             document.title = `Vik's Books | ${mesh.userData.title}`;
        }
    }
}

function loadCoverTexture(mesh) {
    if (mesh.userData && typeof mesh.userData.loadTexture === 'function') {
        mesh.userData.loadTexture();
    }
}

export function deselectBook() {
    if (window.coverLoadTimeout) clearTimeout(window.coverLoadTimeout);
    if (!selectedBook) return;

    const mesh = selectedBook;
    mesh.userData.targetPos = mesh.userData.originalPos;
    mesh.userData.targetRot = mesh.userData.originalRot;
    mesh.userData.targetScale = mesh.userData.originalScale;
    mesh.userData.isAnimating = true;
    mesh.userData.isSelected = false;

    selectedBook = null;
    
    // Clear URL
    const newUrl = new URL(window.location);
    newUrl.searchParams.delete('book');
    window.history.replaceState(null, '', newUrl);
    document.title = "Vik's Books";

    isFlipped = false;
}

export function toggleFlip() {
    if (!selectedBook) return;
    
    isFlipped = !isFlipped;
    const mesh = selectedBook;
    
    // Target rotation: 0 if front strings, PI if back
    // Since we want to show the back cover, we rotate Y by 180 degrees (PI).
    // Original rotation was 0,0,0 relative to parent for display?
    // Actually in selectBook we set targetRot to (0,0,0).
    // So for flip, we want (0, Math.PI, 0).
    
    const targetRot = new THREE.Euler(0, isFlipped ? Math.PI : 0, 0);
    mesh.userData.targetRot = targetRot;
    mesh.userData.isAnimating = true; 
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
            // loadCoverTexture(rightEnd); // Disable pre-loading to ensure single-book loading policy
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

export function nudgeCamera(yAmount) {
    if (_camera && _controls) {
        _camera.position.y += yAmount;
        _controls.target.y += yAmount;
    }
}


