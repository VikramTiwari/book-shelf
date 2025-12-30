import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import Papa from 'papaparse'
import { createBackground, animateBackground } from './background.js';
import { createBook } from './book.js';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020205); // Dark Space Background

// HDR Environment
new HDRLoader()
    .load('/environment.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        // scene.background = texture; // Optional: Keep clean color background
    });

// Initialize Background
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
window.currentBookMesh = null;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

function animate() {
    requestAnimationFrame(animate);
    


    controls.update();

    // Animate Background
    // animateBackground(); // User added this in previous steps? Need to ensure import exists or comment out if module missing.
    // In Step 219 user added 'import { animateBackground } from ./background.js'.
    // So we should keep it.
    if (typeof animateBackground === 'function') {
        animateBackground();
    }
    

    renderer.render(scene, camera);
}

// Event Listeners for Discrete Navigation

animate();

console.log('Three.js initialized');

const CSV_PATH = '/data.csv';

fetch(CSV_PATH)
    .then(response => response.text())
    .then(csvText => {
        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                console.log('Loaded books:', results.data.length);
                processBooks(results.data);
            }
        });
    });

function processBooks(data) {
    const allBooksMeshes = [];

    // Find Most Recenty Read Book
    let mostRecentBook = null;
    
    // Filter for 'read' books manually
    const readBooks = data.filter(book => book['Exclusive Shelf'] === 'read' || !!book['Date Read']);

    if (readBooks.length > 0) {
        mostRecentBook = readBooks.reduce((latest, book) => {
             if (!latest) return book;
             const d1 = book['Date Read'] || '0000/00/00';
             const d2 = latest['Date Read'] || '0000/00/00';
             return d1.localeCompare(d2) > 0 ? book : latest;
        }, null);
    }

    if (!mostRecentBook) {
        console.warn("No 'read' books found.");
        return;
    }

    // Create Single Book
    // Use import
    const { mesh, thickness, height, width } = createBook(mostRecentBook);
    console.log("Rendering Book:", mostRecentBook.Title);
    console.log("Cover URL:", mostRecentBook.CoverUrl);
    
    scene.add(mesh);
    mesh.position.set(0, 0, 0);

    // Setup Interaction: Allow rotation
    // OrbitControls target at 0,0,0
    controls.target.set(0, 0, 0);
    controls.enableRotate = false; // Disable Camera Orbit (Custom drag logic handles book rotation)
    controls.enableZoom = false; 
    controls.enablePan = false;

    window.currentBookMesh = mesh;

    // Position Camera
    // View from Front (+Z)
    camera.position.set(0, 0, 0.9);
    camera.lookAt(0, 0, 0);
    
    controls.update();

    // Lighting tweaks for single book
    directionalLight.position.set(2, 2, 5);
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

 

