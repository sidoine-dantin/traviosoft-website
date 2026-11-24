import type { AiText } from '../types';

/** L’assistant d’IA. Source : en/ai.ts (vérifié sur apps/web/docs/MCP.md). Mots de l’app : apps/web/messages/fr.json. */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'Assistant d’IA : travaillez dans Traviosoft depuis Claude, ChatGPT ou Mistral | Traviosoft',
    metaDescription:
      'Connectez à Traviosoft l’assistant d’IA que vous utilisez déjà. Demandez ce qui vous attend, faites préparer un devis depuis votre catalogue, enregistrez une réservation ou un paiement, et validez chaque changement. Inclus dans les deux offres.',
    name: 'Assistant d’IA',
    menuLine: 'Travailler dans Traviosoft depuis Claude ou ChatGPT',
    step: '5 sur 5',
    heroTitle: 'Travaillez dans Traviosoft depuis votre assistant d’IA',
    heroLead:
      'Connectez Claude, ChatGPT ou Mistral au Traviosoft de votre agence. Il travaille sur vos vrais clients, prix et voyages, avec les droits que vous lui donnez.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'approve',
        kicker: 'Validation',
        title: 'Vous validez chaque changement',
        lead: 'L’assistant consulte seul et vous demande avant de modifier quoi que ce soit.',
        visual: 'confirm',
        features: [
          { title: 'Une question avant chaque changement', body: ['Avant chaque changement, Claude, ChatGPT et Mistral vous demandent votre accord dans la conversation. Rien ne change tant que vous ne l’autorisez pas.'] },
          { title: 'Suppressions validées dans Traviosoft', body: ['Si vous autorisez la suppression, chaque suppression attend dans Traviosoft que vous la validiez, et elle est enregistrée à votre nom.'] },
          { title: 'Chaque changement dans l’historique', body: ['Ce que fait l’assistant apparaît dans l’historique d’activité de Traviosoft, au nom de la personne qui l’a connecté.'] }
        ]
      },
      {
        id: 'rights',
        kicker: 'Accès',
        title: 'Les droits de la personne',
        lead: 'L’assistant peut faire ce que la personne qui l’a connecté peut faire dans Traviosoft, et rien de plus.',
        visual: 'team',
        features: [
          { title: 'Qui peut connecter', body: ['L’administrateur choisit qui peut connecter un assistant d’IA, et si les personnes qui arrivent plus tard le peuvent.'] },
          { title: 'Consulter ou modifier', body: ['L’administrateur décide si les assistants peuvent faire des changements ou seulement consulter.'] },
          { title: 'Coûts et marges', body: ['Les prix d’achat et les marges n’arrivent à l’assistant que pour les personnes qui les voient dans Traviosoft.'] },
          { title: 'Déconnecter à tout moment', body: ['Déconnectez depuis l’app d’IA, ou un administrateur coupe n’importe quelle connexion depuis Traviosoft, immédiatement.'] }
        ]
      },
      {
        id: 'connect',
        kicker: 'Connexion',
        title: 'Connecter votre assistant',
        lead: 'Ajoutez Traviosoft comme connecteur dans votre app d’IA, connectez-vous et choisissez ce qu’il peut faire.',
        visual: 'connections',
        features: [
          { title: 'Claude, ChatGPT et Mistral', body: ['Ajoutez l’adresse Traviosoft de votre agence comme connecteur. Votre app d’IA vous envoie ensuite sur Traviosoft pour vous connecter.'] },
          { title: 'Lecture seule, ou lire et modifier', body: ['À la connexion, vous choisissez ce que votre assistant peut faire, et s’il peut aussi supprimer.'] },
          { title: 'Inclus dans les deux offres', body: ['Connecter votre assistant d’IA fait partie de Classic et de Premium, pour chaque personne que l’administrateur autorise.'] }
        ]
      }
    ],
    faq: [
      { q: 'Quelles apps d’IA puis-je utiliser ?', a: ['Toute app d’IA qui peut ajouter un connecteur MCP, le standard ouvert qui permet aux apps d’IA de se connecter à d’autres logiciels. Claude, ChatGPT et Mistral vous demandent votre accord dans la conversation avant chaque changement, et Traviosoft le fait dès que vous l’autorisez. Avec une autre app, Traviosoft ne peut pas être sûr qu’elle vous demande d’abord, alors ses changements attendent votre accord dans Traviosoft, dans Revue des changements.'] },
      { q: 'L’assistant voit-il toutes nos données ?', a: ['Il voit exactement ce que la personne qui l’a connecté a le droit de voir dans Traviosoft, selon son rôle : les mêmes clients, voyages et équipes, et les prix d’achat et les marges seulement si son rôle les montre. Si son rôle change, ce que voit l’assistant change aussi.'] },
      { q: 'Peut-il écrire à un prestataire ?', a: ['Oui, et il vous demande d’abord votre accord. Une fois que vous l’autorisez, il envoie au prestataire une demande de réservation ou de disponibilité. Les devis et les factures partent vers les clients depuis Traviosoft.'] },
      { q: 'Peut-il émettre des factures ?', a: ['Il peut consulter les factures, suivre ce qui est payé et corriger un brouillon. En revanche, une facture est toujours émise par une personne, dans Traviosoft : l’assistant ne peut ni émettre ni annuler une facture, car son numéro est une pièce légale.'] },
      { q: 'Y a-t-il aussi un assistant dans Traviosoft ?', a: ['Oui, en option dans les deux offres, avec des limites d’utilisation. Il travaille dans l’app elle-même, sans autre app d’IA à connecter.'] }
    ]
  },
  sim: {
    note: 'Essayez sur une agence exemple : choisissez un message. Les réponses sont une simulation, sans IA derrière.',
    chatTitle: 'Votre assistant d’IA', connected: 'Traviosoft connecté',
    greeting: 'Que puis-je faire pour votre agence aujourd’hui ?',
    chatTab: 'Chat', changed: 'Du nouveau dans Traviosoft',
    allow: 'Autoriser', deny: 'Refuser', allowedTag: 'Autorisé', deniedTag: 'Refusé',
    deniedReply: 'Entendu. Rien n’a changé dans Traviosoft.',
    restart: 'Recommencer', working: 'Travail dans Traviosoft', thinking: 'Réflexion',
    nav: { dashboard: 'Tableau de bord', quotes: 'Devis', bookings: 'Réservations', payments: 'Paiements', review: 'Revue des changements' },
    ui: {
      draft: 'Brouillon', sent: 'Envoyé', requested: 'Demandé', confirmed: 'Confirmé', toBook: 'À réserver', late: 'En retard', paid: 'Payé', due: 'À venir',
      total: 'Total', margin: 'Votre marge', schedule: 'Échéancier', deposit: 'Acompte', balance: 'Solde',
      send: 'Envoyer', approve: 'Approuver', reject: 'Refuser', rejected: 'Refusé. Le devis reste tel quel.', reviewEmpty: 'Tous les changements sont revus', trashed: 'Approuvé. Le devis est dans la corbeille.', reference: 'Réf.',
      newRequests: 'Nouvelles demandes', toFollow: 'Devis à relancer', latePayments: 'Paiements en retard', bookingsLeft: 'Réservations à terminer'
    },
    names: {
      irisTrip: 'Andalousie, 8 jours', bianchiTrip: 'Séville et Grenade, 6 jours', madridTrip: 'Madrid et Tolède, 4 jours',
      lindTrip: 'Majorque, 5 jours', weberTrip: 'Lisbonne, 4 jours',
      olabarriPay: 'Solde, week-end à Cordoue', martinPay: 'Acompte, Provence, 7 jours',
      hotelSeville: 'Hôtel à Séville', guideCordoba: 'Guide à Cordoue', hotelGranada: 'Hôtel à Grenade'
    },
    steps: {
      today: {
        say: 'Qu’est-ce qui m’attend aujourd’hui ?',
        tools: ['Lecture de votre tableau de bord'],
        reply: 'Quatre choses vous attendent aujourd’hui :',
        rows: [
          { t: 'Une nouvelle demande à traiter', s: 'Iris & Noah, Andalousie, 8 jours à partir du 3 mai' },
          { t: 'Un devis à relancer', s: 'Famiglia Bianchi, envoyé il y a 9 jours' },
          { t: 'Deux paiements en retard', s: '{2387} au total' },
          { t: 'Deux réservations à terminer', s: 'Le voyage de la Famiglia Bianchi à Séville et Grenade' }
        ],
        after: 'Par quoi voulez-vous commencer ?'
      },
      late: {
        say: 'Montre les paiements en retard',
        tools: ['Recherche des paiements en retard'],
        reply: 'Deux paiements sont en retard :',
        rows: [
          { t: 'Familia Olabarri, {1427}', s: 'Solde du week-end à Cordoue, 5 jours de retard' },
          { t: 'Sophie Martin, {960}', s: 'Acompte pour la Provence, 3 jours de retard' }
        ],
        after: 'Si l’un d’eux a payé, dites-le-moi et je l’enregistre.'
      },
      payOlabarri: {
        say: 'Olabarri a payé par virement',
        reply: 'Je l’enregistre sur le week-end à Cordoue.',
        ask: { action: 'Enregistrer un paiement', rows: [{ t: 'Client', s: 'Familia Olabarri' }, { t: 'Montant', s: '{1427}' }, { t: 'Moyen', s: 'Virement, aujourd’hui' }] },
        done: 'C’est enregistré. La Familia Olabarri a tout payé, et il reste un paiement en retard : l’acompte de Sophie Martin.'
      },
      quote: { say: 'Crée un devis', reply: 'Bien sûr. Pour qui ?' },
      quoteIris: {
        say: 'Pour la demande d’Iris & Noah',
        tools: ['Lecture de la demande d’Iris & Noah', 'Recherche dans votre catalogue', 'Vérification des prix du 3 au 10 mai'],
        reply: 'Iris & Noah demandent 8 jours en Andalousie à partir du 3 mai, pour deux. Voici ce que je propose, depuis votre catalogue, aux prix de ces dates :',
        rows: [
          { t: 'Transfert aéroport, Séville', s: '3 mai' },
          { t: 'Hôtel dans la vieille ville de Séville, 4 nuits', s: 'Du 3 au 7 mai' },
          { t: 'Guide privé à Cordoue, une demi-journée', s: '5 mai' },
          { t: 'Voiture de location, 4 jours', s: 'Du 7 au 10 mai' },
          { t: 'Hôtel à Grenade, 3 nuits', s: 'Du 7 au 10 mai' },
          { t: 'Billets pour l’Alhambra avec un guide', s: '8 mai' }
        ],
        after: 'Total **{2660}** pour deux, avec votre marge de {450}.',
        ask: { action: 'Créer un devis', rows: [{ t: 'Client', s: 'Iris & Noah' }, { t: 'Voyage', s: 'Andalousie, du 3 au 10 mai' }, { t: 'Total', s: '{2660}' }] },
        done: 'Le devis est dans Traviosoft en brouillon, et je vous l’ai ouvert. Voulez-vous fixer les conditions de paiement, ou l’envoyer ?'
      },
      madridBianchi: {
        say: 'Pour la Famiglia Bianchi, Madrid',
        tools: ['Lecture de la demande de la Famiglia Bianchi pour Madrid', 'Recherche dans votre catalogue', 'Vérification des prix du 12 au 15 juin'],
        reply: 'La Famiglia Bianchi demande 4 jours à Madrid à partir du 12 juin, pour quatre. Voici ce que je propose, depuis votre catalogue, aux prix de ces dates :',
        rows: [
          { t: 'Transferts aéroport, aller et retour', s: '12 et 15 juin' },
          { t: 'Hôtel dans le centre de Madrid, 3 nuits, 2 chambres', s: 'Du 12 au 15 juin' },
          { t: 'Musée du Prado avec un guide', s: '13 juin' },
          { t: 'Journée à Tolède avec un guide', s: '14 juin' }
        ],
        after: 'Total **{2100}** pour quatre, avec votre marge de {380}.',
        ask: { action: 'Créer un devis', rows: [{ t: 'Client', s: 'Famiglia Bianchi' }, { t: 'Voyage', s: 'Madrid et Tolède, du 12 au 15 juin' }, { t: 'Total', s: '{2100}' }] },
        done: 'Le devis est dans Traviosoft en brouillon, et je vous l’ai ouvert. Voulez-vous fixer les conditions de paiement, ou l’envoyer ?'
      },
      terms: { say: 'Fixe les conditions de paiement', reply: 'Quelles conditions voulez-vous ?' },
      terms30: {
        say: '30 % maintenant, le reste 30 jours avant',
        ask: { action: 'Fixer l’échéancier', rows: [{ t: 'Acompte, 30 %', s: '{dep}, aujourd’hui' }, { t: 'Solde', s: '{bal}, le {due}' }] },
        done: 'C’est fait, l’échéancier est sur le devis. Voulez-vous l’envoyer maintenant ?'
      },
      terms50: {
        say: 'Moitié maintenant, moitié 30 jours avant',
        ask: { action: 'Fixer l’échéancier', rows: [{ t: 'Acompte, 50 %', s: '{dep}, aujourd’hui' }, { t: 'Solde', s: '{bal}, le {due}' }] },
        done: 'C’est fait, l’échéancier est sur le devis. Voulez-vous l’envoyer maintenant ?'
      },
      send: {
        say: 'Envoie-le',
        reply: 'Les devis partent vers vos clients depuis Traviosoft, pour que vous voyiez exactement ce qu’ils reçoivent. Je vous l’ai ouvert : appuyez sur Envoyer quand il vous convient.'
      },
      bookings: {
        say: 'Vérifie les dernières réservations',
        tools: ['Recherche des réservations en cours'],
        reply: 'Voici où en est le voyage de la Famiglia Bianchi à Séville et Grenade, du 10 au 15 mai :',
        rows: [
          { t: 'Hôtel à Séville', s: 'Demandé il y a 4 jours, pas encore de réponse' },
          { t: 'Guide à Cordoue', s: 'Confirmé' },
          { t: 'Hôtel à Grenade', s: 'Pas encore réservé' }
        ],
        after: 'Des nouvelles de Séville, ou je demande à l’hôtel de Grenade ?'
      },
      confirmSeville: {
        say: 'Séville confirmé, réf. 48213',
        ask: { action: 'Modifier une réservation', rows: [{ t: 'Réservation', s: 'Hôtel à Séville, du 10 au 13 mai' }, { t: 'Statut', s: 'Confirmé' }, { t: 'Référence', s: '48213' }] },
        done: 'C’est fait. L’hôtel à Séville est confirmé, avec la référence 48213.'
      },
      requestGranada: {
        say: 'Réserve l’hôtel de Grenade',
        tools: ['Recherche de l’hôtel dans vos prestataires'],
        reply: 'J’envoie la demande de réservation à l’hôtel par e-mail, depuis Traviosoft.',
        ask: { action: 'Envoyer une demande de réservation', rows: [{ t: 'À', s: 'Hôtel à Grenade' }, { t: 'Dates', s: 'Du 13 au 15 mai, 2 nuits' }, { t: 'Chambres', s: '2 chambres doubles, Famiglia Bianchi' }] },
        done: 'C’est envoyé. Dites-moi quand l’hôtel répond, et j’enregistre sa confirmation.'
      },
      remove: { say: 'Supprime un devis', tools: ['Recherche de vos devis en brouillon'], reply: 'Lequel ? Ces deux-là sont encore en brouillon.' },
      delLind: {
        say: 'Anna Lind, Majorque',
        ask: { action: 'Supprimer un devis', rows: [{ t: 'Devis', s: 'Anna Lind, Majorque, 5 jours' }, { t: 'Total', s: '{1980}' }, { t: 'Statut', s: 'Brouillon' }] },
        done: 'La suppression attend maintenant votre accord dans Traviosoft, dans Revue des changements. Rien n’est supprimé tant que vous ne l’approuvez pas là-bas.'
      },
      delWeber: {
        say: 'Familie Weber, Lisbonne',
        ask: { action: 'Supprimer un devis', rows: [{ t: 'Devis', s: 'Familie Weber, Lisbonne, 4 jours' }, { t: 'Total', s: '{1450}' }, { t: 'Statut', s: 'Brouillon' }] },
        done: 'La suppression attend maintenant votre accord dans Traviosoft, dans Revue des changements. Rien n’est supprimé tant que vous ne l’approuvez pas là-bas.'
      }
    }
  }
};
