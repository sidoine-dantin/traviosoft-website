import type { Article, Faq } from '../types';

const UPDATED = '2026-11-14';

type Country = {
  key: string; slug: string; metaTitle: string; metaDescription: string; title: string; lead: string; card: string;
  scheme: string[]; invoice: string[]; einvoice: string[]; change: string[]; tool: string; faq: Faq[]; sources: string;
};

function guide(c: Country): Article {
  return {
    key: c.key, kind: 'invoicing', slug: c.slug, metaTitle: c.metaTitle, metaDescription: c.metaDescription,
    title: c.title, lead: c.lead, updated: UPDATED, card: c.card,
    blocks: [
      { type: 'callout', text: 'General information, up to date on 14 November 2026. It is not tax advice: dates change, so check your case with your accountant.' },
      { type: 'h2', text: 'The VAT scheme for travel agencies', id: 'scheme' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      { type: 'h2', text: 'What the invoice shows', id: 'invoice' },
      { type: 'list', items: c.invoice },
      { type: 'h2', text: 'E-invoicing: the dates', id: 'e-invoicing' },
      { type: 'list', items: c.einvoice },
      { type: 'h2', text: 'What this means for an agency', id: 'agency' },
      { type: 'list', items: c.change },
      { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
      { type: 'p', text: c.tool },
      { type: 'h2', text: 'Questions', id: 'faq' },
      { type: 'faq', items: c.faq },
      { type: 'p', text: c.sources }
    ]
  };
}

const OUTSIDE_SPAIN = 'Deposit and final invoices and credit notes are made from the trip, with the amounts of the accepted quote and the wording of the travel agency scheme when you switch it on. Outside Spain, the invoices go out through the invoicing software you already use, so the e-invoicing rules of your country are handled there.';

const countries: Country[] = [
  {
    key: 'invoicing-spain',
    slug: 'travel-agency-invoicing-spain',
    metaTitle: 'Invoicing for travel agencies in Spain: REAV, Veri*Factu and e-invoicing',
    metaDescription: 'How a travel agency or DMC in Spain invoices: the REAV margin scheme, what the invoice shows, the Veri*Factu dates and the B2B e-invoicing rule.',
    title: 'Invoicing for travel agencies in Spain',
    lead: 'In Spain, an agency that sells trips in its own name usually pays VAT on its margin under the REAV. Invoices must come from software that meets the anti-fraud rules (Veri*Factu), and e-invoicing between businesses becomes mandatory in stages.',
    card: 'REAV, Veri*Factu and B2B e-invoicing, with the dates in force.',
    scheme: [
      'The REAV (régimen especial de las agencias de viajes, articles 141 to 147 of the VAT law) applies when the agency sells in its own name and uses services bought from other businesses: hotels, transport, guides. VAT is paid on the margin, the price charged minus what was paid to suppliers, instead of on the full price.',
      'An agency that only acts as an intermediary and earns a commission in the supplier’s name is taxed on that commission under the general scheme.'
    ],
    invoice: [
      'Under the REAV, the invoice to the client does not show VAT as a separate line.',
      'It carries the mention “Régimen especial de las agencias de viajes”.',
      'Each company keeps its own invoice series, and corrections are made with a corrective invoice (factura rectificativa).'
    ],
    einvoice: [
      'Veri*Factu: Royal Decree 1007/2023 requires invoicing software that keeps every invoice record unaltered. Royal Decree-law 15/2025 sets the start on 1 January 2027 for companies paying corporate tax and 1 July 2027 for the self-employed and others.',
      'In October 2026 the Ministry of Finance announced a new postponement to 2028. Until it is published in the BOE, the 2027 dates are the ones in force.',
      'B2B e-invoicing: Royal Decree 238/2026 makes structured e-invoices mandatory between businesses. It applies 12 months after its ministerial order for companies with more than 8 million EUR of turnover, and 24 months after it for the rest.',
      'Businesses that already report through the SII, and the Basque Country and Navarre, have their own systems.'
    ],
    change: [
      'Invoices made in an editable Word or Excel template are hard to fit with these rules. Ask your accountant.',
      'Each invoice carries a QR code that lets the client check it on the tax agency’s site.',
      'Invoices to other businesses, such as agencies that resell your trips, will travel as structured e-invoices.'
    ],
    tool: 'In Traviosoft, invoicing for Spain is built in: invoices come from the trip with the REAV wording, each company keeps its own series, and Veri*Factu is switched on in the Spain country settings.',
    faq: [
      { q: 'Does the REAV apply to trips sold to businesses?', a: ['There are options for business clients and for services performed outside the EU. Ask your accountant which applies to you.'] },
      { q: 'Does Veri*Factu replace the SII?', a: ['No. Businesses in the SII keep using it.'] }
    ],
    sources: 'Official sources: [Agencia Tributaria](https://sede.agenciatributaria.gob.es) and the [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'travel-agency-invoicing-france',
    metaTitle: 'Invoicing for travel agencies in France: margin scheme and e-invoicing',
    metaDescription: 'How a travel agency in France invoices: the travel agency margin scheme, the mention on the invoice, and the e-invoicing and e-reporting dates from September 2026.',
    title: 'Invoicing for travel agencies in France',
    lead: 'French travel agencies that sell in their own name pay VAT on their margin. Since 1 September 2026, every business must be able to receive e-invoices through an approved platform, and small and medium businesses must issue them from 1 September 2027.',
    card: 'The margin scheme, the invoice mention, e-invoicing and e-reporting dates.',
    scheme: [
      'The travel agency margin scheme (article 266, 1-e of the French tax code) applies when the agency sells trips in its own name using services bought from others. VAT is due on the margin. The part of a trip performed outside the EU is not taxed in France.'
    ],
    invoice: [
      'The invoice carries the mention “Régime particulier – Agences de voyages”.',
      'VAT is not shown as a separate line on margin-scheme invoices.',
      'With the reform, invoices also show the client’s SIREN number and the nature of the operation.'
    ],
    einvoice: [
      'Since 1 September 2026, every business established in France and registered for VAT must be able to receive e-invoices.',
      'Large and mid-sized companies issue e-invoices since 1 September 2026. Small and micro businesses issue them from 1 September 2027.',
      'Invoices travel through an approved platform (plateforme agréée), registered by the tax administration.',
      'Sales to private clients and to businesses abroad are not e-invoiced: their data is sent to the tax administration as e-reporting, on the same calendar.'
    ],
    change: [
      'Most of a travel agency’s sales are to private clients, so e-reporting matters as much as e-invoicing.',
      'For margin-scheme sales, e-reporting sends the taxable margin and the VAT on it.',
      'Choose an approved platform early and check that it handles the margin scheme.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Do I need an approved platform if I only sell to private clients?', a: ['Yes, to receive your suppliers’ invoices and to send your e-reporting.'] },
      { q: 'Does the margin scheme apply to trips sold to businesses?', a: ['It can. Ask your accountant how it applies to your business clients.'] }
    ],
    sources: 'Official source: [impots.gouv.fr, e-invoicing and approved platforms](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees).'
  },
  {
    key: 'invoicing-italy',
    slug: 'travel-agency-invoicing-italy',
    metaTitle: 'Invoicing for travel agencies in Italy: article 74-ter and SdI e-invoices',
    metaDescription: 'How a travel agency in Italy invoices: the article 74-ter margin scheme, what the invoice shows, and e-invoicing through the SdI.',
    title: 'Invoicing for travel agencies in Italy',
    lead: 'Italian travel agencies that organise trips in their own name use the special scheme of article 74-ter, with VAT on the margin. Every invoice between Italian businesses and to Italian consumers goes through the SdI, the tax agency’s exchange system.',
    card: 'Article 74-ter, the invoice and e-invoicing through the SdI.',
    scheme: [
      'The special scheme for travel agencies (article 74-ter of Presidential Decree 633/1972) applies to trips and packages sold in the agency’s own name with services bought from third parties. VAT is calculated on the margin, per period.'
    ],
    invoice: [
      'Invoices under article 74-ter do not show VAT separately.',
      'They refer to the special scheme for travel agencies.',
      'The e-invoice uses the nature code the SdI provides for this scheme. Your accountant will confirm which one.'
    ],
    einvoice: [
      'Since 1 January 2019, invoices between businesses and to consumers in Italy are issued as structured XML files through the SdI (Sistema di Interscambio).',
      'Since 1 January 2024, this also covers businesses on the flat-rate scheme (forfettari).',
      'Invoices to clients abroad are reported to the tax agency.'
    ],
    change: [
      'A PDF alone is not a valid invoice in Italy: the XML through the SdI is.',
      'Most agencies use an intermediary or their accountant’s software to send to the SdI.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Can I send the client a PDF as well?', a: ['Yes, as a courtesy copy. The invoice that counts is the one sent through the SdI.'] }
    ],
    sources: 'Official source: [Agenzia delle Entrate](https://www.agenziaentrate.gov.it).'
  },
  {
    key: 'invoicing-portugal',
    slug: 'travel-agency-invoicing-portugal',
    metaTitle: 'Invoicing for travel agencies in Portugal: margin scheme, ATCUD and certified software',
    metaDescription: 'How a travel agency in Portugal invoices: the travel agency margin scheme, certified software, ATCUD and QR code, SAF-T and e-invoicing dates.',
    title: 'Invoicing for travel agencies in Portugal',
    lead: 'Portuguese travel agencies pay VAT on their margin under a special scheme. Invoices must come from software certified by the tax authority, with an ATCUD code and a QR code, and invoice data is sent every month.',
    card: 'The margin scheme, certified software, ATCUD, QR code and SAF-T.',
    scheme: [
      'The special scheme for travel agencies (Decree-Law 221/85) taxes the agency’s margin when it sells trips in its own name using services bought from others.'
    ],
    invoice: [
      'The invoice does not show VAT separately and carries the mention of the travel agency margin scheme.',
      'Every invoice has an ATCUD code and a QR code, mandatory since 1 January 2023.'
    ],
    einvoice: [
      'Invoices must be issued by software certified by the tax authority (AT).',
      'Invoice data is sent to the AT every month in the SAF-T (PT) format.',
      'Invoices to public bodies are sent as structured e-invoices.',
      'A qualified electronic signature on PDF invoices is planned for January 2027.'
    ],
    change: [
      'Invoices made in a word processor are not valid: they must come from certified software.',
      'Agencies usually keep their certified invoicing software and connect their other tools to it.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Is the QR code the same as an e-invoice?', a: ['No. The QR code is printed on the invoice. An e-invoice is a structured file sent between systems.'] }
    ],
    sources: 'Official source: [Portal das Finanças](https://www.portaldasfinancas.gov.pt).'
  },
  {
    key: 'invoicing-germany',
    slug: 'travel-agency-invoicing-germany',
    metaTitle: 'Invoicing for travel agencies in Germany: §25 UStG and e-invoicing from 2025',
    metaDescription: 'How a travel agency in Germany invoices: the §25 UStG margin scheme, the invoice wording, and the e-invoicing dates for receiving and issuing.',
    title: 'Invoicing for travel agencies in Germany',
    lead: 'German tour operators pay VAT on their margin under §25 UStG. Every business must be able to receive e-invoices since 1 January 2025, and must issue them for domestic B2B sales from 2027 or 2028, depending on turnover.',
    card: '§25 UStG, the invoice wording and the e-invoicing dates.',
    scheme: [
      'The margin scheme for travel services (§25 of the German VAT law) applies when the business sells travel in its own name using services bought from others. VAT is due on the margin.'
    ],
    invoice: [
      'An invoice under §25 does not show VAT separately.',
      'It carries the wording “Sonderregelung für Reisebüros”.'
    ],
    einvoice: [
      'Since 1 January 2025, every business must be able to receive e-invoices for domestic B2B sales.',
      'From 1 January 2027, businesses with more than 800,000 EUR of turnover in the previous year must issue them.',
      'From 1 January 2028, all businesses must issue them.',
      'An e-invoice follows the European standard EN 16931, for example XRechnung or ZUGFeRD. A plain PDF does not count.',
      'Sales to private clients are not covered.'
    ],
    change: [
      'Invoices to other businesses, such as agencies reselling your trips, become structured files.',
      'Invoices to private travellers can stay as PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Do I need to issue e-invoices to private clients?', a: ['No. The obligation covers domestic sales between businesses.'] }
    ],
    sources: 'Official source: [Federal Ministry of Finance](https://www.bundesfinanzministerium.de).'
  },
  {
    key: 'invoicing-uk',
    slug: 'travel-agency-invoicing-uk',
    metaTitle: 'Invoicing for travel agencies in the UK: TOMS and e-invoicing from 2029',
    metaDescription: 'How a travel business in the UK invoices: the Tour Operators’ Margin Scheme, what the invoice shows, and the e-invoicing plan for April 2029.',
    title: 'Invoicing for travel agencies in the United Kingdom',
    lead: 'UK tour operators that buy in and resell travel in their own name use the Tour Operators’ Margin Scheme (TOMS), with VAT on the margin. The government has confirmed that VAT invoices between businesses will be electronic from April 2029.',
    card: 'TOMS, the invoice and the April 2029 e-invoicing plan.',
    scheme: [
      'TOMS applies to businesses that buy in travel, accommodation and other services and resell them in their own name. VAT is accounted for on the margin. Only the margin on travel enjoyed in the UK is taxable in the UK.'
    ],
    invoice: [
      'An invoice for a TOMS supply does not show VAT separately, and the client cannot reclaim VAT on it.'
    ],
    einvoice: [
      'There is no e-invoicing obligation today.',
      'The Autumn Budget 2025 confirmed that VAT invoices between businesses will be electronic from April 2029, with no real-time reporting to HMRC at first.',
      'The format and the network are still to be set out by HMRC.'
    ],
    change: [
      'Nothing changes for invoices to private travellers.',
      'Agencies selling to other businesses will need software that sends e-invoices by 2029.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Does TOMS still apply after Brexit?', a: ['Yes, for UK businesses. Since 2021 it covers travel enjoyed in the UK only for UK VAT.'] }
    ],
    sources: 'Official source: VAT Notice 709/5 on [GOV.UK](https://www.gov.uk).'
  },
  {
    key: 'invoicing-belgium',
    slug: 'travel-agency-invoicing-belgium',
    metaTitle: 'Invoicing for travel agencies in Belgium: margin scheme and Peppol e-invoicing',
    metaDescription: 'How a travel agency in Belgium invoices: the travel agency margin scheme, and the mandatory Peppol e-invoicing between businesses since January 2026.',
    title: 'Invoicing for travel agencies in Belgium',
    lead: 'Belgian travel agencies pay VAT on their margin under the special scheme for travel agencies. Since 1 January 2026, invoices between Belgian businesses are structured e-invoices sent through Peppol.',
    card: 'The margin scheme and Peppol e-invoicing since 2026.',
    scheme: [
      'The special scheme for travel agencies, from the European VAT directive, applies when the agency sells trips in its own name using services bought from others. VAT is due on the margin.'
    ],
    invoice: [
      'The invoice does not show VAT separately and refers to the special scheme for travel agencies.'
    ],
    einvoice: [
      'Since 1 January 2026, invoices between VAT-registered businesses in Belgium are structured e-invoices, sent through the Peppol network.',
      'Sales to private clients are not covered.',
      'Real-time reporting of invoice data to the tax administration is planned for 2028.'
    ],
    change: [
      'Invoices to other agencies and to companies go through Peppol; invoices to private travellers can stay as PDF.',
      'Most agencies use a Peppol access point through their accounting or invoicing software.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Is a PDF by e-mail still valid between businesses?', a: ['No, not since 1 January 2026. It must be a structured e-invoice.'] }
    ],
    sources: 'Official source: [SPF Finances](https://finances.belgium.be).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
