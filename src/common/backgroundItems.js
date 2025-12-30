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

// --- Retro Tech ---
// --- Retro Tech ---
export function createJoystick() {
    const group = new THREE.Group();
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 });
    const stickMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5, metalness: 0.3 });
    const knobMat = new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.2 });
    const buttonMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0x550000 });
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });

    // Base (Chamfered box look via scaled cylinder + box?)
    // Simple box with beveled look
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.4), baseMat);
    group.add(base);

    // Rubber Boot (Cone)
    const boot = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.1, 8), bootMat);
    boot.position.y = 0.1;
    group.add(boot);

    // Stick
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35), stickMat);
    stick.position.y = 0.25;
    group.add(stick);

    // Ball Knob
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), knobMat);
    knob.position.y = 0.42;
    group.add(knob);

    // Fire Button
    const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.02, 16), buttonMat);
    btn.position.set(0.12, 0.06, 0.12);
    group.add(btn);

    return group;
}

export function createGameCartridge() {
    const group = new THREE.Group();
    const plasticMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.7 });
    const labelMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.5 });
    const pcbMat = new THREE.MeshStandardMaterial({ color: 0x00aa00, metalness: 0.5 });

    // Main Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 0.06), plasticMat);
    group.add(body);

    // Grip Lines (Top)
    for(let i=0; i<3; i++) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.015, 0.065), plasticMat);
        line.position.y = 0.15 + i * 0.03;
        group.add(line);
    }

    // Label area
    const label = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.32, 0.065), labelMat);
    label.position.y = -0.05;
    group.add(label);
    
    // PCB Pins visible at bottom
    const pcb = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.05, 0.01), pcbMat);
    pcb.position.y = -0.24;
    group.add(pcb);

    return group;
}

export function createCRTMonitor() {
    const group = new THREE.Group();
    const beigeMat = new THREE.MeshStandardMaterial({ color: 0xe0d6c2, roughness: 0.8 });
    const screenMat = new THREE.MeshStandardMaterial({ 
        color: 0x111111, 
        roughness: 0.2, 
        metalness: 0.4,
        emissive: 0x001100,
        emissiveIntensity: 0.2 
    });

    // Housing
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.4), beigeMat);
    group.add(housing);

    // Screen Curve (Sphere segment)
    const screen = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 32, 16, 0, Math.PI * 2, 0, 0.8), 
        screenMat
    );
    screen.rotation.x = -Math.PI / 2;
    screen.scale.y = 0.8; // Flatten sphere
    screen.position.z = 0.15;
    group.add(screen);
    
    // Stand
    const standNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.1), beigeMat);
    standNeck.position.y = -0.25;
    group.add(standNeck);
    
    const standBase = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.05, 0.3), beigeMat);
    standBase.position.y = -0.3;
    group.add(standBase);

    return group;
}

export function createRetroMouse() {
    const group = new THREE.Group();
    const beigeMat = new THREE.MeshStandardMaterial({ color: 0xe0d6c2, roughness: 0.9 });
    const btnMat = new THREE.MeshStandardMaterial({ color: 0xd0c6b2, roughness: 0.9 });
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 1.0 });

    // Body (Rounded Box)
    // Use Box + scaling to look blocky but nostalgic
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.35), beigeMat);
    group.add(body);

    // Buttons (Separate block)
    const btnL = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.03, 0.1), btnMat);
    btnL.position.set(-0.055, 0.065, 0.12);
    group.add(btnL);

    const btnR = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.03, 0.1), btnMat);
    btnR.position.set(0.055, 0.065, 0.12);
    group.add(btnR);
    
    // Cable bit
    const cableStub = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.05), cableMat);
    cableStub.rotation.x = Math.PI / 2;
    cableStub.position.z = 0.2;
    group.add(cableStub);

    return group;
}

export function createKeyboardKey() {
    const group = new THREE.Group();
    const keyMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.7 });
    const legendMat = new THREE.MeshStandardMaterial({ color: 0x333333 });

    // Keycap shape (tapered box)
    // Top
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.05, 0.25), keyMat);
    top.position.y = 0.1;
    group.add(top);
    
    // Skirt (Trapezoid from Cylinder)
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.2, 4), keyMat);
    skirt.rotation.y = Math.PI / 4;
    group.add(skirt);
    
    // Letter (A)
    const charGeo = new THREE.BoxGeometry(0.1, 0.01, 0.15); // Simple block for letter
    const char = new THREE.Mesh(charGeo, legendMat);
    char.position.y = 0.126;
    group.add(char);

    return group;
}

export function createUSBDrive() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0066cc, roughness: 0.3, metalness: 0.2 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.9, roughness: 0.2 });
    const capMat = new THREE.MeshStandardMaterial({ color: 0x000000, transparent:true, opacity:0.3 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.4), bodyMat);
    group.add(body);
    
    // Connector (Open box type)
    const connector = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.12), metalMat);
    connector.position.z = 0.26;
    group.add(connector);
    
    // LED Indicator
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.02), new THREE.MeshStandardMaterial({color:0x00ff00, emissive:0x00ff00}));
    led.position.set(0, 0.04, 0);
    group.add(led);

    return group;
}

export function createCalculator() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.6 });
    const screenMat = new THREE.MeshStandardMaterial({ color: 0x778877, roughness: 0.4, metalness: 0.1 }); // LCD Greenish
    const btnMat = new THREE.MeshStandardMaterial({ color: 0x666666 });
    const btnOpMat = new THREE.MeshStandardMaterial({ color: 0xff8800 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 0.05), bodyMat);
    group.add(body);

    // Screen area
    const screenBezel = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.06), bodyMat);
    screenBezel.position.y = 0.18;
    group.add(screenBezel);
    
    const screen = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.11, 0.062), screenMat);
    screen.position.y = 0.18;
    group.add(screen);

    // Grid of buttons
    for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
            const mat = (j === 3) ? btnOpMat : btnMat;
            const btn = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.06), mat);
            btn.position.set((j-1.5)*0.08, -0.05 - (i*0.07), 0.01);
            group.add(btn);
        }
    }

    return group;
}

