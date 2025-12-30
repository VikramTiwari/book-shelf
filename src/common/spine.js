import * as THREE from 'three';

const REALISTIC_COLORS = [
    // Reds / Maroons
    0x8B0000, 0x800000, 0xA52A2A, 0xB22222, 0xCD5C5C, 0x9e1b32, 0x6e0d25,
    // Blues / Navies
    0x000080, 0x191970, 0x00008B, 0x483D8B, 0x4682B4, 0x5F9EA0, 0x002366, 0x0f52ba,
    // Greens / Olives
    0x006400, 0x556B2F, 0x2E8B57, 0x8FBC8F, 0x228B22, 0x355e3b, 0x4a5d23,
    // Browns / Tans / Leathers
    0x8B4513, 0xA0522D, 0xD2691E, 0xCD853F, 0xDEB887, 0xF5DEB3, 0x49372B, 0x6F4E37,
    // Neutrals / Greys / Blacks
    0x2F4F4F, 0x708090, 0x778899, 0x696969, 0x1C1C1C, 0x36454F, 0x28282B,
    // Purples / Deep
    0x4B0082, 0x483D8B, 0x2F2F4F, 0x5D478B, 0x301934
];

const GENRE_FONTS = {
    'Sci-Fi': ['Orbitron', 'Roboto', 'Montserrat'],
    'Fantasy': ['Cormorant Garamond', 'Cinzel', 'Playfair Display'],
    'Horror': ['Creepster', 'Oswald', 'Anton'],
    'Romance': ['Great Vibes', 'Dancing Script', 'Lora'],
    'History': ['Crimson Text', 'Merriweather'],
    'Mystery': ['Courier Prime', 'Special Elite', 'Roboto Mono'],
    'Biography': ['Libre Baskerville', 'Lora', 'Georgia'],
    'Philosophy': ['EB Garamond', 'Cardo', 'Philosopher'],
    'Travel': ['Montserrat', 'Raleway', 'Ubuntu'],
    'Art': ['Jost', 'Hind', 'Raleway'],
    'Classics': ['EB Garamond', 'Cinzel', 'Playfair Display'],
    'Children': ['Comic Neue', 'Fredoka', 'Outfit'],
    'Default': ['Josefin Sans', 'Roboto', 'Outfit', 'Lato', 'Open Sans', 'Montserrat', 'Raleway', 'Ubuntu', 'Merriweather', 'Lora', 'Crimson Text', 'Cardo', 'Philosopher']
};

export async function preloadGenreFonts() {
    const allFonts = new Set(Object.values(GENRE_FONTS).flat());
    const promises = [];
    allFonts.forEach(font => {
        promises.push(document.fonts.load(`1em "${font}"`));
    });
    console.log(`Preloading ${allFonts.size} fonts for canvas...`);
    await Promise.all(promises);
    console.log("All fonts loaded.");
}

export function drawRatingStar(ctx, x, y, size, rating) {
    // rating is 0-5
    // "5 star armed forces" -> Pentagon arrangement (General of the Army)
    // 5 stars arranged in a circle.
    
    // Radius of the circle on which stars are placed
    const groupRadius = size * 0.35; 
    // Size of each individual star
    const starRadius = size * 0.12; 

    // Angles for the 5 stars (starting from top, clockwise)
    // Top is -90 degrees (in canvas 0 is Right, -90 is Up)
    // 5 points: -90, -18, 54, 126, 198.
    const angles = [
        -Math.PI / 2,                         // Top
        -Math.PI / 2 - (Math.PI * 2 / 5) * 1, // Top Left
        -Math.PI / 2 - (Math.PI * 2 / 5) * 2, // Bot Left
        -Math.PI / 2 - (Math.PI * 2 / 5) * 3, // Bot Right
        -Math.PI / 2 - (Math.PI * 2 / 5) * 4  // Top Right
    ];

    ctx.save();
    ctx.translate(x, y);

    // Draw 5 stars
    angles.forEach((angle, index) => {
        const sx = Math.cos(angle) * groupRadius;
        const sy = Math.sin(angle) * groupRadius;
        
        // Determine fill for this specific star
        // Star 1 (index 0) represents rating 0-1
        // Star 2 (index 1) represents rating 1-2
        // etc.
        const starValue = Math.max(0, Math.min(1, rating - index));

        drawSingleSmallStar(ctx, sx, sy, starRadius, starValue);
    });

    ctx.restore();
}

