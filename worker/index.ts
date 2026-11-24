/*
 * traviosoft.com is a static site: every page is a prebuilt HTML file in the static assets
 * (see next.config.ts), served by Cloudflare without running this Worker. This Worker only
 * runs for addresses that have no file, and does almost no work, so it stays far below the
 * Workers CPU limit:
 * - "/" and addresses without a language go to the visitor's language (cookie, then browser
 *   language, then Spanish), as the next-intl middleware did before;
 * - any other address gets the site's 404 page in its language, with a 404 status.
 */
const LOCALES = ['es', 'en', 'fr', 'it', 'pt'] as const;
const DEFAULT_LOCALE = 'es';

interface Env {
  ASSETS: { fetch(input: Request | string): Promise<Response> };
}

function isLocale(value: string | undefined): value is (typeof LOCALES)[number] {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** The visitor's language: the NEXT_LOCALE cookie, then Accept-Language by preference, then Spanish. */
function pickLocale(request: Request): string {
  const cookie = request.headers.get('cookie')?.match(/(?:^|;\s*)NEXT_LOCALE=([a-z]{2})/)?.[1];
  if (isLocale(cookie)) return cookie;
  const ranked = (request.headers.get('accept-language') ?? '')
    .split(',')
    .map(part => {
      const [tag, ...params] = part.trim().toLowerCase().split(';');
      const q = params.find(p => p.trim().startsWith('q='));
      return { lang: tag.split('-')[0], q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .filter(entry => entry.q > 0)
    .sort((a, b) => b.q - a.q);
  return ranked.find(entry => isLocale(entry.lang))?.lang ?? DEFAULT_LOCALE;
}

async function notFound(request: Request, env: Env, locale: string): Promise<Response> {
  const page = await env.ASSETS.fetch(new Request(new URL(`/${locale}/404`, request.url), request));
  return new Response(request.method === 'HEAD' ? null : page.body, {
    status: 404,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=0, must-revalidate' }
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const first = url.pathname.split('/')[1];

    if (isLocale(first)) return notFound(request, env, first);

    // Files (anything with a dot in its last part) are never pages: no language redirect.
    const last = url.pathname.split('/').pop() ?? '';
    const locale = pickLocale(request);
    if (last.includes('.')) return notFound(request, env, locale);

    const path = url.pathname === '/' ? '' : url.pathname.replace(/\/+$/, '');
    return new Response(null, {
      status: 307,
      headers: { location: `/${locale}${path}${url.search}`, vary: 'accept-language, cookie' }
    });
  }
};
