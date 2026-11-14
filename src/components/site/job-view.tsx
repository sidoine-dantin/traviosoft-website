import { Link } from '@/i18n/navigation';
import type { JobSlug, SiteContent } from '@/content/types';
import { Visual } from './visuals';
import { FaqList, FaqSchema } from './faq';
import { ChapterBar } from './chapter-bar';

const ORDER: JobSlug[] = ['sell', 'book', 'get-paid', 'setup'];

export function JobView({ c, slug }: { c: SiteContent; slug: JobSlug }) {
  const j = c.jobs[slug];
  const next = ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length];
  const nj = c.jobs[next];
  return (
    <>
      <section className="wrap job-hero">
        <div>
          <h1 className="h1">{j.heroTitle}</h1>
          <p className="lead">{j.heroLead}</p>
        </div>
        <div className="job-hero-visual">
          <Visual k={j.heroVisual} v={c.visuals} />
        </div>
      </section>

      <div>
      <ChapterBar items={j.chapters.map(ch => ({ id: ch.id, label: ch.kicker }))} label={c.common.onThisPage} />
      {j.chapters.map((ch, i) => {
        const tone = i % 2 === 0 ? 'on-cream2' : 'on-cream';
        return (
          <section key={ch.id} id={ch.id} className={`${tone} band chapter-band`}>
            <div className={`wrap chapter${i % 2 ? ' flip' : ''}`}>
              <div className="chapter-copy">
                <h2 className="h2" style={{ color: 'var(--green)' }}>{ch.title}</h2>
                <p className="lead muted">{ch.lead}</p>
                <div className="feat-list">
                  {ch.features.map(f => (
                    <details className="feat" key={f.title}>
                      <summary>
                        <span>{f.title}</span>
                      </summary>
                      <div className="feat-body">{f.body.map((p, k) => <p key={k}>{p}</p>)}</div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="chapter-visual"><Visual k={ch.visual} v={c.visuals} /></div>
            </div>
          </section>
        );
      })}
      </div>

      <section className="band">
        <div className="narrow">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 28 }}>{c.common.faqTitle}</h2>
          <FaqList items={j.faq} />
          <FaqSchema items={j.faq} />
        </div>
      </section>

      <section className="on-green band-sm">
        <div className="wrap">
          <Link href={`/${next}`} className="next-job">
            <span>
              <span className="lbl" style={{ opacity: 0.75 }}>{c.common.next}</span>
              <span className="h2" style={{ display: 'block', marginTop: 10 }}>{nj.name}</span>
              <span style={{ display: 'block', marginTop: 8, opacity: 0.85 }}>{nj.menuLine}</span>
            </span>
            <span aria-hidden="true" style={{ fontSize: 56, fontWeight: 300 }}>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
