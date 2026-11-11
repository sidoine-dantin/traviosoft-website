import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { Plans } from '@/components/site/plans';
import { FaqList, FaqSchema } from '@/components/site/faq';
import { KeyFacts } from '@/components/site/key-facts';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const p = getContent(locale).pricing;
  return buildMetadata({ locale, path: '/pricing', title: p.metaTitle, description: p.metaDescription });
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const p = c.pricing;
  return (
    <>
      <section className="wrap" style={{ paddingBlock: 'clamp(56px, 8vw, 100px) 40px' }}>
        <h1 className="h1" style={{ color: 'var(--green)', maxWidth: '14ch' }}>{p.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{p.lead}</p>
      </section>
      <section className="wrap" style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <Plans plans={p.plans} labels={{ yearly: p.yearly, monthly: p.monthly, yearlyNote: p.yearlyNote }} />
        <div style={{ marginTop: 48, color: 'var(--green)' }}>
          <KeyFacts facts={c.home.facts} />
        </div>
      </section>
      <section className="on-cream2 band">
        <div className="wrap grid-2" style={{ gap: 'clamp(32px, 6vw, 96px)', alignItems: 'start' }}>
          <div>
            <h2 className="h2" style={{ color: 'var(--green)' }}>{p.includedTitle}</h2>
            <p style={{ marginTop: 24 }}><Link href="/sell" className="arrow" style={{ color: 'var(--green)' }}>{c.jobs.sell.name} · {c.jobs.book.name} · {c.jobs['get-paid'].name} →</Link></p>
          </div>
          <ul className="feat-list" style={{ listStyle: 'none', padding: 0, marginTop: 0 }}>
            {p.included.map(i => <li key={i} className="feat-static">{i}</li>)}
          </ul>
        </div>
      </section>
      <section className="band">
        <div className="narrow">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 28 }}>{c.common.faqTitle}</h2>
          <FaqList items={p.faq} />
          <FaqSchema items={p.faq} />
          <p style={{ marginTop: 28 }}><Link href="/switch" className="arrow" style={{ color: 'var(--green)' }}>{c.footer.switching} →</Link></p>
        </div>
      </section>
    </>
  );
}
