import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft : logiciel pour agences sur mesure et DMC',
  metaDescription:
    `Demandes, devis avec vos marges, réservations, programmes, paiements et factures au même endroit. Pour agences de voyages sur mesure et DMC. Dès ${PRICES.classic.yearly} EUR par mois, dans l’UE.`,
  title: 'Logiciel pour agences de voyages sur mesure et DMC',
  sub: 'Demandes, devis, réservations, paiements et factures, au même endroit.',
  proposal: {
    "agency": "Ruta Sur Viajes",
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
        "t": "Jour 2 · L’Alcázar et la cathédrale",
        "s": "Visite guidée le matin, après-midi libre dans le quartier de Santa Cruz."
      },
      {
        "t": "Jour 4 · Route vers Ronda",
        "s": "Remise de la voiture de location, 2 nuits au bord des gorges."
      }
    ],
    "total": "Total à régler",
    "vatIncl": "TVA incluse",
    "photo": "Séville",
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
        "t": "Alcázar et cathédrale",
        "s": "Votre guide : Lucía"
      }
    ]
  },
  tripTitle: "Le parcours d’un voyage dans Traviosoft",
  moments: [
    {
      "time": "Lundi, 09:12",
      "title": "La demande arrive",
      "body": "Toutes les demandes sont dans une seule liste, avec depuis combien de temps elles attendent et la suite à donner.",
      "go": "Voir les demandes",
      "job": "sell"
    },
    {
      "time": "Lundi, 11:40",
      "title": "Le devis, avec votre marge",
      "body": "Chaque ligne part du coût du prestataire, et vous voyez la marge du voyage avant de l’envoyer.",
      "go": "Voir les devis",
      "job": "sell"
    },
    {
      "time": "Mardi",
      "title": "Chaque réservation suivie",
      "body": "Quand le client accepte, chaque prestataire reçoit sa demande et sa réponse est enregistrée sur la ligne. Ce qui reste à faire est dans les tâches.",
      "go": "Voir les réservations",
      "job": "book"
    },
    {
      "time": "Avant le départ",
      "title": "Paiements et factures depuis le devis",
      "body": "Les échéances viennent du devis accepté. Le client paie depuis le lien de l’e-mail, et la facture reprend les mêmes lignes.",
      "go": "Voir les paiements",
      "job": "get-paid"
    }
  ],
  sitTitle: "Selon votre façon de travailler",
  sitLead: "Chaque agence a ses habitudes. Voici ce que fait Traviosoft dans les cas les plus courants.",
  situations: [
    {
      "t": "Je vends à des agences, pas au voyageur",
      "s": "Commissions, tarifs nets et l’agence qui apporte le client sur chaque devis.",
      "job": "sell"
    },
    {
      "t": "Je fais des groupes",
      "s": "Liste des voyageurs, rooming list et formulaire que chaque voyageur remplit lui-même.",
      "job": "book"
    },
    {
      "t": "Mes prestataires facturent en dollars ou en dirhams",
      "s": "Coûts dans leur devise, prix dans la vôtre, avec le taux du devis gardé.",
      "job": "sell"
    },
    {
      "t": "Je travaille avec des guides et des chauffeurs",
      "s": "Fiche de service envoyée au guide, et son paiement suivi avec le voyage.",
      "job": "book"
    },
    {
      "t": "Mes clients paient en plusieurs fois",
      "s": "Échéances prévues dans le devis, relances et paiement en ligne.",
      "job": "get-paid"
    },
    {
      "t": "Je facture au régime de la marge",
      "s": "La TVA est calculée sur votre marge, avec la mention du régime sur la facture.",
      "job": "get-paid"
    },
    {
      "t": "Mes tarifs changent selon la saison",
      "s": "Prix par saison, par âge ou par jour, et le devis prend le prix des dates du voyage.",
      "job": "sell"
    },
    {
      "t": "Nous avons plusieurs marques ou sociétés",
      "s": "Chacune a ses documents, ses mentions et sa numérotation de factures.",
      "job": "setup"
    }
  ],
  app: {
    "user": "LG",
    "lang": "FR",
    "nav": {
      "workspace": "Espace de travail",
      "dashboard": "Tableau de bord",
      "calendar": "Calendrier",
      "analytics": "Analytiques",
      "pipeline": "Pipeline",
      "requests": "Demandes",
      "quotes": "Devis",
      "orders": "Commandes",
      "finances": "Finances",
      "resources": "Ressources",
      "catalog": "Catalogue",
      "clients": "Clients",
      "providers": "Prestataires",
      "guide": "Démarrage Rapide"
    },
    "client": "Famille Martin",
    "trip": "Andalousie, 8 jours",
    "req": {
      "newBtn": "Nouvelle demande",
      "rows": [
        {
          "name": "Famille Martin",
          "msg": "Andalousie en mai, 2 adultes, hôtels de charme",
          "meta": "Site web · du 3 au 10 mai 2027",
          "badge": "Nouvelle · 12 min",
          "kind": "new",
          "ago": "09:12"
        },
        {
          "name": "Ana Ruiz",
          "msg": "Lisbonne et Porto, 10 jours",
          "meta": "E-mail · juin 2027",
          "badge": "Répondue",
          "kind": "ok",
          "ago": "Hier"
        },
        {
          "name": "Bertrand Lefèvre",
          "msg": "Maroc, groupe de 18",
          "meta": "Téléphone · octobre 2027",
          "badge": "Répondue",
          "kind": "ok",
          "ago": "8 janv."
        },
        {"name": "Hannah Weber", "msg": "Nord de l’Espagne en train, 12 jours", "meta": "Agence partenaire · septembre 2027", "badge": "Répondue", "kind": "ok", "ago": "7 janv."},
        {"name": "Pierre Dubois", "msg": "Séville le temps d’un week-end, 4 adultes", "meta": "Site web · avril 2027", "badge": "Répondue", "kind": "ok", "ago": "5 janv."}
      ]
    },
    "quote": {
      "sent": "Envoyé",
      "viewPdf": "Voir PDF",
      "startLabel": "Date de début",
      "start": "03/05/2027",
      "expiresLabel": "Expire le",
      "expires": "25/01/2027",
      "pax": "2 PAX",
      "tabs": [
        "Devis",
        "Paiements",
        "Envoi",
        "Historique"
      ],
      "linesTitle": "Lignes du devis",
      "vatRegimeLabel": "Régime TVA",
      "vatRegime": "Régime de la marge",
      "unitIncl": "/ unité TTC",
      "lines": [
        "Transfert privé, aéroport de Séville",
        "Hôtel à Séville, chambre double",
        "Alcázar et cathédrale, visite guidée",
        "Voiture de location, catégorie B",
        "Hôtel à Ronda, chambre double",
        "Hôtel à Grenade, chambre double",
        "Alhambra, visite guidée"
      ],
      "totalTitle": "Total TTC",
      "perPerson": "Prix par personne",
      "selling": "Prix de vente TTC",
      "cost": "Coût fournisseur TTC",
      "margin": "Marge brute",
      "vatMargin": "TVA sur la marge à déclarer"
    },
    "order": {
      "accepted": "Accepté",
      "bookingTitle": "Réservations",
      "bookingCount": "5 sur 7 confirmées",
      "providers": [
        "Traslados Giralda",
        "Hotel Sevilla Centro",
        "Lucía Romero, guide",
        "Autos Bética",
        "Hotel Ronda Tajo",
        "Hotel Granada Albaicín",
        "Patronato de la Alhambra"
      ],
      "states": {
        "confirmed": "Confirmé",
        "ref": "Confirmé · réf. 48213",
        "requested": "Commandé · en attente de confirmation",
        "toBook": "À réserver"
      },
      "tasksTitle": "Tâches",
      "tasks": [
        "Envoyer la confirmation au client",
        "Réserver les billets de l’Alhambra"
      ]
    },
    "pay": {
      "schedTitle": "Échéances planifiées",
      "deposit": "Acompte 30 %",
      "depositSub": "Carte, depuis le lien de l’e-mail",
      "balance": "Solde",
      "dueLabel": "Échéance :",
      "paid": "Payé",
      "upcoming": "En attente",
      "invTitle": "Factures",
      "invDeposit": "Acompte (Anticipo)",
      "invFinal": "Facture finale",
      "invPaid": "Payée",
      "invDraft": "Brouillon",
      "dates": [
        "12/01/2027",
        "03/04/2027"
      ]
    }
  },
  baTitle: 'Avant et après',
  beforeTitle: 'Aujourd’hui',
  beforeScraps: [
    { i: 'sheet', t: 'Tarifs_2026_FINAL_v3.xlsx' },
    { i: 'doc', t: 'Devis Martin.docx' },
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
  priceTitle: 'Tarifs',
  priceBody: 'Mise en place',
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
