PIXELTOOLKIT LIGHTHOUSE CI — ANDROID INSTALLATION

This package adds an automated Lighthouse audit workflow.

WHAT IT DOES
- Runs after pushes to main or master.
- Can also be started manually from GitHub Actions.
- Runs every Monday at 9:00 AM India time.
- Waits 2 minutes after a push to allow Cloudflare Pages to deploy.
- Audits the homepage and About, Contact, Privacy and Terms pages.
- Saves Lighthouse HTML reports as a GitHub Actions artifact.

INSTALL ON ANDROID
1. Extract this ZIP using Files by Google.
2. Open your GitHub repository: dvjupsc/pixel-toolkit.
3. Open the .github folder, then workflows.
4. Upload lighthouse-audit.yml into that workflows folder.
   Final repository path must be:
   .github/workflows/lighthouse-audit.yml
5. Commit the new file to the main branch.
6. Open the repository's Actions tab and select
   "PixelToolkit Lighthouse Audit".
7. Open the latest successful run. Scroll to Artifacts and download
   the Lighthouse reports ZIP.

NOTES
- This audits the public production website, not an unpublished PR preview.
- The 2-minute wait is a practical buffer, not a guarantee that every
  Cloudflare deployment has finished. If a run tests an old deployment,
  rerun it manually after Cloudflare Pages shows the latest deployment
  as successful.
- Lighthouse scores can vary between runs and devices/network conditions.
- This workflow does not change your website files or Cloudflare settings.
