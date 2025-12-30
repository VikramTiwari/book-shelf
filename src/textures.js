import * as THREE from 'three';

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
    }

    ctx.restore();

    return new THREE.CanvasTexture(canvas);
}

export function createBackTexture(bookData, color) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 800; // Aspect ratio roughly matches book
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = color; // Match cover color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Darken slightly for readability
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const padding = 40;
    let y = padding + 40;

    // Title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    const maxWidth = canvas.width - (padding * 2);
    wrapText(ctx, bookData.Title, canvas.width / 2, y, maxWidth, 60);
    
    // Y update based on wrapped lines would be better, but simplified:
    y += 150; 

    // Author
    ctx.font = 'italic 36px Arial';
    ctx.fillStyle = '#ddd';
    ctx.fillText("by " + bookData.Author, canvas.width / 2, y);
    y += 80;

    // Review / Description
    // Use 'My Review' or fall back to description if available (CSV usually has My Review)
    let review = bookData['My Review'];
    if (review) {
        // Strip HTML if present
        review = review.replace(/<[^>]*>?/gm, '');
        
        ctx.font = '24px Arial';
        ctx.fillStyle = '#eee';
        ctx.textAlign = 'left';
        wrapText(ctx, review, padding, y, maxWidth, 35);
    } else {
        ctx.font = 'italic 24px Arial';
        ctx.fillStyle = '#aaa';
        ctx.fillText("No review available.", canvas.width / 2, y);
    }
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let testLine = '';
    let lineArray = [];
    
    for(let n = 0; n < words.length; n++) {
        testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}
