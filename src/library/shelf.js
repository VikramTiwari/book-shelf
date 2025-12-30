import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CONFIG } from './config.js';
import { formatDate } from './utils.js';

export function buildShelfStructure(shelfGroup, rowsNeeded, totalHeight, liquidGlassMaterial) {
    // --- Build Shelf Structure ---
    // Helper to Apply Material with scaled texture
    // Helper to Apply Material with scaled texture
    const applyMat = (w, h, mat) => {
        const m = mat.clone();
        if (m.map) {
             m.map = mat.map.clone();
             m.map.repeat.set(0.2, 0.2); 
             m.map.offset.set(Math.random(), Math.random());
             m.map.center.set(0.5, 0.5);
             m.map.rotation = (Math.floor(Math.random() * 4) * Math.PI) / 2;
        }
        return m;
    };

    // --- Build Shelf Structure ---




    const topGeo = new RoundedBoxGeometry(CONFIG.shelfWidth + 1, 0.2, CONFIG.shelfDepth + 0.2, 4, 0.05); // Thinner top
    // Top Panel: Dominant face is Width x Depth (viewed from top/bottom)
    const topMat = applyMat(CONFIG.shelfWidth + 1, CONFIG.shelfDepth + 0.2, liquidGlassMaterial);

    const topPanel = new THREE.Mesh(topGeo, topMat);
    topPanel.position.y = totalHeight + 1;
    topPanel.castShadow = true;
    topPanel.receiveShadow = true;
    shelfGroup.add(topPanel);

    const baseGeo = new RoundedBoxGeometry(CONFIG.shelfWidth + 1, 0.5, CONFIG.shelfDepth + 0.2, 4, 0.05);
    const basePanel = new THREE.Mesh(baseGeo, topMat); // Reuse topMat (similar dims)
    basePanel.position.y = 0.5;
    basePanel.receiveShadow = true;
    shelfGroup.add(basePanel);

    for (let r = 0; r < rowsNeeded; r++) {
        const sY = 1 + r * CONFIG.levelHeight;
        const shelfGeo = new RoundedBoxGeometry(CONFIG.shelfWidth, CONFIG.shelfThickness, CONFIG.shelfDepth, 4, 0.075); // Radius 0.075
        // Shelf: Dominant face is Width x Depth
        const shelfMat = applyMat(CONFIG.shelfWidth, CONFIG.shelfDepth, liquidGlassMaterial);

        const shelfMesh = new THREE.Mesh(shelfGeo, shelfMat);
        shelfMesh.position.y = sY;
        shelfMesh.receiveShadow = true;
        shelfGroup.add(shelfMesh);
    }
}

export function createShelfLabel(shelfGroup, rowBooks, yPos) {
    if (!rowBooks || rowBooks.length === 0) return;

    if (Array.isArray(rowBooks) === false) {
        // Handle Banners
        // Handle Banners
        if (rowBooks.type === 'banner_top') {
            createBanner(shelfGroup, yPos, "Vik's Library", "160px", "Cormorant Garamond");
        } else if (rowBooks.type === 'banner_bottom' && rowBooks.stats) {
            const s = rowBooks.stats;
            const dateRange = s.minYear === s.maxYear ? `${s.minYear}` : `${s.minYear} - ${s.maxYear}`;
            // Multi-line text for bottom banner? Canvas drawing helper needed
            createStatsBanner(shelfGroup, yPos, s.count, dateRange);
        }
        return;
    }

    const categoryRaw = rowBooks[0].shelf;
    let category = "Read";
    let dateType = "date_read";

    if (categoryRaw === 'currently-reading') {
        category = "Currently Reading";
        dateType = "date_added";
    } else if (categoryRaw === 'to-read') {
        category = "To Read";
        dateType = "date_added";
    }

    let dates = rowBooks.map(b => b[dateType]).filter(d => d);
    let text = category;

    if (dates.length > 0) {
        dates.sort();
        const minDate = formatDate(dates[0]);
        const maxDate = formatDate(dates[dates.length - 1]);

        if (minDate && maxDate) {
            if (minDate === maxDate) text += ` (${minDate})`;
            else text += ` (${minDate} - ${maxDate})`;
        }
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 128;

    // Draw Background Plaque
    const bgWidth = 800;
    const bgHeight = 100;
    const bgX = (canvas.width - bgWidth) / 2;
    const bgY = (canvas.height - bgHeight) / 2;
    const radius = 20;

    ctx.fillStyle = 'rgba(15, 15, 20, 0.9)'; // Dark semi-transparent
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Glassy border
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.roundRect(bgX, bgY, bgWidth, bgHeight, radius);
    ctx.fill();
    ctx.stroke();

    // Text
    ctx.font = 'bold 40px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#f0f0f0'; // Brighter text
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(3, 0.4), material);
    mesh.position.y = yPos;
    mesh.position.z = CONFIG.shelfDepth / 2 + 0.02;
    mesh.scale.set(1, 1, 1);

    shelfGroup.add(mesh);
}

