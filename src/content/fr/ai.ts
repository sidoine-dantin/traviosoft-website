import type { AiText } from '../types';

/** L’assistant d’IA. Source : en/ai.ts (vérifié sur apps/web/docs/MCP.md). Mots de l’app : apps/web/messages/fr.json. */
export const ai: AiText = {
  page: {
    slug: 'ai-assistant',
    metaTitle: 'Assistant d’IA : travaillez dans Traviosoft depuis Claude, ChatGPT ou Mistral | Traviosoft',
    metaDescription:
      'Connectez à Traviosoft l’assistant d’IA que vous utilisez déjà. Demandez ce qui vous attend, faites préparer un devis depuis votre catalogue, enregistrez une réservation ou un paiement, et validez chaque changement. Inclus dans les deux offres.',
    name: 'Assistant d’IA',
    menuLine: 'Travailler dans Traviosoft depuis Claude ou ChatGPT',
    step: '5 sur 5',
    heroTitle: 'Travaillez dans Traviosoft depuis votre assistant d’IA',
    heroLead:
      'Connectez Claude, ChatGPT ou Mistral au Traviosoft de votre agence. Écrivez ce dont vous avez besoin en une phrase : il travaille sur vos vrais clients, prix et voyages, avec les droits que vous lui donnez.',
    heroVisual: 'assistant',
    chapters: [
      {
        id: 'ask',
        kicker: 'Demander',
        title: 'Demandez ce qui vous attend',
        lead: 'Votre assistant regarde votre tableau de bord Traviosoft et vous dit ce qui vous attend aujourd’hui.',
        visual: 'dashboard',
        features: [
          { title: 'Votre journée en une question', body: ['Demandez « Qu’est-ce qui m’attend aujourd’hui ? » : les nouvelles demandes à traiter, les devis à relancer et les paiements en retard, chacun avec un lien qui l’ouvre dans Traviosoft.'] },
          { title: 'Vos voyages et votre argent', body: ['Quelles réservations attendent encore le prestataire ? Combien vos clients vous doivent-ils ? Les réponses viennent de vos devis, réservations et paiements.'] },
          { title: 'Tout retrouver', body: ['Cherchez un client, un devis, un prestataire ou un voyage par son nom, sa référence, son e-mail ou son téléphone.'] }
        ]
      },
      {
        id: 'work',
        kicker: 'Faire',
        title: 'Faites faire le travail',
        lead: 'Écrivez ce dont vous avez besoin en une phrase. L’assistant le fait dans Traviosoft, comme vous le feriez dans l’app.',
        visual: 'quote',
        features: [
          { title: 'Des devis depuis votre catalogue', body: ['Demandez un devis pour le voyage d’un client. Les prestations viennent de votre catalogue, aux prix des dates du voyage et avec votre marge, comme si vous aviez fait le devis vous-même.'] },
          { title: 'Les réservations', body: ['Enregistrez la confirmation d’un prestataire et sa référence, cochez une tâche de réservation ou demandez une disponibilité à un prestataire.'] },
          { title: 'Clients et paiements', body: ['Ajoutez un nouveau client, fixez les dates de paiement d’un devis ou enregistrez un paiement reçu.'] }
        ]
      },
      {
        id: 'approve',
        kicker: 'Validation',
        title: 'Vous validez chaque changement',
        lead: 'L’assistant consulte seul et vous demande avant de modifier quoi que ce soit.',
        visual: 'confirm',
        features: [
          { title: 'Une question avant chaque changement', body: ['Claude, ChatGPT et Mistral vous demandent dans la conversation avant chaque changement. Il est fait dès que vous l’autorisez.'] },
          { title: 'Suppressions validées dans Traviosoft', body: ['Si vous autorisez la suppression, chaque suppression attend dans Traviosoft que vous la validiez, et elle est enregistrée à votre nom.'] },
          { title: 'Les autres apps d’IA', body: ['Les changements venant de toute autre app d’IA attendent votre accord dans Traviosoft.'] },
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
      { q: 'Quelles apps d’IA puis-je utiliser ?', a: ['Claude, ChatGPT et Mistral, dans une version de l’app qui permet d’ajouter vos propres connecteurs. Les autres apps d’IA qui peuvent ajouter des connecteurs fonctionnent aussi, et leurs changements attendent votre accord dans Traviosoft.'] },
      { q: 'L’assistant voit-il toutes nos données ?', a: ['Il voit ce que voit dans Traviosoft la personne qui l’a connecté.'] },
      { q: 'Peut-il écrire à un prestataire ?', a: ['Oui. Il peut envoyer une demande de réservation ou demander une disponibilité à un prestataire, une fois que vous l’autorisez. Les devis et les factures partent vers les clients depuis Traviosoft.'] },
      { q: 'Peut-il émettre des factures ?', a: ['Les factures sont émises dans Traviosoft, par une personne. L’assistant peut les consulter, suivre ce qui est payé et corriger un brouillon.'] },
      { q: 'Y a-t-il aussi un assistant dans Traviosoft ?', a: ['Oui, en option dans les deux offres, avec des limites d’utilisation. Il travaille dans l’app elle-même et demande votre accord avant chaque changement.'] }
    ]
  },
  home: {
    title: 'Travaillez dans Traviosoft depuis votre assistant d’IA',
    body: 'Connectez Claude, ChatGPT ou Mistral. Demandez ce qui vous attend aujourd’hui, faites préparer un devis depuis votre catalogue ou enregistrez la confirmation d’un prestataire. Chaque changement est fait dès que vous l’autorisez.',
    link: 'Voir l’assistant d’IA'
  },
  hero: {
    ask: 'Combien nos clients nous doivent-ils ?',
    answer: '{owed} sur les devis acceptés, dont {overdue} en retard.'
  },
  sim: {
    title: 'Essayez avec une agence exemple',
    lead: 'Envoyez l’un des messages ci-dessous. Les réponses sont une simulation sur des données d’exemple, et le côté Traviosoft montre ce qui change.',
    chatTitle: 'Votre assistant d’IA', chatSub: 'Connecté à Traviosoft',
    appTitle: 'Traviosoft', appSub: 'Votre agence',
    pick: 'Envoyer un message', restart: 'Recommencer', allow: 'Autoriser', deny: 'Refuser',
    allowedTag: 'Autorisé', deniedTag: 'Refusé',
    denied: 'Entendu. Traviosoft reste tel quel.', thinking: 'Travail dans Traviosoft',
    quotes: 'Devis', bookings: 'Réservations · Famiglia Bianchi', review: 'Revue des changements', reviewEmpty: 'Tous les changements sont revus', approve: 'Approuver',
    draft: 'Brouillon', sent: 'Envoyé', requested: 'Demandé', confirmed: 'Confirmé',
    bianchiTrip: 'Séville et Grenade, 6 jours', olabarriTrip: 'Un week-end à Cordoue', irisTrip: 'Andalousie, 8 jours',
    hotelSeville: 'Hôtel à Séville', guideCordoba: 'Guide à Cordoue', hotelGranada: 'Hôtel à Grenade',
    today: {
      prompt: 'Qu’est-ce qui m’attend aujourd’hui ?',
      answer: 'Trois choses vous attendent :',
      rows: [
        { t: 'Une nouvelle demande à traiter', s: 'Iris & Noah, Andalousie, 8 jours' },
        { t: 'Un devis à relancer', s: 'Famiglia Bianchi, envoyé il y a 9 jours' },
        { t: 'Une réservation qui attend le prestataire', s: 'Hôtel à Séville, Famiglia Bianchi' }
      ]
    },
    quote: {
      prompt: 'Prépare un devis pour Iris & Noah, Andalousie, 8 jours, à partir du 3 mai',
      askTitle: 'Créer un devis dans Traviosoft ?',
      askSub: 'Iris & Noah · Andalousie, 8 jours · 6 prestations de votre catalogue',
      done: 'Le devis est dans Traviosoft en brouillon : {total}, avec votre marge de {margin}.'
    },
    booking: {
      prompt: 'L’hôtel de Séville a confirmé la réservation Bianchi, référence 48213',
      askTitle: 'Modifier une réservation dans Traviosoft ?',
      askSub: 'Hôtel à Séville : confirmé, référence 48213',
      done: 'C’est fait. L’hôtel à Séville est confirmé, avec la référence 48213.'
    },
    remove: {
      prompt: 'Supprime le devis Olabarri, ils ont choisi une autre date',
      askTitle: 'Supprimer un devis dans Traviosoft ?',
      askSub: 'Familia Olabarri · Un week-end à Cordoue',
      queued: 'La suppression attend maintenant votre accord dans Traviosoft, dans Revue des changements.',
      reviewItem: 'Supprimer le devis de Familia Olabarri',
      approved: 'Approuvé dans Traviosoft. Le devis est dans la corbeille.'
    }
  }
};
