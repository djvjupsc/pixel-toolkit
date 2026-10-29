PixelToolkit single-file update — bulk tools

Replace only the existing root-level index.html in the GitHub repository with this index.html.
This page includes its CSS and JavaScript inline; do not upload it into a new folder.
Commit the change and wait for Cloudflare Pages deployment to succeed.

Updates:
- Bulk Image Resizer: processes all selected images and provides one download link per result.
- Bulk Aspect Ratio Changer: applies a chosen ratio to all selected images using crop or fit-with-white-canvas.
- Bulk Image Compressor: processes selected images with a quality setting and provides individual download links.

Limits:
- This is browser-side processing. Very large batches can exceed phone memory.
- Individual downloads are provided; ZIP packaging is not implemented here.
- Syntax/packaging checks do not replace real-device testing.
