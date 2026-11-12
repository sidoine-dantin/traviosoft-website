import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** The site's 404, in the header and footer of every page. Same wording rule as
 *  the app and the server's error pages: say nothing about why. */
export default async function NotFound() {
  const t = getContent(await getLocale()).common.notFound;
  return (
    <section className="wrap" style={{ paddingBlock: 'clamp(72px, 12vw, 160px)' }}>
      <p className="lbl" style={{ color: 'var(--orange-ink)', fontFamily: 'var(--font-dm-mono), monospace' }}>404</p>
      <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '14ch', marginTop: 12 }}>{t.title}</h1>
      <p className="lead muted" style={{ marginTop: 22, maxWidth: '46ch' }}>{t.body}</p>
      <p style={{ marginTop: 36 }}><Link href="/" className="btn">{t.home}</Link></p>
    </section>
  );
}
