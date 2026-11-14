import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft : logiciel pour agences sur mesure et DMC',
  metaDescription:
    `Demandes, devis avec vos marges, réservations, programmes, paiements et factures au même endroit. Pour agences de voyages sur mesure et DMC. Dès ${PRICES.classic.yearly} EUR par mois, dans l’UE.`,
  title: 'Logiciel pour agences de voyages sur mesure et DMC',
  sub: 'Demandes, devis, réservations, paiements et factures, au même endroit.',
  tags: [
    { t: 'Acompte payé ✓', s: 'lien dans l’e-mail' },
    { t: 'Hôtel confirmé', s: 'réponse enregistrée dans le voyage' }
  ],
  tripTitle: 'Le parcours d’un voyage dans Traviosoft',
  steps: [
    { time: '09:12', title: 'Demande reçue', body: 'Elle arrive dans une seule liste, avec sa prochaine étape.', job: 'sell' },
    { time: '11:40', title: 'Devis envoyé', body: 'Construit avec vos tarifs et votre marge.', job: 'sell' },
    { time: 'Jour 2', title: 'Acompte payé', body: 'Payé depuis le lien de l’e-mail.', job: 'get-paid' },
    { time: 'Jour 3', title: 'Prestataires confirmés', body: 'Hôtel et guide cochés dans le voyage.', job: 'book' },
    { time: 'Jour 30', title: 'Facture finale', body: 'Issue des chiffres du devis.', job: 'get-paid' }
  ],
  stepGo: 'Voir comment',
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
  priceBody: `Mise en place et import de vos données offerts avec la facturation annuelle. Utilisateur supplémentaire : ${PRICES.extraUser.yearly} EUR par mois.`,
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
