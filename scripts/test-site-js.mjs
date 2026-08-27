import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const source = readFileSync(resolve(new URL('..', import.meta.url).pathname, 'script.js'), 'utf8');
const checks = [
  ['mobile menu button is selected', "document.querySelector('.menu-toggle')"],
  ['mobile menu state uses a CSS class', "menu.classList.toggle('is-open', shouldOpen)"],
  ['ARIA expansion is updated', "menuButton.setAttribute('aria-expanded', String(shouldOpen))"],
  ['Escape closes the menu', "event.key === 'Escape'"],
  ['route click closes the menu', "querySelectorAll('a').forEach"],
  ['no visitor storage is used', 'localStorage']
];
let failures = 0;
for (const [label, fragment] of checks) {
  const expectedAbsent = label === 'no visitor storage is used';
  const found = source.includes(fragment);
  if ((expectedAbsent && found) || (!expectedAbsent && !found)) { console.error(`FAIL: ${label}`); failures += 1; }
}
if (failures) process.exit(1);
console.log('PASS: navigation enhancement has accessible open/close paths and no visitor storage.');
