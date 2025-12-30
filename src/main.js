import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import Papa from 'papaparse'
import { createBackground, animateBackground, createGradientBackground, animateGradient } from './background.js';
import { createBook } from './book.js';

// Setup
const scene = new THREE.Scene();
const clock = new THREE.Clock(); // For animation timing
// scene.background = new THREE.Color(0x020205); // Dark Space Background (Replaced by Gradient)

// HDR Environment
new HDRLoader()
    .load('/environment.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
    });

// Initialize Background
createGradientBackground(scene);
createBackground(scene);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

// Initialize Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Close Zoom
camera.position.set(0, 1.5, 1.2); 
camera.lookAt(0, 1.5, 0);
camera.lookAt(0, 1.5, 0);

// Initialize Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false; 
controls.enableRotate = false; // Disable Mouse Rotation
controls.enablePan = false;    // Disable Mouse Pan

// Window Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Global Animate Loop needs access to these
// Global Animate Loop needs access to these
// Global Animate Loop needs access to these
window.currentBookMesh = null;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

// Navigation State
let allBookMeshes = [];
let currentBookIndex = 0;
const SPACING_X = 1.2;

// Directional Flow State
let targetFlow = 0; // -1 (Left), 0 (Drag/Idle), 1 (Right)
let currentFlow = 0;

function animate() {
    requestAnimationFrame(animate);
    
    const elapsedTime = clock.getElapsedTime();

    controls.update();

    // Lerp flow
    // Decay to 0.1 (slow forward drift) if 0
    // If navigating, push to -2 or 2
    
    // We need to set targetFlow based on interaction
    // We'll update it in the navigation function
    
    // Simple decay back to idle
    const idleFlow = 0.5; // Always moving slowly right (or left)?
    // Let's settle to 0.5
    
    currentFlow += (targetFlow - currentFlow) * 0.05;
    // Decay targetFlow back to idle
    targetFlow += (idleFlow - targetFlow) * 0.02;

    // Animate Gradient Nebula with Direction
    if (typeof animateGradient === 'function') {
        animateGradient(elapsedTime, currentFlow);
    }
    
    if (typeof animateBackground === 'function') {
        animateBackground(camera);
    }
    
    // Idle Animation for Focused Book
    if (window.currentBookMesh && !isDragging) {
        // baseRotation is 0 usually.
        // We want a slow "breathing" rotation
        // Oscillation between -0.15 and 0.15 radians (~8 degrees)
        const idleAngle = Math.sin(elapsedTime * 0.8) * 0.15;
        
        // Add a slight permanent tilt so it's never perfectly flat (e.g., +0.1)
        const baseTilt = 0.2; 
        
        // Smoothly interp to this? Over-writing rotation directly might conflict 
        // if we have other logic, but currently we don't for idle.
        // We should lerp towards it for smoothness when switching books
        
        const targetRotY = baseTilt + idleAngle;
        
        // Lerp rotation
        // We access .y directly. 
        // Note: verify if currentBookMesh.rotation is Euler. Yes.
        window.currentBookMesh.rotation.y += (targetRotY - window.currentBookMesh.rotation.y) * 0.05;
    }
    
    // Smooth Camera Movement
    if (allBookMeshes.length > 0 && allBookMeshes[currentBookIndex]) {
        const targetBook = allBookMeshes[currentBookIndex];
        
        // Target position: centred on the book, slightly zoomed out
        const targetPos = new THREE.Vector3(
            targetBook.position.x,
            targetBook.position.y,
            targetBook.position.z + 0.9 // Distance from book
        );
        
        // Lerp camera position
        camera.position.lerp(targetPos, 0.05);
        
        // Lerp camera lookAt (target)
        // We want to look at the book center
        const currentLookAt = new THREE.Vector3();
        camera.getWorldDirection(currentLookAt);
        // This is a bit complex with OrbitControls active. 
        // Better to update controls.target if using OrbitControls, 
        // OR simply manually control camera if OrbitControls is disabled/limited.
        
        // Since we disabled OrbitControls keys/mouse largely, let's update the controls target 
        // so the camera pivots around the selected book if the user drags (if we allow that).
        
        const targetLookAt = new THREE.Vector3(
            targetBook.position.x,
            targetBook.position.y,
            targetBook.position.z
        );
        controls.target.lerp(targetLookAt, 0.05);
        controls.update();

        // Update global current mesh for rotation interaction
        window.currentBookMesh = targetBook;
        
        // Dynamic Scaling
        allBookMeshes.forEach((mesh, index) => {
            const isSelected = index === currentBookIndex;
            const targetScale = isSelected ? 1.0 : 0.7; // Scale others down
            
            // Lerp scale
            mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        });
    }

    renderer.render(scene, camera);
}

// Optimization: Texture Loading
function updateTextureWindow(currentIndex) {
    if (allBookMeshes.length === 0) return;
    
    // Load textures ONLY for the current book (Focus-only)
    const start = currentIndex;
    const end = currentIndex;
    
    for (let i = start; i <= end; i++) {
        const mesh = allBookMeshes[i];
        if (mesh.userData.loadTexture) {
            mesh.userData.loadTexture();
        }
    }
}

