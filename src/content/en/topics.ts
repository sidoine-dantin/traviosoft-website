import type { Article } from '../types';

const UPDATED = '2026-11-14';

const DISCLAIMER =
  'General information, written on 14 November 2026. It is not legal or tax advice and has no legal value. Rules change: check the official texts linked at the end of this page or ask a qualified adviser. Traviosoft accepts no liability for decisions based on this page.';

const gdpr: Article = {
  key: 'gdpr-travel',
  kind: 'guide',
  slug: 'gdpr-travel-agency',
  metaTitle: 'GDPR and travel agencies: what the regulation says',
  metaDescription: 'What the GDPR says on the topics a travel agency meets: legal bases, health data, children, retention, rights, processors, breaches, transfers and fines.',
  title: 'GDPR and travel agencies: what the regulation says',
  lead: 'The General Data Protection Regulation (Regulation (EU) 2016/679) applies to the personal data of travellers, clients and contacts. This page summarises the articles that relate to the work of a travel agency, with links to the text.',
  updated: UPDATED,
  card: 'Principles, legal bases, health data, retention, rights, processors and transfers outside the EU.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'The principles', id: 'principles' },
    { type: 'p', text: 'Article 5 sets the principles for any processing. Data is processed lawfully, fairly and transparently; collected for specified, explicit and legitimate purposes; adequate, relevant and limited to what is necessary; kept no longer than necessary for the purposes; and protected with integrity and confidentiality.' },
    { type: 'h2', text: 'The six legal bases', id: 'legal-bases' },
    { type: 'p', text: 'Under article 6, processing is lawful only if at least one of these applies:' },
    { type: 'list', items: [
      'the person has given consent;',
      'it is necessary for a contract the person is party to;',
      'it is necessary to comply with a legal obligation;',
      'it is necessary to protect vital interests;',
      'it is necessary for a task in the public interest;',
      'it is necessary for the legitimate interests pursued.'
    ] },
    { type: 'h2', text: 'Health data', id: 'health' },
    { type: 'p', text: 'Article 9 lists data concerning health among the special categories of personal data, whose processing is prohibited unless one of the exceptions in the article applies. One exception is the explicit consent of the person.' },
    { type: 'h2', text: 'Children', id: 'children' },
    { type: 'p', text: 'Article 8 covers consent given by a child for information society services offered directly to children. Processing on that basis is lawful from 16 years old. Member States may set a lower age, but not below 13.' },
    { type: 'h2', text: 'How long data is kept', id: 'retention' },
    { type: 'p', text: 'Article 5 limits storage to the time necessary for the purposes. Articles 13 and 14 list the information given to the person, which includes the retention period.' },
    { type: 'h2', text: 'The rights of the people concerned', id: 'rights' },
    { type: 'list', items: [
      'Right of access (article 15).',
      'Right to rectification (article 16).',
      'Right to erasure, the “right to be forgotten” (article 17).',
      'Right to restriction of processing (article 18).',
      'Right to data portability (article 20).',
      'Right to object (article 21).'
    ] },
    { type: 'h2', text: 'Processors', id: 'processors' },
    { type: 'p', text: 'When a business processes data on behalf of the controller, article 28 requires a contract or other legal act. It sets out the subject matter and duration of the processing, its nature and purpose, the type of personal data and the categories of people concerned.' },
    { type: 'h2', text: 'Records and data breaches', id: 'records-breaches' },
    { type: 'p', text: 'Article 30 asks each controller to keep a record of processing activities. The obligation does not apply to organisations with fewer than 250 employees, unless the processing is likely to result in a risk, is not occasional, or includes special categories of data such as health data.' },
    { type: 'p', text: 'Under article 33, a personal data breach is notified to the supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of it, unless it is unlikely to result in a risk to people’s rights and freedoms.' },
    { type: 'h2', text: 'Transfers outside the European Union', id: 'transfers' },
    { type: 'p', text: 'Chapter V (articles 44 to 49) governs transfers of personal data to countries outside the EU. A transfer can take place where the European Commission has decided that the country ensures an adequate level of protection (article 45), with no specific authorisation. Without such a decision, article 46 lists appropriate safeguards, and article 49 lists derogations for specific situations.' },
    { type: 'h2', text: 'Fines', id: 'fines' },
    { type: 'p', text: 'Article 83 sets two ceilings. Infringements of, among others, the principles, the legal bases, special categories, the rights of the people concerned and the rules on transfers can reach 20 million EUR or, for an undertaking, 4% of total worldwide annual turnover, whichever is higher. Other infringements, such as those of articles 8 and 25 to 39, can reach 10 million EUR or 2%.' },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'Each agency’s data in Traviosoft is in its own space, hosted in the European Union.' },
    { type: 'p', text: 'Official text: the regulation as published by the CNIL, the French data protection authority: [chapter II, articles 5 to 11](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2), [chapter III, articles 12 to 23](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3), [chapter IV, articles 24 to 43](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4), [chapter V, articles 44 to 50](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre5) and [chapter VIII, articles 77 to 84](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8). Each country’s data protection authority publishes its own guidance.' }
  ]
};

