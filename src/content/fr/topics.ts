import type { Article } from '../types';

const UPDATED = '2026-11-14';

const DISCLAIMER =
  'Information générale, rédigée le 14 novembre 2026. Elle ne constitue ni un conseil juridique ni un conseil fiscal et n’a aucune valeur juridique. Les règles évoluent : vérifiez-les dans les textes officiels cités en bas de page ou auprès d’un professionnel qualifié. Traviosoft décline toute responsabilité quant aux décisions prises sur la base de cette page.';

const gdpr: Article = {
  key: 'gdpr-travel',
  kind: 'guide',
  slug: 'rgpd-agence-de-voyages',
  metaTitle: 'RGPD et agences de voyages : ce que dit le règlement',
  metaDescription: 'Ce que dit le RGPD (règlement (UE) 2016/679) sur les sujets que rencontre une agence de voyages : principes, bases légales, données de santé, mineurs, conservation, droits, sous-traitants, violations, transferts hors UE et amendes.',
  title: 'RGPD et agences de voyages : ce que dit le règlement',
  lead: 'Le règlement général sur la protection des données (règlement (UE) 2016/679) s’applique aux données personnelles des voyageurs, des clients et des contacts. Cette page résume les articles qui touchent au travail d’une agence de voyages, avec les liens vers le texte.',
  updated: UPDATED,
  card: 'Principes, bases légales, données de santé, conservation, droits, sous-traitants et transferts hors UE.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'Les principes', id: 'principes' },
    { type: 'p', text: 'L’article 5 fixe les principes de tout traitement. Les données sont traitées de manière licite, loyale et transparente ; collectées pour des finalités déterminées, explicites et légitimes ; adéquates, pertinentes et limitées à ce qui est nécessaire ; conservées pendant une durée n’excédant pas celle nécessaire au regard des finalités ; et protégées avec intégrité et confidentialité.' },
    { type: 'h2', text: 'Les six bases légales', id: 'bases-legales' },
    { type: 'p', text: 'Selon l’article 6, le traitement n’est licite que si au moins une de ces conditions est remplie :' },
    { type: 'list', items: [
      'la personne a consenti au traitement ;',
      'il est nécessaire à l’exécution d’un contrat auquel la personne est partie ;',
      'il est nécessaire au respect d’une obligation légale ;',
      'il est nécessaire à la sauvegarde des intérêts vitaux ;',
      'il est nécessaire à l’exécution d’une mission d’intérêt public ;',
      'il est nécessaire aux intérêts légitimes poursuivis.'
    ] },
    { type: 'h2', text: 'Les données de santé', id: 'sante' },
    { type: 'p', text: 'L’article 9 range les données concernant la santé parmi les catégories particulières de données, dont le traitement est interdit sauf si l’une des exceptions prévues par l’article s’applique. L’une d’elles est le consentement explicite de la personne.' },
    { type: 'h2', text: 'Les mineurs', id: 'mineurs' },
    { type: 'p', text: 'L’article 8 porte sur le consentement d’un enfant aux services de la société de l’information qui lui sont proposés directement. Le traitement sur cette base est licite à partir de 16 ans. Les États membres peuvent prévoir un âge inférieur, mais pas en dessous de 13 ans.' },
    { type: 'h2', text: 'La durée de conservation', id: 'conservation' },
    { type: 'p', text: 'L’article 5 limite la conservation à la durée nécessaire au regard des finalités. Les articles 13 et 14 listent les informations données à la personne, dont la durée de conservation.' },
    { type: 'h2', text: 'Les droits des personnes', id: 'droits' },
    { type: 'list', items: [
      'Droit d’accès (article 15).',
      'Droit de rectification (article 16).',
      'Droit à l’effacement, ou « droit à l’oubli » (article 17).',
      'Droit à la limitation du traitement (article 18).',
      'Droit à la portabilité des données (article 20).',
      'Droit d’opposition (article 21).'
    ] },
    { type: 'h2', text: 'Les sous-traitants', id: 'sous-traitants' },
    { type: 'p', text: 'Quand une entreprise traite des données pour le compte du responsable du traitement, l’article 28 exige un contrat ou un autre acte juridique. Il définit l’objet et la durée du traitement, sa nature et sa finalité, le type de données et les catégories de personnes concernées.' },
    { type: 'h2', text: 'Le registre et les violations de données', id: 'registre-violations' },
    { type: 'p', text: 'L’article 30 demande à chaque responsable du traitement de tenir un registre des activités de traitement. L’obligation ne s’applique pas aux organisations de moins de 250 employés, sauf si le traitement est susceptible de comporter un risque, s’il n’est pas occasionnel ou s’il porte sur des catégories particulières de données, comme les données de santé.' },
    { type: 'p', text: 'Selon l’article 33, une violation de données personnelles est notifiée à l’autorité de contrôle dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance, sauf si elle n’est pas susceptible d’engendrer un risque pour les droits et libertés des personnes.' },
    { type: 'h2', text: 'Les transferts hors de l’Union européenne', id: 'transferts' },
    { type: 'p', text: 'Le chapitre V (articles 44 à 49) encadre les transferts de données vers des pays hors de l’UE. Un transfert peut avoir lieu quand la Commission européenne a constaté par décision que le pays assure un niveau de protection adéquat (article 45), sans autorisation spécifique. Sans cette décision, l’article 46 prévoit des garanties appropriées et l’article 49 des dérogations pour des situations particulières.' },
    { type: 'h2', text: 'Les amendes', id: 'amendes' },
    { type: 'p', text: 'L’article 83 fixe deux plafonds. Les violations notamment des principes, des bases légales, des catégories particulières, des droits des personnes et des règles de transfert peuvent atteindre 20 millions d’euros ou, pour une entreprise, 4 % du chiffre d’affaires annuel mondial total, le montant le plus élevé étant retenu. D’autres violations, comme celles des articles 8 et 25 à 39, peuvent atteindre 10 millions d’euros ou 2 %.' },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'Dans Traviosoft, les données de chaque agence sont dans un espace qui lui est propre, hébergé dans l’Union européenne.' },
    { type: 'p', text: 'Texte officiel : le règlement publié par la CNIL : [chapitre II, articles 5 à 11](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2), [chapitre III, articles 12 à 23](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3), [chapitre IV, articles 24 à 43](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4), [chapitre V, articles 44 à 50](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre5) et [chapitre VIII, articles 77 à 84](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8). L’autorité de protection des données de chaque pays publie ses propres recommandations.' }
  ]
};

