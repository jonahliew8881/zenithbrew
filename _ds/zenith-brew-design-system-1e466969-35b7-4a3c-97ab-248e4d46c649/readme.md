# Zenith Brew — Design System

**Zenith Brew** — *"where focus meets flavour."* A premium coffee brand positioned around focus and ritual: coffee for people doing deep, deliberate work. The brand voice and visuals lean elegant and calm rather than loud/energetic — closer to a boutique specialty roaster than a mass-market energy brand.

## Sources
- `uploads/Zenith Brew Guide.pdf` — brand guide (Canva export, 2 pages). Contained a color token sheet (7 named colors + hex values) and a page naming spacing/radius/stroke/angle tokens *without* numeric values. No typography, copy, or component specs were included.
- `uploads/Zenith Brew White LOGO.png` — a 1500×1500 brand lockup (not a transparent cutout): monogram mark, full wordmark ("ZENITH" in gold serif over "BREW" in navy serif), tagline in a connected script, and a low-poly triangular/mountain motif with a gold diamond dot-grid.
- No codebase, Figma file, or slide deck was attached. Everything below (type pairing, component set, copy voice, UI kit) is originated from this one visual asset + the color tokens, since no other product surfaces exist yet — flagged throughout as design judgment, not extracted fact.

## What's here
- `tokens/` — colors, typography, spacing, effects (radius/stroke/shadow/angle), fonts — all imported by root `styles.css`.
- `assets/logo/` — the brand lockup, plus cropped monogram and wordmark-only versions.
- `guidelines/` — foundation specimen cards (Design System tab: Colors, Type, Spacing, Effects, Brand groups).
- `components/` — reusable primitives: `core/` (Button, Badge, Tag, IconButton), `forms/` (Input, Select, Checkbox, Switch), `feedback/` (Card, Alert, Tooltip), `navigation/` (Tabs, NavBar).
- `ui_kits/marketing-site/` — click-through recreation of the Zenith Brew marketing site (home, shop/menu, product detail, cart).
- `SKILL.md` — portable skill file for use in Claude Code or other agent environments.

## Content fundamentals (copy voice)
Only the logo's tagline was given as source copy: *"where focus meets flavour."* From it:
- **Tone**: quiet confidence, not hype. Short declarative sentences. No exclamation points, no urgency ("Buy now!", "Limited time!").
- **Person**: second person ("you") for direct product copy; occasional first-person-plural ("we roast") for brand/about voice. Avoid first-person-singular.
- **Casing**: sentence case for body copy and buttons ("Add to cart", not "ADD TO CART" or "Add To Cart"). Reserve full caps for the wordmark itself and small eyebrow labels (tracked out, e.g. "SINGLE ORIGIN").
- **Vocabulary axis**: pairs *focus/clarity/ritual* language with *flavour/craft* language — the brand's whole thesis is that these aren't in tension. Example headline direction: "Coffee for the work that matters" / "Roasted for clarity, not just caffeine."
- **Spelling**: British spelling ("flavour") per the source tagline — carry this through all copy (colour, favourite, etc).
- **Emoji**: none. The brand mark itself is the only decorative flourish; copy stays typographic.
- **Numbers/specs** (roast dates, origin, weight) presented plainly, no manufactured urgency copy ("Only 3 left!").

