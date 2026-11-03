import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { FaqList, FaqSchema } from '@/components/site/faq';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const f = getContent(locale).faqPage;
  return buildMetadata({ locale, path: '/faq', title: f.metaTitle, description: f.metaDescription });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const f = getContent(locale).faqPage;
  return (
    <>
      <section className="narrow" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 24px' }}>
        <h1 className="h1" style={{ color: 'var(--green)' }}>{f.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{f.lead}</p>
      </section>
      <section className="narrow" style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        {f.groups.map(g => (
          <div key={g.title} style={{ marginTop: 48 }}>
            <h2 className="lbl" style={{ color: 'var(--orange)', marginBottom: 8 }}>{g.title}</h2>
            <FaqList items={g.items} />
          </div>
        ))}
        <FaqSchema items={f.groups.flatMap(g => g.items)} />
      </section>
    </>
  );
}
