---
version: alpha
name: GeoExploration
description: Earthy, precise, trustworthy design system for a Kazakhstan engineering-survey company (geodesy, engineering geology, water well drilling, hydrogeology, field supplies). Trilingual - Russian (default), Kazakh, English. Light and dark themes.
colors:
  background: "#FAF7F2"
  foreground: "#4A3B32"
  card: "#FDFCFA"
  card-foreground: "#4A3B32"
  muted: "#F0EDE8"
  muted-foreground: "#715F55"
  border: "#E5DFD8"
  primary: "#497EA2"
  primary-foreground: "#FFFFFF"
  secondary: "#9F5538"
  secondary-foreground: "#FFFFFF"
  secondary-tint: "#F4EBE7"
  accent: "#46404C"
  accent-foreground: "#FAF7F2"
  ring: "#88ACC3"
  destructive: "#EF4444"
  dark-background: "#1A1614"
  dark-foreground: "#F0EDE8"
  dark-card: "#221E1B"
  dark-muted: "#2E2824"
  dark-muted-foreground: "#A89888"
  dark-border: "#3A322C"
  dark-primary: "#9BBDD4"
  dark-primary-foreground: "#1A1614"
  dark-secondary: "#D29D89"
  dark-secondary-foreground: "#1A1614"
  dark-accent: "#6B6278"
  dark-secondary-tint: "#3A2A24"
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.025em
  headline:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.025em
  title:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  card-title:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.1em
  label:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.08em
  stat:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  tile: 10px
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  section: 80px
  container: 1152px
  gutter: 32px
  grid-gap: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
  button-cta:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 0 32px
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
  section-eyebrow:
    textColor: "{colors.secondary}"
    typography: "{typography.eyebrow}"
  section-heading:
    textColor: "{colors.foreground}"
    typography: "{typography.headline}"
  service-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.xl}"
    padding: 20px
  service-card-category:
    textColor: "{colors.primary}"
    typography: "{typography.label}"
  service-card-title:
    textColor: "{colors.card-foreground}"
    typography: "{typography.card-title}"
  service-card-description:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.caption}"
  service-card-link:
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
  icon-tile:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.tile}"
    size: 48px
  icon-tile-hover:
    backgroundColor: "{colors.secondary-tint}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.tile}"
    size: 48px
  icon-tile-dark:
    backgroundColor: "{colors.dark-muted}"
    textColor: "{colors.dark-foreground}"
    rounded: "{rounded.tile}"
    size: 48px
  icon:
    textColor: "currentColor"
    size: 24px
  stat-tile:
    backgroundColor: "{colors.card}"
    textColor: "{colors.primary}"
    typography: "{typography.stat}"
    rounded: "{rounded.lg}"
    padding: 20px 16px
  portfolio-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.xl}"
  badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 4px 12px
  form-error:
    textColor: "{colors.destructive}"
    typography: "{typography.caption}"
  footer:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
  footer-dark:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-foreground}"
  page-dark:
    backgroundColor: "{colors.dark-background}"
    textColor: "{colors.dark-foreground}"
  service-card-dark:
    backgroundColor: "{colors.dark-card}"
    textColor: "{colors.dark-foreground}"
    rounded: "{rounded.xl}"
    padding: 20px
  service-card-description-dark:
    textColor: "{colors.dark-muted-foreground}"
    typography: "{typography.caption}"
  service-card-category-dark:
    textColor: "{colors.dark-primary}"
    typography: "{typography.label}"
  service-card-link-dark:
    textColor: "{colors.dark-secondary}"
    typography: "{typography.body-sm}"
  icon-tile-dark-hover:
    backgroundColor: "{colors.dark-secondary-tint}"
    textColor: "{colors.dark-secondary}"
    rounded: "{rounded.tile}"
    size: 48px
  button-primary-dark:
    backgroundColor: "{colors.dark-primary}"
    textColor: "{colors.dark-primary-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    height: 36px
    padding: 0 16px
  button-cta-dark:
    backgroundColor: "{colors.dark-secondary}"
    textColor: "{colors.dark-secondary-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 0 32px
---

# GeoExploration - DESIGN.md

## Overview

