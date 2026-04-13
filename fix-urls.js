import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let p = path.join(dir, f);
        fs.statSync(p).isDirectory() ? walkDir(p, callback) : callback(p);
    });
}
walkDir(path.join(__dirname, 'src'), f => {
    if (!f.endsWith('.svelte')) return;
    let c = fs.readFileSync(f, 'utf8');
    let orig = c;
    c = c.split('href="{base}/"').join('href="{base}"');

    // Also catch missing favicon
    if (f.endsWith('app.html')) {
        let htmlOrig = fs.readFileSync(f, 'utf8');
        let htmlC = htmlOrig.replace('<link rel="icon" href="%sveltekit.assets%/favicon.ico" />', '<link rel="icon" href="%sveltekit.assets%/favicon.png" />');
        if (htmlC !== htmlOrig) fs.writeFileSync(f, htmlC);
    }

    if (c !== orig) {
        fs.writeFileSync(f, c);
        console.log('Fixed', f);
    }
});
