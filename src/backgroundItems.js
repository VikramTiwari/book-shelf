import * as THREE from 'three';

// Colors suitable for Dark Mode (Neon/Bright/Pastel to pop against dark bg)
const colors = [
    0x00ffff, // Cyan
    0xff00ff, // Magenta
    0xffff00, // Yellow
    0x00ff00, // Lime
    0xff4500, // Orange Red
    0x1e90ff, // Dodger Blue
    0xff1493, // Deep Pink
    0x9400d3, // Dark Violet
    0x00fa9a, // Medium Spring Green
    0xffd700, // Gold
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const material = new THREE.MeshStandardMaterial({
    roughness: 0.4,
    metalness: 0.1,
});

export function createAtom() {
    const group = new THREE.Group();
    const color = getRandomColor();
    
    // Glowing Nucleus
    const nucleusMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5,
        roughness: 0.2
    });
    const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), nucleusMat);
    group.add(nucleus);

    // Electron Orbits
    const orbitMat = new THREE.MeshStandardMaterial({
        color: 0x888888,
        roughness: 0.4,
        metalness: 0.8
    });
    
    for (let i = 0; i < 3; i++) {
        const orbitGroup = new THREE.Group();
        // Thinner ring
        const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.01, 8, 32), orbitMat);
        orbitGroup.add(orbit);
        
        // Electron
        const electron = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), nucleusMat);
        electron.position.x = 0.6;
        orbitGroup.add(electron);
        
        orbitGroup.rotation.x = Math.random() * Math.PI;
        orbitGroup.rotation.y = Math.random() * Math.PI;
        group.add(orbitGroup);
    }

    return group;
}

export function createDNA() {
    const group = new THREE.Group();
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const mat1 = new THREE.MeshStandardMaterial({ color: color1, roughness: 0.3 });
    const mat2 = new THREE.MeshStandardMaterial({ color: color2, roughness: 0.3 });
    const barMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });

    const radius = 0.3;
    const height = 1.0;
    const turns = 1.0;
    const segments = 10;
    
    for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const angle = t * Math.PI * 2 * turns;
        const y = (t - 0.5) * height; // Center Y around 0

        const x1 = Math.cos(angle) * radius;
        const z1 = Math.sin(angle) * radius;
        
        const x2 = Math.cos(angle + Math.PI) * radius;
        const z2 = Math.sin(angle + Math.PI) * radius;

        // Spheres
        const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), mat1);
        s1.position.set(x1, y, z1);
        group.add(s1);

        const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), mat2);
        s2.position.set(x2, y, z2);
        group.add(s2);

        // Connector Bar
        const barLen = radius * 2;
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, barLen, 4), barMat);
        bar.position.y = y;
        bar.rotation.y = -angle; // Rotate to match helix?
        // Actually needs to rotate horizontally to connect
        bar.rotation.z = Math.PI / 2; 
        bar.rotation.y = -angle;
        group.add(bar);
    }
    return group;
}

export function createFlask() {
    const group = new THREE.Group();
    const color = getRandomColor();
    
    // Glass Material
    const glassMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        roughness: 0.1,
        metalness: 0.9,
    });
    
    // Liquid Material
    const liquidMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.8
    });

    // Glass Body (Cone)
    const bodyGeo = new THREE.ConeGeometry(0.35, 0.6, 16, 1, true); // Open bottom? No.
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.6, 16), glassMat);
    group.add(body);
    
    // Glass Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.4, 16), glassMat);
    neck.position.y = 0.4;
    group.add(neck);
    
    // Liquid (Inside)
    const liquid = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 16), liquidMat);
    liquid.position.y = -0.05;
    group.add(liquid);
    
    // Rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 4, 16), glassMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.6;
    group.add(rim);

    // Bubbles
    for(let i=0; i<3; i++) {
        const bubble = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), liquidMat);
        bubble.position.set((Math.random()-0.5)*0.2, 0.3 + Math.random()*0.3, (Math.random()-0.5)*0.2);
        group.add(bubble);
    }

    return group;
}

export function createCrystal() {
    const group = new THREE.Group();
    const color = getRandomColor();
    const crystalMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.2,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.9,
        flatShading: true
    });

    // Main Crystal (Hexagonal Prism-ish)
    const main = new THREE.Mesh(new THREE.CylinderGeometry(0.0, 0.15, 0.9, 6), crystalMat);
    main.position.y = 0.1;
    group.add(main);

    // Cluster Base
    for(let i=0; i<5; i++) {
        const h = 0.3 + Math.random() * 0.4;
        const shard = new THREE.Mesh(new THREE.CylinderGeometry(0.0, 0.08, h, 5), crystalMat);
        shard.position.y = -0.3 + (h/2);
        
        const angle = (Math.PI * 2 / 5) * i;
        shard.position.x = Math.sin(angle) * 0.15;
        shard.position.z = Math.cos(angle) * 0.15;
        
        // Tilt outward
        shard.rotation.x = (Math.random() - 0.5) * 0.5;
        shard.rotation.z = (Math.random() - 0.5) * 0.5;
        
        group.add(shard);
    }

    return group;
}

