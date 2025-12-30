import * as THREE from 'three';

const backgroundMeshes = [];

// Colors suitable for Light Mode
const colors = [
    0x3366cc, // Blue
    0xdc3912, // Red/Orange
    0xff9900, // Yellow/Orange
    0x109618, // Green
    0x990099, // Purple
    0x0099c6, // Cyan
    0x66aa00, // Lime
    0x555555, // Dark Grey
    0xdaa520, // Goldenrod
    0xff1493, // Deep Pink
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const material = new THREE.MeshStandardMaterial({
    roughness: 0.4,
    metalness: 0.1,
});

function createAtom() {
    const group = new THREE.Group();
    const color = getRandomColor();
    const atomMaterial = material.clone();
    atomMaterial.color.setHex(color);

    // Nucleus
    const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), atomMaterial);
    group.add(nucleus);

    // Electrons / Orbits
    for (let i = 0; i < 3; i++) {
        const orbit = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.02, 3, 24), atomMaterial);
        orbit.rotation.x = Math.random() * Math.PI;
        orbit.rotation.y = Math.random() * Math.PI;
        group.add(orbit);
    }

    return group;
}

function createDNA() {
    const group = new THREE.Group();
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const mat1 = material.clone(); mat1.color.setHex(color1);
    const mat2 = material.clone(); mat2.color.setHex(color2);

    for (let i = -2; i <= 2; i++) {
        const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), mat1);
        sphere1.position.set(Math.sin(i), i * 0.4, Math.cos(i));
        group.add(sphere1);

        const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), mat2);
        sphere2.position.set(-Math.sin(i), i * 0.4, -Math.cos(i));
        group.add(sphere2);

        // Connection
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2, 4), mat1);
        bar.rotation.z = Math.PI / 2;
        bar.rotation.y = i; 
        bar.position.y = i * 0.4;
        bar.scale.y = 1; // Simplify connection visual
        // Actually a bar between spheres is complex to orient perfectly simply, 
        // let's just stick to the floating spheres for the stylized look or a simple horizontal bar
        
    }
    return group;
}

function createFlask() {
    const group = new THREE.Group();
    const color = getRandomColor();
    const flaskMaterial = material.clone();
    flaskMaterial.color.setHex(color);

    // Base
    const base = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 8), flaskMaterial);
    group.add(base);

    // Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.3, 8), flaskMaterial);
    neck.position.y = 0.4;
    group.add(neck);

    // Liquid (represented by color, maybe a smaller rim)
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 3, 8), flaskMaterial);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.55;
    group.add(rim);

    return group;
}

function createCrystal() {
    const group = new THREE.Group();
    const color = getRandomColor();
    const crystalMat = material.clone();
    crystalMat.color.setHex(color);
    crystalMat.roughness = 0.1; // Make it shiny
    crystalMat.metalness = 0.1;

    // Main Crystal
    const main = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.8, 4), crystalMat);
    group.add(main);

    // Smaller shards base
    for(let i=0; i<3; i++) {
        const shard = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 3), crystalMat);
        shard.position.y = -0.3;
        shard.rotation.z = (Math.random() - 0.5) * 1; // Tilt out
        shard.rotation.y = (Math.PI * 2 / 3) * i;
        shard.position.x = Math.sin(shard.rotation.y) * 0.15;
        shard.position.z = Math.cos(shard.rotation.y) * 0.15;
        group.add(shard);
    }

    return group;
}

function createSword() {
    const group = new THREE.Group();
    // Metal for blade
    const bladeMat = material.clone();
    bladeMat.color.setHex(0xaaaaaa); // Silver/Grey
    bladeMat.metalness = 0.8;
    bladeMat.roughness = 0.2;

    // Handle color
    const handleColor = getRandomColor();
    const handleMat = material.clone();
    handleMat.color.setHex(handleColor);

    // Blade
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.05), bladeMat);
    blade.position.y = 0.4;
    group.add(blade);

    // Guard
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 0.1), handleMat);
    guard.position.y = -0.2;
    group.add(guard);

    // Hilt/Handle
    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.3, 8), handleMat);
    hilt.position.y = -0.35;
    group.add(hilt);
    
    // Pommel
    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.06), handleMat);
    pommel.position.y = -0.52;
    group.add(pommel);

    return group;
}