function drawSingleSmallStar(ctx, x, y, radius, fillPct) {
    ctx.save();
    ctx.translate(x, y);

    ctx.beginPath();
    const spikes = 5;
    const outerRadius = radius;
    const innerRadius = radius / 2; // fatter stars for rank look?
    let rot = Math.PI / 2 * 3;
    const step = Math.PI / spikes;

    ctx.moveTo(0, 0 - outerRadius);
    for (let i = 0; i < spikes; i++) {
        let x = Math.cos(rot) * outerRadius;
        let y = Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(0, 0 - outerRadius);
    ctx.closePath();

    // Fill Background
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fill();

    // Fill Foreground
    if (fillPct > 0) {
        ctx.save();
        ctx.clip();
        
        ctx.fillStyle = '#FFD700';
        // Fill from left to right? Or bottom up?
        // Standard rating stars usually fill Left-Right.
        const fillW = (radius * 2) * fillPct;
        ctx.fillRect(-radius, -radius, fillW, radius * 2);
        
        ctx.restore();
    }

    // Stroke
    ctx.strokeStyle = '#B8860B';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
}

export function drawLinearRating(ctx, x, y, size, rating, color = '#F7F5E6') {
    // Traditional 5 stars in a row
    // size is total width.
    // gap between stars
    const starCount = 5;
    const gap = size * 0.05;
    const starW = (size - (gap * (starCount - 1))) / starCount;
    const starRadius = starW / 2;
    
    // x is center of the GROUP? Or left?
    // Let's assume x is center to match other apis
    const startX = x - (size / 2) + starRadius;

    ctx.save();
    
    for (let i = 0; i < starCount; i++) {
        const sx = startX + i * (starW + gap);
        const val = Math.max(0, Math.min(1, rating - i));
        
        drawSingleLinearStar(ctx, sx, y, starRadius, val, color);
    }
    
    ctx.restore();
}

function drawSingleLinearStar(ctx, x, y, radius, fillPct, color) {
    ctx.save();
    ctx.translate(x, y);

    ctx.beginPath();
    const spikes = 5;
    const outerRadius = radius;
    const innerRadius = radius * 0.4;
    let rot = Math.PI / 2 * 3;
    const step = Math.PI / spikes;

    ctx.moveTo(0, 0 - outerRadius);
    for (let i = 0; i < spikes; i++) {
        let x = Math.cos(rot) * outerRadius;
        let y = Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(0, 0 - outerRadius);
    ctx.closePath();
    
    // Fill Background (Empty/Outline or very faint)
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fill(); // faint backing

    // Fill Foreground
    if (fillPct > 0) {
        ctx.save();
        ctx.clip();
        
        ctx.fillStyle = color;
        const fillW = (radius * 2) * fillPct;
        ctx.fillRect(-radius, -radius, fillW, radius * 2);
        
        ctx.restore();
    }
    
    // Outline
    ctx.strokeStyle = color; // Outline matches fill color but maybe thinner?
    // Or maybe outline should be dark?
    // User said "color for stars should be the same off-white".
    // Usually that means the fill. The outline helps visibility.
    // Let's make outline faint version of color? Or standard dark?
    // Let's use the color itself for stroke but low opacity if empty?
    // Actually standard rating stars often have a border.
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
}

export function getBookColor(book) {
    // Consistent random color based on title hash
    const str = book.title || "book";
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % REALISTIC_COLORS.length;
    return new THREE.Color(REALISTIC_COLORS[index]);
}


function getPrimaryGenre(book) {
    const raw = (book.genre || '') + ' ' + (book.title || '');
    const lower = raw.toLowerCase();

    // Ordered by specificity
    if (lower.includes('science fiction') || lower.includes('sci-fi') || lower.includes('space') || lower.includes('robot') || lower.includes('cyberpunk') || lower.includes('alien') || lower.includes('dune')) return 'Sci-Fi';
    if (lower.includes('fantasy') || lower.includes('dragon') || lower.includes('magic') || lower.includes('wizard') || lower.includes('potter')) return 'Fantasy';
    if (lower.includes('horror') || lower.includes('ghost') || lower.includes('dead') || lower.includes('zombie')) return 'Horror';
    if (lower.includes('mystery') || lower.includes('thriller') || lower.includes('crime') || lower.includes('detective') || lower.includes('murder')) return 'Mystery';
    if (lower.includes('romance') || lower.includes('love') || lower.includes('kiss')) return 'Romance';

    if (lower.includes('biography') || lower.includes('memoir') || lower.includes('autobiography') || lower.includes('life of') || lower.includes('diaries')) return 'Biography';

    if (lower.includes('philosophy') || lower.includes('psychology') || lower.includes('thinking') || lower.includes('logic') || lower.includes('mind') || lower.includes('wisdom')) return 'Philosophy';

    if (lower.includes('travel') || lower.includes('journey') || lower.includes('voyage') || lower.includes('trip') || lower.includes('adventure')) return 'Travel';

    if (lower.includes('art') || lower.includes('design') || lower.includes('painter') || lower.includes('architecture')) return 'Art';

    if (lower.includes('history') || lower.includes('historical') || lower.includes('war')) return 'History';

    if (lower.includes('classic') || lower.includes('literature') || lower.includes('homer') || lower.includes('iliad') || lower.includes('odyssey')) return 'Classics';

    if (lower.includes('children')) return 'Children';

    return 'Default';
}

function getFontForGenre(bookOrGenre) {
    // Determine genre if passed an object, otherwise use string
    let genre = 'Default';
    if (typeof bookOrGenre === 'object') {
        genre = getPrimaryGenre(bookOrGenre);
    } else if (typeof bookOrGenre === 'string') {
        genre = bookOrGenre;
    }
    const fonts = GENRE_FONTS[genre] || GENRE_FONTS['Default'];
    return fonts[Math.floor(Math.random() * fonts.length)];
}

function adjustBrightness(hex, percent) {
    if (!hex) return '#000000';
    hex = hex.replace(/^\s*#|\s*$/g, '');
    if (hex.length === 3) hex = hex.replace(/(.)/g, '$1$1');

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    // Percent is -100 to 100
    // If positive, mix with white? Or just add value?
    // Standard approach:
    const amt = Math.floor(2.55 * percent);
    r = Math.min(255, Math.max(0, r + amt));
    g = Math.min(255, Math.max(0, g + amt));
    b = Math.min(255, Math.max(0, b + amt));

    return '#' +
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0');
}

function getLuminance(hex) {
    hex = hex.replace(/^\s*#|\s*$/g, '');
    if (hex.length === 3) hex = hex.replace(/(.)/g, '$1$1');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;

    const a = [r, g, b].map(function (v) {
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function drawMaterialTexture(ctx, w, h, materialType) {
    ctx.save();

    if (materialType === 'Leather') {
        // Pebbled Effect
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = '#000';
        for (let i = 0; i < 1000; i++) {
            const size = Math.random() * 3 + 1;
            ctx.beginPath();
            ctx.arc(Math.random() * w, Math.random() * h, size, 0, Math.PI * 2);
            ctx.fill();
        }
        // Cracks
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.beginPath();
        for (let j = 0; j < 20; j++) {
            ctx.moveTo(Math.random() * w, Math.random() * h);
            ctx.lineTo(Math.random() * w, Math.random() * h);
        }
        ctx.stroke();
    }
    else if (materialType === 'Cloth') {
        // Fine Crosshatch
        ctx.globalAlpha = 0.15;
        ctx.fillStyle = '#111';
        for (let i = 0; i < h; i += 2) if (i % 4 === 0) ctx.fillRect(0, i, w, 1);
        for (let i = 0; i < w; i += 2) if (i % 4 === 0) ctx.fillRect(i, 0, 1, h);
    }
    else if (materialType === 'Buckram') {
        // Heavy Canvas
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = '#000';
        for (let i = 0; i < h; i += 3) ctx.fillRect(0, i, w, 1);
        for (let i = 0; i < w; i += 3) ctx.fillRect(i, 0, 1, h);
        // Noise bleed
        ctx.globalAlpha = 0.1;
        for (let k = 0; k < 300; k++) ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
    else if (materialType === 'Paper') {
        // Matte / Noise
        ctx.globalAlpha = 0.08;
        ctx.fillStyle = '#222';
        for (let k = 0; k < 800; k++) ctx.fillRect(Math.random() * w, Math.random() * h, 1, 1);
    }
    // 'Glossy' leaves it mostly clear (just gradient)

    ctx.restore();
}


export function getBookMaterial(book) {
    const matTypes = ['Leather', 'Cloth', 'Buckram', 'Paper', 'Leather', 'Cloth'];
    const titleHash = (book.title || '').length + (parseInt(book.year) || 0);
    return matTypes[titleHash % matTypes.length];
}

export function createSpineTexture(width, height, colorObj, book, materialTypeOverride = null) {
    const canvas = document.createElement('canvas');
    const aspect = width / height;
    const h = 1024;
    const w = Math.ceil(h * aspect);

    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');

    // --- 0. Pre-calculate Age ---
    const currentYear = new Date().getFullYear();
    const year = parseInt(book.year);
    const age = !isNaN(year) ? Math.max(0, currentYear - year) : 0;
    const ageFactor = Math.min(age, 100) / 100;

    // --- 1. Base Gradient ---
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    const baseColor = '#' + colorObj.getHexString();
    grad.addColorStop(0, adjustBrightness(baseColor, -40));
    grad.addColorStop(0.2, baseColor);
    grad.addColorStop(0.5, adjustBrightness(baseColor, 20));
    grad.addColorStop(0.8, baseColor);
    grad.addColorStop(1, adjustBrightness(baseColor, -40));

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // --- 2. Material Texture Overlay ---
    const material = materialTypeOverride || getBookMaterial(book);

    drawMaterialTexture(ctx, w, h, material);

    // --- 3. Genre Patterns ---
    const genre = getPrimaryGenre(book);
    const lum = getLuminance(baseColor);
    const isDark = lum < 0.5;

    const patternColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';
    const textColor = isDark
        ? `rgba(255, 255, 255, ${0.9 - (ageFactor * 0.4)})`
        : `rgba(0, 0, 0, ${0.8 - (ageFactor * 0.4)})`;

    ctx.save();
    ctx.strokeStyle = patternColor;
    ctx.fillStyle = patternColor;
    ctx.lineWidth = Math.max(2, w * 0.05);
    const cx = w / 2;
    // Standardize star size (e.g., 60px), but limit to width for thin books
    const targetStarSize = 60; 
    const starSize = Math.min(targetStarSize, w * 0.85);
    const starY = 50; // Fixed distance from top edge

    // Shift top genre icon down. 
    // It should be below the star. 
    // Star ends at roughly starY + starSize/2.
    // Padding 20.
    // Icon starts at starY + starSize/2 + 20 + iconSize/2
    const iconSize = w * 0.5;
    const topY = starY + (starSize / 2) + 30 + (iconSize / 2);
    
    const botY = h - (w * 0.6);

    // Draw Rating Star
    // Top of spine (near 0)
    const rating = book.average_rating || 0;
    if (rating > 0) {
        drawRatingStar(ctx, cx, starY, starSize, rating);
    }

    if (genre === 'Sci-Fi') {
        // Tech
        ctx.beginPath(); ctx.arc(cx, topY, iconSize / 2, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, botY, iconSize / 2, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, topY + iconSize / 2); ctx.lineTo(cx, botY - iconSize / 2); ctx.stroke();
    }
    else if (genre === 'Fantasy') {
        // Diamond
        ctx.beginPath(); ctx.moveTo(cx, topY - iconSize / 2); ctx.lineTo(cx + iconSize / 2, topY); ctx.lineTo(cx, topY + iconSize / 2); ctx.lineTo(cx - iconSize / 2, topY); ctx.closePath(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx, botY - iconSize / 2); ctx.lineTo(cx + iconSize / 2, botY); ctx.lineTo(cx, botY + iconSize / 2); ctx.lineTo(cx - iconSize / 2, botY); ctx.closePath(); ctx.stroke();
    }
    else if (genre === 'Mystery') {
        // Target
        ctx.beginPath(); ctx.arc(cx, topY, iconSize / 2, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, topY, iconSize / 4, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx, botY, iconSize / 2, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, botY, iconSize / 4, 0, Math.PI * 2); ctx.fill();
    }
    else if (genre === 'Horror') {
        // Jagged
        ctx.beginPath(); ctx.moveTo(cx - iconSize / 2, topY - iconSize / 2); ctx.lineTo(cx, topY + iconSize / 4); ctx.lineTo(cx + iconSize / 2, topY - iconSize / 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, botY, iconSize / 3, 0, Math.PI * 2); ctx.fill();
    }
    else if (genre === 'Romance') {
        // Hearts/Circles
        ctx.beginPath(); ctx.arc(cx, topY, iconSize / 3, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, botY, iconSize / 3, 0, Math.PI * 2); ctx.stroke();
    }
    else if (genre === 'History') {
        // Pillars
        const sep = iconSize / 3;
        ctx.beginPath(); ctx.moveTo(w * 0.2, topY - sep); ctx.lineTo(w * 0.8, topY - sep); ctx.moveTo(w * 0.2, topY + sep); ctx.lineTo(w * 0.8, topY + sep); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(w * 0.2, botY - sep); ctx.lineTo(w * 0.8, botY - sep); ctx.moveTo(w * 0.2, botY + sep); ctx.lineTo(w * 0.8, botY + sep); ctx.stroke();
    }
    else if (genre === 'Biography') {
        // Cameo / Profile Frame (Oval)
        ctx.beginPath(); ctx.ellipse(cx, topY, iconSize / 2, iconSize / 1.5, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(cx, botY, iconSize / 2, iconSize / 1.5, 0, 0, Math.PI * 2); ctx.stroke();
    }
    else if (genre === 'Philosophy') {
        // Greek Key (Simplified) / Square Wave
        ctx.strokeRect(cx - iconSize / 2, topY - iconSize / 2, iconSize, iconSize);
        ctx.strokeRect(cx - iconSize / 4, topY - iconSize / 4, iconSize / 2, iconSize / 2);

        ctx.strokeRect(cx - iconSize / 2, botY - iconSize / 2, iconSize, iconSize);
        ctx.strokeRect(cx - iconSize / 4, botY - iconSize / 4, iconSize / 2, iconSize / 2);
    }
    else if (genre === 'Travel') {
        // Compass Star
        ctx.beginPath();
        ctx.moveTo(cx, topY - iconSize / 2); ctx.lineTo(cx + iconSize / 4, topY); ctx.lineTo(cx, topY + iconSize / 2); ctx.lineTo(cx - iconSize / 4, topY); ctx.closePath(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, botY - iconSize / 2); ctx.lineTo(cx + iconSize / 4, botY); ctx.lineTo(cx, botY + iconSize / 2); ctx.lineTo(cx - iconSize / 4, botY); ctx.closePath(); ctx.stroke();
    }
    else if (genre === 'Art') {
        // Geometric / Mondrian
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(cx - iconSize / 2, topY - iconSize / 2, iconSize / 2, iconSize / 2);
        ctx.strokeRect(cx, topY, iconSize / 2, iconSize / 2);

        ctx.strokeRect(cx - iconSize / 2, botY - iconSize / 2, iconSize, iconSize);
    }
    else if (genre === 'Classics') {
        // Ornate Corners
        ctx.beginPath(); ctx.moveTo(w * 0.2, topY); ctx.lineTo(w * 0.2, topY - iconSize / 3); ctx.lineTo(w * 0.5, topY - iconSize / 3); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(w * 0.8, topY); ctx.lineTo(w * 0.8, topY - iconSize / 3); ctx.lineTo(w * 0.5, topY - iconSize / 3); ctx.stroke();

        ctx.beginPath(); ctx.moveTo(w * 0.2, botY); ctx.lineTo(w * 0.2, botY + iconSize / 3); ctx.lineTo(w * 0.5, botY + iconSize / 3); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(w * 0.8, botY); ctx.lineTo(w * 0.8, botY + iconSize / 3); ctx.lineTo(w * 0.5, botY + iconSize / 3); ctx.stroke();
    }
    else {
        // Default Bands
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fillRect(w * 0.2, topY, w * 0.6, w * 0.1);
        ctx.fillRect(w * 0.2, botY, w * 0.6, w * 0.1);
    }

    // Ribbons
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    for (let i = 1; i < 5; i++) {
        const by = (h / 5) * i;
        ctx.fillRect(0, by - 2, w, 4);
    }
    ctx.restore();

    // --- 4. Aging ---
    if (age > 0) {
        // Dark Grime
        ctx.fillStyle = `rgba(40, 30, 15, ${0.1 + ageFactor * 0.7})`;
        ctx.fillRect(0, 0, w, h);

        // Scratches
        if (age > 5) {
            ctx.save();
            ctx.globalAlpha = 0.2 + (ageFactor * 0.4);
            ctx.fillStyle = '#111';
            for (let k = 0; k < (20 + ageFactor * 50); k++) {
                const rx = Math.random() * w;
                const ry = Math.random() * h;
                ctx.fillRect(rx, ry, Math.random() * w * 0.3, 1 + Math.random() * 2);
            }
            ctx.restore();
        }
    }

    // --- 5. Text ---
    const fontName = getFontForGenre(genre); // Uses new function
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';



    let columns = [];

    // Truncate title at separators
    let displayTitle = book.title || "Unknown";
    const separators = [':', '-', '–', '('];
    for (const sep of separators) {
        if (displayTitle.includes(sep)) {
            displayTitle = displayTitle.split(sep)[0].trim();
            break; // Stop at first separator found
        }
    }

    const plainWords = displayTitle.split(' ');

    // Algorithm: Try largest font that fits
    // We strive for 1, 2, or 3 lines depending on width
    const fontSizes = [70, 60, 55, 50, 45, 40, 35, 30];
    let selectedFontSize = 30;
    let selectedColumns = [displayTitle];
    const maxLen = h * 0.85;

    // Limit max lines for thinner books to avoid crowding
    // aspect = width / height. w = h * aspect.
    // Thin books (low aspect) should have fewer lines
    let allowedMaxLines = 3;
    const ratio = w / h;
    if (ratio < 0.18) allowedMaxLines = 1;      // Very thin
    else if (ratio < 0.3) allowedMaxLines = 2;  // Thin

    for (const fs of fontSizes) {
        // Can we fit at least 1 line width-wise?
        const colW = fs * 1.2;
        const maxCols = Math.floor(w / colW);
        if (maxCols < 1) continue;

        // Try to wrap text into 1..maxCols
        // We prefer fewer cols if it fits, BUT we prefer larger font.
        // Since we iterate large->small, the first one that fits is best.

        // Try fitting in 1 col
        if (maxCols >= 1) {
            if (ctxmeasure(ctx, displayTitle, fs, fontName) <= maxLen) {
                selectedFontSize = fs;
                selectedColumns = [displayTitle];
                break;
            }
        }

        // Try fitting in 2 cols
        if (maxCols >= 2) {
            const cols = wrapText(plainWords, 2);
            if (cols.length <= 2 && cols.every(c => ctxmeasure(ctx, c, fs, fontName) <= maxLen)) {
                selectedFontSize = fs;
                selectedColumns = cols;
                break;
            }
        }

        // Try fitting in 3 cols
        if (maxCols >= 3 && allowedMaxLines >= 3) {
            const cols = wrapText(plainWords, 3);
            if (cols.length <= 3 && cols.every(c => ctxmeasure(ctx, c, fs, fontName) <= maxLen)) {
                selectedFontSize = fs;
                selectedColumns = cols;
                break;
            }
        }
    }

    // Apply Check
    book.fontName = fontName;
    ctx.font = `bold ${selectedFontSize}px "${fontName}", sans-serif`;
    const finalColWidth = selectedFontSize * 1.2;

    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(-Math.PI / 2);

    selectedColumns.forEach((colText, idx) => {
        const span = (selectedColumns.length - 1) * finalColWidth;
        const y = -(span / 2) + (idx * finalColWidth);
        ctx.fillText(colText, 0, y);
    });
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 16;
    return texture;
}

function ctxmeasure(ctx, text, fontSize, fontName) {
    ctx.font = `bold ${fontSize}px "${fontName}", sans-serif`;
    return ctx.measureText(text).width;
}

function wrapText(words, maxLines) {
    // Simple balanced wrapping
    const totalChars = words.join(' ').length;
    const charsPerLine = Math.ceil(totalChars / maxLines);

    let lines = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        const test = currentLine ? currentLine + " " + w : w;

        // If adding this word makes it mostly full, OR if we are at last word
        if (test.length > charsPerLine && currentLine.length > 0) {
            lines.push(currentLine);
            currentLine = w;
        } else {
            currentLine = test;
        }
    }
    if (currentLine) lines.push(currentLine);

    // If our simple wrap produced more lines than allowed, merge last ones
    while (lines.length > maxLines) {
        const last = lines.pop();
        lines[lines.length - 1] += " " + last;
    }

    return lines;
}
