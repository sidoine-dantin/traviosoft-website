# Tweaks panel prompt (step 3b)

Paste after a page is chosen. Dev-only: the panel must never ship to production.

> Add a floating "Tweaks" panel to this page, visible only when the URL has `?tweaks`. Every control updates the page live through CSS custom properties on `:root`, with no reload.
> Controls:
> - Entrance animation: none / subtle / expressive (staggered section reveal on scroll, respects prefers-reduced-motion).
> - Typography: headline weight, line height, letter spacing; body size.
> - Imagery: brightness, contrast, zoom of hero and product visuals.
> - Background pattern: none / dots / lines, plus opacity.
> - Accent colour: 5 swatches taken from the locked palette, plus a free picker.
> - Section spacing: compact / normal / airy.
> - Footer: plain / large wordmark watermark.
> Buttons: Save (localStorage), Reset, Compare (toggle original values while held), Copy settings (copies the current values as a CSS `:root {}` block).
> Keep the panel collapsible, keyboard-usable, and out of the page's own layout.

When the user sends the copied `:root {}` block back, freeze those values into the page CSS and remove the panel.
