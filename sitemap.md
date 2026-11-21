# Sitemap

Source of truth: the "Traviosoft website sitemap" doc in the project. All pages exist in `es` (default), `en`, `fr` unless noted.

| Path | Page |
|---|---|
| `/` | Home: hero, trip in 5 steps, before/after, example trip, price coins, key facts |
| `/sell` `/book` `/get-paid` `/setup` | The 4 job pages (chapters with expandable features, FAQ, next job) |
| `/pricing` | Plans with a yearly/monthly toggle, what's included, FAQ |
| `/example` | Example client itinerary and quote |
| `/demo` | The 30-minute agenda and how to book |
| `/switch` | Switching from Excel or another tool |
| `/faq` `/about` | FAQ (FAQPage schema), About |
| `/resources` | Hub: best-of, compare pages, guides, glossary, example |
| `/compare/<slug>` | Best-of and "Traviosoft vs X" pages |
| `/guides/<slug>` | Guides; Spain-only pages (REAV, Veri*Factu, Spain page) exist in `es` only |
| `/glossary` | Glossary (DefinedTermSet schema) |
| `/legal/*` | Privacy, terms, legal notice |
| `/llms.txt` | Plain summary for AI tools |

Copy lives in `src/content/{es,en,fr}/*.ts` (types in `src/content/types.ts`).
