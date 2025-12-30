import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import Papa from 'papaparse';
import { createBackground, animateBackground, createGradientBackground, animateGradient } from '../common/background.js';
import { createBook } from './book.js';

let scene, camera, renderer, controls, clock;
let allBookMeshes = [];
let currentBookIndex = 0;
let isActive = false;
let animationId;
let isInitialized = false;

// State
let targetFlow = 0;
let currentFlow = 0;
let targetRotationBase = 0.2;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
window.currentBookMesh = null; // Global for now

// DOM Elements
const appContainer = document.getElementById('app');
const uiControls = document.getElementById('ui-controls');

export function initCarousel() {
    if (isActive) return;
    isActive = true;
    
    // Show UI
    if (appContainer) appContainer.classList.remove('hidden');
    if (uiControls) {
        uiControls.querySelectorAll('.nav-btn:not(.view-toggle)').forEach(el => el.classList.remove('hidden'));
    }

    if (isInitialized) {
        animate();
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
    const CSV_PATH = '/data.csv';
    const urlParams = new URLSearchParams(window.location.search);
    const debugMode = urlParams.get('book') === '0';

    if (!debugMode) {
        Promise.all([
            fetch(CSV_PATH).then(response => response.text()),
            document.fonts.ready
        ]).then(([csvText]) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    processBooks(results.data);
                }
            });
        });
    }
}

function processBooks(data) {
    const readBooks = data.filter(book => 
        (book['Exclusive Shelf'] === 'read' || !!book['Date Read']) && book['Date Read']
    );

    readBooks.sort((a, b) => {
        const d1 = new Date(a['Date Read']);
        const d2 = new Date(b['Date Read']);
        return d2 - d1;
    });

    allBookMeshes = [];
    readBooks.forEach((book, index) => {
        const { mesh } = createBook(book);
        const xOffset = index * getSpacingX();
        mesh.position.set(xOffset, 0, 0);
        
        Object.assign(mesh.userData, { 
            id: book['Book Id'], 
            isbn: book['ISBN13'] || book['ISBN'],
            title: book['Title']
        });

        scene.add(mesh);
        allBookMeshes.push(mesh);
    });

    // Initial Selection
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    if (bookId) {
        const foundIndex = allBookMeshes.findIndex(m => m.userData.id === bookId);
        if (foundIndex !== -1) currentBookIndex = foundIndex;
    }

    if (allBookMeshes.length > 0) {
        const startBook = allBookMeshes[currentBookIndex];
        controls.target.set(startBook.position.x, startBook.position.y, startBook.position.z);
        camera.position.set(startBook.position.x, startBook.position.y, startBook.position.z + 1.2);
        updateTextureWindow(currentBookIndex);
    }
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
        const idleAngle = Math.sin(elapsedTime * 0.8) * 0.15;
        const targetRotY = targetRotationBase + idleAngle;
        window.currentBookMesh.rotation.y += (targetRotY - window.currentBookMesh.rotation.y) * 0.05;
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
    if (mesh.userData.loadTexture) mesh.userData.loadTexture();
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
    targetRotationBase = 0.2;
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
        const spacing = getSpacingX();
        allBookMeshes.forEach((mesh, index) => {
            mesh.position.x = index * spacing;
        });
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

    document.getElementById('nav-flip').addEventListener('click', () => {
        if (isActive) targetRotationBase += Math.PI;
    });

    // Mouse Drag
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
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(0, toRadians(deltaMove.x * 1), 0, 'XYZ'));
        window.currentBookMesh.quaternion.multiplyQuaternions(deltaRotationQuaternion, window.currentBookMesh.quaternion);
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}
