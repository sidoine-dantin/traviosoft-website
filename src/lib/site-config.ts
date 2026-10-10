/**
 * Business facts the owner still has to confirm, kept in one place so they can
 * be changed without touching any page. Anything left empty ('') renders as a
 * clearly labelled placeholder on the site, never as invented content.
 */

/** Price is NOT confirmed yet: change the numbers here, every page follows. */
export const PRICING = {
  currency: 'EUR',
  /** Per agency, per month, billed monthly. */
  monthly: 99,
  /** Per agency, per year, billed yearly. */
  yearly: 990,
  /** How many months the yearly plan saves compared to 12 x monthly. */
  yearlyFreeMonths: 2,
  /** Users included in the price. */
  includedUsers: 5,
  /** Length of the free trial, in days. */
  trialDays: 14
} as const;

/** Founder block (home + about). Empty strings render as placeholders. */
export const FOUNDER = {
  name: '',
  /** e.g. "Founder of Traviosoft". Empty: a translated default is used. */
  role: '',
  /** File in public/shots/ (see public/shots/README.md). */
  photo: 'founder.jpg'
} as const;

/**
 * Client testimonial. Hidden until the owner has a real, approved quote:
 * set `show` to true AND fill the fields. Never put an invented quote here.
 */
export const TESTIMONIAL = {
  show: false,
  quote: '',
  author: '',
  role: '',
  agency: ''
} as const;

/** Company details shown in the footer "Company" block. */
export const COMPANY = {
  legalName: '',
  address: '',
  /** e.g. SIRET / NIF / CIF. */
  registration: ''
} as const;

/** Files expected in public/shots/ (see public/shots/README.md). */
export const SHOTS = {
  dashboard: 'dashboard.png',
  quoteBuilder: 'quote-builder.png',
  quotePdf: 'quote-pdf.png',
  payments: 'payments.png',
  suppliers: 'suppliers.png',
  itineraryMobile: 'itinerary-mobile.png',
  invoiceReav: 'invoice-reav.png',
  tourVideo: 'tour.mp4',
  tourPoster: 'tour-poster.jpg'
} as const;

/** "99 €" / "€99" per locale, no decimals for whole amounts. */
export function formatPrice(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: PRICING.currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2
  }).format(amount);
}

/** Values for the {price}/{yearly}/{users}/{days}/{months} placeholders in messages. */
export function pricingValues(locale: string) {
  return {
    price: formatPrice(PRICING.monthly, locale),
    yearly: formatPrice(PRICING.yearly, locale),
    users: PRICING.includedUsers,
    days: PRICING.trialDays,
    months: PRICING.yearlyFreeMonths
  };
}