function createShield() {
    const group = new THREE.Group();
    const color = getRandomColor();
    const shieldMat = material.clone();
    shieldMat.color.setHex(color);
    shieldMat.metalness = 0.3;

    // Main disk
    // Cylinder for thickness
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.05, 16), shieldMat);
    disk.rotation.x = Math.PI / 2; // Flat facing forward
    group.add(disk);

    // Boss (center bump)
    const bossMat = material.clone();
    bossMat.color.setHex(0xcd7f32); // Bronze/Copperish
    bossMat.metalness = 0.8;
    
    const boss = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 8), bossMat);
    boss.scale.z = 0.5; // Flatten sphere
    boss.position.z = 0.03;
    group.add(boss);

    // Rim - Torus? Or just the diff color. Let's keep it simple.

    return group;
}

function createCoin() {
    const group = new THREE.Group();
    const goldMat = material.clone();
    goldMat.color.setHex(0xffd700); // Gold
    goldMat.metalness = 1.0;
    goldMat.roughness = 0.2;

    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32), goldMat);
    coin.rotation.x = Math.PI / 2;
    group.add(coin);
    
    // Optional: Ridge or simple detail? 
    // Let's keep it simple geometry.

    return group;
}

function createBriefcase() {
    const group = new THREE.Group();
    const caseColor = getRandomColor();
    const caseMat = material.clone();
    caseMat.color.setHex(caseColor);
    
    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.15), caseMat);
    group.add(body);
    
    // Handle
    const handleMat = material.clone();
    handleMat.color.setHex(0x333333); // Dark Grey/Black
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 4, 8), handleMat);
    handle.position.y = 0.2;
    // Torus default is flat on XY, we need to stand it up or rotate half?
    // Torus lies in XY plane. We want it sticking up from top of case (Y).
    // so no rotation needed if case is aligned with XY.
    // Wait, Box Y is up. Torus Y is up. 
    group.add(handle);

    return group;
}

function createChart() {
    const group = new THREE.Group();
    const chartMat = material.clone();
    chartMat.color.setHex(getRandomColor());
    
    // Base line? No, just bars.
    // 3 Bars rising
    
    for(let i=0; i<3; i++) {
        const h = 0.2 + (i * 0.2); // 0.2, 0.4, 0.6
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.15, h, 0.15), chartMat);
        bar.position.x = (i - 1) * 0.2; // -0.2, 0, 0.2
        bar.position.y = (h / 2) - 0.3; // Align bottoms roughly
        group.add(bar);
    }
    
    // Arrow? (Triangle)
    const arrowMat = material.clone();
    arrowMat.color.setHex(0x00ff00); // Green
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 4), arrowMat);
    arrow.position.x = 0.3;
    arrow.position.y = 0.4;
    arrow.rotation.z = -Math.PI / 4;
    group.add(arrow);

    return group;
}

function createSatellite() {
    const group = new THREE.Group();
    const bodyMat = material.clone();
    bodyMat.color.setHex(0xaaaaaa); // Silver/Grey
    
    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), bodyMat);
    group.add(body);
    
    // Solar Panels
    const panelMat = material.clone();
    panelMat.color.setHex(0x3366cc); // Blueish
    panelMat.roughness = 0.2;
    // panelMat.emissive = 0x112244; // Slight glow? No, StandardMaterial doesn't glow without setup
    
    const leftPanel = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, 0.6), panelMat);
    leftPanel.position.x = -0.15;
    group.add(leftPanel);

    const rightPanel = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, 0.6), panelMat);
    rightPanel.position.x = 0.15;
    group.add(rightPanel);
    
    // Dish?
    const dish = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.05, 8), bodyMat);
    dish.position.y = 0.12;
    dish.rotation.x = Math.PI; // Point up
    group.add(dish);

    return group;
}

