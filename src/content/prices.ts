/**
 * Every price shown on the site, in one place. Change a number here and the
 * pricing page, home page, FAQ, comparison articles, structured data and
 * llms.txt follow. Amounts are EUR per month, VAT excluded.
 */
export const PRICES = {
  classic: { yearly: 290, monthly: 350 },
  premium: { yearly: 390, monthly: 470 },
  usersIncluded: 3,
  extraUser: { yearly: 60, monthly: 70 },
  /** one-off setup and import fee with monthly billing (free with yearly) */
  setupMonthly: 390
} as const;

const SEP = { en: ',', es: '.', fr: ' ' } as const;

/** 3480 -> "3,480" (en), "3.480" (es), "3 480" (fr). */
export function n(value: number, locale: 'en' | 'es' | 'fr' = 'en'): string {
  return String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, SEP[locale]);
}
