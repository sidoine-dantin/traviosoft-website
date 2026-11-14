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
      { type: 'callout', text: 'Information générale, à jour au 14 novembre 2026. Ce n’est pas un conseil fiscal : les dates évoluent, vérifiez votre cas avec votre expert-comptable.' },
      { type: 'h2', text: 'Le régime de TVA des agences de voyages', id: 'regime' },
      ...c.scheme.map(text => ({ type: 'p' as const, text })),
      { type: 'h2', text: 'Ce que montre la facture', id: 'facture' },
      { type: 'list', items: c.invoice },
      { type: 'h2', text: 'Facturation électronique : les dates', id: 'facturation-electronique' },
      { type: 'list', items: c.einvoice },
      { type: 'h2', text: 'Ce que cela change pour une agence', id: 'agence' },
      { type: 'list', items: c.change },
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
      'En octobre 2026, le ministère des Finances a annoncé un nouveau report à 2028. Tant qu’il n’est pas publié au BOE, les dates de 2027 restent celles en vigueur.',
      'Facture électronique entre entreprises : le décret royal 238/2026 rend obligatoires les factures électroniques structurées entre entreprises. Elles s’appliquent 12 mois après son arrêté ministériel pour les entreprises de plus de 8 millions d’euros de chiffre d’affaires, et 24 mois après pour les autres.',
      'Les entreprises déjà dans le SII, ainsi que le Pays basque et la Navarre, ont leurs propres systèmes.'
    ],
    change: [
      'Une facture faite dans un modèle Word ou Excel modifiable s’accorde mal avec ces règles. Demandez à votre comptable.',
      'Chaque facture porte un QR code qui permet au client de la vérifier sur le site de l’administration fiscale.',
      'Les factures aux autres entreprises, par exemple aux agences qui revendent vos voyages, circuleront en factures électroniques structurées.'
    ],
    tool: 'Dans Traviosoft, la facturation pour l’Espagne est intégrée : les factures sortent du voyage avec la mention REAV, chaque société garde sa série, et Veri*Factu s’active dans les réglages du pays Espagne.',
    faq: [
      { q: 'Le REAV s’applique-t-il aux voyages vendus à des entreprises ?', a: ['Il existe des options pour les clients professionnels et pour les services réalisés hors de l’UE. Demandez à votre comptable ce qui s’applique à votre cas.'] },
      { q: 'Veri*Factu remplace-t-il le SII ?', a: ['Non. Les entreprises dans le SII continuent de l’utiliser.'] }
    ],
    sources: 'Sources officielles : [Agencia Tributaria](https://sede.agenciatributaria.gob.es) et le [BOE](https://www.boe.es).'
  },
  {
    key: 'invoicing-france',
    slug: 'facturation-agence-de-voyages-france',
    metaTitle: 'Facturation des agences de voyages en France : régime de la marge et facture électronique',
    metaDescription: 'Comment facture une agence de voyages en France : le régime de la marge, la mention sur la facture, les dates de la facturation électronique et du e-reporting depuis septembre 2026.',
    title: 'Facturation des agences de voyages en France',
    lead: 'Les agences de voyages françaises qui vendent en leur nom paient la TVA sur leur marge. Depuis le 1er septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques par une plateforme agréée, et les PME et TPE doivent en émettre à partir du 1er septembre 2027.',
    card: 'Le régime de la marge, la mention sur la facture, les dates de la facture électronique et du e-reporting.',
    scheme: [
      'Le régime de la marge des agences de voyages (article 266, 1-e du CGI) s’applique quand l’agence vend des voyages en son nom avec des services achetés à d’autres. La TVA est due sur la marge. La partie d’un voyage réalisée hors de l’UE n’est pas taxée en France.'
    ],
    invoice: [
      'La facture porte la mention « Régime particulier – Agences de voyages ».',
      'La TVA n’apparaît pas sur une ligne à part sur les factures au régime de la marge.',
      'Avec la réforme, les factures indiquent aussi le numéro SIREN du client et la nature de l’opération.'
    ],
    einvoice: [
      'Depuis le 1er septembre 2026, toute entreprise établie en France et assujettie à la TVA doit pouvoir recevoir des factures électroniques.',
      'Les grandes entreprises et les ETI émettent des factures électroniques depuis le 1er septembre 2026. Les PME et les TPE les émettent à partir du 1er septembre 2027.',
      'Les factures passent par une plateforme agréée, immatriculée par l’administration fiscale.',
      'Les ventes aux particuliers et aux entreprises étrangères ne passent pas en facture électronique : leurs données sont transmises à l’administration en e-reporting, selon le même calendrier.'
    ],
    change: [
      'L’essentiel des ventes d’une agence se fait auprès de particuliers : le e-reporting compte donc autant que la facture électronique.',
      'Pour les ventes au régime de la marge, le e-reporting transmet la marge taxable et la TVA correspondante.',
      'Choisissez tôt votre plateforme agréée et vérifiez qu’elle gère le régime de la marge.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Ai-je besoin d’une plateforme agréée si je vends seulement à des particuliers ?', a: ['Oui, pour recevoir les factures de vos prestataires et pour transmettre votre e-reporting.'] },
      { q: 'Le régime de la marge s’applique-t-il aux voyages vendus à des entreprises ?', a: ['Il peut s’appliquer. Demandez à votre expert-comptable comment il s’applique à vos clients professionnels.'] }
    ],
    sources: 'Source officielle : [impots.gouv.fr, facturation électronique et plateformes agréées](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees).'
  },
  {
    key: 'invoicing-italy',
    slug: 'facturation-agence-de-voyages-italie',
    metaTitle: 'Facturation des agences de voyages en Italie : article 74-ter et factures par le SdI',
    metaDescription: 'Comment facture une agence de voyages en Italie : le régime de la marge de l’article 74-ter, ce que montre la facture et la facture électronique par le SdI.',
    title: 'Facturation des agences de voyages en Italie',
    lead: 'Les agences de voyages italiennes qui organisent des voyages en leur nom utilisent le régime spécial de l’article 74-ter, avec la TVA sur la marge. Toutes les factures entre entreprises italiennes et aux consommateurs italiens passent par le SdI, le système d’échange de l’administration fiscale.',
    card: 'L’article 74-ter, la facture et la facture électronique par le SdI.',
    scheme: [
      'Le régime spécial des agences de voyages (article 74-ter du décret présidentiel 633/1972) s’applique aux voyages et forfaits vendus au nom de l’agence avec des services achetés à des tiers. La TVA est calculée sur la marge, par période.'
    ],
    invoice: [
      'Les factures au titre de l’article 74-ter ne montrent pas la TVA à part.',
      'Elles font référence au régime spécial des agences de voyages.',
      'La facture électronique utilise le code de nature prévu par le SdI pour ce régime. Votre comptable vous confirmera lequel.'
    ],
    einvoice: [
      'Depuis le 1er janvier 2019, les factures entre entreprises et aux consommateurs en Italie sont émises en fichiers XML structurés par le SdI (Sistema di Interscambio).',
      'Depuis le 1er janvier 2024, cela concerne aussi les entreprises au régime forfaitaire (forfettari).',
      'Les factures aux clients étrangers sont déclarées à l’administration fiscale.'
    ],
    change: [
      'Un PDF seul n’est pas une facture valable en Italie : c’est le XML transmis par le SdI qui compte.',
      'La plupart des agences passent par un intermédiaire ou par le logiciel de leur comptable pour l’envoi au SdI.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Puis-je aussi envoyer un PDF au client ?', a: ['Oui, comme copie de courtoisie. La facture qui compte est celle envoyée par le SdI.'] }
    ],
    sources: 'Source officielle : [Agenzia delle Entrate](https://www.agenziaentrate.gov.it).'
  },
  {
    key: 'invoicing-portugal',
    slug: 'facturation-agence-de-voyages-portugal',
    metaTitle: 'Facturation des agences de voyages au Portugal : régime de la marge, ATCUD et logiciel certifié',
    metaDescription: 'Comment facture une agence de voyages au Portugal : le régime de la marge, le logiciel certifié, l’ATCUD et le QR code, le SAF-T et les dates de la facture électronique.',
    title: 'Facturation des agences de voyages au Portugal',
    lead: 'Les agences de voyages portugaises paient la TVA sur leur marge, dans le cadre d’un régime spécial. Les factures doivent sortir d’un logiciel certifié par l’administration fiscale, avec un code ATCUD et un QR code, et les données de facturation sont transmises chaque mois.',
    card: 'Le régime de la marge, le logiciel certifié, l’ATCUD, le QR code et le SAF-T.',
    scheme: [
      'Le régime spécial des agences de voyages (décret-loi 221/85) taxe la marge de l’agence quand elle vend des voyages en son nom avec des services achetés à d’autres.'
    ],
    invoice: [
      'La facture ne montre pas la TVA à part et porte la mention du régime de la marge des agences de voyages.',
      'Chaque facture a un code ATCUD et un QR code, obligatoires depuis le 1er janvier 2023.'
    ],
    einvoice: [
      'Les factures doivent être émises par un logiciel certifié par l’administration fiscale (AT).',
      'Les données de facturation sont envoyées chaque mois à l’AT au format SAF-T (PT).',
      'Les factures aux organismes publics sont envoyées en factures électroniques structurées.',
      'Une signature électronique qualifiée sur les factures PDF est prévue pour janvier 2027.'
    ],
    change: [
      'Une facture faite dans un traitement de texte n’est pas valable : elle doit sortir d’un logiciel certifié.',
      'Les agences gardent en général leur logiciel de facturation certifié et y relient leurs autres outils.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Le QR code est-il une facture électronique ?', a: ['Non. Le QR code est imprimé sur la facture. Une facture électronique est un fichier structuré échangé entre systèmes.'] }
    ],
    sources: 'Source officielle : [Portal das Finanças](https://www.portaldasfinancas.gov.pt).'
  },
  {
    key: 'invoicing-germany',
    slug: 'facturation-agence-de-voyages-allemagne',
    metaTitle: 'Facturation des agences de voyages en Allemagne : §25 UStG et facture électronique',
    metaDescription: 'Comment facture une agence de voyages en Allemagne : le régime de la marge du §25 UStG, la mention sur la facture et les dates de la facture électronique.',
    title: 'Facturation des agences de voyages en Allemagne',
    lead: 'Les voyagistes allemands paient la TVA sur leur marge selon le §25 UStG. Toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er janvier 2025, et doivent en émettre pour leurs ventes entre entreprises en Allemagne à partir de 2027 ou 2028, selon leur chiffre d’affaires.',
    card: 'Le §25 UStG, la mention sur la facture et les dates de la facture électronique.',
    scheme: [
      'Le régime de la marge pour les prestations de voyage (§25 de la loi allemande sur la TVA) s’applique quand l’entreprise vend des voyages en son nom avec des services achetés à d’autres. La TVA est due sur la marge.'
    ],
    invoice: [
      'Une facture au titre du §25 ne montre pas la TVA à part.',
      'Elle porte la mention « Sonderregelung für Reisebüros ».'
    ],
    einvoice: [
      'Depuis le 1er janvier 2025, toute entreprise doit pouvoir recevoir des factures électroniques pour les ventes entre entreprises en Allemagne.',
      'À partir du 1er janvier 2027, les entreprises de plus de 800 000 euros de chiffre d’affaires l’année précédente doivent en émettre.',
      'À partir du 1er janvier 2028, toutes les entreprises doivent en émettre.',
      'Une facture électronique suit la norme européenne EN 16931, par exemple XRechnung ou ZUGFeRD. Un simple PDF ne compte pas.',
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
    sources: 'Source officielle : [ministère fédéral des Finances](https://www.bundesfinanzministerium.de).'
  },
  {
    key: 'invoicing-uk',
    slug: 'facturation-agence-de-voyages-royaume-uni',
    metaTitle: 'Facturation des agences de voyages au Royaume-Uni : TOMS et facture électronique en 2029',
    metaDescription: 'Comment facture une agence de voyages au Royaume-Uni : le Tour Operators’ Margin Scheme, ce que montre la facture et la facture électronique prévue en avril 2029.',
    title: 'Facturation des agences de voyages au Royaume-Uni',
    lead: 'Les voyagistes britanniques qui achètent et revendent des voyages en leur nom utilisent le Tour Operators’ Margin Scheme (TOMS), avec la TVA sur la marge. Le gouvernement a confirmé que les factures de TVA entre entreprises seront électroniques à partir d’avril 2029.',
    card: 'Le TOMS, la facture et la facture électronique prévue en avril 2029.',
    scheme: [
      'Le TOMS s’applique aux entreprises qui achètent des transports, hébergements et autres services et les revendent en leur nom. La TVA porte sur la marge. Seule la marge sur les voyages réalisés au Royaume-Uni y est taxable.'
    ],
    invoice: [
      'Une facture au titre du TOMS ne montre pas la TVA à part, et le client ne peut pas la récupérer.'
    ],
    einvoice: [
      'Il n’y a pas d’obligation de facture électronique aujourd’hui.',
      'Le budget d’automne 2025 a confirmé que les factures de TVA entre entreprises seront électroniques à partir d’avril 2029, sans déclaration en temps réel à HMRC au départ.',
      'Le format et le réseau doivent encore être précisés par HMRC.'
    ],
    change: [
      'Rien ne change pour les factures aux voyageurs particuliers.',
      'Les agences qui vendent à d’autres entreprises auront besoin d’un logiciel qui envoie des factures électroniques d’ici 2029.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Le TOMS s’applique-t-il encore après le Brexit ?', a: ['Oui, pour les entreprises britanniques. Depuis 2021, il ne porte que sur les voyages réalisés au Royaume-Uni pour la TVA britannique.'] }
    ],
    sources: 'Source officielle : la VAT Notice 709/5 sur [GOV.UK](https://www.gov.uk).'
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
    invoice: [
      'La facture ne montre pas la TVA à part et fait référence au régime particulier des agences de voyages.'
    ],
    einvoice: [
      'Depuis le 1er janvier 2026, les factures entre entreprises assujetties à la TVA en Belgique sont des factures électroniques structurées, envoyées par le réseau Peppol.',
      'Les ventes aux particuliers ne sont pas concernées.',
      'La transmission en temps réel des données de facturation à l’administration est prévue pour 2028.'
    ],
    change: [
      'Les factures aux autres agences et aux sociétés passent par Peppol ; les factures aux voyageurs particuliers peuvent rester en PDF.',
      'La plupart des agences utilisent un point d’accès Peppol par leur logiciel de comptabilité ou de facturation.'
    ],
    tool: OUTSIDE_SPAIN,
    faq: [
      { q: 'Un PDF par e-mail est-il encore valable entre entreprises ?', a: ['Non, plus depuis le 1er janvier 2026. Ce doit être une facture électronique structurée.'] }
    ],
    sources: 'Source officielle : [SPF Finances](https://finances.belgium.be).'
  }
];

export const invoicingGuides: Article[] = countries.map(guide);