export function createServerRack() {
    const group = new THREE.Group();
    const rackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.6, metalness: 0.5 });
    const grillMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.9 }); // Dark mesh
    const ledBlue = new THREE.MeshStandardMaterial({ color: 0x0088ff, emissive: 0x0088ff });
    const ledGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00 });

    // Frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.8, 0.4), rackMat);
    group.add(frame);
    
    // Server Units (Blades)
    for(let i=0; i<6; i++) {
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.1, 0.41), grillMat);
        blade.position.y = 0.3 - (i * 0.12);
        group.add(blade);
        
        // Random blinkylights
        const l1 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.01), Math.random()>0.5 ? ledBlue : ledGreen);
        l1.position.set(0.15, 0.3 - (i * 0.12), 0.21);
        group.add(l1);
        
        const l2 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.01), Math.random()>0.5 ? ledBlue : ledGreen);
        l2.position.set(0.12, 0.3 - (i * 0.12), 0.21);
        group.add(l2);
    }

    return group;
}

export function createWiFiRouter() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.3 });
    const antMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5 });
    const ledMat = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00, emissiveIntensity: 2 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.3), bodyMat);
    group.add(body);

    const antGeo = new THREE.CylinderGeometry(0.015, 0.02, 0.3);
    
    const ant1 = new THREE.Mesh(antGeo, antMat);
    ant1.position.set(-0.2, 0.15, -0.1);
    group.add(ant1);

    const ant2 = new THREE.Mesh(antGeo, antMat);
    ant2.position.set(0.2, 0.15, -0.1);
    group.add(ant2);
    
    const ant3 = new THREE.Mesh(antGeo, antMat);
    ant3.position.set(0, 0.15, -0.12);
    group.add(ant3);
    
    // Status Lights
    for(let i=0; i<4; i++) {
        const led = new THREE.Mesh(new THREE.SphereGeometry(0.01), ledMat);
        led.position.set(-0.1 + i*0.05, 0.045, 0.14);
        group.add(led);
    }

    return group;
}

export function createBattery() {
    const group = new THREE.Group();
    const wrapMat = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.3 });
    const copperMat = new THREE.MeshStandardMaterial({ color: 0xcfb53b, metalness: 0.9, roughness: 0.2 }); // Gold/Copper
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.8 });

    // Main cylinder
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.45, 32), wrapMat);
    group.add(cyl);

    // Button (Top)
    const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 32), silverMat);
    btn.position.y = 0.24;
    group.add(btn);
    
    // Top Ring
    const topRing = new THREE.Mesh(new THREE.CylinderGeometry(0.121, 0.121, 0.04, 32), copperMat);
    topRing.position.y = 0.2;
    group.add(topRing);

    return group;
}

// --- Sci-Fi ---
// --- Sci-Fi ---
export function createRayGun() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x880000, metalness: 0.6, roughness: 0.4 });
    const silverMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.2 });
    const energyMat = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00, emissiveIntensity: 2.0 });

    // Handle
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.25, 8), bodyMat);
    handle.rotation.x = Math.PI/6;
    handle.position.y = -0.15;
    handle.position.z = 0.05;
    group.add(handle);

    // Body
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.3, 4, 8), bodyMat);
    body.rotation.x = Math.PI/2;
    group.add(body);

    // Fins
    for(let i=0; i<3; i++) {
        const fin = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.01, 4, 16), silverMat);
        fin.position.z = 0.1 + i*0.1;
        group.add(fin);
    }
    
    // Emitter
    const emit = new THREE.Mesh(new THREE.SphereGeometry(0.05), energyMat);
    emit.position.z = 0.42;
    group.add(emit);

    return group;
}

export function createAstronautHelmet() {
    const group = new THREE.Group();
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.3, metalness: 0.1 });
    const visorMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, metalness: 1.0, roughness: 0.0, envMapIntensity: 1.0 });

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), whiteMat);
    group.add(helmet);

    // Visor with better cut
    const visor = new THREE.Mesh(
        new THREE.SphereGeometry(0.27, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.35), 
        visorMat
    );
    visor.rotation.x = -Math.PI / 1.8;
    visor.position.z = 0.04;
    visor.position.y = 0.02;
    group.add(visor);
    
    // Neck Ring
    const neck = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.05, 8, 32), new THREE.MeshStandardMaterial({color:0x999999}));
    neck.rotation.x = Math.PI/2;
    neck.position.y = -0.25;
    group.add(neck);

    return group;
}

export function createMeteor() {
    const group = new THREE.Group();
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0, flatShading: true });
    const fireMat = new THREE.MeshStandardMaterial({ 
        color: 0xff5500, 
        emissive: 0xff2200, emissiveIntensity: 1.0,
        transparent: true, opacity: 0.5 
    });

    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25, 1), rockMat);
    // Deform random
    const pos = rock.geometry.attributes.position;
    for(let i=0; i<pos.count; i++) {
        pos.setXYZ(i, pos.getX(i)*(0.8+Math.random()*0.4), pos.getY(i)*(0.8+Math.random()*0.4), pos.getZ(i)*(0.8+Math.random()*0.4));
    }
    group.add(rock);

    // Trail particles
    for(let i=0; i<5; i++) {
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.15 - i*0.02, 0.8, 8, 1, true), fireMat);
        tail.rotation.x = Math.PI / 2;
        tail.position.z = -0.4 - i*0.2;
        tail.rotation.z = Math.random() * Math.PI;
        group.add(tail);
    }

    return group;
}

