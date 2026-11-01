import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];
const warnings = [];
const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const manifestPath = exists('manifest.webmanifest') ? 'manifest.webmanifest'
  : exists('manifest.json') ? 'manifest.json' : null;

if (!exists('index.html')) errors.push('Missing root index.html');
if (!manifestPath) errors.push('Missing manifest.webmanifest (or manifest.json) in repository root');
if (!exists('service-worker.js') && !exists('sw.js')) errors.push('Missing service-worker.js (or sw.js) in repository root');

if (manifestPath) {
  let manifest;
  try { manifest = JSON.parse(read(manifestPath)); }
  catch (e) { errors.push(`Manifest is not valid JSON: ${e.message}`); }
  if (manifest) {
    for (const key of ['name', 'short_name', 'description', 'start_url', 'display']) {
      if (typeof manifest[key] !== 'string' || !manifest[key].trim()) errors.push(`Manifest field "${key}" is missing or empty`);
    }
    if (manifest.start_url && !manifest.start_url.startsWith('/')) warnings.push('start_url is not root-relative; verify it is intentional');
    if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) errors.push('Manifest must contain at least one icon');
    else {
      for (const icon of manifest.icons) {
        if (!icon.src) { errors.push('An icon entry has no src'); continue; }
        const src = icon.src.replace(/^\//, '');
        if (!exists(src)) errors.push(`Manifest icon file not found: ${icon.src}`);
        if (!icon.sizes || !icon.type) warnings.push(`Icon ${icon.src} should declare sizes and type`);
      }
    }
  }
}

if (exists('index.html')) {
  const html = read('index.html');
  if (!/rel=["']manifest["']/.test(html)) errors.push('index.html does not link a web app manifest');
  if (!/serviceWorker\.register\(/.test(html)) warnings.push('index.html does not appear to register a service worker');
}

if (exists('service-worker.js')) {
  const sw = read('service-worker.js');
  if (!/addEventListener\s*\(\s*["']install["']/.test(sw)) warnings.push('service-worker.js has no recognizable install event listener');
  if (!/addEventListener\s*\(\s*["']fetch["']/.test(sw)) warnings.push('service-worker.js has no recognizable fetch event listener');
}

for (const warning of warnings) console.log(`::warning::${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`::error::${error}`);
  console.error(`\nPWA validation failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`PWA validation passed${warnings.length ? ` with ${warnings.length} warning(s)` : ''}.`);
