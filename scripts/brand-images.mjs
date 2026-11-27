/**
 * Renders the share images (public/og/<locale>.png, 1200x630), the logo for search
 * engines (public/logo.png, 512x512), the favicons (src/app/icon1-3.png at 48, 96 and 192 px,
 * src/app/favicon.ico at 16, 32 and 48 px) and the phone home-screen icon (src/app/apple-icon.png).
 * Search engines show the favicon cropped to a circle, so every icon is the yellow disc alone:
 * transparent around a true circle, or (home-screen icon, which must be opaque) the disc's own
 * yellow to the edges, so a circular crop of it is the same disc.
 * Run after changing the tagline or the mark:  node scripts/brand-images.mjs
 * Palette A only (DESIGN.md): dark green background, cream text, the yellow disc mark.
 */
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // the machine's Playwright, not a site dependency
import { mkdir, writeFile } from 'node:fs/promises';

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

/** The disc filling the whole box: a true circle on a transparent background. */
const disc = (size) => `<!doctype html><html><head><style>html,body{margin:0;width:${size}px;height:${size}px;background:transparent;overflow:hidden}svg{display:block}</style></head><body><svg width="${size}" height="${size}" viewBox="0 0 30 30"><circle cx="15" cy="15" r="15" fill="#E0F354"/><path d="M8 20c3-9 11-11 14-10" stroke="#015D47" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="1 4.5"/><circle cx="22" cy="10" r="3" fill="#015D47"/></svg></body></html>`;

/** An .ico file holding PNG images (supported by every current browser and by search engines). */
function ico(pngs) {
  const header = Buffer.alloc(6 + 16 * pngs.length);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(pngs.length, 4);
  let offset = header.length;
  pngs.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e); header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt16LE(1, e + 4); header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8); header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...pngs.map(p => p.data)]);
}

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
// Home-screen icon: opaque (iOS fills transparency with black), so the disc's yellow runs to the edges.
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(disc(180).replace('background:transparent', 'background:#E0F354'));
await page.screenshot({ path: 'src/app/apple-icon.png' });
// Favicons: sizes in multiples of 48 px, as Google Search asks, plus 16 and 32 in the .ico for browser tabs.
const shot = async (size, path) => {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(disc(size));
  return page.screenshot({ path, omitBackground: true });
};
await shot(48, 'src/app/icon1.png');
await shot(96, 'src/app/icon2.png');
await shot(192, 'src/app/icon3.png');
const icoParts = [];
for (const size of [16, 32, 48]) icoParts.push({ size, data: await shot(size) });
await writeFile('src/app/favicon.ico', ico(icoParts));
await browser.close();
console.log('done');
