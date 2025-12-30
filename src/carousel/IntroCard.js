import * as THREE from 'three';
import { formatDate } from '../library/utils.js'; // Re-using library utils if possible, or just standard Date

import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export function createIntroCard(books) {
    // 1. Calculate Stats
    const reading = books.filter(b => b.shelf === 'currently-reading').length;
    const toRead = books.filter(b => b.shelf === 'to-read').length;
    const readBooks = books.filter(b => b.shelf === 'read' || (!b.shelf && b.date_read));
    
    const readCount = readBooks.length;
    const totalCount = books.length;

    // Date Range (based on Read books)
    const allDates = readBooks.map(b => b.date_read || b.date_added || b.year).filter(d => d);
    let minYear = new Date().getFullYear();
    let maxYear = minYear;

    if (allDates.length > 0) {
        const years = allDates.map(d => new Date(d).getFullYear()).filter(y => !isNaN(y));
        if (years.length > 0) {
            minYear = Math.min(...years);
            maxYear = Math.max(...years);
        }
    }

    // 2. Dimensions (Match Book3D.js)
    const baseHeight = 0.35 * 2.25; 
    const baseWidth = 0.25 * 2.25; 
    const coverThickness = 0.008 * 1.5;
    const totalThickness = 0.15; 
    
    // 3. Geometries
    const coverGeo = new RoundedBoxGeometry(baseWidth, baseHeight, coverThickness, 4, 0.01);
    const spineGeo = new RoundedBoxGeometry(totalThickness, baseHeight, coverThickness, 4, 0.01);
    const pageIndentation = 0.01 * 1.5;
    const currPageWidth = baseWidth - pageIndentation; 
    const currPageHeight = baseHeight - (0.02 * 1.5); 
    const currPageThickness = totalThickness - (coverThickness * 2); 
    const pagesGeo = new RoundedBoxGeometry(currPageWidth, currPageHeight, currPageThickness, 4, 0.005);

    // 4. Textures
    const frontTex = createFrontTexture();
    const backTex = createBackTexture(reading, toRead, readCount, minYear, maxYear);
    const spineTex = createSpineTexture();

    // 5. Materials
    const matParams = { roughness: 0.8, metalness: 0.1 };
    const frontMat = new THREE.MeshStandardMaterial({ map: frontTex, ...matParams });
    const backMat = new THREE.MeshStandardMaterial({ map: backTex, ...matParams });
    const spineMat = new THREE.MeshStandardMaterial({ map: spineTex, ...matParams });
    const pagesMat = new THREE.MeshStandardMaterial({ color: 0xfdfbf7, roughness: 0.9, metalness: 0 });

    // 6. Assemble Group
    const group = new THREE.Group();

    // Front Cover
    const frontMesh = new THREE.Mesh(coverGeo, frontMat);
    frontMesh.position.z = totalThickness / 2;
    frontMesh.castShadow = true;
    frontMesh.receiveShadow = true;
    group.add(frontMesh);

    // Back Cover
    const backMesh = new THREE.Mesh(coverGeo, backMat);
    backMesh.position.z = -totalThickness / 2;
    backMesh.rotation.y = Math.PI;
    backMesh.castShadow = true;
    backMesh.receiveShadow = true;
    group.add(backMesh);

    // Spine
    const spineMesh = new THREE.Mesh(spineGeo, spineMat);
    spineMesh.position.x = -baseWidth / 2;
    spineMesh.rotation.y = -Math.PI / 2;
    spineMesh.castShadow = true;
    spineMesh.receiveShadow = true;
    group.add(spineMesh);

    // Pages
    const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat);
    pagesMesh.position.x = (pageIndentation * 0.5); 
    pagesMesh.castShadow = true;
    pagesMesh.receiveShadow = true;
    group.add(pagesMesh);

    group.userData = {
        id: 'intro',
        title: "Vik's Library",
        isIntro: true
    };

    return group;
}

function createFrontTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 800;
    const ctx = canvas.getContext('2d');
    const w = canvas.width; const h = canvas.height;

    // Background
    ctx.fillStyle = '#2c3e50'; // Deep Blue
    ctx.fillRect(0, 0, w, h);

    // Border
    ctx.strokeStyle = '#d4a373';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.textAlign = 'center';
    
    let y = 300;
    
    // "Vik's"
    ctx.fillStyle = '#fdfbf7'; // White
    ctx.font = 'bold 90px "Cormorant Garamond", serif'; 
    ctx.fillText("Vik's", w / 2, y);
    
    y += 110;
    
    // "Library"
    ctx.fillStyle = '#d4a373'; // Gold
    ctx.font = '90px "Dancing Script", cursive'; 
    ctx.fillText("Library", w / 2, y);
    
    // Decorative Line
    y += 150;
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.beginPath(); ctx.moveTo(w*0.3, y); ctx.lineTo(w*0.7, y); ctx.stroke();
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

function createBackTexture(reading, toRead, readCount, minYear, maxYear) {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 800;
    const ctx = canvas.getContext('2d');
    const w = canvas.width; const h = canvas.height;

    // Background
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, 0, w, h);

    // Border
    ctx.strokeStyle = '#d4a373';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.textAlign = 'center';
    
    let y = 150;

    // Header (Optional, maybe just start stats)
    // ctx.fillStyle = '#fdfbf7';
    // ctx.font = '40px "Dancing Script", cursive';
    // ctx.fillText("Stats", w / 2, y);
    // y += 100;

    // Helper for rows
    const drawRow = (label, value) => {
        ctx.fillStyle = '#d4a373';
        ctx.font = '30px "Montserrat", sans-serif';
        ctx.fillText(label.toUpperCase(), w / 2, y);
        y += 80;
        
        ctx.fillStyle = '#fdfbf7';
        ctx.font = 'bold 60px "Cormorant Garamond", serif';
        ctx.fillText(value.toString(), w / 2, y);
        y += 100;
    };

    drawRow("Currently Reading", reading);
    drawRow("To Read", toRead);
    drawRow("Read", readCount);

    y += 50;
    
    // Date Range
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = 'italic 30px "Cormorant Garamond", serif';
    let dateStr = `${minYear}`;
    if (minYear !== maxYear) dateStr += ` - ${maxYear}`;
    ctx.fillText(`Est. ${dateStr}`, w / 2, y);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}


function createSpineTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 800;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#1a252f'; // Darker spine
    ctx.fillRect(0, 0, 128, 800);
    
    // Gold Band
    ctx.fillStyle = '#d4a373';
    ctx.fillRect(0, 50, 128, 20);
    ctx.fillRect(0, 730, 128, 20);

    // Text Vertical?
    // Let's just keep it simple
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}
