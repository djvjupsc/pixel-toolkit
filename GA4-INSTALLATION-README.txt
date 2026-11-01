PIXELTOOLKIT — GA4 INSTALLATION PACKAGE

Google Analytics 4 Measurement ID: G-7WJ6R8RH33
Website: https://pixel-toolkit.pages.dev/

WHAT CHANGED
- Added the official Google tag (gtag.js) immediately after the opening <head> tag in all 21 HTML files.
- The tag uses the same GA4 Measurement ID on every page.
- Existing website files, SEO content, robots.txt, sitemap.xml, ads.txt, and application scripts were preserved.

DEPLOY ON ANDROID
1. Download and extract this ZIP.
2. Open https://github.com/dvjupsc/pixel-toolkit
3. Replace the repository contents with the contents of the extracted pixel-toolkit-main folder.
   Important: upload the contents of the folder, not the outer folder as an extra nested directory.
4. Commit the changes to the main branch.
5. Wait for the Cloudflare Pages deployment to complete.

VERIFY
1. Open https://pixel-toolkit.pages.dev/ in Chrome.
2. Open Google Analytics > Reports > Realtime.
3. Visit a few pages on the website, including a standalone SEO page.
4. Look for an active user and page_view events. Allow some time for reports to populate.

NOTES
- Do not add a second copy of the tag manually after deploying this package.
- Keep the existing GA4 Measurement ID: G-7WJ6R8RH33.
- Google Analytics collection may take time to appear. Realtime is the quickest initial check.