function createUFO() {
    const group = new THREE.Group();
    const metalMat = material.clone();
    metalMat.color.setHex(0xc0c0c0); // Silver
    metalMat.metalness = 0.8;
    
    // Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.5, 0.1, 16), metalMat);
    group.add(body);
    
    // Dome
    const domeMat = material.clone();
    domeMat.color.setHex(0x88ccff); // Light Blue Glass
    domeMat.transparent = true;
    domeMat.opacity = 0.7;
    domeMat.roughness = 0.0;
    
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 8, 0, Math.PI * 2, 0, Math.PI/2), domeMat);
    dome.position.y = 0.05;
    group.add(dome);
    
    return group;
}

function createPlanet() {
    const group = new THREE.Group();
    const planetColor = getRandomColor();
    const planetMat = material.clone();
    planetMat.color.setHex(planetColor);
    
    const planet = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), planetMat);
    group.add(planet);
    
    // Ring
    const ringColor = getRandomColor();
    const ringMat = material.clone();
    ringMat.color.setHex(ringColor);
    
    // Torus or flattened tube
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.05, 2, 24), ringMat);
    ring.rotation.x = Math.PI / 2 + 0.3; // Tilt
    group.add(ring);

    return group;
}

function createVirus() {
    const group = new THREE.Group();
    const coreColor = getRandomColor();
    const coreMat = material.clone();
    coreMat.color.setHex(coreColor);
    
    // Icosahedron Body
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), coreMat);
    group.add(body);
    
    // Spikes
    const spikeMat = material.clone();
    spikeMat.color.setHex(0xcc4444); // Reddish spikes? Or random.
    
    const positions = [
        [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]
    ];
    
    positions.forEach(pos => {
        const spike = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2, 4), spikeMat);
        spike.position.set(pos[0]*0.2, pos[1]*0.2, pos[2]*0.2);
        
        // Rotate to point outward - Logic is a bit complex for all directions without lookAt
        // Simple trick: lookAt from center
        spike.lookAt(new THREE.Vector3(pos[0]*2, pos[1]*2, pos[2]*2));
        spike.rotateX(Math.PI / 2); // Cylinder main axis is Y, so rotate to align Z
        
        group.add(spike);
    });

    return group;
}

function createPetriDish() {
    const group = new THREE.Group();
    const glassMat = material.clone();
    glassMat.color.setHex(0xffffff);
    glassMat.transparent = true;
    glassMat.opacity = 0.4;
    
    // Dish Bottom
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 16), glassMat);
    group.add(dish);
    
    // Rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 2, 16), glassMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.02;
    group.add(rim);
    
    // Culture / Bacteria spots
    const cultureMat = material.clone();
    cultureMat.color.setHex(getRandomColor()); // Green/Yellowish?
    
    for(let i=0; i<4; i++) {
        const spot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4), cultureMat);
        const r = Math.random() * 0.2;
        const theta = Math.random() * Math.PI * 2;
        spot.position.set(Math.cos(theta)*r, 0.02, Math.sin(theta)*r);
        spot.scale.y = 0.5; // Flatten
        group.add(spot);
    }

    return group;
}

function createMushroom() {
    const group = new THREE.Group();
    const capColor = getRandomColor(); // Red caps often
    const capMat = material.clone();
    capMat.color.setHex(capColor);
    
    // Cap
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8, 0, Math.PI * 2, 0, Math.PI/2), capMat);
    cap.position.y = 0.1;
    group.add(cap);
    
    // Stem
    const stemMat = material.clone();
    stemMat.color.setHex(0xffeecc); // Off-white
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.3, 8), stemMat);
    stem.position.y = -0.05;
    group.add(stem);
    
    // Spots on cap? (Torus or small spheres) - Keep simple for now.

    return group;
}

