PIXELTOOLKIT PWA PHASE 1 PACKAGE

Upload the CONTENTS of this folder to the ROOT of the existing GitHub repository. Replace index.html and upload the new files/folders. Keep existing app assets/scripts if your repo has any additional files; this package includes the current redesign pages.

New PWA files:
- manifest.webmanifest
- service-worker.js
- icons/icon-192.png
- icons/icon-512.png

Updated index.html includes PWA manifest links and service-worker registration.

After Cloudflare Pages deploys, check these URLs:
1. https://pixel-toolkit.pages.dev/manifest.webmanifest
2. https://pixel-toolkit.pages.dev/service-worker.js
3. https://pixel-toolkit.pages.dev/icons/icon-192.png
4. https://pixel-toolkit.pages.dev/icons/icon-512.png

On Android Chrome: open the site > three-dot menu > Install app (or Add to Home screen).

IMPORTANT:
- This is Phase 1 PWA preparation, NOT an Android AAB or Play Store release.
- Test all image/PDF tools after deployment.
- The service worker caches only the app shell and same-origin GET assets. It does not cache uploaded images or generated files.
- TWA packaging and Digital Asset Links are Phase 2.
- Keep the same HTTPS host for the Play Store TWA process.
