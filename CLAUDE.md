# traviosoft-website

Marketing site (Next.js, OpenNext on Cloudflare). Product and brand context: PRODUCT.md, DESIGN.md.

## Design workflow (new version of the site)

1. **Taste vault** `design/taste-vault/<family>/`: reference screenshots + `notes.md` (source, what we like). Always design from these references, never from adjectives alone.
2. **Wide round**: 3 to 4 families from the vault, each built twice: once with no design skill, once with `impeccable`. Copy stays fixed (one angle) so only design varies. Share each as a private Artifact link.
3. **Narrow**: pick one, build 3 variations inside that family (hero size, density, accent).
4. **Tweaks panel**: `design/tweaks-panel-prompt.md`, then freeze the chosen values.
5. **Components**: the user pastes 21st.dev "copy prompt" texts; adapt them to the locked palette and type.
6. **Polish**: `better-interface` review (type, colour, layout, accessibility, writing), then `review-animations` / `find-animation-opportunities` for motion.
7. **Score to target**: score the page /10 on hierarchy, clarity of the gain, type, colour, motion, mobile; fix the weakest point until every line is 8+.

Rules:
- Only one style skill per variant (`impeccable`, `taste-skill` or `tastemaker`), never stacked.
- `tastemaker` is used for its palette extraction from vault images and its style lock (`.tastemaker/style-lock.md`).
- Copy rules: sell the gain for the agency owner, features only as proof; ~200 words of marketing copy, max 5 sections; no invented stats, testimonials, client logos or faces; never show the founder's face, name or voice.
- Pricing: 190 EUR/month up to 3 users, 250 EUR/month up to 5 users, billed yearly.

Skills in `.claude/skills/` are vendored copies (MIT / Apache-2.0) of: pbakaus/impeccable, Leonxlnx/taste-skill, codeswithroh/tastemaker, jakubkrehel/skills (better-*), emilkowalski/skills (review-animations, find-animation-opportunities).
