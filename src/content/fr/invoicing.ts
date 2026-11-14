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
      { type: 'callout', text: 'Information générale, rédigée le 14 novembre 2026. Elle ne constitue ni un conseil juridique ni un conseil fiscal et n’a aucune valeur juridique. Les règles et les dates évoluent : vérifiez-les auprès des sources officielles citées en bas de page ou d’un professionnel qualifié. Traviosoft décline toute responsabilité quant aux décisions prises sur la base de cette page.' },
      { type: 'h2', text: 'Le régime de TVA des agences de voyages', id: 'regime' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      ...(c.invoice.length ? [{ type: 'h2' as const, text: 'Ce que montre la facture', id: 'facture' }, { type: 'list' as const, items: c.invoice }] : []),
      { type: 'h2', text: 'Facturation électronique : les dates', id: 'facturation-electronique' },
      { type: 'list', items: c.einvoice },
      ...(c.change.length ? [{ type: 'h2' as const, text: 'En pratique', id: 'en-pratique' }, { type: 'list' as const, items: c.change }] : []),
      { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
      { type: 'p', text: c.tool },
      { type: 'h2', text: 'Questions', id: 'faq' },
      { type: 'faq', items: c.faq },
      { type: 'p', text: c.sources }
    ]
  };
}

const OUTSIDE_SPAIN = 'Les factures d’acompte et finale et les avoirs sont faits depuis le voyage, avec les montants du devis accepté et la mention du régime des agences de voyages quand vous l’activez. Hors d’Espagne, les factures partent par le logiciel de facturation que vous utilisez déjà : les règles de facturation électronique de votre pays y sont gérées.';