export function createBlackHole() {
    const group = new THREE.Group();
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const diskMat = new THREE.MeshStandardMaterial({ 
        color: 0xffaa00, 
        emissive: 0xff4400,
        emissiveIntensity: 1.5,
        side: THREE.DoubleSide, 
        transparent: true, 
        opacity: 0.9 
    });

    const core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 16), coreMat);
    group.add(core);

    // Accretion Disk (Torus flattened)
    const disk = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.15, 16, 64), diskMat);
    disk.scale.z = 0.05;
    disk.rotation.x = Math.PI / 3;
    group.add(disk);

    return group;
}

export function createSpaceStation() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.7, roughness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.5 });
    
    // Double Wheel
    const w1 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.04, 8, 32), metalMat);
    group.add(w1);
    
    const w2 = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.03, 8, 32), metalMat);
    group.add(w2);

    // Central Axis
    const axis = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8), darkMat);
    group.add(axis);
    
    // Spokes
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 0.05), metalMat);
    group.add(spoke);
    
    const spoke2 = spoke.clone();
    spoke2.rotation.z = Math.PI/2;
    group.add(spoke2);

    return group;
}

export function createAlienEgg() {
    const group = new THREE.Group();
    const eggMat = new THREE.MeshStandardMaterial({ 
        color: 0x113311, 
        roughness: 0.4, 
        metalness: 0.2
    });
    const veinMat = new THREE.MeshStandardMaterial({color: 0x44ff44, emissive: 0x004400});

    const egg = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), eggMat);
    egg.scale.y = 1.4;
    group.add(egg);

    // Cracked open top?
    // Let's simple add bulging veins
    for(let i=0; i<8; i++) {
        const vein = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.01 + Math.random()*0.01, 4, 16), veinMat);
        vein.rotation.x = Math.random() * Math.PI;
        vein.rotation.y = Math.random() * Math.PI;
        vein.scale.set(1, 1, 1);
        group.add(vein);
    }

    return group;
}

export function createMonolith() {
    const group = new THREE.Group();
    // High metalness/gloss for the 2001 look
    const stoneMat = new THREE.MeshStandardMaterial({ 
        color: 0x050505, 
        roughness: 0.05, 
        metalness: 0.6 
    });
    
    // 1:4:9 dimensions
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 0.05), stoneMat);
    group.add(box);

    return group;
}

export function createCryoPod() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8 });
    const glassMat = new THREE.MeshPhysicalMaterial({ 
        color: 0x88ccff, 
        transmission: 0.8,
        opacity: 0.6,
        roughness: 0.1
    });

    const base = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.5, 4, 16), metalMat);
    group.add(base);

    // Cutout / Window
    // Instead of adding a window, we can just overlay a slightly larger half-capsule as glass?
    const win = new THREE.Mesh(new THREE.CapsuleGeometry(0.155, 0.25, 4, 16), glassMat);
    win.position.z = 0.01;
    group.add(win);
    
    // Frost?
    
    return group;
}

export function createHologramProjector() {
    const group = new THREE.Group();
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const holoMat = new THREE.MeshBasicMaterial({ 
        color: 0x00ffff, 
        transparent: true, 
        opacity: 0.4,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.05, 16), baseMat);
    base.position.y = -0.3;
    group.add(base);

    // Scanning Plane (Cone layers)
    for (let i=0; i<3; i++) {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.2 + i*0.1, 0.4, 32, 1, true), holoMat);
        cone.position.y = -0.1;
        cone.rotation.y = i;
        group.add(cone);
    }
    
    // Small figure? simple box
    const fig = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.05), holoMat);
    fig.position.y = -0.2;
    group.add(fig);

    return group;
}

export function createPortalRing() {
    const group = new THREE.Group();
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
    const runeMat = new THREE.MeshBasicMaterial({ color: 0xff00ff }); // Alien runes
    const eventN = new THREE.MeshBasicMaterial({ 
        color: 0x0000ff, 
        transparent: true, 
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.08, 8, 32), stoneMat);
    group.add(ring);
    
    // Runes / Lights on the ring
    for(let i=0; i<8; i++) {
        const light = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.02), runeMat);
        const theta = (i/8) * Math.PI * 2;
        light.position.set(0.4*Math.cos(theta), 0.4*Math.sin(theta), 0.08);
        light.rotation.z = theta;
        group.add(light);
    }

    const swirl = new THREE.Mesh(new THREE.CircleGeometry(0.35, 32), eventN);
    group.add(swirl);

    return group;
}

// --- Fantasy ---
// --- Fantasy ---
export function createMagicWand() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c3a21, roughness: 0.8 });
    const magicMat = new THREE.MeshBasicMaterial({ color: 0xaaddff, transparent: true, opacity: 0.8 });
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Tapered Shaft
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.025, 0.55, 8), woodMat);
    group.add(shaft);

    // Ornament Handle
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.15, 8), woodMat);
    handle.position.y = -0.3;
    group.add(handle);

    // Glowing Tip Orb
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.03), coreMat);
    tip.position.y = 0.28;
    group.add(tip);
    
    // Aura
    const aura = new THREE.Mesh(new THREE.SphereGeometry(0.05), magicMat);
    aura.position.y = 0.28;
    group.add(aura);

    return group;
}

