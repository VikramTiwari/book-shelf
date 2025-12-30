import * as THREE from 'three';
import { backgroundItemGenerators } from './backgroundItems.js';

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


export function createBackground(scene, count = 10) {
    // Only 10 items as requested, matching the 10 ribbons/smoke trails
    const finalCount = 10;
    
    const itemGenerators = backgroundItemGenerators;

    // Shuffle generators to ensure uniqueness
    const shuffledGenerators = [...itemGenerators].sort(() => 0.5 - Math.random());

    for (let i = 0; i < finalCount; i++) {
        const generator = shuffledGenerators[i % shuffledGenerators.length];
        const mesh = generator();
        
        // --- Match Shader Logic Properties 'i' ---
        // We assign each item to a "track" or "ribbon" index 'i'
        
        // 1. Determine Type: Ribbon (Even) vs Smoke (Odd)
        const isSmoke = i % 2; 

        // 2. Direction
        let dir = (i % 4 === 0) ? -1.0 : 1.0; // Alternate flow direction logic from shader
        // Shader: float direction = (mod(i, 2.0) == 0.0) ? 1.0 : -1.0; if (mod(i, 4.0) == 0.0) direction *= -1.0;
        // Let's simplified/match: 
        // i=0: 1 * -1 = -1
        // i=1: -1
        // i=2: 1
        // i=3: -1
        // Actually let's just use explicit params to look good in 3D space
        // We want them flowing Left<->Right
        const flowDir = (i % 2 === 0) ? 1 : -1; 

        // 3. Y-Base (Vertical Center)
        // Shader: float spread = mix(0.08, 0.25, isSmoke); 
        // UV 0.5 is center. In 3D at Z=-5, Y=1.5 is roughly center of camera look?
        // Camera is at Y=1.5. So 3D Y should be around 1.5.
        // We spread them vertically
        const spreadY = isSmoke ? 3.0 : 1.5; 
        const yBase = 1.5 + (Math.random() - 0.5) * spreadY;

        // 4. Speed
        const speedBase = isSmoke ? 0.3 : 0.5; // Reduced from 1.5/2.5
        const speed = (speedBase + Math.random() * 0.2) * flowDir;

        // 5. Z Depth
        // Keep them behind the books defined plane.
        // Books are at Z=0. Camera at Z=1.2.
        // Background Sphere is far.
        // Let's put these items floating in the mid-distance.
        const zDepth = -3 - Math.random() * 5; // -3 to -8

        // Initial Position
        mesh.position.x = (Math.random() - 0.5) * 20; // Spread wide initially
        mesh.position.y = yBase;
        mesh.position.z = zDepth;

        // Rotation Speed
        mesh.userData = {
            velocity: new THREE.Vector3(speed, 0, 0),
            rotSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            },
            oscillation: {
                freq: 0.5 + Math.random(),
                amp: 0.2 + Math.random() * 0.3,
                phase: Math.random() * Math.PI * 2
            },
            yBase: yBase
        };

        // Scale
        // Make them visible but not overwhelming
        // Shader has them as "part of the flow".
        mesh.scale.set(0.5, 0.5, 0.5);

        scene.add(mesh);
        backgroundMeshes.push(mesh);
    }
}

export function animateBackground(camera) {
    if (!camera) return;

    // Current time approximation (could pass in global time for perfect sync)
    const time = Date.now() * 0.001;
    
    // View Width (approximate coverage needed)
    // Camera is at z ~ 2.2 dist (1.2 + book z). Background items are at z ~ -5.
    // Frustum width at z=-5 is roughly:
    // tan(fov/2) * dist * 2 * aspect. 
    // FOV 75, dist ~ 7. 
    // tan(37.5) ~ 0.76. Width ~ 0.76 * 7 * 2 * aspect(1.5) ~ 16 units.
    // Let's use a safe margin of 24 units total width (12 each side of center).
    const range = 24; 
    const halfRange = range / 2;

    const camX = camera.position.x;
    const minX = camX - halfRange;
    const maxX = camX + halfRange;

    backgroundMeshes.forEach(mesh => {
        const ud = mesh.userData;
        
        // 1. Move Horizontally (Flow)
        mesh.position.x += ud.velocity.x * 0.01; 

        // 2. Oscillate Vertically (Sine Wave)
        mesh.position.y = ud.yBase + Math.sin(time * ud.oscillation.freq + ud.oscillation.phase) * ud.oscillation.amp;

        // 3. Rotate
        mesh.rotation.x += ud.rotSpeed.x;
        mesh.rotation.y += ud.rotSpeed.y;
        mesh.rotation.z += ud.rotSpeed.z;

        // 4. Wrap Around (Dynamic based on Camera X)
        // If item falls behind to the left ( < minX ) -> Wrap to Right (maxX)
        // If item falls ahead to the right ( > maxX ) -> Wrap to Left (minX)
        
        // We use a small buffer to avoid popping in view
        if (mesh.position.x < minX - 2) {
            mesh.position.x += range + 4;
        } else if (mesh.position.x > maxX + 2) {
            mesh.position.x -= (range + 4);
        }
    });
}
