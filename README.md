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
- **Résumé PDF:** `public/resume.pdf` is generated from `src/data.js`. After editing the data, run `node scripts/build-resume.mjs`, open the `resume.html` it creates in Chrome, choose **Print → Save as PDF** (A4, background graphics on) and save over `public/resume.pdf`.
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
