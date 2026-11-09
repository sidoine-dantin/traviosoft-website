# Mobile rules for the website

Study of November 2026. Every rule below comes from a professional source and is checked on every page change (phones at 360 and 390 px wide).

## Sources read

1. **Nielsen Norman Group**: Mobile UX (nngroup.com/articles/mobile-ux), Touch target size, Hamburger menus, Mobile navigation patterns, Mobile tables, Accordions on mobile.
2. **Baymard Institute**: Mobile UX research overview (baymard.com/research-articles/mobile-ux-ecommerce, updated July 2026), Required and optional form fields.
3. **Google web.dev**: Web Vitals, Optimize LCP, Optimize CLS, Optimize INP, Accessible tap targets, Responsive web design basics, Font best practices.
4. **Google Search Central**: Mobile-first indexing best practices, Avoid intrusive interstitials.
5. **Apple Human Interface Guidelines**: Layout, Accessibility, Typography.
6. **W3C WCAG 2.2**: 1.3.4 Orientation, 1.4.3 Contrast, 1.4.4 Resize text, 1.4.10 Reflow, 1.4.12 Text spacing, 2.4.11 Focus not obscured, 2.5.5 and 2.5.8 Target size.
7. **Smashing Magazine**: The Thumb Zone (Ingram), Modern fluid typography with clamp() (Bece).
8. **UXmatters, Steven Hoober**: Design for Fingers, Touch, and People. **Luke Wroblewski**: Mobile First.

Material Design 3 pages could not be read (script-only pages); its 48 dp target is confirmed by web.dev's tap-target guide (48 px).

## The rules

### Touch
- **T1** Every link and button is at least 44 x 44 px (Apple 44 pt, WCAG 2.5.5 44 px, web.dev 48 px, NN/g 1 x 1 cm). Links inside sentences are the only exception (WCAG 2.5.8).
- **T2** Targets are at least 8 px apart (web.dev; NN/g about 2 mm).
- **T3** The main actions sit low or in the middle of the screen; rarely used ones may sit in a corner (Hoober, Smashing thumb zone).
- **T4** Anything that looks tappable is tappable (NN/g view-tap symmetry). No hover-only information.

### Navigation
- **N1** A visible menu control labelled with the word "Menu" next to the icon (NN/g: the word helps).
- **N2** A long link list opens as a full-screen menu, with items aligned for the thumb (Smashing). The page behind does not scroll.
- **N3** The menu shows where you are (Baymard: 94% of mobile sites do not).
- **N4** Everything the desktop header offers is reachable on a phone, including the language switch.
- **N5** The top bar hides while reading down and comes back on the first scroll up (NN/g sticky pattern). It never covers a focused element (WCAG 2.4.11).
- **N6** Long pages have an "on this page" bar near the top that follows the reader and marks the current section (NN/g in-page table of contents, Baymard current-section highlight).

### Content and layout
- **C1** One column. No sideways scrolling at 320 px (WCAG 1.4.10, web.dev).
- **C2** The gist first: the promise of a page is on the first screen, before illustrations (NN/g).
- **C3** Every new element is weighed against what it pushes down. Decoration that costs a full screen on a phone is shrunk or placed side by side (NN/g).
- **C4** Show the product early: on product pages the picture comes right after the promise, the detail list after it.
- **C5** Same content and headings on phone and desktop. Hide nothing that matters; fold long detail into accordions (Google mobile-first indexing).
- **C6** Accordions open in place and push content down (NN/g). Their headers are at least 56 px tall.
- **C7** Tables with words in their cells become one card per row on a phone, each value under its column name (NN/g: only about 2 wordy columns fit). Never hide columns off the right edge.

### Type and reading
- **R1** Body text 17 px (Apple default 17 pt), line height at least 1.5 (WCAG 1.4.12).
- **R2** Nothing under 11 px (Apple minimum); small labels are uppercase, bold and spaced.
- **R3** Lines of about 45 to 75 characters (web.dev 70 to 80 maximum).
- **R4** Contrast at least 4.5:1 for text, 3:1 for large or bold text (WCAG 1.4.3).
- **R5** Zoom is never blocked (no maximum-scale); text can grow to 200% (WCAG 1.4.4).

### Speed and stability
- **P1** LCP under 2.5 s, INP under 200 ms, CLS under 0.1 at the 75th percentile on phones (web.dev Core Web Vitals).
- **P2** Fonts self-hosted, WOFF2, `display: swap`, fallback font declared (web.dev).
- **P3** No full-screen pop-ups (Google intrusive interstitials).
- **P4** Motion is reduced when the phone asks for it (Apple Reduce Motion, WCAG 2.3.3).

## How to check

Run the site, open each page at 360 and 390 px with touch emulation, and confirm: no horizontal scroll, every interactive element 44 px or more, first screen shows the promise, tables readable without sideways scrolling, menu reaches every page and every language.