function createCompass() {
    const group = new THREE.Group();
    const caseMat = material.clone();
    caseMat.color.setHex(0xb5a642); // Brass
    caseMat.metalness = 0.6;
    
    // Case
    const caseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.05, 16), caseMat);
    caseMesh.rotation.x = Math.PI / 2;
    group.add(caseMesh);
    
    // Needle
    const needleMat = material.clone();
    needleMat.color.setHex(0xff0000); // Red tip
    const needle = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.3, 4), needleMat);
    needle.position.z = 0.03; 
    needle.rotation.x = Math.PI / 2;
    needle.rotation.z = Math.random() * Math.PI * 2; // Random direction
    group.add(needle);
    
    // Ring/Loop
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.01, 2, 8), caseMat);
    ring.position.y = 0.25;
    group.add(ring);

    return group;
}

function createScroll() {
    const group = new THREE.Group();
    const paperMat = material.clone();
    paperMat.color.setHex(0xf5deb3); // Wheat/Paper
    paperMat.roughness = 0.8;
    
    // Rolled Cylinder
    const scroll = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 16), paperMat);
    scroll.rotation.z = Math.PI / 2; // Horizontal roll
    group.add(scroll);
    
    // Ribbon
    const ribbonMat = material.clone();
    ribbonMat.color.setHex(0xff0000); // Red ribbon
    const ribbon = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.02, 2, 16), ribbonMat);
    ribbon.rotation.y = Math.PI / 2;
    group.add(ribbon);

    return group;
}

function createLantern() {
    const group = new THREE.Group();
    const frameMat = material.clone();
    frameMat.color.setHex(0x222222); // Dark metal
    
    // Top & Bottom caps
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.05, 6), frameMat);
    top.position.y = 0.2;
    group.add(top);
    
    const bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.05, 6), frameMat);
    bottom.position.y = -0.2;
    group.add(bottom);
    
    // Bars (simplified using a wireframe-like structure or just transparency)
    // Actually, let's just do a glowing center
    const glowMat = material.clone();
    glowMat.color.setHex(0xffaa00); // Orange glow
    glowMat.emissive = new THREE.Color(0xff5500); 
    glowMat.emissiveIntensity = 0.5;
    
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.35, 6), glowMat);
    group.add(core);
    
    // Handle
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 2, 6), frameMat);
    handle.position.y = 0.25;
    handle.rotation.y = Math.PI / 2;
    group.add(handle);

    return group;
}

function createMicrochip() {
    const group = new THREE.Group();
    const bodyMat = material.clone();
    bodyMat.color.setHex(0x111111); // Black body
    bodyMat.roughness = 0.6;
    
    // Main Chip Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.05), bodyMat);
    group.add(body);
    
    // Pins (Metallic)
    const pinMat = material.clone();
    pinMat.color.setHex(0xcccccc); // Silver
    pinMat.metalness = 0.8;
    
    for(let i=0; i<4; i++) { // 4 pins per side
        const pinL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.05, 0.02), pinMat);
        pinL.position.set(-0.22, -0.15 + (i * 0.1), 0);
        pinL.rotation.z = Math.PI / 2;
        group.add(pinL);

        const pinR = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.05, 0.02), pinMat);
        pinR.position.set(0.22, -0.15 + (i * 0.1), 0);
        pinR.rotation.z = Math.PI / 2;
        group.add(pinR);
    }

    return group;
}

function createRobotHead() {
    const group = new THREE.Group();
    const headMat = material.clone();
    headMat.color.setHex(0xeeeeee); // White/Grey Robot
    headMat.metalness = 0.4;
    
    // Head cube
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), headMat);
    group.add(head);
    
    // Eyes (Glowing)
    const eyeMat = material.clone();
    eyeMat.color.setHex(0x00ffff); // Cyan glow
    eyeMat.emissive = new THREE.Color(0x00aaaa);
    
    const eyeL = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 8), eyeMat);
    eyeL.rotation.x = Math.PI / 2;
    eyeL.position.set(-0.08, 0.05, 0.15);
    group.add(eyeL);

    const eyeR = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 8), eyeMat);
    eyeR.rotation.x = Math.PI / 2;
    eyeR.position.set(0.08, 0.05, 0.15);
    group.add(eyeR);
    
    // Antenna
    const antStem = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2, 4), headMat);
    antStem.position.y = 0.25;
    group.add(antStem);
    
    const antBulb = new THREE.Mesh(new THREE.SphereGeometry(0.03), eyeMat);
    antBulb.position.y = 0.35;
    group.add(antBulb);

    return group;
}