export function createWizardHat() {
    const group = new THREE.Group();
    const fabricMat = new THREE.MeshStandardMaterial({ color: 0x330066, roughness: 1.0, side: THREE.DoubleSide });
    const bandMat = new THREE.MeshStandardMaterial({ color: 0x9922cc, roughness: 0.8 });
    const buckleMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8 });

    // Bent Cone
    // Simulate bent tip by stacking cones or just rotation
    const coneBase = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.4, 16, 1, true), fabricMat);
    coneBase.position.y = 0.2;
    group.add(coneBase);
    
    // Tip (tilted)
    const coneTip = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.3, 16), fabricMat);
    coneTip.position.set(0.05, 0.5, 0);
    coneTip.rotation.z = -0.3;
    group.add(coneTip);

    // Brim
    const brim = new THREE.Mesh(new THREE.RingGeometry(0.24, 0.5, 16), fabricMat);
    brim.rotation.x = -Math.PI / 2;
    group.add(brim);

    // Band
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.08, 16), bandMat);
    band.position.y = 0.04;
    group.add(band);
    
    // Buckle
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), buckleMat);
    buckle.position.set(0, 0.04, 0.28);
    group.add(buckle);

    return group;
}

export function createDragonEgg() {
    const group = new THREE.Group();
    const baseColor = 0x880000;
    const eggMat = new THREE.MeshStandardMaterial({ 
        color: baseColor, 
        roughness: 0.5, 
        metalness: 0.3 
    });

    const egg = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), eggMat);
    egg.scale.y = 1.35;
    group.add(egg);

    // Scales (Torus segments or cones?)
    // A few overlapping scales
    const scaleMat = new THREE.MeshStandardMaterial({ color: 0xaa2222, metalness: 0.4 });
    for(let i=0; i<15; i++) {
        const s = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.05, 5), scaleMat);
        const phi = Math.acos( -1 + ( 2 * i ) / 15 );
        const theta = Math.sqrt( 15 * Math.PI ) * phi;
        s.position.setFromSphericalCoords( 0.26, phi, theta );
        s.lookAt(0,0,0);
        s.scale.y = 1.3; // matches egg distortion roughly
        group.add(s);
    }

    return group;
}

export function createHourglass() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3d2314, roughness: 0.9 });
    const glassMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xffffff, transition:1, opacity: 0.3, roughness: 0 
    });
    const sandMat = new THREE.MeshStandardMaterial({ color: 0xddccaa, roughness: 1 });

    // Frames (Hexagonal pads)
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 6), woodMat);
    top.position.y = 0.28;
    group.add(top);
    
    const bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 6), woodMat);
    bottom.position.y = -0.28;
    group.add(bottom);
    
    // Pillars
    for(let i=0; i<3; i++) {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.56), woodMat);
        const a = (i/3) * Math.PI*2;
        pillar.position.set(0.18*Math.cos(a), 0, 0.18*Math.sin(a));
        group.add(pillar);
    }

    // Bulbs
    const bulbTop = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16, 0, Math.PI*2, 0, Math.PI/2), glassMat);
    bulbTop.position.y = 0.02;
    group.add(bulbTop);

    const bulbBot = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16, 0, Math.PI*2, 0, Math.PI/2), glassMat);
    bulbBot.rotation.x = Math.PI;
    bulbBot.position.y = -0.02;
    group.add(bulbBot);

    // Sand
    const sand = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.14, 16), sandMat);
    sand.position.y = -0.12;
    group.add(sand);
    
    const stream = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.26), sandMat);
    group.add(stream);

    return group;
}

export function createChalice() {
    const group = new THREE.Group();
    const goldMat = new THREE.MeshStandardMaterial({ 
        color: 0xffcc00, 
        metalness: 1.0, 
        roughness: 0.15,
        envMapIntensity: 1 
    });
    const gemMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xff0000, 
        metalness: 0.1, 
        roughness: 0.1, 
        transmission: 0.6,
        thickness: 0.5
    });

    // Cup Body (Lathe-like shape via cylinders)
    const cupBase = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.05, 0.15, 16), goldMat);
    cupBase.position.y = 0.15;
    group.add(cupBase);
    
    const cupRim = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.15, 0.15, 16, 1, true), goldMat);
    cupRim.position.y = 0.3;
    group.add(cupRim);

    // Stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.2, 8), goldMat);
    group.add(stem);
    
    // Knop (Sphere on stem)
    const knop = new THREE.Mesh(new THREE.SphereGeometry(0.04), goldMat);
    group.add(knop);

    // Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.18, 0.05, 16), goldMat);
    base.position.y = -0.12;
    group.add(base);

    // Gems embedded
    for(let i=0; i<4; i++) {
        const gem = new THREE.Mesh(new THREE.SphereGeometry(0.03), gemMat);
        const a = (i/4) * Math.PI*2;
        gem.position.set(0.16*Math.cos(a), 0.32, 0.16*Math.sin(a));
        group.add(gem);
    }

    return group;
}

export function createDagger() {
    const group = new THREE.Group();
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.95, roughness: 0.1 });
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x221100, roughness: 0.8 }); // Dark Leather
    const guardMat = new THREE.MeshStandardMaterial({ color: 0xaa8833, metalness: 0.8 }); // Bronze/Gold

    // Blade
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.5, 4), bladeMat);
    blade.scale.z = 0.1; 
    blade.position.y = 0.25;
    group.add(blade);
    
    // Fuller (blood groove) - Not easy with primitives, skip.

    // Handle
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.15, 8), handleMat);
    handle.position.y = -0.15;
    handle.scale.z = 0.7;
    group.add(handle);
    
    // Pommel
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.05), guardMat);
    pommel.position.y = -0.24;
    group.add(pommel);

    // Crossguard
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.06), guardMat);
    guard.position.y = -0.02;
    // Curve it slightly?
    group.add(guard);

    return group;
}