export function createSword() {
    const group = new THREE.Group();
    
    // Blade Material (Shiny Steel)
    const bladeMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        metalness: 0.9,
        roughness: 0.2
    });

    // Handle Material (Gold/Leather)
    const hiltColor = getRandomColor();
    const hiltMat = new THREE.MeshStandardMaterial({ color: hiltColor, roughness: 0.6 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8 });

    // Blade (Flattened diamond cross-section)
    // Cylinder with 4 sides, scaled
    const blade = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.15, 1.4, 4), bladeMat);
    blade.scale.z = 0.1; // Flatten
    blade.position.y = 0.5;
    group.add(blade);
    
    // Guard (Cross)
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.08, 0.1), goldMat);
    guard.position.y = -0.2;
    group.add(guard);
    
    // Guard details (Spheres at ends)
    const gL = new THREE.Mesh(new THREE.SphereGeometry(0.08), goldMat);
    gL.position.set(-0.3, -0.2, 0);
    group.add(gL);
    
    const gR = new THREE.Mesh(new THREE.SphereGeometry(0.08), goldMat);
    gR.position.set(0.3, -0.2, 0);
    group.add(gR);

    // Grip
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.35, 8), hiltMat);
    grip.position.y = -0.4;
    group.add(grip);
    
    // Pommel
    const pommel = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12), goldMat);
    pommel.position.y = -0.6;
    group.add(pommel);

    return group;
}

export function createShield() {
    const group = new THREE.Group();
    const color = getRandomColor();
    
    const frontMat = new THREE.MeshStandardMaterial({ color: color, metalness: 0.4, roughness: 0.4 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8, roughness: 0.3 });
    const bossMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.2 });

    // Curved Body (Sphere Segment)
    const body = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.25), 
        frontMat
    );
    body.rotation.x = -Math.PI / 2; // Face forward
    body.scale.z = 0.5; // Flatten slightly
    group.add(body);
    
    // Rim (Torus)
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.03, 8, 32), rimMat);
    // Position rim at the edge of the sphere segment
    // Sphere radius 0.6. sin(PI*0.25) ~ 0.707 * 0.6 = 0.42 radius? 
    // Wait, geometry is simple. Let's just fit it visuals.
    rim.scale.set(0.85, 0.85, 1);
    rim.position.z = 0.15;
    group.add(rim);

    // Central Boss
    const boss = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), bossMat);
    boss.position.z = 0.2; // Pop out
    boss.scale.z = 0.5;
    group.add(boss);

    return group;
}

export function createCoin() {
    const group = new THREE.Group();
    const goldMat = new THREE.MeshStandardMaterial({ 
        color: 0xffd700, 
        metalness: 1.0, 
        roughness: 0.3 
    });

    // Main Coin Body
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32), goldMat);
    coin.rotation.x = Math.PI / 2;
    group.add(coin);
    
    // Rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.02, 8, 32), goldMat);
    rim.position.z = 0.025;
    group.add(rim);
    
    const rimBack = rim.clone();
    rimBack.position.z = -0.025;
    group.add(rimBack);
    
    // Symbol ($)
    // Simple shape approximation
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.3, 0.01), goldMat);
    bar.position.z = 0.03;
    group.add(bar);
    
    const sCurve = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 4, 16, Math.PI * 1.5), goldMat);
    sCurve.position.set(0, 0.05, 0.03);
    sCurve.rotation.z = Math.PI / 4;
    group.add(sCurve);

    return group;
}

export function createBriefcase() {
    const group = new THREE.Group();
    
    // Leather Material
    const leatherMat = new THREE.MeshStandardMaterial({ 
        color: 0x5c3a21, 
        roughness: 0.6,
        metalness: 0.1 
    });
    
    // Metal Corners
    const metalMat = new THREE.MeshStandardMaterial({ 
        color: 0xdddddd, 
        metalness: 0.8, 
        roughness: 0.2 
    });

    // Main Case (Chamfered look using scaled cylinder or just Box)
    // Let's stick to Box but with corner details
    const caseMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.45, 0.15), leatherMat);
    group.add(caseMesh);
    
    // Corner Patches
    const cornerGeo = new THREE.BoxGeometry(0.1, 0.1, 0.16);
    const positions = [
        [-0.26, -0.18], [0.26, -0.18], [-0.26, 0.18], [0.26, 0.18]
    ];
    
    positions.forEach(pos => {
        const corner = new THREE.Mesh(cornerGeo, metalMat);
        corner.position.set(pos[0], pos[1], 0);
        group.add(corner);
    });
    
    // Handle
    const handleShape = new THREE.TorusGeometry(0.08, 0.02, 4, 8, Math.PI);
    const handle = new THREE.Mesh(handleShape, leatherMat);
    handle.position.y = 0.23;
    group.add(handle);

    return group;
}

