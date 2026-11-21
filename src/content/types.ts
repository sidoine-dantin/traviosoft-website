/**
 * Content model for the whole marketing site.
 * One SiteContent object per locale (src/content/{es,en,fr}/index.ts).
 * Pages never hard-code copy: they read it from getContent(locale).
 *
 * Copy rules (see PRODUCT.md):
 * - features of the Premium plan are marked `premium: true` (used by the pricing table, not shown on product pages)
 * - no testimonials, no client logos, no invented numbers, no founder name or face
 * - never call Traviosoft a "CRM"
 * - one quiet demo link (header). No repeated demo buttons in page bodies.
 * - country-specific rules (REAV, Veri*Factu) are never headline features
 */

export type Locale = 'es' | 'en' | 'fr' | 'it' | 'pt';

/** BCP 47 tag per locale, for hreflang and <html lang> (Portuguese is the European variant). */
export const LANG_TAG: Record<Locale, string> = { es: 'es', en: 'en', fr: 'fr', it: 'it', pt: 'pt-PT' };

export type JobSlug = 'sell' | 'book' | 'get-paid' | 'setup';
/** A product page, optionally with the topic to land on (`sell#quotes`). */
export type JobLink = JobSlug | `${JobSlug}#${string}`;

/** Product fragments drawn in code (src/components/visuals.tsx). */
/** Generic line icons for the 'before' notes (no third-party logos: their brand rules do not allow it). */
export type ScrapIcon = 'sheet' | 'doc' | 'chat' | 'bank' | 'book' | 'mail' | 'phone' | 'note' | 'pdf' | 'calc';

export type VisualKey =
  | 'margin' | 'commission' | 'confirm' | 'statuses' | 'rooming' | 'schedule' | 'paylink' | 'settings' | 'currencies' | 'country'
  | 'quote'
  | 'requests'
  | 'catalogue'
  | 'proposal'
  | 'followup'
  | 'order'
  | 'suppliers'
  | 'itinerary'
  | 'calendar'
  | 'payments'
  | 'invoices'
  | 'dashboard'
  | 'brands'
  | 'languages'
  | 'team'
  | 'safe'
  | 'connections';

export type Feature = {
  title: string;
  /** one or two short paragraphs, shown when the line is opened */
  body: string[];
  /** part of the Premium plan: shown with a "Premium" tag */
  premium?: boolean;
};

export type Chapter = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  visual: VisualKey;
  features: Feature[];
};

export type Faq = { q: string; a: string[] };

export type JobPage = {
  slug: JobSlug;
  metaTitle: string;
  metaDescription: string;
  /** short name used in menus, e.g. "Sell" */
  name: string;
  /** one line under the name in the Product menu */
  menuLine: string;
  /** "1 of 4" style crumb label */
  step: string;
  heroTitle: string;
  heroLead: string;
  heroVisual: VisualKey;
  chapters: Chapter[];
  faq: Faq[];
};

export type Link = { label: string; href: string };

/** Text used inside the product fragments. Only labels; names and numbers stay as data. */
/** Words of the proposal document and the itinerary phone in the home hero (fields of the app's documents). */
export type ProposalText = {
  agency: string; kind: string; trip: string; meta: [string, string, string];
  days: { t: string; s: string }[];
  total: string; vatIncl: string;
  stops: { day?: string; k: string; t: string; s: string; link?: string }[];
};

export type VisualText = {
  quoteLabel: string; trip: string; tripSub: string; total: string; sent: string;
  requests: string; newReq: string; quoted: string; waiting: string; won: string;
  catalogue: string; season: string; suppliers: string; margin: string;
  proposal: string; included: string; notIncluded: string;
  followup: string; followupLine: string; followupSent: string;
  order: string; booking: string; trip2: string; payment: string; confirmed: string; pending: string; paid: string; partial: string;
  supplierMail: string; filed: string; serviceSheet: string;
  yourTrip: string; dayLabel: string;
  calendar: string;
  payments: string; deposit: string; balance: string; due: string; link: string;
  invoices: string; depositInvoice: string; finalInvoice: string; creditNote: string;
  sales: string; trips: string; moneyIn: string; moneyOut: string; month: string;
  brands: string; brandA: string; brandB: string;
  languages: string;
  team: string; seats: string; owner: string; sales2: string; ops: string;
  safe1: string; safe2: string;
  connections: string;
  days: string[];
  guide: string; halfDay: string; privateCar: string; transfers: string;
  /** Example data that has words in it, so it reads in the page's language. */
  ex: {
    muller: string; event: string; reqTrip: string; reqLisbon: string; reqBarcelona: string; reqMallorca: string;
    seasons: [string, string, string]; room: string; vat: string;
    itinerary: [string, string, string, string];
    mailHotel: string; mailGuide: string;
    langNames: [string, string, string, string, string];
    conWebsite: string; conWebsiteSub: string; conAccounting: string; conAccountingSub: string; conAi: string; on: string;
    numLocale: string; date1: string; date2: string; date3: string;
    net: string; commission: string; sellPrice: string;
    commTitle: string; trip2Name: string;
    rooming: string; double: string; twin: string; single: string;
    supplierDue: string; toPay: string;
    mailSubject: string; mailBody: string; payDeposit: string;
    settings: string; langs: string; currencies: string;
    smith: string; atlas: string; books: string;
    countryTitle: string; vatScheme: string; einvoice: string; einvoiceNote: string;
  };
};

export type ArticleBlock =
  | { type: 'h2'; text: string; id?: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; head: string[]; rows: string[][]; usRow?: number }
  | { type: 'callout'; text: string }
  | { type: 'faq'; items: Faq[] };

