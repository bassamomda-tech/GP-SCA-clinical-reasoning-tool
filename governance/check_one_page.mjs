// Reasoning GP — one-page summary checker.
// Usage:  node governance/check_one_page.mjs tools/management/summaries/hypertension.html [more pages…] [--pdf out-folder]
// Needs Playwright (npm i playwright). Checks, for each page:
//   1. it prints on exactly ONE A4 page;
//   2. the sheet uses at most 96% of the printable height (4% spare for font differences);
//   3. no horizontal scroll on a 390 px wide phone screen;
//   4. no {{placeholder}} left from the template, and no JavaScript errors.
// With --pdf <folder>, it also saves <slug>.pdf for each page (the printable handout).
import { chromium } from 'playwright';
import { resolve, basename } from 'node:path';
import { readFileSync, mkdirSync } from 'node:fs';

const args = process.argv.slice(2);
const pdfAt = args.indexOf('--pdf');
const pdfDir = pdfAt >= 0 ? args.splice(pdfAt, 2)[1] : null;
if (!args.length) { console.error('Give one or more page paths.'); process.exit(2); }
if (pdfDir) mkdirSync(pdfDir, { recursive: true });

const PRINTABLE_PX = 1069;           // A4 297 mm minus 2 × 7 mm margins, at 96 dpi
const LIMIT = Math.floor(PRINTABLE_PX * 0.96);

const launch = () => chromium.launch().catch(() => chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }));
const browser = await launch();
let failed = 0;
for (const page of args) {
  const url = 'file://' + resolve(page);
  const problems = [];
  if (/\{\{[^}]*\}\}/.test(readFileSync(page, 'utf8'))) problems.push('template placeholder {{…}} still present');

  const p = await browser.newPage({ viewport: { width: 756, height: 1000 } });
  p.on('pageerror', e => problems.push('JS error: ' + e.message));
  await p.emulateMedia({ media: 'print' });
  await p.goto(url); await p.waitForTimeout(300);
  const h = await p.evaluate(() => Math.round(document.querySelector('.sheet').getBoundingClientRect().height));
  if (h > LIMIT) problems.push(`print height ${h}px > ${LIMIT}px (needs 4% spare)`);
  const pdf = await p.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  if (pages !== 1) problems.push(`prints on ${pages} pages`);
  if (pdfDir) { const { writeFileSync } = await import('node:fs'); writeFileSync(`${pdfDir}/${basename(page, '.html')}.pdf`, pdf); }

  const m = await browser.newPage({ viewport: { width: 390, height: 800 } });
  await m.goto(url); await m.waitForTimeout(200);
  if (await m.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)) problems.push('horizontal scroll on phone');

  console.log(`${problems.length ? 'FAIL' : 'PASS'}  ${page}  (print ${h}px of ${PRINTABLE_PX}, ${pages} page)` + (problems.length ? '\n      - ' + problems.join('\n      - ') : ''));
  if (problems.length) failed++;
  await p.close(); await m.close();
}
await browser.close();
process.exit(failed ? 1 : 0);
