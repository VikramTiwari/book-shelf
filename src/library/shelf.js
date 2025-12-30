import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CONFIG } from './config.js';
import { formatDate } from './utils.js';

export function buildShelfStructure(shelfGroup, rowsNeeded, totalHeight, liquidGlassMaterial) {
    // --- Build Shelf Structure ---
    // Helper to Apply Material with scaled texture
    // Helper to Apply Material with scaled texture
    const applyWoodMat = (w, h, mat) => {
        const m = mat.clone();
        m.map = mat.map.clone();

        // Aggressive texture variation
        // 1. Very low repeat to stretch texture (avoid tiling)
        // 2. Random rotation (0, 90, 180, 270 degrees)
        // 3. Random offset

        m.map.repeat.set(0.2, 0.2); // Just slight tiling if at all, mostly stretch
        m.map.offset.set(Math.random(), Math.random());
        m.map.center.set(0.5, 0.5);
        m.map.rotation = (Math.floor(Math.random() * 4) * Math.PI) / 2;

        return m;
    };

    // --- Build Shelf Structure ---




    const topGeo = new RoundedBoxGeometry(CONFIG.shelfWidth + 1, 0.2, CONFIG.shelfDepth + 0.2, 4, 0.05); // Thinner top
    // Top Panel: Dominant face is Width x Depth (viewed from top/bottom)
    const topMat = applyWoodMat(CONFIG.shelfWidth + 1, CONFIG.shelfDepth + 0.2, liquidGlassMaterial);

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
        const shelfMat = applyWoodMat(CONFIG.shelfWidth, CONFIG.shelfDepth, liquidGlassMaterial);

        const shelfMesh = new THREE.Mesh(shelfGeo, shelfMat);
        shelfMesh.position.y = sY;
        shelfMesh.receiveShadow = true;
        shelfGroup.add(shelfMesh);
    }
}

export function createShelfLabel(shelfGroup, rowBooks, yPos) {
    if (!rowBooks || rowBooks.length === 0) return;

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
