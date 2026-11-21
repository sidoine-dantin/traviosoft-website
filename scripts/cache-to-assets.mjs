// Puts the prerendered pages into the worker's static assets (cdn-cgi/_next_cache), where the
// static-assets incremental cache reads them (see open-next.config.ts). `opennextjs-cloudflare deploy`
// does this itself; `wrangler deploy` does not, so wrangler runs this before every deploy or upload.
import fs from 'node:fs';

const from = '.open-next/cache';
const to = '.open-next/assets/cdn-cgi/_next_cache';
if (!fs.existsSync(from)) {
  console.error(`cache-to-assets: ${from} is missing; run the OpenNext build first`);
  process.exit(1);
}
fs.rmSync(to, { recursive: true, force: true });
fs.cpSync(from, to, { recursive: true });
console.log(`cache-to-assets: prerendered pages copied to ${to}`);
