import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { loadBooks } from './data.js';
import { setupInteraction, moveShelf } from './interaction.js';
import { bookMeshes } from './view.js';
import { preloadGenreFonts } from './spine.js';
import { createGradientBackground, animateGradient } from '../common/background.js';
import './style.css';

export let scene, camera, renderer, controls;
let animationId;
let isActive = false;
let isInitialized = false;
let clock = new THREE.Clock();

const keys = { ArrowLeft: false, ArrowRight: false };

export function initLibrary() {
    if (isActive) return;
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
    createGradientBackground(scene);

    // 2. Setup Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 5, 12);

    // 3. Setup Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
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
        .setPath('/') 
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
        loadBooks();
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

            mesh.rotation.x += (mesh.userData.targetRot.x - mesh.rotation.x) * 0.1;
            mesh.rotation.y += (mesh.userData.targetRot.y - mesh.rotation.y) * 0.1;
            mesh.rotation.z += (mesh.userData.targetRot.z - mesh.rotation.z) * 0.1;

            if (mesh.position.distanceTo(mesh.userData.targetPos) < 0.01) {
                mesh.userData.isAnimating = false;
            }
        }
    });

    renderer.render(scene, camera);
}

function getLibraryHTML() {
    return `
        <div class="header hidden">
            <h1 class="title">Vik's <span class="accent">Library</span></h1>
        </div>
        <div id="library-canvas-container"></div>
        <div class="book-details hidden">
            <button class="close-btn">&times;</button>
            <div class="details-content">
                <h2 id="detail-title">Title</h2>
                <p id="detail-author">Author</p>
                <p id="detail-year" style="font-size: 0.9rem; color: #888; margin-bottom: 1rem;"></p>
                <div id="detail-rating"></div>
                <p id="detail-date"></p>
                <p id="detail-review">Review</p>
            </div>
        </div>
    `;
}