const countries: Country[] = [
  {
    key: 'invoicing-spain',
    slug: 'facturation-agence-de-voyages-espagne',
    metaTitle: 'Facturation des agences de voyages en Espagne : REAV, Veri*Factu et facture électronique',
    metaDescription: 'Comment facture une agence de voyages ou une DMC en Espagne : le régime de la marge REAV, ce que montre la facture, les dates de Veri*Factu et la facture électronique entre entreprises.',
    title: 'Facturation des agences de voyages en Espagne',
    lead: 'En Espagne, une agence qui vend des voyages en son nom paie en général la TVA sur sa marge, dans le cadre du REAV. Les factures doivent sortir d’un logiciel conforme aux règles antifraude (Veri*Factu), et la facture électronique entre entreprises devient obligatoire par étapes.',
    card: 'REAV, Veri*Factu et facture électronique entre entreprises, avec les dates en vigueur.',
    scheme: [
      'Le REAV (régimen especial de las agencias de viajes, articles 141 à 147 de la loi sur la TVA) s’applique quand l’agence vend en son nom et utilise des services achetés à d’autres entreprises : hôtels, transports, guides. La TVA est payée sur la marge, c’est-à-dire le prix facturé moins ce qui a été payé aux prestataires, et non sur le prix total.',
      'Une agence qui agit seulement comme intermédiaire et touche une commission au nom du prestataire est imposée sur cette commission, au régime général.'
    ],
    invoice: [
      'Dans le REAV, la facture au client ne montre pas la TVA sur une ligne à part.',
      'Elle porte la mention « Régimen especial de las agencias de viajes ».',
      'Chaque société garde sa propre série de factures, et les corrections passent par une facture rectificative.'
    ],
    einvoice: [
      'Veri*Factu : le décret royal 1007/2023 impose un logiciel de facturation qui garde chaque enregistrement de facture sans modification possible. Le décret-loi royal 15/2025 fixe le début au 1er janvier 2027 pour les sociétés soumises à l’impôt sur les sociétés, et au 1er juillet 2027 pour les indépendants et les autres.',
      'Facture électronique entre entreprises : le décret royal 238/2026 rend obligatoires les factures électroniques structurées entre entreprises. Elles s’appliquent 12 mois après son arrêté ministériel pour les entreprises de plus de 8 millions d’euros de chiffre d’affaires, et 24 mois après pour les autres.',
      'Les entreprises déjà dans le SII, ainsi que le Pays basque et la Navarre, ont leurs propres systèmes.'
    ],
    change: [
      'Chaque facture porte un QR code qui permet au client de la vérifier sur le site de l’administration fiscale.',
      'Les factures aux autres entreprises, par exemple aux agences qui revendent vos voyages, circuleront en factures électroniques structurées.'
    ],
    tool: 'Dans Traviosoft, la facturation pour l’Espagne est intégrée : les factures sortent du voyage avec la mention REAV, chaque société garde sa série, et Veri*Factu s’active dans les réglages du pays Espagne.',
    faq: [
      { q: 'Le REAV s’applique-t-il aux voyages vendus à des entreprises ?', a: ['La loi sur la TVA prévoit des options pour les clients professionnels et des règles propres aux services réalisés hors de l’UE.'] },
      { q: 'Veri*Factu remplace-t-il le SII ?', a: ['Non. Les entreprises dans le SII continuent de l’utiliser.'] }
    ],
    sources: 'Sources officielles : [Agencia Tributaria](https://sede.agenciatributaria.gob.es) et le [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'facturation-agence-de-voyages-france',
    metaTitle: 'Facturation des agences de voyages en France : régime de la marge et facture électronique',
    metaDescription: 'Comment facture une agence de voyages en France : le régime de la marge, ce que montre la facture et les dates de la facturation électronique depuis septembre 2026.',
    title: 'Facturation des agences de voyages en France',
    lead: 'Les agences de voyages françaises qui vendent en leur nom paient la TVA sur leur marge. Depuis le 1er septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques par une plateforme agréée, et les PME et TPE doivent en émettre à partir du 1er septembre 2027.',
    card: 'Le régime de la marge, la facture et les dates de la facture électronique.',
    scheme: [
      'Le régime particulier des agences de voyages s’applique quand l’agence vend des voyages en son nom avec des services achetés à d’autres. La TVA est due sur la marge. La partie d’un voyage qui se rapporte à des services exécutés hors de l’Union européenne est exonérée.'
    ],
    invoice: [
      'La facture peut indiquer de manière non équivoque que l’opération relève du régime particulier des agences de voyages.',
      'L’administration admet que la TVA du régime de la marge ne soit pas mentionnée à part sur la facture.'
    ],
    einvoice: [
      'Depuis le 1er septembre 2026, toute entreprise établie en France et assujettie à la TVA doit pouvoir recevoir des factures électroniques.',
      'Les grandes entreprises et les ETI émettent des factures électroniques depuis le 1er septembre 2026. Les PME et les TPE les émettent à partir du 1er septembre 2027.',
      'Les factures passent par une plateforme agréée, immatriculée par l’administration fiscale.',
    ],
    change: [],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Dois-je pouvoir recevoir des factures électroniques si je vends seulement à des particuliers ?', a: ['Oui. Depuis le 1er septembre 2026, toute entreprise assujettie à la TVA en France doit pouvoir les recevoir, par exemple celles de ses prestataires.'] },
      { q: 'Le régime de la marge s’applique-t-il aux voyages vendus à des entreprises ?', a: ['Il peut s’appliquer, selon l’opération. Les conditions sont fixées par le Code général des impôts.'] }
    ],
    sources: 'Sources officielles : [BOFiP, régime des agences de voyages (BOI-TVA-SECT-60)](https://bofip.impots.gouv.fr/doctrine/BOI-TVA-SECT-60), [economie.gouv.fr, calendrier de la facturation électronique](https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises) et [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-passe-la-facturation-electronique).'
  },
  {
    key: 'invoicing-germany',
    slug: 'facturation-agence-de-voyages-allemagne',
    metaTitle: 'Facturation des agences de voyages en Allemagne : §25 UStG et facture électronique',
    metaDescription: 'Comment facture une agence de voyages en Allemagne : le régime de la marge du §25 UStG, la mention sur la facture et les dates de la facture électronique.',
    title: 'Facturation des agences de voyages en Allemagne',
    lead: 'Les voyagistes allemands paient la TVA sur leur marge selon le §25 UStG. Pour leurs ventes entre entreprises en Allemagne, ils doivent émettre des factures électroniques à partir de 2027 ou 2028, selon leur chiffre d’affaires.',
    card: 'Le §25 UStG, la mention sur la facture et les dates de la facture électronique.',
    scheme: [
      'Le régime de la marge pour les prestations de voyage (§25 de la loi allemande sur la TVA) s’applique quand l’entreprise vend des voyages en son nom avec des services achetés à d’autres. La TVA est due sur la marge.'
    ],
    invoice: [
      'Une facture au titre du §25 ne montre pas la TVA à part.',
      'Elle porte la mention « Sonderregelung für Reisebüros ».'
    ],
    einvoice: [
      'À partir du 1er janvier 2027, les entreprises de plus de 800 000 euros de chiffre d’affaires l’année précédente doivent en émettre.',
      'À partir du 1er janvier 2028, toutes les entreprises doivent en émettre.',
      'Une facture électronique suit la norme européenne EN 16931. Un simple PDF ne compte pas.',
      'Les ventes aux particuliers ne sont pas concernées.'
    ],
    change: [
      'Les factures aux autres entreprises, par exemple aux agences qui revendent vos voyages, deviennent des fichiers structurés.',
      'Les factures aux voyageurs particuliers peuvent rester en PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Dois-je émettre des factures électroniques à mes clients particuliers ?', a: ['Non. L’obligation porte sur les ventes entre entreprises en Allemagne.'] }
    ],
    sources: 'Sources officielles : la loi allemande sur la TVA, [§14](https://www.gesetze-im-internet.de/ustg_1980/__14.html), [§14a](https://www.gesetze-im-internet.de/ustg_1980/__14a.html), [§25](https://www.gesetze-im-internet.de/ustg_1980/__25.html) et [§27](https://www.gesetze-im-internet.de/ustg_1980/__27.html).'
  },
  {
    key: 'invoicing-belgium',
    slug: 'facturation-agence-de-voyages-belgique',
    metaTitle: 'Facturation des agences de voyages en Belgique : régime de la marge et Peppol',
    metaDescription: 'Comment facture une agence de voyages en Belgique : le régime particulier des agences de voyages et la facture électronique Peppol obligatoire entre entreprises depuis janvier 2026.',
    title: 'Facturation des agences de voyages en Belgique',
    lead: 'Les agences de voyages belges paient la TVA sur leur marge, dans le cadre du régime particulier des agences de voyages. Depuis le 1er janvier 2026, les factures entre entreprises belges sont des factures électroniques structurées envoyées par Peppol.',
    card: 'Le régime de la marge et la facture électronique Peppol depuis 2026.',
    scheme: [
      'Le régime particulier des agences de voyages, issu de la directive européenne sur la TVA, s’applique quand l’agence vend des voyages en son nom avec des services achetés à d’autres. La TVA est due sur la marge.'
    ],
    invoice: [],
    einvoice: [
      'Depuis le 1er janvier 2026, les factures entre entreprises assujetties à la TVA en Belgique sont des factures électroniques structurées, envoyées par le réseau Peppol.',
      'Les ventes aux particuliers ne sont pas concernées.',
    ],
    change: [
      'Les factures aux autres agences et aux sociétés passent par Peppol ; les factures aux voyageurs particuliers peuvent rester en PDF.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Un PDF par e-mail est-il encore valable entre entreprises ?', a: ['Non, plus depuis le 1er janvier 2026. Ce doit être une facture électronique structurée.'] }
    ],
    sources: 'Source officielle : [efacture.belgium.be](https://efacture.belgium.be/fr/article/les-factures-electroniques-structurees-entre-entreprises-sont-obligatoires-depuis-2026).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
