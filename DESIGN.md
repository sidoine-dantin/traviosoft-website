# Design and content rules

Standing rules for the website (and the ads, emails and brand profiles that share its look and voice). They come from the owner's review of every draft and preview up to 14 November 2026. Where two remarks conflicted, the latest one is the rule. Check a change against this file and `MOBILE.md` before pushing.

Code: tokens in `src/app/globals.css`, fonts in `src/app/[locale]/layout.tsx`, prices in `src/content/prices.ts`.

## 1. Purpose first

Every colour, shape, detail and movement has a reason the visitor could guess. If it is there only to fill space, remove it.

- No filler data: no invoice numbers on brand cards, no step numbers, no numbered or colour-coded menus.
- No decoration without meaning. Map contour lines were rejected; the dotted routes stay because they echo the logo.
- Each section has its own visual. Never show the same picture twice on a page.

## 2. Colour (palette A)

| Role | Token | Hex |
|---|---|---|
| Page background | `--cream` | #F7F8F6 |
| Surface (cards) | `--cream-2`, `--white` | #FCFDFB |
| Text | `--ink` | #14231E |
| Muted text | `--muted` | #5E6661 |
| Lines | `--line` | #E3E6E2 |
| Brand green (buttons, links) | `--green` | #015D47 |
| Dark green (dark sections, text on yellow) | `--deep` | #013A2D |
| Yellow accent | `--yellow` | #E0F354 |

- No orange anywhere: it reads as a status colour (importance, danger). No beige or cream tints.
- Never pure white (#FFFFFF) or pure black (#000000), shadows included.
- Colour is welcome for character as backgrounds, panels and background shapes, because those imply no meaning.
- Never give items of a list, pills or tags different colours: the visitor reads a meaning into it. The only coloured pills are statuses (green done, yellow waiting), and a status always carries a word, never colour alone.
- Large yellow areas never sit next to mid green (they vibrate). Yellow pairs with dark green. Text on yellow is dark green.
- Text pairs to avoid: dark green on green, muted on green.

## 3. Type and logo

- Schibsted Grotesk for titles (bold 700) and all text.
- Bricolage Grotesque only for the logo and price figures.
- Rejected, do not bring back: Funnel Display ("AI coded"), Archivo bold, Bricolage everywhere, DM Mono or any mono font.
- Logo: lowercase "traviosoft" in Bricolage with the yellow disc and dotted route. Never an uppercase condensed wordmark.

## 4. No AI look

- No capitalised labels or eyebrows above titles, no full stop at the end of a title, no mono text, no tight letter-spacing (logo excepted).
- No pill rows, no section numbers, no "1 of 4" breadcrumbs.
- Cards and paragraphs do not all have the same length. Some are a few words, some longer.
- No "Premium" pill next to features. Which plan includes what appears only on the Pricing page.

## 5. Shape and motion

- Tilt is fine when it means something: the messy "before" pile (overlapping, tilted notes), the two price circles turned in opposite directions. Product cards stay straight.
- Subtle motion is welcome: elements in the home hero move at different speeds as you scroll (desktop only, off when the system asks for reduced motion); link hover where the arrow moves forward, the text lifts and the underline thickens.
- Background dotted routes: clean organic curves without hand-drawn wobbles, continuous, wandering left and right with a few loops, spread from top to bottom, both ends off screen, always behind the content.

## 6. Layout

- Breathable: few elements per screen, generous space. The home stays light.
- Repeated elements line up (for example every "See how" link on the same line).
- Hover menus forgive the mouse: a bridge to the panel and a short close delay.
- Every page works from 360 px phones to 2560 px screens (`MOBILE.md`).
- Pricing comparison: three columns (feature, Classic, Premium), grouped in sections, a tick or a dash, and text only where the plans differ. Leave room to breathe.

## 7. Product visuals and mock content

- Visuals are drawn in HTML (`src/components/site/visuals.tsx`) and must be factually right: documents go out in 5 languages (Spanish, Catalan, English, French, Italian); the interface and support are in Spanish, English and French.
- Example text, dates and numbers follow the page language and its number format (FR 4 860, not 4,860).
- Show the real output only if it matches the app. If it cannot be accurate, show nothing (the example trips page was removed for this reason).
- No third-party logos (Word, Excel, WhatsApp, banks): their brand rules forbid it. Name them in plain text and use our own grey icons.
- No faces, names, testimonials, client logos, stars, ratings or review scores.

## 8. Voice and copy

- Positioning: a complete management system on the level of the established travel software. Never the cheap, light or "boutique" option, never "for small teams". Audience: "tailor-made travel agencies and DMCs". Price is a fact, never the argument. Full list: `brand/positioning.md`.
- Plain, confident tone of established software. No slogans or titles meant to impress ("Send a quote tonight", "Two plans, clear prices"). Plain titles ("Pricing", "Invoices from the trip").
- Describe, never justify. No lines that adapt to the visitor or sell ("so the rest fits your case", "a trip like yours").
- Positive words only: no lose, lost, never, forget, chasing, late, without, and no "No." to open an answer.
- Non-technical: no database, API, MCP or CSV. Never "CRM". Natural words (FR "voyage confirmé", not "dossier").
- Say what it does for the agency, not a list of features. Say the result, never the internal rule behind it.
- Country settings (Veri*Factu, REAV) are not headline features: one line about local tax rules, details on the country page.
- No summary paragraph that repeats the page, and no text that says what a visual already shows. Answers for search and AI tools go in the meta description, structured data and `llms.txt`.
- Every text (pages, bios, profiles) is written on purpose, never filler.

## 9. Structure and calls to action

- A tunnel: the home gives a light overview and visitors go deeper only into what interests them. A few job pages, each with real depth.
- One quiet "Book a demo" link in the header. No demo buttons or closing pushes in page bodies.
- The demo runs on a sample trip, never on the prospect's own data.

## 10. Comparisons and resources

- Never say or imply that a competitor lacks something or is weak. Describe each tool by what it does well; Traviosoft extras read "Traviosoft also ...".
- Honest, independent-review tone. No ratings or reviews, ours or theirs.

## 11. Prices and legal accuracy

- Never show binding information that is untrue.
- Wherever a price appears, it says "3 users" and carries an asterisk: per month, billed annually, excluding VAT, with the details on the Pricing page.
- The extra-user price comes after the plan price and shows only the selected billing (60 yearly, 70 monthly).
- Setup (390 EUR) appears crossed out and "free*" with yearly billing. Import of clean data is 290 EUR once on monthly billing and free yearly; messy data is on quote after a sample. The note reads "* With annual billing. Limited-time offer."
- Only features that exist in the app's production release are presented as available.

## 12. Cookie banner

- A centred card over a lightly dimmed page that stays usable, shown until the visitor answers.
- Accept is filled and stands out; Refuse has the same size and stays fully readable (CNIL and AEPD require refusing to be as easy as accepting). "Learn more" opens the privacy policy.

## Open questions for the owner

- Cookie banner text: on 13 November the owner asked to say the least the law allows and not to name LinkedIn or Meta; the banner built on 14 November from the Infogreffe example names them.
- The limited-time free setup and import offer is an exception to the earlier "no launch offer or discount" rule. Is it the only exception?
- DM Mono is still loaded in the layout but unused. Remove it?