function createFloppyDisk() {
    const group = new THREE.Group();
    const diskColor = getRandomColor();
    const diskMat = material.clone();
    diskMat.color.setHex(diskColor);
    
    // Main Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.03), diskMat);
    group.add(body);
    
    // Metal Slider
    const sliderMat = material.clone();
    sliderMat.color.setHex(0xcccccc);
    sliderMat.metalness = 0.7;
    const slider = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.15, 0.035), sliderMat);
    slider.position.set(0, 0.12, 0);
    group.add(slider);
    
    // Label White
    const labelMat = material.clone();
    labelMat.color.setHex(0xffffff);
    const label = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.15, 0.035), labelMat);
    label.position.set(0, -0.12, 0.005); // Slightly out
    group.add(label);

    return group;
}

function createHeart() {
    const group = new THREE.Group();
    const heartMat = material.clone();
    heartMat.color.setHex(0xff0055); // Pink/Red
    
    // Heart shape using 3 shapes
    // Two spheres top, one cone bottom
    
    const leftLobe = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), heartMat);
    leftLobe.position.set(-0.15, 0.1, 0);
    group.add(leftLobe);
    
    const rightLobe = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), heartMat);
    rightLobe.position.set(0.15, 0.1, 0);
    group.add(rightLobe);
    
    const bottom = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.45, 8), heartMat);
    bottom.rotation.z = Math.PI; // upside down
    bottom.position.y = -0.15;
    group.add(bottom);

    return group;
}

function createRose() {
    const group = new THREE.Group();
    // Flower
    const petalMat = material.clone();
    petalMat.color.setHex(0xdd0000); // Dark Red
    
    const flower = new THREE.Mesh(new THREE.IcosahedronGeometry(0.15, 0), petalMat);
    flower.position.y = 0.2;
    group.add(flower);
    
    // Stem
    const stemMat = material.clone();
    stemMat.color.setHex(0x00aa00); // Green
    
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 4), stemMat);
    stem.position.y = -0.05;
    group.add(stem);
    
    // Leaf
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.15, 3), stemMat);
    leaf.position.set(0.05, -0.05, 0);
    leaf.rotation.z = -Math.PI / 4;
    group.add(leaf);

    return group;
}

function createRing() {
    const group = new THREE.Group();
    const goldMat = material.clone();
    goldMat.color.setHex(0xffd700); // Gold
    goldMat.metalness = 1.0;
    
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 4, 16), goldMat);
    group.add(band);
    
    // Diamond
    const gemMat = material.clone();
    gemMat.color.setHex(0xccffff); // Clear/Blueish
    gemMat.roughness = 0.0;
    gemMat.metalness = 0.1;
    gemMat.transparent = true;
    gemMat.opacity = 0.8;
    
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.08, 0), gemMat);
    gem.position.y = 0.15; // Top of ring
    group.add(gem);

    return group;
}

