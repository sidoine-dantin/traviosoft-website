import { Link } from '@/i18n/navigation';
import { JOB_ORDER, type JobSlug, type SiteContent } from '@/content/types';
import { Visual } from './visuals';
import { FaqList, FaqSchema } from './faq';
import { ChapterExplorer } from './chapter-explorer';
import { TopicVideo } from './topic-video';
import { topicVideo } from '@/content/topic-videos';
import { LeadVideo } from './lead-video';
import type { Chapter } from '@/content/types';


const ORDER = JOB_ORDER;

export function JobView({ c, slug, locale }: { c: SiteContent; slug: JobSlug; locale: string }) {
  const j = c.jobs[slug];
  const next = ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length];
  const nj = c.jobs[next];
  return (
    <>
      {j.heroVisual === 'assistant' ? <AiHero c={c} locale={locale} /> : (
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
          {j.heroVisual !== 'assistant' && (
            <p className="next-demo">{c.common.demoLine}: <Link href="/demo">{c.nav.demo}</Link></p>
          )}
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
        {ch.ai && (
          <p className="topic-ai">
            {ch.ai.say ? (
              <>
                <span className="topic-ai-k">{c.common.aiAsk}</span>
                <span className="topic-ai-say">{ch.ai.say}</span>
                <Link href="/ai-assistant">{c.common.aiSee} <span aria-hidden="true">→</span></Link>
              </>
            ) : (
              <Link href="/ai-assistant#rights">{ch.ai.link} <span aria-hidden="true">→</span></Link>
            )}
          </p>
        )}
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
 * The AI assistant page's hero: one green stage from the top, the title and a short line over the
 * lead video (a filmed conversation on the same green). Wide cut on computers, vertical on phones.
 */
function AiHero({ c, locale }: { c: SiteContent; locale: string }) {
  const j = c.jobs['ai-assistant'];
  const v = { src: `/videos/${locale}/ai-lead`, label: j.heroTitle, pause: c.common.pauseVideo, play: c.common.playVideo };
  return (
    <header className="hero ai-hero">
      <div className="wrap">
        <h1 className="hero-title">{j.heroTitle}</h1>
        <p className="hero-sub">{j.heroLead}</p>
      </div>
      <LeadVideo {...v} shape="wide" />
      <LeadVideo {...v} src={`${v.src}-m`} shape="phone" />
    </header>
  );
}
