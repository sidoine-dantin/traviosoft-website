import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** The site's 404, in the header and footer of every page: the status large with
 *  the title beside it, as on the app's and the server's error pages. Same wording
 *  rule: say nothing about why. */
export default async function NotFound() {
  const t = getContent(await getLocale()).common.notFound;
  return (
    <section className="wrap" style={{ paddingBlock: 'clamp(72px, 12vw, 160px)' }}>
      <h1 style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 16px', margin: 0, color: 'var(--green)', fontWeight: 400 }}>
        <span style={{ fontSize: 'clamp(72px, 10vw, 120px)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}>404</span>
        <span className="h3" style={{ margin: 0 }}>{t.title}</span>
      </h1>
      <p className="lead muted" style={{ marginTop: 22, maxWidth: '46ch' }}>{t.body}</p>
      <p style={{ marginTop: 36 }}><Link href="/" className="btn">{t.home}</Link></p>
    </section>
  );
}
