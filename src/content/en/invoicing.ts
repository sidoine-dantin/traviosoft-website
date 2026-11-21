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
      { type: 'callout', text: 'General information, written on 14 November 2026. It is not legal or tax advice and has no legal value. Rules and dates change: check the official sources at the end of this page or ask a qualified adviser. Traviosoft accepts no liability for decisions based on this page.' },
      { type: 'h2', text: 'The VAT scheme for travel agencies', id: 'scheme' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      ...(c.invoice.length ? [{ type: 'h2' as const, text: 'What the invoice shows', id: 'invoice' }, { type: 'list' as const, items: c.invoice }] : []),
      { type: 'h2', text: 'E-invoicing: the dates', id: 'e-invoicing' },
      { type: 'list', items: c.einvoice },
      ...(c.change.length ? [{ type: 'h2' as const, text: 'In practice', id: 'in-practice' }, { type: 'list' as const, items: c.change }] : []),
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
      'Under the REAV, the invoice to the client does not have to show VAT as a separate line.',
      'It carries the mention “Régimen especial de las agencias de viajes”.',
      'Each company keeps its own invoice series, and corrections are made with a corrective invoice (factura rectificativa).'
    ],
    einvoice: [
      'Veri*Factu: Royal Decree 1007/2023 requires invoicing software that keeps every invoice record unaltered. Royal Decree-law 15/2025 sets the start on 1 January 2027 for companies paying corporate tax and 1 July 2027 for the self-employed and others.',
      'B2B e-invoicing: Royal Decree 238/2026 makes structured e-invoices mandatory between businesses. It applies 12 months after the ministerial order on the public e-invoicing system comes into force for companies with more than 8 million EUR of turnover, and 24 months after it for the rest.',
      'Businesses that already report through the SII, and the Basque Country and Navarre, have their own systems.'
    ],
    change: [
      'Each invoice carries a QR code that lets the client check it on the tax agency’s site.',
      'Invoices to other businesses, such as agencies that resell your trips, will travel as structured e-invoices.'
    ],
    tool: 'In Traviosoft, invoicing for Spain is built in: invoices come from the trip with the REAV wording, each company keeps its own series, and Veri*Factu is switched on in the Spain country settings.',
    faq: [
      { q: 'Does the REAV apply to trips sold to businesses?', a: ['The VAT law sets out options for business clients and special rules for services performed outside the EU.'] },
      { q: 'Does Veri*Factu replace the SII?', a: ['No. Businesses in the SII keep using it.'] }
    ],
    sources: 'Official sources: [Agencia Tributaria](https://sede.agenciatributaria.gob.es) and the [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'travel-agency-invoicing-france',
    metaTitle: 'Invoicing for travel agencies in France: margin scheme and e-invoicing',
    metaDescription: 'How a travel agency in France invoices: the travel agency margin scheme, what the invoice shows, and the e-invoicing dates from September 2026.',
    title: 'Invoicing for travel agencies in France',
    lead: 'French travel agencies that sell in their own name pay VAT on their margin. Since 1 September 2026, every business must be able to receive e-invoices through an approved platform, and small and medium businesses must issue them from 1 September 2027.',
    card: 'The margin scheme, the invoice and the e-invoicing dates.',
    scheme: [
      'The special scheme for travel agencies applies when the agency sells trips in its own name using services bought from others. VAT is due on the margin. The part of a trip that relates to services performed outside the European Union is exempt.'
    ],
    invoice: [
      'The invoice must refer to the margin scheme, either by citing the article of the tax code or with a mention such as “régime spécifique des agences de voyages”.',
      'On invoices to business clients, the tax administration accepts that the VAT is not shown separately.'
    ],
    einvoice: [
      'Since 1 September 2026, every business established in France and registered for VAT must be able to receive e-invoices.',
      'Large and mid-sized companies issue e-invoices since 1 September 2026. Small and micro businesses issue them from 1 September 2027.',
      'Invoices travel through an approved platform (plateforme agréée), registered by the tax administration.',
    ],
    change: [],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Must I be able to receive e-invoices if I only sell to private clients?', a: ['Yes. Since 1 September 2026, every VAT-registered business in France must be able to receive them, for example from its suppliers.'] },
      { q: 'Does the margin scheme apply to trips sold to businesses?', a: ['Yes. The scheme depends on the operation, not on the client, and applies to amounts received from all clients.'] }
    ],
    sources: 'Official sources: [BOFiP, travel agency scheme (BOI-TVA-SECT-60)](https://bofip.impots.gouv.fr/doctrine/BOI-TVA-SECT-60), [economie.gouv.fr, e-invoicing calendar](https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises) and [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-passe-la-facturation-electronique).'
  },
  {
    key: 'invoicing-germany',
    slug: 'travel-agency-invoicing-germany',
    metaTitle: 'Invoicing for travel agencies in Germany: §25 UStG and e-invoicing',
    metaDescription: 'How a travel agency in Germany invoices: the §25 UStG margin scheme, the invoice wording, and the dates for issuing e-invoices.',
    title: 'Invoicing for travel agencies in Germany',
    lead: 'German tour operators pay VAT on their margin under §25 UStG. For domestic sales between businesses, they must issue e-invoices from 2027 or 2028, depending on turnover.',
    card: '§25 UStG, the invoice wording and the e-invoicing dates.',
    scheme: [
      'The margin scheme for travel services (§25 of the German VAT law) applies when the business sells travel in its own name using services bought from others. VAT is due on the margin.'
    ],
    invoice: [
      'An invoice under §25 does not show VAT separately.',
      'It carries the wording “Sonderregelung für Reisebüros”.'
    ],
    einvoice: [
      'Since 1 January 2025, every business must be able to receive e-invoices.',
      'From 1 January 2027, businesses with more than 800,000 EUR of turnover in the previous year must issue them.',
      'From 1 January 2028, all businesses must issue them.',
      'An e-invoice follows the European standard EN 16931. A plain PDF does not count.',
      'Invoices up to 250 EUR and travel tickets are exempt.',
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
    sources: 'Official sources: the German VAT law, [§14](https://www.gesetze-im-internet.de/ustg_1980/__14.html), [§14a](https://www.gesetze-im-internet.de/ustg_1980/__14a.html), [§25](https://www.gesetze-im-internet.de/ustg_1980/__25.html) and [§27](https://www.gesetze-im-internet.de/ustg_1980/__27.html).'
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
    invoice: [],
    einvoice: [
      'Since 1 January 2026, invoices between VAT-registered businesses in Belgium are structured e-invoices, sent through the Peppol network.',
      'Sales to private clients are not covered.',
    ],
    change: [
      'Invoices to other agencies and to companies go through Peppol; invoices to private travellers can stay as PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Is a PDF by e-mail still valid between businesses?', a: ['No, not since 1 January 2026. It must be a structured e-invoice.'] }
    ],
    sources: 'Official source: [efacture.belgium.be](https://efacture.belgium.be/fr/article/les-factures-electroniques-structurees-entre-entreprises-sont-obligatoires-depuis-2026).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
