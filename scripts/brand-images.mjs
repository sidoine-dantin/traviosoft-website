/**
 * Renders the share images (public/og/<locale>.png, 1200x630), the logo for search
 * engines (public/logo.png, 512x512) and the phone home-screen icon (src/app/apple-icon.png).
 * Run after changing the tagline or the mark:  node scripts/brand-images.mjs
 * Palette A only (DESIGN.md): dark green background, cream text, the yellow disc mark.
 */
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // the machine's Playwright, not a site dependency
import { mkdir } from 'node:fs/promises';

// The footer tagline of each language (src/content/<l>/base.ts), split in two, without full stops.
const TAGLINES = {
  es: ['Software para agencias de viajes a medida y DMC', 'De la primera solicitud a la última factura'],
  en: ['Software for tailor-made travel agencies and DMCs', 'From the first request to the last invoice'],
  fr: ['Logiciel pour agences de voyages sur mesure et DMC', 'De la première demande à la dernière facture'],
  it: ['Software per agenzie di viaggio su misura e DMC', 'Dalla prima richiesta all’ultima fattura'],
  pt: ['Software para agências de viagens à medida e DMC', 'Do primeiro pedido à última fatura']
};

const MARK = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 30 30"><circle cx="15" cy="15" r="14" fill="#E0F354"/><path d="M8 20c3-9 11-11 14-10" stroke="#015D47" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="1 4.5"/><circle cx="22" cy="10" r="3" fill="#015D47"/></svg>`;
const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700&family=Schibsted+Grotesk:wght@500;700&display=block" rel="stylesheet">`;

const og = (lang, [title, sub]) => `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">${FONTS}<style>
  html,body{margin:0;width:1200px;height:630px;background:#013A2D;overflow:hidden}
  .wrap{position:relative;box-sizing:border-box;width:1200px;height:630px;padding:80px 88px;display:flex;flex-direction:column;justify-content:space-between}
  .wm{display:flex;align-items:center;gap:18px;font-family:'Bricolage Grotesque';font-weight:700;font-size:56px;color:#F7F8F6;letter-spacing:-0.02em}
  h1{margin:0;font-family:'Schibsted Grotesk';font-weight:700;font-size:64px;line-height:1.08;color:#F7F8F6;max-width:16em;text-wrap:balance}
  p{margin:22px 0 0;font-family:'Schibsted Grotesk';font-weight:500;font-size:34px;color:#F7F8F6;opacity:.8}
  .route{position:absolute;right:-40px;top:-30px}
</style></head><body><div class="wrap">
  <svg class="route" width="560" height="300" viewBox="0 0 560 300" aria-hidden="true"><path d="M20 280 C 140 220, 200 60, 360 70 S 520 140, 600 40" fill="none" stroke="#E0F354" stroke-width="5" stroke-dasharray="0 18" stroke-linecap="round" opacity=".55"/><circle cx="360" cy="70" r="11" fill="#E0F354"/></svg>
  <div class="wm">${MARK(64)}traviosoft</div>
  <div><h1>${title}</h1><p>${sub}</p></div>
</div></body></html>`;

const square = (size, pad, bg) => `<!doctype html><html><head><style>html,body{margin:0;width:${size}px;height:${size}px;background:${bg};display:grid;place-items:center;overflow:hidden}</style></head><body>${MARK(size - pad * 2)}</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
await mkdir('public/og', { recursive: true });
for (const [l, t] of Object.entries(TAGLINES)) {
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(og(l, t), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og/${l}.png` });
}
await page.setViewportSize({ width: 512, height: 512 });
await page.setContent(square(512, 48, '#F7F8F6'));
await page.screenshot({ path: 'public/logo.png' });
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(square(180, 22, '#013A2D'));
await page.screenshot({ path: 'src/app/apple-icon.png' });
await browser.close();
console.log('done');
