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

export function createDNA() {
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

export function createFlask() {
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

export function createCrystal() {
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

export function createSword() {
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

export function createShield() {
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

export function createCoin() {
    const group = new THREE.Group();
    const goldMat = material.clone();
    goldMat.color.setHex(0xffd700); // Gold
    goldMat.metalness = 1.0;
    goldMat.roughness = 0.2;

    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32), goldMat);
    coin.rotation.x = Math.PI / 2;
    group.add(coin);

    return group;
}

export function createBriefcase() {
    const group = new THREE.Group();
    const leatherMat = material.clone();
    leatherMat.color.setHex(0x8B4513); // Saddle Brown
    leatherMat.roughness = 0.6;
    
    const caseMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.1), leatherMat);
    group.add(caseMesh);
    
    // Handle
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.02, 3, 8), leatherMat);
    handle.position.y = 0.25;
    group.add(handle);

    return group;
}

export function createChart() {
    const group = new THREE.Group();
    const barMat = material.clone();
    
    // 3 Bars
    for(let i=0; i<3; i++) {
        const h = Math.random() * 0.4 + 0.1;
        const barColor = getRandomColor();
        const mat = barMat.clone(); mat.color.setHex(barColor);
        
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.1, h, 0.05), mat);
        bar.position.x = (i - 1) * 0.15;
        bar.position.y = (h / 2) - 0.25;
        group.add(bar);
    }
    
    // Axis lines
    const lineMat = material.clone(); lineMat.color.setHex(0x000000);
    const xAxis = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.01, 0.01), lineMat);
    xAxis.position.y = -0.25;
    group.add(xAxis);
    
    const yAxis = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.5, 0.01), lineMat);
    yAxis.position.x = -0.25;
    group.add(yAxis);

    return group;
}

export function createSatellite() {
    const group = new THREE.Group();
    const metalMat = material.clone(); 
    metalMat.color.setHex(0xdddddd);
    metalMat.metalness = 0.8;
    
    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), metalMat);
    group.add(body);
    
    // Panels
    const panelMat = material.clone();
    panelMat.color.setHex(0x000088); // Blue solar
    panelMat.roughness = 0.2;
    
    const panelL = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.02), panelMat);
    panelL.position.x = -0.35;
    group.add(panelL);
    
    const panelR = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.02), panelMat);
    panelR.position.x = 0.35;
    group.add(panelR);
    
    return group;
}

export function createUFO() {
    const group = new THREE.Group();
    const hullMat = material.clone();
    hullMat.color.setHex(0xaaaaaa);
    hullMat.metalness = 0.6;
    
    // Saucer
    const saucer = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.4, 0.1, 16), hullMat);
    group.add(saucer);
    
    // Dome
    const domeMat = material.clone();
    domeMat.color.setHex(0xccffcc); // Glassy green
    domeMat.roughness = 0.1;
    domeMat.transparent = true;
    domeMat.opacity = 0.8;
    
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 8, 0, Math.PI * 2, 0, Math.PI/2), domeMat);
    dome.position.y = 0.02;
    group.add(dome);
    
    return group;
}

export function createPlanet() {
    const group = new THREE.Group();
    const planetColor = getRandomColor();
    const pMat = material.clone();
    pMat.color.setHex(planetColor);
    
    const planet = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), pMat);
    group.add(planet);
    
    // Ring
    const ringMat = material.clone();
    ringMat.color.setHex(0xaaaaaa);
    ringMat.transparent = true;
    ringMat.opacity = 0.6;
    
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.05, 2, 24), ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.rotation.y = Math.PI / 6;
    group.add(ring);
    
    return group;
}

export function createVirus() {
    const group = new THREE.Group();
    const vMat = material.clone();
    vMat.color.setHex(0xff0000); // Danger red
    
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), vMat);
    group.add(core);
    
    // Spikes
    for(let i=0; i<6; i++) {
        const spike = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 4), vMat);
        // Distribute randomly? Or axis aligned for simplicity
        if (i<2) { spike.rotation.x = Math.PI/2; spike.rotation.z = i*Math.PI; }
        else if (i<4) { spike.rotation.z = Math.PI/2; }
        // Simple 3 axis cross
        else { spike.rotation.y = Math.PI/2; }
        group.add(spike);
    }
    
    return group;
}

export function createPetriDish() {
    const group = new THREE.Group();
    const glassMat = material.clone();
    glassMat.color.setHex(0xffffff);
    glassMat.transparent = true;
    glassMat.opacity = 0.3;
    
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 16), glassMat);
    dish.rotation.x = Math.PI/2;
    group.add(dish);
    
    // Blobs inside
    const blobMat = material.clone();
    blobMat.color.setHex(0x00ff00);
    
    for(let i=0; i<3; i++) {
        const blob = new THREE.Mesh(new THREE.SphereGeometry(0.05, 4, 4), blobMat);
        blob.position.x = (Math.random()-0.5)*0.3;
        blob.position.y = (Math.random()-0.5)*0.3;
        blob.position.z = 0.02;
        group.add(blob);
    }
    
    return group;
}

export function createMushroom() {
    const group = new THREE.Group();
    
    // Stem
    const stemMat = material.clone(); stemMat.color.setHex(0xffffff);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.3, 6), stemMat);
    group.add(stem);
    
    // Cap
    const capMat = material.clone(); capMat.color.setHex(getRandomColor());
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8, 0, Math.PI*2, 0, Math.PI/2), capMat);
    cap.position.y = 0.15;
    group.add(cap);
    
    return group;
}

