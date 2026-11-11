import type { JobPage, JobSlug } from '../types';

const sell: JobPage = {
  slug: 'sell',
  metaTitle: 'Vendre : demandes, catalogue et devis | Traviosoft',
  metaDescription:
    'Toutes les demandes dans une liste, un catalogue avec prix par saison et des devis avec votre marge, la TVA et la commission, dans la langue du client.',
  name: 'Vendre',
  menuLine: 'De la première demande au devis accepté',
  step: '1 sur 4',
  heroTitle: 'Répondez en premier, au bon prix.',
  heroLead:
    'Les clients réservent souvent auprès de l’agence qui répond la première avec un devis clair et juste. Traviosoft garde chaque demande sous les yeux et construit le devis avec vos propres tarifs, pour que vous puissiez l’envoyer le jour même.',
  heroVisual: 'quote',
  chapters: [
    {
      id: 'requests',
      kicker: 'Demandes',
      title: 'Chaque demande en main.',
      lead: 'Chaque demande dans une liste avec sa prochaine étape, qu’elle arrive par e-mail, par téléphone ou par WhatsApp.',
      visual: 'requests',
      features: [
        { title: 'Une seule liste de demandes', body: ['Chaque demande a un statut : vous voyez d’un coup d’œil ce qui est nouveau, ce qui a reçu un devis et ce qui attend une réponse.'] },
        { title: 'Une demande devient un projet', body: ['Quand une demande devient sérieuse, elle devient un projet. Le client, les dates, les voyageurs et vos notes restent ensemble pendant tout le voyage.'] },
        { title: 'Une fiche par client', body: ['Saisissez un nom ou une adresse e-mail que vous avez déjà : Traviosoft vous montre le client existant, et chaque client garde un seul historique.'] },
        { title: 'Rappels', body: ['Mettez une date sur une demande. Elle revient sur votre tableau de bord le bon jour.'] },
        { title: 'Tirez parti de chaque demande clôturée', body: ['Clôturez une demande avec un motif. Après une saison, vous voyez ce qu’il faut ajuster : prix, délais, destination.'] }
      ]
    },
    {
      id: 'catalogue',
      kicker: 'Catalogue',
      title: 'Vos tarifs, prêts à chiffrer.',
      lead: 'Hôtels, transferts, guides et activités, chacun avec ses prix par date. Le bon prix pour les dates du voyage est choisi pour vous.',
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
      title: 'Un devis en quelques minutes, marge comprise.',
      lead: 'Définissez vos règles de prix une fois. Chaque ligne de chaque devis les applique, donc chaque marge et chaque commission sont dans le prix.',
      visual: 'quote',
      features: [
        { title: 'Marge, TVA et commission', body: ['Une procédure de prix transforme vos tarifs nets en prix de vente : votre marge, la bonne TVA et la commission quand une agence ou un partenaire vend le voyage.'] },
        { title: 'Prix par personne', body: ['Prix par adulte ou par enfant. Le client voit un prix clair par personne et un total.'] },
        { title: 'Noms côté client', body: ['Gardez vos noms internes pour l’équipe. Le client lit un nom simple et lisible pour chaque prestation.'] },
        { title: 'Inclus et non inclus', body: ['Une liste claire de ce que le prix couvre et de ce qui reste à la charge du voyageur, convenue dès le départ.'] },
        { title: 'Versions', body: ['Le client demande un hôtel moins cher ? Créez une nouvelle version. La précédente reste, et vous pouvez la rouvrir à tout moment.'] },
        { title: 'Date d’expiration', body: ['Des raccourcis fixent la durée de validité du prix, pour que chaque devis soit accepté à un prix toujours valable.'] }
      ]
    },
    {
      id: 'send',
      kicker: 'Envoi et relance',
      title: 'Envoyé ce soir. Relancé la semaine prochaine.',
      lead: 'Envoyez le devis par e-mail dans la langue du client. Une semaine plus tard, Traviosoft vous le ramène pour une relance.',
      visual: 'followup',
      features: [
        { title: 'Modèles d’e-mail', body: ['Vos propres textes d’e-mail, dans chaque langue. Le devis est joint et l’e-mail est prêt à partir.'] },
        { title: 'Dans la langue du client', body: ['Espagnol, anglais, français et plus. Le devis, l’e-mail et les documents suivent la langue du client.'] },
        { title: 'Relance après 7 jours', body: ['Une semaine après l’envoi, le devis revient vers vous pour une relance : chaque client intéressé a de vos nouvelles, même pendant une semaine chargée.'] }
      ]
    },
    {
      id: 'proposal',
      kicker: 'Proposition',
      title: 'Une proposition que votre client aime ouvrir.',
      lead: 'Votre client reçoit un lien vers une page claire présentant le voyage, dans sa langue et à votre marque.',
      visual: 'proposal',
      features: [
        { title: 'Une page de proposition à partager', body: ['Un lien avec le voyage, les prestations et le prix. Il s’ouvre sur n’importe quel téléphone, directement depuis le lien.'] },
        { title: 'Votre marque', body: ['Votre logo et vos couleurs sur la page et sur chaque document.'] },
        { title: 'Les mêmes chiffres partout', body: ['La proposition, le PDF du devis et plus tard la facture viennent des mêmes lignes. Modifiez un prix une fois et il est juste partout.'] }
      ]
    },
    {
      id: 'partners',
      kicker: 'Agences partenaires',
      title: 'Vendez via des agences partenaires.',
      lead: 'La plupart des voyages d’un réceptif viennent d’agences à l’étranger. Envoyez le devis au partenaire, gardez son client sur le même voyage et réglez sa commission à partir des mêmes chiffres.',
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
    { q: 'Dois-je utiliser le catalogue pour chaque devis ?', a: ['Vous choisissez. Tout devis accepte une ligne ponctuelle à côté des lignes du catalogue. Le catalogue fait gagner du temps sur ce que vous vendez souvent.'] }
  ]
};

const book: JobPage = {
  slug: 'book',
  metaTitle: 'Réserver et suivre le voyage | Traviosoft',
  metaDescription:
    'Le premier paiement crée le dossier. Les statuts se mettent à jour seuls, les e-mails des prestataires sont classés et le client reçoit son programme.',
  name: 'Réserver et suivre',
  menuLine: 'Du devis accepté au voyage terminé',
  step: '2 sur 4',
  heroTitle: 'Chaque réservation confirmée, même en haute saison.',
  heroLead:
    'Une fois que le client dit oui, chaque prestation doit être réservée, confirmée et transmise aux bonnes personnes. Traviosoft tient la liste de chaque voyage, et toute l’équipe travaille sur la même.',
  heroVisual: 'order',
  chapters: [
    {
      id: 'order',
      kicker: 'Dossier',
      title: 'L’acompte ouvre le dossier.',
      lead: 'Enregistrez le premier paiement et le devis est accepté : le dossier est créé avec toutes les prestations déjà dedans.',
      visual: 'order',
      features: [
        { title: 'Une seule étape', body: ['Le premier paiement accepte le devis, crée le dossier et liste toutes les prestations à réserver, en une fois.'] },
        { title: 'Tout vient du devis', body: ['Voyageurs, dates, prestations et prix viennent du devis accepté, exactement comme le client les a vus.'] },
        { title: 'Changements après confirmation', body: ['Le client ajoute une nuit ? Mettez le voyage à jour et le dossier suit, pour que l’équipe travaille toujours sur la dernière version.'] }
      ]
    },
    {
      id: 'status',
      kicker: 'Statuts',
      title: 'Voyez ce qu’il reste à faire.',
      lead: 'Les pastilles de réservation, de voyage et de paiement se mettent à jour seules. Vous savez d’un coup d’œil quels voyages ont besoin de vous aujourd’hui.',
      visual: 'order',
      features: [
        { title: 'Une liste de réservations par voyage', body: ['Hôtel, guide, voiture, billets : chaque prestation indique si elle est à réserver, en attente du prestataire ou confirmée.'] },
        { title: 'Des pastilles qui se mettent à jour seules', body: ['Quand la dernière prestation est confirmée, le voyage apparaît comme réservé. Quand le solde est payé, la pastille de paiement passe au vert. Les statuts suivent le travail.'] },
        { title: 'Archives', body: ['Les voyages terminés vont aux archives et restent consultables. Un élément supprimé peut être restauré depuis la corbeille.'] }
      ]
    },
    {
      id: 'suppliers',
      kicker: 'Prestataires',
      title: 'Les prestataires au même endroit.',
      lead: 'Contacts, documents et tous les e-mails échangés, classés dans le bon voyage et à portée de main quand le client appelle.',
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
      title: 'Un voyage jour par jour sur son téléphone.',
      lead: 'Une fois le voyage confirmé, partagez une page avec chaque jour, les hôtels, les horaires et les contacts. Votre voyageur l’ouvre où il veut.',
      visual: 'itinerary',
      features: [
        { title: 'Une page de programme à partager', body: ['Un lien, jour par jour. Il s’ouvre sur n’importe quel téléphone, directement depuis le lien.'] },
        { title: 'Dans la langue du voyageur et à votre marque', body: ['Le programme suit la langue du client et porte votre logo.'] },
        { title: 'Toujours à jour', body: ['Changez une heure de prise en charge dans le voyage et la page affiche la nouvelle heure. Le lien reste le même.'] }
      ]
    },
    {
      id: 'groups',
      kicker: 'Groupes',
      title: 'Groupes et rooming lists.',
      lead: 'Incentives, associations, voyages scolaires : chaque voyageur nommé, chaque chambre prévue, chaque hôtel sait qui dort où.',
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
      title: 'Qui voyage cette semaine.',
      lead: 'Chaque voyage est une bande sur le calendrier. Sur votre téléphone, les prestations du jour sous forme de liste simple.',
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
  heroTitle: 'Soyez payé à temps, facturez sans ressaisir.',
  heroLead:
    'L’argent d’un voyage vit avec le voyage. Dans Traviosoft, les paiements et les factures viennent du devis accepté par le client, donc les montants concordent toujours.',
  heroVisual: 'payments',
  chapters: [
    {
      id: 'schedule',
      kicker: 'Échéancier',
      title: 'Acompte et solde, prévus dès le départ.',
      lead: 'Fixez l’acompte et le solde avec leurs dates dans le devis. Le client sait dès le premier jour ce qu’il doit payer et quand.',
      visual: 'payments',
      features: [
        { title: 'Acompte et solde', body: ['Un pourcentage ou un montant, chacun avec sa date d’échéance, sur chaque voyage.'] },
        { title: 'Ce qui est dû cette semaine', body: ['Tous les paiements dus ou échus, sur l’ensemble de vos voyages, dans une seule liste.'] },
        { title: 'Rappels de paiement', body: ['Des rappels courtois partent vers le client avant et après une date d’échéance, dans sa langue.'] }
      ]
    },
    {
      id: 'links',
      kicker: 'Liens de paiement',
      title: 'Le client paie depuis l’e-mail.',
      lead: 'Ajoutez votre lien de paiement à l’e-mail. Le client paie en quelques clics, depuis son téléphone.',
      visual: 'payments',
      features: [
        { title: 'Votre propre lien de paiement', body: ['Connectez le lien de paiement que vous utilisez déjà. Il part avec l’e-mail du devis.'] },
        { title: 'Enregistrez un paiement en un clic', body: ['Un virement ou un paiement par carte est enregistré sur le voyage, et la pastille de paiement se met à jour seule.'] }
      ]
    },
    {
      id: 'invoices',
      kicker: 'Factures',
      title: 'Des factures avec les chiffres déjà saisis.',
      lead: 'Les factures d’acompte et finale sont faites à partir du voyage. Le prix du devis passe dans la facture : les montants concordent avec le devis au centime près.',
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
      title: 'Sachez où en est votre agence.',
      lead: 'Ventes, voyages, encaissements et décaissements en un coup d’œil, sur la période de votre choix, toujours à jour.',
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
    { q: 'Suit-il les règles de mon pays ?', a: ['La numérotation des factures par société et les avoirs fonctionnent partout. Les régimes propres à chaque pays s’activent dans les réglages : aujourd’hui, cela inclut le REAV et Veri*Factu en Espagne. Dites-nous votre pays pendant la démo et nous vous dirons clairement ce qui est couvert.'] }
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
  heroTitle: 'Votre agence, configurée à votre façon.',
  heroLead:
    'Les réglages qui adaptent Traviosoft à votre agence : vos marques, vos langues, les règles de votre pays et votre équipe. Réglez-les une fois et chaque voyage les suit.',
  heroVisual: 'brands',
  chapters: [
    {
      id: 'brands',
      kicker: 'Marques',
      title: 'Plusieurs marques, un seul compte.',
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
      title: 'Chaque document dans la langue de votre client.',
      lead: 'Rédigez une fois. Devis, e-mails, propositions et programmes partent en espagnol, anglais, français et plus.',
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
      title: 'Achetez et vendez dans toutes les devises.',
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
      title: 'Les règles de votre pays, activées.',
      lead: 'Les régimes fiscaux et la facturation électronique dépendent du pays de votre agence. Ce sont des réglages, activés pour les pays qui en ont besoin.',
      visual: 'invoices',
      features: [
        { title: 'Régimes de TVA des agences de voyages', body: ['Quand un pays a un régime spécial de TVA pour les agences de voyages, les bonnes mentions apparaissent sur vos factures.'] },
        { title: 'Facturation électronique', body: ['Là où la transmission est obligatoire, elle est intégrée à la facture. En Espagne, par exemple, Veri*Factu avec son code QR.'] }
      ]
    },
    {
      id: 'team',
      kicker: 'Équipe',
      title: 'Votre équipe sur les mêmes voyages.',
      lead: 'Chacun voit le même client, le même devis et la même réservation. Ajoutez un collègue en une minute.',
      visual: 'team',
      features: [
        { title: 'Utilisateurs inclus dans votre offre', body: ['3 utilisateurs dans les deux offres, et davantage dès que votre équipe grandit.'] },
        { title: 'Équipes, portefeuilles et rôles', body: ['Donnez à chaque équipe et à chaque personne ses propres clients et voyages, et décidez qui voit quoi.'], premium: true }
      ]
    },
    {
      id: 'data',
      kicker: 'Vos données',
      title: 'Vos données, protégées et à vous.',
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
      title: 'Connectez vos autres outils.',
      lead: 'Traviosoft fonctionne avec les outils que vous utilisez déjà, avec les mêmes droits que dans l’application.',
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
