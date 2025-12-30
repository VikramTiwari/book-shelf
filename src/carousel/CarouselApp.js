import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { createBackground, animateBackground, createGradientBackground, animateGradient } from '../common/background.js';
import { createBook } from '../common/Book3D.js';
import { loadAllBooks, getCarouselBooks } from '../common/data.js';
import { animateBookIdle } from '../common/animation.js';
import { createIntroCard } from './IntroCard.js';

let scene, camera, renderer, controls, clock;
let allBookMeshes = [];
let currentBookIndex = 0;
let isActive = false;
let animationId;
let isInitialized = false;

// State
let targetFlow = 0;
let currentFlow = 0;
let targetRotationBase = 0.0;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
window.currentBookMesh = null; // Global for now

// DOM Elements
const appContainer = document.getElementById('app');
const uiControls = document.getElementById('ui-controls');

export function initCarousel() {
    if (isActive) {
        syncWithUrl();
        return;
    }
    isActive = true;
    
    // Show UI
    if (appContainer) appContainer.classList.remove('hidden');
    if (uiControls) {
        uiControls.querySelectorAll('.nav-btn:not(.view-toggle)').forEach(el => el.classList.remove('hidden'));
    }

    if (isInitialized) {
        animate();
        syncWithUrl();
        return;
    }

    // Setup
    scene = new THREE.Scene();
    clock = new THREE.Clock();

    // HDR Environment
    new HDRLoader()
        .setPath('/')
        .load('environment.hdr', function (texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
        });

    // Background
    createGradientBackground(scene);
    createBackground(scene);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.5, getCameraZ());
    camera.lookAt(0, 1.5, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    appContainer.innerHTML = ''; // Clear just in case
    appContainer.appendChild(renderer.domElement);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false; 
    controls.enableRotate = false;
    controls.enablePan = false;

    // Load Data
    loadData();

    // Event Listeners
    setupEventListeners();

    isInitialized = true;
    animate();
}

export function stopCarousel() {
    isActive = false;
    cancelAnimationFrame(animationId);
    
    // Hide UI
    if (appContainer) appContainer.classList.add('hidden');
    // Hide Nav buttons only, keep Toggle
    if (uiControls) {
        uiControls.querySelectorAll('.nav-btn:not(.view-toggle)').forEach(el => el.classList.add('hidden'));
    }
}

function loadData() {
    const urlParams = new URLSearchParams(window.location.search);
    const debugMode = urlParams.get('book') === '0';

    if (!debugMode) {
        Promise.all([
            loadAllBooks(),
            document.fonts.ready
        ]).then(([books]) => {
            const carouselBooks = getCarouselBooks(books);
            processBooks(carouselBooks, books);
        });
    }
}

// function loadData() ends at 124.

function processBooks(readBooks, allBooks = []) {
    allBookMeshes = [];
    
    // 1. Create Intro Card
    const introCard = createIntroCard(allBooks.length > 0 ? allBooks : readBooks);
    introCard.position.set(0, 0, 0); 
    
    scene.add(introCard);
    allBookMeshes.push(introCard);

    // 2. Create Books
    readBooks.forEach((book, index) => {
        const { mesh } = createBook(book);
        scene.add(mesh);
        allBookMeshes.push(mesh);
    });

    // 3. Layout All Items
    updateLayout();

    // Initial Selection
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    if (bookId) {
        const foundIndex = allBookMeshes.findIndex(m => m.userData.id === bookId);
        if (foundIndex !== -1) currentBookIndex = foundIndex;
    } else {
        // Default to Intro Card (Index 0)
        currentBookIndex = 0;
    }

    if (allBookMeshes.length > 0) {
        navigateToBook(currentBookIndex);
    }
}

function updateLayout() {
    const spacing = getSpacingX();
    allBookMeshes.forEach((mesh, index) => {
        const xOffset = index * spacing;
        mesh.position.set(xOffset, 0, 0);
    });
}

