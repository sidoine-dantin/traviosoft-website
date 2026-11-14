import type { SiteContent } from '../types';
import { PRICES } from '../prices';

export const pricing: SiteContent['pricing'] = {
  metaTitle: `Tarifs : Classic dès ${PRICES.classic.yearly} EUR par mois, Premium dès ${PRICES.premium.yearly} EUR | Traviosoft`,
  metaDescription:
    `Deux offres pour les agences de voyages sur mesure et les DMC. Classic gère toute l’agence dès ${PRICES.classic.yearly} EUR par mois ; Premium ajoute les équipes, les devises, les achats, plusieurs marques et l’assistant. ${PRICES.usersIncluded} utilisateurs inclus, mise en place offerte en annuel.`,
  title: 'Tarifs',
  lead: 'Classic couvre toute l’agence, de la première demande à la dernière facture. Premium ajoute les équipes, les autres devises, les achats, plusieurs marques et les connexions.',
  yearly: 'Annuel',
  monthly: 'Mensuel',
  yearlyNote: 'Prix par mois, hors TVA.',
  plans: [
    {
      id: 'classic',
      name: 'Classic',
      users: `${PRICES.usersIncluded} utilisateurs inclus`,
      yearly: String(PRICES.classic.yearly),
      monthly: String(PRICES.classic.monthly),
      priceNote: { yearly: `Utilisateur supplémentaire : ${PRICES.extraUser.yearly} EUR par mois`, monthly: `Utilisateur supplémentaire : ${PRICES.extraUser.monthly} EUR par mois` },
      summary: 'Tout pour gérer l’agence, de la première demande à la dernière facture.'
    },
    {
      id: 'premium',
      name: 'Premium',
      users: `${PRICES.usersIncluded} utilisateurs inclus`,
      yearly: String(PRICES.premium.yearly),
      monthly: String(PRICES.premium.monthly),
      priceNote: { yearly: `Utilisateur supplémentaire : ${PRICES.extraUser.yearly} EUR par mois`, monthly: `Utilisateur supplémentaire : ${PRICES.extraUser.monthly} EUR par mois` },
      hot: true,
      summary: 'Tout Classic, avec en plus les équipes, les autres devises, les achats, plusieurs marques, l’assistant et les connexions.'
    }
  ],
  compareTitle: 'Comparer les offres',
  compareFeature: 'Fonction',
  yes: 'Inclus',
  no: 'Non inclus',
  compare: [
    {
      title: 'Vendre',
      rows: [
        { f: 'Demandes et devis avec votre marge et votre commission', classic: true, premium: true },
        { f: 'Catalogue avec prix par saison', classic: true, premium: true },
        { f: 'Agences partenaires et relevés de commission', classic: true, premium: true },
        { f: 'Page de proposition et programme jour par jour, avec votre logo et vos couleurs', classic: true, premium: true },
        { f: 'Documents dans la langue du client', classic: true, premium: true },
        { f: 'Devises', classic: 'La devise de votre agence', premium: 'Toutes les devises, avec des taux de change quotidiens' }
      ]
    },
    {
      title: 'Réserver',
      rows: [
        { f: 'Voyages confirmés et réservations, avec les e-mails des prestataires classés sur le voyage', classic: true, premium: true },
        { f: 'Fiches de service', classic: true, premium: true },
        { f: 'Groupes : listes de voyageurs, lien vers un formulaire et rooming lists', classic: true, premium: true },
        { f: 'Demandes de disponibilité et bons de commande aux prestataires', classic: false, premium: true }
      ]
    },
    {
      title: 'Encaisser',
      rows: [
        { f: 'Échéanciers, liens de paiement et rappels', classic: true, premium: true },
        { f: 'Factures et avoirs, selon les règles fiscales de votre pays', classic: true, premium: true },
        { f: 'Tableau de bord', classic: true, premium: true },
        { f: 'Export comptable', classic: false, premium: true }
      ]
    },
    {
      title: 'Équipe et connexions',
      rows: [
        { f: 'Utilisateurs', classic: `${PRICES.usersIncluded} inclus, puis ${PRICES.extraUser.yearly} EUR par mois et par utilisateur`, premium: `${PRICES.usersIncluded} inclus, puis ${PRICES.extraUser.yearly} EUR par mois et par utilisateur` },
        { f: 'Équipes et rôles', classic: false, premium: true },
        { f: 'Plusieurs marques et sociétés dans un compte', classic: false, premium: true },
        { f: 'L’assistant intégré, et la connexion de vos propres outils d’IA', classic: false, premium: true },
        { f: 'Connexions à votre site et à vos autres logiciels', classic: false, premium: true }
      ]
    },
    {
      title: 'Mise en place et service',
      rows: [
        { f: 'Mise en place de votre marque, de vos documents et de vos règles de prix', classic: 'Offert en annuel*', premium: 'Offert en annuel*' },
        { f: 'Import de vos tableurs ou de l’export de votre outil actuel', classic: 'Offert en annuel*', premium: 'Offert en annuel*' },
        { f: 'Support par e-mail en espagnol, anglais et français', classic: true, premium: true },
        { f: 'Hébergement dans l’Union européenne, un espace séparé par agence', classic: true, premium: true },
        { f: 'Vos données exportables en formats standard', classic: true, premium: true },
        { f: 'Les nouvelles fonctions de votre offre dès leur sortie', classic: true, premium: true }
      ]
    }
  ],
  compareNote: `* Offre à durée limitée. En mensuel, la mise en place coûte ${PRICES.setupMonthly} EUR et l’import de tableurs ${PRICES.importMonthly} EUR, une seule fois. Les autres fichiers sont importés sur devis.`,
  faq: [
    {
      q: 'De quelle offre ai-je besoin ?',
      a: ['Classic gère une agence entière : demandes, devis, partenaires, réservations, groupes, paiements et factures. Premium ajoute des fonctions comme des équipes avec leurs propres clients, la vente dans d’autres devises et les bons de commande aux prestataires.']
    },
    {
      q: 'Comment est-ce facturé ?',
      a: ['À l’année ou au mois, au choix. L’annuel revient moins cher par mois et inclut la mise en place et l’import. Le mensuel s’arrête à la fin de n’importe quel mois.']
    },
    {
      q: 'Les prix sont-ils hors TVA ?',
      a: ['Oui. La TVA s’ajoute sur la facture selon votre pays et le statut de votre société.']
    },
    {
      q: 'Et si j’ajoute un utilisateur ?',
      a: [`Les deux offres incluent ${PRICES.usersIncluded} utilisateurs. Chaque utilisateur supplémentaire coûte ${PRICES.extraUser.yearly} EUR par mois en annuel, ${PRICES.extraUser.monthly} EUR en mensuel.`]
    },
    {
      q: 'Puis-je changer d’offre ?',
      a: ['Oui. Passez de Classic à Premium à tout moment : les nouvelles fonctions sont là le jour même. Vos données restent telles quelles.']
    },
    {
      q: 'Puis-je résilier ?',
      a: ['Oui. Les offres mensuelles s’arrêtent à la fin du mois de la résiliation. Les offres annuelles vont jusqu’au bout de l’année payée et s’arrêtent là.']
    },
    {
      q: 'Puis-je récupérer mes données en partant ?',
      a: ['Oui. Vous récupérez vos données dans des formats standard.']
    },
    {
      q: 'Que comprend la mise en place ?',
      a: [`Nous configurons votre marque, vos documents, vos règles de marge, de TVA et de commission, et les accès de votre équipe. Elle est offerte en annuel et coûte ${PRICES.setupMonthly} EUR une seule fois en mensuel.`]
    },
    {
      q: 'Que comprend l’import ?',
      a: [`Votre catalogue avec ses prix, vos clients et vos prestataires, depuis des tableurs ou un export de votre outil actuel, avec une ligne par élément et les mêmes colonnes du début à la fin. Il est offert en annuel et coûte ${PRICES.importMonthly} EUR une seule fois en mensuel.`, 'Les documents Word, les PDF, les e-mails, les voyages en cours et les listes à trier d’abord sont chiffrés sur devis, après avoir vu un échantillon.']
    }
  ]
};

