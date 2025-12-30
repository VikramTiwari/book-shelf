import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { createCoverTexture, createBackTexture, createPagesTexture } from './textures.js';
import { createSpineTexture, getBookColor, getBookMaterial } from './spine.js';
import { MATERIAL_STYLES } from './materialData.js';

export function createBook(bookData) {
    // bookData is the normalized object from common/data.js
    const { title, author, year: yearStr, pages, rating, cover_url } = bookData;

    // --- Aging Logic ---
    const currentYear = new Date().getFullYear();
    const year = parseInt(yearStr) || currentYear;
    const age = Math.max(0, currentYear - year);

    // Aging Stages Configuration
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

    // Dimensions (Standard Visual Scale)
    const baseHeight = 0.35 * 2.25; // ~0.78
    const baseWidth = 0.25 * 2.25;  // ~0.56
    
    // Dynamic Thickness based on Pages
    const pageCount = parseInt(pages) || 300; 
    let calculatedThickness = pageCount * 0.00045;
    const totalThickness = Math.min(Math.max(calculatedThickness, 0.04), 0.4); 
    
    const coverThickness = 0.008 * 1.5; 
    const pageIndentation = 0.01 * 1.5; 
    
    const bookGroup = new THREE.Group();

    // Determine Logic
    const baseColor = getBookColor(bookData); // From spine.js logic
    const visualMaterialType = getBookMaterial(bookData); // 'Leather', 'Cloth', 'Buckram', 'Paper'

    // Map visual material to physical properties
    let physicalStyleName = 'Matte'; // Default
    if (visualMaterialType === 'Leather') physicalStyleName = 'Leather';
    else if (visualMaterialType === 'Cloth') physicalStyleName = 'Fabric';
    else if (visualMaterialType === 'Buckram') physicalStyleName = 'Canvas';
    else if (visualMaterialType === 'Paper') physicalStyleName = 'Matte';

    // Find style object
    const selectedStyle = MATERIAL_STYLES.find(s => s.name === physicalStyleName) || MATERIAL_STYLES[0];

    // Apply Dust / Fading
    const dustColor = new THREE.Color(0x5a5a4a); 
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
    
    // Create Placeholder/Generative Cover
    // Use visualMaterialType for the pattern style to match spine
    const coverTex = createCoverTexture(bookData, finalCoverColor.getStyle(), visualMaterialType, age);
    frontCoverMat = new THREE.MeshStandardMaterial({ 
        map: coverTex, 
        roughness: finalRoughness,
        metalness: finalMetalness
    });

    // 2. Spine Texture
    // We pass (width, height) to createSpineTexture.
    // The spine geometry is `totalThickness` wide and `baseHeight` tall.
    // We want mapped resolution to be high enough.
    // Let's pass the physical aspect ratio?
    // createSpineTexture(width, height) -> aspect = width/height.
    // Ideally we pass ~totalThickness and ~baseHeight so aspect is correct.
    const spineTexture = createSpineTexture(totalThickness, baseHeight, finalCoverColor, bookData, visualMaterialType);
    const spineMat = new THREE.MeshStandardMaterial({ 
        map: spineTexture, 
        roughness: finalRoughness,
        metalness: finalMetalness
    });

    // 3. Back Texture
    const backTexture = createBackTexture(bookData, finalCoverColor.getStyle(), visualMaterialType, age, pages, finalPageColor);
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
    const currPageWidth = baseWidth - pageIndentation; 
    const currPageHeight = baseHeight - (0.02 * 1.5); 
    const currPageThickness = totalThickness - (coverThickness * 2); 

    const pagesGeo = new RoundedBoxGeometry(currPageWidth, currPageHeight, currPageThickness, 4, 0.005);
    const pagesMesh = new THREE.Mesh(pagesGeo, pagesMat);
    // Shift pages slightly right (inset from spine)
    pagesMesh.position.x = 0; // Centered on Group?
    // Group center (0,0,0) is center of book volume?
    // Spine is at -baseWidth/2. Front Cover at Z=+Thickness/2. Back at Z=-Thickness/2.
    // Base Width centers cover at 0. So left edge is -baseWidth/2. Right edge is +baseWidth/2.
    // Pages should start after spine and end near right edge.
    // Pages should be roughly centered betweencovers (Z=0).
    // X Position:
    // Spine at -baseWidth/2.
    // Pages width = baseWidth - indent.
    // If we center pages at 0, Left edge is -width/2. Right is +width/2.
    // -width/2 = -(baseWidth - indent)/2 = -baseWidth/2 + indent/2.
    // So pages left edge is displaced by indent/2 from spine. Correct.
    pagesMesh.position.x = (pageIndentation * 0.5); 
    
    pagesMesh.castShadow = true;
    pagesMesh.receiveShadow = true;
    bookGroup.add(pagesMesh);

    // Store data & lazy load function
    bookGroup.userData = {
        ...bookData,
        isTextureLoaded: false,
        loadTexture: () => {
            if (bookGroup.userData.isTextureLoaded) return;
            
            // Prefer array of URLs, fallback to single, or empty
            const urls = bookData.cover_urls && bookData.cover_urls.length > 0 ? bookData.cover_urls : (cover_url ? [cover_url] : []);
            
            if (urls.length === 0) return;
            
            bookGroup.userData.isTextureLoaded = true; // Prevent re-entry

            const loader = new THREE.TextureLoader().setCrossOrigin('anonymous');
            
            let attemptIndex = 0;

            const tryLoad = (url) => {
                loader.load(
                    url, 
                    (tex) => {
                         // Check size
                        if (tex.image.width < 10 || tex.image.height < 10) {
                            console.warn(`Cover image for ${title} is too small (${tex.image.width}x${tex.image.height}), trying next...`);
                            attemptNext();
                            return;
                        }

                        // Success! Apply texture
                        tex.colorSpace = THREE.SRGBColorSpace;
                        const visualRoughness = Math.min(1.0, 0.5 + addedRoughness);
                        const newMat = coverMesh.material.clone(); 
                        
                        newMat.map = tex;
                        newMat.roughness = visualRoughness;
                        newMat.metalness = 0;
                        
                        // Age Tinting
                        if (age > 40) newMat.color.setHex(0xfffff0);
                        if (age > 80) newMat.color.lerp(new THREE.Color(0xc0b090), 0.2);
                        
                        coverMesh.material = newMat;
                        coverMesh.material.needsUpdate = true;
                    },
                    undefined,
                    (err) => {
                        console.warn(`Texture load failed for ${title} (${url})`, err);
                        attemptNext();
                    }
                );
            };

            const attemptNext = () => {
                attemptIndex++;
                if (attemptIndex < urls.length) {
                    tryLoad(urls[attemptIndex]);
                } else {
                    // All failed, keep procedural
                    console.warn(`All cover URLs failed for ${title}`);
                }
            };

            // Start first attempt
            tryLoad(urls[0]);
        }
    };

    return { mesh: bookGroup, thickness: totalThickness, height: baseHeight, width: baseWidth };
}