export function createRuneStone() {
    const group = new THREE.Group();
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0, flatShading: true });
    const runeMat = new THREE.MeshBasicMaterial({ color: 0x00ddff, transparent: true, opacity: 0.8 });

    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3, 0), stoneMat);
    rock.scale.y = 1.4;
    rock.scale.z = 0.5;
    
    // Deform
    const pos = rock.geometry.attributes.position;
    for(let i=0; i<pos.count; i++) {
        pos.setY(i, pos.getY(i) * (0.9 + Math.random()*0.2));
    }
    group.add(rock);

    // Floating Rune (Text or Symbol)
    // Use Torus knot or simple lines
    const rune = new THREE.Mesh(new THREE.TorusKnotGeometry(0.08, 0.01, 32, 4, 2, 3), runeMat);
    rune.position.z = 0.16;
    rune.scale.z = 0.2; // Flat on surface
    group.add(rune);

    return group;
}

export function createCrown() {
    const group = new THREE.Group();
    const goldMat = new THREE.MeshStandardMaterial({ 
        color: 0xffd700, 
        metalness: 1.0, 
        roughness: 0.2 
    });
    const jewelMat = new THREE.MeshStandardMaterial({ color: 0xff0000, metalness: 0.8, roughness: 0.1 });

    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.08, 16, 1, true), goldMat);
    group.add(band);

    // Fancy Spikes
    for(let i=0; i<6; i++) {
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.2, 4), goldMat);
        const theta = (i/6) * Math.PI * 2;
        spike.position.set(0.25*Math.cos(theta), 0.1, 0.25*Math.sin(theta));
        spike.rotation.y = -theta;
        group.add(spike);
        
        // Jewel on band
        const jewel = new THREE.Mesh(new THREE.SphereGeometry(0.03), jewelMat);
        jewel.position.set(0.26*Math.cos(theta), 0, 0.26*Math.sin(theta));
        group.add(jewel);
    }

    return group;
}

export function createCauldron() {
    const group = new THREE.Group();
    const ironMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.6, roughness: 0.7 });
    const brewMat = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x004400, opacity: 0.9, transparent: true });

    // Pot: Sphere cut open
    const pot = new THREE.Mesh(new THREE.SphereGeometry(0.25, 24, 24, 0, Math.PI*2, 0, Math.PI*0.7), ironMat);
    pot.position.y = 0.1;
    pot.rotation.x = Math.PI; // Opening up
    group.add(pot);
    
    // Rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.02, 16, 24), ironMat);
    rim.position.y = 0.28; // Adjust based on sphere cut
    rim.rotation.x = Math.PI / 2;
    group.add(rim);

    // Liquid surface
    const liquid = new THREE.Mesh(new THREE.CircleGeometry(0.22, 16), brewMat);
    liquid.rotation.x = -Math.PI / 2;
    liquid.position.y = 0.2;
    group.add(liquid);
    
    // Bubbles
    for(let i=0; i<3; i++) {
        const bubble = new THREE.Mesh(new THREE.SphereGeometry(0.04), brewMat);
        bubble.position.set((Math.random()-0.5)*0.2, 0.2, (Math.random()-0.5)*0.2);
        group.add(bubble);
    }

    // Feet
    for(let i=0; i<3; i++) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.12, 8), ironMat);
        const theta = (i/3) * Math.PI * 2;
        leg.position.set(0.15*Math.cos(theta), -0.18, 0.15*Math.sin(theta));
        leg.rotation.x = 0.2; // splay slightly?
        leg.lookAt(0, -0.5, 0); // look roughly down
        group.add(leg);
    }

    return group;
}

export function createArrow() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c3a21 });
    const featherMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    const tipMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8 });

    // Shaft
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.7, 8), woodMat);
    shaft.rotation.z = Math.PI / 2;
    group.add(shaft);

    // Tip (Pyramid-ish)
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 4), tipMat);
    tip.position.x = 0.4;
    tip.rotation.z = -Math.PI / 2;
    tip.rotation.y = Math.PI / 4; // rotate so flat side isn't always up
    group.add(tip);

    // Fletching (3 feathers)
    for(let i=0; i<3; i++) {
        const feather = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.05, 0.005), featherMat);
        feather.position.x = -0.28;
        // Radial arrangement
        const ang = (i/3) * Math.PI * 2;
        feather.position.y = 0.03 * Math.cos(ang);
        feather.position.z = 0.03 * Math.sin(ang);
        feather.rotation.x = ang;
        group.add(feather);
    }

    return group;
}

// --- Science ---
// --- Science ---
export function createBunsenBurner() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.8, roughness: 0.3 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xb5a642, metalness: 0.6, roughness: 0.4 });
    const flameMat = new THREE.MeshBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending });

    // Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.05, 16), metalMat);
    group.add(base);

    // Chimney (Tube)
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 16), metalMat);
    tube.position.y = 0.2;
    group.add(tube);
    
    // Air intake ring
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 16), brassMat);
    ring.position.y = 0.08;
    group.add(ring);
    
    // Flame
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.2, 16), flameMat);
    flame.position.y = 0.5;
    group.add(flame);
    
    // Inner Flame
    const iFlame = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.1, 16), new THREE.MeshBasicMaterial({color:0xffffff}));
    iFlame.position.y = 0.45;
    group.add(iFlame);

    return group;
}

export function createTestTubeRack() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xa0522d, roughness: 0.8 }); // Sienna
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transmission: 0.9, opacity: 0.3, roughness: 0 });
    const liquidMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Rack Structure (Two levels + sides)
    const tier1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.02, 0.15), woodMat);
    tier1.position.y = 0.1;
    group.add(tier1);
    
    const tier2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.02, 0.15), woodMat);
    tier2.position.y = -0.1;
    group.add(tier2);
    
    const sideL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.15), woodMat);
    sideL.position.x = -0.26;
    group.add(sideL);

    const sideR = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.15), woodMat);
    sideR.position.x = 0.26;
    group.add(sideR);

    // Tubes
    for(let i=0; i<4; i++) {
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 12), glassMat);
        tube.position.set(-0.15 + i*0.1, 0.1, 0);
        group.add(tube);
        
        // Liquid
        const lColor = (i%2===0) ? 0x00ff00 : 0xff0000;
        const liq = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.15, 8), new THREE.MeshBasicMaterial({color: lColor, opacity:0.8, transparent:true}));
        liq.position.set(-0.15 + i*0.1, 0.0, 0);
        group.add(liq);
    }

    return group;
}