function animate() {
    if (!isActive) return;
    animationId = requestAnimationFrame(animate);
    
    const elapsedTime = clock.getElapsedTime();
    controls.update();

    currentFlow += (targetFlow - currentFlow) * 0.05;
    targetFlow += (0.5 - targetFlow) * 0.02;

    if (typeof animateGradient === 'function') animateGradient(elapsedTime, currentFlow);
    if (typeof animateBackground === 'function') animateBackground(camera);

    // Idle Anim
    if (window.currentBookMesh && !isDragging) {
        window.currentBookMesh.userData.baseRotationY = targetRotationBase;
        animateBookIdle(window.currentBookMesh, elapsedTime);
    }

    // Camera & Scaling
    if (allBookMeshes.length > 0 && allBookMeshes[currentBookIndex]) {
        const targetBook = allBookMeshes[currentBookIndex];
        const targetPos = new THREE.Vector3(
            targetBook.position.x,
            targetBook.position.y,
            targetBook.position.z + (window.innerWidth < 768 ? 2.2 : 0.9)
        );
        camera.position.lerp(targetPos, 0.05);

        const targetLookAt = new THREE.Vector3(targetBook.position.x, targetBook.position.y, targetBook.position.z);
        controls.target.lerp(targetLookAt, 0.05);
        
        window.currentBookMesh = targetBook;

        const isMobile = window.innerWidth < 768;
        const selectedScale = isMobile ? 1.6 : 1.0;
        const sideScale = isMobile ? 0.5 : 0.7;

        allBookMeshes.forEach((mesh, index) => {
            const isSelected = index === currentBookIndex;
            const targetScale = isSelected ? selectedScale : sideScale; 
            mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

            const targetZ = isSelected && isMobile ? 1.0 : 0.0;
            mesh.position.z += (targetZ - mesh.position.z) * 0.1;
        });
    }

    renderer.render(scene, camera);
}

function getCameraZ() {
    return window.innerWidth < 768 ? 1.4 : 1.2;
}

function getSpacingX() {
    return window.innerWidth < 768 ? 0.55 : 1.2;
}

