import * as THREE from 'three';
import { createSpineTexture, createBackTexture } from './textures.js';

export function createBook(bookData) {
    const { Title, Author, "Number of Pages": pages, "My Rating": rating } = bookData;
    
    // Fixed dimensions for the single hero book
    const thickness = 0.06; 
    const height = 0.35; 
    const width = 0.25; 

    // Geometry
    const geometry = new THREE.BoxGeometry(thickness, height, width);

    // Random Color for base (if cover fails or for edges)
    const hue = Math.random();
    const saturation = 0.4 + Math.random() * 0.4;
    const lightness = 0.3 + Math.random() * 0.4;
    const color = new THREE.Color().setHSL(hue, saturation, lightness);

    // Textures
    const spineTexture = createSpineTexture(Title, color.getStyle(), rating);
    const backTexture = createBackTexture(bookData, color.getStyle());
    
    // Front Cover
    let coverTexture = new THREE.MeshStandardMaterial({ color: color });
    if (bookData.CoverUrl) {
         const loader = new THREE.TextureLoader();
         const tex = loader.load(bookData.CoverUrl);
         tex.colorSpace = THREE.SRGBColorSpace;
         coverTexture = new THREE.MeshStandardMaterial({ map: tex });
    }

    const materialPages = new THREE.MeshStandardMaterial({ color: 0xeeeedd }); 
    const materialSpine = new THREE.MeshStandardMaterial({ map: spineTexture });
    const materialBack = new THREE.MeshStandardMaterial({ map: backTexture });

    // BoxGeometry mapping:
    // 0: px (Right) -> Front Cover
    // 1: nx (Left) -> Back Info
    // 2: py (Top) -> Pages
    // 3: ny (Bottom) -> Pages
    // 4: pz (Front/Spine) -> Spine
    // 5: nz (Back/Edge) -> Pages
    
    const materials = [
        coverTexture,   // px (Front Cover)
        materialBack,   // nx (Back Info) 
        materialPages,  // py
        materialPages,  // ny
        materialSpine,  // pz (Spine)
        materialPages   // nz (Edge)
    ];

    const mesh = new THREE.Mesh(geometry, materials);
    
    // Store data
    mesh.userData = bookData;

    return { mesh, thickness, height, width };
}
