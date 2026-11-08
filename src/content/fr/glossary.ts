import type { GlossaryTerm } from '../types';

export const glossary: GlossaryTerm[] = [
  {
    id: 'dmc',
    term: 'DMC (Destination Management Company)',
    def: 'Société locale qui conçoit, vend et réalise voyages et programmes dans sa destination pour des agences, des entreprises et des voyageurs venus d’ailleurs. Elle réserve hôtels, guides, transports et activités, et veille à ce que tout se passe bien sur place.'
  },
  {
    id: 'inbound-agency',
    term: 'Agence réceptive (receptivo)',
    def: 'Agence qui accueille des voyageurs venus de l’étranger et organise leur séjour dans son pays. En pratique, c’est la même chose qu’un DMC, même si "réceptif" désigne plutôt les agences qui vendent à d’autres agences ou directement au voyageur.'
  },
  {
    id: 'tailor-made',
    term: 'Voyage sur mesure',
    def: 'Voyage conçu de zéro pour un client précis : dates, rythme, hôtels et activités suivent sa demande. Chaque devis est différent, donc chiffré prestation par prestation, à partir de tarifs nets plus la marge.'
  },
  {
    id: 'reav',
    term: 'REAV (régime espagnol de TVA des agences de voyages)',
    def: 'Régime spécial de TVA en Espagne pour les agences qui vendent en leur nom des prestations achetées à des tiers. La TVA ne porte pas sur le prix total mais sur la marge de l’agence, comme pour la TVA sur la marge en France. À valider avec votre comptable.'
  },
  {
    id: 'rooming-list',
    term: 'Rooming list',
    def: 'Liste des chambres d’un groupe : qui dort dans quelle chambre, le type de chambre, les dates et les demandes particulières. Elle est envoyée à l’hôtel avant l’arrivée, avec le plus souvent une date limite fixée au contrat.'
  },
  {
    id: 'net-rate',
    term: 'Tarif net',
    def: 'Prix facturé par le fournisseur à l’agence, sans marge ni commission. C’est la base de tout devis : l’agence y ajoute sa marge pour obtenir le prix de vente.'
  },
  {
    id: 'markup-margin',
    term: 'Coefficient (markup) et marge',
    def: 'Le coefficient se calcule sur le coût, la marge sur le prix de vente. Un markup de 25 % sur un coût de 1 000 EUR donne un prix de 1 250 EUR, soit une marge de 20 % et non de 25 %.'
  },
  {
    id: 'commission',
    term: 'Commission',
    def: 'Pourcentage du prix que l’agence verse à celui qui apporte la vente (une autre agence, un partenaire), ou qu’elle reçoit d’un fournisseur pour avoir vendu ses prestations. Il faut l’intégrer au prix pour ne pas grignoter la marge.'
  },
  {
    id: 'deposit',
    term: 'Acompte',
    def: 'Premier paiement du client pour confirmer le voyage, en général un pourcentage du total. Il permet à l’agence de commencer les réservations.'
  },
  {
    id: 'balance',
    term: 'Solde',
    def: 'Montant restant à payer après l’acompte. Il est encaissé à une date convenue avant le départ, et une fois réglé le voyage est entièrement payé.'
  },
  {
    id: 'allotment',
    term: 'Allotement (allotment)',
    def: 'Nombre de chambres, de places ou de prestations qu’un fournisseur garde pour une agence à un prix convenu, jusqu’à une date de libération. Passé ce délai, ce qui n’a pas été utilisé retourne au fournisseur.'
  },
  {
    id: 'service-sheet',
    term: 'Bon de service (voucher)',
    def: 'Document envoyé au fournisseur, ou remis au voyageur, avec les détails d’une prestation : qui, quand, où et ce qui est inclus. Il sert de confirmation pour l’hôtel, le guide ou le chauffeur.'
  },
  {
    id: 'fit',
    term: 'FIT (Free Independent Traveller)',
    def: 'Voyageur individuel ou petit groupe (famille, couple, amis) qui voyage seul, hors groupe organisé. La plupart des voyages sur mesure sont des FIT.'
  },
  {
    id: 'mice',
    term: 'MICE',
    def: 'Sigle de Meetings, Incentives, Conferences and Exhibitions : réunions, voyages de stimulation, congrès et événements. Ce sont des voyages d’entreprise avec beaucoup de participants, des blocs de chambres et des programmes sur mesure.'
  },
  {
    id: 'verifactu',
    term: 'Veri*Factu',
    def: 'Système de l’administration fiscale espagnole (AEAT) dans lequel le logiciel de facturation transmet chaque facture au fisc au moment de son émission et ajoute un code QR. Il est prévu par le décret royal 1007/2023. Vérifiez les échéances en vigueur auprès de l’AEAT.'
  }
];
