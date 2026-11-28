import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Logiciel pour agences de voyages sur mesure et DMC',
  metaDescription:
    `Demandes, devis avec vos marges, réservations, programmes, paiements et factures au même endroit, pour les agences de voyages sur mesure et les DMC.`,
  title: 'Logiciel pour agences de voyages sur mesure et DMC',
  sub: 'Demandes, devis, réservations, paiements et factures, au même endroit.',
  proposal: {
    "agency": "Votre agence",
    "kind": "Proposition de voyage",
    "trip": "Andalousie, 8 jours",
    "meta": [
      "2 voyageurs",
      "8 jours",
      "du 3 au 10 mai 2027"
    ],
    "days": [
      {
        "t": "Jour 1 · Séville",
        "s": "Accueil à l’aéroport et transfert à votre hôtel du centre historique, pour 3 nuits."
      },
      {
        "t": "Jour 2 · Cordoue",
        "s": "Visite guidée de la Mosquée-Cathédrale, retour à Séville le soir."
      },
      {
        "t": "Jour 4 · Route vers Ronda",
        "s": "Remise de la voiture de location, 2 nuits au bord des gorges."
      }
    ],
    "total": "Total à régler",
    "vatIncl": "TVA incluse",
    "stops": [
      {
        "day": "Jour 1 · Lundi 3 mai",
        "k": "Transfert",
        "t": "Transfert aéroport de Séville",
        "s": "Point de rendez-vous : sortie des arrivées"
      },
      {
        "k": "Hébergement",
        "t": "Hôtel du centre historique de Séville",
        "s": "Départ le 6 mai",
        "link": "Ouvrir dans Maps"
      },
      {
        "day": "Jour 2 · Mardi 4 mai",
        "k": "Activité",
        "t": "Mosquée-Cathédrale de Cordoue",
        "s": "Votre guide : Valentina"
      }
    ]
  },
  tripTitle: "Le parcours d’un voyage dans Traviosoft",
  moments: [
    {"rec": "Andalousie · 2 voyageurs", "title": "La demande", "body": "Elle arrive dans la liste des demandes, avec depuis combien de temps elle attend et la suite à donner.", "go": "Voir les demandes", "job": "sell#requests"},
    {"rec": "Marge {margin} EUR", "title": "Le devis", "body": "Chaque ligne part du coût du prestataire. Vous voyez votre marge sur le voyage avant d’envoyer le devis.", "go": "Voir les devis", "job": "sell#quotes"},
    {"rec": "Hôtel à Séville : confirmé", "title": "Les réservations", "body": "Quand le client accepte, chaque prestataire reçoit sa demande de réservation, et sa réponse est gardée avec le voyage.", "go": "Voir les réservations", "job": "book#order"},
    {"rec": "Acompte {deposit} EUR : payé", "title": "Les paiements", "body": "Les échéances viennent du devis accepté. Le client paie depuis le lien de l’e-mail.", "go": "Voir les paiements", "job": "get-paid#schedule"},
    {"rec": "Facture finale : {total} EUR", "title": "La facture", "body": "Elle part du devis accepté, avec les mêmes montants.", "go": "Voir les factures", "job": "get-paid#invoices"}
  ],
  sitTitle: "Selon votre façon de travailler",
  situations: [
    {
      "t": "Je vends à des agences, pas au voyageur",
      "s": "Commissions, tarifs nets et l’agence qui apporte le client sur chaque devis.",
      "job": "sell#partners"
    },
    {
      "t": "Je fais des groupes",
      "s": "Liste des voyageurs, rooming list et formulaire que chaque voyageur remplit lui-même.",
      "job": "book#groups"
    },
    {
      "t": "Mes prestataires facturent en dollars ou en dirhams",
      "s": "Coûts dans leur devise, prix dans la vôtre. Chaque devis garde son taux de change.",
      "job": "setup#currencies"
    },
    {
      "t": "Je travaille avec des guides et des chauffeurs",
      "s": "Le guide reçoit le détail de la journée par e-mail, et ce que vous lui devez reste avec le voyage.",
      "job": "book#suppliers"
    },
    {
      "t": "Mes clients paient en plusieurs fois",
      "s": "Échéances prévues dans le devis, relances et paiement en ligne.",
      "job": "get-paid#schedule"
    },
    {
      "t": "Je facture au régime de la marge",
      "s": "La TVA est calculée sur votre marge, avec la mention du régime sur la facture.",
      "job": "setup#country"
    },
    {
      "t": "Mes tarifs changent selon la saison",
      "s": "Prix par saison, par âge ou par jour, et le devis prend le prix des dates du voyage.",
      "job": "sell#catalogue"
    },
    {
      "t": "Nous avons plusieurs marques ou sociétés",
      "s": "Chacune a son logo, ses documents et ses numéros de facture.",
      "job": "setup#brands"
    }
  ],
  baTitle: 'Avant et après',
  beforeTitle: 'Aujourd’hui',
  beforeScraps: [
    { i: 'sheet', t: 'Tarifs_2026_FINAL_v3.xlsx' },
    { i: 'doc', t: 'Devis Lefèvre.docx' },
    { i: 'chat', t: 'WhatsApp : « l’hôtel a confirmé ? »' },
    { i: 'bank', t: 'Acompte ? vérifier la banque' },
    { i: 'book', t: 'Numéros de facture dans un cahier' },
    { i: 'mail', t: '42 e-mails non lus' },
    { i: 'sheet', t: 'Rooming_list_Müller (2).xlsx' },
    { i: 'phone', t: 'Rappeler le guide' },
    { i: 'note', t: 'Qui a envoyé le devis ?' },
    { i: 'pdf', t: 'Voucher_final_FINAL.pdf' },
    { i: 'calc', t: 'Marge : à recalculer' },
    { i: 'mail', t: 'RE : RE : RE : disponibilités' }
  ],
  afterTitle: 'Avec Traviosoft',
  afterBody:
    'La demande, le devis, les réservations, les paiements et les factures sont sur le même voyage, et toute l’équipe voit la même chose.',
  setupLine: 'Nous le mettons en place avec vous et formons votre équipe en visio.',
  priceTitle: 'Tarifs',
  priceBody: 'Mise en place et accompagnement',
  priceImport: 'et import de vos tableurs',
  priceFree: 'offerts*',
  priceFreeNote: '* Avec la facturation annuelle. Offre à durée limitée.',
  extraUserLine: `Utilisateur supplémentaire : ${PRICES.extraUser.classic.yearly} EUR (Classic) ou ${PRICES.extraUser.premium.yearly} EUR (Premium) par mois*`,
  coin1: 'EUR/mois* · Classic',
  coin2: 'EUR/mois* · Premium',
  coinUsers: `${PRICES.usersIncluded} utilisateurs`,
  priceNote: '* Par mois, facturation annuelle, hors TVA. Tous les détails sur la page Tarifs.',
  priceLink: 'Comparer les offres',
  facts: [
    { k: 'Prix', v: `Dès ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus` },
    { k: 'Pour', v: 'Agences sur mesure et DMC' },
    { k: 'Données', v: 'Un espace privé par agence, hébergé dans l’UE' },
    { k: 'Langues', v: 'Documents en espagnol, catalan, anglais, français et italien' }
  ]
};
