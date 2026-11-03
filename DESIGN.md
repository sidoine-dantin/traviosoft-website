# Design (2026-11, "Mandarin")

Chosen after 6 rounds of drafts (see the project's website drafts). Code: `src/app/globals.css`.

## Palette
- `--cream #FFF4E6` page base, `--cream-2 #F8E9D4` alternate bands
- `--green #015D47` brand, headings, footer, timeline band; `--deep #013A2D`
- `--orange #FD550A` the giant hero word, kickers, accents
- `--yellow #E0F354` coins, timeline dots, logo disc, "coming" tags
- `--ink #14231E` text, `--muted #5B5247` secondary text, `--line #EADCC8`

## Type
Bricolage Grotesque (variable, `wdth` 75 for display) + DM Mono for small labels. Letter-spacing about -0.02em on display type, never tighter.

## Logo
Lowercase "traviosoft" in Bricolage 600 + a yellow disc with a dotted green route and a green dot (`src/components/site/logo.tsx`). Never the uppercase condensed wordmark.

## Rules
- Giant type only in the home hero. Every other section uses a different format (timeline band, before/after, coins, chapters with product fragments, tables).
- Breathable: few elements per screen, generous padding.
- One quiet "Book a demo" link in the header. No demo buttons in page bodies.
- Show the product: product fragments drawn in HTML (`src/components/site/visuals.tsx`), the example trip page.
- No testimonials, logos, stars, invented numbers, faces or names.
