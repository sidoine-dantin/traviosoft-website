import type { Article, ArticleBlock, Faq } from '../types';
import { invoicingGuides } from './invoicing';
import { posts } from './posts';
import { topicGuides } from './topics';
import { PRICES } from '../prices';

const UPDATED = '2026-11-03';

type Cmp = {
  key: string;
  slug: string;
  other: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  card: string;
  basis: string;
  rows: string[][];
  otherBetter: string[];
  usBetter: string[];
  switching: string;
  faq: Faq[];
  updated?: string;
};

function compare(c: Cmp): Article {
  const blocks: ArticleBlock[] = [
    { type: 'p', text: c.basis },
    { type: 'h2', text: 'Comparaison point par point', id: 'comparaison' },
    { type: 'table', head: ['', 'Traviosoft', c.other], rows: c.rows },
    { type: 'h2', text: `Quand ${c.other} est le meilleur choix`, id: 'quand-autre' },
    { type: 'list', items: c.otherBetter },
    { type: 'h2', text: 'Quand Traviosoft convient mieux', id: 'quand-traviosoft' },
    { type: 'list', items: c.usBetter },
    { type: 'h2', text: 'Passer à Traviosoft', id: 'changer' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Questions fréquentes', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'La [page Démo](/demo) décrit la démo, faite sur un voyage d’exemple.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: c.updated ?? UPDATED,
    card: c.card,
    blocks
  };
}

const compares: Cmp[] = [
  {
    key: 'vs-excel',
    slug: 'traviosoft-vs-excel',
    other: 'Excel et Word',
    metaTitle: 'Traviosoft ou Excel et Word pour une agence de voyages',
    metaDescription:
      'Excel et Word sont le point de départ de presque toutes les agences. Devis, marges, réservations et factures : quand un logiciel de voyage vaut la peine.',
    title: 'Traviosoft ou Excel et Word : quand passer à un logiciel de voyage',
    lead: 'Excel et Word sont souples, connus de tous et suffisants pour beaucoup d’agences qui vendent quelques voyages par an. Dès que plusieurs personnes, des saisons de prix et une numérotation de factures entrent en jeu, un logiciel conçu pour les voyages prend ce travail en charge.',
    card: 'Tableur ou logiciel : quand le changement vaut la peine, et quand il ne l’est pas.',
    basis:
      'Excel et Word sont le point de départ de presque toutes les agences, et beaucoup s’en contentent des années. Cette page montre ce qui change quand les voyages passent dans un logiciel conçu pour eux. Les informations sur Traviosoft sont celles de notre site au 3 novembre 2026.',
    rows: [
      ['Conçu pour', 'Les voyages sur mesure : demandes, devis, réservations et factures', 'Tout travail de tableur et de texte'],
      ['Prix', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'La licence Microsoft que vous avez déjà'],
      ['Marge et commission', 'Règles de prix définies une fois, appliquées à chaque ligne', 'Formules que vous concevez vous-même, en toute liberté'],
      ['Saisons et fournisseurs', 'Prix par période et plusieurs fournisseurs par produit', 'Des onglets organisés à votre façon'],
      ['Versions du devis', 'Chaque version est conservée et peut être rouverte', 'Un fichier par version'],
      ['Réservations fournisseurs', 'Une liste par voyage, avec des statuts qui se mettent à jour', 'Une colonne ou un document à part'],
      ['Factures', 'Créées depuis le voyage, numérotées par société, avec avoirs', 'Votre propre modèle de facture'],
      ['Règles fiscales espagnoles', 'Le régime de TVA des agences de voyages (REAV) sur les factures', 'Paramétrées dans votre propre modèle'],
      ['Programme pour le client', 'Une page partageable, jour par jour, dans sa langue', 'Un PDF ou un Word envoyé par e-mail'],
      ['Données', 'Un espace à part pour votre agence, hébergé dans l’UE', 'Vos fichiers, où vous les rangez']
    ],
    otherBetter: [
      'Vous vendez peu de voyages par an et vous les gérez seul. Un bon modèle Excel vous donne tout ce qu’il faut.',
      'Votre façon de travailler est très particulière, et un tableur s’y adapte mieux que n’importe quel logiciel.',
      'Vous ne voulez rien changer maintenant, par exemple en pleine haute saison. Changer en cours de campagne est un risque.',
      'Vous avez besoin d’une analyse ponctuelle ou d’un rapport sur mesure. Excel reste l’outil idéal, et Traviosoft exporte vers Excel de toute façon.'
    ],
    usBetter: [
      'Deux personnes ou plus travaillent en même temps sur les mêmes clients et voyages.',
      'Quand un hôtel change son tarif, vous voulez voir quels devis ouverts sont concernés et les mettre à jour en une fois.',
      'Vous voulez que la marge et la commission s’appliquent toujours de la même façon, à partir de règles définies une fois.',
      'Vous voulez que le devis devienne la facture, puis les fichiers pour votre comptable, sans rien ressaisir.',
      'Vous facturez des clients à l’étranger et avez besoin de documents en français, en anglais et en espagnol.'
    ],
    switching:
      'Pendant l’installation, nous importons vos produits, prix et prestataires depuis vos tableurs, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes, et le guide « D’Excel à un logiciel d’agence de voyages » décrit ce qui change.',
    faq: [
      { q: 'Puis-je continuer à utiliser Excel à côté de Traviosoft ?', a: ['Oui. Vous importez vos données depuis Excel et vous exportez un récapitulatif Excel ou un zip de toutes les factures en PDF pour votre comptable.'] },
      { q: 'Que deviennent mes formules de marge ?', a: ['Elles deviennent des règles de prix. Au lieu de recopier la formule dans chaque fichier, vous la définissez une fois et elle s’applique à chaque ligne de chaque devis.'] },
      { q: 'Est-ce utile pour une agence d’une seule personne ?', a: ['Cela dépend du volume. Si vous vendez peu et n’avez besoin ni de factures ni de programmes partagés, un tableur peut suffire. Si les devis vous prennent des heures chaque semaine, un logiciel devient rentable.'] }
    ]
  },
  {
    key: 'vs-ezus',
    slug: 'traviosoft-vs-ezus',
    other: 'Ezus',
    metaTitle: 'Traviosoft ou Ezus : comparatif pour DMC et réceptifs',
    metaDescription:
      'Traviosoft et Ezus comparés : pour qui est chacun, prix publiés, langues et démarrage, et ce que chacun fait le mieux pour les DMC et les agences sur mesure.',
    title: 'Traviosoft ou Ezus : un comparatif indépendant pour DMC et réceptifs',
    lead: 'Ezus est un logiciel français pour DMC bien établi, avec beaucoup de clients, des prix publics et un support en cinq langues. Traviosoft affiche un prix utilisateurs inclus et ajoute le régime espagnol de TVA des agences de voyages (REAV) pour les agences en Espagne.',
    card: 'Deux outils aux prix publics : pour qui est chacun et ce qu’il inclut.',
    basis:
      'Les informations sur Ezus viennent de son site et d’annuaires publics, vérifiés le 3 novembre 2026. Les prix changent : consultez toujours les pages de tarifs actuelles. Les chiffres de clients d’Ezus sont ceux qu’il publie lui-même.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'DMC, réceptifs, tour-opérateurs et agences ; FIT, groupes et MICE'],
      ['Prix publié', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Professional 75 EUR par utilisateur et par mois (jusqu’à 10 utilisateurs) ; Premium 100 EUR ; Enterprise sur demande'],
      ['Démarrage', 'Installation et import sans frais avec la facturation annuelle', 'Pack d’onboarding de 1 990 EUR avec déploiement accompagné ; import de données 390 EUR'],
      ['Langues', 'Documents en français, anglais, espagnol, italien et catalan', 'Site et support en 5 langues : EN, FR, ES, IT, PT'],
      ['Hébergement des données', 'UE, un espace à part pour chaque agence', 'AWS Irlande, d’après son site']
    ],
    otherBetter: [
      'Vous voulez un produit plus ancien sur le marché et beaucoup de références publiques : Ezus annonce plus de 600 agences dans plus de 70 pays.',
      'Vous avez besoin de support et de documentation en italien ou en portugais.',
      'Vous appréciez un déploiement accompagné, avec un spécialiste dédié pendant plusieurs mois.',
      'Il vous faut une offre Enterprise : Ezus en propose une à partir de 30 utilisateurs.',
      'Vous voulez un espace voyageur, un portail de paiement et des pages web dans le même outil, tels que les décrit Ezus.'
    ],
    usBetter: [
      'Vous voulez un prix unique, utilisateurs inclus, avec installation et import inclus en facturation annuelle.',
      'Votre agence est en Espagne et vous voulez le régime espagnol de TVA des agences de voyages (REAV) sur vos factures.',
      'Vous travaillez surtout en espagnol et en français et voulez des documents et des modèles d’e-mail dans la langue du client.',
      'Vous préférez un outil construit autour du déroulé d’un voyage : demande, devis avec marge, réservation, paiement et facture.'
    ],
    switching:
      'Si vous passez d’Ezus à Traviosoft, nous importons vos produits, prix et prestataires depuis vos tableurs pendant l’installation, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'Comment chacun est-il tarifé ?', a: [`Traviosoft Classic coûte ${PRICES.classic.yearly} EUR par mois en facturation annuelle, ${PRICES.usersIncluded} utilisateurs inclus, installation et import inclus. Ezus Professional coûte 75 EUR par utilisateur et par mois, avec un pack d’onboarding de 1 990 EUR qui comprend un déploiement accompagné. Vérifiez les pages de tarifs actuelles des deux.`] },
      { q: 'Ezus convient-il à l’Espagne ?', a: ['Oui. Ezus a un site et un support en espagnol. Traviosoft inclut en plus le régime espagnol de TVA des agences de voyages (REAV) pour les agences en Espagne.'] },
      { q: 'Puis-je essayer les deux ?', a: ['Les deux fonctionnent avec une démonstration.'] }
    ]
  },
  {
    key: 'vs-giav',
    slug: 'traviosoft-vs-giav',
    other: 'GIAV',
    metaTitle: 'Traviosoft ou GIAV : gestion d’agences de voyages',
    metaDescription:
      'GIAV est un logiciel espagnol de longue date pour agences de voyages. Son approche comparée à celle de Traviosoft pour le réceptif et le sur mesure.',
    title: 'Traviosoft ou GIAV : deux façons de gérer une agence de voyages',
    lead: 'GIAV est un logiciel de gestion d’agences de voyages présent depuis longtemps en Espagne, avec un long parcours auprès des agences de détail. Traviosoft est conçu pour le réceptif et le sur mesure. Si vous vendez surtout du voyage catalogue, GIAV peut mieux convenir.',
    card: 'Un outil de longue date pour les agences de détail et un autre pour le sur mesure et le réceptif.',
    basis:
      'Les informations sur GIAV viennent d’annuaires et de la presse du secteur. GIAV présente ses prix et ses offres lors d’une démonstration : nous décrivons donc son approche. Les informations sur Traviosoft sont celles de notre site au 3 novembre 2026.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Gestion d’agences de voyages en Espagne, surtout agences de détail'],
      ['Prix', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Sur demande'],
      ['Connu pour', 'Devis avec marge par ligne, catalogue par saison, page de programme pour le client et le régime espagnol de TVA des agences de voyages (REAV)', 'Un long parcours auprès des agences de voyages en Espagne']
    ],
    otherBetter: [
      'Vous êtes une agence de détail qui vend des billets, des hôtels et des forfaits de voyagistes. Un outil conçu pour ce travail convient souvent mieux.',
      'Votre équipe et votre comptable connaissent déjà GIAV et vous avez des processus construits depuis des années.',
      'Vous appréciez un produit au long parcours sur le marché espagnol.',
      'Vous avez besoin de fonctions comptables ou d’échanges avec votre cabinet que vous avez déjà en place avec eux.'
    ],
    usBetter: [
      'Vous concevez des voyages sur mesure ou accueillez des voyageurs venus de l’étranger, et chaque devis se chiffre prestation par prestation à partir de tarifs nets.',
      'Vous avez besoin de prix par saison et de plusieurs fournisseurs pour une même prestation.',
      'Vous voulez envoyer au client une page de proposition et de programme dans sa langue, à vos couleurs.',
      'Vous voulez voir sur le site le prix et ce que comprend chaque offre.'
    ],
    switching:
      'Si vous passez de GIAV à Traviosoft, nous importons vos produits, prix et prestataires depuis vos tableurs pendant l’installation, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'Puis-je importer mes données depuis GIAV ?', a: ['Nous importons produits, prix et fournisseurs depuis des tableurs. Si vous exportez vos données de GIAV vers un tableur, vous pouvez les reprendre.'] },
      { q: 'Traviosoft convient-il à une agence de détail ?', a: ['Il est conçu pour les agences qui conçoivent et vendent des voyages sur mesure.'] },
      { q: 'Comment GIAV est-il tarifé ?', a: ['GIAV présente ses prix lors d’une démonstration.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft ou Holded pour une agence de voyages',
    metaDescription:
      'Holded est un logiciel de gestion pour PME ; Traviosoft est conçu pour le voyage. Ce que fait chacun, et comment une agence peut utiliser les deux.',
    title: 'Traviosoft ou Holded : logiciel de voyage ou ERP généraliste',
    lead: 'Holded est un logiciel de facturation, de comptabilité et de gestion pour PME, très répandu en Espagne. Traviosoft est construit autour du voyage. Beaucoup d’agences utilisent les deux : Traviosoft pour les voyages, Holded pour l’entreprise.',
    card: 'Un outil généraliste pour PME et un outil de voyage : ce que fait chacun.',
    basis:
      'Les informations sur Holded viennent de son site et de sa page tourisme et voyages, vérifiées le 9 novembre 2026. Holded change souvent ses offres et ses promotions : consultez sa page de tarifs. Les deux outils se concentrent sur des tâches différentes, la vraie question est donc souvent de savoir comment les combiner.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Indépendants et PME de tous secteurs, de 1 à plus de 100 personnes'],
      ['Prix publié', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Básico 34 EUR (2 utilisateurs), Estándar 69 EUR (4), Avanzado 115 EUR (7), Premium 229 EUR (15), hors TVA ; avec remises temporaires'],
      ['Cœur de métier', 'Le voyage : demandes, devis avec marge, réservations, programme, paiements et factures', 'L’entreprise : facturation, comptabilité, paie et banques'],
      ['Comptabilité, paie et banques', 'Prépare les fichiers pour votre comptable', 'Son cœur : comptabilité, paie et rapprochement bancaire']
    ],
    otherBetter: [
      'Vous avez besoin de comptabilité, de trésorerie, de paie ou de rapprochement bancaire dans le même logiciel.',
      'Votre agence est une petite partie d’une entreprise plus grande et vous voulez un seul système pour tout.',
      'Votre comptable travaille déjà avec Holded et préfère tout recevoir là.',
      'Vous facturez en plusieurs devises et voulez un suivi de trésorerie général.'
    ],
    usBetter: [
      'Votre quotidien, c’est chiffrer, envoyer et relancer des devis de voyage avec marge.',
      'Vous avez besoin d’un catalogue avec des prix par saison et plusieurs fournisseurs par prestation.',
      'Vous voulez une liste de réservations par voyage, des bons de service et un programme pour le client.',
      'Votre agence applique le régime de TVA des agences de voyages (REAV) et vous voulez les mentions sur chaque facture automatiquement.'
    ],
    switching:
      'Traviosoft gère le voyage, de la demande à la facture, et exporte un récapitulatif Excel ou un zip de factures PDF, qu’un comptable peut reprendre dans Holded ou un autre logiciel comptable. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'Dois-je quitter Holded pour utiliser Traviosoft ?', a: ['Pas forcément. Beaucoup d’agences gardent leur comptabilité où elle est. L’important est d’émettre chaque facture à un seul endroit et de convenir avec votre comptable de la façon dont il reçoit les données.'] },
      { q: 'Holded et Traviosoft peuvent-ils fonctionner ensemble ?', a: ['Oui. Traviosoft gère le voyage et ses factures, et exporte un récapitulatif Excel ou un zip de factures PDF que votre comptable peut reprendre dans Holded ou dans tout autre logiciel comptable.'] },
      { q: 'Traviosoft fait-il de la comptabilité ?', a: ['Non. Il gère le voyage, les paiements et les factures, et prépare les fichiers pour votre comptable. La comptabilité reste chez votre comptable ou dans le logiciel que vous utilisez.'] }
    ]
  },
  {
    key: 'vs-lemax',
    slug: 'traviosoft-vs-lemax',
    other: 'Lemax',
    metaTitle: 'Traviosoft ou Lemax : logiciel pour DMC et tour-opérateurs',
    metaDescription:
      'Lemax est un logiciel croate pour tour-opérateurs et DMC moyens et grands. Pour qui est chacun, taille d’équipe, prix et approche comparés.',
    title: 'Traviosoft ou Lemax : deux logiciels de gestion complets',
    lead: 'Lemax est un logiciel de plus de 30 ans, conçu pour les tour-opérateurs et DMC moyens et grands. Son offre Lemax GO s’adresse aux équipes à partir de 15 utilisateurs, avec un prix convenu avec chaque client. Traviosoft couvre tout le voyage, de la première demande à la dernière facture, avec des documents en cinq langues et un prix publié.',
    card: 'Deux systèmes complets : une plateforme établie et un seul flux de la demande à la facture avec prix publié.',
    basis:
      'Les informations sur Lemax viennent de son site et de la presse du secteur, vérifiées le 3 novembre 2026. Lemax convient de ses prix avec chaque client : nous écrivons "Sur demande". Ses chiffres de clients sont ceux qu’il affiche.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Tour-opérateurs et DMC moyens et grands'],
      ['Taille d’équipe', `Deux offres, ${PRICES.usersIncluded} utilisateurs inclus`, 'Lemax GO à partir de 15 utilisateurs'],
      ['Prix', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Sur demande ; convenu avec chaque client avant la signature'],
      ['Déploiement', 'Installation et import sans frais avec la facturation annuelle', 'Annonce une mise en service "en 90 jours" pour Lemax GO'],
      ['Distribution et connexions', 'Connexions à votre site et votre comptabilité (Premium) et à vos outils d’IA (les deux offres)', 'Connexion aux fournisseurs, API de réservation et portail B2B, d’après son site']
    ],
    otherBetter: [
      'Vous êtes un tour-opérateur ou un DMC avec une équipe de 15 personnes ou plus et des processus complexes de circuits de plusieurs jours.',
      'Vous avez besoin de distribution, de connexions fournisseurs par API, d’un portail B2B pour les agences ou d’un moteur de réservation en ligne.',
      'Vous cherchez un éditeur de plus de 30 ans, avec des clients sur plusieurs continents.',
      'Vous voulez un projet de déploiement accompagné.'
    ],
    usBetter: [
      'Vous voulez chiffrer, réserver et facturer tout le voyage dans un seul système, avec une mise en place courte.',
      'Vous voulez voir le prix et les utilisateurs inclus avant de demander une démonstration.',
      'Votre marché est l’Espagne et vous vendez en espagnol et en français, avec le régime de TVA des agences de voyages (REAV).',
      'Vous voulez que nous importions vos produits, prix et fournisseurs depuis vos tableurs pendant la mise en place.'
    ],
    switching:
      'Si vous passez de Lemax à Traviosoft, nous importons vos produits, prix et prestataires depuis vos tableurs pendant l’installation, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'À qui s’adresse Lemax GO ?', a: ['Aux équipes de 15 utilisateurs ou plus, d’après son site, avec un déploiement annoncé "en 90 jours".'] },
      { q: 'Comment Lemax est-il tarifé ?', a: ['Lemax convient du prix de l’offre et du déploiement avec chaque client avant la signature.'] },
      { q: 'Traviosoft se connecte-t-il à mes autres outils ?', a: ['Oui, avec Premium. Votre site, votre logiciel de comptabilité ou un développeur avec qui vous travaillez peuvent lire et écrire vos données Traviosoft, et vous pouvez connecter l’assistant d’IA que vous utilisez déjà.'] }
    ]
  },
  {
    key: 'vs-tourwriter',
    slug: 'traviosoft-vs-tourwriter',
    other: 'Tourwriter',
    metaTitle: 'Traviosoft ou Tourwriter pour DMC et concepteurs de voyages',
    metaDescription:
      'Tourwriter est un logiciel néo-zélandais pour DMC de luxe et concepteurs de voyages. Pour qui est chacun, offres, prix, langues et points forts comparés.',
    title: 'Traviosoft ou Tourwriter : deux outils pour concevoir des voyages',
    lead: 'Tourwriter est un logiciel néo-zélandais réputé pour ses programmes très soignés, conçu pour les DMC de luxe et les concepteurs de voyages qui travaillent en anglais. Traviosoft affiche ses prix en euros, utilisateurs inclus, fonctionne en français et en espagnol, et gère le régime de TVA des agences de voyages (REAV).',
    card: 'Des programmes de luxe très soignés en anglais et un outil en euros, en français et en espagnol.',
    basis:
      'Les informations sur Tourwriter viennent de son site (pages offres et société), vérifiées le 3 novembre 2026. Ses prix sont des prix "à partir de" en dollars, par utilisateur, avec un devis pour chaque équipe : le total réel peut différer.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'DMC de luxe et concepteurs de voyages, circuits FIT de plusieurs jours'],
      ['Prix publié', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Starter à partir de 99 USD par utilisateur et par mois ; Pro à partir de 149 USD ; Premium sur demande'],
      ['Démarrage', 'Installation et import sans frais avec la facturation annuelle', 'Frais uniques à partir de 1 199 USD, migration, configuration et formation comprises'],
      ['Langues', 'Documents en français, anglais, espagnol, italien et catalan', 'Anglais']
    ],
    otherBetter: [
      'Vous vendez des voyages de luxe en anglais et voulez des programmes très soignés.',
      'Vous appréciez que d’autres DMC européens l’utilisent déjà.',
      'Vous voulez un déploiement accompagné, avec formation incluse dans les frais de démarrage.',
      'Votre marché principal est anglophone.'
    ],
    usBetter: [
      'Vous voulez un prix en euros, avec les utilisateurs inclus dans chaque offre.',
      'Votre agence est en Espagne et vous voulez le régime de TVA des agences de voyages (REAV) intégré.',
      'Vos clients parlent français ou espagnol et vous voulez devis et e-mails dans leur langue.',
      'Vous voulez l’installation et l’import inclus en facturation annuelle.'
    ],
    switching:
      'Si vous passez de Tourwriter à Traviosoft, nous importons vos produits, prix et prestataires depuis vos tableurs pendant l’installation, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'Comment Tourwriter est-il tarifé ?', a: ['Ses offres démarrent à 99 USD par utilisateur et par mois (Starter) et 149 USD (Pro), avec des frais de démarrage uniques à partir de 1 199 USD qui couvrent la migration et la formation. Ils établissent un devis pour chaque équipe : confirmez le total avec eux.'] },
      { q: 'Dans quelles langues fonctionne chacun ?', a: ['Tourwriter fonctionne en anglais. Traviosoft fonctionne en français, anglais et espagnol, et envoie les documents dans la langue du client : français, anglais, espagnol, italien ou catalan.'] },
      { q: 'Puis-je essayer les deux ?', a: ['Les deux proposent une démonstration.'] }
    ]
  },
  {
    key: 'vs-tourplan',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourplan',
    other: 'Tourplan',
    metaTitle: 'Traviosoft ou Tourplan pour DMC et voyagistes',
    metaDescription:
      'Tourplan est un logiciel pour DMC et voyagistes, présent depuis 1986. Pour qui est chacun, société, prix, démarrage et langues comparés.',
    title: 'Traviosoft ou Tourplan : deux systèmes pour DMC et voyagistes',
    lead: 'Tourplan conçoit des logiciels pour DMC et voyagistes depuis 1986, avec la vente, les réservations et la gestion dans un système modulaire utilisé par 450 sociétés dans 75 pays. Traviosoft couvre tout le voyage, de la première demande à la dernière facture, avec des documents en cinq langues et un prix publié.',
    card: 'Un système modulaire avec 40 ans d’histoire et un seul flux de la demande à la facture, avec un prix publié.',
    basis:
      'Les informations sur Tourplan viennent de son site (accueil et page À propos), vérifiées le 14 novembre 2026. Son site ne publie pas de prix : nous écrivons "Sur demande".',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'DMC, voyagistes réceptifs et émetteurs : individuels, groupes, MICE, sur mesure, circuits'],
      ['Prix', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Sur demande'],
      ['Démarrage', 'Installation et import sans frais avec la facturation annuelle', 'Hébergement, installation, gestion de projet, formation et support'],
      ['Distribution', 'Connexions à votre site et à votre comptabilité (Premium) et à vos outils d’IA (les deux offres)', 'Canaux de distribution web et XML, et interfaces en ligne pour agents, clients et prestataires']
    ],
    otherBetter: [
      'Vous voulez un système modulaire qui couvre produit, devis, réservations, comptabilité et pilotage, avec 40 ans d’histoire.',
      'Vous distribuez votre produit par des canaux web et XML et voulez des interfaces pour agents et prestataires.',
      'Vous appréciez un éditeur qui travaille avec 450 voyagistes et DMC dans 75 pays, avec des bureaux sur cinq continents.',
      'Vous voulez un projet accompagné, avec installation, gestion de projet et formation.'
    ],
    usBetter: [
      'Vous voulez chiffrer, réserver et facturer tout le voyage dans un seul système, opérationnel après une installation courte.',
      'Vous voulez un prix publié, avec des utilisateurs inclus dans chaque offre.',
      'Vos clients parlent français, espagnol, catalan ou italien et vous voulez des documents dans leur langue.',
      'Vous voulez que nous importions vos produits, prix et prestataires depuis vos tableurs pendant l’installation.'
    ],
    switching:
      'Si vous passez de Tourplan à Traviosoft, nous importons vos produits, prix et prestataires depuis vos tableurs pendant l’installation, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'Pour qui est Tourplan ?', a: ['Selon son site, pour les DMC et les voyagistes réceptifs et émetteurs : individuels, groupes, MICE, sur mesure, circuits réguliers et spécialisés.'] },
      { q: 'Quel est le prix de Tourplan ?', a: ['Son site ne publie pas de prix.'] },
      { q: 'Puis-je essayer les deux ?', a: ['Les deux proposent une démo.'] }
    ]
  },
  {
    key: 'vs-kaptio',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-kaptio',
    other: 'Kaptio',
    metaTitle: 'Traviosoft ou Kaptio pour voyagistes et voyages sur mesure',
    metaDescription:
      'Kaptio est un logiciel pour les voyages de plusieurs jours : croisières, train, circuits et sur mesure. Public, société, prix et démarrage comparés.',
    title: 'Traviosoft ou Kaptio : deux systèmes pour les voyages de plusieurs jours',
    lead: 'Kaptio, fondé à Reykjavik en 2012, réunit relation client, contrats, tarification, stock, réservations, paiements et opérations pour les croisières, le train, les circuits en groupe et le sur mesure. Traviosoft couvre tout le voyage, de la première demande à la dernière facture, avec des documents en cinq langues et un prix publié.',
    card: 'Une plateforme pour les voyages de plusieurs jours et un seul flux de la demande à la facture, avec un prix publié.',
    basis:
      'Les informations sur Kaptio viennent de son site (accueil, plateforme et À propos), vérifiées le 14 novembre 2026. Son site ne publie pas de prix : nous écrivons "Sur demande".',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Voyages de plusieurs jours : croisières, train, circuits en groupe et sur mesure'],
      ['Prix', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Sur demande'],
      ['Démarrage', 'Installation et import sans frais avec la facturation annuelle', 'Commence par un atelier de découverte'],
      ['Modules', 'Demandes, devis, réservations, factures et paiements dans un seul flux', 'Kaptio CRM, Kaptio Travel et Kaptio Edge']
    ],
    otherBetter: [
      'Vous vendez des croisières, du train ou des circuits en groupe et voulez relation client, contrats, stock et opérations sur une même plateforme.',
      'Vous voulez commencer par un atelier de découverte sur vos processus.',
      'Vous voulez les assistants d’IA qu’il présente comme partie de la plateforme.'
    ],
    usBetter: [
      'Vous construisez des voyages sur mesure et voulez les chiffrer, les réserver et les facturer dans un seul système, opérationnel après une installation courte.',
      'Vous voulez un prix publié, avec des utilisateurs inclus dans chaque offre.',
      'Vos clients parlent français, espagnol, catalan ou italien et vous voulez des documents dans leur langue.',
      'Vous voulez que nous importions vos produits, prix et prestataires depuis vos tableurs pendant l’installation.'
    ],
    switching:
      'Si vous passez de Kaptio à Traviosoft, nous importons vos produits, prix et prestataires depuis vos tableurs pendant l’installation, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'Pour qui est Kaptio ?', a: ['Selon son site, pour les sociétés qui vendent des voyages de plusieurs jours : croisières, train, circuits en groupe et sur mesure.'] },
      { q: 'Quel est le prix de Kaptio ?', a: ['Son site ne publie pas de prix.'] },
      { q: 'Puis-je essayer les deux ?', a: ['Kaptio commence par un atelier de découverte, Traviosoft par une démo sur un voyage d’exemple.'] }
    ]
  },
  {
    key: 'vs-tourcms',
    updated: '2026-11-14',
    slug: 'traviosoft-vs-tourcms',
    other: 'TourCMS',
    metaTitle: 'Traviosoft ou TourCMS : voyages sur mesure ou excursions',
    metaDescription:
      'TourCMS est un logiciel de réservation et de canaux de vente pour les excursions et activités. Public, société, prix publiés et langues comparés.',
    title: 'Traviosoft ou TourCMS : voyages sur mesure, excursions et activités',
    lead: 'TourCMS, exploité par Palisis en Suisse, propose depuis 2003 la réservation, la distribution et la gestion des canaux aux opérateurs d’excursions et d’activités. Traviosoft est conçu pour les voyages sur mesure, de la première demande à la dernière facture, avec des documents en cinq langues.',
    card: 'Réservations et gestion des canaux pour excursions et activités, et un seul flux pour le sur mesure.',
    basis:
      'Les informations sur TourCMS viennent de son site (accueil, fonctionnalités et prix), vérifiées le 14 novembre 2026. Ses prix sont affichés en dollars américains.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Opérateurs d’excursions et d’activités : excursions à la journée, circuits, attractions, DMC'],
      ['Prix publié', `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'De 49 USD par mois (2 utilisateurs) à 569 USD par mois (500 utilisateurs) ; réservations des partenaires connectés à partir de 1,9 % par transaction'],
      ['Démarrage', 'Installation et import sans frais avec la facturation annuelle', 'Essai gratuit, sans frais de mise en place'],
      ['Langues', 'Documents en français, anglais, espagnol, italien et catalan', 'Contenus en 22 langues']
    ],
    otherBetter: [
      'Vous proposez des excursions ou des activités, avec des départs vendus en ligne et par des revendeurs.',
      'Vous voulez une gestion des canaux et une place de marché d’agents, qu’il annonce à plus de 30 000.',
      'Vous voulez commencer par un essai gratuit.'
    ],
    usBetter: [
      'Vous construisez des voyages sur mesure, chacun chiffré avec votre marge et votre commission.',
      'Vous voulez que les réservations prestataires et les factures partent du même voyage.',
      'Vos clients parlent français, espagnol, catalan ou italien et vous voulez des documents dans leur langue.',
      'Vous voulez que nous importions vos produits, prix et prestataires depuis vos tableurs pendant l’installation.'
    ],
    switching:
      'Si vous passez de TourCMS à Traviosoft, nous importons vos produits, prix et prestataires depuis vos tableurs pendant l’installation, sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.',
    faq: [
      { q: 'Pour qui est TourCMS ?', a: ['Selon son site, pour les opérateurs d’excursions et d’activités : excursions à la journée, bus touristiques, attractions, circuits de plusieurs jours, DMC et visites à pied.'] },
      { q: 'Quel est le prix de TourCMS ?', a: ['Sa page de prix présente quatre offres, de 49 USD par mois (Small) à 569 USD par mois (Enterprise), avec une option annuelle, plus des frais à partir de 1,9 % sur les réservations des partenaires connectés.'] },
      { q: 'Puis-je essayer les deux ?', a: ['TourCMS propose un essai gratuit et Traviosoft une démo sur un voyage d’exemple.'] }
    ]
  }
];

const comparisons: Article[] = compares.map(compare);

const best: Article = {
  key: 'best-dmc-software',
  kind: 'best',
  slug: 'meilleur-logiciel-dmc',
  metaTitle: 'Meilleur logiciel pour DMC et réceptifs (2026)',
  metaDescription:
    'Comparatif indépendant de Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio, GIAV et Excel : pour qui, prix publiés, langues et points forts de chacun.',
  title: 'Meilleur logiciel pour DMC et réceptifs (2026)',
  lead: 'Pour un DMC ou une agence sur mesure, les options sont Traviosoft, Ezus, Tourplan, Tourwriter, Lemax, Kaptio et GIAV ; beaucoup d’agences commencent aussi avec Excel et Word. Ce guide les compare avec des données publiques : pour qui, prix, langues et points forts de chacun.',
  updated: UPDATED,
  card: 'Huit options comparées : pour qui, prix publiés, langues et points forts.',
  blocks: [
    {
      type: 'p',
      text: 'Cette liste est écrite par Traviosoft : nous nous en tenons donc aux données publiques, nous écrivons "Sur demande" quand un éditeur présente ses prix lors d’une démonstration, et nous disons ce que chaque outil fait le mieux. Données vérifiées le 3 novembre 2026. Les prix changent : consultez toujours les pages officielles.'
    },
    { type: 'h2', text: 'Tableau comparatif', id: 'tableau' },
    {
      type: 'table',
      head: ['Logiciel', 'Pour qui', 'Taille d’équipe', 'Prix', 'Langues'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Réceptifs, DMC et agences sur mesure', `Deux offres, ${PRICES.usersIncluded} utilisateurs inclus`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Documents en FR, EN, ES et plus'],
        ['Ezus', 'DMC, réceptifs, tour-opérateurs et agences', 'Professional jusqu’à 10 utilisateurs ; Enterprise à partir de 30', '75 EUR par utilisateur et par mois (Professional) ; pack d’onboarding 1 990 EUR', 'Site et support en EN, FR, ES, IT, PT'],
        ['Tourplan', 'Tour-opérateurs et DMC établis', 'Sur demande', 'Sur demande', 'Site en anglais, espagnol et japonais'],
        ['Tourwriter', 'DMC de luxe et concepteurs de voyages', '1 à plus de 20 personnes selon l’offre', 'À partir de 99 USD par utilisateur et par mois ; frais de démarrage à partir de 1 199 USD', 'Anglais'],
        ['Lemax', 'Tour-opérateurs et DMC moyens et grands', 'Lemax GO à partir de 15 utilisateurs', 'Sur demande', 'Anglais'],
        ['Kaptio', 'Grands opérateurs de circuits de plusieurs jours', 'Grands opérateurs', 'Sur demande', 'Anglais'],
        ['GIAV', 'Agences de voyages en Espagne, avec un long parcours auprès du détail', 'Sur demande', 'Sur demande', 'Espagnol'],
        ['Excel + Word', 'Toute agence qui débute', 'Une à trois personnes en pratique', 'La licence que vous avez déjà', 'Celle que vous écrivez']
      ]
    },
    { type: 'h2', text: 'Chaque outil et ses points forts', id: 'logiciels' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Couvre tout le voyage : demandes, catalogue avec prix par saison, devis avec marge et commission, réservations, paiements et factures, avec le régime de TVA des agences de voyages (REAV) pour l’Espagne. Il affiche son prix, et l’installation et l’import sont inclus avec la facturation annuelle.'
    },
    { type: 'h3', text: 'Ezus' },
    {
      type: 'p',
      text: 'Un logiciel complet pour DMC, avec des prix publics, un site et un support en cinq langues et beaucoup de références : plus de 600 agences dans plus de 70 pays, d’après son site. Son pack d’onboarding de 1 990 EUR comprend un déploiement accompagné.'
    },
    { type: 'h3', text: 'Tourplan' },
    {
      type: 'p',
      text: 'Un logiciel d’une quarantaine d’années pour tour-opérateurs et DMC établis, avec des clients dans environ 75 pays d’après son site. Prix et offres sur demande.'
    },
    { type: 'h3', text: 'Tourwriter' },
    {
      type: 'p',
      text: 'Réputé pour ses programmes de luxe très soignés, utilisé par des DMC et des concepteurs de voyages dans de nombreux pays. Ses offres sont tarifées par utilisateur, avec des frais de démarrage qui couvrent la migration et la formation.'
    },
    { type: 'h3', text: 'Lemax' },
    {
      type: 'p',
      text: 'Une plateforme complète pour tour-opérateurs et DMC moyens et grands, avec distribution, API de réservation et portail B2B. Lemax GO s’adresse aux équipes à partir de 15 utilisateurs, et les prix sont convenus avec chaque client.'
    },
    { type: 'h3', text: 'Kaptio' },
    {
      type: 'p',
      text: 'Une plateforme bâtie sur Salesforce pour de grands opérateurs de circuits de plusieurs jours ; la presse cite parmi ses clients de grands groupes internationaux. Elle est proposée après un atelier de découverte, avec des prix sur demande.'
    },
    { type: 'h3', text: 'GIAV' },
    {
      type: 'p',
      text: 'Logiciel de gestion d’agences de voyages présent de longue date en Espagne, surtout auprès des agences de détail. Il présente ses prix et ses fonctions lors d’une démonstration.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Gratuit si vous avez déjà la licence, souple et connu de tous. Beaucoup d’agences commencent ici et passent à un logiciel dédié quand leurs voyages et leur équipe grandissent.'
    },
    { type: 'h2', text: 'Ce qui diffère entre les options', id: 'choisir' },
    { type: 'list', items: [
      'Les options diffèrent par le nombre minimum d’utilisateurs et par ce que comprend chaque offre.',
      'Le coût de la première année peut inclure, en plus de la mensualité, des frais de démarrage et d’import de données, selon l’éditeur.',
      'La langue des documents que reçoit le client peut différer de celle des écrans.',
      'Les règles de facturation dépendent du pays ; les pages « Facturer dans votre pays » en décrivent plusieurs.',
      'Certains éditeurs publient leurs prix ; d’autres les présentent lors d’une démonstration.'
    ] },
    { type: 'h2', text: 'Questions fréquentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Quel est le meilleur logiciel pour un DMC ou une agence sur mesure ?', a: ['Cela dépend de la façon de travailler de l’agence et de son marché. Le tableau ci-dessus indique pour qui est chaque outil, son prix et ses langues.'] },
        { q: 'Combien coûte un logiciel pour DMC ?', a: [`Les prix publiés vont de ${PRICES.classic.yearly} EUR par mois pour ${PRICES.usersIncluded} utilisateurs (Traviosoft Classic) à 75 EUR par utilisateur et par mois plus un pack d’onboarding de 1 990 EUR (Ezus). Tourplan, Lemax et Kaptio donnent leurs prix sur demande.`] },
        { q: 'Faut-il un logiciel spécifique au voyage ou un ERP généraliste suffit-il ?', a: ['Un ERP généraliste est conçu pour la comptabilité ; un logiciel de voyage ajoute des devis avec marge par prestation et une liste de réservations par voyage. Beaucoup d’agences utilisent les deux.'] }
      ]
    },
    { type: 'p', text: 'La [page Démo](/demo) décrit la démo, faite sur un voyage d’exemple.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'devis-voyage-sur-mesure-avec-marge',
  metaTitle: 'Prix d’un voyage sur mesure : marge et commission',
  metaDescription:
    'Comment se calcule le prix d’un voyage sur mesure à partir des tarifs nets, avec une marge sur le prix de vente et une commission, sur un exemple chiffré.',
  title: 'Comment se calcule le prix d’un voyage sur mesure',
  lead: 'Le prix d’un voyage sur mesure se construit à partir de trois montants : ce que facturent les prestataires (les tarifs nets), ce que gagne l’agence (la marge) et, quand une autre agence vend le voyage, sa commission. Cette page montre le calcul sur un exemple.',
  updated: '2026-11-14',
  related: ['net-commissionable-rates', 'package-quote', 'agency-invoicing', 'what-is-a-dmc'],
  card: 'Tarifs nets, marge sur le prix de vente et commission, calculés sur un exemple.',
  blocks: [
    { type: 'h2', text: 'Majoration et marge pour un même coût', id: 'notions' },
    {
      type: 'p',
      text: 'La majoration se calcule sur le coût et la marge sur le prix de vente : un même montant gagné donne donc deux pourcentages différents. Pour un coût de 1 000 EUR :'
    },
    {
      type: 'table',
      head: ['Majoration sur le coût', 'Prix de vente', 'Montant gagné', 'Marge sur le prix'],
      rows: [
        ['20 %', '1 200,00 EUR', '200,00 EUR', '16,7 %'],
        ['25 %', '1 250,00 EUR', '250,00 EUR', '20,0 %'],
        ['33,3 %', '1 333,33 EUR', '333,33 EUR', '25,0 %'],
        ['50 %', '1 500,00 EUR', '500,00 EUR', '33,3 %']
      ]
    },
    { type: 'h2', text: 'Exemple : 4 nuits en Andalousie pour 2 personnes', id: 'exemple' },
    {
      type: 'table',
      head: ['Prestation', 'Calcul', 'Coût net'],
      rows: [
        ['Hôtel, chambre double', '4 nuits x 100 EUR', '400 EUR'],
        ['Transferts privés', '2 transferts x 60 EUR', '120 EUR'],
        ['Guide', '2 jours x 150 EUR', '300 EUR'],
        ['Cours de cuisine', '2 personnes x 40 EUR', '80 EUR'],
        ['Entrées', '2 personnes x 50 EUR', '100 EUR'],
        ['Total net', '', '1 000 EUR']
      ]
    },
    {
      type: 'p',
      text: 'Avec une marge de 25 % sur le prix de vente, le prix est de 1 000 ÷ (1 − 0,25) = 1 333,33 EUR, soit 666,67 EUR par personne. La marge est de 333,33 EUR. Une majoration de 25 % sur le coût donnerait 1 250 EUR, soit une marge de 20 %.'
    },
    { type: 'h2', text: 'Avec une commission', id: 'commission' },
    {
      type: 'p',
      text: 'Quand une autre agence vend le voyage avec 10 % de commission sur le prix, la commission est prise sur ce même prix. À 1 333,33 EUR, la commission est de 133,33 EUR et la marge tombe à 200 EUR, soit 15 %. Pour garder 25 % de marge, la commission entre dans le diviseur : 1 000 ÷ (1 − 0,25 − 0,10) = 1 538,46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Prix pour le client : 1 538,46 EUR (769,23 EUR par personne).',
        'Commission de 10 % : 153,85 EUR.',
        'Marge de 25 % : 384,62 EUR.',
        'Coût net : 1 000,00 EUR. (Les montants sont arrondis au centime.)'
      ]
    },
    { type: 'h2', text: 'Les taxes', id: 'taxes' },
    {
      type: 'p',
      text: 'Les montants ci-dessus sont hors taxes. La façon dont la TVA s’applique à un voyage dépend du pays et du régime de l’agence ; les pages « Facturer dans votre pays » décrivent plusieurs pays.'
    },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Dans Traviosoft, les règles de prix (marge, TVA et commission) se définissent une fois, et chaque ligne de chaque devis les suit, avec le prix par personne et le total que voit le client.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'La marge se fixe-t-elle par prestation ou par voyage ?', a: ['Les deux existent. Certaines agences appliquent une marge pour tout le voyage, d’autres une marge différente par type de prestation.'] },
        { q: 'Pourquoi la commission est-elle dans le diviseur ?', a: ['Parce que la commission est un pourcentage du prix de vente, comme la marge. Les mettre toutes les deux dans le diviseur donne un prix où chacune garde son pourcentage.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-groupes-mice',
  metaTitle: 'Rooming list : définition, colonnes et exemple pour groupes',
  metaDescription:
    'Ce qu’est une rooming list dans les voyages de groupe et le MICE, les informations qu’elle contient en général, un exemple et l’usage qu’en fait l’hôtel.',
  title: 'La rooming list pour les groupes et le MICE',
  lead: 'Une rooming list indique à l’hôtel qui dort dans chaque chambre d’un groupe, avec le type de chambre, les dates et les demandes particulières. L’hôtel s’en sert pour attribuer les chambres du bloc qu’il réserve au groupe.',
  updated: '2026-11-28',
  related: ['hotel-allotment', 'what-is-a-dmc', 'package-quote'],
  card: 'Ce qu’est une rooming list, ses colonnes habituelles et un exemple.',
  blocks: [
    {
      type: 'p',
      text: 'Pour un groupe, l’hôtel bloque des chambres dans le cadre d’un contrat. La rooming list dit comment ces chambres se répartissent entre les participants. Le contrat fixe en général la date à laquelle l’hôtel attend la liste et la date à laquelle les chambres non utilisées du bloc sont libérées.'
    },
    { type: 'h2', text: 'Les colonnes habituelles', id: 'colonnes' },
    {
      type: 'table',
      head: ['Colonne', 'Contenu', 'Exemple'],
      rows: [
        ['N° de chambre', 'Un numéro d’ordre ; l’hôtel attribue le vrai', '1'],
        ['Type de chambre', 'Individuelle, double, twin ou triple', 'Twin'],
        ['Voyageur 1', 'Nom complet comme sur le document de voyage', 'Marta Ruiz Soler'],
        ['Voyageur 2', 'Idem, en cas de partage', 'Pedro Vidal Mas'],
        ['Arrivée', 'Date d’arrivée', '12/05/2027'],
        ['Départ', 'Date de départ', '15/05/2027'],
        ['Nuits', 'Calculées à partir des dates', '3'],
        ['Pension', 'Logement seul, petit-déjeuner, demi-pension', 'Petit-déjeuner'],
        ['Heure d’arrivée', 'Heure ou vol', 'Vol 10:40'],
        ['Demandes', 'Régimes, accessibilité, lit d’appoint', 'Sans gluten'],
        ['Société ou groupe', 'Quand il y a plusieurs factures', 'Équipe commerciale']
      ]
    },
    {
      type: 'p',
      text: 'Un exemple de taille : un groupe de 22 personnes en 9 chambres twin (18 personnes) et 4 individuelles occupe 13 chambres. Le total de personnes sur la liste correspond au groupe.'
    },
    { type: 'h2', text: 'Les abréviations des types de chambre', id: 'abreviations' },
    {
      type: 'table',
      head: ['Abréviation', 'Chambre'],
      rows: [
        ['SGL', 'Single : une personne'],
        ['DBL', 'Double : deux personnes, un lit'],
        ['TWN', 'Twin : deux personnes, deux lits'],
        ['TPL', 'Triple : trois personnes'],
        ['DUS', 'Double à usage individuel : une personne dans une chambre double']
      ]
    },
    { type: 'h2', text: 'Quand l’hôtel l’attend', id: 'date-limite' },
    {
      type: 'p',
      text: 'Le contrat de groupe fixe une date limite, après laquelle les chambres sans nom sur la liste reviennent à l’hôtel. Par exemple, les conditions publiées par Fáilte Ireland pour les groupes demandent la rooming list complète, avec le solde, 30 jours avant l’arrivée. La page [L’allotement hôtelier et la date de release](/guides/allotement-hotel-date-de-release) explique la date de release et le cut-off.'
    },
    { type: 'h2', text: 'Qui y figure', id: 'qui' },
    {
      type: 'p',
      text: 'En plus des participants, la rooming list d’un groupe inclut souvent les personnes qui l’accompagnent, comme le guide, le chauffeur ou l’organisateur, quand ils logent dans le même hôtel.'
    },
    { type: 'h2', text: 'Les versions', id: 'versions' },
    {
      type: 'p',
      text: 'Une rooming list évolue à mesure que les participants confirment, annulent ou changent de chambre. Chaque version envoyée à l’hôtel porte en général sa date, pour que les deux côtés travaillent sur la même liste.'
    },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Dans Traviosoft, une rooming list par hôtel se construit à partir de qui partage avec qui, prête à envoyer en PDF ou en tableur.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Que veut dire rooming list ?', a: ['La liste des chambres d’un groupe, avec le nom des personnes dans chaque chambre, envoyée à l’hôtel avant l’arrivée.'] },
        { q: 'La rooming list sert-elle seulement aux grands groupes ?', a: ['Elle sert dès qu’un hôtel doit savoir qui dort dans quelle chambre, du petit groupe au grand événement.'] },
        { q: 'Quelle différence entre une rooming list et une réservation ?', a: ['La réservation bloque les chambres. La rooming list dit qui occupe chacune d’elles.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'de-excel-a-un-logiciel-agence-de-voyages',
  metaTitle: 'D’Excel à un logiciel d’agence de voyages : ce qui change',
  metaDescription:
    'Ce qu’une agence garde en général dans des tableurs, ce qui passe dans un logiciel de voyage et ce qui change quand tout est dans un seul système.',
  title: 'D’Excel à un logiciel d’agence de voyages',
  lead: 'Beaucoup d’agences travaillent avec des tableurs et des documents : une liste de produits, une liste de prestataires, les clients et un fichier par devis. Un logiciel de voyage réunit ces informations au même endroit, reliées à chaque voyage.',
  updated: '2026-11-14',
  card: 'Ce qui vit en général dans les tableurs, ce qui passe dans un logiciel et ce qui change.',
  blocks: [
    { type: 'h2', text: 'Ce qui vit en général dans les tableurs', id: 'tableurs' },
    {
      type: 'list',
      items: [
        'Les produits avec leur nom, leur prestataire, leur prix net et leur période de validité.',
        'Les prestataires avec leurs coordonnées et leurs conditions.',
        'Les clients avec leur langue et leur e-mail.',
        'Les règles de prix : marge, commission et TVA, souvent sous forme de formules.',
        'Les devis, souvent un fichier par version, et les textes d’e-mail habituels.'
      ]
    },
    { type: 'h2', text: 'Ce qui change dans un logiciel', id: 'changements' },
    {
      type: 'list',
      items: [
        'Les prix sont gardés par saison et par prestataire, et un devis les lit dans le catalogue.',
        'Les règles de prix se définissent une fois et s’appliquent à chaque ligne de devis.',
        'Chaque version de devis est gardée avec le voyage.',
        'Réservations, paiements et factures sont reliés au même voyage.',
        'Plusieurs personnes travaillent en même temps sur les mêmes clients et voyages.'
      ]
    },
    { type: 'h2', text: 'Ce qui reste dans les anciens fichiers', id: 'archive' },
    {
      type: 'p',
      text: 'L’historique des voyages passés reste souvent dans les anciens fichiers, comme archive. Ce qui passe dans le logiciel est ce qui resert : les tarifs en cours, les prestataires et les clients actifs.'
    },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Pendant l’installation, nous importons vos produits, prix et prestataires depuis vos tableurs. L’installation et l’import sont sans frais avec la facturation annuelle. La [page Changer](/switch) décrit les étapes.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Peut-on garder Excel à côté de Traviosoft ?', a: ['Oui. Traviosoft exporte un récapitulatif Excel, ou un zip des factures PDF de n’importe quelle période.'] },
        { q: 'Peut-on récupérer ses données ?', a: ['Oui. Si vous arrêtez Traviosoft, vous récupérez vos données dans des formats standard.'] }
      ]
    }
  ]
};

const aiTools: Article = {
  key: 'ai-assistant-mcp',
  kind: 'guide',
  slug: 'assistant-ia-mcp-agence-de-voyages',
  metaTitle: 'IA pour agences de voyages : assistant et connecteur MCP',
  metaDescription:
    'Comment une agence de voyages peut utiliser l’IA sur ses données : l’assistant intégré à Traviosoft et le connecteur MCP pour Claude, ChatGPT et d’autres IA.',
  title: 'L’IA dans votre agence de voyages',
  lead: 'Traviosoft fonctionne avec l’IA de deux façons. L’assistant intégré travaille dans l’application pour chaque personne qui l’utilise. Le connecteur MCP permet à l’outil d’IA que vous utilisez déjà, comme Claude ou ChatGPT, de lire les données de votre agence, et il vous demande votre accord avant de modifier quoi que ce soit.',
  updated: '2026-11-14',
  card: 'L’assistant intégré, le connecteur MCP pour Claude et ChatGPT, et comment vous gardez la main.',
  blocks: [
    { type: 'h2', text: 'L’assistant intégré', id: 'assistant' },
    {
      type: 'p',
      text: 'L’assistant se trouve dans Traviosoft et travaille avec les mêmes droits que la personne qui l’utilise. Demandez-lui ce qui vous attend aujourd’hui. Faites-lui préparer un devis depuis votre catalogue ou transformer la grille tarifaire d’un prestataire en prix catalogue. Il peut aussi cocher des tâches de réservation ou lister les paiements à venir. Il est en option dans les deux offres, avec des limites d’utilisation, et vous l’activez personne par personne.'
    },
    {
      type: 'p',
      text: 'Chaque changement qu’il propose attend votre accord ou peut être annulé. Avec le temps il apprend comment votre agence aime travailler, et votre équipe peut corriger ce qu’il a appris ligne par ligne.'
    },
    { type: 'h2', text: 'Le connecteur MCP', id: 'mcp' },
    {
      type: 'p',
      text: 'Le MCP (Model Context Protocol) est la façon standard de brancher un assistant d’IA sur un autre outil pour qu’il puisse y travailler. Avec le connecteur Traviosoft, votre outil d’IA peut retrouver un client, préparer un devis ou vous dire quels paiements sont en retard. Il travaille sur vos vraies données et non sur ce que vous collez dans la conversation. Il est inclus dans les deux offres.'
    },
    {
      type: 'list',
      items: [
        'Claude (application ou web) : Paramètres, Connecteurs, Ajouter un connecteur personnalisé, puis collez votre adresse Traviosoft.',
        'ChatGPT : Paramètres, Applications, Paramètres avancés, Mode développeur, puis créez une application avec la même adresse.',
        'Mistral (Le Chat) : Contexte, Connecteurs, Ajouter un connecteur, Connecteur MCP personnalisé, avec la même adresse.',
        'Les outils d’automatisation comme n8n peuvent aussi se connecter pour lancer des tâches automatiques.'
      ]
    },
    {
      type: 'p',
      text: 'L’outil d’IA vous envoie sur Traviosoft pour vous connecter. Vous choisissez Lecture seule, ou Lire et modifier, et s’il peut aussi supprimer.'
    },
    { type: 'h2', text: 'Vous gardez la main', id: 'controle' },
    {
      type: 'list',
      items: [
        'Le connecteur reste désactivé tant qu’un administrateur ne l’active pas.',
        'L’administrateur choisit qui peut connecter un outil d’IA.',
        'Un outil d’IA ne fait jamais plus que la personne qui l’a connecté ne peut faire dans l’application.',
        'Claude, ChatGPT et Mistral demandent à la personne avant chaque changement. Les suppressions, et les changements venant d’autres outils d’IA, attendent dans Traviosoft qu’une personne les approuve.',
        'Chaque action est enregistrée dans l’historique au nom de la personne qui a connecté l’outil.',
        'Chaque connexion peut être coupée immédiatement depuis Traviosoft.'
      ]
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Est-ce que ça fonctionne avec Gemini ?', a: ['Le connecteur fonctionne avec tout outil d’IA compatible MCP. Google prend en charge le MCP dans ses outils Gemini pour développeurs. La possibilité d’ajouter un connecteur personnalisé dépend de la version de Gemini.'] },
        { q: 'Le connecteur MCP est-il inclus dans mon offre ?', a: ['Oui. Il est inclus dans Classic et dans Premium. L’assistant intégré est une option dans les deux offres, avec des limites d’utilisation.'] },
        { q: 'L’IA voit-elle toutes nos données ?', a: ['Elle voit ce que voit la personne qui l’a connectée, et rien de plus. Un administrateur peut aussi n’autoriser que la lecture et bloquer tout changement.'] },
        { q: 'L’IA peut-elle envoyer des e-mails ?', a: ['Les devis et les factures partent vers les clients depuis Traviosoft. L’IA peut aussi écrire à un prestataire, et elle demande d’abord l’accord de la personne : une fois qu’elle l’autorise, elle envoie la demande de réservation ou de disponibilité.'] }
      ]
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, fromExcel, aiTools, ...posts, ...topicGuides, ...invoicingGuides];
