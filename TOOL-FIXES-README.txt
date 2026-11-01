PixelToolkit — Corrected tools update

This ZIP is based on the uploaded pixel-toolkit-main source archive.

Corrections included:
1. Batch Image Converter now has its own batch conversion mode and lets users select JPEG, PNG, or WebP output, with a quality control. It processes each selected image, reports per-file failures, and supports individual downloads and a combined ZIP.
2. JPEG batch conversions now paint a white background before drawing, so transparent source pixels do not turn black in JPEG output.
3. Palette Extractor now draws the actual source image to a sampling canvas before reading pixels. It displays up to eight sampled color swatches and HEX values.
4. Image to Base64 now displays the complete data URL and provides a copy button, with a manual-select fallback if clipboard access is unavailable.

Preserved from the supplied source:
- Existing page design, styles, branding, SEO metadata, AdSense publisher metadata/script, ads.txt, robots.txt, sitemap, PWA files, legal pages and existing tool implementations.

Validation performed:
- Inline JavaScript syntax check passed with Node.js --check.
- Static source review of the corrected processing branches.

Important:
- This is a source-code correction, not a claim that every tool has been live-tested on every browser/device.
- HEIC/AVIF/SVG and PDF/QR features remain dependent on browser decoding or their external libraries as described in the site UI.
- Basic background removal, upscaling, restoration and denoising remain non-AI browser operations.

Deployment:
Upload/replace the repository files using this ZIP's contents, preserving the pixel-toolkit-main folder structure. Do not delete the existing ads.txt or site configuration files.
