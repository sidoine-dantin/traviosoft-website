# Design (2026-11, "Mandarin")

Chosen after 6 rounds of drafts (see the project's website drafts). Code: `src/app/globals.css`.

## Palette
- `--cream #FFF4E6` page base, `--cream-2 #F8E9D4` alternate bands
- `--green #015D47` brand, headings, footer, timeline band; `--deep #013A2D`
- `--orange #FD550A` the giant hero word, shapes, accents
- `--orange-ink #B83C00` orange for small text (kickers, labels, current page): 5.2:1 on cream, WCAG AA
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

## Phones
Every page follows the rules in `MOBILE.md` (touch targets, menu, chapter bar, tables as cards, gist first). Check pages at 360 and 390 px before shipping.

## Motion
Same rule as the app (`apps/web/DESIGN.md` "Motion" in the monorepo): every movement has a reason, the more often something is seen the less it moves, and nothing a visitor waits on takes longer than 250 ms. Curves are `--ease-enter` (arrive, slowing down) and `--ease-exit` (leave, faster) in `globals.css`.

| What | Motion |
|---|---|
| Product menu, language list | 120 ms fade from 97%, closes at once |
| Phone menu | 200 ms fade and 8 px rise |
| Cookie banner | dim layer fades in 200 ms, card from 97% in 180 ms |
| Buttons (demo, cookie choices, language, menu) | shrink to 97% while pressed, 100 ms; text links don't |
| Text links with an arrow | text a little bolder, underline drops and extends under the arrow, arrow moves forward; text never moves up |
| Cards | shadow deepens on hover; the card does not lift |
| Phone header | slides away 200 ms reading down, back 250 ms on scroll up |
| Home reveals (seen once) | 400 ms fade and 12 px rise; the messy pile drops in one scrap after another with a small settle; the tidy side follows after 250 ms; the two price coins roll a short way into their tilt in 500 ms |
| Hero phone, route dots | still |

Reduced motion turns every animation and transition off. Click targets: header links are at least 40 px tall, buttons and phone links 44 px or more (`MOBILE.md`).
