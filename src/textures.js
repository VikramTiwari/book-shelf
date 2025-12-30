import * as THREE from 'three';
import { drawBackgroundPattern } from './patterns.js';

export function createCoverTexture(bookData, color, style = "Leather", age = 0) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 800; // Aspect ratio roughly matches book
    const ctx = canvas.getContext('2d');

    // Draw Background Pattern
    drawBackgroundPattern(ctx, canvas.width, canvas.height, style, color);

    // Border
    ctx.strokeStyle = '#ebd5b3'; // Gold-ish border
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    const padding = 40;
    let y = 150;

    // Title & Subtitle Processing
    const { mainTitle } = parseTitle(bookData.Title);

    // Font Selection (Randomized by Title)
    // const genreStr = bookData['Genres'] || "";
    const fontName = getFontForTitle(bookData.Title);

    // Draw Main Title
    ctx.textAlign = 'center';
    const maxWidth = canvas.width - (padding * 2);
    const fontSize = 60;
    
    // Track Y for layout
    const lineHeightTitle = fontSize + 10;

    // Helper to wrap text into array of lines without drawing
    const titleLines = getWrappedLines(ctx, mainTitle, maxWidth, `bold ${fontSize}px "${fontName}"`);
    
    // Emboss Effect Helper
    ctx.font = `bold ${fontSize}px "${fontName}"`;
    
    titleLines.forEach((line) => {
        // Shadow (Dark, Top-Left or Bottom-Right depending on style)
        // "Debossed" into leather usually means:
        // Highlight at Bottom-Right (Surface catches light)
        // Shadow at Top-Left (Recessed edge casting shadow)
        // Or vice versa depending on light source.
        // Let's assume standard top-left light source.
        // Deboss: Inner Top-Left is Shadow. Inner Bottom-Right is Highlight.

        // 1. Highlight (Bottom-Right)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fillText(line, (canvas.width / 2) + 2, y + 2);

        // 2. Shadow (Top-Left)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillText(line, (canvas.width / 2) - 1, y - 1);

        // 3. Main Text (Gold/Silver/Color)
        ctx.fillStyle = '#e6c88c'; // Faded Gold default
        // If color is very light, maybe use dark text?
        // But leather binding usually uses gold leaf.
        ctx.fillText(line, canvas.width / 2, y);

        // Optional: Stroke for definition
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.lineWidth = 1;
        ctx.strokeText(line, canvas.width / 2, y);

        y += lineHeightTitle;
    });

    
    // Author (at bottom)
    ctx.font = 'italic 40px Times New Roman';
    ctx.fillStyle = '#eee';
    ctx.lineWidth = 3; 
    const authorY = canvas.height - 150;
    ctx.strokeText("by " + bookData.Author, canvas.width / 2, authorY);
    ctx.fillText("by " + bookData.Author, canvas.width / 2, authorY);

    // Apply Aging Effects
    if (age > 0) {
        drawWearAndTear(ctx, canvas.width, canvas.height, age);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

export function createPagesTexture(baseColorHex, age = 0) {
    const canvas = document.createElement('canvas');
    canvas.width = 512; // Increased from 64 for resolution along thickness
    canvas.height = 512; 
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    // Fill Base Color
    ctx.fillStyle = baseColorHex;
    ctx.fillRect(0, 0, width, height);

    // Draw "Lines" - Stack of paper (Vertical Lines for standing book)
    // Hundreds of thin vertical lines
    // We iterate X now.
    
    // 1. Base Grain (Stronger)
    for (let x = 0; x < width; x += 1) {
         const noise = (Math.random() - 0.5) * 0.1;
         ctx.fillStyle = `rgba(0,0,0,${0.05 + noise})`; 
    }

    // 2. Page Lines (High Contrast)
    for (let x = 0; x < width; x += (Math.random() * 2 + 1)) {
         ctx.fillStyle = `rgba(0,0,0,${0.15 + Math.random() * 0.1})`; // Much darker
         ctx.fillRect(x, 0, 1, height);
    }
    
    // 3. Signatures (Groups of pages bound together)
    // Every ~15-20px, draw a stronger shadow line
    for (let x = 0; x < width; x += (15 + Math.random() * 10)) {
        ctx.fillStyle = `rgba(50, 30, 10, 0.3)`; // Dark groove
        ctx.fillRect(x, 0, 2, height);
    }
    
    // Vertical Grain / Noise (now horizontal? or just scattered specs)
    ctx.fillStyle = 'rgba(0,0,0,0.03)';
    for (let i=0; i<1000; i++) {
        ctx.fillRect(Math.random()*width, Math.random()*height, 2, 1);
    }

    // Gradient Shadows on sides (Front/Back edge vs Spine edge)
    // For vertical pages, the "sides" of the texture (Left/Right) correspond
    // to the connection with the Front/Back covers.
    const grad = ctx.createLinearGradient(0, 0, width, 0);
    grad.addColorStop(0, 'rgba(50,40,30,0.3)');   // Darker near one cover
    grad.addColorStop(0.1, 'rgba(50,40,30,0.05)');
    grad.addColorStop(0.5, 'rgba(50,40,30,0.0)'); // Light in center
    grad.addColorStop(0.9, 'rgba(50,40,30,0.05)');
    grad.addColorStop(1, 'rgba(50,40,30,0.3)');   // Darker near other cover
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

export function createSpineTexture(title, color, rating, style = "Leather", age = 0, pages = 300) {
    const canvas = document.createElement('canvas');
    canvas.width = 64; 
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Background
    drawBackgroundPattern(ctx, canvas.width, canvas.height, style, color);

    // Text Config
    ctx.fillStyle = 'white'; 
    ctx.font = 'bold 36px Arial'; // Slightly smaller to fit
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-Math.PI / 2); // Bottom to Top

    // Rating Stars
    const starCount = Math.round(Number(rating) || 0);
    const stars = '★'.repeat(starCount); 
    
    // Draw Title
    const maxLen = 20;
    const { mainTitle } = parseTitle(title);
    let safeTitle = mainTitle || "Untitled";
    if (safeTitle.length > maxLen) {
        safeTitle = safeTitle.substring(0, maxLen) + '...';
    }
    
    // Layout: Title ... gap ... Stars
    // Since we rotated, X is along the long axis of the spine now (vertical visually)
    // We are at (0,0) center of rotated context.
    
    ctx.fillText(safeTitle, 0, -50); // Shift title "up" (left visually if unrotated)
    
    if (starCount > 0) {
        ctx.fillStyle = '#FFD700'; // Gold
        ctx.font = '24px Arial';
        ctx.fillText(stars, 0, 150); // Shift "down" (right visually)
    } else {
        // No rating: Draw Decorative Pattern
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        // Random simple pattern choice
        const patternType = Math.floor(Math.random() * 3);
        const yBase = 150;
        
        if (patternType === 0) {
            // Double Lines
            ctx.moveTo(-20, yBase); ctx.lineTo(20, yBase);
            ctx.moveTo(-20, yBase + 10); ctx.lineTo(20, yBase + 10);
        } else if (patternType === 1) {
            // Diamond
            ctx.moveTo(0, yBase);
            ctx.lineTo(10, yBase + 15);
            ctx.lineTo(0, yBase + 30);
            ctx.lineTo(-10, yBase + 15);
            ctx.lineTo(0, yBase);
        } else {
            // Cross / Star shape
            ctx.moveTo(0, yBase); ctx.lineTo(0, yBase + 30);
            ctx.moveTo(-10, yBase + 15); ctx.lineTo(10, yBase + 15);
        }
        ctx.stroke();
    }
    
    
    // Page Count removed from here (Moved to Back)

    ctx.restore();

    // Apply Aging Effects to Spine
    if (age > 0) {
        drawWearAndTear(ctx, canvas.width, canvas.height, age, true);
    }

    return new THREE.CanvasTexture(canvas);
}

export function createBackTexture(bookData, color, style = "Leather", age = 0, pages = 300) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 800; 
    const ctx = canvas.getContext('2d');

    // Background
    drawBackgroundPattern(ctx, canvas.width, canvas.height, style, color);
    
    // Darken overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; // Slightly lighter overlay for texture visibility 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border (Same as Front)
    ctx.strokeStyle = '#ebd5b3'; // Gold-ish border
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    const padding = 40;
    const maxWidth = canvas.width - (padding * 2); // Define maxWidth here
    let y = 80;

    // Pick Font based on Title (Consistent Random)
    const fontName = getFontForTitle(bookData.Title);

    // Title & Subtitle Split
    const { mainTitle, subTitle } = parseTitle(bookData.Title);

    // Main Title
    ctx.fillStyle = 'white';
    ctx.font = `bold 45px "${fontName}"`; 
    ctx.textAlign = 'center';
    
    const lines = wrapText(ctx, mainTitle, canvas.width / 2, y, maxWidth, 55);
    y += (lines * 55) + 10;
    
    // Subtitle
    if (subTitle) {
        ctx.font = 'italic 30px Arial';
        ctx.fillStyle = '#ddd';
        const subLines = wrapText(ctx, subTitle, canvas.width / 2, y, maxWidth, 35);
        y += (subLines * 35) + 20;
    } else {
        y += 20;
    }

    // Author
    ctx.font = 'italic 30px Arial'; 
    ctx.fillStyle = '#ddd';
    ctx.fillText("by " + bookData.Author, canvas.width / 2, y);
    y += 60;

    // Separator Line
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding + 20, y);
    ctx.lineTo(canvas.width - padding - 20, y);
    ctx.stroke();
    y += 50;

    // Metadata Block
    
    // Publication Year (Subtle)
    const pubYear = bookData['Original Publication Year'] || bookData['Year Published'];
    if (pubYear) {
        ctx.font = '22px Arial';
        ctx.fillStyle = '#aaa';
        ctx.fillText(`Published in ${pubYear}`, canvas.width / 2, y);
        y += 60;
    }

    // Date Read moved to bottom
    
    // Genre (Secondary)
    if (bookData['Genres']) {
        // Replace semicolons with commas
        const allGenres = bookData['Genres'].replace(/;/g, ', ');
        
        ctx.font = 'italic 20px Arial';
        ctx.fillStyle = '#ccc';
        
        // Wrap text for full list
        wrapText(ctx, allGenres, canvas.width / 2, y, canvas.width - 80, 26);
        y += 50; 
    }
    
    // Page Count (Back Cover - Lower)
    ctx.fillStyle = '#bbb';
    ctx.font = 'bold 24px Courier New'; 
    ctx.fillText((parseInt(pages) || "?") + " Pages", canvas.width / 2, canvas.height - 110);

    // Separator for "My Data"
    if (bookData['Date Read']) {
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding + 40, canvas.height - 85);
        ctx.lineTo(canvas.width - padding - 40, canvas.height - 85);
        ctx.stroke();

        ctx.fillStyle = '#fff'; 
        ctx.font = 'italic 20px Arial'; 
        const dateStr = formatDate(bookData['Date Read']);
        ctx.fillText(`Finished: ${dateStr}`, canvas.width / 2, canvas.height - 50);
    }

    // Apply Aging Effects to Back
    if (age > 0) {
        drawWearAndTear(ctx, canvas.width, canvas.height, age);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

function drawWearAndTear(ctx, width, height, age, isSpine = false) {
    if (age <= 0) return;

    // Intensity factors based on age (0 to 100+)
    // Normalize age roughly 0-100
    const intensity = Math.min(1.0, age / 80); 

    ctx.save();
    
    // 1. Edge Darkening / Grime (Worn Edges)
    // Create a radial gradient or just borders?
    // Rectangular fade from edge
    const edgeSize = isSpine ? 10 : 40;
    const darkness = intensity * 0.7; // Max opacity 0.7

    if (darkness > 0.05) {
        // Outer glow style gradient
        // We draw a stroke with gradient or just multiple rects?
        // Gradient is better.
        const grad = ctx.createRadialGradient(width/2, height/2, height/3, width/2, height/2, height/1.5);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, `rgba(60,40,20,${darkness})`); // Brownish/Black

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Extra hard edge darkening
        ctx.lineWidth = edgeSize;
        ctx.strokeStyle = `rgba(40,20,10,${darkness})`;
        ctx.strokeRect(0, 0, width, height);
    }

    // 2. Scratches
    // Random lines
    const scratchCount = Math.floor(intensity * (isSpine ? 10 : 50));
    
    ctx.globalCompositeOperation = 'overlay'; // Blend with underlying color
    ctx.strokeStyle = `rgba(255,255,255,${0.1 + intensity * 0.2})`; // Light scratches
    ctx.lineWidth = 1;

    for (let i = 0; i < scratchCount; i++) {
        ctx.beginPath();
        const x = Math.random() * width;
        const y = Math.random() * height;
        const len = 10 + Math.random() * 50;
        const angle = Math.random() * Math.PI * 2;
        
        ctx.moveTo(x, y);
        // Beizer curve for natural scratch? or simple line
        ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        ctx.stroke();
    }

    // Deep Scratches (Dark)
    const deepScratchCount = Math.floor(intensity * (isSpine ? 3 : 10));
    ctx.strokeStyle = `rgba(20,10,5,${0.2 + intensity * 0.3})`;
    ctx.lineWidth = 2;

    for (let i = 0; i < deepScratchCount; i++) {
        ctx.beginPath();
        const x = Math.random() * width;
        const y = Math.random() * height;
        const len = 20 + Math.random() * 80;
        const angle = (Math.random() - 0.5) * Math.PI; // Mostly vertical-ish
        
        // Curve
        const cp1x = x + Math.random() * 20 - 10;
        const cp1y = y + len / 2;
        const endx = x + Math.random() * 20 - 10;
        const endy = y + len;

        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(cp1x, cp1y, endx, endy);
        ctx.stroke();
    }

    // 3. Noise / Specks (Dust)
    if (intensity > 0.2) {
        const speckCount = Math.floor(width * height * 0.0001 * intensity);
        ctx.fillStyle = 'rgba(200,190,180,0.3)';
        for (let i = 0; i < speckCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * 2;
            ctx.fillRect(x, y, size, size);
        }
    }

    // 4. Cuffed Edges (Peeling/Scuffing)
    // Simulates paper/leather peeling off to reveal board underneath at corners/edges.
    // Only for older books (intensity > 0.3)
    // 4. Cuffed Edges (Peeling/Scuffing)
    // Simulates paper/leather peeling off to reveal board underneath at corners/edges.
    // Enhanced for "Really Bad" shape on old books.
    if (intensity > 0.25) {
        // Dramatic increase in probability
        const cuffChance = (intensity - 0.2) * 4.0;
        
        // Dirty exposed cardboard color
        const cuffColor = 'rgba(210, 200, 185, 0.9)'; 
        ctx.fillStyle = cuffColor;
        
        // Helper to draw rough blob with texture
        const drawCuff = (cx, cy, radiusX, radiusY) => {
             ctx.save();
             ctx.beginPath();
             const steps = 12;
             for(let i=0; i<=steps; i++) {
                 const theta = (i / steps) * Math.PI * 2;
                 const rOffset = Math.random() * 0.6 + 0.4; // More jagged
                 const px = cx + Math.cos(theta) * radiusX * rOffset;
                 const py = cy + Math.sin(theta) * radiusY * rOffset;
                 if (i===0) ctx.moveTo(px, py);
                 else ctx.lineTo(px, py);
             }
             ctx.clip(); // Clip to the blob shape

             // 1. Base Cardboard Color
             ctx.fillStyle = cuffColor;
             ctx.fill();

             // 2. Add Noise/Fraying (Dark Speckles)
             const speckCount = Math.floor(radiusX * radiusY * 0.5); 
             ctx.fillStyle = 'rgba(100, 80, 60, 0.4)'; // Dark brown/dirt
             for(let n=0; n<speckCount; n++) {
                 const nx = cx + (Math.random() - 0.5) * 2.0 * radiusX; // range approx
                 const ny = cy + (Math.random() - 0.5) * 2.0 * radiusY;
                 ctx.fillRect(nx, ny, 2, 2);
             }

             // 3. Frayed Paper Fibers (Light Lines)
             ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
             ctx.lineWidth = 1;
             const fiberCount = 5;
             for(let f=0; f<fiberCount; f++) {
                 ctx.beginPath();
                 const fx = cx + (Math.random() - 0.5) * radiusX;
                 const fy = cy + (Math.random() - 0.5) * radiusY;
                 ctx.moveTo(fx, fy);
                 ctx.lineTo(fx + (Math.random()-0.5)*10, fy + (Math.random()-0.5)*10);
                 ctx.stroke();
             }

             ctx.restore();
        };

        // Corners (Heaviest wear)
        // Significantly larger corners for old books
        const cornerSize = 25 + (intensity * 60); 
        
        // Top-Left
        if (Math.random() < cuffChance) drawCuff(0, 0, cornerSize, cornerSize);
        // Top-Right
        if (Math.random() < cuffChance) drawCuff(width, 0, cornerSize, cornerSize);
        // Bottom-Right
        if (Math.random() < cuffChance) drawCuff(width, height, cornerSize, cornerSize);
        // Bottom-Left
        if (Math.random() < cuffChance) drawCuff(0, height, cornerSize, cornerSize);

        // Edges (Random spots)
        // Much higher frequency of edge damage
        const edgeCount = Math.floor(intensity * 30); 
        for(let k=0; k<edgeCount; k++) {
            // Random edge
            const side = Math.floor(Math.random() * 4); 
            // Larger patches
            const blobSize = 10 + Math.random() * 20;
            
            let ex, ey;
            if (side === 0) { // Top
                ex = Math.random() * width; ey = 0;
            } else if (side === 1) { // Right
                ex = width; ey = Math.random() * height;
            } else if (side === 2) { // Bottom
                ex = Math.random() * width; ey = height;
            } else { // Left
                ex = 0; ey = Math.random() * height;
            }
            
            drawCuff(ex, ey, blobSize, blobSize);
        }
    }

    ctx.restore();
}

