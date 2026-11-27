import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Schibsted_Grotesk } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { JsonLd } from '@/components/site/json-ld';
import { Consent } from '@/components/site/consent';
import { AdSourceCapture } from '@/components/site/ad-source';
import { ScrollTop } from '@/components/site/scroll-top';
import { PRICES } from '@/content/prices';
import { getContent } from '@/content';
import { LANG_TAG, JOB_ORDER, type Locale } from '@/content/types';
import { baseUrl, siteName, ORG_ID, SITE_ID, SOFTWARE_ID, PROFILES } from '@/lib/seo';
import '../globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['wdth', 'opsz'],
  variable: '--font-bricolage',
  display: 'swap'
});

// Titles and text: Schibsted Grotesk. Bricolage only for the logo and price figures.
const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
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
  themeColor: '#F7F8F6'
};

export const dynamicParams = false;

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
    '@id': SOFTWARE_ID,
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
    image: `${baseUrl}/og/${locale}.png`,
    publisher: { '@id': ORG_ID }
  };
  // One organisation for every page and language, so search engines and AI tools tie the
  // site, the software and the public profiles to the same company.
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteName,
    url: baseUrl,
    logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png`, width: 512, height: 512 },
    description: c.footer.tagline,
    email: 'hola@traviosoft.com',
    sameAs: PROFILES
  };
  const site = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE_ID, name: siteName, url: `${baseUrl}/`, inLanguage: routing.locales, publisher: { '@id': ORG_ID } };

  // The four product pages sit under Product; the AI assistant has its own item beside it.
  const jobs = JOB_ORDER.filter(s => s !== 'ai-assistant').map(s => ({
    slug: s,
    name: c.jobs[s].name,
    menuLine: c.jobs[s].menuLine
  }));
  const ai = { slug: 'ai-assistant', name: c.jobs['ai-assistant'].name };

  return (
    <html lang={LANG_TAG[locale as Locale] ?? locale} className={`${bricolage.variable} ${schibsted.variable}`}>
      <body>
        <JsonLd data={org} />
        <JsonLd data={site} />
        <JsonLd data={software} />
        <NextIntlClientProvider messages={messages}>
          <Header locale={c.locale} labels={c.nav} jobs={jobs} ai={ai} />
          <main id="main">{children}</main>
          <Footer c={c} />
          <ScrollTop />
          <Consent labels={c.footer.consent} />
          <AdSourceCapture />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
