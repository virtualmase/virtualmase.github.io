import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);
const files = ['index.html', 'styles.css', 'script.js', '404.html', 'favicon.svg', 'favicon-48.png', 'favicon-180.png', 'favicon-192.png', 'favicon-512.png', 'og-image.svg', 'og-image.png', 'manifest.webmanifest', 'robots.txt', 'sitemap.xml', '.nojekyll', 'llms.txt', 'README.md', 'ideas.md', 'QA.md', 'assets/fonts/instrument-sans-variable.woff2', 'assets/fonts/INSTRUMENT-SANS-LICENSE.txt', 'docs/typography-system.md', 'scripts/render_brand_assets.py'];
const required = [
  ['index.html', '<html lang="en">'],
  ['index.html', '<link rel="canonical" href="https://virtualmase.github.io/">'],
  ['index.html', '<meta name="twitter:card" content="summary_large_image">'],
  ['index.html', '<link rel="preload" href="assets/fonts/instrument-sans-variable.woff2" as="font" type="font/woff2" crossorigin>'],
  ['index.html', 'og-image.png'], ['index.html', 'manifest.webmanifest'],
  ['index.html', 'site-footer--operating'], ['index.html', 'Skip to the directory'],
  ['index.html', 'WHAT IS VIRTUALMASE?'], ['index.html', 'HOW IT WORKS'],
  ['index.html', 'role="tablist"'], ['index.html', 'role="tabpanel"'],
  ['index.html', 'https://github.com/virtualmase/lifecycle-skills'],
  ['index.html', 'https://github.com/virtualmase'],
  ['index.html', 'https://virtualmase.github.io/ai-mastery/'],
  ['index.html', 'https://autonomousresourcemanagement.com/'],
  ['index.html', 'https://autonomousresourcemanagement.com/practice/'],
  ['index.html', 'https://virtualmase.github.io/action-boundary-brief/'],
  ['index.html', 'https://virtualmase.github.io/ai-change-record/'],
  ['index.html', 'https://virtualmase.github.io/earthward-foundry/'],
  ['index.html', 'Earthward Foundry is a separate, informational physical-work field guide.'],
  ['index.html', 'Seven reader tasks'],
  ['index.html', 'This root directory is published from its source-controlled GitHub Pages route.'],
  ['index.html', 'source-ready; its hostname remains owner-gated'],
  ['404.html', 'ROUTE UNAVAILABLE / 404'],
  ['QA.md', 'Release QA — Virtualmase Public Directory'],
  ['robots.txt', 'Sitemap: https://virtualmase.github.io/sitemap.xml'],
  ['sitemap.xml', '<loc>https://virtualmase.github.io/</loc>']
];
const prohibited = [/\bfetch\s*\(/i, /XMLHttpRequest/i, /sendBeacon/i, /localStorage/i, /sessionStorage/i, /vite/i, /react/i, /tailwind/i, /certified/i, /guaranteed/i];
let failed = false; const fail = (message) => { console.error(`FAIL: ${message}`); failed = true; };
for (const file of files) if (!existsSync(resolve(root, file))) fail(`Missing required file: ${file}`);
for (const [file, fragment] of required) { const text = readFileSync(resolve(root, file), 'utf8'); if (!text.includes(fragment)) fail(`${file} is missing required content: ${fragment}`); }
for (const file of ['index.html', 'styles.css', 'script.js', '404.html']) { const text = readFileSync(resolve(root, file), 'utf8'); for (const pattern of prohibited) if (pattern.test(text)) fail(`${file} contains prohibited pattern: ${pattern}`); }
const styles = readFileSync(resolve(root, 'styles.css'), 'utf8');
if (!styles.includes('font-family:"Instrument Sans"')) fail('styles.css does not declare the unified Instrument Sans family');
if (!styles.includes('--type:"Instrument Sans",Arial,sans-serif')) fail('styles.css does not define the unified type token');
for (const legacy of ['var(--sans)', 'var(--mono)', 'var(--serif)']) if (styles.includes(legacy)) fail(`styles.css still uses legacy typography token: ${legacy}`);
const index = readFileSync(resolve(root, 'index.html'), 'utf8'); const jsonLd = index.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
if (!jsonLd) fail('index.html has no JSON-LD graph'); else { try { const graph = JSON.parse(jsonLd[1])['@graph']; for (const type of ['WebSite', 'WebPage', 'ItemList']) if (!graph?.some((item) => item['@type'] === type)) fail(`JSON-LD missing ${type}`); } catch { fail('index.html JSON-LD is not valid JSON'); } }
if (failed) process.exit(1); console.log(`PASS: ${files.length} required files, identity assets, social metadata, structured data, footer routes, property boundaries, and no-network/no-storage rules verified.`);
