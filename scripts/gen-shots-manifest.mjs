// Lists the files present in public/shots/ into src/lib/shots-manifest.json.
//
// The site runs on Cloudflare Workers, where there is no file system at request
// time, so "does this screenshot exist yet?" is answered once, at build time.
// Runs automatically before `npm run build` and `npm run dev` (prebuild/predev).
// Drop a file named as in public/shots/README.md, rebuild, and the placeholder
// is replaced by the real image.
import { readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'public', 'shots');
const out = join(root, 'src', 'lib', 'shots-manifest.json');

const files = existsSync(dir)
  ? readdirSync(dir).filter(f => !f.startsWith('.') && f.toLowerCase() !== 'readme.md').sort()
  : [];

writeFileSync(out, JSON.stringify(files, null, 2) + '\n');
console.log(`shots manifest: ${files.length} file(s)${files.length ? ': ' + files.join(', ') : ''}`);