export function createChart() {
    const group = new THREE.Group();
    
    // Bars
    for(let i=0; i<4; i++) {
        const h = 0.2 + i * 0.15; // Rising trend
        const barColor = (i === 3) ? 0x00ff00 : 0x4444ff; // Last one green
        const mat = new THREE.MeshStandardMaterial({ color: barColor, roughness: 0.2 });
        
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.1, h, 0.05), mat);
        bar.position.x = (i - 1.5) * 0.15;
        bar.position.y = (h / 2) - 0.25;
        group.add(bar);
    }
    
    // Trend Line (Red Arrow)
    const arrowMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0x550000 });
    // Simple line segments using thin boxes
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.02, 0.02), arrowMat);
    line.rotation.z = Math.PI / 6; // 30 deg up
    line.position.set(0, 0, 0.05);
    group.add(line);
    
    // Arrow Head
    const head = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.1, 4), arrowMat);
    head.position.set(0.25, 0.15, 0.05);
    head.rotation.z = -Math.PI / 3;
    group.add(head);

    return group;
}

export function createSatellite() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.8, roughness: 0.3 });
    const solarMat = new THREE.MeshStandardMaterial({ 
        color: 0x111199, 
        metalness: 0.5, 
        roughness: 0.2,
        emissive: 0x000044 
    });
    
    // Core Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.4, 8), metalMat);
    body.rotation.z = Math.PI / 2;
    group.add(body);
    
    // Dish
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 8, 0, Math.PI*2, 0, 0.6), metalMat);
    dish.position.y = 0.15;
    dish.rotation.x = -Math.PI / 4;
    group.add(dish);
    
    // Solar Panels (Arrays of small planes)
    const panelGeo = new THREE.BoxGeometry(0.6, 0.2, 0.02);
    
    const panelL = new THREE.Mesh(panelGeo, solarMat);
    panelL.position.x = -0.5;
    group.add(panelL);
    
    const panelR = new THREE.Mesh(panelGeo, solarMat);
    panelR.position.x = 0.5;
    group.add(panelR);
    
    // Grid Lines on Panels (Texture simulated)
    // Let's just add division lines geometry? Too expensive.
    
    return group;
}

export function createUFO() {
    const group = new THREE.Group();
    const hullMat = new THREE.MeshStandardMaterial({ 
        color: 0x888888, 
        metalness: 0.8, 
        roughness: 0.3 
    });
    
    // Saucer Body
    const saucer = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.5, 0.15, 32), hullMat);
    group.add(saucer);
    
    // Dome (Glass)
    const domeMat = new THREE.MeshStandardMaterial({
        color: 0xaaccff,
        opacity: 0.6,
        transparent: true,
        metalness: 0.9,
        roughness: 0.1
    });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 16, 0, Math.PI * 2, 0, Math.PI/2), domeMat);
    dome.position.y = 0.05;
    group.add(dome);
    
    // Lights ring
    const lightMat = new THREE.MeshStandardMaterial({ 
        color: 0x00ff00, 
        emissive: 0x00ff00,
        emissiveIntensity: 1.0 
    });
    
    for(let i=0; i<8; i++) {
        const theta = (i / 8) * Math.PI * 2;
        const l = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), lightMat);
        l.position.set(Math.cos(theta) * 0.4, -0.05, Math.sin(theta) * 0.4);
        group.add(l);
    }
    
    return group;
}

export function createPlanet() {
    const group = new THREE.Group();
    const planetColor = getRandomColor();
    const pMat = new THREE.MeshStandardMaterial({ 
        color: planetColor,
        roughness: 0.6
    });
    
    const planet = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), pMat);
    group.add(planet);
    
    // Ring (Flat RingGeometry)
    const ringMat = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
        roughness: 0.4
    });
    
    const ringGeo = new THREE.RingGeometry(0.45, 0.7, 32);
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.rotation.y = Math.PI / 6;
    group.add(ring);
    
    // Moon
    const moonMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const moon = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), moonMat);
    moon.position.set(0.6, 0.3, 0);
    group.add(moon);
    
    return group;
}

