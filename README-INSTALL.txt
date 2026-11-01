PIXELTOOLKIT ACCESSIBILITY FIX V4

This package updates only index.html. It strengthens contrast for tool-category labels and makes FAQ summary controls at least 68px high with spacing. Image-processing JavaScript and tool behaviour are unchanged.

ANDROID INSTALL
1. Download and extract this ZIP using Files by Google.
2. Open your GitHub repository: dvjupsc/pixel-toolkit.
3. Replace the root-level index.html with the index.html from this ZIP.
4. Commit the change to the main branch.
5. Wait for the Cloudflare Pages deployment to finish.
6. Open https://pixel-toolkit.pages.dev/ in Chrome Incognito, then run Lighthouse again.

IMPORTANT
If you already deployed V3, this V4 is the next replacement. Upload only index.html; do not upload a separate CSS file. Re-run Lighthouse after the deployment is complete. Accessibility scores can vary by browser, viewport and audit state; this change is intended to address the two issues shown in the supplied screenshots, not to guarantee a particular score.
