import { Link } from '@/i18n/navigation';
import { Logo } from '@/components/site/logo';
import type { SiteContent } from '@/content/types';
import { CookieSettingsLink } from '@/components/site/consent';

export default function Footer({ c }: { c: SiteContent }) {
  const f = c.footer;
  // No listing page: the comparisons and a few blog posts are linked from here, as short inline lists.
  const vs = (t: string) => t.split(':')[0].replace(/^Traviosoft\s+(vs|ou|o|frente a|contro|ou)\s+/i, '').trim();
  const compares = c.articles.filter(a => a.kind === 'compare');
  const hasPost = (slug: string) => c.articles.some(a => a.slug === slug);
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo color="var(--cream)" />
            <p style={{ marginTop: 16, maxWidth: '34ch', opacity: 0.85 }}>{f.tagline}</p>
          </div>
          <div>
            <h4>{f.product}</h4>
            <ul>
              {(['sell', 'book', 'get-paid', 'setup'] as const).map(s => (
                <li key={s}><Link href={`/${s}`}>{c.jobs[s].name}</Link></li>
              ))}
              <li><Link href="/pricing">{c.nav.pricing}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{f.company}</h4>
            <ul>
              <li><Link href="/about">{f.about}</Link></li>
              <li><Link href="/switch">{f.switching}</Link></li>
              <li><Link href="/faq">{f.faq}</Link></li>
              <li><Link href="/demo">{c.nav.demo}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{f.legal}</h4>
            <ul>
              <li><Link href="/legal/privacy">{f.privacy}</Link></li>
              <li><Link href="/legal/terms">{f.terms}</Link></li>
              <li><Link href="/legal/notice">{f.notice}</Link></li>
              <CookieSettingsLink label={f.consent.settings} />
            </ul>
          </div>
        </div>
        <div className="foot-more">
          <div>
            <h4>{f.compare}</h4>
            <ul className="foot-inline">
              {compares.map(a => <li key={a.slug}><Link href={`/compare/${a.slug}`}>{vs(a.title)}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>{f.guides}</h4>
            <ul className="foot-inline">
              {f.posts.filter(p => hasPost(p.slug)).map(p => <li key={p.slug}><Link href={`/guides/${p.slug}`}>{p.label}</Link></li>)}
              <li><Link href="/glossary">{f.glossary}</Link></li>
              {f.localLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {f.rights}</span>
          <span>{f.hosted}</span>
        </div>
      </div>
    </footer>
  );
}
