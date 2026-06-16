# Design

## Color Palette

```css
:root {
  /* Brand */
  --color-primary:       oklch(0.28 0.085 120);   /* deep moss green — brand, CTAs */
  --color-primary-hover: oklch(0.22 0.080 120);   /* darker on hover */
  --color-accent:        oklch(0.50 0.140 48);    /* warm terracotta — badges, highlights */

  /* Surfaces */
  --color-bg:            oklch(1.000 0.000 0);    /* pure white */
  --color-surface:       oklch(0.975 0.007 118);  /* barely-tinted section bg */
  --color-border:        oklch(0.920 0.005 118);  /* subtle dividers */

  /* Text */
  --color-ink:           oklch(0.13 0.015 118);   /* body text — near-black, green-tinged */
  --color-muted:         oklch(0.51 0.010 118);   /* secondary text — ≥4.5:1 vs white */
}
```

## Typography

Pair: **Instrument Serif** (display headings, emotional hooks) + **Inter** (body, UI, labels).

```css
:root {
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

Scale (clamp-based, desktop max first):
- Hero h1:   `clamp(2.75rem, 5vw, 4.5rem)`, display font, weight 400
- Section h2: `clamp(1.75rem, 3vw, 2.75rem)`, display font, weight 400
- Card h3:   `clamp(1.15rem, 2vw, 1.35rem)`, body font, weight 600
- Body:      `1rem / 1.65` line-height, body font
- Small:     `0.875rem`, body font, muted color

Text rendering: `text-wrap: balance` on h1–h3; `text-wrap: pretty` on long paragraphs.

## Color Strategy

**Committed** — the deep moss primary carries 30–50% of hero and CTA surfaces. Pure white bg keeps it clean. Terracotta accent is used sparingly: section divider dots, icon highlights, badges. No gradient text, no glass.

Scene: "The planning desk of an expert travel consultant in Barcelona — clean white surface, one dark green desk lamp, a small terracotta pot in the corner. Considered, not decorated."

## Spacing & Layout

Base unit: `4px`. Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px.

Max content width: `1280px`. Text-only columns cap at `72ch`.

Sections alternate between `--color-bg` (pure white) and `--color-surface` (faint green-tinted) to create rhythm without cards.

## Motion

Reveal: `opacity 0 → 1` + `translateY(24px) → translateY(0)`, duration `0.5s`, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
Stagger within lists: 80ms between items.
Hover: `0.18s` transitions, ease-out.
`@media (prefers-reduced-motion: reduce)`: crossfade only (no translate).

## Components

### Button (Primary)
Background: `--color-primary`. Text: white. Padding: `12px 24px`. Radius: `6px`. Font: Inter 500.
Hover: `--color-primary-hover`, slight shadow `0 2px 8px oklch(0.28 0.085 120 / 0.3)`.

### Button (Secondary / Ghost)
Border: `1.5px solid --color-primary`. Text: `--color-primary`. BG: transparent.
Hover: `--color-primary` bg, white text.

### Navigation
Fixed header, `backdrop-filter: blur(12px)` on scroll, border-bottom `--color-border`.
Logo left, nav links center, CTA button right, language switcher inline.

### Section headers
No eyebrows/kickers. Headings stand alone or are preceded by a small decorative element — a single 2px terracotta rule (`32px` wide) left-aligned above key section headings.

### Pain point / feature cards
Alternating layout (text left, visual right — then visual left, text right) for feature sections.
Pain points: 3-column grid at desktop, text-heavy, no icons — just strong typographic hierarchy.

## Anti-references (visual)
- Glassmorphism or blurred card overlays
- Gradient text or gradient CTA buttons
- Side-stripe colored borders on any card or list item
- Hero metric grids (big stat number + label grid)
- Eyebrow labels above every section heading
- Numbered section markers (01 / 02 / 03) as scaffolding
