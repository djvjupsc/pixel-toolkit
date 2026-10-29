# PixelToolkit — Android Upload Starter

This is a static website starter for an all-in-one image utility site.

## What is included
- Responsive home page and searchable tool directory
- Catalogue of 60 planned tool functions
- Browser-based implementations for common operations such as resize, basic compression, target-KB attempts, crop, rotate, flip, border, padding, blur, pixelation, brightness/contrast, text overlay, watermark, collage, basic metadata inspection, color sampling and palette sampling
- Privacy, Terms and About draft pages
- Basic robots.txt and sitemap.xml

## Important limitations
This is NOT a finished, production-tested 60-tool platform. Several catalogue entries are listed but intentionally marked as requiring additional implementation, including AI background removal/upscaling/restoration, PDF operations, QR generation and ZIP export. HEIC/AVIF/SVG support depends on browser decoding capabilities. Test all operations before publishing for real users.

## Local preview
Open `index.html` in a modern browser. Some browser features may behave differently when opened as a local file; deployment to HTTPS is recommended for testing.

## Deploy using GitHub and Cloudflare Pages from Android
1. Extract this ZIP on your phone if needed.
2. Create a GitHub repository named `pixel-toolkit`.
3. Upload the contents of this folder (upload files inside the folder, not the outer ZIP).
4. Open Cloudflare Dashboard > Workers & Pages > Create application > Pages.
5. Connect the GitHub repository.
6. For plain static HTML, use no build command (or `exit 0` if the UI requires a command) and set output directory to `/` or the repository root, depending on the current Cloudflare setup UI.
7. Deploy, open the provided pages.dev URL and test on your phone.
8. If deployment fails, check the build log and ensure `index.html` is in the configured output directory.

## Before public launch
- Test every tool on Android Chrome and desktop browsers if possible.
- Fix or remove tools that are not implemented.
- Review third-party library licenses before adding dependencies.
- Update privacy and terms to match actual behavior.
- Add a custom domain only when affordable; the pages.dev address can be used initially.
- Do not add ad scripts until the core experience is tested and privacy disclosures are updated.
