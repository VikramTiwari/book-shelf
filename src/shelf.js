import * as THREE from 'three';
import { createBook } from './book.js';

export function createShelfUnit(scene, booksData, forcedWidth = null, skipBooks = false) {
    // Liquid Glass Material
    const shelfMaterial = new THREE.MeshPhysicalMaterial({  
        color: 0xffffff,
        transmission: 0.95, // Glass-like transmission
        opacity: 1,
        metalness: 0,
        roughness: 0.1, // Smooth
        ior: 1.5, // Refractive index of glass
        thickness: 0.1, // Volume
        specularIntensity: 1,
        envMapIntensity: 1,
        transparent: true
    });
    const shelfGroup = new THREE.Group();
    const booksMeshes = [];

    // Configuration
    const shelfDepth = 0.3;
    const shelfThickness = 0.05;
    const layerHeight = 0.4;
    
    let shelfWidth = forcedWidth;

    if (!shelfWidth) {
        // Dynamic Width Calculation (Fallback)
        let totalThickness = 0;
        booksData.forEach(b => {
            const numPages = parseInt(b['Number of Pages']) || 200;
            const t = Math.max(0.02, Math.min(0.08, numPages * 0.00015));
            totalThickness += t;
        });
        totalThickness += (booksData.length * 0.002);
        shelfWidth = Math.max(0.5, totalThickness * 1.05);
    }

    // Place Books first to determine tiers needed
    // We simulate placement to count tiers
    let currentTier = 0;
    let currentX = -shelfWidth / 2 + 0.05;
    const currentYBase = shelfThickness; 
    
    // We need to create meshes to know exact dimensions? 
    // createBook returns thickness.
    // Let's iterate and create.
    
    booksData.forEach(bookData => {
        const { mesh, thickness, height } = createBook(bookData);
        
        // Check fit
        if (currentX + thickness > shelfWidth/2 - 0.05) {
            currentTier++;
            currentX = -shelfWidth / 2 + 0.05;
        }
        
        const y = currentYBase + (currentTier * layerHeight);
        
        if (!skipBooks) {
            mesh.position.set(currentX + thickness/2, y + height/2, 0);
            shelfGroup.add(mesh);
            booksMeshes.push(mesh);
        }
        
        currentX += thickness + 0.002;
    });
    
    const totalTiers = currentTier + 1;
    const totalHeight = totalTiers * layerHeight;

    // Create Planks for each tier used
    // User requested to remove shelves from view
    /*
    for (let i = 0; i < totalTiers; i++) {
        const y = i * layerHeight;
        addPlank(shelfGroup, shelfMaterial, y, shelfWidth + 0.1, shelfDepth, shelfThickness);
    }
    */

    return { shelfGroup, books: booksMeshes, width: shelfWidth, height: totalHeight };
}

function addPlank(group, material, y, width, depth, thickness) {
    const geo = new THREE.BoxGeometry(width, thickness, depth);
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(0, y - thickness/2, 0);
    group.add(mesh);
}