function parseTitle(fullTitle) {
    if (!fullTitle) return { mainTitle: "", subTitle: "" };
    
    let mainTitle = fullTitle;
    let subTitle = "";
    
    const idxColon = fullTitle.indexOf(':');
    const idxParen = fullTitle.indexOf('(');
    
    let splitIdx = -1;
    let isParen = false;

    // Determine First Separator
    if (idxColon > -1 && idxParen > -1) {
        if (idxColon < idxParen) {
            splitIdx = idxColon;
        } else {
            splitIdx = idxParen;
            isParen = true;
        }
    } else if (idxColon > -1) {
        splitIdx = idxColon;
    } else if (idxParen > -1) {
        splitIdx = idxParen;
        isParen = true;
    }

    if (splitIdx > -1) {
        mainTitle = fullTitle.substring(0, splitIdx).trim();
        subTitle = fullTitle.substring(splitIdx + 1).trim();
        
        // Clean Subtitle
         if (isParen) {
            if (subTitle.endsWith(')')) {
                subTitle = subTitle.slice(0, -1).trim();
            }
        }
    }
    
    return { mainTitle, subTitle };
}

function getFontForTitle(title) {
    const fonts = [
        'Comic Neue', 'Share Tech Mono', 'Orbitron', 'Audiowide', 
        'Jolly Lodger', 'Cinzel Decorative', 'Oswald', 'Henny Penny', 
        'MedievalSharp', 'Special Elite', 'Lora',
        // New Fonts
        'Playfair Display', 'Roboto Slab', 'Merriweather', 'Lobster', 
        'Pacifico', 'Bangers', 'Monoton', 'Creepster', 'Rye', 'Amatic SC'
    ];
    
    if (!title) return fonts[0];
    
    // Simple Hash
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash) % fonts.length;
    return fonts[index];
}

function formatDate(dateString) {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString; // fallback
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
        return dateString;
    }
}

// Helper to get lines without drawing
function getWrappedLines(ctx, text, maxWidth, font) {
    ctx.font = font;
    const words = text.split(' ');
    const lines = [];
    let line = '';

    for(let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        }
        else {
            line = testLine;
        }
    }
    lines.push(line);
    return lines;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, stroke = false) {
    const words = text.split(' ');
    let line = '';
    let testLine = '';
    let lineCount = 1;
    
    for(let n = 0; n < words.length; n++) {
        testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            if(stroke) ctx.strokeText(line, x, y);
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
            lineCount++;
        }
        else {
            line = testLine;
        }
    }
    if(stroke) ctx.strokeText(line, x, y);
    ctx.fillText(line, x, y);
    return lineCount;
}


