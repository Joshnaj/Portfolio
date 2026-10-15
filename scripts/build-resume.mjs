// Builds resume.html from src/data.js so the PDF always matches the website.
// Usage:  node scripts/build-resume.mjs
// Then open resume.html in Chrome → Print → "Save as PDF" (A4, margins: none,
// background graphics on) and save it as public/resume.pdf.

import { writeFileSync } from "node:fs";
import { profile, experience, certificates, skills } from "../src/data.js";

const esc = (t = "") =>
  String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const host = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const contact = [
  profile.email,
  profile.linkedin && host(profile.linkedin),
  profile.github && host(profile.github),
  profile.website && host(profile.website),
].filter(Boolean);

const jobs = experience
  .map(
    (j) => `
  <article class="job">
    <header>
      <div>
        <h3>${esc(j.role)}</h3>
        <p class="org">${esc(j.company)}${j.client ? ` · Client: ${esc(j.client)}` : ""}</p>
        ${j.focus ? `<p class="focus">${esc(j.focus)}</p>` : ""}
      </div>
      <span class="when">${esc(j.period.replace("—", "–"))}</span>
    </header>
    <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
  </article>`
  )
  .join("");

const skillRows = Object.entries(skills)
  .map(([g, list]) => `<div class="row"><dt>${esc(g)}</dt><dd>${list.map(esc).join(" · ")}</dd></div>`)
  .join("");

const extras = certificates
  .map(
    (c) =>
      `<div class="row"><dt>${esc(c.kind || "")}</dt><dd><strong>${esc(c.title)}</strong> — ${esc(c.issuer)}${c.date ? `, ${esc(c.date)}` : ""}</dd></div>`
  )
  .join("");

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(profile.name)} — Résumé</title>
<style>
  @page { size: A4; margin: 14mm 0 13mm; }
  :root { --ink: #16161d; --muted: #5d5d6e; --rule: #dcdce6; --accent: #3b4fd8; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: "Inter", "Helvetica Neue", Arial, sans-serif; color: var(--ink); font-size: 9.6pt; line-height: 1.45; }
  .page { padding: 2mm 17mm 0; }
  .top { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; padding-bottom: 10px; border-bottom: 2px solid var(--ink); }
  h1 { font-size: 23pt; letter-spacing: -0.02em; line-height: 1.05; }
  .role { color: var(--accent); font-weight: 600; font-size: 11pt; margin-top: 4px; }
  .contact { text-align: right; color: var(--muted); font-size: 8.6pt; line-height: 1.6; }
  h2 { font-size: 8.4pt; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin: 14px 0 7px; break-after: avoid; }
  .summary { color: #2c2c38; }
  .job { padding: 8px 0 7px; border-bottom: 1px solid var(--rule); break-inside: avoid; }
  .job:last-child { border-bottom: 0; }
  .job header { display: flex; justify-content: space-between; gap: 12px; }
  h3 { font-size: 10.6pt; }
  .org { color: var(--accent); font-weight: 500; }
  .focus { color: var(--muted); font-style: italic; font-size: 8.8pt; }
  .when { color: var(--muted); white-space: nowrap; font-size: 8.8pt; font-variant-numeric: tabular-nums; }
  ul { margin: 5px 0 0 14px; }
  li { margin-bottom: 2.5px; padding-left: 2px; }
  li::marker { color: var(--accent); }
  dl .row { display: grid; grid-template-columns: 37mm 1fr; gap: 10px; padding: 3px 0; break-inside: avoid; }
  dt { color: var(--muted); font-weight: 600; }
  .grid2 { display: grid; grid-template-columns: 1fr; }
</style></head>
<body><div class="page">
  <div class="top">
    <div>
      <h1>${esc(profile.name)}</h1>
      <p class="role">${esc(profile.role)}</p>
    </div>
    <div class="contact">${contact.map(esc).join("<br>")}</div>
  </div>

  <h2>Summary</h2>
  <p class="summary">${esc(profile.summary || profile.tagline)}</p>

  <h2>Experience</h2>
  ${jobs}

  <h2>Skills</h2>
  <dl>${skillRows}</dl>

  <h2>Education, Awards &amp; Training</h2>
  <dl>${extras}</dl>
</div></body></html>`;

writeFileSync(new URL("../resume.html", import.meta.url), html);
console.log("Wrote resume.html");
