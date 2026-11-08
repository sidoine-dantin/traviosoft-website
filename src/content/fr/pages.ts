import type { SiteContent } from '../types';

export const pricing: SiteContent['pricing'] = {
  metaTitle: 'Tarifs : dès 190 EUR par mois, tout inclus | Traviosoft',
  metaDescription:
    'Trois formules, seul le nombre d’utilisateurs change. Toutes les fonctions partout. Dès 190 EUR par mois pour 3 utilisateurs, mise en place offerte en annuel.',
  title: 'Toutes les fonctions, un seul prix.',
  lead: 'Les formules ne diffèrent que par le nombre d’utilisateurs, rien d’autre. Toutes les fonctions sont dans toutes les formules : il n’y a jamais à se demander ce qui manque.',
  yearly: 'Annuel',
  monthly: 'Mensuel',
  yearlyNote: 'La facturation annuelle offre deux mois. Les prix s’entendent par mois, hors TVA.',
  plans: [
    {
      id: 'small',
      name: 'Small',
      users: 'Jusqu’à 3 utilisateurs',
      yearly: '190',
      monthly: '228',
      priceNote: 'EUR par mois, hors TVA. Facturation annuelle ou mensuelle.',
      lines: [
        { text: 'Demandes, catalogue, devis et propositions' },
        { text: 'Réservations, prestataires et itinéraires clients' },
        { text: 'Paiements, factures et tableau de bord' },
        { text: 'Votre propre base de données, hébergée dans l’UE' },
        { text: 'Support par email en espagnol, anglais et français' },
        { text: 'Assistant IA : option à 29 EUR par mois', later: true }
      ]
    },
    {
      id: 'team',
      name: 'Team',
      users: 'Jusqu’à 5 utilisateurs',
      yearly: '250',
      monthly: '300',
      priceNote: 'EUR par mois, hors TVA. Facturation annuelle ou mensuelle.',
      hot: true,
      lines: [
        { text: 'Demandes, catalogue, devis et propositions' },
        { text: 'Réservations, prestataires et itinéraires clients' },
        { text: 'Paiements, factures et tableau de bord' },
        { text: 'Votre propre base de données, hébergée dans l’UE' },
        { text: 'Support par email en espagnol, anglais et français' },
        { text: 'Assistant IA inclus', later: true }
      ]
    },
    {
      id: 'larger',
      name: 'Larger',
      users: '6 utilisateurs et plus',
      yearly: 'Dès 250',
      monthly: 'Dès 300',
      priceNote:
        'EUR par mois, hors TVA. Annuel : 250 + 40 par utilisateur supplémentaire. Mensuel : 300 + 48 par utilisateur supplémentaire.',
      lines: [
        { text: 'Demandes, catalogue, devis et propositions' },
        { text: 'Réservations, prestataires et itinéraires clients' },
        { text: 'Paiements, factures et tableau de bord' },
        { text: 'Votre propre base de données, hébergée dans l’UE' },
        { text: 'Support par email en espagnol, anglais et français' },
        { text: 'Assistant IA inclus', later: true }
      ]
    }
  ],
  compareTitle: 'À titre de comparaison',
  compareBody:
    'Ezus pour 3 utilisateurs coûte 75 EUR par utilisateur et par mois (225 EUR), plus un pack d’intégration obligatoire de 1 990 EUR. Source : ezus.io/pricing, novembre 2026.',
  includedTitle: 'Chaque formule comprend',
  included: [
    'Toutes les fonctions de l’application, sans module verrouillé',
    'Demandes, catalogue avec prix par saison, devis avec votre marge, la TVA et la commission',
    'Page de proposition et itinéraire client dans la langue de votre client et à votre marque',
    'Réservations, emails des prestataires classés dans le voyage, feuilles de service, calendrier',
    'Échéancier de paiement, liens de paiement, factures d’acompte et de solde, avoirs',
    'Tableau de bord avec ventes, voyages, encaissements et paiements',
    'Votre propre base de données isolée, hébergée dans l’Union européenne',
    'Accès à vos données par API et MCP',
    'Mise en place et import des données : offerts en annuel, 390 EUR une seule fois en mensuel'
  ],
  faq: [
    {
      q: 'Comment la facturation fonctionne-t-elle ?',
      a: ['En annuel ou en mensuel, à votre choix. L’annuel revient à deux mois offerts. Le mensuel coûte 20 % de plus par mois et peut être arrêté n’importe quel mois.']
    },
    {
      q: 'Les prix s’entendent-ils avec ou sans TVA ?',
      a: ['Sans. La TVA est ajoutée sur la facture selon votre pays et le statut de votre société.']
    },
    {
      q: 'Puis-je résilier ?',
      a: ['Oui. Les formules mensuelles s’arrêtent à la fin du mois de la résiliation. Les formules annuelles vont jusqu’à la fin de l’année payée et ne sont pas renouvelées.']
    },
    {
      q: 'Que se passe-t-il si j’ajoute un utilisateur ?',
      a: ['Jusqu’à 3 utilisateurs, vous êtes en Small, jusqu’à 5 en Team. À partir du sixième, vous passez en Larger, et chaque utilisateur supplémentaire coûte 40 EUR par mois en annuel, 48 EUR en mensuel.']
    },
    {
      q: 'Mensuel ou annuel : lequel choisir ?',
      a: ['L’annuel est moins cher et la mise en place est offerte. Le mensuel est plus souple, avec des frais de mise en place uniques de 390 EUR. Si vous hésitez, commencez en mensuel et passez à l’annuel plus tard.']
    },
    {
      q: 'Puis-je récupérer mes données si je pars ?',
      a: ['Oui. Vous récupérez vos données dans des formats standard. Ce sont vos données, dans votre propre base.']
    },
    {
      q: 'Que comprend la mise en place ?',
      a: ['Nous importons votre catalogue, vos clients, vos prestataires et vos voyages en cours depuis Excel ou CSV, et nous configurons votre marque et vos règles de prix. Elle est offerte en annuel et coûte 390 EUR une seule fois en mensuel.']
    }
  ]
};