export function createCompass() {
    const group = new THREE.Group();
    const brassMat = material.clone();
    brassMat.color.setHex(0xb5a642); 
    
    const caseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 16), brassMat);
    caseMesh.rotation.x = Math.PI/2;
    group.add(caseMesh);
    
    // Needle
    const needleMat = material.clone(); needleMat.color.setHex(0xff0000);
    const needle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.02), needleMat);
    needle.position.z = 0.03;
    group.add(needle);
    
    return group;
}

export function createScroll() {
    const group = new THREE.Group();
    const paperMat = material.clone();
    paperMat.color.setHex(0xf4e4bc);
    
    // Rolled part
    const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8), paperMat);
    group.add(cylinder);
    
    // Unrolled sheet? Just keep it rolled for simplicity
    
    return group;
}

export function createLantern() {
    const group = new THREE.Group();
    const metalMat = material.clone();
    metalMat.color.setHex(0x333333);
    
    // Frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.4, 0.2), metalMat);
    group.add(frame);
    
    // Light
    const lightMat = material.clone();
    lightMat.color.setHex(0xffffaa);
    lightMat.emissive = new THREE.Color(0xffffaa);
    lightMat.emissiveIntensity = 0.5;
    
    const light = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 0.15), lightMat);
    group.add(light);
    
    return group;
}

export function createHeart() {
    const group = new THREE.Group();
    const color = 0xff0000; // Red
    const mat = material.clone();
    mat.color.setHex(color);

    // Two spheres + cone?
    // Shape geometry is better but for primitive composition:
    const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), mat);
    s1.position.x = -0.1;
    s1.position.y = 0.1;
    group.add(s1);
    
    const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), mat);
    s2.position.x = 0.1;
    s2.position.y = 0.1;
    group.add(s2);
    
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.4, 8), mat);
    cone.rotation.z = Math.PI;
    cone.position.y = -0.1;
    group.add(cone);

    return group;
}

export function createRose() {
    const group = new THREE.Group();
    const petalMat = material.clone();
    petalMat.color.setHex(0xff0066);
    
    // Approximated by layers of cones/circles
    const center = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 8), petalMat);
    group.add(center);
    
    const outer = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.05, 3, 5), petalMat);
    outer.rotation.x = -Math.PI/2;
    outer.position.y = 0.05;
    group.add(outer);
    
    // Stem
    const stemMat = material.clone(); stemMat.color.setHex(0x00aa00);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 4), stemMat);
    stem.position.y = -0.25;
    group.add(stem);
    
    return group;
}

export function createRing() {
    const group = new THREE.Group();
    const bandMat = material.clone();
    bandMat.color.setHex(0xffd700); // Gold
    bandMat.metalness = 1.0;
    
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.03, 8, 16), bandMat);
    group.add(band);
    
    // Gem
    const gemMat = material.clone();
    gemMat.color.setHex(0x0000ff);
    gemMat.roughness = 0;
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.08), gemMat);
    gem.position.y = 0.15;
    group.add(gem);
    
    return group;
}

export function createToxicBarrel() {
    const group = new THREE.Group();
    const metalMat = material.clone();
    metalMat.color.setHex(0x00ff00); // Green barrel
    
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.6, 16), metalMat);
    group.add(barrel);
    
    // Ribs
    const ribMat = material.clone(); ribMat.color.setHex(0x004400);
    const r1 = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.02, 4, 16), ribMat);
    r1.rotation.x = Math.PI/2;
    r1.position.y = 0.15;
    group.add(r1);
    
    const r2 = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.02, 4, 16), ribMat);
    r2.rotation.x = Math.PI/2;
    r2.position.y = -0.15;
    group.add(r2);
    
    return group;
}

export function createGear() {
    const group = new THREE.Group();
    const gearMat = material.clone();
    gearMat.color.setHex(0x777777); 
    gearMat.metalness = 0.6;
    
    const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.05, 8), gearMat);
    disk.rotation.x = Math.PI/2;
    group.add(disk);
    
    // Teeth? The cylinder with 8 segments is already gear-ish
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.06, 8), gearMat);
    hub.rotation.x = Math.PI/2;
    group.add(hub);
    
    return group;
}

export function createDrone() {
    const group = new THREE.Group();
    const bodyMat = material.clone();
    bodyMat.color.setHex(0xffffff);
    
    // X frame
    const arm1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.05), bodyMat);
    group.add(arm1);
    const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.05), bodyMat);
    arm2.rotation.y = Math.PI/2;
    group.add(arm2);
    
    // Rotors
    const rotorMat = material.clone(); rotorMat.color.setHex(0x222222);
    
    const pos = [0.3, -0.3];
    pos.forEach(x => {
        pos.forEach(z => {
             const r = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.02, 8), rotorMat);
             r.position.set(x, 0.05, z);
             group.add(r);
        });
    });
    
    return group;
}

export function createMagnifyingGlass() {
    const group = new THREE.Group();
    const frameMat = material.clone();
    frameMat.color.setHex(0x333333); // Dark metal/plastic
    
    // Frame
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.02, 4, 16), frameMat);
    group.add(ring);
    
    // Glass
    const glassMat = material.clone();
    glassMat.color.setHex(0xccffff);
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

export function createCamera() {
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

export function createWalkieTalkie() {
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

export function createGlobe() {
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

export function createAirplane() {
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

export function createPassport() {
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

export function createMicrochip() {
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

export function createRobotHead() {
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

export function createFloppyDisk() {
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
