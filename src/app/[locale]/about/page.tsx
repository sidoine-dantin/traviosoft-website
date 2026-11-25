import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { JOB_ORDER, type JobSlug } from '@/content/types';

type Props = { params: Promise<{ locale: string }> };

const JOBS: JobSlug[] = JOB_ORDER;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const a = getContent(locale).about;
  return buildMetadata({ locale, path: '/about', title: a.metaTitle, description: a.metaDescription });
}

/** What Traviosoft is, how it is built and how we work, then the way into the product pages. */
export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const a = c.about;
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 0' }}>
        <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '15ch' }}>{a.title}</h1>
        <p className="lead muted" style={{ marginTop: 22, maxWidth: '46ch' }}>{a.lead}</p>
      </section>
      <section className="band">
        <div className="wrap about-blocks">
          {a.blocks.map(b => (
            <div key={b.title}>
              <h2 className="h3" style={{ color: 'var(--green)', marginBottom: 10 }}>{b.title}</h2>
              {b.body.map(p => <p key={p} className="muted" style={{ maxWidth: '48ch' }}>{p}</p>)}
            </div>
          ))}
        </div>
      </section>
      <section className="band on-cream2">
        <div className="wrap">
          <h2 className="h2" style={{ color: 'var(--green)' }}>{c.nav.product}</h2>
          <ul className="sits">
            {JOBS.map(j => (
              <li key={j}>
                <Link href={`/${j}`} className="sit">
                  <b>{c.jobs[j].name}</b>
                  <span>{c.jobs[j].menuLine}</span>
                  <span className="arr" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
