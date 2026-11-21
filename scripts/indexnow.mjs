/**
 * Tells Bing (and the other IndexNow engines: Yandex, Seznam, Naver) that the site's pages are new
 * or changed, so they are crawled within hours instead of weeks. Bing's index also feeds ChatGPT
 * search and Copilot. Run it only once the live site serves the new pages:
 *   node scripts/indexnow.mjs
 * The key file public/b7d0429eb9d31d60d56d8c053007431c.txt proves we own the domain (https://www.indexnow.org/documentation).
 */
const KEY = 'b7d0429eb9d31d60d56d8c053007431c';
const HOST = 'traviosoft.com';
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList })
});
console.log(res.status, res.statusText, `(${urlList.length} pages sent)`);
