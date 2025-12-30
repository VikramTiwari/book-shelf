import * as THREE from 'three';
import {
    createAtom, createDNA, createFlask,
    createCrystal, createSword, createShield,
    createCoin, createBriefcase, createChart,
    createSatellite, createUFO, createPlanet,
    createVirus, createPetriDish, createMushroom,
    createCompass, createScroll, createLantern,
    createMicrochip, createRobotHead, createFloppyDisk,
    createHeart, createRose, createRing,
    createToxicBarrel, createGear, createDrone,
    createMagnifyingGlass, createCamera, createWalkieTalkie,
    createGlobe, createAirplane, createPassport
} from './backgroundItems.js';

const backgroundMeshes = [];

let gradientUniforms = null;
let targetDirection = 0;
let currentDirection = 0;

export function animateGradient(time, directionInput = 0) {
    if (gradientUniforms) {
        gradientUniforms.uTime.value = time * 0.2;
        
        // Smoothly lerp direction
        // If directionInput is provided (e.g. -1 or 1), set target
        // But we probably want to decay it back to a slow drift if no input?
        // Or keep it constant? User said "based on how user navigates". 
        // Let's assume constant slow drift, boosted by navigation.
        
        // Logic:
        // directionInput comes from main.js when keys are pressed? 
        // ACTUALLY: main.js should handle state. here we just take the value.
        // Let's expect 'directionInput' to be the current flow speed/dir.
        
        gradientUniforms.uDirection.value = directionInput;
    }
}

export function createGradientBackground(scene) {
    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        uniform float uDirection; // -1.0 to 1.0 (or higher for speed)
        varying vec2 vUv;
        
        // Simple Pseudo-Random Noise
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        // 2D Noise
        float noise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            // Four corners in 2D of a tile
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            // Smooth Interpolation
            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                    (c - a)* u.y * (1.0 - u.x) +
                    (d - b) * u.x * u.y;
        }

        // Rotation helper
        mat2 rotate2d(float _angle){
            return mat2(cos(_angle),-sin(_angle),
                        sin(_angle),cos(_angle));
        }

        void main() {
            // INTERSTELLAR BACKGROUND BASE
            vec3 spaceColor = vec3(0.01, 0.01, 0.03); 

            // SMOKE RIBBONS V11 - 10 OSCILLATING & COLOR SHIFTING
            // Complex Data Beam
            
            vec3 finalColor = spaceColor;
            
            // Shared UVs
            vec2 st = vUv;
            
            // Stars (Background Layer)
            float starNoise = noise(st * 50.0);
            float stars = smoothstep(0.95, 1.0, starNoise);
            float twinkle = sin(uTime * 5.0 + st.x * 10.0) * 0.5 + 0.5;
            finalColor += vec3(stars * twinkle);
            
            // Ribbon Logic - Procedural Loop
            vec3 smokeAccumulation = vec3(0.0);
            float globalFlow = uTime * 0.05 + (uDirection * uTime * 0.2);
            
            for (float i = 0.0; i < 10.0; i++) {
                // Determine Type: 0.0 = Ribbon (Even), 1.0 = Smoke (Odd)
                float isSmoke = mod(i, 2.0); // 0 or 1
                
                // Unique characteristics based on index
                float indexNorm = i / 10.0;
                
                // Direction Flip: Some go Left->Right (1.0), others Right->Left (-1.0)
                // We'll flip every 3rd one or based on hash
                float direction = (mod(i, 2.0) == 0.0) ? 1.0 : -1.0; 
                if (mod(i, 4.0) == 0.0) direction *= -1.0; // Mix it up
                
                // Base Y Position (Grouped around 0.5)
                // Smoke slightly wider spread than ribbons
                float spread = mix(0.08, 0.25, isSmoke);
                float yBase = 0.5 + (indexNorm - 0.5) * spread; 
                
                // Frequency & Speed
                float speedBase = mix(0.5, 0.2, isSmoke); 
                float speed = speedBase + (i * 0.1); 
                float freq = 2.0 + (i * 1.5);    
                
                // Oscillating Y Offset
                // Direction impacts phase direction too? Maybe not Y oscillation, just X flow.
                float hueOffset = mix(0.02, 0.1, isSmoke); 
                float oscillation = sin(uTime * speed + st.x * freq + (i * 10.0)) * hueOffset;
                
                // UVs for Noise & Flow
                // APPLY DIRECTION HERE
                float flowMult = mix(0.8, 0.4, isSmoke);
                
                // Global Flow is the base "User Navigation" drift.
                // We want: Native Movement (Direction) + User Drift (GlobalFlow)
                // Native: uTime * speed * direction
                
                float nativeFlow = uTime * 0.1 * direction * speed;
                
                // If moving opposite to user nav, they might speed up relative to cam or slow down?
                // Let's just add them.
                
                vec2 ribUv = vec2(st.x * (1.0 + indexNorm) - globalFlow * flowMult - nativeFlow, st.y);
                float noiseVal = noise(ribUv + vec2(i, uTime * 0.1));
                
                // Distance Field with Oscillation
                float noiseAmp = mix(0.01, 0.15, isSmoke); 
                float dist = abs(st.y - yBase - oscillation + noiseVal * noiseAmp);
                
                // Mask (Sharpness vs Softness)
                // Ribbon: 0.001 (Sharp) -> Smoke: 0.02 (Soft)
                float widthArg = mix(0.001, 0.02, isSmoke);
                float edgeArg  = mix(0.005, 0.08, isSmoke);
                
                float mask = 1.0 - smoothstep(widthArg, widthArg + edgeArg, dist);
                
                // Glow / Intensity
                // Ribbons have bloom, Smoke is just diffuse
                if (isSmoke < 0.5) {
                     // Ribbon Glow
                     mask += (1.0 - smoothstep(widthArg + 0.005, 0.03, dist)) * 0.4;
                }
                
                // Color Shifting
                // "Too Neony" -> Reduce saturation and brightness
                // Old: 0.5 + 0.5 * cos(...) -> Full Spectrum
                // New: 0.6 + 0.3 * cos(...) -> Pastel / Desaturated
                vec3 col = 0.6 + 0.3 * cos(uTime * 0.2 + (i * 0.6) + vec3(0.0, 2.0, 4.0));
                
                // Smoke is dimmer, Ribbons are now Soft Glowing (not Neon)
                // Reduced max intensity from 1.5 to 0.9 for ribbons
                float intensity = mix(0.9, 0.5, isSmoke);
                col *= intensity; 
                
                // Accumulate
                smokeAccumulation += col * mask * 0.6;
            }
            
            // Additive blending for "Glowing" look
            finalColor += smokeAccumulation;
            
            // Vignette
            vec2 centered = st - 0.5;
            finalColor *= (1.0 - length(centered) * 0.3);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    // Large sphere surrounding the scene
    const sphereGeo = new THREE.SphereGeometry(200, 64, 64);
    
    gradientUniforms = {
        uTime: { value: 0 },
        uDirection: { value: 0 }
    };

    const sphereMat = new THREE.ShaderMaterial({
         uniforms: gradientUniforms,
         vertexShader: vertexShader,
         fragmentShader: fragmentShader,
         side: THREE.BackSide
    });
    
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);
}