export const example: SiteContent['example'] = {
  metaTitle: 'Voyage exemple : Andalousie, 8 jours | Traviosoft',
  metaDescription:
    'Ouvrez un voyage exemple construit dans Traviosoft : l’itinéraire jour par jour et le devis tels que les voit le voyageur. Données inventées, sans inscription.',
  title: 'Ce que reçoit votre client.',
  lead: 'Un voyage exemple, construit dans Traviosoft. Ouvrez l’itinéraire et le devis tels que les voit le voyageur.',
  tabs: { itinerary: 'Itinéraire', quote: 'Devis' },
  trip: {
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
  note: 'Ceci est un exemple construit dans Traviosoft avec des données inventées.'
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Démo : 30 minutes, sur un voyage comme le vôtre | Traviosoft',
  metaDescription:
    'Un appel de 30 minutes sur l’un de vos voyages, de la demande à la facture. Prix par écrit ensuite, et aucun rappel sauf si vous le demandez.',
  title: '30 minutes, sur un voyage comme le vôtre.',
  lead: 'Pas de diapositives. Nous prenons l’un de vos voyages et nous le déroulons dans l’application, du premier message à la facture finale.',
  agendaTitle: 'Le déroulé des 30 minutes',
  agenda: [
    { mins: '5', title: 'Votre agence', body: 'Combien vous êtes, ce que vous vendez, ce que vous utilisez aujourd’hui. Pour que la suite colle à votre cas.' },
    { mins: '15', title: 'Un de vos voyages, de la demande à la facture', body: 'La demande, le devis avec votre marge, la réservation, l’itinéraire, le paiement et la facture. Sur un voyage comme ceux que vous vendez.' },
    { mins: '10', title: 'Prix, changement d’outil et questions', body: 'Ce que cela coûte pour votre équipe, comment vos fichiers Excel sont repris, et tout ce que vous voulez demander.' }
  ],
  bringTitle: 'Ce qu’il faut apporter',
  bring: [
    'Une demande récente, telle qu’elle est arrivée (un email suffit)',
    'Votre fichier de tarifs, si vous voulez le voir importé',
    'Les personnes de votre équipe qui font les devis ou les réservations'
  ],
  afterTitle: 'Ce qui se passe ensuite',
  after: [
    'Un résumé écrit par email : ce que nous avons vu et ce que nous avons convenu',
    'Le prix pour votre équipe, par écrit',
    'Aucun appel de relance, sauf si vous en demandez un'
  ],
  bookTitle: 'Demandez un créneau',
  bookBody: 'Pour l’instant, la prise de rendez-vous se fait par email. Indiquez-nous votre agence, la taille de votre équipe et quelques jours qui vous conviennent. Nous répondons avec un horaire.',
  emailLabel: 'Écrivez à',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: 'Y a-t-il un essai gratuit ?',
      a: ['Non. Il y a une démo, et le voyage exemple de ce site. Nous préférons vous montrer votre propre voyage plutôt que de vous laisser seul devant un compte vide.']
    },
    {
      q: 'Qui anime la démo ?',
      a: ['Quelqu’un de l’équipe Traviosoft, en espagnol, en anglais ou en français. C’est un appel, pas une vidéo enregistrée.']
    },
    {
      q: 'Dois-je préparer quelque chose ?',
      a: ['Non. Une demande récente aide, et votre fichier de tarifs aussi, mais la démo fonctionne sans eux.']
    },
    {
      q: 'Allez-vous partager mes données ?',
      a: ['Non. Ce que vous nous montrez reste entre nous. Il n’est pas nécessaire d’apporter de vraies données clients, vous pouvez changer les noms.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Passer d’Excel à Traviosoft | Traviosoft',
  metaDescription:
    'Quitter Excel, Word et WhatsApp sans perdre une saison : ce que nous importons, ce que vous vérifiez, et comment finir les voyages en cours.',
  title: 'Quitter Excel sans perdre une saison.',
  lead: 'On n’éteint pas un système pour en allumer un autre. On avance par étapes, et les voyages en cours continuent.',
  timelineTitle: 'Comment cela se passe',
  timeline: [
    {
      when: 'Jour 1',
      title: 'Vous nous envoyez vos fichiers',
      body: 'Vos tarifs, votre liste de clients, vos prestataires, vos voyages en cours. Excel et CSV conviennent, tout comme l’export d’un autre outil. Des fichiers en désordre, ce n’est pas un problème.'
    },
    {
      when: 'Semaine 1',
      title: 'Nous importons, vous vérifiez',
      body: 'Nous chargeons tout dans votre propre base de données. Vous l’ouvrez, vous regardez quelques produits et quelques clients, et vous nous dites ce qui ne va pas.'
    },
    {
      when: 'Semaine 2',
      title: 'Votre premier vrai devis',
      body: 'Nous configurons votre marge, la TVA, vos règles de commission et votre marque. Vous construisez un vrai devis à partir de vos propres tarifs. Nous restons joignables par email si vous bloquez.'
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
    { what: 'Catalogue, produits et tarifs', from: 'Excel, CSV', how: 'Nous l’importons. Vous vérifiez un échantillon.' },
    { what: 'Clients', from: 'Excel, CSV, vos contacts email', how: 'Nous l’importons. Les doublons sont fusionnés avec vous.' },
    { what: 'Prestataires et contacts', from: 'Excel, CSV', how: 'Nous l’importons. Vous vérifiez les contacts que vous utilisez le plus.' },
    { what: 'Voyages en cours', from: 'Excel, Word, l’export d’un autre outil', how: 'Nous importons ceux que vous choisissez. Vous les vérifiez un par un.' }
  ],
  seasonTitle: 'Cela va-t-il perturber ma saison ?',
  seasonBody: [
    'Pas si vous le faites dans le bon ordre. Commencez par les nouvelles demandes : elles entrent dans Traviosoft dès le jour de la mise en service. Vous continuez à finir les voyages déjà en cours à l’ancienne, avec l’Excel et le Word que vous connaissez.',
    'Les voyages en cours ne sont repris que si vous le souhaitez, et en général ceux qui sont encore loin. Un voyage qui part la semaine prochaine reste où il est.',
    'Si vous êtes en pleine haute saison, dites-le-nous. Nous pouvons importer d’abord et attendre pour passer en service que vous ayez une semaine calme.'
  ],
  faq: [
    {
      q: 'Pouvez-vous importer depuis mon outil actuel ?',
      a: ['S’il peut exporter vers Excel ou CSV, oui. Envoyez-nous un export d’exemple et nous vous disons ce qui est repris et ce qui ne l’est pas.']
    },
    {
      q: 'Combien cela coûte-t-il ?',
      a: ['La mise en place et l’import des données sont offerts en annuel. En mensuel, ils coûtent 390 EUR une seule fois.']
    },
    {
      q: 'Vais-je perdre mes anciens fichiers ?',
      a: ['Non. Nous importons des copies. Vos fichiers Excel et Word restent exactement où ils sont.']
    },
    {
      q: 'Dois-je reprendre tous les anciens voyages ?',
      a: ['Non. Reprenez les voyages en cours que vous voulez et laissez le reste dans vos archives. Les anciens clients valent la peine d’être importés, les voyages passés en général non.']
    },
    {
      q: 'Et si l’import est erroné ?',
      a: ['Vous vérifiez un échantillon avant la mise en service, et nous corrigeons ce qui ne va pas. Ce que vous repérez plus tard, vous le corrigez dans l’application ou vous nous le signalez.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Questions fréquentes | Traviosoft',
  metaDescription:
    'Des réponses claires sur ce que fait Traviosoft, son prix, l’hébergement de vos données et le passage depuis Excel. Pour les dirigeants d’agence.',
  title: 'Les questions des agences.',
  lead: 'Des réponses courtes. Si la vôtre n’est pas ici, écrivez à hola@traviosoft.com.',
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
          a: ['Un devis net avec des intitulés pensés pour le client, des prix par personne, ce qui est compris et ce qui ne l’est pas, dans sa langue et à votre marque. Vos tarifs nets et vos marges ne sont jamais affichés.']
        },
        {
          q: 'Mes guides et mes chauffeurs peuvent-ils voir le voyage ?',
          a: ['Ils reçoivent une feuille de service avec les dates, les heures, les noms et le point de rendez-vous. Ils n’ont pas besoin de compte.']
        },
        {
          q: 'Y a-t-il un assistant IA ?',
          a: ['Pas encore. Il arrive : un assistant dans Traviosoft qui prépare les devis et répond aux questions sur vos voyages. Vous pouvez déjà connecter l’outil d’IA de votre choix grâce à l’accès MCP.']
        }
      ]
    },
    {
      title: 'Prix et facturation',
      items: [
        {
          q: 'Combien cela coûte-t-il ?',
          a: ['Dès 190 EUR par mois pour jusqu’à 3 utilisateurs, en facturation annuelle. Team, pour jusqu’à 5 utilisateurs, coûte 250 EUR par mois. Toutes les fonctions sont dans chaque formule. La TVA n’est pas incluse.']
        },
        {
          q: 'Puis-je payer au mois ?',
          a: ['Oui. En mensuel, c’est 228 EUR pour Small et 300 EUR pour Team. La mise en place coûte 390 EUR une seule fois en mensuel, et elle est offerte en annuel.']
        },
        {
          q: 'Y a-t-il un essai gratuit ?',
          a: ['Non. Il y a une démo sur l’un de vos propres voyages, et un voyage exemple sur ce site que vous pouvez ouvrir sans vous inscrire.']
        }
      ]
    },
    {
      title: 'Données et sécurité',
      items: [
        {
          q: 'Où sont mes données ?',
          a: ['Dans votre propre base de données, hébergée dans l’Union européenne. C’est une base séparée pour votre agence, pas une table partagée avec un filtre.']
        },
        {
          q: 'Puis-je partir avec mes données ?',
          a: ['Oui. Vous récupérez vos données dans des formats standard.']
        },
        {
          q: 'Qui peut voir quoi ?',
          a: ['Chaque utilisateur de votre agence voit les voyages de l’agence. Un accès plus fin, par équipe et par personne, arrive.']
        }
      ]
    },
    {
      title: 'Changement d’outil',
      items: [
        {
          q: 'Puis-je importer mon catalogue actuel ?',
          a: ['Oui. Pendant la mise en place, nous importons vos produits, vos prix et vos prestataires depuis Excel ou CSV. La mise en place et l’import sont offerts en annuel.']
        },
        {
          q: 'Le changement va-t-il perturber ma saison ?',
          a: ['Pas forcément. Commencez par les nouvelles demandes dans Traviosoft et terminez les voyages en cours comme avant.']
        },
        {
          q: 'Est-ce conforme aux règles de mon pays ?',
          a: ['La numérotation des factures par société et les avoirs fonctionnent partout. Les régimes de TVA et la facturation électronique s’activent pays par pays dans les paramètres. Dites-nous votre pays et nous vous indiquons clairement ce qui est couvert.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'À propos de Traviosoft : né dans une agence de Barcelone',
  metaDescription:
    'Traviosoft est né dans une agence de voyages sur mesure de Barcelone qui tournait avec Excel, Word et WhatsApp. Support par email assuré par les personnes qui construisent le produit, données en UE.',
  title: 'Conçu par une agence, pour des agences.',
  lead: 'Traviosoft est né dans une agence de voyages sur mesure de Barcelone. Il est fait pour les agences qui lui ressemblent.',
  blocks: [
    {
      title: 'D’où il vient',
      body: [
        'L’agence fonctionnait avec Excel pour les tarifs, Word pour les devis et WhatsApp pour tout le reste. Cela marchait, jusqu’à une semaine chargée où un acompte était oublié ou un hôtel n’était pas confirmé.',
        'L’outil a donc été construit là, sur de vrais voyages, par des gens qui devaient envoyer le devis le soir même.'
      ]
    },
    {
      title: 'Pourquoi nous avons continué',
      body: [
        'Un voyage sur mesure se chiffre prestation par prestation à partir de tarifs nets, avec plusieurs fournisseurs et des documents dans la langue du client. Nous voulions un logiciel pensé pour cette façon de travailler.',
        'Un seul endroit pour tout le voyage, de la première demande à la dernière facture, avec le prix affiché sur le site.'
      ]
    },
    {
      title: 'Notre façon de travailler',
      body: [
        'Le support se fait par email, en espagnol, en anglais et en français, et vous parlez aux personnes qui construisent le produit.',
        'Nous vous disons ce qui est disponible et ce qui arrive. Ce qui n’est pas encore disponible porte une mention sur ce site.'
      ]
    },
    {
      title: 'Vos données',
      body: [
        'Chaque agence a sa propre base de données isolée, hébergée dans l’Union européenne. Vos données ne sont jamais mélangées avec celles d’une autre agence, et vous pouvez partir avec.'
      ]
    },
    {
      title: 'Ce sur quoi vous pouvez compter',
      body: [
        'Traviosoft fait tourner de vrais voyages chaque jour, et nous ne montrons que les logos et avis que nous pouvons défendre.',
        'Vous avez un système de gestion complet et une équipe qui répond à ses emails.'
      ]
    }
  ],
  facts: [
    { k: 'Origine', v: 'Une agence sur mesure de Barcelone' },
    { k: 'Pour', v: 'Agences sur mesure et DMC' },
    { k: 'Support', v: 'Par email, en espagnol, anglais et français' },
    { k: 'Données', v: 'Votre propre base de données, hébergée dans l’UE' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Ressources pour agences de voyages sur mesure | Traviosoft',
  metaDescription:
    'Comparatifs, guides, un glossaire et un voyage exemple pour les agences sur mesure et les DMC qui choisissent un logiciel. En langage clair, sans inscription.',
  title: 'Ressources',
  lead: 'Ce que nous aurions aimé trouver quand nous cherchions un logiciel pour une agence comme la nôtre.',
  groups: [
    { kind: 'best', title: 'Comparatif des meilleurs logiciels', body: 'Les outils qu’utilisent les agences sur mesure et les DMC, côte à côte, et à qui chacun convient.' },
    { kind: 'compare', title: 'Pages de comparaison', body: 'Traviosoft à côté d’autres outils, sur ce que vous payez et ce que vous obtenez.' },
    { kind: 'guide', title: 'Guides', body: 'Des notes pratiques pour chiffrer, réserver et facturer un voyage sur mesure.' },
    { kind: 'glossary', title: 'Glossaire', body: 'Les termes d’agence de voyages et de logiciel, en une ligne chacun.' },
    { kind: 'example', title: 'Voyage exemple', body: 'Un voyage de 8 jours en Andalousie, tel que votre client verrait l’itinéraire et le devis.' }
  ],
  glossaryTitle: 'Glossaire',
  glossaryMeta:
    'Des définitions claires des termes qu’utilisent les agences de voyages sur mesure et les DMC : tarif net, commission, feuille de service, rooming list, acompte et plus.',
  glossaryLead: 'Les mots que vous utilisez chaque jour, et ceux du logiciel, en une ligne chacun.'
};
