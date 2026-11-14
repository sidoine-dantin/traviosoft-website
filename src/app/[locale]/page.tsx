import { ScrapIcon } from '@/components/site/scrap-icon';
import { HeroParallax } from '@/components/site/hero-parallax';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { QuotePhone } from '@/components/site/visuals';
import { KeyFacts } from '@/components/site/key-facts';
import { PRICES } from '@/content/prices';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const h = getContent(locale).home;
  return buildMetadata({ locale, path: '', title: h.metaTitle, description: h.metaDescription });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContent(locale);
  const h = c.home;

  return (
    <>
      <header className="hero on-cream">
        <HeroParallax />
        <div className="wrap">
          <h1 className="hero-title">{h.title}</h1>
          <p className="hero-sub">{h.sub}</p>
          <div className="col">
            {h.tags.map((t, i) => (
              <span key={i} className={`tag t${i + 1}`}>{t.t}<small>{t.s}</small></span>
            ))}
            <QuotePhone v={c.visuals} />
          </div>
        </div>
      </header>

      <section className="on-green band">
        <div className="wrap">
          <h2 className="h2" style={{ maxWidth: '16ch', marginBottom: 'clamp(48px, 7vw, 80px)' }}>{h.tripTitle}</h2>
          <ol className="steps">
            {h.steps.map((s, i) => (
              <li key={i}>
                <Link href={`/${s.job}`} className="step">
                  <span className="dot" aria-hidden="true" />
                  <span className="mono" style={{ opacity: 0.8 }}>{s.time}</span>
                  <b>{s.title}</b>
                  <p>{s.body}</p>
                  <span className="go">{h.stepGo} →</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="h2" style={{ color: 'var(--green)', marginBottom: 40, maxWidth: '18ch' }}>{h.baTitle}</h2>
          <div className="ba">
            <div className="before">
              <p className="lbl muted">{h.beforeTitle}</p>
              <div className="scraps">
                {h.beforeScraps.map(s => <span key={s.t} className="scrap"><ScrapIcon k={s.i} />{s.t}</span>)}
              </div>
            </div>
            <div className="after">
              <p className="lbl" style={{ color: 'var(--yellow)' }}>{h.afterTitle}</p>
              <p style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 650, lineHeight: 1.35, marginTop: 22, maxWidth: '30ch' }}>{h.afterBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap coins">
          <div>
            <h2 className="h2" style={{ color: 'var(--green)' }}>{h.priceTitle}</h2>
            <p className="muted" style={{ fontSize: 18, marginTop: 16, maxWidth: '34ch' }}>{h.priceBody} <s style={{ whiteSpace: "nowrap" }}>{PRICES.setupMonthly} EUR</s> {h.priceImport} <s style={{ whiteSpace: "nowrap" }}>{PRICES.importMonthly} EUR</s> {h.priceFree}</p>
            <p className="free-note">{h.priceFreeNote}</p>
            <p style={{ marginTop: 24 }}><Link href="/pricing" className="arrow" style={{ color: 'var(--green)' }}><span className="arr-t">{h.priceLink}</span><span className="arr" aria-hidden="true">→</span></Link></p>
          </div>
          <div className="coin">
            <span className="n num">{PRICES.classic.yearly}</span><span className="lbl">{h.coin1}</span><span className="lbl users">{h.coinUsers}</span>
          </div>
          <div className="coin">
            <span className="n num">{PRICES.premium.yearly}</span><span className="lbl">{h.coin2}</span><span className="lbl users">{h.coinUsers}</span>
          </div>
          <p className="price-note"><span className="extra-user">{h.extraUserLine}</span><Link href="/pricing">{h.priceNote}</Link></p>
        </div>
        <div className="wrap" style={{ marginTop: 'clamp(56px, 8vw, 96px)', color: 'var(--green)' }}>
          <KeyFacts facts={h.facts} />
        </div>
      </section>
    </>
  );
}
