import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Tarifs : Classic dès ${PRICES.classic.yearly} EUR par mois, Premium dès ${PRICES.premium.yearly} EUR | Traviosoft`,
  metaDescription:
    `Deux offres pour les agences de voyages sur mesure et les DMC. Classic gère toute l’agence dès ${PRICES.classic.yearly} EUR par mois ; Premium ajoute les équipes, les devises, les achats, plusieurs marques et l’assistant. ${PRICES.usersIncluded} utilisateurs inclus, mise en place offerte en annuel.`,
  title: 'Tarifs',
  lead: 'Classic couvre toute l’agence, de la première demande à la dernière facture. Premium ajoute les équipes, les autres devises, les achats, plusieurs marques et les connexions.',
  yearly: 'Annuel',
  monthly: 'Mensuel',
  yearlyNote: 'Prix par mois, hors TVA.',
  plans: [
    {
      id: 'classic',
      name: 'Classic',
      users: `${PRICES.usersIncluded} utilisateurs inclus`,
      yearly: String(PRICES.classic.yearly),
      monthly: String(PRICES.classic.monthly),
      priceNote: { yearly: `Utilisateur supplémentaire : ${PRICES.extraUser.yearly} EUR par mois`, monthly: `Utilisateur supplémentaire : ${PRICES.extraUser.monthly} EUR par mois` },
      lines: [
        { text: 'Demandes et devis avec votre marge et votre commission' },
        { text: 'Catalogue avec prix par saison' },
        { text: 'Agences partenaires et relevés de commission' },
        { text: 'Page de proposition et programme jour par jour, avec votre logo et vos couleurs' },
        { text: 'Voyages confirmés et réservations, avec les e-mails des prestataires classés sur le voyage' },
        { text: 'Fiches de service' },
        { text: 'Groupes : listes de voyageurs, lien vers un formulaire et rooming lists' },
        { text: 'Échéanciers, liens de paiement et rappels' },
        { text: 'Factures et avoirs, selon les règles fiscales de votre pays' },
        { text: 'Tableau de bord' },
        { text: 'Documents dans la langue du client' }
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} utilisateurs inclus`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: { yearly: `Utilisateur supplémentaire : ${PRICES.extraUser.yearly} EUR par mois`, monthly: `Utilisateur supplémentaire : ${PRICES.extraUser.monthly} EUR par mois` },
      hot: true,
      lines: [
        { text: 'Tout Classic, et en plus :' },
        { text: 'Équipes et rôles' },
        { text: 'Toutes les devises, avec des taux de change quotidiens' },
        { text: 'Demandes de disponibilité et bons de commande aux prestataires' },
        { text: 'Plusieurs marques et sociétés dans un compte' },
        { text: 'Export comptable' },
        { text: 'L’assistant intégré, et la connexion de vos propres outils d’IA' },
        { text: 'Connexions à votre site et à vos autres logiciels' }
      ]
    }
  ],
  includedTitle: 'Les deux offres incluent',
  included: [
    `${PRICES.usersIncluded} utilisateurs, et davantage quand vous en avez besoin`,
    `Mise en place et import des données, offerts en annuel (${PRICES.setupMonthly} EUR une fois en mensuel)`,
    'Support par e-mail en espagnol, anglais et français',
    'Hébergement dans l’Union européenne, un espace séparé par agence',
    'Vos données exportables en formats standard',
    'Les nouvelles fonctions de votre offre dès leur sortie'
  ],
  faq: [
    {
      q: 'De quelle offre ai-je besoin ?',
      a: ['Classic gère une agence entière : demandes, devis, partenaires, réservations, groupes, paiements et factures. Premium ajoute des fonctions comme des équipes avec leurs propres clients, la vente dans d’autres devises et les bons de commande aux prestataires.']
    },
    {
      q: 'Comment est-ce facturé ?',
      a: ['À l’année ou au mois, au choix. L’annuel revient moins cher par mois et inclut la mise en place. Le mensuel s’arrête à la fin de n’importe quel mois.']
    },
    {
      q: 'Les prix sont-ils hors TVA ?',
      a: ['Oui. La TVA s’ajoute sur la facture selon votre pays et le statut de votre société.']
    },
    {
      q: 'Et si j’ajoute un utilisateur ?',
      a: [`Les deux offres incluent ${PRICES.usersIncluded} utilisateurs. Chaque utilisateur supplémentaire coûte ${PRICES.extraUser.yearly} EUR par mois en annuel, ${PRICES.extraUser.monthly} EUR en mensuel.`]
    },
    {
      q: 'Puis-je changer d’offre ?',
      a: ['Oui. Passez de Classic à Premium à tout moment : les nouvelles fonctions sont là le jour même. Vos données restent telles quelles.']
    },
    {
      q: 'Puis-je résilier ?',
      a: ['Oui. Les offres mensuelles s’arrêtent à la fin du mois de la résiliation. Les offres annuelles vont jusqu’au bout de l’année payée et s’arrêtent là.']
    },
    {
      q: 'Puis-je récupérer mes données en partant ?',
      a: ['Oui. Vous récupérez vos données dans des formats standard.']
    },
    {
      q: 'Que comprend la mise en place ?',
      a: [`Nous importons votre catalogue, vos clients, vos prestataires et vos voyages en cours depuis vos tableurs, et nous configurons votre marque et vos règles de prix. Elle est offerte en annuel et coûte ${PRICES.setupMonthly} EUR une seule fois en mensuel.`]
    }
  ]
};

