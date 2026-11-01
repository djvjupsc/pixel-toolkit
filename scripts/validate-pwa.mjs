import fs from "node:fs";

const required = [
  "manifest.webmanifest",
  "service-worker.js",
  "icon-192.png",
  "icon-512.png",
  "index.html"
];

let errors = 0;

for (const file of required) {
  if (fs.existsSync(file)) {
    console.log("PASS:", file);
  } else {
    console.error("MISSING:", file);
    errors++;
  }
}

if (fs.existsSync("manifest.webmanifest")) {
  try {
    const manifest = JSON.parse(
      fs.readFileSync("manifest.webmanifest", "utf8")
    );

    for (const field of [
      "name",
      "short_name",
      "description",
      "start_url",
      "scope",
      "display",
      "icons"
    ]) {
      if (!manifest[field]) {
        console.error("Missing manifest field:", field);
        errors++;
      }
    }
  } catch {
    console.error("Invalid manifest JSON");
    errors++;
  }
}

if (errors > 0) {
  console.error(`PWA validation failed: ${errors} error(s).`);
  process.exit(1);
}

console.log("SUCCESS: PWA validation passed.");
