# 3D Portfolio

Built with React, Three.js (React Three Fiber) and Framer Motion.

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (version 20 or newer).

```bash
npm install
npm run dev
```

Open the link it prints (usually http://localhost:5173).

## 2. Add your details

Everything you see on the site comes from **`src/data.js`**:
your name, role, experience, certificates, skills, projects and contact links.
Edit that file and save — the page updates instantly.

- **Certificates:** copy one `{ ... }` block per certificate. Put the credential URL in `link` to show a "Verify →" button.
- **Experience years** are calculated from `careerStart` and `sapStart` at the top of `src/data.js`, so they update by themselves.
- **Résumé PDF:** `public/resume.pdf` is generated from `src/data.js` automatically by GitHub on every push and on the 1st of each month. To make it on your own computer, run `npx playwright install chromium-headless-shell` once, then `npm run resume`.
- **Projects:** the section stays hidden while the `projects` list is empty. Add an entry (with `live` / `code` links) and it appears automatically.

## 3. Put it online (free)

1. Create a new repository on GitHub (e.g. `portfolio`) and push this folder:
   ```bash
   git init
   git add .
   git commit -m "My 3D portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, pick the repo and press **Deploy**. Vercel detects Vite automatically.
3. You'll get a public link like `your-name.vercel.app`. Every `git push` redeploys the site.

Optional: buy a domain (e.g. `yourname.dev`) and add it under **Project → Settings → Domains** in Vercel.
