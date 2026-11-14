import type { Article, ArticleBlock, Faq } from '../types';
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
    { type: 'h2', text: 'Si vous décidez de changer', id: 'changer' },
    { type: 'p', text: c.switching },
    { type: 'h2', text: 'Questions fréquentes', id: 'faq' },
    { type: 'faq', items: c.faq },
    { type: 'p', text: 'Pour voir Traviosoft avec un de vos voyages, la [page Démo](/demo) explique le déroulé de l’appel.' }
  ];
  return {
    key: c.key,
    kind: 'compare',
    slug: c.slug,
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    title: c.title,
    lead: c.lead,
    updated: UPDATED,
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
      'Excel et Word sont le point de départ de presque toutes les agences. Devis, marges, réservations et factures : quand un logiciel conçu pour les voyages vaut la peine.',
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
      ['Règles fiscales espagnoles', 'Mentions REAV et Veri*Factu avec QR, activables par pays', 'Paramétrées dans votre propre modèle'],
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
      'Inutile de quitter Excel d’un coup. Pendant la mise en place, nous importons vos produits, prix et fournisseurs depuis vos tableurs, sans frais d’installation ni d’import avec la facturation annuelle. Le plus simple est de terminer les voyages déjà ouverts dans vos fichiers et de lancer les nouvelles demandes dans Traviosoft. Le calendrier complet est sur la [page Changer](/switch), avec un guide pas à pas : "Passer d’Excel à un logiciel d’agence".',
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
    lead: 'Ezus est un logiciel français pour DMC bien établi, avec beaucoup de clients, des prix publics et un support en cinq langues. Traviosoft affiche un prix utilisateurs inclus et ajoute le REAV et Veri*Factu pour les agences en Espagne.',
    card: 'Deux outils aux prix publics : pour qui est chacun et ce qu’il inclut.',
    basis:
      'Les informations sur Ezus viennent de son site et d’annuaires publics, vérifiés le 3 novembre 2026. Les prix changent : consultez toujours les pages de tarifs actuelles. Les chiffres de clients d’Ezus sont ceux qu’il publie lui-même.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'DMC, réceptifs, tour-opérateurs et agences ; FIT, groupes et MICE'],
      ['Société', 'Né dans une agence sur mesure à Barcelone ; voir la page À propos', 'Paris, fondée en 2019'],
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
      'Votre agence est en Espagne et vous voulez les mentions REAV sur les factures et Veri*Factu avec QR intégrés.',
      'Vous travaillez surtout en espagnol et en français et voulez des documents et des modèles d’e-mail dans la langue du client.',
      'Vous préférez un outil construit autour du déroulé d’un voyage : demande, devis avec marge, réservation, paiement et facture.'
    ],
    switching:
      'Si vous utilisez Ezus et voulez changer, exportez d’abord vos produits, fournisseurs et clients. Nous importons produits, prix et fournisseurs depuis vos tableurs pendant la mise en place. Conseil pratique : changez hors haute saison et terminez les voyages ouverts là où ils sont. La [page Changer](/switch) détaille les étapes.',
    faq: [
      { q: 'Comment chacun est-il tarifé ?', a: [`Traviosoft Classic coûte ${PRICES.classic.yearly} EUR par mois en facturation annuelle, ${PRICES.usersIncluded} utilisateurs inclus, installation et import inclus. Ezus Professional coûte 75 EUR par utilisateur et par mois, avec un pack d’onboarding de 1 990 EUR qui comprend un déploiement accompagné. Vérifiez les pages de tarifs actuelles des deux.`] },
      { q: 'Ezus convient-il à l’Espagne ?', a: ['Oui. Ezus a un site et un support en espagnol. Traviosoft inclut en plus les mentions REAV et Veri*Factu avec QR pour les agences en Espagne.'] },
      { q: 'Puis-je essayer les deux ?', a: ['Les deux fonctionnent avec une démonstration. Le test le plus utile : apporter un vrai voyage à chacun et voir comment chacun construit le devis avec marge.'] }
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
      'Les informations sur GIAV viennent d’annuaires et de la presse du secteur. GIAV présente ses prix et ses offres lors d’une démonstration : nous décrivons donc son approche et vous suggérons de leur demander le reste. Les informations sur Traviosoft sont celles de notre site au 3 novembre 2026.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Gestion d’agences de voyages en Espagne, surtout agences de détail'],
      ['Prix', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Sur demande'],
      ['Connu pour', 'Devis avec marge par ligne, catalogue par saison, page de programme pour le client, REAV et Veri*Factu', 'Un long parcours auprès des agences de voyages en Espagne']
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
      'Avant de décider, demandez une démonstration à GIAV et à nous avec un de vos voyages, et posez les mêmes questions aux deux : comment se calcule la marge par ligne, comment s’enregistre la commission d’un partenaire, ce que voit le client et comment on facture avec le REAV. Si vous changez, nous importons produits, prix et fournisseurs depuis vos tableurs. Voir la [page Changer](/switch).',
    faq: [
      { q: 'Puis-je importer mes données depuis GIAV ?', a: ['Nous importons produits, prix et fournisseurs depuis des tableurs. Si vous exportez vos données de GIAV vers un tableur, vous pouvez les reprendre.'] },
      { q: 'Traviosoft convient-il à une agence de détail ?', a: ['Il est conçu pour les agences qui conçoivent et vendent des voyages sur mesure. Si votre activité est surtout la vente de produits catalogue de voyagistes, vérifiez d’abord qu’il correspond à ce que vous faites.'] },
      { q: 'Comment GIAV est-il tarifé ?', a: ['GIAV présente ses prix lors d’une démonstration. Demandez-leur un devis pour la taille de votre équipe.'] }
    ]
  },
  {
    key: 'vs-holded',
    slug: 'traviosoft-vs-holded',
    other: 'Holded',
    metaTitle: 'Traviosoft ou Holded pour une agence de voyages',
    metaDescription:
      'Holded est un logiciel de gestion pour PME ; Traviosoft est conçu pour le voyage. Sur quoi chacun se concentre, et comment une agence peut utiliser les deux ensemble.',
    title: 'Traviosoft ou Holded : logiciel de voyage ou ERP généraliste',
    lead: 'Holded est un logiciel de facturation, de comptabilité et de gestion pour PME, très répandu en Espagne. Traviosoft est construit autour du voyage. Beaucoup d’agences utilisent les deux : Traviosoft pour les voyages, Holded pour l’entreprise.',
    card: 'Un outil généraliste pour PME et un outil de voyage : ce que fait chacun.',
    basis:
      'Les informations sur Holded viennent de son site et de sa page tourisme et voyages, vérifiées le 9 novembre 2026. Holded change souvent ses offres et ses promotions : consultez sa page de tarifs. Les deux outils se concentrent sur des tâches différentes, la vraie question est donc souvent de savoir comment les combiner.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Indépendants et PME de tous secteurs, de 1 à plus de 100 personnes'],
      ['Prix publié', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Básico 34 EUR (2 utilisateurs), Estándar 69 EUR (4), Avanzado 115 EUR (7), Premium 229 EUR (15), hors TVA ; avec remises temporaires'],
      ['Cœur de métier', 'Le voyage : demandes, devis avec marge, réservations, programme, paiements et factures', 'L’entreprise : facturation, comptabilité, paie et banques'],
      ['Veri*Factu', 'Oui, avec QR', 'Oui, d’après son site'],
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
      'Votre agence applique le REAV et vous voulez les mentions sur chaque facture automatiquement.'
    ],
    switching:
      'Le plus sensé est de les faire cohabiter. Traviosoft gère le voyage, de la demande à la facture, et exporte un récapitulatif Excel ou un zip de factures PDF pour votre comptable. Décidez dans quel logiciel vous émettez les factures pour ne pas les numéroter à deux endroits, et demandez à votre comptable comment il veut recevoir les données. Détails sur la [page Changer](/switch).',
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
    title: 'Traviosoft ou Lemax : deux systèmes de gestion complets',
    lead: 'Lemax est un logiciel de plus de 30 ans, conçu pour les tour-opérateurs et DMC moyens et grands. Son offre Lemax GO s’adresse aux équipes à partir de 15 utilisateurs, avec un prix convenu avec chaque client. Traviosoft couvre tout le voyage, de la première demande à la dernière facture, avec des documents en cinq langues et un prix publié.',
    card: 'Deux systèmes complets : une plateforme établie et un seul flux de la demande à la facture avec prix publié.',
    basis:
      'Les informations sur Lemax viennent de son site et de la presse du secteur, vérifiées le 3 novembre 2026. Lemax convient de ses prix avec chaque client : nous écrivons "Sur demande". Ses chiffres de clients sont ceux qu’il affiche.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'Tour-opérateurs et DMC moyens et grands'],
      ['Société', 'Né dans une agence sur mesure à Barcelone ; voir la page À propos', 'Croatie, fondée en 1990'],
      ['Taille d’équipe', `Deux offres, ${PRICES.usersIncluded} utilisateurs inclus`, 'Lemax GO à partir de 15 utilisateurs'],
      ['Prix', `Classic à partir de ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Sur demande ; convenu avec chaque client avant la signature'],
      ['Déploiement', 'Installation et import sans frais avec la facturation annuelle', 'Annonce une mise en service "en 90 jours" pour Lemax GO'],
      ['Distribution et connexions', 'Connexions à votre site, votre comptabilité et vos outils d’IA (Premium)', 'Connexion aux fournisseurs, API de réservation et portail B2B, d’après son site']
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
      'Votre marché est l’Espagne et vous vendez en espagnol et en français, avec REAV et Veri*Factu.',
      'Vous voulez que nous importions vos produits, prix et fournisseurs depuis vos tableurs pendant la mise en place.'
    ],
    switching:
      'Si vous utilisez Lemax et souhaitez passer à Traviosoft, exportez vos produits et vos prix et demandez-nous comment les importer depuis vos tableurs. Changer en pleine saison est risqué : on le fait en général en basse saison. Voir la [page Changer](/switch).',
    faq: [
      { q: 'À qui s’adresse Lemax GO ?', a: ['Aux équipes de 15 utilisateurs ou plus, d’après son site, avec un déploiement annoncé "en 90 jours". Pour d’autres tailles d’équipe, demandez-leur ce qu’ils proposent.'] },
      { q: 'Comment Lemax est-il tarifé ?', a: ['Lemax convient du prix de l’offre et du déploiement avec chaque client avant la signature. Demandez-leur un devis.'] },
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
    lead: 'Tourwriter est un logiciel néo-zélandais réputé pour ses programmes très soignés, conçu pour les DMC de luxe et les concepteurs de voyages qui travaillent en anglais. Traviosoft affiche ses prix en euros, utilisateurs inclus, fonctionne en français et en espagnol, et gère le REAV et Veri*Factu.',
    card: 'Des programmes de luxe très soignés en anglais et un outil en euros, en français et en espagnol.',
    basis:
      'Les informations sur Tourwriter viennent de son site (pages offres et société), vérifiées le 3 novembre 2026. Ses prix sont des prix "à partir de" en dollars, par utilisateur, avec un devis pour chaque équipe : le total réel peut différer.',
    rows: [
      ['Conçu pour', 'Réceptifs, DMC et agences sur mesure', 'DMC de luxe et concepteurs de voyages, circuits FIT de plusieurs jours'],
      ['Société', 'Né dans une agence sur mesure à Barcelone ; voir la page À propos', 'Wellington (Nouvelle-Zélande), fondée en 2004'],
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
      'Votre agence est en Espagne et vous voulez le REAV et Veri*Factu intégrés.',
      'Vos clients parlent français ou espagnol et vous voulez devis et e-mails dans leur langue.',
      'Vous voulez l’installation et l’import inclus en facturation annuelle.'
    ],
    switching:
      'Si vous utilisez Tourwriter, exportez vos produits, prix et fournisseurs vers un tableur : nous les importons pendant la mise en place. En général, on termine les voyages en cours là où ils sont et on ouvre les nouvelles demandes dans Traviosoft. Plus d’étapes sur la [page Changer](/switch).',
    faq: [
      { q: 'Comment Tourwriter est-il tarifé ?', a: ['Ses offres démarrent à 99 USD par utilisateur et par mois (Starter) et 149 USD (Pro), avec des frais de démarrage uniques à partir de 1 199 USD qui couvrent la migration et la formation. Ils établissent un devis pour chaque équipe : confirmez le total avec eux.'] },
      { q: 'Dans quelles langues fonctionne chacun ?', a: ['Tourwriter fonctionne en anglais. Traviosoft fonctionne en français, anglais et espagnol, et envoie les documents dans la langue du client : français, anglais, espagnol, italien ou catalan.'] },
      { q: 'Puis-je essayer les deux ?', a: ['Les deux proposent une démonstration. Le test le plus utile : apporter un vrai voyage à chacun et comparer le programme que recevrait votre client.'] }
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
      head: ['Logiciel', 'Pour qui', 'Taille d’équipe', 'Prix', 'Langues', 'Fondation'],
      usRow: 0,
      rows: [
        ['Traviosoft', 'Réceptifs, DMC et agences sur mesure', `Deux offres, ${PRICES.usersIncluded} utilisateurs inclus`, `Classic ${PRICES.classic.yearly} EUR, Premium ${PRICES.premium.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus`, 'Documents en FR, EN, ES et plus', 'Voir la page À propos'],
        ['Ezus', 'DMC, réceptifs, tour-opérateurs et agences', 'Professional jusqu’à 10 utilisateurs ; Enterprise à partir de 30', '75 EUR par utilisateur et par mois (Professional) ; pack d’onboarding 1 990 EUR', 'Site et support en EN, FR, ES, IT, PT', '2019, Paris'],
        ['Tourplan', 'Tour-opérateurs et DMC établis', 'Sur demande', 'Sur demande', 'Site en anglais, espagnol et japonais', '1986, Nouvelle-Zélande'],
        ['Tourwriter', 'DMC de luxe et concepteurs de voyages', '1 à plus de 20 personnes selon l’offre', 'À partir de 99 USD par utilisateur et par mois ; frais de démarrage à partir de 1 199 USD', 'Anglais', '2004, Nouvelle-Zélande'],
        ['Lemax', 'Tour-opérateurs et DMC moyens et grands', 'Lemax GO à partir de 15 utilisateurs', 'Sur demande', 'Anglais', '1990, Croatie'],
        ['Kaptio', 'Grands opérateurs de circuits de plusieurs jours', 'Grands opérateurs', 'Sur demande', 'Anglais', '2012, Islande'],
        ['GIAV', 'Agences de voyages en Espagne, avec un long parcours auprès du détail', 'Sur demande', 'Sur demande', 'Espagnol', 'De longue date en Espagne'],
        ['Excel + Word', 'Toute agence qui débute', 'Une à trois personnes en pratique', 'La licence que vous avez déjà', 'Celle que vous écrivez', '1985 (Excel)']
      ]
    },
    { type: 'h2', text: 'Chaque outil et ses points forts', id: 'logiciels' },
    { type: 'h3', text: 'Traviosoft' },
    {
      type: 'p',
      text: 'Couvre tout le voyage : demandes, catalogue avec prix par saison, devis avec marge et commission, réservations, paiements et factures, avec REAV et Veri*Factu pour l’Espagne. Il affiche son prix, et l’installation et l’import sont inclus avec la facturation annuelle.'
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
      text: 'Logiciel de gestion d’agences de voyages présent de longue date en Espagne, surtout auprès des agences de détail. Il présente ses prix et ses fonctions lors d’une démonstration : s’il correspond à votre activité, demandez-leur en une.'
    },
    { type: 'h3', text: 'Excel + Word' },
    {
      type: 'p',
      text: 'Gratuit si vous avez déjà la licence, souple et connu de tous. Beaucoup d’agences commencent ici et passent à un logiciel dédié quand leurs voyages et leur équipe grandissent.'
    },
    { type: 'h2', text: 'Comment choisir', id: 'choisir' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Comptez combien de personnes utiliseront l’outil et vérifiez le nombre minimum d’utilisateurs de chaque option.',
        'Calculez le coût de la première année, pas seulement la mensualité : ajoutez les frais de démarrage et d’import de données.',
        'Vérifiez la langue des documents que reçoit votre client, pas seulement celle de l’écran.',
        'Si votre agence est en Espagne, demandez comment on facture avec le REAV et si l’outil est conforme à Veri*Factu.',
        'Demandez une démonstration avec un vrai voyage et chronométrez le temps pour obtenir un devis avec marge.',
        'Ne changez pas en pleine haute saison : terminez les voyages ouverts et lancez les nouveaux dans le nouvel outil.'
      ]
    },
    { type: 'h2', text: 'Questions fréquentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Quel est le meilleur logiciel pour un DMC ou une agence sur mesure ?', a: ['Cela dépend de votre façon de travailler et de votre marché. Pour gérer tout le voyage de la demande à la facture, avec un prix visible et une facturation espagnole, regardez Traviosoft et Ezus. Si vous vendez surtout en anglais et dans le luxe, regardez aussi Tourwriter.'] },
        { q: 'Combien coûte un logiciel pour DMC ?', a: [`Les prix publiés vont de ${PRICES.classic.yearly} EUR par mois pour ${PRICES.usersIncluded} utilisateurs (Traviosoft Classic) à 75 EUR par utilisateur et par mois plus un pack d’onboarding de 1 990 EUR (Ezus). Tourplan, Lemax et Kaptio donnent leurs prix sur demande.`] },
        { q: 'Faut-il un logiciel spécifique au voyage ou un ERP généraliste suffit-il ?', a: ['Un ERP généraliste est conçu pour la comptabilité ; un logiciel de voyage ajoute des devis avec marge par prestation et une liste de réservations par voyage. Beaucoup d’agences utilisent les deux.'] }
      ]
    },
    { type: 'p', text: 'Pour voir Traviosoft avec un de vos voyages, la [page Démo](/demo) explique le déroulé de l’appel.' }
  ]
};

const quote: Article = {
  key: 'quote-with-margins',
  kind: 'guide',
  slug: 'devis-voyage-sur-mesure-avec-marge',
  metaTitle: 'Devis de voyage sur mesure avec marge : guide et exemple',
  metaDescription:
    'Comment chiffrer un voyage sur mesure : tarifs nets, coefficient et marge, commission et prix par personne, avec un exemple chiffré pas à pas.',
  title: 'Comment faire un devis de voyage sur mesure avec marge',
  lead: 'Pour chiffrer un voyage sur mesure, additionnez les tarifs nets et divisez par un moins la marge souhaitée. Avec un coût de 1 000 EUR et une marge de 25 % sur le prix de vente, le prix est de 1 333,33 EUR. S’il y a une commission, soustrayez-la aussi au diviseur.',
  updated: UPDATED,
  card: 'Tarif net, coefficient, marge et commission : le calcul expliqué avec un exemple concret.',
  blocks: [
    {
      type: 'p',
      text: 'Un devis sur mesure comporte trois couches : ce que vous facturent les fournisseurs (le tarif net), ce que vous voulez gagner (la marge) et ce que vous versez à celui qui apporte la vente (la commission). L’erreur la plus courante est de confondre coefficient et marge. Ce guide les sépare et déroule les chiffres.'
    },
    { type: 'h2', text: 'Tarif net, coefficient et marge', id: 'notions' },
    {
      type: 'p',
      text: 'Le tarif net est ce que le fournisseur vous facture, sans rien ajouter. Le coefficient (markup) se calcule sur ce coût. La marge se calcule sur le prix de vente. Ce sont deux pourcentages différents pour le même euro gagné. Avec un coût de 1 000 EUR :'
    },
    {
      type: 'table',
      head: ['Coefficient sur le coût', 'Prix de vente', 'Vous gagnez', 'Marge sur le prix'],
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
      text: 'Si vous voulez une marge de 25 % sur le prix de vente, le prix est de 1 000 / (1 - 0,25) = 1 333,33 EUR. Votre marge est de 333,33 EUR. Par personne, 666,67 EUR. Si vous aviez ajouté 25 % au coût, le prix serait de 1 250 EUR et votre marge réelle de 20 % seulement.'
    },
    { type: 'h2', text: 'Quand il y a une commission', id: 'commission' },
    {
      type: 'p',
      text: 'Imaginons qu’une autre agence vous apporte la vente et que vous lui versiez 10 % du prix. Si vous laissez le prix à 1 333,33 EUR, la commission est de 133,33 EUR et votre marge tombe à 200 EUR, soit 15 %. Pour garder 25 %, soustrayez la commission au diviseur : 1 000 / (1 - 0,25 - 0,10) = 1 538,46 EUR.'
    },
    {
      type: 'list',
      items: [
        'Prix au client : 1 538,46 EUR (769,23 EUR par personne).',
        'Commission de 10 % : 153,85 EUR.',
        'Votre marge de 25 % : 384,62 EUR.',
        'Coût net : 1 000,00 EUR. (Les chiffres comportent des arrondis au centime.)'
      ]
    },
    { type: 'h2', text: 'Erreurs courantes', id: 'erreurs' },
    {
      type: 'list',
      items: [
        'Ajouter un pourcentage au coût et l’appeler marge.',
        'Oublier la commission en donnant un prix et le découvrir au moment de la payer.',
        'Utiliser le tarif d’une autre saison : vérifiez les dates de chaque prix.',
        'Arrondir à la baisse le prix par personne dans un grand groupe : multipliez par le nombre de voyageurs avant d’arrondir.',
        'Ne pas indiquer de date de validité sur le devis.',
        'Mélanger des prix TTC et hors taxes dans la même somme. En Espagne, la TVA des agences peut en plus suivre le régime REAV, traité dans un guide en espagnol.'
      ]
    },
    {
      type: 'callout',
      text: 'Dans Traviosoft, vous définissez une fois vos règles de prix (marge, TVA et commission) et chaque ligne de chaque devis les applique, avec le prix par personne et le total que voit le client.'
    },
    { type: 'h2', text: 'Questions fréquentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Quelle marge appliquer ?', a: ['Il n’y a pas de chiffre valable pour tous. Cela dépend de votre marché, de vos coûts fixes et de la concurrence. L’essentiel est un pourcentage que vous connaissez et appliquez de la même façon sur tous les devis.'] },
        { q: 'La marge se calcule-t-elle par prestation ou par voyage ?', a: ['Vous pouvez faire les deux. Une marge différente par prestation (plus sur les transferts, moins sur l’hôtel) donne plus de contrôle, mais demande des règles claires pour éviter les erreurs.'] }
      ]
    }
  ]
};

const rooming: Article = {
  key: 'rooming-list',
  kind: 'guide',
  slug: 'rooming-list-groupes-mice',
  metaTitle: 'Rooming list pour groupes et MICE : modèle et étapes',
  metaDescription:
    'Comment préparer une rooming list pour un groupe ou un événement MICE : colonnes du modèle, exemple, étapes et erreurs qui créent des problèmes à la réception.',
  title: 'Comment préparer une rooming list pour un groupe ou un événement MICE',
  lead: 'Une rooming list indique à l’hôtel qui dort dans quelle chambre, avec le type de chambre, les dates et les demandes. Elle doit être complète avant la date limite du contrat. Colonnes de base : numéro de chambre, type, noms, arrivée, départ et remarques.',
  updated: UPDATED,
  card: 'Les colonnes du modèle, les étapes et les erreurs les plus fréquentes d’une rooming list.',
  blocks: [
    {
      type: 'p',
      text: 'Pour un groupe, l’hôtel bloque un lot de chambres et doit savoir comment il se répartit. Une rooming list propre évite les files à la réception, les mauvais lits et les frais pour chambres non utilisées. Ce guide vous donne les colonnes et un ordre de travail.'
    },
    { type: 'h2', text: 'Les colonnes du modèle', id: 'colonnes' },
    {
      type: 'table',
      head: ['Colonne', 'Quoi écrire', 'Exemple'],
      rows: [
        ['N° de chambre', 'Un numéro d’ordre ; l’hôtel attribue le vrai', '1'],
        ['Type de chambre', 'Single, double, twin ou triple', 'Twin'],
        ['Client 1', 'Nom et prénom comme sur le passeport', 'Marta Ruiz Soler'],
        ['Client 2', 'Idem, s’ils partagent', 'Pedro Vidal Mas'],
        ['Arrivée', 'Date d’arrivée', '12/05/2027'],
        ['Départ', 'Date de départ', '15/05/2027'],
        ['Nuits', 'Calculées à partir des dates', '3'],
        ['Formule', 'Chambre seule, petit-déjeuner, demi-pension', 'Petit-déjeuner'],
        ['Arrivée (heure)', 'Heure ou vol, si cela compte pour une arrivée anticipée', 'Vol 10h40'],
        ['Demandes', 'Régimes, accessibilité, lit d’appoint, étage élevé', 'Sans gluten'],
        ['Société ou groupe', 'Utile s’il y a plusieurs factures', 'Équipe commerciale']
      ]
    },
    {
      type: 'p',
      text: 'Un exemple de taille : un groupe de 22 personnes se répartit en 9 chambres twin (18 personnes) et 4 chambres single, soit 13 chambres. Vérifiez toujours que le total de personnes de la liste correspond au groupe.'
    },
    { type: 'h2', text: 'Comment la préparer, étape par étape', id: 'etapes' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Relisez le contrat de l’hôtel pour la date limite d’envoi de la rooming list et la date de libération du bloc. C’est souvent quelques semaines avant l’arrivée ; confirmez-le dans votre contrat.',
        'Demandez à chaque participant, ou à la société organisatrice, nom complet, dates, avec qui il partage et demandes particulières.',
        'Remplissez le modèle, une ligne par chambre, et vérifiez que les noms correspondent au document de voyage.',
        'Comptez chambres et personnes et comparez avec le bloc réservé.',
        'Envoyez la liste à l’hôtel et demandez une confirmation écrite.',
        'Conservez la version envoyée. Chaque changement ultérieur est une nouvelle version datée.'
      ]
    },
    { type: 'h2', text: 'Erreurs qui posent problème', id: 'erreurs' },
    {
      type: 'list',
      items: [
        'Noms avec fautes ou sans nom de famille, qui ne correspondent plus à la réservation de vol.',
        'Ne pas savoir si deux personnes veulent un lit double ou deux lits.',
        'Envoyer la liste en retard et perdre des chambres du bloc.',
        'Changements de dernière minute donnés par téléphone et non par écrit.',
        'Oublier le guide, le chauffeur ou l’organisateur, qui ont aussi besoin d’une chambre.'
      ]
    },
    { type: 'h2', text: 'Questions fréquentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Quand faut-il envoyer la rooming list ?', a: ['Quand le contrat de l’hôtel le prévoit. En cas de doute, posez la question par écrit à l’hôtel au moment de confirmer le bloc.'] },
        { q: 'Que faire si des noms changent au dernier moment ?', a: ['Envoyez à l’hôtel une nouvelle version avec la date et indiquez ce qui change. Évitez de prévenir uniquement par téléphone.'] },
        { q: 'Le même modèle convient-il à un petit groupe ?', a: ['Oui. Pour de petits groupes, vous pouvez retirer des colonnes, mais gardez les noms, le type de chambre et les dates.'] }
      ]
    }
  ]
};

const fromExcel: Article = {
  key: 'from-excel',
  kind: 'guide',
  slug: 'de-excel-a-un-logiciel-agence-de-voyages',
  metaTitle: 'Passer d’Excel à un logiciel d’agence de voyages',
  metaDescription:
    'Comment faire passer une agence de voyages d’Excel à un logiciel : quoi préparer, dans quel ordre et quand attendre, sans perdre de données.',
  title: 'Passer d’Excel à un logiciel sans bloquer votre saison',
  lead: 'Pour passer d’Excel à un logiciel, nettoyez d’abord votre catalogue, vos fournisseurs et vos clients, importez ces trois listes, puis lancez les nouvelles demandes dans le logiciel pendant que vous terminez les voyages ouverts dans vos fichiers. Faites-le hors haute saison.',
  updated: UPDATED,
  card: 'Quoi préparer, dans quel ordre, et quand attendre avant de quitter vos tableurs.',
  blocks: [
    {
      type: 'p',
      text: 'La crainte habituelle est de perdre des données ou de ne plus pouvoir travailler pendant une semaine. On l’évite en changeant par étapes : il ne s’agit pas de tout déplacer un lundi, mais d’importer ce qui est stable (catalogue, fournisseurs, clients) et de commencer par ce qui est nouveau.'
    },
    { type: 'h2', text: 'Ce qu’il faut préparer d’abord', id: 'preparer' },
    {
      type: 'list',
      items: [
        'Une liste de produits avec nom, fournisseur, prix net et période de validité.',
        'Une liste de fournisseurs avec contact et conditions.',
        'Une liste de clients sans doublons, avec langue et e-mail.',
        'Vos règles de prix : marge, commission, TVA et application éventuelle du REAV.',
        'Un modèle de devis à conserver et vos textes d’e-mail habituels.'
      ]
    },
    { type: 'h2', text: 'L’ordre recommandé', id: 'ordre' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Nettoyez les listes dans Excel : supprimez les doublons, uniformisez les noms et complétez les prix manquants.',
        'Définissez vos règles de prix une seule fois et vérifiez avec un ancien devis que vous obtenez le même résultat.',
        'Importez produits, prix et fournisseurs. Chez Traviosoft, nous le faisons pendant la mise en place, depuis vos tableurs, sans frais avec la facturation annuelle.',
        'Importez les clients et contrôlez les doublons.',
        'Faites un voyage test de bout en bout : demande, devis, réservation, paiement et facture.',
        'Commencez à y enregistrer les nouvelles demandes et terminez les voyages ouverts dans vos fichiers.',
        'Quand le dernier ancien voyage est clos, archivez les fichiers Excel.'
      ]
    },
    { type: 'h2', text: 'Quand attendre', id: 'attendre' },
    {
      type: 'p',
      text: 'Si vous êtes en pleine haute saison, repoussez le changement. Une équipe qui apprend un outil tout en servant des voyages fait des erreurs. Le meilleur moment est le début de la basse saison, avec le temps de tester sur un vrai voyage.'
    },
    { type: 'h2', text: 'Ce qu’il n’est pas nécessaire de déplacer', id: 'ignorer' },
    {
      type: 'p',
      text: 'Inutile de charger tout l’historique des voyages passés. Gardez les anciens fichiers comme archive de consultation et ne reprenez que ce que vous réutiliserez : tarifs en vigueur, fournisseurs actifs et clients avec qui vous continuerez à travailler. La [page Changer](/switch) propose un calendrier plus détaillé.'
    },
    { type: 'h2', text: 'Questions fréquentes', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Combien de temps dure le passage ?', a: ['Cela dépend de l’ordre de vos fichiers. La préparation des listes est généralement la partie la plus longue ; l’import lui-même, nous le faisons pendant la mise en place.'] },
        { q: 'Puis-je revenir à Excel ?', a: ['Oui. Si vous arrêtez Traviosoft, vous récupérez vos données dans des formats standard.'] },
        { q: 'Et si mes fichiers sont très désordonnés ?', a: ['Commencez par le minimum : produits et prix en vigueur. Le reste peut se compléter au fil de l’eau.'] }
      ]
    }
  ]
};

export const articles: Article[] = [best, ...comparisons, quote, rooming, fromExcel];
