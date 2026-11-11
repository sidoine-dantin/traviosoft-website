import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft : logiciel pour agences sur mesure et DMC',
  metaDescription:
    `Demandes, devis avec vos marges, réservations, programmes, paiements et factures au même endroit. Pour agences de voyages sur mesure et DMC. Dès ${PRICES.classic.yearly} EUR par mois, dans l’UE.`,
  kick: 'Envoyez le devis',
  giant: 'ce soir.',
  sub: 'Le jour même de la demande. Logiciel pour agences de voyages sur mesure et DMC.',
  tags: [
    { t: 'Vous répondez en premier', s: 'devis envoyé à 11:40' },
    { t: 'Acompte payé ✓', s: 'lien dans l’e-mail' },
    { t: 'Hôtel confirmé', s: 'classé dans le voyage' },
    { t: 'Hébergé dans l’UE', s: 'un espace privé par agence' }
  ],
  tripTitle: 'Un voyage, du premier message à la dernière facture.',
  steps: [
    { time: '09:12', title: 'Demande reçue', body: 'Elle arrive dans une seule liste, avec sa prochaine étape.', job: 'sell' },
    { time: '11:40', title: 'Devis envoyé', body: 'Construit avec vos tarifs, marge déjà incluse.', job: 'sell' },
    { time: 'Jour 2', title: 'Acompte payé', body: 'Payé depuis le lien de l’e-mail.', job: 'get-paid' },
    { time: 'Jour 3', title: 'Prestataires confirmés', body: 'Hôtel et guide cochés dans le voyage.', job: 'book' },
    { time: 'Jour 30', title: 'Facture finale', body: 'Issue des chiffres du devis.', job: 'get-paid' }
  ],
  stepGo: 'Voir comment',
  baTitle: 'Ce qui change le lundi matin.',
  beforeTitle: 'Aujourd’hui',
  beforeScraps: [
    'Tarifs_2026_FINAL_v3.xlsx',
    'Devis Martin.docx',
    'WhatsApp : « l’hôtel a confirmé ? »',
    'Acompte ? vérifier la banque',
    'Numéros de facture dans un cahier',
    '42 e-mails non lus'
  ],
  afterTitle: 'Avec Traviosoft',
  afterBody:
    'Un voyage, un seul endroit. La demande, le devis, les réservations, les paiements et les factures sont dans le même dossier, et toute l’équipe voit la même chose.',
  exampleTitle: 'Voyez ce que reçoit votre client.',
  exampleBody: 'Ouvrez un voyage exemple, un couple, un groupe incentive ou un safari : le programme jour par jour et le devis, tels que votre client les voit. Sans inscription.',
  exampleLink: 'Ouvrir les voyages exemples',
  priceTitle: 'Deux offres, des prix clairs.',
  priceBody: `Classic gère toute l’agence. Premium ajoute les équipes, les devises, les achats et plus encore. ${PRICES.usersIncluded} utilisateurs inclus, facturation annuelle ou mensuelle, mise en place offerte en annuel.`,
  coin1: 'EUR/mois · Classic',
  coin2: 'EUR/mois · Premium',
  priceLink: 'Comparer les offres',
  facts: [
    { k: 'Prix', v: `Dès ${PRICES.classic.yearly} EUR par mois, ${PRICES.usersIncluded} utilisateurs inclus` },
    { k: 'Pour', v: 'Agences sur mesure et DMC' },
    { k: 'Données', v: 'Un espace privé par agence, hébergé dans l’UE' },
    { k: 'Langues', v: 'Documents en espagnol, anglais, français et plus' }
  ]
};
