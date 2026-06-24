import type { Metadata } from 'next';
import { Geist, DM_Serif_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { baseUrl, siteName } from '@/lib/seo';
import '../globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap'
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) notFound();

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'home' });
  const description = t('meta_description');

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    description
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: baseUrl,
    inLanguage: routing.locales
  };

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteName,
    url: baseUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description,
    inLanguage: routing.locales,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '0',
      description: 'Book a demo'
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: baseUrl
    }
  };

  return (
    <html lang={locale} className={`${geistSans.variable} ${dmSerifDisplay.variable}`}>
      <body style={{ fontFamily: 'var(--font-body, system-ui, sans-serif)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
