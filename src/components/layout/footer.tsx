import { Link } from '@/i18n/navigation';
import { Logo } from '@/components/site/logo';
import { JOB_ORDER, type SiteContent } from '@/content/types';
import { CookieSettingsLink } from '@/components/site/consent';
import { Parallax } from '@/components/site/parallax';
import { RouteTraveller } from '@/components/site/route-traveller';

export default function Footer({ c }: { c: SiteContent }) {
  const f = c.footer;
  // No listing page: the comparisons and a few blog posts are linked from here, as short inline lists.
  const vs = (t: string) => t.split(':')[0].replace(/^Traviosoft\s+(vs|ou|o|frente a|contro|ou)\s+/i, '').trim();
  const compares = c.articles.filter(a => a.kind === 'compare');
  const hasPost = (slug: string) => c.articles.some(a => a.slug === slug);
  return (
    <footer className="foot">
      {/* The home hero's background, drawn the other way round: a trip route that ends here, with its last stop. */}
      <svg className="foot-bg" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <g data-depth=".3"><circle cx="1290" cy="470" r="280" fill="var(--deep)" opacity=".5" /></g>
        <g data-depth=".18"><circle cx="120" cy="40" r="190" fill="var(--cream)" opacity=".06" /></g>
        <g data-depth=".08">
          <path data-route d="M-30 90 C 220 40, 360 260, 620 300 S 1000 180, 1180 330 S 1380 470, 1480 430" fill="none" stroke="var(--yellow)" strokeWidth="4" strokeDasharray="0 16" strokeLinecap="round" opacity=".3" />
          <circle data-route-dot cx="1180" cy="330" r="9" fill="var(--yellow)" opacity=".8" />
        </g>
      </svg>
      <Parallax anchor="bottom" />
      <RouteTraveller />
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo color="var(--cream)" />
            <p style={{ marginTop: 16, maxWidth: '34ch', opacity: 0.85 }}>{f.tagline}</p>
          </div>
          <div>
            <h4>{f.product}</h4>
            <ul>
              {JOB_ORDER.map(s => (
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
          <div className="foot-compare">
            <h4>{f.compare}</h4>
            <ul className="foot-cols">
              {compares.map(a => <li key={a.slug}><Link href={`/compare/${a.slug}`}>{vs(a.title)}</Link></li>)}
            </ul>
          </div>
          <div className="foot-blog">
            <h4>{f.guides}</h4>
            <ul className="foot-cols">
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
