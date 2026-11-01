PIXELTOOLKIT DISCOVERY UPDATE

This update adds:
- /llms.txt: a plain-text overview of the actual site and its current capabilities/limitations.
- /.well-known/ard.json: a JSON Agentic Resource Discovery manifest describing the public website.
- rel="ard" link in index.html.
- Agentmap directive in robots.txt.

Existing tool-processing JavaScript, CSS, page layout, and PWA files are not changed.

ANDROID INSTALL
1. Download this ZIP and extract it using Files by Google.
2. Open the extracted pixel-toolkit-main folder.
3. In GitHub, open the dvjupsc/pixel-toolkit repository on the main branch.
4. Upload the contents of this folder to the repository root, allowing replacement of existing files when prompted.
   Alternatively, replace only index.html and robots.txt, and add llms.txt and the .well-known/ard.json file while preserving the .well-known folder.
5. Commit the changes to main.
6. Wait for Cloudflare Pages deployment to finish.

VERIFY AFTER DEPLOYMENT
Open these URLs in Chrome:
- https://pixel-toolkit.pages.dev/llms.txt
- https://pixel-toolkit.pages.dev/.well-known/ard.json
- https://pixel-toolkit.pages.dev/robots.txt

The ARD manifest describes the website itself. It does not claim that PixelToolkit currently exposes an MCP server, A2A agent, or callable API.
The Agentic Browsing audit is experimental and independent of the four core Lighthouse scores. A valid manifest can resolve the malformed-JSON warning, but the score may update only after the new deployment is audited.