## Visual foundations
- **Color**: cool navy (`--color-primary` #1D2951, near-black `--color-primary-shade` #0F1730) paired with warm gold (`--color-accent` #C5A059) on a pale, slightly cool off-white page (`--color-base` #F4F6FC). Neutral white for cards. This is a two-color brand (navy + gold) plus tints/shades — not a rainbow palette. Gold is the "hero" accent color (CTAs, highlights); navy carries text and structure.
- **Type**: a wide-tracked, thin-stroke serif for display/wordmark moments (`--font-display`, Cormorant Garamond as nearest Google Fonts match — see flag below), a clean geometric sans for UI/body (`--font-body`, Jost), and a connected monoline script reserved for tagline-style accents only (`--font-script`, Caveat) — never for body copy or buttons.
- **Backgrounds**: flat color, no photographic full-bleed backgrounds in the source. The one texture in the brand mark is a **low-poly triangulated "mountain" motif** (faceted, some triangles filled in navy/tint, some outlined in gold hairline) plus a **gold diamond dot-grid** pattern used as a corner accessory. Treat these as occasional decorative accents in a corner or section break — not a repeating all-over pattern behind text.
- **Gradients**: none observed. Keep surfaces flat; do not introduce gradients (esp. not purple/blue "AI" gradients).
- **Shape language**: the mark itself is built from triangles and a diagonal "peak" cut (see the angled ribbon under the wordmark, and the `angle-accent` token named in the guide). Prefer angled/diagonal dividers and low-poly triangle accents over rounded blobs when you want brand texture.
- **Corners & cards**: modest radii — `--radius-sm` 4px for controls/chips, `--radius-lg` 20px for larger cards/photos. Cards are flat white on the pale page background, hairline navy border at ~16% opacity (`--border-hairline`) plus a soft ambient shadow (`--shadow-sm`/`--shadow-md`) — no colored left-border accent strip.
- **Borders**: hairline (1px) navy at low opacity is the default separator/border treatment, echoing the thin strokes of the wordmark letterforms.
- **Shadows**: soft, low-contrast, cool-toned (navy-tinted, not pure black) — ambient elevation, not hard drop shadows.
- **Transparency/blur**: no blur/glass effects in the source mark. Use plain opacity steps on the navy ink (16%/32%) for hairlines and disabled states instead of frosted-glass surfaces.
- **Imagery color vibe**: none supplied. Given navy+gold+off-white palette, product photography should be warm-neutral (roasted browns, cream, warm light) — avoid cool blue-toned or high-saturation food photography. (No real photography was provided; UI kit uses labeled placeholders.)
- **Animation**: not specified in source. Default to restrained, purposeful motion: fades/slides only, `--ease-out` (gentle deceleration), `--duration-standard` ~220ms. No bounce/spring easing, no looping decorative animation — matches the calm/"focus" brand thesis.
- **Hover states**: buttons/links darken slightly (accent → `--accent-hover`) or gain a subtle hairline border; avoid brightening or adding shadow-pop on hover.
- **Press states**: slight scale-down (0.98) and/or shade-darken; no color inversion.
- **Layout rhythm**: generous whitespace, centered narrow measure for editorial copy (`--container-narrow` 720px), wider grid for shop/product listings (`--container-max` 1200px).

### Flagged substitution — please confirm
The brand guide named color tokens exactly, but **no typeface names or font files were included**. The wordmark's thin wide serif and the tagline's script were matched visually to **Cormorant Garamond** and **Caveat** (Google Fonts) as the nearest free equivalents, and **Jost** was chosen as a UI/body sans to pair with them (not derived from any source — no body font was shown anywhere). **If Zenith Brew has real licensed fonts, please attach the font files (or name them) and this system will be updated to use them exactly.**

Similarly, `space-unit`, `radius-sm`, `radius-lg`, `stroke-hairline`, and `angle-accent` were named in the guide's second page but **no numeric values were attached to them** — the values in `tokens/spacing.css` / `tokens/effects.css` are reasonable defaults chosen to match the mark's geometry, not extracted values. Flag if you have the original numbers.

## Iconography
No icon set, icon font, or SVG sprite was supplied. The brand mark uses no pictorial icons at all — only typographic/geometric marks (triangles, diamonds, hairline rules). For UI affordances (search, cart, chevrons, close, menu) this system uses **Lucide** icons loaded from CDN (`unpkg.com/lucide-static`), chosen for its thin, consistent stroke weight that matches the hairline strokes of the wordmark. This is a substitution, not a brand asset — flagged here per instructions. No emoji or unicode glyphs are used as icons.

## Intentional additions
No component library or codebase was attached, so the standard primitive set was authored from scratch, sized to a coffee-brand marketing site: **Button, IconButton, Badge, Tag, Input, Select, Checkbox, Switch, Card, Alert, Tooltip, Tabs, NavBar.** None of these come from an extracted source — they are the standard set called for when no source defines an inventory.

## Index
- `styles.css` — root stylesheet (imports only)
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`
- `assets/logo/zenith-brew-lockup.png` (full brand board), `zenith-brew-monogram.png`, `zenith-brew-wordmark.png`
- `guidelines/` — specimen cards: `colors-primary.card.html`, `colors-neutral.card.html`, `colors-semantic.card.html`, `type-display.card.html`, `type-body.card.html`, `type-script.card.html`, `spacing-scale.card.html`, `spacing-in-use.card.html`, `radius.card.html`, `shadows.card.html`, `hairline-angle.card.html`, `brand-mark.card.html`, `brand-pattern.card.html`
- `components/core/` — Button, IconButton, Badge, Tag
- `components/forms/` — Input, Select, Checkbox, Switch
- `components/feedback/` — Card, Alert, Tooltip
- `components/navigation/` — Tabs, NavBar
- `ui_kits/marketing-site/` — Home, Shop, Product Detail, Cart screens (index.html is the click-through demo)
- `SKILL.md` — portable skill definition for Claude Code
