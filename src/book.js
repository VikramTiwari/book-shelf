import * as THREE from 'three';
import { createSpineTexture, createBackTexture, createCoverTexture } from './textures.js';
import { MATERIAL_STYLES, BOOK_PALETTE } from './materialData.js';

export function createBook(bookData) {
    const { Title, Author, "Number of Pages": pages, "My Rating": rating } = bookData;

    // Dimensions (Increased by 2.25x)
    const baseHeight = 0.35 * 2.25; // ~0.78
    const baseWidth = 0.25 * 2.25;  // ~0.56
    const totalThickness = 0.06 * 2.25; // ~0.13
    
    const coverThickness = 0.008 * 1.5; // Scaled thickness
    const pageIndentation = 0.01 * 1.5; // Scaled indent
    
    // Geometry Helper
    // We will build a Group
    const bookGroup = new THREE.Group();


    
    // Pick random style
    const styleIdx = Math.floor(Math.random() * MATERIAL_STYLES.length);
    const selectedStyle = MATERIAL_STYLES[styleIdx];

    // Pick random color from palette
    const colorHex = BOOK_PALETTE[Math.floor(Math.random() * BOOK_PALETTE.length)];
    const color = new THREE.Color(colorHex);
    
    // Base Material
    const coverMaterialBase = new THREE.MeshStandardMaterial({ 
        color: color, 
        roughness: selectedStyle.roughness, 
        metalness: selectedStyle.metalness 
    });

    // Textures
    // 1. Front Cover Texture
    let frontCoverMat = coverMaterialBase.clone();
    if (bookData.CoverUrl) {
        const loader = new THREE.TextureLoader();
        const tex = loader.load(bookData.CoverUrl);
        tex.colorSpace = THREE.SRGBColorSpace;
        frontCoverMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 });
    } else {
        // Fallback: Generate Procedural Cover
        const coverTex = createCoverTexture(bookData, color.getStyle(), selectedStyle.name);
        frontCoverMat = new THREE.MeshStandardMaterial({ 
            map: coverTex, 
            roughness: selectedStyle.roughness,
            metalness: selectedStyle.metalness
        });
    }

    // 2. Spine Texture
    const spineTexture = createSpineTexture(Title, color.getStyle(), rating, selectedStyle.name);
    const spineMat = new THREE.MeshStandardMaterial({ 
        map: spineTexture, 
        roughness: selectedStyle.roughness,
        metalness: selectedStyle.metalness
    });

    // 3. Back Texture
    const backTexture = createBackTexture(bookData, color.getStyle(), selectedStyle.name);
    const backCoverMat = new THREE.MeshStandardMaterial({ 
        map: backTexture, 
        roughness: selectedStyle.roughness,
        metalness: selectedStyle.metalness
    });

    // 4. Pages Material
    const pagesMat = new THREE.MeshStandardMaterial({ color: 0xfdfdfd, roughness: 0.9 }); 
    // Ideally use a texture for pages edge lines, but plain color is okay for now.

    // --- Meshes ---
    
    // 1. Front Cover (Board)
    // Position: +Z side
    const frontGeo = new THREE.BoxGeometry(baseWidth, baseHeight, coverThickness);
    const frontMesh = new THREE.Mesh(frontGeo, [
        coverMaterialBase, // px
        coverMaterialBase, // nx
        coverMaterialBase, // py
        coverMaterialBase, // ny
        frontCoverMat,     // pz (Front Face)
        coverMaterialBase  // nz
    ]);
    frontMesh.position.set(0, 0, (totalThickness / 2) - (coverThickness / 2));
    bookGroup.add(frontMesh);

    // 2. Back Cover (Board)
    // Position: -Z side
    const backGeo = new THREE.BoxGeometry(baseWidth, baseHeight, coverThickness);
    const backMesh = new THREE.Mesh(backGeo, [
        coverMaterialBase, // px
        coverMaterialBase, // nx
        coverMaterialBase, // py
        coverMaterialBase, // ny
        coverMaterialBase, // pz
        backCoverMat       // nz (Back Face)
    ]);
    backMesh.position.set(0, 0, -(totalThickness / 2) + (coverThickness / 2));
    bookGroup.add(backMesh);

    // 3. Spine (Board)
    // Connects Front and Back on the Left (-X) side
    // It should overlap the thickness gap.
    // Height = baseHeight
    // Thickness = totalThickness
    // Width = coverThickness (approx) or slightly curved. simple box for now.
    const spineGeo = new THREE.BoxGeometry(coverThickness, baseHeight, totalThickness);
    const spineMesh = new THREE.Mesh(spineGeo, [
        coverMaterialBase, // px (Inner side, hidden by pages)
        spineMat,          // nx (Outer Spine Face)
        coverMaterialBase, // py
        coverMaterialBase, // ny
        coverMaterialBase, // pz
        coverMaterialBase  // nz
    ]);
    // Position: At the left edge (-width/2)
    spineMesh.position.set(-(baseWidth / 2) + (coverThickness / 2), 0, 0);
    bookGroup.add(spineMesh);

    // 4. Page Block
    // Fits inside the covers. 
    // Width: baseWidth - coverThickness (starts at spine)
    // Height: baseHeight - 2*indent
    // Thickness: totalThickness - 2*coverThickness
    const pageWidth = baseWidth - coverThickness - pageIndentation;
    const pageHeight = baseHeight - (pageIndentation * 2);
    const pageThickness = totalThickness - (coverThickness * 2) - 0.001; // small epsilon to avoid z-fight

    const pagesGeo = new THREE.BoxGeometry(pageWidth, pageHeight, pageThickness);
    const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat);
    
    // Position:
    // X center: roughly 0 + shift. 
    // Pages start after spine. Spine is at -Width/2.
    // Actually, let's align simpler:
    // Left edge of pages touches spine.
    // Spine inner edge is at (-Width/2 + coverThickness).
    // So pages center X = (-Width/2 + coverThickness) + (pageWidth / 2).
    const pagesX = -(baseWidth / 2) + coverThickness + (pageWidth / 2);
    
    pagesMesh.position.set(pagesX, 0, 0);
    bookGroup.add(pagesMesh);

    // Store data
    bookGroup.userData = bookData;

    return { mesh: bookGroup, thickness: totalThickness, height: baseHeight, width: baseWidth };
}
