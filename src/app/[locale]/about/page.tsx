import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { KeyFacts } from '@/components/site/key-facts';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const a = getContent(locale).about;
  return buildMetadata({ locale, path: '/about', title: a.metaTitle, description: a.metaDescription });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getContent(locale).about;
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 48px' }}>
        <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '15ch' }}>{a.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{a.lead}</p>
      </section>
      {a.blocks.map((b, i) => (
        <section key={b.title} className={`${i % 2 === 0 ? 'on-cream2' : 'on-cream'} band-sm`}>
          <div className="wrap grid-2" style={{ gap: 'clamp(24px, 6vw, 96px)', alignItems: 'start' }}>
            <h2 className="h2" style={{ color: 'var(--green)' }}>{b.title}</h2>
            <div className="prose">{b.body.map(p => <p key={p}>{p}</p>)}</div>
          </div>
        </section>
      ))}
      <section className="on-green band-sm">
        <div className="wrap"><KeyFacts facts={a.facts} /></div>
      </section>
    </>
  );
}