export const demo: SiteContent['demo'] = {
  metaTitle: 'Réserver une démo | Traviosoft',
  metaDescription:
    'Un appel de 30 minutes : un voyage exemple dans Traviosoft, de la demande à la facture, puis les tarifs et vos questions.',
  title: 'Réserver une démo',
  lead: 'Un appel de 30 minutes. Nous parcourons un voyage exemple dans Traviosoft, de la première demande à la facture finale.',
  agendaTitle: 'L’appel',
  agenda: [
    { mins: '5', title: 'Votre agence', body: 'Taille de l’équipe, ce que vous vendez et les outils que vous utilisez aujourd’hui.' },
    { mins: '15', title: 'Un voyage exemple', body: 'La demande, le devis avec marge, les réservations, le programme, le paiement et la facture. Un voyage en couple, un groupe incentive ou un safari.' },
    { mins: '10', title: 'Tarifs et questions', body: 'L’offre pour votre équipe, l’import de vos données et vos questions.' }
  ],
  bringTitle: 'Qui inviter',
  bring: [
    'Les personnes qui font les devis ou les réservations',
    'La personne qui suit les paiements et les factures'
  ],
  afterTitle: 'Après l’appel',
  after: [
    'Un court compte rendu par e-mail',
    'Le prix pour votre équipe, par écrit',
    'Un nouvel appel si vous le demandez'
  ],
  bookTitle: 'Demandez un créneau',
  bookBody: 'Pour l’instant, les rendez-vous se prennent par e-mail. Envoyez le nom de votre agence, la taille de l’équipe et quelques jours qui vous conviennent, et nous répondons avec un horaire.',
  emailLabel: 'Écrivez à',
  email: 'hola@traviosoft.com',
  faq: [
    {
      q: 'Y a-t-il un essai gratuit ?',
      a: ['Non. Il y a une démo de 30 minutes.']
    },
    {
      q: 'Qui fait la démo ?',
      a: ['Une personne de l’équipe Traviosoft, en espagnol, en anglais ou en français.']
    },
    {
      q: 'Dois-je préparer quelque chose ?',
      a: ['Non.']
    },
    {
      q: 'Allez-vous me demander mes données ?',
      a: ['Non. La démo utilise un voyage exemple avec des données inventées.']
    }
  ]
};