GeoExploration is a Kazakhstan company that does engineering-geological surveys, geodesy and topography, water well drilling and hydrogeology. It also supplies field equipment: PQ/HQ/NQ core boxes and sample bags. The website is a marketing and lead-generation site for construction developers, design institutes, mining companies and landowners. They need to trust that the company is precise, certified and actually works in the field.

**Personality:** precise, grounded, trustworthy, calm, modern. Think of a well-made field instrument: clean geometry, warm materials, nothing decorative without purpose.

**Visual metaphor:** the earth itself. Warm sand and cream surfaces, dark-earth text, terracotta like exposed clay or ochre, and mineral slate blue like groundwater and survey instruments. Contour lines, soil strata and survey grids are good secondary motifs, used sparingly and quietly.

**Languages:** every screen must work in **Russian (default), Kazakh and English**. Russian and Kazakh strings are much longer than English, e.g. "Инженерно-геологические изыскания" and "Керн жәшіктері және сынама қаптары". Design with the longest language first.

**Themes:** light (default) and dark. Both are first-class, and every component and icon must be legible in both.

**Domain vocabulary:**
- **Service Category:** a broad line of work. The five are Geodesy & Topography, Engineering-Geological Surveys, Water Well Drilling, Hydrogeology, and Equipment & Materials (field supplies).
- **Service:** a specific offering that belongs to one Service Category and is shown as its own card, e.g. Topographic Survey, Staking Out, 3D Scanning, Verticality Control, As-Built Survey, Core Boxes & Sample Bags.
- **Core Box:** a polypropylene tray that stores cylindrical rock core samples. **Sample Bag:** a reinforced fabric bag for soil and mineral specimens.

## Colors

Light theme:
- **Background** `#FAF7F2`: warm cream page.
- **Card** `#FDFCFA`: warm white surfaces, always with a `#E5DFD8` hairline border.
- **Foreground** `#4A3B32`: dark earth, the color for all primary text and icons. Never use pure black.
- **Muted** `#F0EDE8` / **muted foreground** `#715F55`: quiet surfaces (icon tiles, alternating sections) and secondary text.
- **Primary, mineral slate blue** `#497EA2`: links, primary buttons, stats, category labels, focus rings (`#88ACC3`).
- **Secondary, terracotta** `#9F5538`: the brand accent. Used for eyebrows, CTA buttons, hover states, badges, and the short rule under section headings. Use it in small doses: it should guide the eye, not fill areas.
- **Accent, deep amethyst-charcoal** `#46404C`: footer background only.

Dark theme: background `#1A1614`, card `#221E1B`, muted `#2E2824`, border `#3A322C`, text `#F0EDE8`, secondary text `#A89888`, slate blue `#9BBDD4`, terracotta `#D29D89`, footer `#6B6278`. Depth in dark mode comes from borders and tints, not shadows.

Tints: hover and selected states use the accent at 10% (`secondary/10`). Section backgrounds may use `muted` at 40%. Hero photo overlays use dark earth `#4A3B32`, fading from 70% to transparent.

## Typography

**Inter** only, at weights 400, 500, 600 and 700. No secondary or decorative typeface.

- **Display** (48px, bold, tight tracking): hero headlines on photography, white with a soft text shadow.
- **Headline** (30px, bold): section headings such as "Наши услуги".
- **Eyebrow** (14px, medium, uppercase, wide 0.1em tracking, terracotta): sits above every section heading, e.g. "ЧТО МЫ ПРЕДЛАГАЕМ".
- **Card title** (15px, semibold): must wrap to 2–3 lines gracefully. Never truncate a service name.
- **Caption** (13px, muted): card descriptions, up to 3 lines.
- **Label** (11px, semibold, uppercase, letter-spaced, slate blue): category tags on cards.
- Body text is 16px with a 1.6 line height. Cyrillic must render with proper Kazakh letters (Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І).

## Layout

- Content is at most **1152px** wide and centered, with 32px side gutters (16–24px on mobile). The hero can be up to 1280px wide.
- Sections are spaced **80px** apart vertically. Every section starts with a centered eyebrow, then the headline, then a 64×4px terracotta rule.
- **Service grid:** 4 columns on desktop, 3 on tablet, 1 on mobile, with 24px gaps. Cards in a row are always equal height, and their bottom links line up.
- **Portfolio:** a horizontal carousel showing 3 items on desktop, 2 on tablet and 1.15 on mobile (the next card peeks in).
- **Spacing:** a 4px base grid. Common steps are 8, 16, 24, 32 and 48px.
- **Page order:** Hero carousel → Services → About (with 3 stat tiles) → Portfolio → Videos → Contact form → Footer.

