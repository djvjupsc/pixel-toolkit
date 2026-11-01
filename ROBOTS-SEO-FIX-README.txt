PIXELTOOLKIT ROBOTS.TXT SEO FIX

The PageSpeed report shows SEO 92 because Lighthouse flags the non-standard
"Agentmap:" directive in robots.txt as an unknown directive.

This update removes only that unsupported line. It preserves the standard
User-agent, Allow, and Sitemap directives.

The ARD manifest remains available at:
https://pixel-toolkit.pages.dev/.well-known/ard.json

The homepage ARD discovery link remains in index.html. Do not add the
Agentmap directive back to robots.txt.

ANDROID INSTALL
1. Extract this ZIP.
2. Open the extracted pixel-toolkit-main folder.
3. Replace the root-level robots.txt in GitHub repository dvjupsc/pixel-toolkit.
4. Commit to main and wait for Cloudflare Pages deployment.
5. Open https://pixel-toolkit.pages.dev/robots.txt and confirm there is no
   "Agentmap:" line.
6. Run PageSpeed Insights again.

Only robots.txt needs replacing. No index.html, CSS, JavaScript, or manifest
changes are required.
