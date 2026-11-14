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

export type Locale = 'es' | 'en' | 'fr';

export type JobSlug = 'sell' | 'book' | 'get-paid' | 'setup';

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
    countryTitle: string; vatScheme: string; qr: string;
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

export type ArticleKind = 'compare' | 'guide' | 'best' | 'spain';

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
    localLinks: Link[];
    /** cookie banner, shown only when an ad measurement tag is configured */
    consent: { text: string; accept: string; refuse: string; more: string; settings: string; policy: string };
  };
  common: {
    premium: string; next: string; onThisPage: string; updated: string; readMore: string;
    faqTitle: string; backToResources: string; allResources: string; perMonth: string;
    notFound: { title: string; body: string; home: string };
  };
  visuals: VisualText;
  home: {
    metaTitle: string; metaDescription: string;
    title: string; sub: string;
    tags: { t: string; s: string }[];
    tripTitle: string;
    steps: { time: string; title: string; body: string; job: JobSlug }[];
    stepGo: string;
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
    faq: Faq[];
  };
  demo: {
    metaTitle: string; metaDescription: string;
    title: string; lead: string;
    agendaTitle: string;
    agenda: { mins: string; title: string; body: string }[];
    bringTitle: string; bring: string[];
    afterTitle: string; after: string[];
    bookTitle: string; bookBody: string; emailLabel: string; email: string;
    faq: Faq[];
  };
  switching: {
    metaTitle: string; metaDescription: string;
    title: string; lead: string;
    timelineTitle: string;
    timeline: { when: string; title: string; body: string }[];
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
    facts: { k: string; v: string }[];
  };
  resources: {
    metaTitle: string; metaDescription: string; title: string; lead: string;
    groups: { kind: ArticleKind | 'glossary'; title: string; body: string }[];
    glossaryTitle: string; glossaryMeta: string; glossaryLead: string;
  };
  articles: Article[];
  glossary: GlossaryTerm[];
};