export type ArticleKind = 'compare' | 'guide' | 'best' | 'spain' | 'invoicing';

export type Article = {
  /** shared key linking translations of the same article across locales */
  key: string;
  kind: ArticleKind;
  /** URL slug in this locale */
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  /** ISO date, shown as "last updated" */
  updated: string;
  /** one line for resource cards */
  card: string;
  blocks: ArticleBlock[];
};

export type ExampleTripId = 'andalucia' | 'group' | 'safari';

export type ExampleTrip = {
  id: ExampleTripId;
  /** short label in the trip picker, e.g. "Couple, 8 days" */
  label: string;
  /** one line under the label: who this trip is like */
  kind: string;
  name: string; dates: string; travellers: string; agency: string;
  days: { day: string; title: string; body: string; items: string[] }[];
  quoteLines: { name: string; detail: string; price: string }[];
  included: string[]; notIncluded: string[];
  total: string; perPerson: string; deposit: string; validUntil: string;
  /** optional rooming list shown under the quote (groups) */
  rooming?: { title: string; head: string[]; rows: string[][] };
};

export type GlossaryTerm = { id: string; term: string; def: string };

export type Plan = {
  id: 'classic' | 'premium';
  name: string;
  users: string;
  yearly: string;
  monthly: string;
  /** extra-user price, shown for the billing period picked on the switch */
  priceNote: { yearly: string; monthly: string };
  hot?: boolean;
};

/** A comparison cell: true = included, false = not included, a string = included, with this detail. */
export type CompareCell = boolean | string | { text: string; was?: string; option?: boolean };
export type CompareSection = { title: string; rows: { f: string; classic: CompareCell; premium: CompareCell }[] };

export type SiteContent = {
  locale: Locale;
  nav: {
    product: string; pricing: string; demo: string;
    menuLabel: string; close: string; skip: string; resources: string;
  };
  footer: {
    tagline: string;
    product: string; company: string; resources: string; legal: string;
    switching: string; faq: string; about: string; glossary: string; guides: string; compare: string;
    privacy: string; terms: string; notice: string;
    hosted: string; rights: string;
    /** extra footer links that only exist in this locale (e.g. Spain page) */
    posts: { slug: string; label: string }[];
    localLinks: Link[];
    /** cookie banner, shown only when an ad measurement tag is configured */
    consent: { text: string; accept: string; refuse: string; more: string; settings: string; policy: string };
  };
  common: {
    premium: string; next: string; onThisPage: string; pauseVideo: string; playVideo: string; updated: string; readMore: string;
    faqTitle: string; backToResources: string; allResources: string; perMonth: string;
    notFound: { title: string; body: string };
  };
  visuals: VisualText;
  home: {
    metaTitle: string; metaDescription: string;
    title: string; sub: string;
    /** The proposal and the day-by-day itinerary the agency sends, shown in the hero. */
    proposal: ProposalText;
    tripTitle: string;
    /** Four moments of one sample trip, each with the app screen where it happens. */
    /** rec: one line from the sample trip shown in the hero; {margin} {deposit} {total} are filled in the page's number format. */
  moments: { rec: string; title: string; body: string; go: string; job: JobLink }[];
    sitTitle: string; setupLine: string;
    /** Common ways of working, in the visitor's own words, each pointing to the page that covers it. */
    situations: { t: string; s: string; job: JobLink }[];
    baTitle: string; beforeTitle: string; beforeScraps: { i: ScrapIcon; t: string }[]; afterTitle: string; afterBody: string;
    priceTitle: string; priceBody: string; priceImport: string; priceFree: string; priceFreeNote: string; extraUserLine: string; coin1: string; coin2: string; coinUsers: string; priceNote: string; priceLink: string;
    facts: { k: string; v: string }[];
  };
  jobs: Record<JobSlug, JobPage>;
  pricing: {
    metaTitle: string; metaDescription: string;
    title: string; lead: string;
    yearly: string; monthly: string; yearlyNote: string;
    plans: Plan[];
    compareTitle: string; compareFeature: string; yes: string; no: string; compare: CompareSection[]; compareNote: string[];
    /** the link under the comparison to the product pages */
    productLink: string;
    faq: Faq[];
  };
  demo: {
    metaTitle: string; metaDescription: string;
    title: string; lead: string;
    agendaTitle: string;
    agenda: { mins: string; title: string; body: string }[];
    afterTitle: string; after: string[];
    bookTitle: string; bookBody: string; emailLabel: string; email: string;
    /** shown once the Cal.com link (CAL_LINK) is set */
    bookCta: string; bookCalendarBody: string; emailAltLabel: string;
    faq: Faq[];
  };
  switching: {
    metaTitle: string; metaDescription: string;
    title: string; lead: string;
    timelineTitle: string;
    timeline: { title: string; body: string }[];
    importTitle: string; importParts: { title: string; body: string }[];
    seasonTitle: string; seasonBody: string[];
    faq: Faq[];
  };
  faqPage: {
    metaTitle: string; metaDescription: string; title: string; lead: string;
    groups: { title: string; items: Faq[] }[];
  };
  about: {
    metaTitle: string; metaDescription: string; title: string; lead: string;
    blocks: { title: string; body: string[] }[];
  };
  resources: {
    metaTitle: string; metaDescription: string; title: string; lead: string;
    groups: { kind: ArticleKind | 'glossary'; title: string; body: string }[];
    glossaryTitle: string; glossaryMeta: string; glossaryLead: string;
  };
  articles: Article[];
  glossary: GlossaryTerm[];
};