## Elevation & Depth

The design is flat by default, with very soft elevation:
- Cards at rest: a 1px border plus a near-invisible shadow (`shadow-xs`).
- Cards on hover: lift 4px (`translateY(-4px)`), with a larger soft shadow tinted terracotta at about 10% and the border turning terracotta at 30%.
- Hero images: a large soft shadow (`shadow-lg`).
- Dark mode drops most shadows and relies on border contrast.
- Motion: 300ms ease transitions. Images zoom 105–110% on hover over 500ms. Respect reduced-motion settings.

## Shapes

- Corner radius: 12px for cards and images, 10px for icon tiles, 8px for stat tiles, 6px for buttons and inputs, fully round for check-mark bullets and avatars.
- Square icon tiles (48×48) with rounded corners, never circles.
- Thin hairline borders (1px). No heavy outlines and no dashed borders, except on survey-grid motifs.

## Components

**Icons (critical).** These are monoline outline icons: a 24px grid, 1.75px stroke, round caps and joins, no fills, drawn in `currentColor`, in the style of Lucide. Every icon must have the same visual weight. Icons **never contain text, letters or numbers**, because the site is trilingual. Subjects are concrete geoscience objects drawn simply: theodolite or total station on a tripod, contour lines, survey stake with a crosshair, land parcel with corner markers, soil strata with a borehole, drill tower, water drop over groundwater layers, core tray with cylinders, sample bag with a tag. Icons always sit inside an **icon tile**.

**Icon tile.** 48×48 with a 10px radius. At rest: `muted` background with a dark-earth icon. On hover: terracotta-tint `#F4EBE7` background with a terracotta icon. In dark mode: `#2E2824` background with a light icon, and on hover `#3A2A24` with a `#D29D89` icon.

**Service card.** The whole card is a link to its Service Category page. Content is left-aligned, top to bottom: icon tile → category label (slate blue, uppercase) → title → description → a "Подробнее →" / "Толығырақ →" / "Learn more →" row in terracotta, pinned to the bottom. Padding is 20px, radius 12px, with a hairline border. Hover: the card lifts, the border tints terracotta, the icon tile tints terracotta, and the arrow nudges 4px right. Keyboard focus shows a 2px slate-blue ring with a 2px offset.

**Portfolio card.** A real field photo (landscape, 4:3) on top, then the title and subtitle. On hover, a dark-earth gradient rises from the bottom and a terracotta "view more" badge slides up.

**Stat tile.** A large slate-blue number with a small muted caption, on a card surface with a hairline border.

**Buttons.** Primary uses slate blue. The main CTA ("leave a request") uses terracotta. Secondary actions use an outline style. Buttons are 36–40px tall, with medium-weight 14px labels in sentence case.

**Hero.** A full-viewport real photograph with a dark-earth gradient overlay from the left. White display headline, then 3–4 benefit bullets with terracotta check icons on soft round tints.

**Footer.** Deep amethyst-charcoal background with cream text, three columns (brand, navigation, contacts with phone and mail icons).

## Do's and Don'ts

**Do**
- Use real field photography: steppe, quarries, drill rigs, GNSS/RTK equipment, crews in hi-vis, Kazakhstan landscapes in every season.
- Keep terracotta as a small accent and let cream and white space carry the page.
- Test every layout with Russian and Kazakh strings before English.
- Keep every icon from one family: same stroke, grid and corner style.
- Make every interactive card a real link, with visible hover and focus states.
- Check every component in both light and dark themes.

**Don't**
- Don't put text, letters, digits or language-specific symbols inside icons or illustrations.
- Don't use AI-generated or stock images as portfolio or "our work" photos. Generated imagery is only for decorative backgrounds and must never pass as real projects.
- Don't use clip-art, mixed icon styles, filled glyph icons, emoji, or 3D/clay icons.
- Don't use pure black (`#000`) or pure white page backgrounds. Use dark earth and cream.
- Don't use neon, purple-blue "AI" gradients, glassmorphism, or heavy drop shadows.
- Don't truncate service titles with an ellipsis. Wrap them instead.
- Don't use more than one accent color in a single component state.