export const switching: SiteContent['switching'] = {
  metaTitle: 'Passer d’Excel à Traviosoft | Traviosoft',
  metaDescription:
    'Passer d’Excel, Word et WhatsApp à Traviosoft en pleine saison : ce que nous importons, ce que vous vérifiez, et comment finir les voyages en cours.',
  title: 'Passer à Traviosoft',
  lead: 'Le changement se fait par étapes, en parallèle des voyages en cours.',
  timelineTitle: 'Comment cela se passe',
  timeline: [
    {
      when: 'Jour 1',
      title: 'Vous nous envoyez vos fichiers',
      body: 'Vos tarifs, clients, prestataires et voyages en cours, en tableurs ou en export d’un autre outil.'
    },
    {
      when: 'Semaine 1',
      title: 'Nous importons, vous vérifiez',
      body: 'Nous chargeons tout dans l’espace de votre agence. Vous l’ouvrez, vous regardez quelques produits et quelques clients, et vous nous dites quoi ajuster.'
    },
    {
      when: 'Semaine 2',
      title: 'Votre premier vrai devis',
      body: 'Nous configurons votre marge, la TVA, vos règles de commission et votre marque. Vous construisez un vrai devis à partir de vos propres tarifs. Nous restons joignables par e-mail si besoin.'
    },
    {
      when: 'En service',
      title: 'Les nouvelles demandes entrent dans l’application',
      body: 'À partir de là, chaque nouvelle demande commence dans Traviosoft. Les voyages déjà en cours se terminent comme ils ont commencé.'
    }
  ],
  importTitle: 'Ce qui est repris',
  importHead: ['Quoi', 'Depuis', 'Prix'],
  importRows: [
    { what: 'Catalogue, produits et tarifs', from: 'Tableurs, l’export d’un autre outil', how: 'Compris dans l’import' },
    { what: 'Clients', from: 'Tableurs, l’export d’un autre outil', how: 'Compris dans l’import' },
    { what: 'Prestataires et contacts', from: 'Tableurs, l’export d’un autre outil', how: 'Compris dans l’import' },
    { what: 'Voyages en cours et autres fichiers', from: 'Word, PDF, e-mails, fichiers mélangés', how: 'Sur devis, après un échantillon' }
  ],
  seasonTitle: 'Cela va-t-il perturber ma saison ?',
  seasonBody: [
    'Les nouvelles demandes entrent dans Traviosoft dès la mise en service. Les voyages déjà en cours se terminent comme ils ont commencé.',
    'Les voyages en cours ne sont repris que si vous le souhaitez, et en général ceux qui sont encore loin. Un voyage qui part la semaine prochaine reste où il est.',
    'En haute saison, nous importons d’abord et passons en service lors d’une semaine plus calme.'
  ],
  faq: [
    {
      q: 'Pouvez-vous importer depuis mon outil actuel ?',
      a: ['S’il exporte vers un tableur, oui. Envoyez-nous un export d’exemple et nous vous disons exactement ce qui est repris.']
    },
    {
      q: 'Combien cela coûte-t-il ?',
      a: [`La mise en place et l’import de vos tableurs sont offerts en annuel. En mensuel, la mise en place coûte ${PRICES.setupMonthly} EUR une seule fois et l’import ${PRICES.importMonthly} EUR une seule fois.`, 'Le prix de l’import couvre des listes avec une ligne par élément et les mêmes colonnes du début à la fin. Les documents Word, les PDF, les voyages en cours et les listes à trier d’abord sont chiffrés sur devis, après avoir vu un échantillon.']
    },
    {
      q: 'Que deviennent mes anciens fichiers ?',
      a: ['Ils restent exactement où ils sont. Nous importons des copies.']
    },
    {
      q: 'Dois-je reprendre tous les anciens voyages ?',
      a: ['Reprenez les voyages en cours que vous voulez et gardez le reste dans vos archives. Les anciens clients valent la peine d’être importés ; pour les voyages passés, vos archives suffisent.']
    },
    {
      q: 'Et si l’import doit être ajusté ?',
      a: ['Vous vérifiez un échantillon avant la mise en service, et nous l’ajustons avec vous. Ce que vous repérez plus tard, vous le corrigez dans l’application ou vous nous le signalez.']
    }
  ]
};