const euVat: Article = {
  key: 'eu-vat-travel',
  kind: 'guide',
  slug: 'tva-regime-marge-agences-de-voyages-ue-vida',
  metaTitle: 'TVA des agences de voyages dans l’UE : le régime de la marge et ViDA',
  metaDescription: 'Le régime particulier de TVA des agences de voyages dans l’UE (articles 306 à 310 de la directive TVA) et ce que prévoit le paquet « TVA à l’ère numérique » (ViDA) adopté en 2025, avec ses dates.',
  title: 'TVA des agences de voyages dans l’UE : le régime de la marge et ViDA',
  lead: 'La directive TVA de l’Union européenne prévoit un régime particulier pour les agences de voyages, où la TVA s’applique à la marge. En 2025, l’UE a adopté le paquet « TVA à l’ère numérique » (ViDA), qui introduit la déclaration numérique et la facture électronique pour les ventes entre entreprises de pays différents à partir de 2030.',
  updated: UPDATED,
  card: 'Le régime particulier des agences de voyages et les dates de ViDA, selon la Commission européenne.',
  blocks: [
    { type: 'callout', text: DISCLAIMER },
    { type: 'h2', text: 'Le régime particulier des agences de voyages', id: 'regime' },
    { type: 'p', text: 'Les articles 306 à 310 de la directive TVA (directive 2006/112/CE du Conseil) prévoient un régime particulier pour les agences de voyages. La Commission européenne le décrit ainsi :' },
    { type: 'list', items: [
      'Il est obligatoire pour les pays et les entreprises de l’UE, et existe dans tous les pays de l’UE.',
      'Il concerne les agences de voyages qui utilisent des biens et des services fournis par d’autres entreprises, et non celles qui agissent seulement comme intermédiaires.',
      'La TVA ne s’applique qu’à la marge.',
      'Il n’y a pas de droit à déduction de la TVA.',
      'Il s’applique aux voyages et à l’hébergement dans l’UE, et non aux voyages hors de l’UE.'
    ] },
    { type: 'p', text: 'Chaque pays applique le régime par sa propre loi. Les pages « Facturer dans votre pays » décrivent les règles en Espagne, en France, en Allemagne et en Belgique.' },
    { type: 'h2', text: 'La TVA à l’ère numérique (ViDA)', id: 'vida' },
    { type: 'p', text: 'Le paquet ViDA a été adopté le 11 mars 2025, publié au Journal officiel de l’Union européenne le 25 mars 2025, et est entré en vigueur le 14 avril 2025. Il se compose de la directive (UE) 2025/516, du règlement (UE) 2025/517 et du règlement d’exécution (UE) 2025/518.' },
    { type: 'p', text: 'Il a trois volets :' },
    { type: 'list', items: [
      'La déclaration numérique, avec la facture électronique pour les ventes entre entreprises de pays différents.',
      'Des règles mises à jour pour les plateformes dans certains secteurs.',
      'Une immatriculation unique à la TVA dans l’UE.'
    ] },
    { type: 'h2', text: 'Les dates', id: 'dates' },
    { type: 'list', items: [
      '14 avril 2025 : les États membres peuvent introduire la facture électronique obligatoire sur leur territoire, sous certaines conditions.',
      '1er juillet 2030 : la déclaration numérique s’applique aux opérations entre entreprises de pays différents.',
      '1er janvier 2035 : les États membres qui ont une déclaration en temps réel sur leur territoire alignent leur système sur le modèle et les normes de l’UE.'
    ] },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'Dans Traviosoft, les factures sont faites depuis le voyage, avec la mention du régime des agences de voyages quand vous l’activez.' },
    { type: 'p', text: 'Sources officielles : Commission européenne, [régimes particuliers de TVA](https://taxation-customs.ec.europa.eu/special-schemes_en), [TVA à l’ère numérique](https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en) et [adoption du paquet ViDA](https://taxation-customs.ec.europa.eu/news/adoption-vat-digital-age-package-2025-03-11_en).' }
  ]
};

