---
title: Plan du site - traviosoft.com
status: structure de navigation, à implémenter en Next.js (next-intl, locales fr/en/es)
---

# Pages

| Slug | Page | Fichiers de contenu |
|---|---|---|
| `/` | Accueil | `content/{lang}/home.md` |
| `/product` | Produit / Fonctionnalités | `content/{lang}/product.md` |
| `/how-it-works` | Comment ça marche | `content/{lang}/how-it-works.md` |
| `/pricing` | Tarifs | `content/{lang}/pricing.md` |
| `/about` | À propos / Pourquoi Traviosoft | `content/{lang}/about.md` |
| `/demo` | Réserver une démo | `content/{lang}/demo.md` |
| `/faq` | FAQ | `content/{lang}/faq.md` |
| `/legal/privacy` | Politique de confidentialité | `content/{lang}/legal-privacy.md` |
| `/legal/terms` | Conditions générales | `content/{lang}/legal-terms.md` |

Chaque slug est préfixé par la locale (`/fr/...`, `/en/...`, `/es/...`), avec `es` comme locale par défaut (marché prioritaire) ou détection navigateur, selon ce qui sera décidé côté implémentation.

# Navigation - Header

Ordre des liens (identique dans les 3 langues, libellés traduits) :

1. Accueil (logo, lien vers `/`)
2. Produit (`/product`)
3. Comment ça marche (`/how-it-works`)
4. Tarifs (`/pricing`)
5. À propos (`/about`)
6. FAQ (`/faq`)
7. Sélecteur de langue (FR / EN / ES)
8. CTA bouton, mis en avant visuellement : "Réserver une démo" → `/demo`

# Navigation - Footer

Colonnes suggérées :

**Produit**
- Fonctionnalités (`/product`)
- Comment ça marche (`/how-it-works`)
- Tarifs (`/pricing`)
- Réserver une démo (`/demo`)

**Entreprise**
- À propos (`/about`)
- FAQ (`/faq`)

**Légal**
- Politique de confidentialité (`/legal/privacy`)
- Conditions générales (`/legal/terms`)

**Langue**
- FR / EN / ES

Bas de page : copyright "Traviosoft" + année courante, mention "Logiciel de gestion pour agences de voyage boutique" (variante de la tagline).

# CTA récurrents

Le CTA "Réserver une démo" doit apparaître :
- Dans le header (toutes les pages)
- En fin de chaque page de contenu (`home`, `product`, `how-it-works`, `pricing`, `about`, `faq`)
- En version développée sur la page `demo`

Aucun autre chemin de conversion (pas de "Acheter", "Essai gratuit en self-service", "Voir les prix") n'est mis en avant : le funnel converge vers la prise de rendez-vous.
