// Prints resume.html (made by build-resume.mjs) to public/resume.pdf.
// Usage: node scripts/build-resume.mjs && node scripts/resume-pdf.mjs
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(new URL("../resume.html", import.meta.url).href);
await page.waitForTimeout(300);
await page.pdf({
  path: new URL("../public/resume.pdf", import.meta.url).pathname,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log("Wrote public/resume.pdf");