// Debounce Utility
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

const debouncedTextureUpdate = debounce((index) => {
    updateTextureWindow(index);
}, 200);


// Navigation Logic
function navigateToBook(index) {
    if (index < 0 || index >= allBookMeshes.length) return;
    
    currentBookIndex = index;
    const bookData = allBookMeshes[index].userData;
    
    if (bookData && bookData.id) {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('book', bookData.id);
        window.history.replaceState(null, '', newUrl);

        // Update Page Title
        if (bookData.title) {
            document.title = `Vik's Books | ${bookData.title}`;
        }
    }

    // Trigger Texture Loading (Debounced)
    debouncedTextureUpdate(index);
}

document.addEventListener('keydown', (e) => {
    if (allBookMeshes.length === 0) return;

    switch (e.key) {
        case 'ArrowRight':
            if (currentBookIndex + 1 < allBookMeshes.length) {
                navigateToBook(currentBookIndex + 1);
                targetFlow = -5.0; // Flow Left implies moving Right
            }
            break;
        case 'ArrowLeft':
            if (currentBookIndex - 1 >= 0) {
                navigateToBook(currentBookIndex - 1);
                targetFlow = 5.0; // Flow Right implies moving Left
            }
            break;
    }
});

// Event Listeners for Discrete Navigation
// Swipe Gestures Removed per user request (conflicts with book flipping)

// On-Screen Button Listeners
document.getElementById('nav-left').addEventListener('click', () => {
    if (currentBookIndex - 1 >= 0) {
        navigateToBook(currentBookIndex - 1);
        targetFlow = 5.0;
    }
});

document.getElementById('nav-right').addEventListener('click', () => {
     if (currentBookIndex + 1 < allBookMeshes.length) {
        navigateToBook(currentBookIndex + 1);
        targetFlow = -5.0;
    }
});

animate();

console.log('Three.js initialized');

const CSV_PATH = '/data.csv';

// Debug Mode Check
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
                console.log('Loaded books:', results.data.length);
                processBooks(results.data);
            }
        });
    });
} else {
    console.log("Debug Mode: Books disabled.");
}

function processBooks(data) {
    // 1. Filter Read Books
    const readBooks = data.filter(book => 
        (book['Exclusive Shelf'] === 'read' || !!book['Date Read']) && book['Date Read']
    );

    // 2. Sort by Date Read (Descending - Newest first)
    readBooks.sort((a, b) => {
        const d1 = new Date(a['Date Read']);
        const d2 = new Date(b['Date Read']);
        return d2 - d1;
    });

    console.log(`Processing ${readBooks.length} read books.`);

    // 3. Create Meshes & Grid Layout
    allBookMeshes = [];
    
    readBooks.forEach((book, index) => {
        const { mesh } = createBook(book);
        
        // Single Horizontal Row (Carousel)
        const xOffset = index * SPACING_X;
        const yOffset = 0; // Keep everything level
        
        mesh.position.set(xOffset, yOffset, 0);
        
        // Store metadata (Merge with existing userData)
        Object.assign(mesh.userData, { 
            id: book['Book Id'], 
            isbn: book['ISBN13'] || book['ISBN'],
            title: book['Title']
        });

        scene.add(mesh);
        allBookMeshes.push(mesh);
    });

    // 4. Handle Initial Selection from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');
    
    if (bookId) {
        const foundIndex = allBookMeshes.findIndex(m => m.userData.id === bookId);
        if (foundIndex !== -1) {
            currentBookIndex = foundIndex;
        }
    }
    
    // Ensure we have a valid start
    if (allBookMeshes.length > 0) {
        // Initial control target setup
        const startBook = allBookMeshes[currentBookIndex];
        controls.target.set(startBook.position.x, startBook.position.y, startBook.position.z);
        camera.position.set(startBook.position.x, startBook.position.y, startBook.position.z + 1.2);
        
        // Initial Load (Immediate)
        updateTextureWindow(currentBookIndex);
    }

    // Lighting tweaks for grid
    directionalLight.position.set(5, 5, 10);
}

// Remove old interaction setup or simplify it if we want tooltips?
// User didn't ask for tooltips now that info is on the book.
// We can remove it for clarity.
// Mouse Drag to Rotate Book Logic
document.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && window.currentBookMesh) {
        const deltaMove = {
            x: e.clientX - previousMousePosition.x,
            y: e.clientY - previousMousePosition.y
        };

        // Rotate book
        // Dragging horizontally (x) rotates around Y axis (yaw)
        // Dragging vertically (y) rotates around Z axis (roll) or X axis (pitch)?
        // Usually Pitch + Yaw.
        
        // Rotate around world Y axis for horizontal drag
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                0, // Disable Pitch (Mouse Y)
                toRadians(deltaMove.x * 1), // Yaw
                0,
                'XYZ'
            ));
        
        window.currentBookMesh.quaternion.multiplyQuaternions(deltaRotationQuaternion, window.currentBookMesh.quaternion);

        previousMousePosition = {
            x: e.clientX,
            y: e.clientY
        };
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

 