export const faqPage: SiteContent['faqPage'] = {
  metaTitle: 'Questions fréquentes | Traviosoft',
  metaDescription:
    'Ce que fait Traviosoft, son prix, l’hébergement de vos données et le passage depuis Excel.',
  title: 'Questions fréquentes',
  lead: 'Si votre question n’est pas ici, écrivez à hola@traviosoft.com.',
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
          a: ['Un devis net avec des intitulés pensés pour le client, des prix par personne, ce qui est compris et ce qui ne l’est pas, dans sa langue et à votre marque. Vos tarifs nets et vos marges restent réservés à votre équipe.']
        },
        {
          q: 'Mes guides et mes chauffeurs peuvent-ils voir le voyage ?',
          a: ['Ils reçoivent par e-mail une fiche de service avec les dates, les heures, les noms et le point de rendez-vous.']
        },
        {
          q: 'Travaillez-vous avec des DMC qui vendent via des agences partenaires ?',
          a: ['Oui. Envoyez le devis à l’agence partenaire, gardez son client sur le voyage, ajoutez la commission du partenaire et réglez-la à partir d’un relevé par période.']
        },
        {
          q: 'Y a-t-il un assistant IA ?',
          a: ['Oui, avec Premium. Demandez-lui ce qui vous attend aujourd’hui, faites-lui préparer un devis depuis votre catalogue ou transformer la grille tarifaire d’un prestataire en prix catalogue ; chaque changement attend votre accord. Vous pouvez aussi connecter à vos données Traviosoft l’assistant d’IA que vous utilisez déjà.']
        }
      ]
    },
    {
      title: 'Prix et facturation',
      items: [
        {
          q: 'Combien cela coûte-t-il ?',
          a: [`Classic coûte ${PRICES.classic.yearly} EUR par mois et Premium ${PRICES.premium.yearly} EUR par mois, en facturation annuelle, avec ${PRICES.usersIncluded} utilisateurs inclus. Chaque utilisateur supplémentaire coûte ${PRICES.extraUser.yearly} EUR par mois. La TVA n’est pas incluse.`]
        },
        {
          q: 'Puis-je payer au mois ?',
          a: [`Oui. En mensuel, c’est ${PRICES.classic.monthly} EUR pour Classic et ${PRICES.premium.monthly} EUR pour Premium. La mise en place coûte ${PRICES.setupMonthly} EUR et l’import de vos tableurs ${PRICES.importMonthly} EUR, une seule fois, en mensuel ; en annuel, les deux sont offerts.`]
        },
        {
          q: 'Y a-t-il un essai gratuit ?',
          a: ['Non. Il y a une démo de 30 minutes.']
        }
      ]
    },
    {
      title: 'Données et sécurité',
      items: [
        {
          q: 'Où sont mes données ?',
          a: ['Dans un espace à part pour votre agence, hébergé dans l’Union européenne, séparé de toutes les autres agences.']
        },
        {
          q: 'Puis-je partir avec mes données ?',
          a: ['Oui. Vous récupérez vos données dans des formats standard.']
        },
        {
          q: 'Qui peut voir quoi ?',
          a: ['Avec Classic, chaque utilisateur voit les voyages de l’agence. Avec Premium, chaque équipe et chaque personne peut avoir ses propres clients, voyages et droits.']
        }
      ]
    },
    {
      title: 'Changement d’outil',
      items: [
        {
          q: 'Puis-je importer mon catalogue actuel ?',
          a: ['Oui. Pendant la mise en place, nous importons vos produits, vos prix et vos prestataires depuis vos tableurs. La mise en place et l’import sont offerts en annuel.']
        },
        {
          q: 'Le changement va-t-il perturber ma saison ?',
          a: ['Il se fait en parallèle. Commencez par les nouvelles demandes dans Traviosoft et terminez les voyages en cours comme avant.']
        },
        {
          q: 'Est-ce conforme aux règles de mon pays ?',
          a: ['La numérotation des factures par société et les avoirs fonctionnent partout. Les régimes de TVA et la facturation électronique s’activent pays par pays dans les paramètres. Pour les autres pays, demandez-nous ce qui est couvert.']
        }
      ]
    }
  ]
};

