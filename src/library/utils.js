import * as THREE from 'three';

export function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d)) return '';
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function createWoodTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base Color (Warm Oak)
    ctx.fillStyle = '#8B5A2B';
    ctx.fillRect(0, 0, 512, 512);

    // Grain Pattern
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = '#3E2723'; // Darker brown for grain

    // Noise/Grain Lines
    for (let i = 0; i < 2000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const w = 100 + Math.random() * 200; // Long streaks
        const h = 2 + Math.random() * 3;     // Thin lines

        ctx.beginPath();
        ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    // Knots
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 5; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const size = 10 + Math.random() * 20;

        ctx.beginPath();
        // Vortex effect for knots
        for (let r = size; r > 0; r -= 2) {
            ctx.ellipse(x, y, r, r * 0.8, Math.random(), 0, Math.PI * 2);
            ctx.stroke();
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;

    return texture;
}
