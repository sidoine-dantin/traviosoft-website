import type { SiteContent } from '../types';

export const home: SiteContent['home'] = {
  metaTitle: 'Traviosoft : logiciel pour agences sur mesure et DMC',
  metaDescription:
    'Demandes, devis avec vos marges, réservations, programmes, paiements et factures au même endroit. Pour agences de 1 à 15. Dès 190 EUR par mois, dans l’UE.',
  kick: 'Envoyez le devis',
  giant: 'ce soir.',
  sub: 'Pas jeudi. Logiciel pour agences sur mesure et DMC.',
  tags: [
    { t: 'Vous répondez en premier', s: 'devis envoyé à 11:40' },
    { t: 'Acompte payé ✓', s: 'lien dans l’e-mail' },
    { t: 'Hôtel confirmé', s: 'rien d’oublié' },
    { t: 'Hébergé dans l’UE', s: 'votre propre base de données' }
  ],
  tripTitle: 'Un voyage, du premier message à la dernière facture.',
  steps: [
    { time: '09:12', title: 'Demande reçue', body: 'Elle arrive dans une seule liste, pas dans un e-mail égaré.', job: 'sell' },
    { time: '11:40', title: 'Devis envoyé', body: 'Construit avec vos tarifs, marge déjà incluse.', job: 'sell' },
    { time: 'Jour 2', title: 'Acompte payé', body: 'Lien de paiement dans l’e-mail. Aucune relance à faire.', job: 'get-paid' },
    { time: 'Jour 3', title: 'Prestataires confirmés', body: 'Hôtel et guide cochés dans le voyage.', job: 'book' },
    { time: 'Jour 30', title: 'Facture finale', body: 'Issue des mêmes chiffres. Rien à ressaisir.', job: 'get-paid' }
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
  exampleBody: 'Ouvrez un exemple réel : le programme jour par jour et le devis, tels qu’un voyageur les voit. Sans inscription.',
  exampleLink: 'Ouvrir le voyage exemple',
  priceTitle: 'Toutes les fonctions, un seul prix.',
  priceBody: 'Facturation annuelle, mensuelle possible. La mise en place et l’import des données sont gratuits avec la facturation annuelle.',
  coin1: 'EUR/mois · 3 utilisateurs',
  coin2: 'EUR/mois · 5 utilisateurs',
  priceLink: 'Comparer les offres',
  facts: [
    { k: 'Prix', v: 'Dès 190 EUR par mois, 3 utilisateurs inclus' },
    { k: 'Pour', v: 'Agences sur mesure et DMC, de 1 à 15 personnes' },
    { k: 'Données', v: 'Votre propre base de données, hébergée dans l’UE' },
    { k: 'Langues', v: 'Documents en espagnol, anglais, français et plus' }
  ]
};