const netRates: Article = {
  key: 'net-commissionable-rates',
  kind: 'guide',
  slug: 'tarifs-nets-et-tarifs-commissionnables',
  metaTitle: 'Tarifs nets et tarifs commissionnables dans le voyage : définitions et exemples',
  metaDescription: 'Ce que signifient les tarifs nets et les tarifs commissionnables dans le voyage, comment se calculent la majoration et la commission, et la différence entre majoration et marge, avec des exemples.',
  title: 'Tarifs nets et tarifs commissionnables',
  lead: 'Les prestataires vendent aux agences de voyages et aux DMC de deux façons principales. Un tarif net est le prix que paie l’agence, qui fixe ensuite son propre prix de vente. Un tarif commissionnable est un prix de vente fixé par le prestataire, sur lequel l’agence touche un pourcentage.',
  updated: UPDATED,
  card: 'Ce que signifient les deux types de tarifs, le calcul de la majoration et de la commission, avec des exemples.',
  blocks: [
    { type: 'h2', text: 'Le tarif net', id: 'net' },
    { type: 'p', text: 'Un tarif net est le prix que le prestataire facture à l’agence, sans rien pour l’agence. L’agence fixe le prix de vente en ajoutant une majoration. Le client ne voit pas le tarif net.' },
    { type: 'p', text: 'Exemple : un hôtel donne un tarif net de 100 EUR la nuit. Avec une majoration de 25 %, le prix de vente est de 125 EUR. L’agence garde 25 EUR.' },
    { type: 'h2', text: 'Le tarif commissionnable', id: 'commissionnable' },
    { type: 'p', text: 'Un tarif commissionnable est un prix de vente fixé par le prestataire, souvent son prix public. L’agence vend à ce prix et reçoit une commission, un pourcentage convenu avec le prestataire.' },
    { type: 'p', text: 'Exemple : le tarif commissionnable d’un hôtel est de 150 EUR la nuit, avec 10 % de commission. Le client paie 150 EUR, l’agence touche 15 EUR et l’hôtel reçoit 135 EUR.' },
    { type: 'h2', text: 'Majoration et marge', id: 'majoration-marge' },
    { type: 'p', text: 'Un même montant donne deux pourcentages différents selon ce à quoi on le compare. La majoration se calcule sur le coût, la marge sur le prix de vente.' },
    { type: 'list', items: [
      'Coût 100 EUR, prix de vente 125 EUR, soit 25 EUR gagnés.',
      'Majoration : 25 ÷ 100 = 25 %.',
      'Marge : 25 ÷ 125 = 20 %.'
    ] },
    { type: 'p', text: 'Pour obtenir une marge donnée à partir d’un coût, le prix de vente est égal au coût divisé par (1 − marge). Pour une marge de 20 % sur un coût de 100 EUR : 100 ÷ 0,8 = 125 EUR.' },
    { type: 'h2', text: 'La commission d’une agence partenaire', id: 'partenaire' },
    { type: 'p', text: 'Une DMC ou un voyagiste qui vend par d’autres agences fonctionne souvent dans l’autre sens : il fixe un prix commissionnable et verse une commission à l’agence qui vend.' },
    { type: 'p', text: 'Exemple : une DMC construit un voyage avec 1 000 EUR de coûts nets et le propose à 1 300 EUR au voyageur, avec 10 % de commission pour l’agence qui vend. L’agence touche 130 EUR et la DMC garde 1 170 EUR, soit 170 EUR au-dessus de ses coûts.' },
    { type: 'h2', text: 'La place des taxes', id: 'taxes' },
    { type: 'p', text: 'La façon dont la TVA s’applique à la majoration ou à la commission dépend du pays et du fait que l’agence vend en son nom ou comme intermédiaire. Les pages « Facturer dans votre pays » décrivent les règles de plusieurs pays.' },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    { type: 'p', text: 'Dans Traviosoft, une procédure de prix transforme les tarifs nets en prix de vente, avec la marge, la TVA et la commission quand une agence partenaire vend le voyage.' },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Un même voyage peut-il mélanger tarifs nets et commissionnables ?', a: ['Oui. Un voyage associe souvent des hôtels en tarif net et des services vendus à un prix commissionnable, comme certaines excursions ou certains transports.'] },
        { q: 'Une commission est-elle la même chose qu’une marge ?', a: ['Les deux sont ce que gagne l’agence. La commission est un pourcentage d’un prix fixé par un autre ; la marge vient d’un prix de vente fixé par l’agence elle-même.'] }
      ]
    }
  ]
};

export const topicGuides: Article[] = [gdpr, euVat, netRates];
