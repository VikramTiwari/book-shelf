import * as THREE from 'three';
import { CONFIG } from './config.js';
import { scene } from './LibraryApp.js';
import { updateFocus, nudgeCamera } from './interaction.js';
import { createSpineTexture, getBookColor } from './spine.js';
import { createWoodTexture } from './utils.js';
import { buildShelfStructure, createShelfLabel } from './shelf.js';

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
        const rowBookProps = [];
        navigationGrid[rowIndex] = [];
        
        let rowBooks = rowBytes;
        // Skip processing books if it's a banner object
        if (!Array.isArray(rowBytes)) {
            // It's a banner, no books to render in this row loop
            // navigationGrid needs an entry though? Empty array is fine.
            return;
        }

        rowBooks.forEach(book => {
            let width = book.pages * CONFIG.pageThicknessMultiplier;
            width = Math.max(CONFIG.minBookWidth, Math.min(width, CONFIG.maxBookWidth));
            rowBookProps.push({ width, data: book });
            rowWidthTotal += width;
        });

        rowWidthTotal += (rowBooks.length - 1) * CONFIG.gap;
        let currentX = -rowWidthTotal / 2;

        rowBookProps.forEach((prop, i) => {
            const book = prop.data;
            const width = prop.width;

            if (startFocusPosition === null && book.shelf === 'currently-reading') {
                startFocusPosition = { row: rowIndex, col: i };
            }

            const height = CONFIG.bookHeight * (0.95 + Math.random() * 0.1);
            const depth = CONFIG.bookDepth;
            const coverThickness = 0.05;
            const paperMargin = 0.1;

            const group = new THREE.Group();

            const currentYear = new Date().getFullYear();
            const year = parseInt(book.year) || currentYear;
            const age = Math.max(0, currentYear - year);
            const ageFactor = Math.min(age, 100) / 100;

            let baseColor = getBookColor(book);
            const hsl = {};
            baseColor.getHSL(hsl);

            hsl.s *= (1 - ageFactor * 0.5); 
            hsl.l *= (1 - ageFactor * 0.3); 
            const spineColor = new THREE.Color().setHSL(hsl.h, hsl.s, hsl.l);

            const newPaper = new THREE.Color(0xfffff0);
            const oldPaper = new THREE.Color(0xd2b48c);
            const paperColor = newPaper.lerp(oldPaper, ageFactor * 0.7);

            const bookRoughness = 0.4 + (ageFactor * 0.5);

            const spineTexture = createSpineTexture(width, height, spineColor, book);
            const spineMatWithText = new THREE.MeshStandardMaterial({
                map: spineTexture,
                roughness: bookRoughness,
                metalness: 0.0,
                color: 0xffffff
            });

            const coverMat = new THREE.MeshStandardMaterial({ color: spineColor, roughness: bookRoughness });
            const paperMat = new THREE.MeshStandardMaterial({ color: paperColor, roughness: 0.9 });

            const spineGeo = new THREE.BoxGeometry(width, height, coverThickness);
            const spineMesh = new THREE.Mesh(spineGeo, spineMatWithText);
            spineMesh.position.z = depth / 2 - coverThickness / 2;
            spineMesh.name = 'Spine';
            spineMesh.castShadow = true;
            spineMesh.receiveShadow = true;
            group.add(spineMesh);

            const coverGeo = new THREE.BoxGeometry(coverThickness, height, depth - coverThickness);
            const coverRightMesh = new THREE.Mesh(coverGeo, coverMat);
            coverRightMesh.position.x = width / 2 - coverThickness / 2;
            coverRightMesh.position.z = -coverThickness / 2;
            coverRightMesh.name = 'CoverRight';
            coverRightMesh.castShadow = true;
            coverRightMesh.receiveShadow = true;
            group.add(coverRightMesh);

            const coverLeftMesh = new THREE.Mesh(coverGeo, coverMat);
            coverLeftMesh.position.x = -(width / 2 - coverThickness / 2);
            coverLeftMesh.position.z = -coverThickness / 2;
            coverLeftMesh.name = 'CoverLeft';
            coverLeftMesh.castShadow = true;
            coverLeftMesh.receiveShadow = true;
            group.add(coverLeftMesh);

            const paperWidth = width - (coverThickness * 2);
            const paperHeight = height - (paperMargin * 2);
            const paperDepth = depth - coverThickness;

            const paperGeo = new THREE.BoxGeometry(paperWidth, paperHeight, paperDepth);
            const paperMesh = new THREE.Mesh(paperGeo, paperMat);
            paperMesh.position.z = -coverThickness / 2;
            paperMesh.name = 'Paper';
            paperMesh.receiveShadow = true;
            group.add(paperMesh);

            const centerX = currentX + width / 2;
            const shelfIndexFromTop = rowIndex;
            const shelfIndexFromBottom = (rowsNeeded - 1) - shelfIndexFromTop;
            const sY = 1 + shelfIndexFromBottom * CONFIG.levelHeight;
            const yPos = sY + (CONFIG.shelfThickness / 2) + (height / 2);

            group.position.set(centerX, yPos, 0);
            group.rotation.y = 0;

            group.userData = {
                id: bookGlobalIndex,
                originalRot: group.rotation.clone(),
                originalPos: group.position.clone(),
                gridPos: { row: rowIndex, col: i }
            };

            shelfGroup.add(group);
            bookMeshes.push(group);
            navigationGrid[rowIndex].push(group);

            currentX += width + CONFIG.gap;
            bookGlobalIndex++;
        });
    });

    if (startFocusPosition) {
        updateFocus(startFocusPosition.row, startFocusPosition.col, true);
        // Nudge camera up to show banner
        nudgeCamera(CONFIG.levelHeight * 0.45); 
    } else if (navigationGrid.length > 0 && navigationGrid[0].length > 0) {
        updateFocus(0, 0, true);
    }
}
