PixelToolkit — Final Release Candidate RC1

Scope
- Preserves the 61-entry catalogue, existing visual design, branding, SEO metadata, AdSense integration, legal pages, PWA assets, sitemap, robots.txt and service worker.
- Improves the Compress to Exact KB algorithm: it searches a broader quality range, progressively scales dimensions when needed, reports actual output dimensions and size, and does not claim target achievement when the output remains above the requested maximum.
- Retains transparent limitations in the tool descriptions for browser-based background removal, upscaling, restoration, denoising, metadata inspection and favicon export.

Validation performed for this package
- ZIP archive integrity checked after creation.
- Inline JavaScript syntax checked with Node.js --check.
- Static checks confirmed the AdSense publisher ID, ads.txt declaration, robots.txt and release files are present.

Not certified by this package
- This is not a 61/61 independent browser certification. Live end-to-end tests, download integrity, device/browser compatibility and external dependency availability still require execution in a permitted browser environment.
- The previously reported 10 KB target test failed while the 25 KB target retest reported 24.6 KB. The updated algorithm requires regression testing with those same files and targets before that edge case can be marked resolved.

Deployment
- Extract the ZIP and upload the contents of pixel-toolkit-main to the repository root, preserving the folder structure and existing configuration files.
- Deploy to a staging preview first if available. Verify the compression tests and core tools before promoting to production.
