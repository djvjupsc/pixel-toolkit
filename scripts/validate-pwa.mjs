
import fs from "node:fs";

const required = [
  "index.html",
  "manifest.webmanifest",
  "service-worker.js",
  "icon-192.png",
  "icon-512.png",
  "about.html",
  "contact.html",
  "privacy.html",
  "terms.html",
  "robots.txt",
  "sitemap.xml"
];

let errors = 0;

function fail(message) {
  console.error("FAIL:", message);
  errors++;
}

function pass(message) {
  console.log("PASS:", message);
}

for (const file of required) {
  if (fs.existsSync(file)) pass(file);
  else fail("Missing file: " + file);
}

let manifest;

if (fs.existsSync("manifest.webmanifest")) {
  try {
    manifest = JSON.parse(
      fs.readFileSync("manifest.webmanifest", "utf8")
    );
    for (const field of [
      "name", "short_name", "description",
      "start_url", "scope", "display", "icons"
    ]) {
      if (!manifest[field]) fail("Missing manifest field: " + field);
    }
    pass("Manifest JSON valid");
  } catch {
    fail("Invalid manifest JSON");
  }
}

function pngSize(file) {
  const data = fs.readFileSync(file);
  const signature = Buffer.from([137,80,78,71,13,10,26,10]);
  if (data.length < 24 || !data.subarray(0,8).equals(signature)) {
    throw new Error("Invalid PNG");
  }
  return [
    data.readUInt32BE(16),
    data.readUInt32BE(20)
  ];
}

for (const [file, expected] of [
  ["icon-192.png", 192],
  ["icon-512.png", 512]
]) {
  if (!fs.existsSync(file)) continue;
  try {
    const [w,h] = pngSize(file);
    if (w !== expected || h !== expected) {
      fail(`${file} must be ${expected}x${expected}; found ${w}x${h}`);
    } else pass(`${file}: ${w}x${h}`);
  } catch (e) {
    fail(`${file}: ${e.message}`);
  }
}

if (manifest?.icons) {
  for (const icon of manifest.icons) {
    const file = icon.src?.replace(/^\/+/, "");
    if (!file || !fs.existsSync(file)) {
      fail("Missing manifest icon: " + icon.src);
    } else pass("Manifest icon exists: " + icon.src);
  }
}

if (fs.existsSync("index.html")) {
  const html = fs.readFileSync("index.html", "utf8");

  if (/rel=["']manifest["'][^>]*manifest\.webmanifest/i.test(html)) {
    pass("Manifest linked in HTML");
  } else if (/manifest\.webmanifest/i.test(html)) {
    pass("Manifest reference found");
  } else fail("Manifest link missing in index.html");

  if (/service-worker\.js/i.test(html)) {
    pass("Service worker reference found");
  } else fail("Service worker reference missing");
}

if (fs.existsSync("service-worker.js")) {
  const sw = fs.readFileSync("service-worker.js", "utf8");

  for (const event of ["install", "activate", "fetch"]) {
    if (new RegExp(`addEventListener\\s*\\(\\s*["']${event}["']`).test(sw)) {
      pass(`Service worker ${event} handler found`);
    } else {
      console.warn(`WARNING: ${event} handler not found`);
    }
  }

  try {
    new Function(sw);
    pass("Service worker JavaScript syntax valid");
  } catch (e) {
    fail("Service worker syntax error: " + e.message);
  }
}

console.log("------------------------------");
console.log("Errors:", errors);

if (errors) {
  console.error("PWA validation FAILED");
  process.exit(1);
}

console.log("PWA validation PASSED");