export function createVirus() {
    const group = new THREE.Group();
    const vMat = new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.6 });
    const spikeMat = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.4 });
    
    // Icosahedron Core
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 1), vMat);
    group.add(core);
    
    // Spikes (Club shaped)
    const positions = core.geometry.getAttribute('position');
    const vertex = new THREE.Vector3();
    
    // Place a spike at every vertex of the low-poly icosahedron is too many (42). 
    // Let's just do random distribution or simplified directions.
    
    const dirs = [
        [1,0,0], [-1,0,0], [0,1,0], [0,-1,0], [0,0,1], [0,0,-1],
        [1,1,1], [-1,-1,-1], [1,-1,1], [-1,1,-1]
    ];
    
    dirs.forEach(d => {
       const dir = new THREE.Vector3(d[0], d[1], d[2]).normalize();
       
       const spike = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.15, 4), spikeMat);
       // Align cylinder to direction
       const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
       spike.setRotationFromQuaternion(quaternion);
       spike.position.copy(dir.clone().multiplyScalar(0.25)); // Offset from center
       group.add(spike);
       
       // Bulb at tip
       const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.03), spikeMat);
       bulb.position.copy(dir.clone().multiplyScalar(0.33));
       group.add(bulb);
    });
    
    return group;
}

export function createPetriDish() {
    const group = new THREE.Group();
    
    const plasticMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
        roughness: 0.1
    });
    
    const agarMat = new THREE.MeshStandardMaterial({
        color: 0xffaa88, // Pinkish agar
        roughness: 0.3
    });

    // Dish
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32), plasticMat);
    dish.rotation.x = Math.PI / 2;
    group.add(dish);
    
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 4, 32), plasticMat);
    rim.position.z = 0.03;
    group.add(rim);

    // Agar Layer (Circle plane inside)
    const agar = new THREE.Mesh(new THREE.CircleGeometry(0.28, 32), agarMat);
    agar.position.z = 0.026; // Just inside
    group.add(agar);
    
    // Bacteria Colonies
    const colMat = new THREE.MeshStandardMaterial({ color: 0xffffcc, roughness: 1.0 });
    
    for(let i=0; i<5; i++) {
        const r = Math.random() * 0.05 + 0.02;
        const colony = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 4), colMat);
        colony.scale.z = 0.2; // Flatten
        
        // Random pos on disk
        const ang = Math.random() * Math.PI * 2;
        const rad = Math.random() * 0.2;
        colony.position.set(Math.cos(ang)*rad, Math.sin(ang)*rad, 0.04);
        group.add(colony);
    }

    return group;
}

export function createMushroom() {
    const group = new THREE.Group();
    
    // Stem
    const stemMat = new THREE.MeshStandardMaterial({ color: 0xffffee, roughness: 0.9 });
    // Curvy stem using Lathe or just scaled cylinder
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.3, 8), stemMat);
    group.add(stem);
    
    // Cap (Hemisphere + flattened bottom)
    const capColor = getRandomColor();
    const capMat = new THREE.MeshStandardMaterial({ color: capColor, roughness: 0.5 });
    
    const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 16, 16, 0, Math.PI*2, 0, Math.PI/2), 
        capMat
    );
    cap.position.y = 0.15;
    group.add(cap);
    
    // White spots on cap
    const spotMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    for(let i=0; i<5; i++) {
        const spot = new THREE.Mesh(new THREE.SphereGeometry(0.03, 4, 4), spotMat);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * 0.8; // Top part
        
        spot.position.set(
            0.24 * Math.sin(phi) * Math.cos(theta),
            0.15 + 0.24 * Math.cos(phi), // Offset by cap y (approx)
            0.24 * Math.sin(phi) * Math.sin(theta)
        );
        group.add(spot);
    }

    return group;
}

export function createCompass() {
    const group = new THREE.Group();
    const brassMat = new THREE.MeshStandardMaterial({ 
        color: 0xb5a642, 
        metalness: 0.8, 
        roughness: 0.3 
    });
    
    // Case
    const caseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32), brassMat);
    caseMesh.rotation.x = Math.PI/2;
    group.add(caseMesh);
    
    // Glass Face
    const glassMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, roughness: 0.0 });
    const glass = new THREE.Mesh(new THREE.CircleGeometry(0.28, 32), glassMat);
    glass.position.z = 0.026;
    group.add(glass);
    
    // Dial (White)
    const dialMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const dial = new THREE.Mesh(new THREE.CircleGeometry(0.27, 32), dialMat);
    dial.position.z = 0.024; // Below glass
    group.add(dial);
    
    // Needle
    const needleMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const needle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.4, 0.01), needleMat);
    // Tapered?
    // Let's use a diamond shape logic or just thin box
    needle.position.z = 0.03;
    needle.rotation.z = Math.random() * Math.PI;
    group.add(needle);
    
    // Top Ring
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.01, 8, 16), brassMat);
    ring.position.y = 0.35;
    group.add(ring);
    
    return group;
}