export function createHorseshoeMagnet() {
    const group = new THREE.Group();
    const redMat = new THREE.MeshStandardMaterial({ color: 0xcc0000, metalness: 0.3, roughness: 0.5 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.9, roughness: 0.2 });

    // Arch
    const arch = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.08, 16, 24, Math.PI), redMat);
    arch.rotation.z = Math.PI;
    group.add(arch);

    // Legs
    const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 16), redMat);
    leg1.position.set(-0.2, -0.15, 0);
    group.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 16), redMat);
    leg2.position.set(0.2, -0.15, 0);
    group.add(leg2);

    // Metal Tips
    const tip1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.18), steelMat);
    tip1.position.set(-0.2, -0.35, 0);
    group.add(tip1);
    
    const tip2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.18), steelMat);
    tip2.position.set(0.2, -0.35, 0);
    group.add(tip2);

    return group;
}

export function createSyringe() {
    const group = new THREE.Group();
    const plasticMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.4, 
        roughness: 0, 
        clearcoat: 1.0 
    });
    const liquidMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.9 });
    const rubberMat = new THREE.MeshStandardMaterial({ color: 0x222222 });

    // Barrel
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 16), plasticMat);
    group.add(barrel);
    
    // Liquid Inside
    const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16), liquidMat);
    group.add(liquid);

    // Needle
    const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.3, 8), steelMat);
    needle.position.y = 0.35;
    group.add(needle);
    
    // Plunger top
    const plunger = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.1, 16), plasticMat);
    plunger.position.y = -0.25;
    group.add(plunger);
    
    const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.02, 16), plasticMat);
    flange.position.y = -0.2;
    group.add(flange);

    return group;
}



export function createPillCapsule() {
    const group = new THREE.Group();
    const redMat = new THREE.MeshPhysicalMaterial({ color: 0xff0000, roughness: 0.1, clearcoat: 0.5 });
    const whiteMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.1, clearcoat: 0.5 });

    const top = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.25, 4, 16), redMat);
    top.position.y = 0.125;
    group.add(top);

    const bot = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.25, 4, 16), whiteMat);
    bot.position.y = -0.125;
    group.add(bot);

    return group;
}

export function createHumanBrain() {
    const group = new THREE.Group();
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xffa0a0, roughness: 0.5, bumpScale: 0.05 });

    // 2 Spheres merged, deformed
    const leftHem = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), pinkMat);
    leftHem.position.x = -0.18;
    leftHem.scale.set(0.9, 1.0, 1.3);
    group.add(leftHem);

    const rightHem = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), pinkMat);
    rightHem.position.x = 0.18;
    rightHem.scale.set(0.9, 1.0, 1.3);
    group.add(rightHem);
    
    // Cerebellum
    const cer = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), pinkMat);
    cer.position.set(0, -0.2, 0.2);
    cer.scale.set(1.5, 1, 1);
    group.add(cer);

    return group;
}

export function createNeuron() {
    const group = new THREE.Group();
    const cellMat = new THREE.MeshStandardMaterial({ 
        color: 0xffff00, 
        emissive: 0x444400,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
    });

    const soma = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), cellMat);
    group.add(soma);

    // Dendrites - spindly lines
    for(let i=0; i<8; i++) {
        // Use thin cones for better look
        const arm = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.5, 4), cellMat);
        const theta = (i/8) * Math.PI * 2;
        const phi = (i%2===0) ? 0.3 : -0.3;
        arm.position.set(0.25*Math.cos(theta), 0.25*Math.sin(theta), 0.25*Math.sin(phi));
        arm.lookAt(0,0,0); // Point in
        // Invert interaction to point out
        arm.rotation.x += Math.PI; 
        
        // Offset position
        arm.position.set(0.15*Math.cos(theta), 0.15*Math.sin(theta), 0.15*Math.sin(phi));
         // Need proper direction
        
        group.add(arm);
    }
    
    // Long Axon
    const axon = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.04, 0.8), cellMat);
    axon.rotation.z = Math.PI/2;
    axon.position.x = 0.4;
    group.add(axon);

    return group;
}

export function createLightbulb() {
    const group = new THREE.Group();
    const glassMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xffffaa, 
        transparent: true, 
        opacity: 0.3, 
        roughness: 0,
        transmission: 0.9,
        thickness: 0.1
    });
    const baseMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8 });
    const filamentMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xffaa00, emissiveIntensity: 2.0 });

    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), glassMat);
    bulb.position.y = 0.2;
    group.add(bulb);
    
    // Neck taper
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.12, 0.15, 32, 1, true), glassMat);
    neck.position.y = 0.05;
    group.add(neck);

    // Screw Base
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.2, 16), baseMat);
    screw.position.y = -0.15;
    // Add threads bump map later? Simplified ridges
    group.add(screw);

    // Filament
    const fil = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.005, 8, 16), filamentMat);
    fil.position.y = 0.2;
    fil.rotation.x = Math.PI/2;
    group.add(fil);

    return group;
}

export function createPrism() {
    const group = new THREE.Group();
    const glassMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xffffff, 
        transmission: 1.0, 
        roughness: 0.0, 
        thickness: 1.0,
        ior: 1.5, // Refraction index
        dispersion: 1.0 // If supported, nice rainbow
    });

    const prism = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.8, 3), glassMat);
    prism.rotation.z = Math.PI / 2;
    prism.rotation.x = Math.PI / 2; // Point up triangularly
    group.add(prism);

    return group;
}

