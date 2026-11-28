import type { Article } from '../types';

// Articles ajoutés le 28 novembre 2026, choisis à partir des requêtes Search Console et des volumes du planificateur de mots clés Google Ads.

const dmc: Article = {
  key: 'what-is-a-dmc',
  kind: 'guide',
  slug: 'qu-est-ce-qu-une-dmc',
  metaTitle: 'Qu’est-ce qu’une DMC (agence réceptive) ?',
  metaDescription:
    'Ce qu’est une DMC, ce qu’elle organise, qui sont ses clients, ce qui la distingue d’un tour-opérateur, d’une agence de voyages et d’un office de tourisme, et comment elle fixe ses prix.',
  title: 'Qu’est-ce qu’une DMC ?',
  lead: 'Une DMC (destination management company), ou agence réceptive, est une entreprise installée dans une destination qui organise ce que les voyageurs y font : transferts, guides, excursions, hôtels, restaurants et événements. Ses clients sont en général des tour-opérateurs, des agences de voyages et des organisateurs d’événements, qui vendent le voyage au voyageur.',
  updated: '2026-11-28',
  card: 'Ce qu’organise une DMC, qui sont ses clients et comment elle fixe ses prix.',
  related: ['hotel-allotment', 'package-quote', 'quote-with-margins', 'net-commissionable-rates', 'best-dmc-software'],
  blocks: [
    { type: 'h2', text: 'Définition', id: 'definition' },
    {
      type: 'p',
      text: 'L’ADMEI, l’association internationale des DMC, définit une DMC comme une entreprise de services installée dans sa destination, spécialisée dans l’expertise et les ressources locales. Elle la décrit comme un partenaire pour l’événementiel, les visites et activités, le transport, les animations et la logistique des programmes.'
    },
    {
      type: 'p',
      text: 'En Europe, on parle aussi de tourisme réceptif : agence réceptive en français, agencia receptiva en espagnol, incoming en italien et turismo recetivo en portugais.'
    },
    { type: 'h2', text: 'Ce qu’organise une DMC', id: 'services' },
    {
      type: 'list',
      items: [
        'Les transferts entre l’aéroport, les hôtels et les lieux visités.',
        'Les hôtels, souvent à des tarifs négociés pour la saison.',
        'Les guides, excursions, visites et activités.',
        'Les restaurants, dîners privés et soirées à thème.',
        'Pour les groupes et les événements : les lieux, la logistique des congrès et les voyages incentive.',
        'Le suivi sur place pendant le séjour des voyageurs.'
      ]
    },
    {
      type: 'p',
      text: 'Smart Meetings compare la DMC à la fois à l’architecte et à l’entreprise générale d’un programme : elle conçoit la proposition, choisit et coordonne les prestataires locaux et suit le programme sur place.'
    },
    { type: 'h2', text: 'Qui sont ses clients', id: 'clients' },
    {
      type: 'list',
      items: [
        'Des tour-opérateurs et agences de voyages d’autres pays, qui vendent le voyage à leurs propres clients.',
        'Des organisateurs de séminaires, voyages incentive et événements (MICE), pour les groupes et les programmes d’entreprise.',
        'Des entreprises qui organisent un voyage ou un événement pour leurs équipes.',
        'Certaines DMC vendent aussi directement aux voyageurs.'
      ]
    },
    { type: 'h2', text: 'DMC, tour-opérateur, agence de voyages et office de tourisme', id: 'differences' },
    {
      type: 'table',
      head: ['Terme', 'Ce qu’il désigne en général'],
      rows: [
        ['DMC', 'Une entreprise de la destination qui organise les prestations sur place et les vend aux agences, aux tour-opérateurs et aux organisateurs d’événements.'],
        ['Tour-opérateur', 'Une entreprise qui conçoit des voyages, souvent dans plusieurs destinations, et les vend par des agences ou en direct. Il travaille souvent avec une DMC dans chaque destination.'],
        ['Agence de voyages', 'Une entreprise qui vend des voyages aux voyageurs. Une agence de voyages sur mesure conçoit le voyage avec le voyageur et réserve les prestations, parfois par une DMC.'],
        ['DMO (office de tourisme)', 'Un organisme de gestion ou de promotion de la destination, en général public ou associatif. Il ne vend en général pas de voyages.']
      ]
    },
    {
      type: 'p',
      text: 'Ces activités se recoupent. Une DMC peut aussi être tour-opérateur, et une agence sur mesure peut organiser elle-même sa destination. Le statut juridique de chaque entreprise dépend des règles de son pays pour les activités de voyage.'
    },
    { type: 'h2', text: 'Comment une DMC fixe ses prix', id: 'pricing' },
    {
      type: 'p',
      text: 'Une DMC achète en général à ses prestataires à des tarifs nets, ajoute sa marge et vend à l’agence ou au tour-opérateur, qui ajoute sa propre marge ou perçoit une commission. Les pages [Tarifs nets et tarifs commissionnables](/guides/tarifs-nets-et-tarifs-commissionnables) et [Comment se calcule le prix d’un voyage sur mesure](/guides/devis-voyage-sur-mesure-avec-marge) montrent le calcul avec des chiffres.'
    },
    {
      type: 'p',
      text: 'Pour les groupes et les programmes réguliers, une DMC bloque souvent des chambres dans des hôtels sous forme d’allotement, avec une date de release pour les chambres non vendues. La page [L’allotement hôtelier et la date de release](/guides/allotement-hotel-date-de-release) explique le fonctionnement.'
    },
    { type: 'h2', text: 'Une demande, étape par étape', id: 'steps' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Une agence envoie une demande : dates, nombre de voyageurs, budget et envies.',
        'La DMC vérifie les disponibilités auprès de ses prestataires et prépare un programme avec un prix.',
        'L’agence confirme, souvent après une ou deux versions.',
        'La DMC réserve chaque prestation, réunit les confirmations et envoie les vouchers et la rooming list.',
        'Les voyageurs arrivent ; la DMC suit le programme sur place.',
        'La DMC facture l’agence et paie ses prestataires.'
      ]
    },
    {
      type: 'p',
      text: 'Selon Smart Meetings, certaines DMC estiment qu’un quart ou moins de leurs propositions débouche sur un contrat, d’où l’importance du temps passé sur chaque proposition.'
    },
    { type: 'h2', text: 'Associations', id: 'associations' },
    {
      type: 'p',
      text: 'L’ADMEI (Association of Destination Management Executives International) réunit des DMC. Ses conditions d’adhésion demandent des visites et activités et du transport, plus au moins deux activités parmi l’événementiel, les animations et la logistique des programmes. Beaucoup de pays ont aussi des associations nationales d’agences réceptives.'
    },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Traviosoft est un [logiciel de gestion pour agences de voyages sur mesure et DMC](/). Il réunit les demandes, un catalogue avec les tarifs nets par saison, les devis avec marge et commission, les réservations auprès de chaque prestataire, les paiements et les factures, pour chaque voyage.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Que veut dire DMC ?', a: ['Destination management company, soit société de gestion de la destination. Dans le tourisme et l’événementiel, le sigle désigne presque toujours une agence réceptive.'] },
        { q: 'Une DMC est-elle une agence de voyages ?', a: ['Une DMC travaille dans la destination et vend surtout à d’autres entreprises du voyage. Selon le pays, elle peut détenir une licence d’agence de voyages ou de tour-opérateur.'] },
        { q: 'Quelle différence entre une DMC et un office de tourisme ?', a: ['Une DMC est une entreprise qui vend des prestations dans une destination. Un office de tourisme est en général un organisme public ou associatif qui fait la promotion de la destination.'] },
        { q: 'Comment une DMC gagne-t-elle de l’argent ?', a: ['Par la marge entre les tarifs nets qu’elle paie à ses prestataires et le prix auquel elle vend. Certaines facturent aussi les propositions ou les repérages.'] }
      ]
    },
    {
      type: 'p',
      text: 'Sources (en anglais) : [conditions d’adhésion de l’ADMEI](https://growthzonesitesprod.azureedge.net/wp-content/uploads/sites/1073/2020/03/DMC-MEMBERSHIP-REQUIREMENTS.pdf), [Smart Meetings, « The evolution of the DMC »](https://www.smartmeetings.com/meeting-planning/133619/evolution-dmc), [Wikipédia, « Destination management »](https://en.wikipedia.org/wiki/Destination_management). Consultées le 28 novembre 2026.'
    }
  ]
};

