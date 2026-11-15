import { ScrapIcon } from '@/components/site/scrap-icon';
import { HomeMotion } from '@/components/site/home-motion';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { HeroTrip } from '@/components/site/hero-trip';
import { RequestsScreen, QuoteScreen, BookingScreen, PaymentScreen } from '@/components/site/app-screens';
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
  const a = h.app;
  const loc = c.visuals.ex.numLocale;
  const total = new Intl.NumberFormat(loc, { minimumFractionDigits: 2 }).format(2662) + ' EUR';
  const screens = [
    <RequestsScreen key="r" t={a} label={`${a.nav.requests}: ${a.client}`} />,
    <QuoteScreen key="q" t={a} loc={loc} label={`${a.nav.quotes}: ${a.trip}`} />,
    <BookingScreen key="b" t={a} label={`${a.nav.orders}: ${a.trip}`} />,
    <PaymentScreen key="p" t={a} loc={loc} label={`${a.quote.tabs[1]}: ${a.trip}`} />
  ];

  return (
    <>
      <header className="hero on-cream">
        <HomeMotion />
        <div className="wrap">
          <h1 className="hero-title">{h.title}</h1>
          <p className="hero-sub">{h.sub}</p>
        </div>
        <div className="hero-stage">
          <HeroTrip p={h.proposal} total={total} />
        </div>
      </header>

      <section className="band moments-band">
        <div className="wrap">
          <h2 className="h2" data-reveal style={{ color: 'var(--green)', maxWidth: '18ch' }}>{h.tripTitle}</h2>
          <ol className="moments">
            {h.moments.map((m, i) => (
              <li key={i} className="moment">
                <div className="moment-t" data-reveal>
                  <span className="moment-time">{m.time}</span>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                  <Link href={`/${m.job}`} className="arrow" style={{ color: 'var(--green)' }}><span className="arr-t">{m.go}</span><span className="arr" aria-hidden="true">→</span></Link>
                </div>
                <div className="moment-shot">{screens[i]}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band sits-band">
        <div className="wrap">
          <h2 className="h2" data-reveal style={{ color: 'var(--green)', maxWidth: '20ch' }}>{h.sitTitle}</h2>
          <p className="muted sit-lead">{h.sitLead}</p>
          <ul className="sits">
            {h.situations.map(x => (
              <li key={x.t}>
                <Link href={`/${x.job}`} className="sit">
                  <b>{x.t}</b>
                  <span>{x.s}</span>
                  <span className="arr" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
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
      </section>
      <section className="band">
        <div className="wrap">
          <h2 className="h2" data-reveal style={{ color: 'var(--green)', marginBottom: 40, maxWidth: '18ch' }}>{h.baTitle}</h2>
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

    </>
  );
}