export function createWrench() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.7, roughness: 0.3 });

    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.6, 0.04), metalMat);
    group.add(handle);

    // Open End
    const head = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.04, 6), metalMat);
    head.rotation.x = Math.PI/2;
    head.position.y = 0.32;
    group.add(head);

    // Cutout
    const cut = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.06), new THREE.MeshBasicMaterial({color:0x000000})); // Hacky CSG
    // Better just careful grouping? 
    // Just a C-shape group
    
    // Ring End
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.04, 8, 16), metalMat);
    ring.position.y = -0.32;
    group.add(ring);

    return group;
}

// --- Office ---
// --- Office ---
export function createFountainPen() {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.05, metalness: 0.4 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 1.0, roughness: 0.2 });

    // Barrel
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 16), bodyMat);
    group.add(body);
    
    // Cap
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.2, 16), bodyMat);
    cap.position.y = 0.15;
    group.add(cap);

    // Clip
    const clip = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.15, 0.02), goldMat);
    clip.position.set(0.05, 0.15, 0);
    group.add(clip);

    // Nib Section
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.03, 0.1, 16), bodyMat);
    grip.position.y = -0.25;
    group.add(grip);

    const nib = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.08, 4), goldMat);
    nib.position.y = -0.33;
    nib.rotation.z = Math.PI;
    group.add(nib);

    return group;
}

export function createFeatherQuill() {
    const group = new THREE.Group();
    const featherMat = new THREE.MeshStandardMaterial({ color: 0xfdfdfd, roughness: 0.9, side: THREE.DoubleSide });
    const spineMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    
    // Curved Spine
    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -0.3, 0),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.05, 0.3, 0)
    ]);
    const spineGeo = new THREE.TubeGeometry(path, 8, 0.015, 8, false);
    const spine = new THREE.Mesh(spineGeo, spineMat);
    group.add(spine);

    // Vane (Flat shape)
    // Simplified as scaled planes attached to spine?
    // Let's use a single curved plane visual approximation
    for(let i=0; i<10; i++) {
        const vane = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 0.002), featherMat);
        vane.position.y = -0.1 + i*0.045;
        vane.position.x = 0.05 + (i*0.005); 
        vane.rotation.z = -0.2;
        group.add(vane);
    }

    return group;
}

export function createSealedEnvelope() {
    const group = new THREE.Group();
    const paperMat = new THREE.MeshStandardMaterial({ color: 0xf5f5dc, roughness: 0.9 });
    const waxMat = new THREE.MeshStandardMaterial({ color: 0x990000, roughness: 0.4 });

    const env = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.01), paperMat);
    group.add(env);

    // Flap lines (Thin boxes)
    const line1 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.005, 0.012), paperMat);
    line1.rotation.z = -0.5;
    line1.position.set(-0.1, 0.05, 0);
    group.add(line1);

    const line2 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.005, 0.012), paperMat);
    line2.rotation.z = 0.5;
    line2.position.set(0.1, 0.05, 0);
    group.add(line2);

    // Wax Seal
    const wax = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.02, 16), waxMat);
    wax.rotation.x = Math.PI/2;
    wax.position.z = 0.01;
    group.add(wax);

    return group;
}

export function createCoffeeMug() {
    const group = new THREE.Group();
    const ceramicMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const coffeeMat = new THREE.MeshStandardMaterial({ color: 0x3b2f2f, roughness: 0.6 });
    const textMat = new THREE.MeshStandardMaterial({ color: 0x333333 });

    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.35, 24, 1, true), ceramicMat);
    group.add(mug);
    
    // Bottom
    const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.2, 24), ceramicMat);
    bottom.rotation.x = Math.PI/2;
    bottom.position.y = -0.175;
    group.add(bottom);

    // Liquid
    const coffee = new THREE.Mesh(new THREE.CircleGeometry(0.19, 24), coffeeMat);
    coffee.rotation.x = -Math.PI/2;
    coffee.position.y = 0.12;
    group.add(coffee);

    // Handle
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.03, 8, 16, Math.PI), ceramicMat);
    handle.position.x = 0.22;
    handle.rotation.z = -Math.PI/2;
    group.add(handle);
    
    // Logo / Text (Box)
    const logo = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.02), textMat);
    logo.position.z = 0.2;
    group.add(logo);

    return group;
}

export function createReadingGlasses() {
    const group = new THREE.Group();
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5 });
    const lensMat = new THREE.MeshPhysicalMaterial({ color: 0xccffff, transmission: 0.9, opacity: 0.2, roughness: 0 });

    // Frame L
    const fL = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.015, 8, 24), frameMat);
    fL.position.x = -0.15;
    group.add(fL);
    
    const lensL = new THREE.Mesh(new THREE.CircleGeometry(0.11, 24), lensMat);
    lensL.position.x = -0.15;
    group.add(lensL);

    // Frame R
    const fR = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.015, 8, 24), frameMat);
    fR.position.x = 0.15;
    group.add(fR);
    
    const lensR = new THREE.Mesh(new THREE.CircleGeometry(0.11, 24), lensMat);
    lensR.position.x = 0.15;
    group.add(lensR);

    // Bridge
    const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.08, 4), frameMat);
    bridge.rotation.z = Math.PI/2;
    group.add(bridge);
    
    // Arms (Ear pieces)
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.4, 4), frameMat);
    armL.position.x = -0.27;
    armL.position.z = -0.2;
    armL.rotation.x = Math.PI/2;
    group.add(armL);

    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.4, 4), frameMat);
    armR.position.x = 0.27;
    armR.position.z = -0.2;
    armR.rotation.x = Math.PI/2;
    group.add(armR);

    return group;
}