const allotment: Article = {
  key: 'hotel-allotment',
  kind: 'guide',
  slug: 'allotement-hotel-date-de-release',
  metaTitle: 'Allotement hôtelier : date de release, cut-off et wash',
  metaDescription:
    'Ce qu’est un allotement hôtelier, comment fonctionnent la date de release et le cut-off, ce que deviennent les chambres non vendues, et ce que veulent dire wash et attrition, avec un exemple.',
  title: 'L’allotement hôtelier et la date de release',
  lead: 'Un allotement est un nombre de chambres qu’un hôtel réserve à un tour-opérateur, une DMC ou une agence, à un tarif convenu, pour une période. Les chambres non vendues à la date de release reviennent à l’hôtel, qui les vend par ses autres canaux.',
  updated: '2026-11-28',
  card: 'Allotement, date de release, cut-off, wash et attrition, avec un exemple.',
  related: ['rooming-list', 'what-is-a-dmc', 'net-commissionable-rates', 'quote-with-margins'],
  blocks: [
    { type: 'h2', text: 'Ce qu’est un allotement', id: 'definition' },
    {
      type: 'p',
      text: 'L’hôtel met de côté un nombre de chambres par nuit pour un partenaire, pour une saison entière, une partie de saison ou des dates précises, à un tarif fixé à l’avance. Le partenaire vend ces chambres à ses propres clients, dans un voyage ou un programme. Les chambres hors allotement se réservent à la demande : chaque réservation attend la confirmation de l’hôtel.'
    },
    {
      type: 'p',
      text: 'D’après Wikipédia, les hôtels accordent surtout des allotements à des partenaires qui ont un historique de ventes, à des tarifs inférieurs de 10 % à 50 % au prix public.'
    },
    { type: 'h2', text: 'Date de release et cut-off', id: 'release' },
    {
      type: 'p',
      text: 'Le délai de release, aussi appelé cut-off, est le nombre de jours avant l’arrivée auquel les chambres non vendues reviennent à l’hôtel. Après cette date, une nouvelle réservation dépend de ce que l’hôtel a encore de disponible.'
    },
    {
      type: 'table',
      head: ['Source', 'Délai de release indiqué'],
      rows: [
        ['Wikipédia et Xotels', 'Un exemple à 4 jours avant l’arrivée'],
        ['Fáilte Ireland', '14 ou 7 jours avant la date bloquée, à midi'],
        ['Roommaster', '21 à 45 jours pour la plupart des marchés loisirs ; plus court pour les allotements d’entreprise']
      ]
    },
    { type: 'p', text: 'Le contrat avec chaque hôtel fixe le délai. Il peut changer selon la saison.' },
    { type: 'h2', text: 'Deux formes d’allotement', id: 'kinds' },
    {
      type: 'list',
      items: [
        '**Fixe :** un nombre de chambres par nuit, avec une seule date de release pour tout le bloc.',
        '**À la demande (call-off) :** le partenaire prend des chambres dans un stock au fil des réservations, et les chambres sont libérées au fur et à mesure.'
      ]
    },
    {
      type: 'p',
      text: 'Un bloc de chambres pour un groupe fonctionne de la même façon pour un seul séjour : l’hôtel garde les chambres jusqu’à une date limite, à laquelle il attend la rooming list.'
    },
    { type: 'h2', text: 'Wash et attrition', id: 'wash' },
    {
      type: 'list',
      items: [
        '**Wash :** la part d’un bloc restée invendue à la date de release. Un partenaire qui vend 70 chambres sur un bloc de 100 a un wash de 30 %.',
        '**Attrition :** une clause qui fixe ce que le partenaire paie s’il utilise moins de chambres que prévu.'
      ]
    },
    {
      type: 'p',
      text: 'Les hôtels comparent aussi les allotements aux niveaux de production convenus, chaque trimestre ou chaque année. Quand un allotement est moins utilisé que prévu, le contrat peut permettre à l’hôtel de le réduire ou de changer le tarif.'
    },
    { type: 'h2', text: 'Exemple', id: 'example' },
    {
      type: 'p',
      text: 'Une DMC dispose de 10 chambres doubles par nuit dans un hôtel de mai à septembre, avec un délai de release de 21 jours. Pour la nuit du 12 juin, la date de release est le 22 mai.'
    },
    {
      type: 'table',
      head: ['Date', 'Chambres vendues', 'Chambres bloquées'],
      rows: [
        ['1er mai', '4', '10'],
        ['22 mai (date de release)', '7', '7 : les 3 chambres invendues reviennent à l’hôtel'],
        ['2 juin', '8', 'La 8e chambre est réservée à la demande']
      ]
    },
    { type: 'p', text: 'Pour cette nuit, le wash est de 3 chambres sur 10, soit 30 %. (Exemple inventé pour cette page.)' },
    { type: 'h2', text: 'La rooming list', id: 'rooming-list' },
    {
      type: 'p',
      text: 'Pour un groupe, l’hôtel attend en général les noms à la date limite, dans une rooming list. La page [La rooming list pour les groupes et les événements MICE](/guides/rooming-list-groupes-mice) décrit son contenu.'
    },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Dans Traviosoft, chaque réservation auprès d’un hôtel est une tâche du voyage, de la demande à la confirmation de l’hôtel, et la rooming list par hôtel se construit à partir de qui partage avec qui.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Quelle différence entre un allotement et un bloc groupe ?', a: ['Un allotement couvre une période, souvent une saison, et le partenaire vend les chambres à de nombreux clients. Un bloc groupe couvre le séjour d’un seul groupe.'] },
        { q: 'Que se passe-t-il après la date de release ?', a: ['Les chambres invendues reviennent à l’hôtel, qui peut les vendre à ses tarifs du moment. Une réservation plus tardive dépend des disponibilités.'] },
        { q: 'Le délai de release est-il un délai d’annulation ?', a: ['Ce sont deux clauses distinctes. Le délai de release porte sur les chambres non vendues ; les conditions d’annulation portent sur les chambres déjà réservées.'] }
      ]
    },
    {
      type: 'p',
      text: 'Sources (en anglais) : [Wikipédia, « Allotment (travel industry) »](https://en.wikipedia.org/wiki/Allotment_(travel_industry)), [glossaire Xotels, allotment](https://xotels.com/en/glossary/allotment) et [cut-off](https://xotels.com/en/glossary/cut-off), [Fáilte Ireland, conditions pour les contrats B2B](https://failteireland.ie/FailteIreland/media/WebsiteStructure/Documents/Brexit/Considerations-for-T-Cs-for-B2B-Contracting-Accomm-Providers.pdf), [Roommaster](https://www.roommaster.com/blog/hotel-allotment-management), [Mews](https://www.mews.com/en/blog/hotel-room-allotment). Consultées le 28 novembre 2026.'
    }
  ]
};