function createBanner(shelfGroup, yPos, textInput, fontSize, fontFace) {
    // "textInput" is ignored here to strictly match the requested "Vik's Library" header style
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 256; 

    // Draw Plaque
    const bgWidth = 800;
    const bgHeight = 150;
    const bgX = (canvas.width - bgWidth) / 2;
    const bgY = (canvas.height - bgHeight) / 2;
    // drawPlaque(ctx, bgX, bgY, bgWidth, bgHeight); // Removed per user request

    // Text Setup
    const text1 = "Vik's ";
    const text2 = "Library";
    
    // Font 1: Cormorant Garamond (White)
    const font1 = '600 160px "Cormorant Garamond", serif';
    // Font 2: Dancing Script (Accent Color)
    const font2 = '400 160px "Dancing Script", cursive';

    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Measure to center the combined string
    ctx.font = font1;
    const w1 = ctx.measureText(text1).width;
    ctx.font = font2;
    const w2 = ctx.measureText(text2).width;
    
    const totalWidth = w1 + w2;
    let startX = (canvas.width - totalWidth) / 2;
    const centerY = canvas.height / 2;

    // Draw "Vik's "
    ctx.font = font1;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text1, startX, centerY);

    // Draw "Library"
    ctx.font = font2;
    ctx.fillStyle = '#d4a373'; // --accent-color
    ctx.fillText(text2, startX + w1, centerY);

    addMeshToShelf(shelfGroup, canvas, yPos, 12, 3.0); 
}

function createStatsBanner(shelfGroup, yPos, count, range) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 256;

    // Draw Plaque
    const bgWidth = 900;
    const bgHeight = 150; // Slightly shorter without genres
    const bgX = (canvas.width - bgWidth) / 2;
    const bgY = (canvas.height - bgHeight) / 2;
    // drawPlaque(ctx, bgX, bgY, bgWidth, bgHeight); // Removed per user request

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#e0e0e0';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 4;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Line 1: Count & Date
    // Line 1: Count & Date
    ctx.font = 'bold 80px "Outfit", sans-serif'; 
    ctx.fillText(`${count} Books  •  ${range}`, centerX, centerY);

    addMeshToShelf(shelfGroup, canvas, yPos, 12, 3.0); // 3x Larger mesh
}

function drawPlaque(ctx, x, y, w, h) {
    const radius = 20;
    ctx.fillStyle = 'rgba(10, 10, 15, 0.8)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fill();
    ctx.stroke();
}

function addMeshToShelf(group, canvas, yPos, w, h) {
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
    
    // Sit on the shelf
    // yPos passed is the shelf center Y (sY).
    // Shelf top is yPos + CONFIG.shelfThickness/2
    // Mesh center y should be ShelfTop + h/2
    mesh.position.y = yPos + (CONFIG.shelfThickness / 2) + (h / 2);
    
    // Sit in middle of shelf depth or slightly forward?
    // Shelf depth is 4. Center is 0.
    mesh.position.z = 0; 
    
    // Lean back slightly like a photo frame
    mesh.rotation.x = -Math.PI / 12;

    group.add(mesh);
}
