import * as THREE from 'three';

export function createCoverTexture(bookData, color) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 800; // Aspect ratio roughly matches book
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add some texture/noise (simple lines)
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
    ctx.lineWidth = 2;
    for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }

    // Border
    ctx.strokeStyle = '#ebd5b3'; // Gold-ish border
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    const padding = 40;
    let y = 150;

    // Title & Subtitle Processing
    const fullTitle = bookData.Title;
    let mainTitle = fullTitle;
    let subTitle = "";
    
    const separatorIdx = fullTitle.indexOf(':');
    if (separatorIdx > -1) {
        mainTitle = fullTitle.substring(0, separatorIdx).trim();
        subTitle = fullTitle.substring(separatorIdx + 1).trim();
    }

    // Draw Main Title
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.font = 'bold 60px Times New Roman'; 
    ctx.textAlign = 'center';
    const maxWidth = canvas.width - (padding * 2);
    
    // Track Y for layout
    const lineHeightTitle = 70;
    const lines = wrapText(ctx, mainTitle, canvas.width / 2, y, maxWidth, lineHeightTitle, true);
    y += (lines * lineHeightTitle); // Move y down by height of title
    
    // Draw Subtitle if exists
    if (subTitle) {
        y += 10; // offset
        ctx.font = 'italic 40px Times New Roman';
        ctx.lineWidth = 3;
        const lineHeightSub = 50;
        const subLines = wrapText(ctx, subTitle, canvas.width / 2, y, maxWidth, lineHeightSub, true);
        y += (subLines * lineHeightSub);
    }
    
    // Author (at bottom)
    ctx.font = 'italic 40px Times New Roman';
    ctx.fillStyle = '#eee';
    ctx.lineWidth = 3; 
    const authorY = canvas.height - 150;
    ctx.strokeText("by " + bookData.Author, canvas.width / 2, authorY);
    ctx.fillText("by " + bookData.Author, canvas.width / 2, authorY);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

export function createSpineTexture(title, color, rating) {
    const canvas = document.createElement('canvas');
    canvas.width = 64; 
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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
    let safeTitle = title || "Untitled";
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
        ctx.fillText(stars, 0, 180); // Shift "down" (right visually)
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

    ctx.restore();

    return new THREE.CanvasTexture(canvas);
}

export function createBackTexture(bookData, color) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 800; 
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = color; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Darken overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const padding = 40;
    const maxWidth = canvas.width - (padding * 2); // Define maxWidth here
    let y = 80;

    // Title & Subtitle Split
    const { mainTitle, subTitle } = parseTitle(bookData.Title);

    // Main Title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 45px Arial'; 
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

    // Date Read (Prominent)
    if (bookData['Date Read']) {
        ctx.fillStyle = '#fff'; 
        ctx.font = 'bold 32px Arial'; 
        
        const dateStr = formatDate(bookData['Date Read']);
        ctx.fillText(`Read: ${dateStr}`, canvas.width / 2, y);
        y += 60;
    }
    
    // Genre (Secondary)
    if (bookData['Genres']) {
        // Replace semicolons with commas
        const allGenres = bookData['Genres'].replace(/;/g, ', ');
        
        ctx.font = 'italic 20px Arial';
        ctx.fillStyle = '#ccc';
        
        // Wrap text for full list
        wrapText(ctx, allGenres, canvas.width / 2, y, canvas.width - 80, 26);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
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
