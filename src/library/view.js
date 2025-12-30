import * as THREE from 'three';
import { CONFIG } from './config.js';
import { scene } from './LibraryApp.js';
import { updateFocus, nudgeCamera } from './interaction.js';
import { createBook } from '../common/Book3D.js';
import { createShelfLabel, buildShelfStructure } from './shelf.js';

export let shelfGroup;
export let bookMeshes = [];
export let navigationGrid = [];
export let scrollBounds = { min: 0, max: 20 };

export function buildFullBookshelf(books) {
    if (shelfGroup) scene.remove(shelfGroup);
    shelfGroup = new THREE.Group();
    scene.add(shelfGroup);

    const urlParams = new URLSearchParams(window.location.search);
    const booksPerShelf = parseInt(urlParams.get('per_shelf')) || 10;

    // Futuristic Glass Material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, 
        metalness: 0.05,
        roughness: 0.02,
        transmission: 0.99,  
        thickness: 0.5,
        clearcoat: 1.0,
        ior: 1.5,
        transparent: true,
        opacity: 1.0
    });

    const rows = [];
    let currentRow = [];

    const getCategory = (b) => {
        if (b.shelf === 'currently-reading') return 'Reading';
        if (b.shelf === 'to-read') return 'To Read';
        return 'Read';
    };

    // Calculate Stats for Bottom Banner
    const stats = {
        count: books.length,
        minYear: '2020', // Default fallback
        maxYear: new Date().getFullYear()
    };
    
    // Dates
    const allDates = books.map(b => b.date_read || b.date_added).filter(d => d);
    if (allDates.length > 0) {
        allDates.sort();
        stats.minYear = new Date(allDates[0]).getFullYear();
        stats.maxYear = new Date(allDates[allDates.length - 1]).getFullYear();
    }


    books.forEach((book) => {
        if (currentRow.length >= booksPerShelf) {
            rows.push(currentRow);
            currentRow = [];
        }

        if (currentRow.length > 0) {
            const currentCat = getCategory(currentRow[0]);
            const newCat = getCategory(book);
            if (currentCat !== newCat) {
                rows.push(currentRow);
                currentRow = [];

                // Insert Banners
                if (newCat === 'Reading') {
                    // Above Reading -> Top Banner
                    rows.push({ type: 'banner_top' });
                } else if (currentCat === 'Reading') {
                    // Below Reading -> Bottom Banner
                    rows.push({ type: 'banner_bottom', stats: stats });
                } else if (currentCat === 'Reading' || newCat === 'Reading') {
                    // Fallback for safety if logic differs
                    rows.push([]); 
                }
            }
        }

        currentRow.push(book);
    });
    if (currentRow.length > 0) rows.push(currentRow);

    const rowsNeeded = rows.length;
    const totalHeight = Math.max(rowsNeeded * CONFIG.levelHeight, 20);

    const minShelfY = 1;
    const maxShelfY = 1 + (rowsNeeded - 1) * CONFIG.levelHeight;
    scrollBounds.min = minShelfY - 2;
    scrollBounds.max = maxShelfY + CONFIG.bookHeight + 2;

    buildShelfStructure(shelfGroup, rowsNeeded, totalHeight, glassMaterial);

    for (let r = 0; r < rowsNeeded; r++) {
        const sY = 1 + r * CONFIG.levelHeight;
        const rowIndex = (rowsNeeded - 1) - r;
        if (rows[rowIndex]) {
            createShelfLabel(shelfGroup, rows[rowIndex], sY);
        }
    }

    navigationGrid = [];
    bookMeshes = [];
    let bookGlobalIndex = 0;
    let startFocusPosition = null;

    rows.forEach((rowBytes, rowIndex) => {
        let rowWidthTotal = 0;
        navigationGrid[rowIndex] = [];
        
        let rowBooks = rowBytes;
        if (!Array.isArray(rowBytes)) {
            return;
        }

        // 1. Pre-calculate scaled dimensions and Create Books
        const rowBookProps = [];
        
        rowBooks.forEach(book => {
            // Create Book using Shared Component
            const { mesh, thickness: rawThickness, height: rawHeight } = createBook(book);

            // Determine Scale
            // Target height is CONFIG.bookHeight (approx 3.5)
            // Raw height is ~0.8.
            // Introduce some random size variation (0.95 - 1.05)
            const scaleFactor = (CONFIG.bookHeight / rawHeight) * (0.95 + Math.random() * 0.1);
            
            // Apply scale immediately
            mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);

            // Rotate appropriately for Library View
            mesh.rotation.y = Math.PI / 2;

            const scaledThickness = rawThickness * scaleFactor;
            
            rowBookProps.push({ 
                mesh, 
                data: book, 
                scaledThickness, 
                rawHeight, 
                scaleFactor 
            });
            
            rowWidthTotal += scaledThickness;
        });

        rowWidthTotal += (rowBooks.length - 1) * CONFIG.gap;
        let currentX = -rowWidthTotal / 2;

        rowBookProps.forEach((prop, i) => {
            const { mesh, data: book, scaledThickness, rawHeight, scaleFactor } = prop;

            if (startFocusPosition === null && book.shelf === 'currently-reading') {
                startFocusPosition = { row: rowIndex, col: i };
            }

            const centerX = currentX + scaledThickness / 2;
            const shelfIndexFromTop = rowIndex;
            const shelfIndexFromBottom = (rowsNeeded - 1) - shelfIndexFromTop;
            const sY = 1 + shelfIndexFromBottom * CONFIG.levelHeight;
            const yPos = sY + (CONFIG.shelfThickness / 2) + (rawHeight * scaleFactor) / 2; 

            mesh.position.set(centerX, yPos, 0);

            // Enhance userData
            mesh.userData = {
                ...mesh.userData, // Keep existing (book data, loadTexture)
                id: bookGlobalIndex,
                originalRot: mesh.rotation.clone(),
                originalPos: mesh.position.clone(),
                gridPos: { row: rowIndex, col: i },
                scaledThickness: scaledThickness 
            };

            shelfGroup.add(mesh);
            bookMeshes.push(mesh);
            navigationGrid[rowIndex].push(mesh);

            currentX += scaledThickness + CONFIG.gap;
            bookGlobalIndex++;
        });
    });

    if (startFocusPosition) {
        updateFocus(startFocusPosition.row, startFocusPosition.col, true);
        nudgeCamera(CONFIG.levelHeight * 0.45); 
    } else if (navigationGrid.length > 0 && navigationGrid[0].length > 0) {
        updateFocus(0, 0, true);
    }
}