export function createScroll() {
    const group = new THREE.Group();
    const paperMat = new THREE.MeshStandardMaterial({ 
        color: 0xf4e4bc, 
        roughness: 0.9,
        side: THREE.DoubleSide
    });
    
    // Center open part (Plane curved)
    // Use a partial cylinder for the curve stability
    const sheet = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.5, 16, 1, true, 0, Math.PI/2), paperMat);
    // Flatten
    sheet.scale.set(1, 0.2, 1); 
    // Rotate to look like scroll sheet
    sheet.rotation.z = Math.PI / 2;
    sheet.rotation.y = Math.PI / 4;
    group.add(sheet);
    
    // Rolled Ends (Cylinders)
    const rollGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8);
    const roll1 = new THREE.Mesh(rollGeo, paperMat);
    roll1.position.x = -0.25;
    roll1.rotation.x = Math.PI / 2; // Vertical roll relative to sheet
    // Actually sheet is horizontal-ish.
    // Let's simplify:
    
    // Reset Group
    group.remove(sheet);
    
    // Sheet Plane
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.6), paperMat);
    // Curl it? vertex displacement? 
    // Just flat is okay, maybe slightly bent
    group.add(plane);
    
    // Rolls at top/bottom (Vertical scroll)
    const rTop = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.55, 8), paperMat);
    rTop.position.y = 0.3;
    rTop.rotation.z = Math.PI / 2;
    group.add(rTop);
    
    const rBot = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.55, 8), paperMat);
    rBot.position.y = -0.3;
    rBot.rotation.z = Math.PI / 2;
    group.add(rBot);
    
    // Wood handles
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c3a21 });
    const hTop = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.7, 8), woodMat);
    hTop.position.y = 0.3;
    hTop.rotation.z = Math.PI / 2;
    group.add(hTop);

    const hBot = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.7, 8), woodMat);
    hBot.position.y = -0.3;
    hBot.rotation.z = Math.PI / 2;
    group.add(hBot);
    
    // Glyphs logic? Texture is too much.
    
    return group;
}

export function createLantern() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6, roughness: 0.7 });
    
    // Top Cap
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.2, 0.1, 6), metalMat);
    cap.position.y = 0.25;
    group.add(cap);
    
    // Bottom Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.12, 0.05, 6), metalMat);
    base.position.y = -0.25;
    group.add(base);
    
    // Vertical Bars (Frame)
    for(let i=0; i<6; i++) {
        const angle = (Math.PI * 2 / 6) * i;
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.5, 4), metalMat);
        bar.position.set(Math.sin(angle)*0.18, 0, Math.cos(angle)*0.18);
        group.add(bar);
    }
    
    // Inner Light / Glass
    const lightMat = new THREE.MeshStandardMaterial({
        color: 0xffaa00,
        emissive: 0xffaa00,
        emissiveIntensity: 1.5,
        transparent: true,
        opacity: 0.8
    });
    
    // Glowing Core cylinder
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.45, 16), lightMat);
    group.add(core); // Center
    
    // Ring Handle
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.01, 4, 16), metalMat);
    ring.position.y = 0.35;
    group.add(ring);
    
    return group;
}

export function createHeart() {
    const group = new THREE.Group();
    const color = 0xff0000;
    const mat = new THREE.MeshStandardMaterial({ 
        color: color, 
        roughness: 0.4,
        emissive: 0x330000 
    });

    // Extrude a heart shape for better look than spheres
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0.25, 0.25);
    heartShape.bezierCurveTo(0.25, 0.25, 0.20, 0, 0, 0);
    heartShape.bezierCurveTo(-0.30, 0, -0.30, 0.35, -0.30, 0.35);
    heartShape.bezierCurveTo(-0.30, 0.55, -0.10, 0.77, 0.25, 0.95);
    heartShape.bezierCurveTo(0.60, 0.77, 0.80, 0.55, 0.80, 0.35);
    heartShape.bezierCurveTo(0.80, 0.35, 0.80, 0, 0.50, 0);
    heartShape.bezierCurveTo(0.35, 0, 0.25, 0.25, 0.25, 0.25);

    const extrudeSettings = { depth: 0.2, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.05, bevelThickness: 0.05 };
    const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    
    // Center the geometry
    geometry.center();
    // Rotate 180 Z usually
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.rotation.z = Math.PI;
    mesh.scale.set(0.5, 0.5, 0.5);
    
    group.add(mesh);

    return group;
}

