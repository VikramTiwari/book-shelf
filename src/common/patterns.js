export function drawBackgroundPattern(ctx, width, height, style, baseColor) {
    // Fill Base
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, width, height);
    
    // Pattern Logic
    ctx.save();
    switch(style) {
        case 'Leather':
            // Noiseish grain
            for(let i=0; i<1000; i++) {
                ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.3})`; // Increased from 0.1
                const s = Math.random() * 4 + 1;
                ctx.fillRect(Math.random()*width, Math.random()*height, s, s);
            }
            break;
        case 'Fabric':
            ctx.strokeStyle = `rgba(255,255,255,0.25)`; // Increased from 0.1
            ctx.lineWidth = 1;
            for(let i=0; i<width; i+=4) {
                ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i, height); ctx.stroke();
            }
            for(let i=0; i<height; i+=4) {
                ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(width, i); ctx.stroke();
            }
            break;
        case 'Glossy':
             // Gradient sheen
            const grad = ctx.createLinearGradient(0, 0, width, height);
            grad.addColorStop(0, 'rgba(255,255,255,0)');
            grad.addColorStop(0.5, 'rgba(255,255,255,0.4)'); // Increased from 0.2
            grad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0,0,width,height);
            break;
        case 'Matte':
             // Solid color, maybe slight noise
             ctx.fillStyle = `rgba(255,255,255,0.1)`; // Increased from 0.05
             ctx.fillRect(0,0,width,height); // Flatten
             break;
        case 'Old Paper':
            ctx.fillStyle = '#f4e4bc'; // Override base? merge with base color actually
            ctx.globalAlpha = 0.5;
            ctx.fillRect(0,0,width,height);
            // Stains
            ctx.globalAlpha = 0.1;
            ctx.fillStyle = '#553300';
            for(let i=0; i<5; i++) {
                 const r = Math.random() * 50 + 20;
                 ctx.beginPath(); ctx.arc(Math.random()*width, Math.random()*height, r, 0, Math.PI*2); ctx.fill();
            }
            break;
        case 'Metallic':
             // Diagonal stripes
             ctx.strokeStyle = `rgba(255,255,255,0.4)`; // Increased from 0.2
             ctx.lineWidth = 5;
             for(let i=-width; i<width*2; i+=40) {
                 ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i+height, height); ctx.stroke();
             }
             break;
        case 'Marble':
             // Swirls approximation
             ctx.strokeStyle = `rgba(255,255,255,0.5)`; // Increased from 0.3
             ctx.lineWidth = 40;
             ctx.lineCap = 'round';
             ctx.filter = 'blur(20px)';
             for(let i=0; i<5; i++) {
                 ctx.beginPath(); 
                 ctx.moveTo(Math.random()*width, Math.random()*height); 
                 ctx.bezierCurveTo(Math.random()*width, Math.random()*height, Math.random()*width, Math.random()*height, Math.random()*width, Math.random()*height);
                 ctx.stroke();
             }
             ctx.filter = 'none';
             break;
        case 'Cyberpunk':
             // Grid
             ctx.strokeStyle = '#00ff00';
             ctx.globalAlpha = 0.4; // Increased from 0.2
             ctx.lineWidth = 2;
             const step = 50;
             for(let x=0; x<width; x+=step) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,height); ctx.stroke(); }
             for(let y=0; y<height; y+=step) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(width,y); ctx.stroke(); }
             break;
        case 'Canvas':
             // Rough noise
             for(let i=0; i<5000; i++) {
                 ctx.fillStyle = `rgba(200,200,200,0.25)`; // Increased from 0.1
                 ctx.fillRect(Math.random()*width, Math.random()*height, 2, 2);
             }
             break;
        case 'Velvet':
             // Deep shading Vignette
             const rad = Math.max(width, height) / 1.5;
             const vign = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, rad);
             vign.addColorStop(0, 'rgba(0,0,0,0)');
             vign.addColorStop(1, 'rgba(0,0,0,0.7)'); // Increased from 0.4
             ctx.fillStyle = vign;
             ctx.fillRect(0,0,width,height);
             break;
        case 'Wood':
             ctx.fillStyle = 'rgba(70, 40, 10, 0.2)';
             for(let i=0; i<width; i+=5) {
                 ctx.globalAlpha = Math.random() * 0.2;
                 ctx.fillRect(i, 0, 2, height);
             }
             ctx.globalAlpha = 1.0;
             // Knots
             for(let i=0; i<3; i++) {
                 ctx.fillStyle = 'rgba(50, 30, 5, 0.3)';
                 const kx = Math.random() * width;
                 const ky = Math.random() * height;
                 ctx.beginPath(); ctx.ellipse(kx, ky, 10, 30, Math.random(), 0, Math.PI*2); ctx.fill();
             }
             break;
        case 'Stone':
             for(let i=0; i<2000; i++) {
                 ctx.fillStyle = `rgba(30,30,30,${Math.random()*0.3})`;
                 const s = Math.random() * 3 + 1;
                 ctx.fillRect(Math.random()*width, Math.random()*height, s, s);
             }
             break;
        case 'Holographic':
             const holoGrad = ctx.createLinearGradient(0, 0, width, height);
             holoGrad.addColorStop(0, 'rgba(255,0,0,0.2)');
             holoGrad.addColorStop(0.2, 'rgba(255,255,0,0.2)');
             holoGrad.addColorStop(0.4, 'rgba(0,255,0,0.2)');
             holoGrad.addColorStop(0.6, 'rgba(0,255,255,0.2)');
             holoGrad.addColorStop(0.8, 'rgba(0,0,255,0.2)');
             holoGrad.addColorStop(1, 'rgba(255,0,255,0.2)');
             ctx.fillStyle = holoGrad;
             ctx.fillRect(0,0,width,height);
             break;
        case 'Denim':
             ctx.strokeStyle = `rgba(255,255,255,0.15)`;
             ctx.lineWidth = 1;
             // Diagonal crosshatch
             for(let i=-width; i<width*2; i+=3) {
                 ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i-height, height); ctx.stroke();
                 ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i+height, height); ctx.stroke();
             }
             break;
        case 'Carbon Fiber':
             ctx.fillStyle = '#111';
             ctx.fillRect(0,0,width,height);
             ctx.fillStyle = '#222';
             for(let y=0; y<height; y+=20) {
                 for(let x=0; x<width; x+=20) {
                     if ((x/20 + y/20) % 2 === 0) ctx.fillRect(x,y,20,20);
                 }
             }
             // Diagonal lines inside rects? Too complex for 2d context per frame perf maybe? 
             // Simple checkerboard is decent approximation for distance.
             break;
        case 'Mosaic':
             const tileSize = 20;
             for(let y=0; y<height; y+=tileSize) {
                 for(let x=0; x<width; x+=tileSize) {
                     ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.2})`;
                     ctx.fillRect(x+1, y+1, tileSize-2, tileSize-2);
                 }
             }
             break;
        case 'Knit':
             ctx.strokeStyle = `rgba(255,255,255,0.1)`;
             ctx.lineWidth = 2;
             for(let y=0; y<height; y+=10) {
                 for(let x=0; x<width; x+=10) {
                     ctx.beginPath();
                     ctx.moveTo(x, y); ctx.lineTo(x+5, y+10); ctx.lineTo(x+10, y);
                     ctx.stroke();
                 }
             }
             break;
        case 'Scales':
             ctx.strokeStyle = `rgba(255,255,255,0.2)`;
             ctx.lineWidth = 2;
             const r = 15;
             for(let y=0; y<height; y+=r) {
                 const offset = (y/r)%2 === 0 ? 0 : r;
                 for(let x=-r; x<width+r; x+=r*2) {
                     ctx.beginPath(); ctx.arc(x+offset, y, r, 0, Math.PI, false); ctx.stroke();
                 }
             }
             break;
        case 'Circuit':
             ctx.strokeStyle = `rgba(100,255,100,0.3)`;
             ctx.lineWidth = 2;
             for(let i=0; i<20; i++) {
                 const x = Math.random() * width;
                 const y = Math.random() * height;
                 ctx.beginPath(); 
                 ctx.moveTo(x, y); 
                 ctx.lineTo(x, y + Math.random()*100 - 50);
                 ctx.lineTo(x + Math.random()*100 - 50, y);
                 ctx.stroke();
                 ctx.fillStyle = `rgba(100,255,100,0.5)`;
                 ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();
             }
             break;
        case 'Watercolor':
             ctx.globalCompositeOperation = 'overlay';
             for(let i=0; i<10; i++) {
                 const r = Math.random() * 100 + 50;
                 ctx.fillStyle = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.1)`;
                 ctx.beginPath(); ctx.arc(Math.random()*width, Math.random()*height, r, 0, Math.PI*2); ctx.fill();
             }
             ctx.globalCompositeOperation = 'source-over';
             break;
        case 'Geometric':
             ctx.strokeStyle = 'rgba(255,255,255,0.1)';
             ctx.lineWidth = 1;
             for(let i=0; i<20; i++) {
                 ctx.beginPath();
                 ctx.moveTo(Math.random()*width, Math.random()*height);
                 ctx.lineTo(Math.random()*width, Math.random()*height);
                 ctx.lineTo(Math.random()*width, Math.random()*height);
                 ctx.closePath();
                 ctx.stroke();
             }
             break;
        case 'Floral':
             ctx.fillStyle = 'rgba(255,255,255,0.1)';
             for(let i=0; i<30; i++) {
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 const r = Math.random() * 10 + 5;
                 ctx.beginPath(); 
                 for(let j=0; j<5; j++) {
                     ctx.arc(x + Math.cos(j/5*Math.PI*2)*r, y + Math.sin(j/5*Math.PI*2)*r, r/2, 0, Math.PI*2);
                 }
                 ctx.fill();
             }
             break;
        case 'Confetti':
             for(let i=0; i<100; i++) {
                 ctx.fillStyle = `hsl(${Math.random()*360}, 70%, 50%)`;
                 ctx.globalAlpha = 0.5;
                 ctx.beginPath(); ctx.arc(Math.random()*width, Math.random()*height, Math.random()*5+2, 0, Math.PI*2); ctx.fill();
             }
             ctx.globalAlpha = 1.0;
             break;
        case 'Plaid':
            ctx.globalCompositeOperation = 'multiply';
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            for(let x=0; x<width; x+=40) ctx.fillRect(x,0,20,height);
            for(let y=0; y<height; y+=40) ctx.fillRect(0,y,width,20);
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            for(let x=20; x<width; x+=40) ctx.fillRect(x,0,5,height);
            for(let y=20; y<height; y+=40) ctx.fillRect(0,y,width,5);
            ctx.globalCompositeOperation = 'source-over';
            break;
        case 'Leopard':
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            for(let i=0; i<200; i++) {
                const x = Math.random()*width;
                const y = Math.random()*height;
                ctx.beginPath();
                ctx.arc(x,y, Math.random()*8+4, 0, Math.PI*2);
                ctx.arc(x+5,y+2, Math.random()*6+3, 0, Math.PI*2);
                ctx.fill();
            }
            break;
        case 'Zebra':
            ctx.strokeStyle = 'rgba(0,0,0,0.3)';
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            for(let y=0; y<height; y+=20) {
                ctx.beginPath();
                ctx.moveTo(0,y);
                ctx.bezierCurveTo(width*0.3, y+Math.random()*50-25, width*0.7, y+Math.random()*50-25, width, y);
                ctx.stroke();
            }
            break;
        case 'Polka Dot':
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            for(let y=0; y<height; y+=30) {
                for(let x=0; x<width; x+=30) {
                     ctx.beginPath(); ctx.arc(x,y, 8, 0, Math.PI*2); ctx.fill();
                }
            }
            break;
        case 'Camouflage':
            for(let i=0; i<50; i++) {
                ctx.fillStyle = i%2==0 ? 'rgba(50,100,50,0.5)' : 'rgba(100,100,50,0.5)';
                ctx.beginPath();
                ctx.arc(Math.random()*width, Math.random()*height, Math.random()*50+20, 0, Math.PI*2);
                ctx.fill();
            }
            break;
        case 'Neon':
            ctx.fillStyle = '#000';
            ctx.fillRect(0,0,width,height);
            for(let i=0; i<10; i++) {
                ctx.strokeStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
                ctx.lineWidth = 3;
                ctx.shadowBlur = 10;
                ctx.shadowColor = ctx.strokeStyle;
                ctx.beginPath();
                ctx.moveTo(Math.random()*width, Math.random()*height);
                ctx.lineTo(Math.random()*width, Math.random()*height);
                ctx.stroke();
            }
            ctx.shadowBlur = 0;
            break;
        case 'Ice':
            ctx.strokeStyle = 'rgba(255,255,255,0.6)';
            ctx.lineWidth = 1;
            for(let i=0; i<50; i++) {
                 ctx.beginPath();
                 ctx.moveTo(Math.random()*width, Math.random()*height);
                 ctx.lineTo(Math.random()*width, Math.random()*height);
                 ctx.stroke();
            }
            ctx.fillStyle = 'rgba(200,240,255,0.1)';
            ctx.fillRect(0,0,width,height);
            break;
        case 'Damask':
            ctx.fillStyle = 'rgba(0,0,0,0.15)';
            ctx.font = '40px serif';
            ctx.textAlign = 'center';
            for(let y=0; y<height; y+=60) {
                for(let x=0; x<width; x+=60) {
                     const off = (y/60)%2===0 ? 0 : 30;
                     ctx.fillText('❦', x+off, y);
                }
            }
            break;
        case 'Hexagon':
            ctx.strokeStyle = 'rgba(100,200,255,0.2)';
            ctx.lineWidth = 1;
            const size = 20;
            const h = size * Math.sqrt(3);
            for(let y=0; y<height + h; y+=h) {
                for(let x=0; x<width + size*3; x+=size*3) {
                     ctx.beginPath();
                     const off = (Math.round(y/h))%2 === 0 ? 0 : size*1.5;
                     const cx = x + off;
                     const cy = y;
                     for(let i=0; i<6; i++) {
                         ctx.lineTo(cx + size * Math.cos(i/6 * Math.PI*2), cy + size * Math.sin(i/6 * Math.PI*2));
                     }
                     ctx.stroke();
                }
            }
            break;
        case 'Cross Stitch':
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            const cs = 8;
            for(let y=0; y<height; y+=cs) {
                for(let x=0; x<width; x+=cs) {
                     if (Math.random() > 0.7) {
                         ctx.fillText('x', x, y);
                     }
                }
            }
            break;
        case 'Brick': {
            ctx.fillStyle = 'rgba(100,50,50,0.3)';
            const bh = 20;
            const bw = 40;
            for(let y=0; y<height; y+=bh + 2) {
                const off = (y/(bh+2))%2===0 ? 0 : bw/2;
                for(let x=-bw; x<width; x+=bw + 2) {
                    ctx.fillRect(x+off, y, bw, bh);
                }
            }
            break;
        }
        case 'Wave':
            ctx.strokeStyle = 'rgba(255,255,255,0.4)'; // high contrast
            ctx.lineWidth = 2;
            for(let y=-20; y<height; y+=20) {
                ctx.beginPath();
                for(let x=0; x<width; x+=10) {
                     ctx.lineTo(x, y + Math.sin(x/50)*20);
                }
                ctx.stroke();
            }
            break;
        case 'Gradient':
             const complexGrad = ctx.createLinearGradient(0,0,width,height);
             complexGrad.addColorStop(0, 'rgba(255,0,0,0.1)');
             complexGrad.addColorStop(0.3, 'rgba(0,0,255,0.1)');
             complexGrad.addColorStop(0.6, 'rgba(0,255,0,0.1)');
             complexGrad.addColorStop(1, 'rgba(255,255,0,0.1)');
             ctx.fillStyle = complexGrad;
             ctx.fillRect(0,0,width,height);
             break;
        case 'Cork':
             for(let i=0; i<3000; i++) {
                 ctx.fillStyle = `rgba(139,69,19, ${Math.random()*0.3})`; 
                 const r = Math.random() * 3;
                 ctx.beginPath(); ctx.arc(Math.random()*width, Math.random()*height, r, 0, Math.PI*2); ctx.fill();
             }
             break;
        case 'Crackle':
             ctx.strokeStyle = 'rgba(255,255,255,0.3)';
             ctx.lineWidth = 1;
             for(let i=0; i<30; i++) {
                 let x = Math.random()*width;
                 let y = Math.random()*height;
                 ctx.beginPath(); ctx.moveTo(x,y);
                 for(let j=0; j<20; j++) {
                     x += (Math.random()-0.5)*50;
                     y += (Math.random()-0.5)*50;
                     ctx.lineTo(x,y);
                 }
                 ctx.stroke();
             }
             break;
        case 'Herringbone':
             ctx.strokeStyle = 'rgba(0,0,0,0.2)';
             ctx.lineWidth = 1;
             const hs = 20;
             for(let x=0; x<width; x+=hs) {
                 for(let y=0; y<height; y+=hs) {
                     if ((Math.floor(x/hs) + Math.floor(y/hs)) % 2 === 0) {
                         ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+hs, y+hs); ctx.stroke();
                     } else {
                         ctx.beginPath(); ctx.moveTo(x+hs,y); ctx.lineTo(x, y+hs); ctx.stroke();
                     }
                 }
             }
             break;
        case 'Splatter':
             for(let i=0; i<50; i++) {
                 ctx.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255}, 0.5)`;
                 let r = Math.random()*15 + 5;
                 let x = Math.random()*width;
                 let y = Math.random()*height;
                 ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
                 // splash
                 for(let j=0; j<5; j++) {
                     ctx.beginPath(); ctx.arc(x+(Math.random()-0.5)*r*3, y+(Math.random()-0.5)*r*3, r/4, 0, Math.PI*2); ctx.fill();
                 }
             }
             break;
        case 'Paisley':
             ctx.fillStyle = 'rgba(255,255,255,0.1)';
             for(let i=0; i<20; i++) {
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 const s = Math.random()*30 + 10;
                 ctx.beginPath();
                 ctx.moveTo(x, y);
                 ctx.bezierCurveTo(x+s, y-s, x+s*2, y+s, x, y+s*2);
                 ctx.bezierCurveTo(x-s, y+s, x-s, y-s, x, y);
                 ctx.fill();
                 ctx.beginPath(); ctx.arc(x+s/2, y+s/2, s/4, 0, Math.PI*2); ctx.stroke();
             }
             break;
        case 'Chevron':
             ctx.strokeStyle = 'rgba(255,255,255,0.2)';
             ctx.lineWidth = 5;
             const cw = 40;
             const ch = 20;
             for(let y=-ch; y<height; y+=ch*2) {
                 ctx.beginPath();
                 for(let x=0; x<width+cw; x+=cw) {
                     ctx.lineTo(x, y);
                     ctx.lineTo(x+cw/2, y+ch);
                 }
                 ctx.stroke();
             }
             break;
        case 'Galaxy':
             ctx.fillStyle = '#050510'; // Dark
             ctx.fillRect(0,0,width,height);
             // Nebula
             for(let i=0; i<5; i++) {
                 const grad = ctx.createRadialGradient(Math.random()*width, Math.random()*height, 0, Math.random()*width, Math.random()*height, 200);
                 grad.addColorStop(0, `rgba(${Math.random()*255},0,${Math.random()*255},0.2)`);
                 grad.addColorStop(1, 'rgba(0,0,0,0)');
                 ctx.fillStyle = grad;
                 ctx.fillRect(0,0,width,height);
             }
             // Stars
             ctx.fillStyle = 'white';
             for(let i=0; i<200; i++) {
                 ctx.beginPath(); ctx.arc(Math.random()*width, Math.random()*height, Math.random()*1.5, 0, Math.PI*2); ctx.fill();
             }
             break;
        case 'Grunge':
             ctx.fillStyle = 'rgba(0,0,0,0.2)';
             for(let i=0; i<500; i++) {
                 const w = Math.random()*50;
                 const h = Math.random()*2;
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 ctx.fillRect(x,y,w,h);
             }
             // Scratches
             ctx.strokeStyle = 'rgba(255,255,255,0.3)';
             ctx.lineWidth = 1;
             for(let i=0; i<50; i++) {
                 ctx.beginPath(); ctx.moveTo(Math.random()*width, Math.random()*height);
                 ctx.lineTo(Math.random()*width, Math.random()*height); ctx.stroke();
             }
             break;
        case 'Bamboo': {
             ctx.fillStyle = 'rgba(100,200,50,0.1)';
             const bw = 30;
             for(let x=10; x<width; x+=bw+10) {
                 ctx.fillRect(x, 0, bw, height);
                 // Nodes
                 ctx.fillStyle = 'rgba(50,100,20,0.3)';
                 for(let y=Math.random()*50; y<height; y+=100) {
                     ctx.fillRect(x-2, y, bw+4, 5);
                 }
                 ctx.fillStyle = 'rgba(100,200,50,0.1)';
             }
             break;
        }
        case 'Clouds':
             for(let i=0; i<20; i++) {
                 ctx.fillStyle = `rgba(255,255,255, ${Math.random()*0.3})`;
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 const s = Math.random()*100 + 50;
                 ctx.beginPath(); ctx.arc(x,y,s,0,Math.PI*2); ctx.fill();
                 ctx.beginPath(); ctx.arc(x+s/2,y+s/4,s*0.8,0,Math.PI*2); ctx.fill();
             }
             break;
        case 'Lace':
             ctx.strokeStyle = 'rgba(255,255,255,0.4)';
             ctx.lineWidth = 1;
             for(let y=0; y<height; y+=40) {
                 for(let x=0; x<width; x+=40) {
                     ctx.beginPath(); ctx.arc(x,y,15,0,Math.PI*2); ctx.stroke();
                     ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.stroke();
                 }
             }
             break;
        case 'Blueprint':
             ctx.fillStyle = '#104080';
             ctx.fillRect(0,0,width,height);
             ctx.strokeStyle = 'rgba(255,255,255,0.3)';
             ctx.lineWidth = 1;
             for(let x=0; x<width; x+=20) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,height); ctx.stroke(); }
             for(let y=0; y<height; y+=20) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(width,y); ctx.stroke(); }
             ctx.lineWidth = 3;
             ctx.strokeRect(50,50,width-100, height-100);
             break;
        case 'Tie Dye':
             for(let i=0; i<5; i++) {
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 const grad = ctx.createRadialGradient(x,y,0,x,y,300);
                 grad.addColorStop(0, `hsl(${Math.random()*360}, 100%, 50%)`);
                 grad.addColorStop(0.5, `hsl(${Math.random()*360}, 100%, 50%)`);
                 grad.addColorStop(1, 'rgba(0,0,0,0)');
                 ctx.globalCompositeOperation = 'screen';
                 ctx.fillStyle = grad;
                 ctx.fillRect(0,0,width,height);
             }
             ctx.globalCompositeOperation = 'source-over';
             break;
        case 'Terrazzo':
             ctx.fillStyle = '#EEE'; // Light base likely
             // Actually keep base color but add chips
             for(let i=0; i<200; i++) {
                 ctx.fillStyle = `hsl(${Math.random()*360}, 50%, 50%)`;
                 ctx.beginPath();
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 ctx.moveTo(x,y);
                 ctx.lineTo(x+Math.random()*20-10, y+Math.random()*20-10);
                 ctx.lineTo(x+Math.random()*20-10, y+Math.random()*20-10);
                 ctx.fill();
             }
             break;
    }
    
    // New Patterns
    ctx.save();
    switch(style) {
        case 'Foil':
             const foilGrad = ctx.createLinearGradient(0,0,width,height);
             foilGrad.addColorStop(0, 'rgba(255,255,255,0.1)');
             foilGrad.addColorStop(0.5, 'rgba(255,255,255,0.4)');
             foilGrad.addColorStop(1, 'rgba(255,255,255,0.1)');
             ctx.fillStyle = foilGrad;
             ctx.fillRect(0,0,width,height);
             // Crinkles
             for(let i=0; i<50; i++) {
                 ctx.strokeStyle = `rgba(0,0,0,${Math.random()*0.1})`;
                 ctx.beginPath();
                 ctx.moveTo(Math.random()*width, Math.random()*height);
                 ctx.lineTo(Math.random()*width, Math.random()*height);
                 ctx.stroke();
             }
             break;
        case 'Linen':
             ctx.strokeStyle = 'rgba(255,255,255,0.15)';
             ctx.lineWidth = 1;
             for(let x=0; x<width; x+=3) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,height); ctx.stroke(); }
             for(let y=0; y<height; y+=3) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(width,y); ctx.stroke(); }
             break;
        case 'Kraft':
             ctx.fillStyle = 'rgba(0,0,0,0.05)'; // Noise
             for(let i=0; i<3000; i++) ctx.fillRect(Math.random()*width, Math.random()*height, 2, 2);
             // Fibers
             ctx.strokeStyle = 'rgba(100,50,0,0.1)';
             for(let i=0; i<200; i++) {
                 ctx.beginPath();
                 const x=Math.random()*width; const y=Math.random()*height;
                 ctx.moveTo(x,y); ctx.lineTo(x+Math.random()*10, y+Math.random()*10); ctx.stroke();
             }
             break;
        case 'Sandpaper':
             for(let i=0; i<10000; i++) {
                 ctx.fillStyle = Math.random()>0.5 ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)';
                 ctx.fillRect(Math.random()*width, Math.random()*height, 1.5, 1.5);
             }
             break;
        case 'Argyle':
             const dw = 60;
             const dh = 100;
             for(let y=0; y<height; y+=dh) {
                 for(let x=0; x<width; x+=dw) {
                     // Diamonds
                     const off = (y/dh)%2===0 ? 0 : dw/2;
                     const cx = x + off;
                     const cy = y;
                     ctx.fillStyle = ((x/dw + y/dh)%2===0) ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
                     ctx.beginPath();
                     ctx.moveTo(cx, cy);
                     ctx.lineTo(cx+dw/2, cy+dh/2);
                     ctx.lineTo(cx, cy+dh);
                     ctx.lineTo(cx-dw/2, cy+dh/2);
                     ctx.fill();
                 }
             }
             // Lines
             ctx.strokeStyle = 'rgba(255,255,255,0.2)';
             ctx.lineWidth = 1;
             for(let y=0; y<height; y+=dh) {
                 for(let x=0; x<width; x+=dw) {
                      const off = (y/dh)%2===0 ? 0 : dw/2;
                      const cx = x + off;
                      const cy = y + dh/2;
                      ctx.beginPath();
                      ctx.moveTo(cx,0); ctx.lineTo(cx, height); 
                      // Actually argyle lines usually cross centers
                 }
             }
             break;
        case 'Houndstooth':
             const hs = 40;
             ctx.fillStyle = 'rgba(0,0,0,0.2)';
             for(let y=0; y<height; y+=hs) {
                 for(let x=0; x<width; x+=hs) {
                     if((x/hs + y/hs)%2 === 0) {
                         ctx.fillRect(x,y,hs,hs);
                         // This is just checkboard. Houndstooth is complex.
                         // Simple approximation:
                         ctx.beginPath(); ctx.moveTo(x+hs, y); ctx.lineTo(x+hs*1.5, y+hs/2); ctx.lineTo(x+hs, y+hs); ctx.fill();
                     }
                 }
             }
             break;
        case 'Sunburst':
             const cx = width/2;
             const cy = height/2;
             ctx.fillStyle = 'rgba(255,255,255,0.1)';
             for(let i=0; i<20; i++) {
                 ctx.beginPath();
                 ctx.moveTo(cx, cy);
                 ctx.arc(cx, cy, Math.max(width, height)*1.5, i/20*Math.PI*2, (i+0.5)/20*Math.PI*2);
                 ctx.fill();
             }
             break;
        case 'Stars':
             ctx.fillStyle = 'rgba(255,255,255,0.6)';
             for(let i=0; i<100; i++) {
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 const r = Math.random()*2 + 1;
                 ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
             }
             // Big stars
             for(let i=0; i<10; i++) {
                 const x = Math.random()*width;
                 const y = Math.random()*height;
                 const r = Math.random()*10 + 5;
                 drawStar(ctx, x, y, 5, r, r/2);
             }
             break;
        case 'Checkerboard':
             const cs = 50;
             ctx.fillStyle = 'rgba(0,0,0,0.15)';
             for(let y=0; y<height; y+=cs) {
                 for(let x=0; x<width; x+=cs) {
                     if((x/cs+y/cs)%2===0) ctx.fillRect(x,y,cs,cs);
                 }
             }
             break;
        case 'Stripes':
             ctx.fillStyle = 'rgba(255,255,255,0.1)';
             for(let x=0; x<width; x+=40) ctx.fillRect(x,0,20,height);
             break;
        case 'Diamonds':
             const ds = 40;
             ctx.strokeStyle = 'rgba(255,255,255,0.2)';
             ctx.lineWidth = 1;
             for(let y=0; y<height; y+=ds) {
                 for(let x=0; x<width; x+=ds) {
                     ctx.strokeRect(x + (y/ds%2)*ds/2, y, ds/Math.sqrt(2), ds/Math.sqrt(2)); 
                     // Simple rotate
                     ctx.save();
                     ctx.translate(x, y);
                     ctx.rotate(Math.PI/4);
                     ctx.strokeRect(-ds/2, -ds/2, ds, ds);
                     ctx.restore();
                 }
             }
             break;
        case 'Triangles':
             ctx.fillStyle = 'rgba(255,255,255,0.1)';
             const ts = 50;
             for(let y=0; y<height; y+=ts) {
                 for(let x=0; x<width; x+=ts) {
                     if (Math.random()>0.5) {
                         ctx.beginPath();
                         ctx.moveTo(x,y); ctx.lineTo(x+ts, y); ctx.lineTo(x+ts/2, y+ts);
                         ctx.fill();
                     }
                 }
             }
             break;
    }

    ctx.restore();
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
}