function createToxicBarrel() {
    const group = new THREE.Group();
    const barrelMat = material.clone();
    barrelMat.color.setHex(0xcccc00); // Warning Yellow
    
    // Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 12), barrelMat);
    group.add(body);
    
    // Sludge Top
    const sludgeMat = material.clone();
    sludgeMat.color.setHex(0x00ff00); // Reioactive Green
    sludgeMat.emissive = new THREE.Color(0x005500);
    
    const sludge = new THREE.Mesh(new THREE.CircleGeometry(0.18, 12), sludgeMat);
    sludge.rotation.x = -Math.PI / 2;
    sludge.position.y = 0.251; // Just above top
    group.add(sludge);
    
    // Ribs for barrel look (Torus rings)
    const ribMat = material.clone();
    ribMat.color.setHex(0x333333); // Dark
    
    const topRib = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.015, 2, 12), ribMat);
    topRib.rotation.x = Math.PI / 2;
    topRib.position.y = 0.15;
    group.add(topRib);
    
    const botRib = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.015, 2, 12), ribMat);
    botRib.rotation.x = Math.PI / 2;
    botRib.position.y = -0.15;
    group.add(botRib);

    return group;
}

function createGear() {
    const group = new THREE.Group();
    const gearMat = material.clone();
    gearMat.color.setHex(0x888888); // Grey
    gearMat.metalness = 0.6;
    
    // Core
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.05, 16), gearMat);
    core.rotation.x = Math.PI / 2;
    group.add(core);
    
    // Hole
    // Impossible in simple Mesh setup without CSG, so simulate hole with black circle? 
    // Or just make it solid. Solid is fine.
    
    // Teeth
    for(let i=0; i<8; i++) {
        const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.08), gearMat);
        const theta = (Math.PI * 2 / 8) * i;
        tooth.position.set(Math.cos(theta)*0.25, Math.sin(theta)*0.25, 0);
        tooth.rotation.z = theta;
        group.add(tooth);
    }

    return group;
}

function createDrone() {
    const group = new THREE.Group();
    const bodyMat = material.clone();
    bodyMat.color.setHex(0x333333); // Dark body
    
    // Central Body
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), bodyMat);
    group.add(body);
    
    // Eye/Sensor
    const sensorMat = material.clone();
    sensorMat.color.setHex(0xff0000); // Red eye
    sensorMat.emissive = new THREE.Color(0x550000);
    const sensor = new THREE.Mesh(new THREE.SphereGeometry(0.05), sensorMat);
    sensor.position.z = 0.12;
    group.add(sensor);
    
    // Arms & Props
    const propMat = material.clone();
    propMat.color.setHex(0xaaaaaa); // Silver props
    
    for(let i=0; i<4; i++) {
        const theta = (Math.PI * 2 / 4) * i + (Math.PI/4); // X shape
        const x = Math.cos(theta) * 0.3;
        const z = Math.sin(theta) * 0.3; // Actually lie flat in XZ plane relative to body?
        
        // Arm
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.02, 0.02), bodyMat);
        arm.position.set(x/2, 0, z/2);
        arm.rotation.y = -theta;
        group.add(arm);
        
        // Propeller
        const prop = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.01, 0.02), propMat);
        prop.position.set(x, 0.02, z);
        // Spin it randomly?
        prop.rotation.y = Math.random() * Math.PI;
        group.add(prop);
    }

    return group;
}

function createMagnifyingGlass() {
    const group = new THREE.Group();
    const frameMat = material.clone();
    frameMat.color.setHex(0x333333);
    
    // Ring
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.03, 4, 16), frameMat);
    group.add(ring);
    
    // Glass
    const glassMat = material.clone();
    glassMat.color.setHex(0xaaddff);
    glassMat.transparent = true;
    glassMat.opacity = 0.3;
    glassMat.roughness = 0.1;
    
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.01, 16), glassMat);
    glass.rotation.x = Math.PI / 2;
    group.add(glass);
    
    // Handle
    const handleMat = material.clone();
    handleMat.color.setHex(0x5A3A29); // Wood
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3, 8), handleMat);
    handle.position.y = -0.35;
    group.add(handle);

    return group;
}

function createCamera() {
    const group = new THREE.Group();
    const bodyMat = material.clone();
    bodyMat.color.setHex(0x222222);
    
    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.1), bodyMat);
    group.add(body);
    
    // Lens
    const lensMat = material.clone();
    lensMat.color.setHex(0x111111);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.1, 16), lensMat);
    lens.rotation.x = Math.PI / 2;
    lens.position.z = 0.05;
    group.add(lens);
    
    // Flash/Viewfinder bumps
    const bump = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.1), bodyMat);
    bump.position.y = 0.12;
    group.add(bump);

    return group;
}

