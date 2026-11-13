import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { JsonLd } from '@/components/site/json-ld';
import { Consent } from '@/components/site/consent';
import { PRICES } from '@/content/prices';
import { getContent } from '@/content';
import { baseUrl, siteName } from '@/lib/seo';
import '../globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['wdth', 'opsz'],
  variable: '--font-bricolage',
  display: 'swap'
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined
};

// Phone browser bars take the page colour; zoom stays allowed (no maximum-scale).
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFF4E6'
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();
  const c = getContent(locale);

  // Plain facts, kept identical to the visible text on Home and Pricing.
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteName,
    url: `${baseUrl}/${locale}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Travel agency and DMC management software',
    operatingSystem: 'Web',
    description: c.home.metaDescription,
    inLanguage: routing.locales,
    offers: [
      {
        '@type': 'Offer',
        name: c.pricing.plans[0]?.name,
        price: String(PRICES.classic.yearly),
        priceCurrency: 'EUR',
        description: c.pricing.plans[0]?.users,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(PRICES.classic.yearly),
          priceCurrency: 'EUR',
          unitCode: 'MON',
          billingDuration: 'P1Y',
          valueAddedTaxIncluded: false
        }
      },
      {
        '@type': 'Offer',
        name: c.pricing.plans[1]?.name,
        price: String(PRICES.premium.yearly),
        priceCurrency: 'EUR',
        description: c.pricing.plans[1]?.users,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(PRICES.premium.yearly),
          priceCurrency: 'EUR',
          unitCode: 'MON',
          billingDuration: 'P1Y',
          valueAddedTaxIncluded: false
        }
      }
    ],
    publisher: { '@type': 'Organization', name: siteName, url: baseUrl }
  };
  const org = { '@context': 'https://schema.org', '@type': 'Organization', name: siteName, url: baseUrl, logo: `${baseUrl}/icon.svg` };
  const site = { '@context': 'https://schema.org', '@type': 'WebSite', name: siteName, url: baseUrl, inLanguage: routing.locales };

  const jobs = (['sell', 'book', 'get-paid', 'setup'] as const).map(s => ({
    slug: s,
    name: c.jobs[s].name,
    menuLine: c.jobs[s].menuLine
  }));

  return (
    <html lang={locale} className={`${bricolage.variable} ${dmMono.variable}`}>
      <body>
        <JsonLd data={org} />
        <JsonLd data={site} />
        <JsonLd data={software} />
        <NextIntlClientProvider messages={messages}>
          <Header locale={c.locale} labels={c.nav} jobs={jobs} />
          <main id="main">{children}</main>
          <Footer c={c} />
          <Consent text={c.footer.consent.text} accept={c.footer.consent.accept} refuse={c.footer.consent.refuse} policy={c.footer.consent.policy} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