const euVat: Article = {
  key: 'eu-vat-travel',
  kind: 'guide',
  slug: 'eu-vat-margin-scheme-travel-agents-vida',
  metaTitle: 'EU VAT for travel agents: margin scheme and ViDA',
  metaDescription: 'The EU special VAT scheme for travel agents (articles 306 to 310 of the VAT Directive) and the dates set by the ViDA package adopted in 2025.',
  title: 'EU VAT for travel agents: the margin scheme and ViDA',
  lead: 'The EU VAT Directive has a special scheme for travel agents, under which VAT applies to the margin. In 2025, the EU adopted the VAT in the Digital Age package (ViDA), which brings digital reporting and e-invoicing for cross-border sales between businesses from 2030.',
  updated: UPDATED,
  card: 'The special scheme for travel agents and the ViDA dates, from the European Commission.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'The special scheme for travel agents', id: 'scheme' },
    { type: 'p', text: 'Articles 306 to 310 of the VAT Directive (Council Directive 2006/112/EC) set a special scheme for travel agents. The European Commission describes it as follows:' },
    { type: 'list', items: [
      'It is obligatory for EU countries and businesses, and exists in every EU country.',
      'It covers travel agents that use goods and services supplied by other businesses, not those acting solely as intermediaries.',
      'VAT is applied only to the profit margin.',
      'There is no right to deduct VAT.',
      'It applies to travel and accommodation in the EU, not to travel outside the EU.'
    ] },
    { type: 'p', text: 'Each country applies the scheme through its own law. The pages in “Invoicing by country” describe the rules in Spain, France, Germany and Belgium.' },
    { type: 'h2', text: 'VAT in the Digital Age (ViDA)', id: 'vida' },
    { type: 'p', text: 'The ViDA package was adopted on 11 March 2025, published in the Official Journal of the European Union on 25 March 2025, and entered into force on 14 April 2025. It is made of Directive (EU) 2025/516, Regulation (EU) 2025/517 and Implementing Regulation (EU) 2025/518.' },
    { type: 'p', text: 'It has three parts:' },
    { type: 'list', items: [
      'Digital reporting requirements, with e-invoicing for cross-border sales between businesses.',
      'Updated rules for platform economy operators in certain sectors.',
      'A single VAT registration in the EU.'
    ] },
    { type: 'h2', text: 'The dates', id: 'dates' },
    { type: 'list', items: [
      '14 April 2025: Member States can introduce mandatory domestic e-invoicing under specific conditions.',
      '1 July 2030: digital reporting requirements apply to cross-border transactions between businesses.',
      '1 January 2035: Member States with a domestic real-time reporting obligation align their systems with the EU model and standards.'
    ] },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'In Traviosoft, invoices are made from the trip, with the wording of the travel agency scheme when you switch it on.' },
    { type: 'p', text: 'Official sources: European Commission, [VAT special schemes](https://taxation-customs.ec.europa.eu/special-schemes_en), [VAT in the Digital Age](https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en) and [adoption of the ViDA package](https://taxation-customs.ec.europa.eu/news/adoption-vat-digital-age-package-2025-03-11_en).' }
  ]
};