export function createRose() {
    const group = new THREE.Group();
    const petalMat = new THREE.MeshStandardMaterial({ 
        color: 0xff0066, 
        side: THREE.DoubleSide,
        roughness: 0.5
    });
    
    // Spiraling Petals
    for(let i=0; i<5; i++) {
        // Create cup shape
        const geo = new THREE.SphereGeometry(0.15 + (i*0.02), 8, 8, 0, Math.PI, 0, Math.PI * 0.4);
        const petal = new THREE.Mesh(geo, petalMat);
        petal.rotation.x = -Math.PI / 2;
        petal.rotation.z = (i * Math.PI * 2) / 2.5; // Offset
        petal.position.y = 0.05 + (i * 0.01);
        group.add(petal);
    }
    
    // Stem
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x00aa00 });
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 6), stemMat);
    stem.position.y = -0.25;
    group.add(stem);
    
    // Leaf
    const leafGeo = new THREE.ConeGeometry(0.05, 0.15, 4);
    const leaf = new THREE.Mesh(leafGeo, stemMat);
    leaf.position.set(0.05, -0.2, 0);
    leaf.rotation.z = -Math.PI / 4;
    group.add(leaf);
    
    return group;
}

export function createRing() {
    const group = new THREE.Group();
    const bandMat = new THREE.MeshStandardMaterial({ 
        color: 0xffd700, 
        metalness: 1.0, 
        roughness: 0.1 
    });
    
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 8, 32), bandMat);
    group.add(band);
    
    // Gem Setting
    const setting = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.02, 0.05, 6), bandMat);
    setting.position.y = 0.16;
    group.add(setting);
    
    // Gem (Diamond shape)
    const gemMat = new THREE.MeshStandardMaterial({ 
        color: 0x0000ff, 
        roughness: 0, 
        metalness: 0.1,
        transparent: true,
        opacity: 0.9,
        emissive: 0x000044
    });
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.06), gemMat);
    gem.position.y = 0.19;
    group.add(gem);
    
    return group;
}

export function createToxicBarrel() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ 
        color: 0x00cc00, 
        metalness: 0.4,
        roughness: 0.4
    });
    
    // Main Body
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.6, 24), metalMat);
    group.add(barrel);
    
    // Ribs
    const ribMat = new THREE.MeshStandardMaterial({ color: 0x006600, metalness: 0.5 });
    const r1 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.02, 4, 24), ribMat);
    r1.rotation.x = Math.PI/2;
    r1.position.y = 0.15;
    group.add(r1);
    
    const r2 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.02, 4, 24), ribMat);
    r2.rotation.x = Math.PI/2;
    r2.position.y = -0.15;
    group.add(r2);
    
    // Symbol
    const symMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    // Triangle approximation
    const tri = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.01, 3), symMat);
    tri.position.z = 0.25;
    tri.rotation.x = Math.PI/2;
    group.add(tri);
    
    return group;
}

export function createGear() {
    const group = new THREE.Group();
    const gearMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.7, roughness: 0.5 });
    
    // Disk
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.05, 24), gearMat);
    disk.rotation.x = Math.PI/2;
    group.add(disk);
    
    // Teeth
    // 8 teeth
    for(let i=0; i<8; i++) {
        const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.05), gearMat);
        const angle = (Math.PI * 2 / 8) * i;
        tooth.position.set(Math.sin(angle)*0.28, Math.cos(angle)*0.28, 0);
        tooth.rotation.z = -angle;
        group.add(tooth);
    }
    
    // Center Hole (Visual only - using dark cylinder cap)
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 16), new THREE.MeshStandardMaterial({color:0x222222}));
    hole.rotation.x = Math.PI/2;
    group.add(hole);
    
    return group;
}

export function createDrone() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const rotorMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const propMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, transparent:true, opacity:0.8 });

    // Main Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.3), bodyMat);
    group.add(body);
    
    // Arms (X Shape)
    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.04, 0.04), bodyMat);
    arm1.rotation.y = Math.PI / 4;
    group.add(arm1);
    
    const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.04, 0.04), bodyMat);
    arm2.rotation.y = -Math.PI / 4;
    group.add(arm2);
    
    // Motors & Props
    const offsets = [
        [0.25, 0.25], [-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25]
    ];
    
    offsets.forEach(off => {
        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 8), rotorMat);
        motor.position.set(off[0], 0.04, off[1]);
        group.add(motor);
        
        // Propeller (Disc blur)
        const prop = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.01, 8), propMat);
        prop.position.set(off[0], 0.07, off[1]);
        group.add(prop);
    });
    
    return group;
}

