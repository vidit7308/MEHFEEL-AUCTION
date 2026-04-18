const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Font replacements
css = css.replace(/font-family:\s*'Cinzel',\s*serif;/g, "font-family: 'Dune Rise', sans-serif;");
css = css.replace(/font-family:\s*'Orbitron',\s*sans-serif;/g, "font-family: 'Dune Rise', sans-serif;");

// Border radius
css = css.replace(/border-radius:\s*0;/g, "border-radius: 16px;");
css = css.replace(/border-radius:\s*1px;/g, "border-radius: 16px;");
css = css.replace(/border-radius:\s*2px;/g, "border-radius: 16px;");

// Topbar glassmorphism
css = css.replace(/background:\s*linear-gradient\(180deg, rgba\(5,4,3,0\.96\) 0%, rgba\(10,8,6,0\.92\) 100%\);/g, "background: rgba(5,4,3,0.3); backdrop-filter: blur(24px); border-bottom: 1px solid rgba(255,140,26,0.1);");

// Card glassmorphism
css = css.replace(/background:\s*linear-gradient\(180deg, rgba\(58,45,31,0\.4\) 0%, rgba\(34,26,17,0\.85\) 100%\);/g, "background: rgba(34,26,17,0.3); backdrop-filter: blur(16px);");
// Card shadow reduction (minimalism)
css = css.replace(/0 8px 24px rgba\(0,0,0,0\.5\)/g, "0 8px 24px rgba(0,0,0,0.2)");

// House card glassmorphism
css = css.replace(/background:\s*linear-gradient\(180deg, rgba\(44,34,24,0\.7\) 0%, rgba\(17,13,9,0\.95\) 100%\);/g, "background: rgba(17,13,9,0.35); backdrop-filter: blur(16px);");

// Auction block glassmorphism
css = css.replace(/background:\s*radial-gradient\(ellipse 90% 70% at 50% 0%, rgba\(255,140,26,0\.1\) 0%, transparent 60%\),\s*linear-gradient\(180deg, rgba\(34,26,17,0\.85\) 0%, rgba\(10,8,6,0\.95\) 100%\);/g, "background: rgba(10,8,6,0.4); backdrop-filter: blur(20px);");

// Modal glassmorphism
css = css.replace(/background:\s*linear-gradient\(180deg, var\(--surface\) 0%, var\(--mid\) 100%\);/g, "background: rgba(26,20,13,0.45); backdrop-filter: blur(24px);");

// Input minimalist borders
css = css.replace(/border-left:\s*2px solid var\(--border2\);/g, "border-left: 1px solid var(--border);");

fs.writeFileSync(cssPath, css);
console.log('CSS updated successfully.');