const netRates: Article = {
  key: 'net-commissionable-rates',
  kind: 'guide',
  slug: 'net-rates-vs-commissionable-rates',
  metaTitle: 'Net and commissionable rates in travel, with examples',
  metaDescription: 'What net and commissionable rates mean in travel, how a markup and a commission are calculated, and how markup differs from margin, with worked examples.',
  title: 'Net rates and commissionable rates',
  lead: 'Suppliers sell to travel agencies and DMCs in two main ways. A net rate is the price the agency pays, and the agency sets its own selling price on top. A commissionable rate is a selling price fixed by the supplier, and the agency earns a percentage of it.',
  updated: UPDATED,
  card: 'What the two kinds of rates mean, how markup and commission are calculated, with examples.',
  blocks: [
    { type: 'h2', text: 'Net rate', id: 'net' },
    { type: 'p', text: 'A net rate is the price the supplier charges the agency, with nothing included for the agency. The agency decides the selling price by adding a markup. The client does not see the net rate.' },
    { type: 'p', text: 'Example: a hotel gives a net rate of 100 EUR per night. With a 25% markup, the selling price is 125 EUR. The agency keeps 25 EUR.' },
    { type: 'h2', text: 'Commissionable rate', id: 'commissionable' },
    { type: 'p', text: 'A commissionable rate is a selling price set by the supplier, often its public price. The agency sells at that price and receives a commission, a percentage agreed with the supplier.' },
    { type: 'p', text: 'Example: a hotel’s commissionable rate is 150 EUR per night with a 10% commission. The client pays 150 EUR, the agency earns 15 EUR, and the hotel receives 135 EUR.' },
    { type: 'h2', text: 'Markup and margin', id: 'markup-margin' },
    { type: 'p', text: 'The same amount gives two different percentages depending on what it is compared with. Markup is calculated on the cost; margin is calculated on the selling price.' },
    { type: 'list', items: [
      'Cost 100 EUR, selling price 125 EUR, so 25 EUR earned.',
      'Markup: 25 ÷ 100 = 25%.',
      'Margin: 25 ÷ 125 = 20%.'
    ] },
    { type: 'p', text: 'To reach a given margin from a cost, the selling price is the cost divided by (1 − margin). For a 20% margin on a 100 EUR cost: 100 ÷ 0.8 = 125 EUR.' },
    { type: 'h2', text: 'Commission paid to a partner agency', id: 'partner' },
    { type: 'p', text: 'A DMC or tour operator that sells through other agencies often works the other way round: it sets a commissionable price and pays the selling agency a commission.' },
    { type: 'p', text: 'Example: a DMC builds a trip from 1,000 EUR of net costs and prices it at 1,300 EUR for the traveller, with a 10% commission for the selling agency. The selling agency earns 130 EUR, and the DMC keeps 1,170 EUR, which is 170 EUR above its costs.' },
    { type: 'h2', text: 'Where taxes come in', id: 'taxes' },
    { type: 'p', text: 'How VAT applies to the markup or to the commission depends on the country and on whether the agency sells in its own name or as an intermediary. The pages in “Invoicing by country” describe the rules in several countries.' },
    { type: 'h2', text: 'In Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'In Traviosoft, your pricing rules turn net rates into selling prices, with the margin, the VAT and the commission when a partner agency sells the trip.' },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Can one trip mix net and commissionable rates?', a: ['Yes. A trip often combines hotels on net rates with services sold at a commissionable price, such as some excursions or transport.'] },
        { q: 'Is a commission the same as a margin?', a: ['Both are what the agency earns. A commission is a percentage of a price set by someone else; a margin comes from a selling price the agency sets itself.'] }
      ]
    }
  ]
};

export const topicGuides: Article[] = [gdpr, euVat, netRates];
