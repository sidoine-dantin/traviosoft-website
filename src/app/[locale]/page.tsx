import { ScrapIcon } from '@/components/site/scrap-icon';
import { Parallax } from '@/components/site/parallax';
import { RouteTraveller } from '@/components/site/route-traveller';
import { HomeMotion } from '@/components/site/home-motion';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { HeroTrip } from '@/components/site/hero-trip';
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
  const loc = c.visuals.ex.numLocale;
  // The sample trip of the hero: cost 2210, margin 450, total 2660, 30% deposit 798 (whole euros, they add up).
  const money = (v: number) => new Intl.NumberFormat(loc, { maximumFractionDigits: 0 }).format(v);

  return (
    <>
      <header className="hero on-cream">
        <HomeMotion />
        <div className="wrap">
          <h1 className="hero-title">{h.title}</h1>
          <p className="hero-sub">{h.sub}</p>
        </div>
        <div className="hero-stage">
          {/* Background: two soft circles and the dotted route of a trip, with two stops. */}
          <svg className="hero-bg" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
            {/* data-depth: how much slower than the page each layer moves while scrolling (Parallax). */}
            <g data-depth=".35"><circle cx="160" cy="560" r="300" fill="var(--deep)" opacity=".55" /></g>
            <g data-depth=".2"><circle cx="1320" cy="90" r="220" fill="var(--cream)" opacity=".07" /></g>
            <g data-depth=".1">
              <path data-route d="M-20 520 C 180 420, 260 160, 520 120 S 980 260, 1140 120 S 1380 60, 1470 140" fill="none" stroke="var(--yellow)" strokeWidth="4" strokeDasharray="0 16" strokeLinecap="round" opacity=".7" />
              <circle cx="520" cy="120" r="9" fill="var(--yellow)" />
              {/* This stop travels along the line with the scroll (RouteTraveller). */}
              <circle data-route-dot cx="1140" cy="120" r="9" fill="var(--yellow)" />
            </g>
          </svg>
          <Parallax anchor="top" />
          <RouteTraveller anchor="top" />
          <HeroTrip p={h.proposal} amount={2660} locale={loc} />
        </div>
      </header>

      <section className="band home-band moments-band">
        <div className="wrap">
          <h2 className="h2" data-reveal style={{ color: 'var(--green)', maxWidth: '18ch' }}>{h.tripTitle}</h2>
          <ol className="moments">
            {h.moments.map((m, i) => (
              <li key={i} className="moment" data-reveal>
                <span className="moment-dot" aria-hidden="true" />
                <h3>{m.title}</h3>
                <span className="moment-rec">{m.rec.replace('{margin}', money(450)).replace('{deposit}', money(798)).replace('{total}', money(2660))}</span>
                <p>{m.body}</p>
                <Link href={`/${m.job}`} className="arrow" style={{ color: 'var(--green)' }}><span className="arr-t">{m.go}</span><span className="arr" aria-hidden="true">→</span></Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band home-band sits-band">
        <div className="wrap">
          <h2 className="h2" data-reveal style={{ color: 'var(--green)', maxWidth: '20ch' }}>{h.sitTitle}</h2>
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

      <section className="band home-band">
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
          <p className="setup-line" data-reveal>{h.setupLine} <Link href="/switch" className="arrow" style={{ color: 'var(--green)' }}><span className="arr-t">{c.footer.switching}</span><span className="arr" aria-hidden="true">→</span></Link></p>
        </div>
      </section>
      <section className="band home-band">
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

    </>
  );
}