export const about: SiteContent['about'] = {
  metaTitle: 'À propos de Traviosoft : né dans une agence de Barcelone',
  metaDescription:
    'Traviosoft est né dans une agence de voyages sur mesure de Barcelone qui tournait avec Excel, Word et WhatsApp. Support par email assuré par les personnes qui construisent le produit, données en UE.',
  title: 'À propos de Traviosoft',
  lead: 'Traviosoft est né dans une agence de voyages sur mesure de Barcelone. C’est un système de gestion pour les agences sur mesure et les DMC.',
  blocks: [
    {
      title: 'D’où il vient',
      body: [
        'L’agence fonctionnait avec Excel pour les tarifs, Word pour les devis et WhatsApp pour tout le reste. Pendant une semaine chargée, chaque acompte et chaque confirmation d’hôtel dépendaient de la mémoire de quelqu’un.',
        'La première version a été construite là, sur les voyages de l’agence.'
      ]
    },
    {
      title: 'Ce qu’il fait',
      body: [
        'Traviosoft couvre tout le voyage : demandes, devis chiffrés prestation par prestation à partir de tarifs nets, réservations avec plusieurs prestataires, documents dans la langue du client, paiements et factures.'
      ]
    },
    {
      title: 'Support',
      body: [
        'Le support se fait par e-mail, en espagnol, en anglais et en français, par les personnes qui construisent le produit.'
      ]
    },
    {
      title: 'Vos données',
      body: [
        'Chaque agence a son propre espace séparé, hébergé dans l’Union européenne. Vous pouvez exporter vos données à tout moment.'
      ]
    }
  ],
  facts: [
    { k: 'Origine', v: 'Une agence sur mesure de Barcelone' },
    { k: 'Pour', v: 'Agences sur mesure et DMC' },
    { k: 'Support', v: 'Par email, en espagnol, anglais et français' },
    { k: 'Données', v: 'Un espace privé par agence, hébergé dans l’UE' }
  ]
};

export const resources: SiteContent['resources'] = {
  metaTitle: 'Ressources pour agences de voyages sur mesure | Traviosoft',
  metaDescription:
    'Comparatifs, guides et un glossaire pour les agences sur mesure et les DMC qui choisissent un logiciel. En langage clair, sans inscription.',
  title: 'Ressources',
  lead: 'Comparatifs, guides et un glossaire.',
  groups: [
    { kind: 'best', title: 'Comparatif des meilleurs logiciels', body: 'Les outils qu’utilisent les agences sur mesure et les DMC, côte à côte, et à qui chacun convient.' },
    { kind: 'compare', title: 'Pages de comparaison', body: 'Traviosoft à côté d’autres outils.' },
    { kind: 'guide', title: 'Guides', body: 'Des notes pratiques pour chiffrer, réserver et facturer un voyage sur mesure.' },
    { kind: 'glossary', title: 'Glossaire', body: 'Les termes d’agence de voyages et de logiciel, en une ligne chacun.' },
  ],
  glossaryTitle: 'Glossaire',
  glossaryMeta:
    'Des définitions claires des termes qu’utilisent les agences de voyages sur mesure et les DMC : tarif net, commission, feuille de service, rooming list, acompte et plus.',
  glossaryLead: 'Les mots que vous utilisez chaque jour, et ceux du logiciel, en une ligne chacun.'
};