export function createBackground(scene, count = 10) { // Reduced count for cleaner look
    const itemGenerators = [
        createAtom, createDNA, createFlask,
        createCrystal, createSword, createShield,
        createCoin, createBriefcase, createChart,
        createSatellite, createUFO, createPlanet,
        createVirus, createPetriDish, createMushroom,
        createCompass, createScroll, createLantern,
        createMicrochip, createRobotHead, createFloppyDisk,
        createHeart, createRose, createRing,
        createToxicBarrel, createGear, createDrone,
        createMagnifyingGlass, createCamera, createWalkieTalkie,
        createGlobe, createAirplane, createPassport
    ];

    for (let i = 0; i < count; i++) {
        const generator = itemGenerators[Math.floor(Math.random() * itemGenerators.length)];
        const mesh = generator();
        
        // Tunnel Distribution (Hyperspace)
        // Camera looks along -Z (from 0.9 to 0)
        // So background depth should be -Z axis.
        
        const radius = Math.random() * 30; 
        const angle = Math.random() * Math.PI * 2;
        
        // Depth is Z (start far behind)
        mesh.position.z = -20 - Math.random() * 80; 
        
        // Tunnel/Spread in X/Y plane
        mesh.position.x = Math.cos(angle) * radius; 
        mesh.position.y = Math.sin(angle) * radius; 
        
        // Random Rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        // Increase Scale
        mesh.scale.set(4.0, 4.0, 4.0);

        scene.add(mesh);
        backgroundMeshes.push(mesh);
    }
}

export function animateBackground() {
    backgroundMeshes.forEach(mesh => {
        // Rotate
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.005;
        
        // Move forward along Z (towards camera at 0.9)
        mesh.position.z += 0.05; 
        
        // Radial Expansion (Move away from center X/Y)
        mesh.position.x += mesh.position.x * 0.002;
        mesh.position.y += mesh.position.y * 0.002;

        // Respawn if passed camera (Camera is at z=0.9)
        if (mesh.position.z > 2) {
            mesh.position.z = -100;
            
            // Respawn Tightly at Center
            const radius = Math.random() * 5; 
            const angle = Math.random() * Math.PI * 2;
            
            mesh.position.x = Math.cos(angle) * radius;
            mesh.position.y = Math.sin(angle) * radius;
        }
    });
}