export function createMagnifyingGlass() {
    const group = new THREE.Group();
    const frameMat = new THREE.MeshStandardMaterial({ 
        color: 0x333333, 
        metalness: 0.5 
    });
    
    // Frame
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.02, 8, 32), frameMat);
    group.add(ring);
    
    // Lens (Spherical curve)
    const glassMat = new THREE.MeshStandardMaterial({
        color: 0xccffff,
        transparent: true,
        opacity: 0.2,
        roughness: 0.0,
        metalness: 0.9,
    });
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 16, 0, Math.PI*2, 0, 0.2), glassMat);
    // Flatten sphere segment scale?
    // Or just use flattened sphere
    lens.scale.z = 0.1;
    group.add(lens);
    
    // Handle
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x5A3A29, roughness: 0.8 }); // Wood
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3, 16), handleMat);
    handle.position.y = -0.35;
    group.add(handle);

    return group;
}

export function createCamera() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 });
    const lensMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.5, roughness: 0.2 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x5500aa, metalness: 1.0, roughness: 0.1 });
    
    // Body (Rounded Box)
    // Scale a BoxGeometry or use RoundedBox if imported. Since we only have core geometry:
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.22, 0.1), bodyMat);
    group.add(body);
    
    // Lens Barrel
    const lensBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.15, 24), lensMat);
    lensBarrel.rotation.x = Math.PI / 2;
    lensBarrel.position.z = 0.1;
    group.add(lensBarrel);
    
    // Lens Glass
    const glass = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), glassMat);
    glass.position.z = 0.16;
    glass.scale.z = 0.5;
    group.add(glass);
    
    // Flash / Viewfinder bump
    const bump = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, 0.1), bodyMat);
    bump.position.y = 0.14;
    group.add(bump);
    
    // Shutter Button
    const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 8), new THREE.MeshStandardMaterial({color:0xff0000}));
    btn.position.set(0.1, 0.12, 0);
    group.add(btn);

    return group;
}

export function createWalkieTalkie() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
    
    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.35, 0.08), bodyMat);
    group.add(body);
    
    // Antenna
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.015, 0.25, 8), bodyMat);
    ant.position.set(-0.04, 0.28, 0);
    group.add(ant);
    
    // Speaker Grill
    const grillMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const grill = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.01), grillMat);
    grill.position.set(0, 0.05, 0.041);
    group.add(grill);
    
    // Knobs
    const knob1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.05, 12), bodyMat);
    knob1.position.set(0.04, 0.2, 0);
    group.add(knob1);
    
    // Screen (Orange LCD)
    const screenMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xaa5500, emissiveIntensity: 0.5 });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.05), screenMat);
    screen.position.set(0, -0.08, 0.041);
    group.add(screen);

    return group;
}

export function createGlobe() {
    const group = new THREE.Group();
    
    // Ocean
    const oceanMat = new THREE.MeshStandardMaterial({ color: 0x1144aa, roughness: 0.4 });
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), oceanMat);
    group.add(sphere);
    
    // Continents (Low poly chunks)
    const landMat = new THREE.MeshStandardMaterial({ color: 0x33aa33, roughness: 0.8 });
    
    for(let i=0; i<8; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        // Random irregular blobs on surface
        const size = 0.05 + Math.random() * 0.1;
        const land = new THREE.Mesh(new THREE.SphereGeometry(size, 7, 6), landMat);
         // Flatten to conform roughly to surface
        land.scale.z = 0.2; 
        
        // Convert spherical to cartesian
        const r = 0.3;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        land.position.set(x, y, z);
        land.lookAt(0,0,0); // Point inward, z axis aligns with radius
        
        group.add(land);
    }
    
    // Meridian Ring
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xc0c0c0, metalness: 0.8 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.015, 8, 64), ringMat);
    group.add(ring);

    return group;
}

export function createAirplane() {
    const group = new THREE.Group();
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const windowMat = new THREE.MeshStandardMaterial({ color: 0x111144, metalness: 0.5 });
    
    // Fuselage (Rounded Cylinder/Capsule)
    const fuse = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.5, 8, 16), whiteMat);
    fuse.rotation.z = Math.PI / 2;
    group.add(fuse);
    
    // Wings (Tapered, swept back)
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0,0);
    wingShape.lineTo(0.15, -0.4);
    wingShape.lineTo(0.25, -0.4);
    wingShape.lineTo(0.3, 0);
    
    const extrudeSettings = { depth: 0.02, bevelEnabled: true, bevelSize: 0.01, bevelThickness: 0.01 };
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, extrudeSettings);
    
    const wings = new THREE.Mesh(wingGeo, whiteMat);
    wings.rotation.x = Math.PI/2;
    wings.position.set(-0.15, 0, 0); // Center wings
    // Need to mirror? This is just one side unless shape is full.
    // Easier to use simmetric box wings for simplicity but better shape
    
    // Back to Box Wings but refined
    const wingMain = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.03, 0.8), whiteMat);
    wingMain.position.x = 0.05;
    group.add(wingMain);
    // Tip wings upwards? dihedral
    
    // Tail
    const tailV = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.02), whiteMat);
    tailV.position.set(-0.25, 0.1, 0);
    group.add(tailV);
    
    const tailH = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.3), whiteMat);
    tailH.position.set(-0.25, 0.02, 0);
    group.add(tailH);
    
    // Cockpit Windows
    const cockpit = new THREE.Mesh(new THREE.CylinderGeometry(0.079, 0.079, 0.15, 8, 1, false, 0, Math.PI), windowMat);
    cockpit.rotation.z = Math.PI/2;
    cockpit.position.set(0.15, 0.02, 0);
    group.add(cockpit);

    return group;
}

