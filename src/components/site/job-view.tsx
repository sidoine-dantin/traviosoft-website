import { Link } from '@/i18n/navigation';
import type { JobSlug, SiteContent } from '@/content/types';
import { Visual } from './visuals';
import { FaqList, FaqSchema } from './faq';
import { ChapterBar } from './chapter-bar';
import { FeatureTabs } from './feature-tabs';
import { ChapterExplorer } from './chapter-explorer';

// Preview: topics as tabs (option B). Set NEXT_PUBLIC_JOB_EXPLORER=0 to show the sections one after another (option A).
const EXPLORER = process.env.NEXT_PUBLIC_JOB_EXPLORER !== '0';
import type { Chapter } from '@/content/types';

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

      {EXPLORER ? (
        <ChapterExplorer labels={j.chapters.map(ch => ch.kicker)}>
          {j.chapters.map((ch, i) => <ChapterView key={ch.id} ch={ch} i={i} c={c} inExplorer />)}
        </ChapterExplorer>
      ) : (
        <div>
          <ChapterBar items={j.chapters.map(ch => ({ id: ch.id, label: ch.kicker }))} label={c.common.onThisPage} />
          {j.chapters.map((ch, i) => <ChapterView key={ch.id} ch={ch} i={i} c={c} />)}
        </div>
      )}

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

function Head({ ch, center }: { ch: Chapter; center?: boolean }) {
  return (
    <div className={center ? 'ch-head center' : 'ch-head'}>
      <p className="lbl ch-kicker">{ch.kicker}</p>
      <h2 className="h2">{ch.title}</h2>
      <p className="lead muted">{ch.lead}</p>
    </div>
  );
}

function ChapterView({ ch, i, c, inExplorer }: { ch: Chapter; i: number; c: SiteContent; inExplorer?: boolean }) {
  const layout = ch.layout ?? 'tabs';
  const visual = <Visual k={ch.visual} v={c.visuals} />;
  if (layout === 'stage') {
    return (
      <section id={ch.id} className="on-green band chapter-band ch-stage">
        <div className="wrap">
          <Head ch={ch} center />
          <div className="ch-stage-visual">{visual}</div>
          <div className="ch-stage-points">
            {ch.features.map(f => (
              <div key={f.title}><h3>{f.title}</h3>{f.body.map((p, k) => <p key={k}>{p}</p>)}</div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (layout === 'bento') {
    return (
      <section id={ch.id} className={`${i % 2 ? 'on-cream' : 'on-cream2'} band chapter-band`}>
        <div className="wrap">
          <Head ch={ch} />
          <div className="bento">
            <div className="bento-visual">{visual}</div>
            {ch.features.map((f, k) => (
              <div className={`bento-card${k === ch.features.length - 1 ? ` bento-last-${(ch.features.length - 2) % 3}` : ''}`} key={f.title}><h3>{f.title}</h3>{f.body.map((p, k) => <p key={k}>{p}</p>)}</div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (layout === 'flow') {
    return (
      <section id={ch.id} className={`${i % 2 ? 'on-cream' : 'on-cream2'} band chapter-band`}>
        <div className="wrap ch-flow">
          <div>
            <Head ch={ch} />
            <ol className="flow">
              {ch.features.map((f, k) => (
                <li key={f.title}><span className="flow-n" aria-hidden="true">{k + 1}</span><h3>{f.title}</h3>{f.body.map((p, m) => <p key={m}>{p}</p>)}</li>
              ))}
            </ol>
          </div>
          <div className="chapter-visual">{visual}</div>
        </div>
      </section>
    );
  }
  return (
    <section id={ch.id} className={`${i % 2 ? 'on-cream' : 'on-cream2'} band chapter-band`}>
      <div className={`wrap chapter${i % 2 ? ' flip' : ''}`}>
        <div className="chapter-copy">
          <Head ch={ch} />
          {inExplorer ? (
            <div className="points">
              {ch.features.map(f => <div key={f.title}><h3>{f.title}</h3>{f.body.map((p, k) => <p key={k}>{p}</p>)}</div>)}
            </div>
          ) : <FeatureTabs items={ch.features} />}
        </div>
        <div className="chapter-visual">{visual}</div>
      </div>
    </section>
  );
}