export const example: SiteContent['example'] = {
  metaTitle: 'Voyages exemples : un couple, un groupe et un safari | Traviosoft',
  metaDescription:
    'Ouvrez trois voyages exemples construits dans Traviosoft, un couple en Andalousie, un groupe incentive à Porto et un safari au Kenya et en Tanzanie : le programme jour par jour et le devis tels que les voit le client. Données inventées, sans inscription.',
  title: 'Voyages exemples',
  lead: 'Trois voyages exemples construits dans Traviosoft. Le programme et le devis tels que les voit le client ou l’agence partenaire.',
  tabs: { itinerary: 'Itinéraire', quote: 'Devis' },
  pick: 'Choisissez un voyage',
  trips: [
  {
    id: 'andalucia',
    label: 'Andalousie, 8 jours',
    kind: 'Un couple, en vente directe',
    name: 'Andalousie, 8 jours',
    dates: 'Du 12 au 19 avril 2027',
    travellers: 'Client : Laura & Tom, 2 adultes',
    agency: 'Votre agence',
    days: [
      {
        day: 'Jour 1',
        title: 'Arrivée à Séville',
        body: 'Un chauffeur vous accueille à l’aéroport et vous conduit à l’hôtel. La soirée est libre.',
        items: ['Transfert privé depuis l’aéroport, 14:30', 'Hôtel Alfonso XIII, enregistrement dès 15:00', 'Idées de dîner dans le quartier de Santa Cruz']
      },
      {
        day: 'Jour 2',
        title: 'Séville, la vieille ville',
        body: 'La cathédrale, la Giralda et l’Alcázar avec un guide local, puis l’après-midi à votre rythme.',
        items: ['Guide privé, de 09:30 à 13:00', 'Billets pour l’Alcázar avec horaire d’entrée fixe', 'Après-midi libre']
      },
      {
        day: 'Jour 3',
        title: 'Séville, journée libre et flamenco',
        body: 'Une journée pour le fleuve, les marchés et le quartier de Triana. Le soir, un petit spectacle de flamenco.',
        items: ['Spectacle de flamenco à Triana, 20:30', 'Hôtel Alfonso XIII']
      },
      {
        day: 'Jour 4',
        title: 'Vers Cordoue',
        body: 'Route le matin jusqu’à Cordoue. La Mezquita avec un guide, puis l’ancien quartier juif à pied.',
        items: ['Transfert privé de Séville à Cordoue, 09:00', 'Guide privé à la Mezquita, 12:00', 'Hôtel dans la vieille ville']
      },
      {
        day: 'Jour 5',
        title: 'Vers Grenade',
        body: 'Route vers Grenade à travers les oliveraies. Le temps de vous installer et de monter à l’Albaicín au coucher du soleil.',
        items: ['Transfert privé de Cordoue à Grenade, 10:00', 'Hôtel avec vue sur l’Alhambra', 'Coucher de soleil au Mirador de San Nicolás']
      },
      {
        day: 'Jour 6',
        title: 'L’Alhambra',
        body: 'Les palais, le Generalife et les jardins avec un guide privé. Le reste de la journée est à vous.',
        items: ['Guide privé, Alhambra, de 09:00 à 13:00', 'Entrée aux palais nasrides à 09:30', 'Après-midi libre']
      },
      {
        day: 'Jour 7',
        title: 'Vers Ronda',
        body: 'À travers la montagne jusqu’à Ronda, la ville au-dessus des gorges. Une promenade jusqu’au Pont Neuf avant le dîner.',
        items: ['Transfert privé de Grenade à Ronda, 10:30', 'Hôtel avec vue sur les gorges', 'Dîner dans un restaurant local']
      },
      {
        day: 'Jour 8',
        title: 'Départ de Málaga',
        body: 'Un transfert jusqu’à l’aéroport de Málaga, calé sur l’heure de votre vol.',
        items: ['Transfert privé de Ronda à l’aéroport de Málaga, 09:00', 'Libération de la chambre avant 11:00']
      }
    ],
    quoteLines: [
      { name: 'Séville, 3 nuits', detail: 'Hôtel Alfonso XIII, chambre double, petit-déjeuner', price: '1 980 EUR' },
      { name: 'Cordoue, 1 nuit', detail: 'Hôtel dans la vieille ville, chambre double, petit-déjeuner', price: '280 EUR' },
      { name: 'Grenade, 2 nuits', detail: 'Hôtel avec vue sur l’Alhambra, chambre double, petit-déjeuner', price: '840 EUR' },
      { name: 'Ronda, 1 nuit', detail: 'Hôtel avec vue sur les gorges, chambre double, petit-déjeuner', price: '360 EUR' },
      { name: 'Guides privés', detail: 'Alhambra 420 EUR, Mezquita 180 EUR (billets d’entrée compris dans le prix)', price: '600 EUR' },
      { name: 'Transferts privés', detail: 'Aéroport, Cordoue, Grenade, Ronda et aéroport de Málaga', price: '560 EUR' },
      { name: 'Spectacle de flamenco', detail: 'Petite salle à Triana, 2 billets', price: '240 EUR' }
    ],
    included: [
      '7 nuits avec petit-déjeuner',
      'Tous les transferts privés',
      'Guides privés à Séville, Cordoue et Grenade',
      'Billets d’entrée pour l’Alcázar, la Mezquita et l’Alhambra',
      'Spectacle de flamenco pour 2'
    ],
    notIncluded: ['Vols', 'Déjeuners et dîners', 'Assurance voyage', 'Taxe de séjour dans les hôtels'],
    total: '4 860 EUR',
    perPerson: '2 430 EUR par personne',
    deposit: '30 % d’acompte pour confirmer, solde 30 jours avant l’arrivée',
    validUntil: 'Valable jusqu’au 30 novembre 2026'
  },
  {
    id: 'group',
    label: 'Porto et le Douro, 4 jours',
    kind: 'Un groupe incentive de 24, vendu via une agence partenaire',
    name: 'Porto et le Douro, 4 jours',
    dates: 'Du 6 au 9 mai 2027',
    travellers: 'Client : votre agence partenaire de Munich, pour un groupe d’entreprise de 24',
    agency: 'Votre agence',
    days: [
      {
        day: 'Jour 1',
        title: 'Arrivée à Porto',
        body: 'Autocar privé de l’aéroport à l’hôtel au bord du fleuve. Dîner de bienvenue à Ribeira.',
        items: ['Transfert en autocar, accueil aux arrivées', 'Hôtel à Porto, 3 nuits', 'Dîner de bienvenue pour 24']
      },
      {
        day: 'Jour 2',
        title: 'Porto, au choix',
        body: 'Matinée golf pour dix, ou une balade dans la vieille ville avec un guide local. L’après-midi, une cave de porto.',
        items: ['Matinée golf, 10 invités', 'Balade dans la vieille ville, 14 invités', 'Visite et dégustation dans une cave de porto pour 24']
      },
      {
        day: 'Jour 3',
        title: 'La vallée du Douro',
        body: 'Autocar le long de la vallée, croisière sur le fleuve entre les terrasses, déjeuner dans un domaine viticole. Dîner de gala dans une quinta.',
        items: ['Autocar privé, journée complète', 'Croisière sur le fleuve', 'Déjeuner dans un domaine viticole', 'Dîner de gala dans une quinta']
      },
      {
        day: 'Jour 4',
        title: 'Départ',
        body: 'Matinée libre. Autocar vers l’aéroport en deux groupes, selon les vols.',
        items: ['Deux transferts vers l’aéroport']
      }
    ],
    quoteLines: [
      { name: 'Porto, 3 nuits', detail: 'Hôtel au bord du fleuve, 12 chambres doubles ou twin, petit-déjeuner', price: '9 360 EUR' },
      { name: 'Dîner de bienvenue', detail: 'Restaurant à Ribeira, 24 invités, boissons comprises', price: '2 040 EUR' },
      { name: 'Journée dans le Douro', detail: 'Autocar, croisière et déjeuner au domaine, 24 invités', price: '3 960 EUR' },
      { name: 'Visite d’une cave de porto', detail: 'Visite et dégustation, 24 invités', price: '840 EUR' },
      { name: 'Matinée golf', detail: '10 invités, green fees et clubs', price: '1 200 EUR' },
      { name: 'Dîner de gala', detail: 'Quinta privée, 24 invités, musique', price: '3 360 EUR' },
      { name: 'Transferts en autocar', detail: 'Aéroport, Porto et Douro, 4 jours', price: '1 850 EUR' },
      { name: 'Guide local et accompagnateur sur place', detail: '4 jours', price: '1 600 EUR' }
    ],
    included: [
      '3 nuits à Porto avec petit-déjeuner',
      'Tous les repas et visites indiqués, avec boissons aux dîners',
      'Tous les transferts en autocar privé',
      'Un accompagnateur sur place pendant tout le séjour',
      'La commission de votre agence partenaire'
    ],
    notIncluded: ['Vols', 'Déjeuners des jours 1, 2 et 4', 'Assurance voyage', 'Taxe de séjour de Porto'],
    total: '24 210 EUR',
    perPerson: '1 008,75 EUR par invité',
    deposit: '40 % pour confirmer, 40 % 60 jours avant l’arrivée, solde 15 jours avant',
    validUntil: 'Valable jusqu’au 15 décembre 2026',
    rooming: {
      title: 'Rooming list · Hôtel à Porto, 4 premières chambres sur 12',
      head: ['Chambre', 'Type', 'Occupants', 'Nuits'],
      rows: [
        ['Chambre 1', 'Double', 'Anna Weber, Jonas Weber', 'Du 6 au 9 mai'],
        ['Chambre 2', 'Twin', 'Lena Fischer, Marie Koch', 'Du 6 au 9 mai'],
        ['Chambre 3', 'Double', 'Paul Schmidt, Sofia Schmidt', 'Du 6 au 9 mai'],
        ['Chambre 4', 'Twin', 'Thomas Becker, David Wolf', 'Du 6 au 9 mai']
      ]
    }
  },
  {
    id: 'safari',
    label: 'Kenya et Tanzanie, 9 jours',
    kind: 'Un safari pour deux, en dollars américains',
    name: 'Kenya et Tanzanie, 9 jours',
    dates: 'Du 14 au 22 août 2027',
    travellers: 'Client : Emma & James, 2 adultes',
    agency: 'Votre agence',
    days: [
      {
        day: 'Jour 1',
        title: 'Nairobi',
        body: 'Accueil à l’aéroport et transfert vers un hôtel avec jardin à Karen. Dîner à l’hôtel.',
        items: ['Transfert privé', 'Hôtel de charme à Karen, 1 nuit']
      },
      {
        day: 'Jours 2 à 4',
        title: 'Masai Mara',
        body: 'Petit avion jusqu’au Mara. Trois jours de safaris pendant la grande migration.',
        items: ['Vol Nairobi Mara', 'Camp de tentes, pension complète, 3 nuits', 'Safaris le matin et l’après-midi']
      },
      {
        day: 'Jours 5 à 7',
        title: 'Serengeti',
        body: 'Vol de l’autre côté de la frontière, vers le nord du Serengeti. Vol en montgolfière au lever du soleil le jour 6.',
        items: ['Vol vers le Serengeti', 'Camp mobile, pension complète, 3 nuits', 'Vol en montgolfière avec petit-déjeuner']
      },
      {
        day: 'Jour 8',
        title: 'Ngorongoro',
        body: 'Route avec votre guide privé jusqu’au bord du cratère. L’après-midi au fond du cratère.',
        items: ['Guide et véhicule privés', 'Lodge au bord du cratère, 1 nuit']
      },
      {
        day: 'Jour 9',
        title: 'Départ d’Arusha',
        body: 'Transfert à l’aéroport d’Arusha pour votre vol retour.',
        items: ['Transfert privé vers l’aéroport']
      }
    ],
    quoteLines: [
      { name: 'Nairobi, 1 nuit', detail: 'Hôtel de charme à Karen, petit-déjeuner', price: '640 USD' },
      { name: 'Masai Mara, 3 nuits', detail: 'Camp de tentes, pension complète, safaris', price: '5 880 USD' },
      { name: 'Serengeti, 3 nuits', detail: 'Camp mobile, pension complète, safaris', price: '6 300 USD' },
      { name: 'Ngorongoro, 1 nuit', detail: 'Lodge au bord du cratère, pension complète', price: '1 440 USD' },
      { name: 'Vols en petit avion', detail: 'Nairobi, Masai Mara, Serengeti', price: '2 900 USD' },
      { name: 'Droits d’entrée des parcs et de conservation', detail: 'Kenya et Tanzanie', price: '2 640 USD' },
      { name: 'Guide et véhicule privés', detail: 'Tanzanie, 4 jours', price: '1 600 USD' },
      { name: 'Montgolfière', detail: 'Serengeti, 2 personnes, avec petit-déjeuner', price: '1 198 USD' }
    ],
    included: [
      '8 nuits, pension complète pendant le safari',
      'Safaris avec des guides expérimentés',
      'Vols intérieurs au Kenya et en Tanzanie',
      'Droits d’entrée des parcs et de conservation',
      'Tous les transferts'
    ],
    notIncluded: ['Vols internationaux', 'Visas', 'Assurance voyage', 'Pourboires des guides et du personnel des camps'],
    total: '22 598 USD',
    perPerson: '11 299 USD par personne',
    deposit: '30 % pour confirmer, solde 60 jours avant l’arrivée',
    validUntil: 'Valable jusqu’au 31 janvier 2027'
  }
  ],
  note: 'Ceci est un exemple construit dans Traviosoft avec des données inventées.'
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Réserver une démo | Traviosoft',
  metaDescription:
    'Un appel de 30 minutes : un voyage exemple dans Traviosoft, de la demande à la facture, puis les tarifs et vos questions.',
  title: 'Réserver une démo',
  lead: 'Un appel de 30 minutes. Nous parcourons un voyage exemple dans Traviosoft, de la première demande à la facture finale.',
  agendaTitle: 'L’appel',
  agenda: [
    { mins: '5', title: 'Votre agence', body: 'Taille de l’équipe, ce que vous vendez et les outils que vous utilisez aujourd’hui.' },
    { mins: '15', title: 'Un voyage exemple', body: 'La demande, le devis avec marge, les réservations, le programme, le paiement et la facture. Un voyage en couple, un groupe incentive ou un safari.' },
    { mins: '10', title: 'Tarifs et questions', body: 'L’offre pour votre équipe, l’import de vos données et vos questions.' }
  ],
  bringTitle: 'Qui inviter',
  bring: [
    'Les personnes qui font les devis ou les réservations',
    'La personne qui suit les paiements et les factures'
  ],
  afterTitle: 'Après l’appel',
  after: [
    'Un court compte rendu par e-mail',
    'Le prix pour votre équipe, par écrit',
    'Un nouvel appel si vous le demandez'
  ],
  bookTitle: 'Demandez un créneau',
  bookBody: 'Pour l’instant, les rendez-vous se prennent par e-mail. Envoyez le nom de votre agence, la taille de l’équipe et quelques jours qui vous conviennent, et nous répondons avec un horaire.',
  emailLabel: 'Écrivez à',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: 'Y a-t-il un essai gratuit ?',
      a: ['Non. Il y a une démo, et trois voyages exemples sur ce site.']
    },
    {
      q: 'Qui fait la démo ?',
      a: ['Une personne de l’équipe Traviosoft, en espagnol, en anglais ou en français.']
    },
    {
      q: 'Dois-je préparer quelque chose ?',
      a: ['Non.']
    },
    {
      q: 'Allez-vous me demander mes données ?',
      a: ['Non. La démo utilise un voyage exemple avec des données inventées.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Passer d’Excel à Traviosoft | Traviosoft',
  metaDescription:
    'Passer d’Excel, Word et WhatsApp à Traviosoft en pleine saison : ce que nous importons, ce que vous vérifiez, et comment finir les voyages en cours.',
  title: 'Passer à Traviosoft',
  lead: 'Le changement se fait par étapes, en parallèle des voyages en cours.',
  timelineTitle: 'Comment cela se passe',
  timeline: [
    {
      when: 'Jour 1',
      title: 'Vous nous envoyez vos fichiers',
      body: 'Vos tarifs, clients, prestataires et voyages en cours, en tableurs ou en export d’un autre outil.'
    },
    {
      when: 'Semaine 1',
      title: 'Nous importons, vous vérifiez',
      body: 'Nous chargeons tout dans l’espace de votre agence. Vous l’ouvrez, vous regardez quelques produits et quelques clients, et vous nous dites quoi ajuster.'
    },
    {
      when: 'Semaine 2',
      title: 'Votre premier vrai devis',
      body: 'Nous configurons votre marge, la TVA, vos règles de commission et votre marque. Vous construisez un vrai devis à partir de vos propres tarifs. Nous restons joignables par e-mail si besoin.'
    },
    {
      when: 'En service',
      title: 'Les nouvelles demandes entrent dans l’application',
      body: 'À partir de là, chaque nouvelle demande commence dans Traviosoft. Les voyages déjà en cours se terminent comme ils ont commencé.'
    }
  ],
  importTitle: 'Ce qui est repris',
  importHead: ['Quoi', 'Depuis', 'Comment'],
  importRows: [
    { what: 'Catalogue, produits et tarifs', from: 'Tableurs', how: 'Nous l’importons. Vous vérifiez un échantillon.' },
    { what: 'Clients', from: 'Tableurs, vos contacts e-mail', how: 'Nous l’importons. Les doublons sont fusionnés avec vous.' },
    { what: 'Prestataires et contacts', from: 'Tableurs', how: 'Nous l’importons. Vous vérifiez les contacts que vous utilisez le plus.' },
    { what: 'Voyages en cours', from: 'Excel, Word, l’export d’un autre outil', how: 'Nous importons ceux que vous choisissez. Vous les vérifiez un par un.' }
  ],
  seasonTitle: 'Cela va-t-il perturber ma saison ?',
  seasonBody: [
    'Les nouvelles demandes entrent dans Traviosoft dès la mise en service. Les voyages déjà en cours se terminent comme ils ont commencé.',
    'Les voyages en cours ne sont repris que si vous le souhaitez, et en général ceux qui sont encore loin. Un voyage qui part la semaine prochaine reste où il est.',
    'En haute saison, nous importons d’abord et passons en service lors d’une semaine plus calme.'
  ],
  faq: [
    {
      q: 'Pouvez-vous importer depuis mon outil actuel ?',
      a: ['S’il exporte vers un tableur, oui. Envoyez-nous un export d’exemple et nous vous disons exactement ce qui est repris.']
    },
    {
      q: 'Combien cela coûte-t-il ?',
      a: [`La mise en place et l’import des données sont offerts en annuel. En mensuel, ils coûtent ${PRICES.setupMonthly} EUR une seule fois.`]
    },
    {
      q: 'Que deviennent mes anciens fichiers ?',
      a: ['Ils restent exactement où ils sont. Nous importons des copies.']
    },
    {
      q: 'Dois-je reprendre tous les anciens voyages ?',
      a: ['Reprenez les voyages en cours que vous voulez et gardez le reste dans vos archives. Les anciens clients valent la peine d’être importés ; pour les voyages passés, vos archives suffisent.']
    },
    {
      q: 'Et si l’import doit être ajusté ?',
      a: ['Vous vérifiez un échantillon avant la mise en service, et nous l’ajustons avec vous. Ce que vous repérez plus tard, vous le corrigez dans l’application ou vous nous le signalez.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Questions fréquentes | Traviosoft',
  metaDescription:
    'Ce que fait Traviosoft, son prix, l’hébergement de vos données et le passage depuis Excel.',
  title: 'Questions fréquentes',
  lead: 'Si votre question n’est pas ici, écrivez à hola@traviosoft.com.',
  groups: [
    {
      title: 'Produit',
      items: [
        {
          q: 'Qu’est-ce que Traviosoft ?',
          a: ['Un logiciel web de gestion pour les agences de voyages sur mesure et les DMC. Il couvre la demande, le devis, la commande et les réservations, l’itinéraire client, les paiements et les factures.']
        },
        {
          q: 'Plusieurs prestataires peuvent-ils vendre le même hôtel ou le même service ?',
          a: ['Oui. Un produit peut avoir plusieurs prestataires, chacun avec ses propres tarifs. Vous choisissez le prestataire voyage par voyage.']
        },
        {
          q: 'Que voit mon client ?',
          a: ['Un devis net avec des intitulés pensés pour le client, des prix par personne, ce qui est compris et ce qui ne l’est pas, dans sa langue et à votre marque. Vos tarifs nets et vos marges restent réservés à votre équipe.']
        },
        {
          q: 'Mes guides et mes chauffeurs peuvent-ils voir le voyage ?',
          a: ['Ils reçoivent par e-mail une fiche de service avec les dates, les heures, les noms et le point de rendez-vous.']
        },
        {
          q: 'Travaillez-vous avec des DMC qui vendent via des agences partenaires ?',
          a: ['Oui. Envoyez le devis à l’agence partenaire, gardez son client sur le voyage, ajoutez la commission du partenaire et réglez-la à partir d’un relevé par période.']
        },
        {
          q: 'Y a-t-il un assistant IA ?',
          a: ['Oui, avec Premium. Demandez-lui ce qui vous attend aujourd’hui, faites-lui préparer un devis depuis votre catalogue ou transformer la grille tarifaire d’un prestataire en prix catalogue ; chaque changement attend votre accord. Vous pouvez aussi connecter à vos données Traviosoft l’assistant d’IA que vous utilisez déjà.']
        }
      ]
    },
    {
      title: 'Prix et facturation',
      items: [
        {
          q: 'Combien cela coûte-t-il ?',
          a: [`Classic coûte ${PRICES.classic.yearly} EUR par mois et Premium ${PRICES.premium.yearly} EUR par mois, en facturation annuelle, avec ${PRICES.usersIncluded} utilisateurs inclus. Chaque utilisateur supplémentaire coûte ${PRICES.extraUser.yearly} EUR par mois. La TVA n’est pas incluse.`]
        },
        {
          q: 'Puis-je payer au mois ?',
          a: [`Oui. En mensuel, c’est ${PRICES.classic.monthly} EUR pour Classic et ${PRICES.premium.monthly} EUR pour Premium. La mise en place coûte ${PRICES.setupMonthly} EUR une seule fois en mensuel, et elle est offerte en annuel.`]
        },
        {
          q: 'Y a-t-il un essai gratuit ?',
          a: ['Non. Il y a une démo de 30 minutes, et trois voyages exemples sur ce site, accessibles sans inscription.']
        }
      ]
    },
    {
      title: 'Données et sécurité',
      items: [
        {
          q: 'Où sont mes données ?',
          a: ['Dans un espace à part pour votre agence, hébergé dans l’Union européenne, séparé de toutes les autres agences.']
        },
        {
          q: 'Puis-je partir avec mes données ?',
          a: ['Oui. Vous récupérez vos données dans des formats standard.']
        },
        {
          q: 'Qui peut voir quoi ?',
          a: ['Avec Classic, chaque utilisateur voit les voyages de l’agence. Avec Premium, chaque équipe et chaque personne peut avoir ses propres clients, voyages et droits.']
        }
      ]
    },
    {
      title: 'Changement d’outil',
      items: [
        {
          q: 'Puis-je importer mon catalogue actuel ?',
          a: ['Oui. Pendant la mise en place, nous importons vos produits, vos prix et vos prestataires depuis vos tableurs. La mise en place et l’import sont offerts en annuel.']
        },
        {
          q: 'Le changement va-t-il perturber ma saison ?',
          a: ['Il se fait en parallèle. Commencez par les nouvelles demandes dans Traviosoft et terminez les voyages en cours comme avant.']
        },
        {
          q: 'Est-ce conforme aux règles de mon pays ?',
          a: ['La numérotation des factures par société et les avoirs fonctionnent partout. Les régimes de TVA et la facturation électronique s’activent pays par pays dans les paramètres. Pour les autres pays, demandez-nous ce qui est couvert.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'À propos de Traviosoft : né dans une agence de Barcelone',
  metaDescription:
    'Traviosoft est né dans une agence de voyages sur mesure de Barcelone qui tournait avec Excel, Word et WhatsApp. Support par email assuré par les personnes qui construisent le produit, données en UE.',
  title: 'À propos de Traviosoft',
  lead: 'Traviosoft est né dans une agence de voyages sur mesure de Barcelone. C’est un système de gestion pour les agences sur mesure et les DMC.',
  blocks: [
    {
      title: 'D’où il vient',
      body: [
        'L’agence fonctionnait avec Excel pour les tarifs, Word pour les devis et WhatsApp pour tout le reste. Pendant une semaine chargée, chaque acompte et chaque confirmation d’hôtel dépendaient de la mémoire de quelqu’un.',
        'La première version a été construite là, sur les voyages de l’agence.'
      ]
    },
    {
      title: 'Ce qu’il fait',
      body: [
        'Traviosoft couvre tout le voyage : demandes, devis chiffrés prestation par prestation à partir de tarifs nets, réservations avec plusieurs prestataires, documents dans la langue du client, paiements et factures.'
      ]
    },
    {
      title: 'Support',
      body: [
        'Le support se fait par e-mail, en espagnol, en anglais et en français, par les personnes qui construisent le produit.'
      ]
    },
    {
      title: 'Vos données',
      body: [
        'Chaque agence a son propre espace séparé, hébergé dans l’Union européenne. Vous pouvez exporter vos données à tout moment.'
      ]
    }
  ],
  facts: [
    { k: 'Origine', v: 'Une agence sur mesure de Barcelone' },
    { k: 'Pour', v: 'Agences sur mesure et DMC' },
    { k: 'Support', v: 'Par email, en espagnol, anglais et français' },
    { k: 'Données', v: 'Un espace privé par agence, hébergé dans l’UE' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Ressources pour agences de voyages sur mesure | Traviosoft',
  metaDescription:
    'Comparatifs, guides, un glossaire et des voyages exemples pour les agences sur mesure et les DMC qui choisissent un logiciel. En langage clair, sans inscription.',
  title: 'Ressources',
  lead: 'Comparatifs, guides, un glossaire et des voyages exemples.',
  groups: [
    { kind: 'best', title: 'Comparatif des meilleurs logiciels', body: 'Les outils qu’utilisent les agences sur mesure et les DMC, côte à côte, et à qui chacun convient.' },
    { kind: 'compare', title: 'Pages de comparaison', body: 'Traviosoft à côté d’autres outils.' },
    { kind: 'guide', title: 'Guides', body: 'Des notes pratiques pour chiffrer, réserver et facturer un voyage sur mesure.' },
    { kind: 'glossary', title: 'Glossaire', body: 'Les termes d’agence de voyages et de logiciel, en une ligne chacun.' },
    { kind: 'example', title: 'Voyages exemples', body: 'Un couple en Andalousie, un groupe incentive à Porto et un safari au Kenya et en Tanzanie, tels que les voit votre client.' }
  ],
  glossaryTitle: 'Glossaire',
  glossaryMeta:
    'Des définitions claires des termes qu’utilisent les agences de voyages sur mesure et les DMC : tarif net, commission, feuille de service, rooming list, acompte et plus.',
  glossaryLead: 'Les mots que vous utilisez chaque jour, et ceux du logiciel, en une ligne chacun.'
};