export function createRubberStamp() {
    const group = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.6 });
    const rubberMat = new THREE.MeshStandardMaterial({ color: 0xcc3333, roughness: 0.9 });
    const inkMat = new THREE.MeshStandardMaterial({ color: 0x000000 });

    const handle = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), woodMat);
    handle.position.y = 0.2;
    group.add(handle);

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.2, 16), woodMat);
    group.add(stem);

    const base = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.05, 0.15), woodMat);
    base.position.y = -0.12;
    group.add(base);
    
    const pad = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.02, 0.13), rubberMat);
    pad.position.y = -0.155;
    group.add(pad);

    return group;
}

export function createPaperclip() {
    const group = new THREE.Group();
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.4 });
    
    // Construct via TubeGeometry for a proper bent wire
    const path = new THREE.CurvePath();
    // Simplified 2D shape extruded
    // P1(0,0) -> P2(0, 0.4) -> Curve -> P3(0.2, 0.4) -> P4(0.2, -0.2) ...
    // Just fake it with torus rings and cylinders
    
    // Outer loop
    const t1 = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 8, 16, Math.PI), metalMat);
    t1.position.y = 0.2;
    group.add(t1);
    
    const l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5), metalMat);
    l1.position.set(-0.12, -0.05, 0);
    group.add(l1);
    
    const l2 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5), metalMat);
    l2.position.set(0.12, -0.05, 0);
    group.add(l2);
    
    // Bottom loop
    const t2 = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 8, 16, Math.PI), metalMat);
    t2.position.set(0.04, -0.3, 0);
    t2.rotation.z = Math.PI;
    group.add(t2);
    
    return group;
}

export function createTrophy() {
    const group = new THREE.Group();
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 1.0, roughness: 0.1 });
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });

    // Cup
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.12, 0.28, 24, 1, true), goldMat);
    cup.position.y = 0.25;
    group.add(cup);

    // Handles
    const handleL = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 8, 16, Math.PI), goldMat);
    handleL.position.x = -0.22;
    handleL.position.y = 0.3;
    handleL.rotation.z = Math.PI/2;
    group.add(handleL);

    const handleR = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 8, 16, Math.PI), goldMat);
    handleR.position.x = 0.22;
    handleR.position.y = 0.3;
    handleR.rotation.z = -Math.PI/2;
    group.add(handleR);

    // Stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.08, 0.2, 16), goldMat);
    group.add(stem);

    // Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.3), baseMat);
    base.position.y = -0.14;
    group.add(base);

    return group;
}

export function createPadlock() {
    const group = new THREE.Group();
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.6, roughness: 0.4 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.3 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.3, 0.12), brassMat);
    // Chamfer/Round edges visually by adding cylinders at corners? 
    // Simplify: just box
    group.add(body);
    
    // Keyhole
    const keyhole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 16), new THREE.MeshBasicMaterial({color:0x000000}));
    keyhole.rotation.x = Math.PI/2;
    keyhole.position.z = 0.06;
    keyhole.position.y = -0.05;
    group.add(keyhole);

    // Shackle
    const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.04, 8, 24, Math.PI), steelMat);
    shackle.position.y = 0.15;
    group.add(shackle);
    
    // Shackle legs
    const sL = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2), steelMat);
    sL.position.set(-0.14, 0.15, 0);
    group.add(sL);
    
    const sR = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2), steelMat);
    sR.position.set(0.14, 0.15, 0);
    group.add(sR);

    return group;
}

export function createKey() {
    const group = new THREE.Group();
    const oldKeyMat = new THREE.MeshStandardMaterial({ color: 0xc0a060, metalness: 0.7, roughness: 0.6 });

    // Bow (Head)
    const head = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 8, 16), oldKeyMat);
    head.position.x = -0.25;
    group.add(head);
    
    // Shaft
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 8), oldKeyMat);
    shaft.rotation.z = Math.PI/2;
    group.add(shaft);

    // Bits (Teeth)
    const teeth1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.02), oldKeyMat);
    teeth1.position.x = 0.15;
    teeth1.position.y = -0.05;
    group.add(teeth1);

    const teeth2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.02), oldKeyMat);
    teeth2.position.x = 0.22;
    teeth2.position.y = -0.04;
    group.add(teeth2);

    return group;
}

export const backgroundItemGenerators = [
    createAtom, createDNA, createFlask, createCrystal, createSword, 
    createShield, createCoin, createBriefcase, createChart, createSatellite, 
    createUFO, createPlanet, createVirus, createPetriDish, createMushroom,
    createCompass, createScroll, createLantern, createHeart, createRose, 
    createRing, createToxicBarrel, createGear, createDrone, 
    createMagnifyingGlass, createCamera, createWalkieTalkie,
    createGlobe, createAirplane, createPassport,
    createMicrochip, createRobotHead, createFloppyDisk,
    // Retro Tech
    createJoystick, createGameCartridge, createCRTMonitor, createRetroMouse, 
    createKeyboardKey, createUSBDrive, createCalculator, createServerRack, 
    createWiFiRouter, createBattery,
    // Sci-Fi
    createRayGun, createAstronautHelmet, createMeteor, createBlackHole, 
    createSpaceStation, createAlienEgg, createMonolith, createCryoPod, 
    createHologramProjector, createPortalRing,
    // Fantasy
    createMagicWand, createWizardHat, createDragonEgg, createHourglass, 
    createChalice, createDagger, createRuneStone, createCrown, 
    createCauldron, createArrow,
    // Science
    createBunsenBurner, createTestTubeRack, createHorseshoeMagnet, createSyringe, 
    createPillCapsule, createHumanBrain, createNeuron, createLightbulb, 
    createPrism, createWrench,
    // Office
    createFountainPen, createFeatherQuill, createSealedEnvelope, createCoffeeMug, 
    createReadingGlasses, createRubberStamp, createPaperclip, createTrophy, 
    createPadlock, createKey
];
