import { Link } from '@/i18n/navigation';
import { JOB_ORDER, type JobSlug, type SiteContent } from '@/content/types';
import { Visual } from './visuals';
import { FaqList, FaqSchema } from './faq';
import { ChapterExplorer } from './chapter-explorer';
import { TopicVideo } from './topic-video';
import { topicVideo } from '@/content/topic-videos';
import { AiSim } from './ai-sim';
import type { Chapter } from '@/content/types';


const ORDER = JOB_ORDER;

export function JobView({ c, slug, locale }: { c: SiteContent; slug: JobSlug; locale: string }) {
  const j = c.jobs[slug];
  const next = ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length];
  const nj = c.jobs[next];
  return (
    <>
      {j.heroVisual === 'assistant' ? <AiHero c={c} /> : (
        <section className="wrap job-hero">
          <div>
            <h1 className="h1">{j.heroTitle}</h1>
            <p className="lead">{j.heroLead}</p>
          </div>
          <div className="job-hero-visual">
            <Visual k={j.heroVisual} v={c.visuals} />
          </div>
        </section>
      )}

      <ChapterExplorer titles={j.chapters.map(ch => ch.title)} leads={j.chapters.map(ch => ch.lead)} label={c.common.onThisPage}>
        {j.chapters.map(ch => <Topic key={ch.id} ch={ch} c={c} locale={locale} />)}
      </ChapterExplorer>

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

/** Every topic has the same shape: title, one line, the points, and the screenshot beside them. */
function Topic({ ch, c, locale }: { ch: Chapter; c: SiteContent; locale: string }) {
  const video = topicVideo(locale, ch.id);
  return (
    <div className="topic" id={ch.id}>
      <div className="topic-copy">
        <h2 className="h2">{ch.title}</h2>
        <p className="lead muted">{ch.lead}</p>
        <ul className="topic-points">
          {ch.features.map(f => (
            <li key={f.title}><h3>{f.title}</h3>{f.body.map((p, k) => <p key={k}>{p}</p>)}</li>
          ))}
        </ul>
      </div>
      <div className="topic-visual">
        {video
          ? <TopicVideo src={video} label={ch.title} pause={c.common.pauseVideo} play={c.common.playVideo} />
          : <Visual k={ch.visual} v={c.visuals} />}
      </div>
    </div>
  );
}

/**
 * The AI assistant page's hero: the title on cream, then the simulation itself on the green stage
 * of the home hero (soft circles and the dotted route of a trip behind it).
 */
function AiHero({ c }: { c: SiteContent }) {
  const j = c.jobs['ai-assistant'];
  return (
    <header className="hero on-cream ai-hero">
      <div className="wrap">
        <h1 className="hero-title">{j.heroTitle}</h1>
        <p className="hero-sub">{j.heroLead}</p>
      </div>
      <div className="hero-stage ai-stage">
        <svg className="hero-bg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <circle cx="150" cy="760" r="320" fill="var(--deep)" opacity=".55" />
          <circle cx="1330" cy="110" r="230" fill="var(--cream)" opacity=".07" />
          <path d="M-20 300 C 200 180, 330 420, 620 380 S 1060 120, 1460 220" fill="none" stroke="var(--yellow)" strokeWidth="4" strokeDasharray="0 16" strokeLinecap="round" opacity=".55" />
        </svg>
        <div className="wrap ai-stage-in">
          <p className="ai-note">{c.ai.sim.note}</p>
          <AiSim t={c.ai.sim} locale={c.visuals.ex.numLocale} />
        </div>
      </div>
    </header>
  );
}