export function drawCoverBorder(ctx, width, height, style, color) {
    ctx.save();
    ctx.strokeStyle = color || '#ebd5b3';
    ctx.lineWidth = 5;
    const padding = 20;
    
    switch(style) {
        case 'Titled':
            // Double line
            ctx.strokeRect(padding, padding, width - padding*2, height - padding*2);
            ctx.lineWidth = 1;
            ctx.strokeRect(padding+5, padding+5, width - (padding+5)*2, height - (padding+5)*2);
            break;
        case 'OrnateCorners':
            ctx.strokeRect(padding, padding, width - padding*2, height - padding*2);
            // Corners
            const cs = 30;
            const corner = (cx, cy, dx, dy) => {
                ctx.beginPath();
                ctx.moveTo(cx, cy + dy*cs);
                ctx.quadraticCurveTo(cx, cy, cx + dx*cs, cy);
                ctx.stroke();
            };
            ctx.lineWidth = 3;
            corner(padding+5, padding+5, 1, 1);
            corner(width-padding-5, padding+5, -1, 1);
            corner(width-padding-5, height-padding-5, -1, -1);
            corner(padding+5, height-padding-5, 1, -1);
            break;
        case 'Dotted':
            ctx.setLineDash([5, 10]);
            ctx.strokeRect(padding, padding, width - padding*2, height - padding*2);
            ctx.setLineDash([]);
            break;
        case 'SolidThick':
            ctx.lineWidth = 15;
            ctx.strokeRect(padding, padding, width - padding*2, height - padding*2);
            break;
        case 'DoubleFrame':
            ctx.lineWidth = 2;
            ctx.strokeRect(padding, padding, width - padding*2, height - padding*2);
            ctx.strokeRect(padding + 15, padding + 15, width - (padding+15)*2, height - (padding+15)*2);
            break;
        case 'Minimal':
            // Only bottom line
            ctx.beginPath();
            ctx.moveTo(padding, height - padding*2);
            ctx.lineTo(width - padding, height - padding*2);
            ctx.stroke();
            break;
        case 'Classic':
            // Corner Flourishes (Greek Key-ish)
            const grec = 40;
            ctx.strokeRect(padding, padding, width - padding*2, height - padding*2);
            ctx.lineWidth = 2;
            const drawKey = (cx, cy) => {
                ctx.strokeRect(cx-10, cy-10, 20, 20);
                ctx.strokeRect(cx-5, cy-5, 10, 10);
            };
            drawKey(padding, padding);
            drawKey(width-padding, padding);
            drawKey(width-padding, height-padding);
            drawKey(padding, height-padding);
            break;
        case 'SciFi':
            // Tech Bracket
            ctx.lineWidth = 4;
            const len = 60;
            // Top Left
            ctx.beginPath(); ctx.moveTo(padding, padding+len); ctx.lineTo(padding, padding); ctx.lineTo(padding+len, padding); ctx.stroke();
            // Top Right
            ctx.beginPath(); ctx.moveTo(width-padding-len, padding); ctx.lineTo(width-padding, padding); ctx.lineTo(width-padding, padding+len); ctx.stroke();
            // Bottom Right
            ctx.beginPath(); ctx.moveTo(width-padding, height-padding-len); ctx.lineTo(width-padding, height-padding); ctx.lineTo(width-padding-len, height-padding); ctx.stroke();
            // Bottom Left
            ctx.beginPath(); ctx.moveTo(padding+len, height-padding); ctx.lineTo(padding, height-padding); ctx.lineTo(padding, height-padding-len); ctx.stroke();
            
            // Data notches
            ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(width-padding, padding+len+20); ctx.lineTo(width-padding, height-padding-len-20); 
            ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
            break;
        case 'Business':
            // Modern Clean
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillRect(padding, 80, width-padding*2, 2); // Header line
            ctx.fillRect(padding, height-80, width-padding*2, 2); // Footer line
            // Vertical thin
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(40, 80); ctx.lineTo(40, height-80); ctx.stroke();
            break;
        case 'Fantasy':
            // Organic Corners
            ctx.lineWidth = 2;
            const vine = (x, y, dx, dy) => {
                ctx.beginPath();
                ctx.moveTo(x, y + dy*60);
                ctx.bezierCurveTo(x, y, x + dx*60, y, x + dx*60, y);
                ctx.moveTo(x, y);
                ctx.quadraticCurveTo(x+dx*30, y+dy*30, x+dx*40, y+dy*40); // leaf
                ctx.stroke();
            };
            vine(padding, padding, 1, 1);
            vine(width-padding, padding, -1, 1);
            vine(width-padding, height-padding, -1, -1);
            vine(padding, height-padding, 1, -1);
            
            ctx.strokeRect(padding+10, padding+10, width-(padding+10)*2, height-(padding+10)*2);
            break;
        case 'Generic':
            // Rounded Inset
            const r = 30;
            ctx.beginPath();
            ctx.roundRect(padding, padding, width - padding*2, height - padding*2, r);
            ctx.stroke();
            break;
        default:
            // Standard
            ctx.strokeRect(padding, padding, width - padding*2, height - padding*2);
            break;
    }
    ctx.restore();
}
