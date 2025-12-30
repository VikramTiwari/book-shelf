import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { loadAllBooks, getLibraryBooks } from '../common/data.js';
import { setupInteraction, moveShelf, updateFocus, deselectBook, toggleFlip } from './interaction.js';
import { bookMeshes, buildFullBookshelf } from './view.js';
import { preloadGenreFonts } from '../common/spine.js';
import { createGradientBackground, animateGradient, createBackground, animateBackground } from '../common/background.js';
import { animateBookIdle } from '../common/animation.js';
import './style.css';

export let scene, camera, renderer, controls;
let animationId;
let isActive = false;
let isInitialized = false;
let clock = new THREE.Clock();
let libraryBooksData = [];

const keys = { ArrowLeft: false, ArrowRight: false };

export function initLibrary() {
    if (isActive) {
        syncWithUrl();
        return;
    }
    isActive = true;

    // Inject HTML if not present
    const appContainer = document.getElementById('library-app');
    if (appContainer && appContainer.innerHTML.trim() === '') {
       appContainer.innerHTML = getLibraryHTML();
    }
    
    // Show container
    if (appContainer) appContainer.classList.remove('hidden');

    // If already initialized, just resume
    if (isInitialized) {
        animate();
        syncWithUrl();
        return;
    }

    const container = document.getElementById('library-canvas-container');
    if (!container) {
        console.error("Library container not found");
        return;
    }

    // 1. Setup Scene
    scene = new THREE.Scene();

    // Background
    scene.background = new THREE.Color('#111111');
    createGradientBackground(scene);
    createBackground(scene);

    // 2. Setup Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 12);

    // 3. Setup Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Setup Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffedd0, 1.2);
    dirLight.position.set(5, 10, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xb0e0e6, 0.5);
    fillLight.position.set(-5, 5, 10);
    scene.add(fillLight);

    const spotLight = new THREE.SpotLight(0xD4A373, 2);
    spotLight.position.set(-5, 8, 5);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    const shelfLight = new THREE.PointLight(0xffaa00, 1, 20);
    shelfLight.position.set(0, 5, 12);
    scene.add(shelfLight);

    // HDR Environment
    new RGBELoader()
        .setPath('') 
        .load('environment.hdr', function (texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            scene.environmentIntensity = 1.0;
        }, undefined, function (err) {
            console.warn('HDR not found.');
        });

    // 5. Setup Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.target.set(0, 0, 0);

    // 6. Interaction
    setupInteraction(camera, controls);

    // 7. Load Data & Build
    preloadGenreFonts().then(() => {
        loadAllBooks().then((allBooks) => {
             libraryBooksData = getLibraryBooks(allBooks);
             buildFullBookshelf(libraryBooksData);

             const urlParams = new URLSearchParams(window.location.search);
             const bookId = urlParams.get('book');
             if (bookId && libraryBooksData.length > 0) {
                 const index = libraryBooksData.findIndex(b => b.id === bookId);
                 if (index !== -1 && bookMeshes[index]) {
                     const mesh = bookMeshes[index];
                     if (mesh.userData && mesh.userData.gridPos) {
                         // Small delay to ensure camera is ready?
                         setTimeout(() => {
                            updateFocus(mesh.userData.gridPos.row, mesh.userData.gridPos.col, true);
                         }, 100);
                     }
                 }
             }
        });
    });

    // 8. Start Loop
    window.addEventListener('keydown', (e) => {
        if (!isActive) return;
        if (e.key === 'ArrowUp') {
            moveShelf(-1); // Up = Previous Index (Higher Y)
        } else if (e.key === 'ArrowDown') {
            moveShelf(1); // Down = Next Index (Lower Y)
        }

        if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
    });
    window.addEventListener('keyup', (e) => {
        if (!isActive) return;
        if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
    });

    // UI Listeners
    const navUpBtn = document.getElementById('nav-up');
    const navDownBtn = document.getElementById('nav-down');

    if (navUpBtn) navUpBtn.addEventListener('click', (e) => { e.stopPropagation(); moveShelf(-1); });
    if (navDownBtn) navDownBtn.addEventListener('click', (e) => { e.stopPropagation(); moveShelf(1); });

    isInitialized = true;
    animate();
}

export function stopLibrary() {
    isActive = false;
    cancelAnimationFrame(animationId);
    
    // Hide container
    const appContainer = document.getElementById('library-app');
    if (appContainer) appContainer.classList.add('hidden');
}

function animate() {
    if (!isActive) return;
    animationId = requestAnimationFrame(animate); 
    
    // Animate Background
    const time = clock.getElapsedTime();
    if (typeof animateGradient === 'function') {
        animateGradient(time, 0); // Direction 0 for now
    }
    if (typeof animateBackground === 'function') {
        animateBackground(camera);
    }

    controls.update();

    // Manual Camera Move (Orbit)
    if (keys.ArrowLeft || keys.ArrowRight) {
        const offset = camera.position.clone().sub(controls.target);
        const theta = (keys.ArrowLeft ? -1 : 1) * 0.02; // Rotate left or right

        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), theta);

        camera.position.copy(controls.target).add(offset);
    }

    bookMeshes.forEach(mesh => {
        if (mesh.userData.isAnimating && mesh.userData.targetPos) {
            mesh.position.lerp(mesh.userData.targetPos, 0.1);

            if (mesh.userData.targetScale) {
                mesh.scale.lerp(mesh.userData.targetScale, 0.1);
            }

            mesh.rotation.x += (mesh.userData.targetRot.x - mesh.rotation.x) * 0.1;
            mesh.rotation.y += (mesh.userData.targetRot.y - mesh.rotation.y) * 0.1;
            mesh.rotation.z += (mesh.userData.targetRot.z - mesh.rotation.z) * 0.1;

            if (mesh.position.distanceTo(mesh.userData.targetPos) < 0.01) {
                mesh.userData.isAnimating = false;
            }
        } else if (mesh.userData.isSelected) {
            // Idle Animation (Shared)
            const time = clock.getElapsedTime();
            animateBookIdle(mesh, time);
        }
    });

    renderer.render(scene, camera);
}

function getLibraryHTML() {
    return `
        <div class="header hidden">
            <h1 class="title">Vik's <span class="accent">Library</span></h1>
        </div>
        
        <!-- Navigation Controls -->
        <div class="nav-buttons">
            <button id="nav-up" class="nav-btn" aria-label="Previous Shelf">
                ▲
            </button>
            <button id="nav-down" class="nav-btn" aria-label="Next Shelf">
                ▼
            </button>
        </div>

        <div id="library-canvas-container"></div>
    `;
}

function syncWithUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    
    if (bookId && libraryBooksData && libraryBooksData.length > 0) {
         const index = libraryBooksData.findIndex(b => b.id === bookId);
         if (index !== -1 && bookMeshes[index]) {
              const mesh = bookMeshes[index];
              if (mesh.userData && mesh.userData.gridPos) {
                   updateFocus(mesh.userData.gridPos.row, mesh.userData.gridPos.col, true);
              }
         }
    } else {
        // Reset to default view (no selection, top of library)
        deselectBook();
        // Optionally reset camera to top?
        // if (controls && camera) {
        //     controls.target.set(0,0,0);
        //     camera.position.set(0, 5, 12);
        // }
    }
}
