import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { createSpineTexture, createBackTexture, createCoverTexture, createPagesTexture } from './textures.js';
import { MATERIAL_STYLES, BOOK_PALETTE } from './materialData.js';

export function createBook(bookData) {
    const { Title, Author, "Number of Pages": pages, "My Rating": rating, "Original Publication Year": origYear, "Year Published": pubYear } = bookData;

    // --- Aging Logic ---
    const currentYear = new Date().getFullYear();
    let year = currentYear;
    if (origYear) year = parseInt(origYear);
    else if (pubYear) year = parseInt(pubYear);
    
    if (isNaN(year)) year = currentYear;
    const age = Math.max(0, currentYear - year);

    // Aging Stages Configuration
    // We interpolate between these keyframes based on Age
    // 10 thresholds as requested
    const AGE_STAGES = [
        { age: 0,   pageColor: 0xfdfdfd, roughnessBonus: 0.00, metalFactor: 1.0, dustMix: 0.00 }, // Brand New
        { age: 5,   pageColor: 0xfcfbf9, roughnessBonus: 0.02, metalFactor: 0.95, dustMix: 0.01 }, // Like New
        { age: 10,  pageColor: 0xfbf9f0, roughnessBonus: 0.05, metalFactor: 0.90, dustMix: 0.02 }, // Gently Used
        { age: 20,  pageColor: 0xf7f5e6, roughnessBonus: 0.10, metalFactor: 0.80, dustMix: 0.05 }, // Settled
        { age: 30,  pageColor: 0xf4eec0, roughnessBonus: 0.20, metalFactor: 0.70, dustMix: 0.10 }, // Well Read
        { age: 40,  pageColor: 0xf0e68c, roughnessBonus: 0.30, metalFactor: 0.60, dustMix: 0.20 }, // Vintage
        { age: 50,  pageColor: 0xe6d690, roughnessBonus: 0.40, metalFactor: 0.50, dustMix: 0.30 }, // Aged
        { age: 60,  pageColor: 0xdeb887, roughnessBonus: 0.50, metalFactor: 0.40, dustMix: 0.40 }, // Old
        { age: 80,  pageColor: 0xd2b48c, roughnessBonus: 0.65, metalFactor: 0.20, dustMix: 0.50 }, // Antique
        { age: 100, pageColor: 0x8b5a2b, roughnessBonus: 0.80, metalFactor: 0.00, dustMix: 0.65 }  // Ancient
    ];

    // Find surrounding stages
    let lower = AGE_STAGES[0];
    let upper = AGE_STAGES[AGE_STAGES.length - 1];
    
    for (let i = 0; i < AGE_STAGES.length - 1; i++) {
        if (age >= AGE_STAGES[i].age && age <= AGE_STAGES[i+1].age) {
            lower = AGE_STAGES[i];
            upper = AGE_STAGES[i+1];
            break;
        }
    }
    
    // Interpolate
    let t = 0;
    if (upper.age !== lower.age) {
        t = (age - lower.age) / (upper.age - lower.age);
    }
    t = Math.min(Math.max(t, 0), 1); // clamp

    const finalPageColor = new THREE.Color(lower.pageColor).lerp(new THREE.Color(upper.pageColor), t);
    const addedRoughness = lower.roughnessBonus + (upper.roughnessBonus - lower.roughnessBonus) * t;
    const metalMultiplier = lower.metalFactor + (upper.metalFactor - lower.metalFactor) * t;
    const dustAmount = lower.dustMix + (upper.dustMix - lower.dustMix) * t;

    // Dimensions (Increased by 2.25x)
    const baseHeight = 0.35 * 2.25; // ~0.78
    const baseWidth = 0.25 * 2.25;  // ~0.56
    
    // Dynamic Thickness based on Pages
    // Default 300 pages if missing
    const pageCount = parseInt(pages) || 300; 
    // Multiplier adjusted for visual scale (approx 0.00035 per page * 2.25 scale? No, direct units)
    // Previous fixed was ~0.135
    // 0.135 / 300 pages = 0.00045 per page
    let calculatedThickness = pageCount * 0.00045;
    
    // Clamp dimensions to avoid glitches
    const totalThickness = Math.min(Math.max(calculatedThickness, 0.04), 0.4); 
    
    const coverThickness = 0.008 * 1.5; // Scaled thickness
    const pageIndentation = 0.01 * 1.5; // Scaled indent
    
    // Geometry Helper
    // We will build a Group
    const bookGroup = new THREE.Group();

    // Deterministic Selection based on Title/ISBN
    // We use a salt to ensure Color is independent of Style
    const seed = Title + (bookData['ISBN'] || bookData['ISBN13'] || "");
    const styleHash = getStringHash(seed + "STYLE");
    const colorHash = getStringHash(seed + "COLOR");

    // Pick deterministic style
    const styleIdx = Math.abs(styleHash) % MATERIAL_STYLES.length;
    const selectedStyle = MATERIAL_STYLES[styleIdx];

    // Pick deterministic color from palette
    const colorIndex = Math.abs(colorHash) % BOOK_PALETTE.length;
    const colorHex = BOOK_PALETTE[colorIndex];
    const baseColor = new THREE.Color(colorHex);

    // Apply Dust / Fading to Base Color
    const dustColor = new THREE.Color(0x5a5a4a); // Brownish Grey
    const finalCoverColor = baseColor.clone().lerp(dustColor, dustAmount);

    // Calculate Final Material Props
    const finalRoughness = Math.min(1.0, selectedStyle.roughness + addedRoughness);
    const finalMetalness = Math.max(0.0, selectedStyle.metalness * metalMultiplier);

    // Base Material
    const coverMaterialBase = new THREE.MeshStandardMaterial({ 
        color: finalCoverColor, 
        roughness: finalRoughness, 
        metalness: finalMetalness 
    });

    // Textures
    // 1. Front Cover Texture
    let frontCoverMat = coverMaterialBase.clone();
    // Fallback or Initial Placeholder for Lazy Load
        // We pass the final faded color hex string
        const coverTex = createCoverTexture(bookData, finalCoverColor.getStyle(), selectedStyle.name, age);
        frontCoverMat = new THREE.MeshStandardMaterial({ 
            map: coverTex, 
            roughness: finalRoughness,
            metalness: finalMetalness
        });

    // 2. Spine Texture
    // Pass page count (default 0 or handled inside if missing?)
    // createSpineTexture signature: (title, color, rating, style, age, pages)
    const spineTexture = createSpineTexture(Title, finalCoverColor.getStyle(), rating, selectedStyle.name, age, pages);
    const spineMat = new THREE.MeshStandardMaterial({ 
        map: spineTexture, 
        roughness: finalRoughness,
        metalness: finalMetalness
    });

    // 3. Back Texture
    const backTexture = createBackTexture(bookData, finalCoverColor.getStyle(), selectedStyle.name, age, pages);
    const backCoverMat = new THREE.MeshStandardMaterial({ 
        map: backTexture, 
        roughness: finalRoughness,
        metalness: finalMetalness
    });

    // 4. Pages Material
    const pagesTexture = createPagesTexture(finalPageColor.getStyle(), age);
    const pagesMat = new THREE.MeshStandardMaterial({ 
        map: pagesTexture, 
        roughness: 0.9,
        metalness: 0 
    }); 

    // --- Meshes ---
    
    // 1. Cover (Front)
    const coverGeo = new RoundedBoxGeometry(baseWidth, baseHeight, coverThickness, 4, 0.01);
    const coverMesh = new THREE.Mesh(coverGeo, frontCoverMat);
    coverMesh.position.z = totalThickness / 2;
    coverMesh.castShadow = true;
    coverMesh.receiveShadow = true;
    bookGroup.add(coverMesh);

    // 2. Spine
    const spineGeo = new RoundedBoxGeometry(totalThickness, baseHeight, coverThickness, 4, 0.01);
    const spineMesh = new THREE.Mesh(spineGeo, spineMat);
    // Position Spine on the left edge
    spineMesh.position.x = -baseWidth / 2;
    // Rotate to face side
    spineMesh.rotation.y = -Math.PI / 2;
    spineMesh.castShadow = true;
    spineMesh.receiveShadow = true;
    bookGroup.add(spineMesh);

    // 3. Back Cover
    const backCoverGeo = new RoundedBoxGeometry(baseWidth, baseHeight, coverThickness, 4, 0.01);
    const backCoverMesh = new THREE.Mesh(backCoverGeo, backCoverMat);
    backCoverMesh.position.z = -totalThickness / 2;
    // Rotate to face backwards
    backCoverMesh.rotation.y = Math.PI; 
    backCoverMesh.castShadow = true;
    backCoverMesh.receiveShadow = true;
    bookGroup.add(backCoverMesh);

    // 4. Pages (Block)
    // Slightly smaller than cover
    const currPageWidth = baseWidth - pageIndentation; // Width reduced by indent
    const currPageHeight = baseHeight - (0.02 * 1.5); // Top/Bottom margins
    const currPageThickness = totalThickness - (coverThickness * 2); // Inside covers

    const pagesGeo = new RoundedBoxGeometry(currPageWidth, currPageHeight, currPageThickness, 4, 0.005);
    const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat);
    // Shift pages slightly right so they don't poke through spine, and slightly inset
    pagesMesh.position.x = (baseWidth - currPageWidth) / 2 - (pageIndentation / 2); // Centered visuals
    // actually, spine is at -baseWidth/2. 
    // If Pages width = baseWidth - indent.
    // We want pages right edge aligned with cover right edge? or inset?
    // Let's settle for simple centering offset by indentation from spine.
    pagesMesh.position.x = 0 + (pageIndentation * 0.5); 
    
    pagesMesh.castShadow = true;
    pagesMesh.receiveShadow = true;
    bookGroup.add(pagesMesh);

    // Store data & lazy load function
    bookGroup.userData = {
        ...bookData,
        isTextureLoaded: false,
        loadTexture: () => {
            if (bookGroup.userData.isTextureLoaded || !bookData.CoverUrl) return;
            
            // Mark as loaded to prevent duplicate calls
            bookGroup.userData.isTextureLoaded = true;

            const loader = new THREE.TextureLoader();
            loader.load(bookData.CoverUrl, (tex) => {
                tex.colorSpace = THREE.SRGBColorSpace;
                
                // Recalculate material properties for image
                const visualRoughness = Math.min(1.0, 0.5 + addedRoughness);
                const newMat = coverMesh.material.clone(); 
                
                newMat.map = tex;
                newMat.roughness = visualRoughness;
                newMat.metalness = 0;
                
                // Apply Age Tinting
                if (age > 40) newMat.color.setHex(0xfffff0);
                if (age > 80) newMat.color.lerp(new THREE.Color(0xc0b090), 0.2);
                
                coverMesh.material = newMat;
                coverMesh.material.needsUpdate = true;
            });
        }
    };

    return { mesh: bookGroup, thickness: totalThickness, height: baseHeight, width: baseWidth };
}

// Simple String Hash
function getStringHash(str) {
    let hash = 0;
    if (!str || str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
