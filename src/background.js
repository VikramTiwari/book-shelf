import * as THREE from 'three';
import {
    createAtom, createDNA, createFlask,
    createCrystal, createSword, createShield,
    createCoin, createBriefcase, createChart,
    createSatellite, createUFO, createPlanet,
    createVirus, createPetriDish, createMushroom,
    createCompass, createScroll, createLantern,
    createMicrochip, createRobotHead, createFloppyDisk,
    createHeart, createRose, createRing,
    createToxicBarrel, createGear, createDrone,
    createMagnifyingGlass, createCamera, createWalkieTalkie,
    createGlobe, createAirplane, createPassport
} from './backgroundItems.js';

const backgroundMeshes = [];



export function createBackground(scene, count = 10) { // Reduced count for cleaner look
    const itemGenerators = [
        createAtom, createDNA, createFlask,
        createCrystal, createSword, createShield,
        createCoin, createBriefcase, createChart,
        createSatellite, createUFO, createPlanet,
        createVirus, createPetriDish, createMushroom,
        createCompass, createScroll, createLantern,
        createMicrochip, createRobotHead, createFloppyDisk,
        createHeart, createRose, createRing,
        createToxicBarrel, createGear, createDrone,
        createMagnifyingGlass, createCamera, createWalkieTalkie,
        createGlobe, createAirplane, createPassport
    ];

    for (let i = 0; i < count; i++) {
        const generator = itemGenerators[Math.floor(Math.random() * itemGenerators.length)];
        const mesh = generator();
        
        // Tunnel Distribution (Hyperspace)
        // Camera looks along -Z (from 0.9 to 0)
        // So background depth should be -Z axis.
        
        const radius = Math.random() * 30; 
        const angle = Math.random() * Math.PI * 2;
        
        // Depth is Z (start far behind)
        mesh.position.z = -20 - Math.random() * 80; 
        
        // Tunnel/Spread in X/Y plane
        mesh.position.x = Math.cos(angle) * radius; 
        mesh.position.y = Math.sin(angle) * radius; 
        
        // Random Rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        // Increase Scale
        mesh.scale.set(4.0, 4.0, 4.0);

        scene.add(mesh);
        backgroundMeshes.push(mesh);
    }
}

export function animateBackground() {
    backgroundMeshes.forEach(mesh => {
        // Rotate
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.005;
        
        // Move forward along Z (towards camera at 0.9)
        mesh.position.z += 0.05; 
        
        // Radial Expansion (Move away from center X/Y)
        mesh.position.x += mesh.position.x * 0.002;
        mesh.position.y += mesh.position.y * 0.002;

        // Respawn if passed camera (Camera is at z=0.9)
        if (mesh.position.z > 2) {
            mesh.position.z = -100;
            
            // Respawn Tightly at Center
            const radius = Math.random() * 5; 
            const angle = Math.random() * Math.PI * 2;
            
            mesh.position.x = Math.cos(angle) * radius;
            mesh.position.y = Math.sin(angle) * radius;
        }
    });
}
