import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vendre : demandes, catalogue et devis | Traviosoft',
  metaDescription:
    'Toutes les demandes dans une liste, un catalogue avec prix par saison et des devis avec votre marge, la TVA et la commission, dans la langue du client.',
  name: 'Vendre',
  menuLine: 'De la première demande au devis accepté',
  step: '1 sur 4',
  heroTitle: 'Demandes, catalogue et devis',
  heroLead:
    'Toutes les demandes dans une liste, un catalogue avec vos tarifs par saison, et des devis construits à partir de lui avec votre marge et votre commission.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Demandes',
      title: 'Une liste de demandes',
      lead: 'Chaque demande dans une liste avec sa prochaine étape, qu’elle arrive par e-mail, par téléphone ou par WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Une seule liste de demandes', body: ['Chaque demande a un statut : nouvelle, devis envoyé ou en attente de réponse.'] },
        { title: 'Une demande devient un projet', body: ['Quand une demande devient sérieuse, elle devient un projet. Le client, les dates, les voyageurs et vos notes restent ensemble pendant tout le voyage.'] },
        { title: 'Une fiche par client', body: ['Saisissez un nom ou une adresse e-mail que vous avez déjà : Traviosoft vous montre le client existant, et chaque client garde un seul historique.'] },
        { title: 'Rappels', body: ['Mettez une date sur une demande. Elle revient sur votre tableau de bord le bon jour.'] },
        { title: 'Motifs des demandes perdues', body: ['Clôturez une demande avec un motif : prix, délais, destination.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalogue',
      title: 'Des produits avec des prix par date',
      lead: 'Hôtels, transferts, guides et activités, chacun avec des prix par date. Le devis utilise le prix des dates du voyage.',
      visual: 'catalogue',
      features: [
        { title: 'Périodes de prix par date', body: ['Basse, moyenne et haute saison, événements spéciaux, tarifs des nouveaux contrats. Chaque produit garde ses prix par période, et le devis utilise celui qui correspond aux dates du voyage.'] },
        { title: 'Plusieurs prestataires par produit', body: ['Gardez deux sociétés de transfert ou trois guides pour le même service, chacun avec ses tarifs, et choisissez-en un par voyage.'] },
        { title: 'Options', body: ['Types de chambre, demi-pension, voiture privée ou partagée : les options sont rattachées au produit, avec leur propre prix.'] },
        { title: 'Forfaits prêts à l’emploi', body: ['Enregistrez une fois vos circuits classiques. Ajoutez le forfait complet à un devis en un clic, puis ajustez ce qui change.'] },
        { title: 'Traductions automatiques', body: ['Rédigez la description d’un produit une fois. Elle est traduite pour vos clients dans leur langue.'] }
      ]
    },
    {
      id: 'quotes',
      kicker: 'Devis',
      title: 'Marge, TVA et commission',
      lead: 'Définissez vos règles de prix une fois, et chaque ligne du devis les applique.',
      visual: 'quote',
      features: [
        { title: 'Marge, TVA et commission', body: ['Une procédure de prix transforme vos tarifs nets en prix de vente : votre marge, la bonne TVA et la commission quand une agence ou un partenaire vend le voyage.'] },
        { title: 'Prix par personne', body: ['Prix par adulte ou par enfant. Le client voit un prix clair par personne et un total.'] },
        { title: 'Noms côté client', body: ['Votre équipe voit le nom interne de chaque prestation, le client voit son nom destiné aux clients.'] },
        { title: 'Inclus et non inclus', body: ['Ce que le prix couvre et ce qu’il ne couvre pas, listé sur le devis.'] },
        { title: 'Versions', body: ['Le client demande un hôtel moins cher ? Créez une nouvelle version. La précédente reste, et vous pouvez la rouvrir à tout moment.'] },
        { title: 'Date d’expiration', body: ['Fixez la durée de validité du prix.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Envoi et relance',
      title: 'Envoi et relance',
      lead: 'Le devis part par e-mail dans la langue du client. Sept jours plus tard, il revient vers vous pour une relance.',
      visual: 'followup',
      features: [
        { title: 'Modèles d’e-mail', body: ['Vos propres textes d’e-mail, dans chaque langue. Le devis est joint et l’e-mail est prêt à partir.'] },
        { title: 'Dans la langue du client', body: ['Espagnol, anglais, français et plus. Le devis, l’e-mail et les documents suivent la langue du client.'] },
        { title: 'Relance après 7 jours', body: ['Une semaine après l’envoi, le devis apparaît dans votre liste de relances.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposition',
      title: 'Une page avec le voyage',
      lead: 'Le client reçoit un lien vers une page avec le voyage, dans sa langue et avec votre logo.',
      visual: 'proposal',
      features: [
        { title: 'Une page de proposition à partager', body: ['Un lien avec le voyage, les prestations et le prix. Il s’ouvre sur n’importe quel téléphone.'] },
        { title: 'Votre marque', body: ['Votre logo et vos couleurs sur la page et sur chaque document.'] },
        { title: 'Les mêmes chiffres partout', body: ['La proposition, le PDF du devis et plus tard la facture viennent des mêmes lignes. Modifiez un prix une fois et il est juste partout.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agences partenaires',
      title: 'Vendez via des agences partenaires',
      lead: 'Envoyez le devis à l’agence partenaire, gardez son client sur le voyage et réglez sa commission à partir des mêmes chiffres.',
      visual: 'quote',
      features: [
        { title: 'Le partenaire et son client', body: ['Le devis va à l’agence partenaire, les voyageurs sont ses clients. Les deux restent sur le voyage, du premier devis à la dernière facture.'] },
        { title: 'La commission dans le prix', body: ['Fixez la commission du partenaire sur le devis. Elle est dans le prix de vente dès la première ligne, et votre marge reste visible pour vous.'] },
        { title: 'Relevés de commission', body: ['Ce que vous devez à chaque partenaire, par période, d’après les voyages qu’il vous a envoyés. Réglé en un clic.'] },
        { title: 'Documents dans la langue du partenaire', body: ['Le partenaire reçoit le devis et la proposition dans sa langue et à votre marque, prêts à transmettre à son client.'] }
      ]
    }
  ],
  faq: [
    { q: 'Puis-je importer mon catalogue actuel ?', a: ['Oui. Nous importons vos produits, prix et prestataires depuis vos tableurs pendant la mise en place. La mise en place et l’import sont gratuits avec la facturation annuelle.'] },
    { q: 'Plusieurs prestataires peuvent-ils vendre le même hôtel ou le même service ?', a: ['Oui. Un produit peut avoir plusieurs prestataires, chacun avec ses tarifs. Vous choisissez le prestataire par voyage.'] },
    { q: 'Que voit mon client ?', a: ['Un devis net, avec des noms côté client, des prix par personne, ce qui est inclus et non inclus, dans sa langue et à votre marque. Vos tarifs nets et vos marges restent réservés à votre équipe. Vous pouvez ouvrir les voyages exemples pour le voir.'] },
    { q: 'Dois-je utiliser le catalogue pour chaque devis ?', a: ['Non. Un devis peut mêler lignes du catalogue et lignes ponctuelles.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Réserver et suivre le voyage | Traviosoft',
  metaDescription:
    'Le premier paiement confirme le voyage. Les statuts se mettent à jour seuls, les e-mails des prestataires sont classés et le client reçoit son programme.',
  name: 'Réserver et suivre',
  menuLine: 'Du devis accepté au voyage terminé',
  step: '2 sur 4',
  heroTitle: 'Voyages confirmés, réservations et programme client',
  heroLead:
    'Quand le client paie l’acompte, le voyage est confirmé avec toutes les prestations à réserver. Chaque voyage a sa liste de réservations, les e-mails de ses prestataires et une page de programme pour le voyageur.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Voyage confirmé',
      title: 'L’acompte confirme le voyage',
      lead: 'Enregistrez le premier paiement et le devis est accepté : le voyage confirmé est créé avec toutes les prestations déjà dedans.',
      visual: 'order',
      features: [
        { title: 'Une seule étape', body: ['Le premier paiement accepte le devis, confirme le voyage et liste toutes les prestations à réserver, en une fois.'] },
        { title: 'Tout vient du devis', body: ['Voyageurs, dates, prestations et prix viennent du devis accepté, tels que le client les a vus.'] },
        { title: 'Changements après confirmation', body: ['Le client ajoute une nuit ? Mettez le devis à jour et le voyage confirmé suit, pour que l’équipe travaille toujours sur la dernière version.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Statuts',
      title: 'Statuts de réservation, de voyage et de paiement',
      lead: 'Les statuts changent à mesure que les prestations sont confirmées et que les paiements arrivent.',
      visual: 'order',
      features: [
        { title: 'Une liste de réservations par voyage', body: ['Hôtel, guide, voiture, billets : chaque prestation indique si elle est à réserver, en attente du prestataire ou confirmée.'] },
        { title: 'Des pastilles qui se mettent à jour seules', body: ['Quand la dernière prestation est confirmée, le voyage apparaît comme réservé. Quand le solde est payé, la pastille de paiement passe au vert.'] },
        { title: 'Archives', body: ['Les voyages terminés vont aux archives et restent consultables. Un élément supprimé peut être restauré depuis la corbeille.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Prestataires',
      title: 'Fiches et e-mails des prestataires',
      lead: 'Contacts, documents et e-mails, classés sur le prestataire et sur le voyage.',
      visual: 'suppliers',
      features: [
        { title: 'E-mails des prestataires classés pour vous', body: ['Les confirmations et réponses des prestataires arrivent dans le voyage auquel elles appartiennent.'] },
        { title: 'Fiches de service', body: ['Envoyez à chaque guide, chauffeur ou hôtel une fiche claire avec dates, noms et détails, directement depuis le voyage.'] },
        { title: 'Fiches prestataires', body: ['Contacts, contrats, photos et ce que chaque prestataire inclut, conservés avec le prestataire et réutilisés à chaque voyage.'] },
        { title: 'Demandes de disponibilité et bons de commande', body: ['Demandez une disponibilité à un hôtel, puis envoyez le bon de commande depuis le voyage. Les réponses et les changements reviennent sur la réservation.'], premium: true }
      ]
    },
    {
      id: 'itinerary',
      kicker: 'Programme du client',
      title: 'Un programme jour par jour',
      lead: 'Une page avec chaque jour, les hôtels, les horaires et les contacts, envoyée au voyageur par lien.',
      visual: 'itinerary',
      features: [
        { title: 'Une page de programme à partager', body: ['Un lien, jour par jour. Il s’ouvre sur n’importe quel téléphone.'] },
        { title: 'Dans la langue du voyageur et à votre marque', body: ['Le programme suit la langue du client et porte votre logo.'] },
        { title: 'Toujours à jour', body: ['Changez une heure de prise en charge dans le voyage et la page affiche la nouvelle heure. Le lien reste le même.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Groupes',
      title: 'Groupes et rooming lists',
      lead: 'Listes de voyageurs, prestations pour une partie du groupe et une rooming list par hôtel.',
      visual: 'order',
      features: [
        { title: 'La liste des voyageurs', body: ['Collez ou importez la liste depuis un tableur, ou envoyez à l’organisateur un lien vers un formulaire. Jusqu’à 200 voyageurs par voyage.'] },
        { title: 'Des prestations pour une partie du groupe', body: ['La journée golf pour douze, le dîner de gala pour tous : chaque prestation indique qui y participe, et les effectifs par hôtel suivent.'] },
        { title: 'Une rooming list par hôtel', body: ['Des chambres composées selon qui partage avec qui, numérotées par hôtel, prêtes à envoyer en PDF ou en tableur.'] },
        { title: 'Régimes et accessibilité d’un coup d’œil', body: ['Le nombre de repas végétariens, d’allergies et de besoins d’accessibilité par prestation, pour le restaurant et le guide.'] }
      ]
    },
    {
      id: 'calendar',
      kicker: 'Calendrier',
      title: 'Les voyages sur un calendrier',
      lead: 'Chaque voyage est une bande sur le calendrier. Sur téléphone, les prestations du jour s’affichent en liste.',
      visual: 'calendar',
      features: [
        { title: 'Bandes de voyage', body: ['Voyez chaque voyage de l’arrivée au départ, et la charge des semaines à venir.'] },
        { title: 'La journée sur votre téléphone', body: ['Les arrivées, transferts et visites du jour dans une liste que vous consultez entre deux réunions.'] },
        { title: 'Données des voyageurs', body: ['Les voyageurs remplissent leur passeport, leur régime et leurs besoins d’accessibilité via un lien vers un formulaire, et les réponses arrivent sur le voyage.'] }
      ]
    }
  ],
  faq: [
    { q: 'Mes guides et chauffeurs peuvent-ils voir le voyage ?', a: ['Ils reçoivent par e-mail une fiche de service avec ce dont ils ont besoin : dates, horaires, noms et point de rendez-vous.'] },
    { q: 'Que se passe-t-il si le client change une date ?', a: ['Mettez le voyage à jour. Les prestations, la page du programme et les fiches de service suivent le changement, et les prestations à réserver de nouveau repassent en à réserver.'] },
    { q: 'Comment les e-mails des prestataires arrivent-ils sur le voyage ?', a: ['Les e-mails des prestataires sont classés automatiquement dans le voyage.'] }
  ]
};

const getPaid: JobPage = {
  slug: 'get-paid',
  metaTitle: 'Encaisser et facturer : paiements, factures | Traviosoft',
  metaDescription:
    'Acompte et solde dans le devis, liens de paiement dans l’e-mail, factures et avoirs avec les mêmes chiffres, et un tableau de bord des ventes.',
  name: 'Encaisser',
  menuLine: 'Paiements, factures et vos chiffres',
  step: '3 sur 4',
  heroTitle: 'Paiements, factures et chiffres',
  heroLead:
    'Les paiements et les factures viennent du devis accepté, donc les montants concordent.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Échéancier',
      title: 'Acompte et solde avec échéances',
      lead: 'L’acompte et le solde sont fixés dans le devis, avec leurs échéances.',
      visual: 'payments',
      features: [
        { title: 'Acompte et solde', body: ['Un pourcentage ou un montant, chacun avec sa date d’échéance, sur chaque voyage.'] },
        { title: 'Ce qui est dû cette semaine', body: ['Tous les paiements dus ou échus, sur l’ensemble de vos voyages, dans une seule liste.'] },
        { title: 'Rappels de paiement', body: ['Des rappels partent vers le client avant et après une échéance, dans sa langue.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Liens de paiement',
      title: 'Liens de paiement dans l’e-mail',
      lead: 'Votre lien de paiement part avec l’e-mail, et le client paie depuis ce lien.',
      visual: 'payments',
      features: [
        { title: 'Votre propre lien de paiement', body: ['Connectez le lien de paiement que vous utilisez déjà. Il part avec l’e-mail du devis.'] },
        { title: 'Enregistrez un paiement en un clic', body: ['Un virement ou un paiement par carte est enregistré sur le voyage, et la pastille de paiement se met à jour seule.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Factures',
      title: 'Des factures depuis le voyage',
      lead: 'Les factures d’acompte et finale sont faites à partir du voyage, avec les montants du devis.',
      visual: 'invoices',
      features: [
        { title: 'Factures d’acompte et finale', body: ['Faites depuis le voyage en un clic, avec les coordonnées du client et les bons montants.'] },
        { title: 'Avoirs', body: ['Une annulation ou une modification devient un avoir lié à la facture d’origine.'] },
        { title: 'Numérotation par société', body: ['Gérez deux sociétés depuis un seul endroit, chacune avec sa propre numérotation de factures.'] },
        { title: 'Les règles fiscales de votre pays', body: ['Les régimes spéciaux de TVA pour les agences de voyages et la facturation électronique s’activent par pays dans les réglages. Les agences espagnoles, par exemple, disposent du REAV et de Veri*Factu.'] },
        { title: 'Prêt pour votre comptable', body: ['Un récapitulatif Excel ou un zip de tous les PDF en fin de mois, en deux clics.'] },
        { title: 'Export comptable', body: ['Vos ventes, achats et paiements sous forme d’écritures, prêts pour votre logiciel de comptabilité.'], premium: true }
      ]
    },
    {
      id: 'dashboard',
      kicker: 'Tableau de bord',
      title: 'Ventes, voyages et trésorerie',
      lead: 'Ventes, voyages, encaissements et décaissements, sur la période de votre choix.',
      visual: 'dashboard',
      features: [
        { title: 'Ventes et voyages', body: ['Ce que vous avez vendu et combien de voyages, ce mois-ci, cette saison ou cette année.'] },
        { title: 'Encaissements et décaissements', body: ['Ce que les clients vous ont payé et ce que vous devez aux prestataires, côte à côte.'] },
        { title: 'Aujourd’hui', body: ['Rappels, paiements dus et réservations à confirmer, réunis pour la journée.'] }
      ]
    }
  ],
  faq: [
    { q: 'Quels prestataires de paiement fonctionnent ?', a: ['Vous ajoutez le lien de paiement du prestataire que vous utilisez déjà. Le client paie là-bas, et vous enregistrez le paiement sur le voyage.'] },
    { q: 'Mon comptable peut-il récupérer les fichiers ?', a: ['Oui. Exportez un récapitulatif Excel ou un zip de toutes les factures PDF pour n’importe quelle période.'] },
    { q: 'Suit-il les règles de mon pays ?', a: ['La numérotation des factures par société et les avoirs fonctionnent partout. Les régimes propres à chaque pays s’activent dans les réglages : aujourd’hui, cela inclut le REAV et Veri*Factu en Espagne. Pour les autres pays, demandez-nous pendant la démo.'] }
  ]
};

const setup: JobPage = {
  slug: 'setup',
  metaTitle: 'Votre configuration : marques, langues, données | Traviosoft',
  metaDescription:
    'Plusieurs marques dans un compte, documents dans la langue du client, plusieurs devises, réglages par pays, votre équipe, vos données dans l’UE et des connexions à vos autres outils.',
  name: 'Votre configuration',
  menuLine: 'Marques, langues, devises, équipe et données',
  step: '4 sur 4',
  heroTitle: 'Marques, langues, devises et équipe',
  heroLead:
    'Réglages des marques, langues, devises, règles fiscales par pays et utilisateurs. Ils s’appliquent à chaque voyage.',
  heroVisual: 'brands',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marques',
      title: 'Plusieurs marques dans un compte',
      lead: 'Gérez une deuxième marque ou une deuxième société au même endroit, chacune avec son identité et sa numérotation.',
      visual: 'brands',
      features: [
        { title: 'Logo et couleurs par marque', body: ['Chaque devis, proposition, programme et facture porte la marque du voyage.'], premium: true },
        { title: 'Numérotation par société', body: ['Chaque entité juridique garde sa propre numérotation de factures.'], premium: true }
      ]
    },
    {
      id: 'languages',
      kicker: 'Langues',
      title: 'Des documents dans la langue du client',
      lead: 'Devis, e-mails, propositions et programmes en espagnol, anglais, français et plus.',
      visual: 'languages',
      features: [
        { title: 'Documents par langue', body: ['Chaque client a une langue, et chaque document la suit.'] },
        { title: 'Traductions automatiques', body: ['Les descriptions de produits de votre catalogue sont traduites pour vous, et vous pouvez corriger n’importe quelle traduction.'] },
        { title: 'Modèles d’e-mail par langue', body: ['Vos propres formulations dans chaque langue, utilisées automatiquement.'] }
      ]
    },
    {
      id: 'currencies',
      kicker: 'Devises',
      title: 'Plusieurs devises',
      lead: 'Des lodges en dollars, un client en livres, votre comptabilité en euros. Chaque devis a sa devise, et vos chiffres se totalisent dans la vôtre.',
      visual: 'payments',
      features: [
        { title: 'Une devise par client et par devis', body: ['Chiffrez un client britannique en livres et un partenaire américain en dollars, depuis le même catalogue.'], premium: true },
        { title: 'Les prix fournisseurs dans leur devise', body: ['Gardez chaque tarif dans la devise de facturation du prestataire. Le devis le convertit au cours du jour, avec la marge de sécurité de votre choix.'], premium: true },
        { title: 'Taux de change quotidiens', body: ['Les taux de la Banque centrale européenne sont récupérés chaque jour ouvré, ou vous fixez les vôtres.'], premium: true },
        { title: 'Votre comptabilité dans une seule devise', body: ['Factures, paiements, marges et rapports se totalisent dans votre devise comptable, avec les gains et pertes de change calculés pour vous.'], premium: true }
      ]
    },
    {
      id: 'country',
      kicker: 'Réglages par pays',
      title: 'Règles fiscales par pays',
      lead: 'Les régimes fiscaux et la facturation électronique sont des réglages, activés pour les pays qui en ont besoin.',
      visual: 'invoices',
      features: [
        { title: 'Régimes de TVA des agences de voyages', body: ['Quand un pays a un régime spécial de TVA pour les agences de voyages, les bonnes mentions apparaissent sur vos factures.'] },
        { title: 'Facturation électronique', body: ['Là où la transmission est obligatoire, elle est intégrée à la facture. En Espagne, par exemple, Veri*Factu avec son code QR.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Équipe',
      title: 'Utilisateurs et équipes',
      lead: 'Tout le monde travaille sur les mêmes clients, devis et réservations.',
      visual: 'team',
      features: [
        { title: 'Utilisateurs inclus dans votre offre', body: ['3 utilisateurs dans les deux offres, et davantage dès que votre équipe grandit.'] },
        { title: 'Équipes, portefeuilles et rôles', body: ['Donnez à chaque équipe et à chaque personne ses propres clients et voyages, et décidez qui voit quoi.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Vos données',
      title: 'Données et hébergement',
      lead: 'Chaque agence a son propre espace séparé, hébergé dans l’Union européenne, à part de toutes les autres agences.',
      visual: 'safe',
      features: [
        { title: 'Un espace à part pour votre agence', body: ['Vos données vivent dans leur propre espace, à part des autres agences.'] },
        { title: 'Hébergé dans l’UE', body: ['Vos données restent dans l’Union européenne, sous le RGPD.'] },
        { title: 'Repartez avec vos données', body: ['Si vous arrêtez, vous récupérez vos données dans des formats standard.'] }
      ]
    },
    {
      id: 'connections',
      kicker: 'Connexions',
      title: 'Connexions',
      lead: 'Vos autres logiciels peuvent lire et écrire vos données Traviosoft, avec les mêmes droits que dans l’application.',
      visual: 'connections',
      features: [
        { title: 'Votre site et votre comptabilité', body: ['Votre site, votre logiciel de comptabilité ou un développeur avec qui vous travaillez peuvent lire et écrire vos données Traviosoft.'], premium: true },
        { title: 'Vos outils d’IA', body: ['Connectez l’assistant d’IA que vous utilisez déjà, comme Claude ou ChatGPT, à vos données Traviosoft, avec les mêmes droits que la personne qui le connecte.'], premium: true },
        { title: 'L’assistant dans Traviosoft', body: ['Demandez ce qui vous attend aujourd’hui, faites préparer un devis depuis votre catalogue ou transformez la grille tarifaire d’un prestataire en prix catalogue. Chaque changement attend votre accord.'], premium: true }
      ]
    }
  ],
  faq: [
    { q: 'Où sont mes données ?', a: ['Dans un espace à part pour votre agence, hébergé dans l’Union européenne.'] },
    { q: 'Puis-je partir avec mes données ?', a: ['Oui. Vous récupérez vos données dans des formats standard.'] },
    { q: 'Qui peut voir quoi ?', a: ['Avec Classic, chaque utilisateur voit les voyages de l’agence. Avec Premium, chaque équipe et chaque personne peut avoir ses propres clients, voyages et droits.'] }
  ]
};

export const jobs: Record<JobSlug, JobPage> = { sell, book, 'get-paid': getPaid, setup };