export function createPassport() {
    const group = new THREE.Group();
    const coverMat = new THREE.MeshStandardMaterial({ color: 0x000066, roughness: 0.6 });
    const pageMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    
    // Cover
    const cover = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.44, 0.04), coverMat);
    group.add(cover);
    
    // Pages inside
    const pages = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.42, 0.035), pageMat);
    pages.position.x = 0.015; // Slightly offset to show spine
    group.add(pages);
    
    // Gold Emblem
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8 });
    const emblem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.01, 16), goldMat);
    emblem.rotation.x = Math.PI/2;
    emblem.position.z = 0.022;
    emblem.scale.y = 2.0; // Oval
    group.add(emblem);

    // Text lines
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.01, 0.01), goldMat);
    line.position.set(0, 0.12, 0.022);
    group.add(line);

    return group;
}

export function createMicrochip() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ 
        color: 0x222222, 
        roughness: 0.7 
    });
    
    // Main Chip Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.04), bodyMat);
    group.add(body);
    
    // Silicon Core (Shiny center)
    const siliconMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.5 });
    const core = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.045), siliconMat);
    group.add(core);

    // Pins (Metallic)
    const pinMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 1.0, roughness: 0.3 });
    
    for(let i=0; i<6; i++) { 
        const pin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.02), pinMat);
        
        // Left Side
        const pinL = pin.clone();
        pinL.position.set(-0.23, -0.15 + (i * 0.06), 0);
        group.add(pinL);

        // Right Side
        const pinR = pin.clone();
        pinR.position.set(0.23, -0.15 + (i * 0.06), 0);
        group.add(pinR);
    }
    
    // Text Detail
    const textDot = new THREE.Mesh(new THREE.CircleGeometry(0.02, 8), new THREE.MeshStandardMaterial({color:0x888888}));
    textDot.position.set(-0.15, 0.15, 0.025);
    group.add(textDot);

    return group;
}

export function createRobotHead() {
    const group = new THREE.Group();
    const headMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.3, roughness: 0.4 });
    const glowMat = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00aaaa, emissiveIntensity: 1.0 });
    
    // Head cube (Chamfered)
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), headMat);
    group.add(head);
    
    // Visor / Eyes
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.05), glowMat);
    visor.position.set(0, 0.05, 0.18);
    group.add(visor);
    
    // Ears
    const earL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.05, 16), headMat);
    earL.rotation.z = Math.PI/2;
    earL.position.x = -0.2;
    group.add(earL);
    
    const earR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.05, 16), headMat);
    earR.rotation.z = Math.PI/2;
    earR.position.x = 0.2;
    group.add(earR);

    // Antenna
    const antStem = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2, 4), headMat);
    antStem.position.y = 0.25;
    group.add(antStem);
    
    const antBulb = new THREE.Mesh(new THREE.SphereGeometry(0.03), new THREE.MeshStandardMaterial({color:0xff0000, emissive:0xff0000}));
    antBulb.position.y = 0.35;
    group.add(antBulb);

    return group;
}

export function createFloppyDisk() {
    const group = new THREE.Group();
    const diskColor = getRandomColor();
    const diskMat = new THREE.MeshStandardMaterial({ color: diskColor, roughness: 0.6 });
    
    // Main Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.40, 0.40, 0.03), diskMat);
    group.add(body);
    
    // Metal Slider
    const sliderMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8 });
    const slider = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.035), sliderMat);
    slider.position.set(0, 0.13, 0);
    group.add(slider);
    
    // Label Sticker
    const labelMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const label = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.18, 0.032), labelMat);
    label.position.set(0, -0.05, 0.002);
    group.add(label);
    
    // Write protect notch hole
    // Just a black box? 
    const notch = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.04), new THREE.MeshBasicMaterial({color:0x000000}));
    notch.position.set(0.15, -0.15, 0);
    group.add(notch);

    return group;
}