function updateTextureWindow(currentIndex) {
    if (allBookMeshes.length === 0) return;
    const mesh = allBookMeshes[currentIndex];
    // Intro Card doesn't have loadTexture, ignore it
    if (mesh && mesh.userData && mesh.userData.loadTexture) {
        mesh.userData.loadTexture();
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
const debouncedTextureUpdate = debounce((index) => updateTextureWindow(index), 200);

function navigateToBook(index) {
    if (index < 0 || index >= allBookMeshes.length) return;
    currentBookIndex = index;
    targetRotationBase = 0.0;
    const bookData = allBookMeshes[index].userData;
    if (bookData && bookData.id) {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('book', bookData.id);
        window.history.replaceState(null, '', newUrl);
        if (bookData.title) document.title = `Vik's Books | ${bookData.title}`;
    }
    debouncedTextureUpdate(index);
}

function setupEventListeners() {
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        updateLayout();
    });

    document.addEventListener('keydown', (e) => {
        if (!isActive || allBookMeshes.length === 0) return;
        switch (e.key) {
            case 'ArrowRight':
                if (currentBookIndex + 1 < allBookMeshes.length) {
                    navigateToBook(currentBookIndex + 1);
                    targetFlow = -5.0;
                }
                break;
            case 'ArrowLeft':
                if (currentBookIndex - 1 >= 0) {
                    navigateToBook(currentBookIndex - 1);
                    targetFlow = 5.0;
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                targetRotationBase += Math.PI;
                break;
        }
    });

    document.getElementById('nav-left').addEventListener('click', () => {
        if (isActive && currentBookIndex - 1 >= 0) {
            navigateToBook(currentBookIndex - 1);
            targetFlow = 5.0;
        }
    });

    document.getElementById('nav-right').addEventListener('click', () => {
        if (isActive && currentBookIndex + 1 < allBookMeshes.length) {
            navigateToBook(currentBookIndex + 1);
            targetFlow = -5.0;
        }
    });



    // Mouse Drag & Click
    document.addEventListener('mousedown', (e) => {
        if (!isActive) return;
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mousemove', (e) => {
        if (!isActive || !isDragging || !window.currentBookMesh) return;
        const deltaMove = {
            x: e.clientX - previousMousePosition.x,
            y: e.clientY - previousMousePosition.y
        };
        // Only rotate if moved enough to be considered a drag? 
        // For now, immediate rotation is fine, but we need to distinguish click vs drag for flip.
        
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(0, toRadians(deltaMove.x * 1), 0, 'XYZ'));
        window.currentBookMesh.quaternion.multiplyQuaternions(deltaRotationQuaternion, window.currentBookMesh.quaternion);
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mouseup', (e) => {
        isDragging = false;
    });

    // Valid Click (Raycast)
    document.addEventListener('click', (e) => {
         if (!isActive) return;
         // Avoid flipping if we just dragged
         // Simple check: if mouse moved significantly, it was a drag, handled by mousemove.
         // But here we can just do a raycast. 
         // If the user dragged, the click event still fires usually unless we prevent it.
         // Let's rely on a small delta check or just 'isDragging' flag state? 
         // logic: mousedown sets drag=true. mousemove does stuff. mouseup sets drag=false.
         // click fires after mouseup.
         
         // Better approach: Record mousedown pos. If mouseup pos is same (or close), it's a click.
         // We don't have that state here easily without adding more vars.
         // Let's use a simpler heuristic for now: Raycast.
         
         const mouse = new THREE.Vector2();
         mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
         mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

         const raycaster = new THREE.Raycaster();
         raycaster.setFromCamera(mouse, camera);

         const intersects = raycaster.intersectObjects(allBookMeshes, true);
         if (intersects.length > 0) {
             // Find root object
             let target = intersects[0].object;
             while(target.parent && target.parent.type !== 'Scene') {
                 target = target.parent;
             }
             
             // If we clicked the CURRENT book, flip it
             if (window.currentBookMesh && target === window.currentBookMesh) {
                 // Check if it was a drag or static click? 
                 // If we want to be precise, we need StartPos.
                 // Let's implement a quick check in mousedown/up if we really need it.
                 // For now, let's just flip. If user drags slightly and releases, it might flip.
                 // To prevent annoyance, let's assume if they interact with the book they might want to flip it?
                 // Or we can check if the rotation changed significantly during "drag" phase?
                 targetRotationBase += Math.PI;
             } else {
                 // Clicked another book? Navigate to it?
                 const clickedIndex = allBookMeshes.indexOf(target);
                 if (clickedIndex !== -1 && clickedIndex !== currentBookIndex) {
                     navigateToBook(clickedIndex);
                 }
             }
         }
    });
}

function syncWithUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    if (bookId) {
         const foundIndex = allBookMeshes.findIndex(m => m.userData.id === bookId);
         if (foundIndex !== -1 && foundIndex !== currentBookIndex) {
             navigateToBook(foundIndex);
         }
    } else {
        // Reset to start if no book param
        if (currentBookIndex !== 0) {
            currentBookIndex = 0;
            // We need a reset function or just reuse logic
            // But navigateToBook(0) sets URL to ?book=... which we might not want if we want "landing page" clean URL.
            // Actually, if we are at landing page/root, maybe selecting 0 is fine but we don't want to enforce it?
            // "go back to the landing page setup" could mean just default camera with no book selected/focused.
            // But Carousel always has a "currentBookIndex" centered.
            // Assuming index 0 is fine, but maybe we shouldn't push state.
            // Let's just navigate to 0 for now but maybe avoid setting URL if it's clean?
            // But navigateToBook sets replaceState.
            // Let's modify navigateToBook or manually reset vars.
            targetFlow = 0;
            targetRotationBase = 0.0;
            
            // Manual Reset without URL update if possible, or just accept 0 is default.
            // If the user wants "landing page setup", it implies the state when you first load /carousel.
            // Which is index 0.
            if (allBookMeshes.length > 0) {
                 const startBook = allBookMeshes[0];
                 controls.target.set(startBook.position.x, startBook.position.y, startBook.position.z);
                 camera.position.set(startBook.position.x, startBook.position.y, startBook.position.z + 1.2);
                 updateTextureWindow(0);
            }
        }
    }
}