const PKG_DISCLAIMER =
  'Information générale, rédigée le 28 novembre 2026 à partir du texte de la directive européenne. Elle ne constitue pas un conseil juridique et n’a aucune valeur légale. Chaque pays applique la directive par sa propre loi, qui peut ajouter des règles : vérifiez les textes officiels ou demandez à un conseiller qualifié. Traviosoft décline toute responsabilité pour les décisions prises sur la base de cette page.';

const packageQuote: Article = {
  key: 'package-quote',
  kind: 'guide',
  slug: 'devis-voyage-a-forfait-informations',
  metaTitle: 'Devis de voyage à forfait : les informations de la directive',
  metaDescription:
    'Quand un voyage sur mesure est un forfait au sens de la directive (UE) 2015/2302, et les informations que le devis et le contrat donnent au voyageur : programme, prix, paiements, annulation.',
  title: 'Ce que contient un devis de voyage à forfait',
  lead: 'Quand une agence combine un vol, un hôtel, une voiture ou une excursion pour un même voyage, le voyage est souvent un forfait au sens de la directive européenne sur les voyages à forfait. La directive liste les informations que le voyageur reçoit avant de réserver, et ce que le contrat y ajoute.',
  updated: '2026-11-28',
  card: 'Quand un voyage est un forfait, et les informations du devis et du contrat.',
  related: ['quote-with-margins', 'what-is-a-dmc', 'eu-vat-travel', 'gdpr-travel'],
  blocks: [
    { type: 'callout', text: PKG_DISCLAIMER },
    { type: 'h2', text: 'Quand un voyage est un forfait', id: 'package' },
    {
      type: 'p',
      text: 'L’article 3 de la directive (UE) 2015/2302 distingue quatre types de services de voyage : le transport de passagers, l’hébergement, la location de voitures et de motos, et les autres services touristiques comme les excursions ou les visites guidées. Un forfait est la combinaison d’au moins deux types différents pour le même voyage, dans l’un de ces cas :'
    },
    {
      type: 'list',
      items: [
        'un professionnel les combine avant la conclusion d’un contrat unique, y compris à la demande du voyageur ;',
        'ils sont achetés auprès d’un seul point de vente et choisis avant que le voyageur accepte de payer ;',
        'ils sont proposés ou facturés à un prix forfaitaire ou global ;',
        'ils sont annoncés ou vendus sous le nom de « forfait » ou un nom similaire ;',
        'ils sont réservés par des processus de réservation en ligne liés, dans les conditions de l’article.'
      ]
    },
    {
      type: 'p',
      text: 'Un hôtel combiné seulement avec des services touristiques comme des excursions n’est pas un forfait quand ces services ne représentent pas une part significative de la valeur du voyage et ne sont pas présentés comme un élément essentiel.'
    },
    { type: 'h2', text: 'Les informations données avant la réservation', id: 'information' },
    {
      type: 'p',
      text: 'Selon l’article 5, avant que le voyageur soit engagé, l’organisateur remet le formulaire d’information standard de l’annexe I et les informations suivantes :'
    },
    {
      type: 'table',
      head: ['Article 5(1)', 'Information'],
      rows: [
        ['a)', 'Les caractéristiques principales : destinations, itinéraire, dates et nombre de nuits ; transport, horaires et escales ; situation, caractéristiques et catégorie de l’hébergement ; repas ; visites et excursions incluses ; voyage en groupe ou non, et taille approximative du groupe ; langue des prestations guidées ; adaptation du voyage aux personnes à mobilité réduite.'],
        ['b)', 'La dénomination commerciale et l’adresse de l’organisateur et du détaillant, avec téléphone et e-mail.'],
        ['c)', 'Le prix total, taxes, redevances et autres frais compris, ou le type de frais restant à payer quand ils ne peuvent pas être calculés à l’avance.'],
        ['d)', 'Les modalités de paiement : l’acompte en montant ou en pourcentage, et les dates du solde.'],
        ['e)', 'Le nombre minimum de voyageurs, s’il y en a un, et la date jusqu’à laquelle le voyage peut être annulé si ce nombre n’est pas atteint.'],
        ['f)', 'Des informations générales sur les passeports, visas et formalités sanitaires de la destination.'],
        ['g)', 'Le fait que le voyageur peut annuler à tout moment avant le départ, moyennant des frais de résolution.'],
        ['h)', 'Les assurances, facultatives ou obligatoires, couvrant l’annulation ou l’assistance et le rapatriement.']
      ]
    },
    {
      type: 'p',
      text: 'L’article 5(3) demande que ces informations soient données de manière claire, compréhensible et apparente, et lisibles lorsqu’elles sont écrites.'
    },
    { type: 'h2', text: 'Ce que le contrat ajoute', id: 'contract' },
    { type: 'p', text: 'L’article 7 liste ce que le contrat de voyage à forfait contient en plus des informations ci-dessus :' },
    {
      type: 'list',
      items: [
        'les demandes particulières acceptées par l’organisateur ;',
        'le fait que l’organisateur est responsable de la bonne exécution des services et doit aider les voyageurs en difficulté ;',
        'le nom et les coordonnées de la protection contre l’insolvabilité ;',
        'un représentant local ou un point de contact pour l’aide et les réclamations ;',
        'l’obligation de signaler sans tarder tout problème pendant le voyage ;',
        'pour les mineurs voyageant seuls, un contact sur le lieu de séjour ;',
        'les procédures de réclamation, y compris le règlement extrajudiciaire des litiges ;',
        'le droit de céder le contrat à un autre voyageur.'
      ]
    },
    {
      type: 'p',
      text: 'Le voyageur reçoit une copie ou une confirmation du contrat sur un support durable, comme un PDF. En temps utile avant le départ, l’organisateur envoie les reçus, vouchers et billets ainsi que les horaires de départ et de retour.'
    },
    { type: 'h2', text: 'Changement de prix après la réservation', id: 'price' },
    {
      type: 'p',
      text: 'Selon l’article 10, le prix ne peut augmenter après la réservation que si le contrat le prévoit, et seulement à cause d’un changement du coût du carburant pour le transport, des taxes et redevances fixées par des tiers ou des taux de change. Le voyageur est informé au plus tard 20 jours avant le départ, avec le calcul. Au-delà de 8 % du prix total, le voyageur peut accepter le changement ou annuler sans frais. Quand ces coûts baissent, le voyageur a droit à une réduction de prix.'
    },
    { type: 'h2', text: 'Annulation', id: 'cancellation' },
    {
      type: 'list',
      items: [
        'Le voyageur peut annuler à tout moment avant le départ, moyennant des frais appropriés et justifiables. Le contrat peut fixer des frais standard selon la date d’annulation (article 12(1)).',
        'Le voyageur annule sans frais quand des circonstances exceptionnelles et inévitables, sur place ou à proximité, affectent considérablement le voyage (article 12(2)).',
        'L’organisateur peut annuler quand le nombre de voyageurs inscrits est inférieur au minimum indiqué : au plus tard 20 jours avant un voyage de plus de six jours, 7 jours avant un voyage de deux à six jours et 48 heures avant un voyage plus court (article 12(3)).',
        'Les remboursements sont versés dans les 14 jours suivant l’annulation (article 12(4)).'
      ]
    },
    { type: 'h2', text: 'Le nom du forfait dans chaque langue', id: 'names' },
    {
      type: 'p',
      text: 'La directive parle de « voyage à forfait » en français, de « package » en anglais, de « viaje combinado » en espagnol, de « pacchetto turistico » en italien et de « viagem organizada » en portugais. Chaque pays l’a reprise dans sa propre loi ; en France, c’est le Code du tourisme.'
    },
    { type: 'h2', text: 'Dans Traviosoft', id: 'traviosoft' },
    {
      type: 'p',
      text: 'Dans Traviosoft, le devis que reçoit le client montre le programme jour par jour, ce qui est inclus et non inclus, le total et le prix par personne, l’acompte et les dates du solde, et la date de validité du devis.'
    },
    { type: 'h2', text: 'Questions', id: 'faq' },
    {
      type: 'faq',
      items: [
        { q: 'Un voyage sur mesure est-il un forfait ?', a: ['Souvent, quand il combine au moins deux types de services de voyage pour le même voyage, comme un vol et un hôtel, ou un hôtel et une voiture. L’article 3 de la directive donne toutes les conditions.'] },
        { q: 'La directive s’applique-t-elle aux voyages d’affaires ?', a: ['L’article 2 exclut les forfaits achetés dans le cadre d’une convention générale pour l’organisation de voyages d’affaires entre une entreprise et un professionnel. Les autres voyages d’affaires peuvent être concernés.'] },
        { q: 'Le prix peut-il changer après la réservation ?', a: ['Seulement si le contrat le prévoit, pour les raisons listées à l’article 10, et au plus tard 20 jours avant le départ.'] }
      ]
    },
    {
      type: 'p',
      text: 'Texte officiel : [directive (UE) 2015/2302 sur EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32015L2302), disponible dans toutes les langues de l’UE.'
    }
  ]
};

export const posts: Article[] = [dmc, allotment, packageQuote];