function createWalkieTalkie() {
    const group = new THREE.Group();
    const bodyMat = material.clone();
    bodyMat.color.setHex(0x111111);
    
    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.35, 0.08), bodyMat);
    group.add(body);
    
    // Antenna
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.2, 4), bodyMat);
    ant.position.set(-0.04, 0.25, 0);
    group.add(ant);
    
    // Speaker Grill (Texture/Color would be better but geometry...)
    // Simple knob
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.05, 8), bodyMat);
    knob.position.set(0.04, 0.2, 0);
    group.add(knob);

    return group;
}

function createGlobe() {
    const group = new THREE.Group();
    const oceanMat = material.clone();
    oceanMat.color.setHex(0x1144aa); // Ocean Blue
    
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), oceanMat);
    group.add(sphere);
    
    // Checkers/Spots for continents? 
    // Just a green patches
    const landMat = material.clone();
    landMat.color.setHex(0x228822); // Green
    
    for(let i=0; i<5; i++) {
        const land = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 6), landMat);
        // Random point on sphere
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        
        land.position.set(
            0.28 * Math.sin(phi) * Math.cos(theta),
            0.28 * Math.sin(phi) * Math.sin(theta),
            0.28 * Math.cos(phi)
        );
        group.add(land);
    }
    
    // Stand? Floating globe is cooler.

    return group;
}

function createAirplane() {
    const group = new THREE.Group();
    const whiteMat = material.clone();
    whiteMat.color.setHex(0xffffff);
    
    // Fuselage
    const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 8), whiteMat);
    fuse.rotation.z = Math.PI / 2;
    group.add(fuse);
    
    // Wings
    const wings = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.02, 0.6), whiteMat);
    wings.position.x = 0.05;
    group.add(wings);
    
    // Tail
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.02, 0.2), whiteMat);
    tail.position.x = -0.2;
    tail.position.y = 0.05;
    group.add(tail);
    
    // Fin
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 0.02), whiteMat);
    fin.position.x = -0.2;
    fin.position.y = 0.05;
    group.add(fin);

    return group;
}

function createPassport() {
    const group = new THREE.Group();
    const coverMat = material.clone();
    coverMat.color.setHex(0x000088); // Navy Blue
    
    const book = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.05), coverMat);
    group.add(book);
    
    // Gold stamp
    const goldMat = material.clone();
    goldMat.color.setHex(0xffd700);
    goldMat.metalness = 0.8;
    
    const emblem = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.06), goldMat);
    emblem.position.z = 0.001;
    group.add(emblem);

    return group;
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
        // Camera looks along X axis (from +X to 0)
        // So background depth should be X axis.
        
        const radius = Math.random() * 30; 
        const angle = Math.random() * Math.PI * 2;
        
        // Depth is X (negative is behind the book)
        mesh.position.x = -10 - Math.random() * 90; 
        
        // Tunnel is Y/Z plane
        mesh.position.y = Math.sin(angle) * radius * 0.6; 
        mesh.position.z = Math.cos(angle) * radius; 
        
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
        
        // Move forward along X (towards camera)
        mesh.position.x += 0.05; 
        
        // Radial Expansion (Move away from center Y/Z)
        mesh.position.y += mesh.position.y * 0.002;
        mesh.position.z += mesh.position.z * 0.002;

        // Respawn if behind camera (Camera is at x=0.6, so x>5 is well past)
        if (mesh.position.x > 5) {
            mesh.position.x = -100;
            
            // Respawn Tightly at Center
            const radius = Math.random() * 5; 
            const angle = Math.random() * Math.PI * 2;
            
            mesh.position.y = Math.sin(angle) * radius * 0.5;
            mesh.position.z = Math.cos(angle) * radius;
        }
    });
}
