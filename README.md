https://joshnaj.github.io/Portfolio/#contact
- **Certificates:** copy one `{ ... }` block per certificate. Put the credential URL in `link` to show a "Verify →" button.
- **Experience years** are calculated from `careerStart` and `sapStart` at the top of `src/data.js`, so they update by themselves.
- **Résumé PDF:** `public/resume.pdf` is generated from `src/data.js` automatically by GitHub on every push and on the 1st of each month. To make it on your own computer, run `npx playwright install chromium-headless-shell` once, then `npm run resume`.
- **Projects:** the section stays hidden while the `projects` list is empty. Add an entry (with `live` / `code` links) and it appears automatically.

