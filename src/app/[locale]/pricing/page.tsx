import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { Plans } from '@/components/site/plans';
import { FaqList, FaqSchema } from '@/components/site/faq';
import { ComparePlans } from '@/components/site/compare-plans';

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
        <h1 className="h1" style={{ color: 'var(--green)' }}>{p.title}</h1>
        <p className="lead muted" style={{ marginTop: 22 }}>{p.lead}</p>
      </section>
      <section className="wrap" style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <Plans plans={p.plans} labels={{ yearly: p.yearly, monthly: p.monthly, yearlyNote: p.yearlyNote }} />
        <div className="cmp-wrap">
          <h2 className="sr-only">{p.compareTitle}</h2>
          <ComparePlans sections={p.compare} names={[p.plans[0].name, p.plans[1].name]} labels={{ feature: p.compareFeature, yes: p.yes, no: p.no }} note={p.compareNote} />
          <p style={{ marginTop: 36 }}><Link href="/sell" className="arrow" style={{ color: 'var(--green)' }}><span className="arr-t">{c.jobs.sell.name} · {c.jobs.book.name} · {c.jobs['get-paid'].name}</span><span className="arr" aria-hidden="true">→</span></Link></p>
        </div>
      </section>
      <section className="band on-cream2">
        <div className="narrow">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 28 }}>{c.common.faqTitle}</h2>
          <FaqList items={p.faq} />
          <FaqSchema items={p.faq} />
          <p style={{ marginTop: 28 }}><Link href="/switch" className="arrow" style={{ color: 'var(--green)' }}><span className="arr-t">{c.footer.switching}</span><span className="arr" aria-hidden="true">→</span></Link></p>
        </div>
      </section>
    </>
  );
}
