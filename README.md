# Personal portfolio

A responsive, static portfolio. No build step or dependencies required.

## Personalize

Edit `profile.js` to update your bio, projects, and contact links. The site is personalized from your résumé and LinkedIn profile, with live and source links for RoastOps. Customize colors and layout in `style.css`.

Source PDFs are ignored by Git and excluded from the deployment artifact.

## Preview

Open `index.html` in your browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Publish on GitHub Pages

1. Create a public GitHub repository named `pulkitjain1004.github.io` for a site at `https://pulkitjain1004.github.io/`, or use any repository name for a site at `https://pulkitjain1004.github.io/REPOSITORY/`.
2. Upload these files, including `.github/workflows/pages.yml`, to the `main` branch.
3. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. Run the **Deploy to GitHub Pages** workflow from the Actions tab if it has not already run. Once it completes, find your website URL in Settings → Pages.

Updates pushed to `main` deploy automatically. Relative asset links support both root and repository sites. Only the three public website files are uploaded by the workflow.
