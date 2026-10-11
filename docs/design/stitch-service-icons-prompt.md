# Google Stitch brief - Service icons & service card

Visual reference for the GeoExploration service card redesign and its icon set (12 Services + 5 Service Categories). Stitch produces the *reference*; the production icons are built in code from it (Lucide where it fits, custom SVG otherwise).

## How to run it

1. Open https://stitch.withgoogle.com, choose **Web**, and use the highest-quality mode available.
2. Upload `DESIGN.md` (repo root) as the project's design system, or attach it to the first prompt.
3. Attach [`current-assets/service-icons-contact-sheet.png`](current-assets/service-icons-contact-sheet.png) to **Prompt 1** and again to **Prompt 4**. Both prompts already tell Stitch how to use it (see [Reference assets](#reference-assets)).
4. Paste **Prompt 1** and generate. Iterate in the same project until the light-mode sheet looks right.
5. Run **Prompts 2–4** one at a time in the same project, so they inherit the design.
6. Export each screen: **Code** (HTML/Tailwind zip) and a **PNG** screenshot.
7. Save everything in `design/stitch/` at the repo root (git-ignored), e.g.:
   ```
   design/stitch/
   ├── 01-light-ru.png      01-light-ru.html
   ├── 02-dark-ru.png       02-dark-ru.html
   ├── 03-kk-en.png         03-kk-en.html
   └── 04-icon-sheet.png    04-icon-sheet.html
   ```
8. Come back and say "Stitch files are in design/stitch".

---

## Reference assets

These are the current site assets that will be replaced, copied here as a reference. The originals stay in `public/assets/images/` because the live site still uses them until the swap. Use them only to see **what each icon shows**, never **how it is drawn**: the current set mixes clip-art, filled shapes, hatching and photo-like line art, which is exactly what the redesign removes.

**Upload this one:** [service-icons-contact-sheet.png](current-assets/service-icons-contact-sheet.png). It shows all 12 icons with their Service titles and IDs.

| Service | Current icon | What it shows now | New subject |
|---|---|---|---|
| Engineering Geodesy & Support | [engineering-geodesy.png](current-assets/service-icons/engineering-geodesy.png) | folding ruler | **change** → theodolite on a tripod |
| Topographic Survey | [topo.png](current-assets/service-icons/topo.png) | dense contour map texture | **keep idea**, simplify → 3–4 clean contour lines |
| Staking Out | [stakeout.png](current-assets/service-icons/stakeout.png) | instrument projecting to a globe | **change** → survey stake with a crosshair |
| Cadastral Survey | [cadastral.png](current-assets/service-icons/cadastral.png) | buildings and trees inside corner marks | **change** → land parcel with corner markers |
| Facade Survey | [facade.png](current-assets/service-icons/facade.png) | hatched city skyline | **change** → single building facade with a dimension line |
| 3D Scanning | [scan3d.png](current-assets/service-icons/scan3d.png) | filled cube in scan brackets | **keep idea**, redraw as outline |
| Landscape Geodesy | [landscape.png](current-assets/service-icons/landscape.png) | sketched cliff / rock face | **change** → tree on a graded slope |
| Verticality Control | [vertical.png](current-assets/service-icons/vertical.png) | spirit level | **change** → tall building with a plumb line |
| Engineering-Geological Surveys | [geo-survey.png](current-assets/service-icons/geo-survey.png) | auger drilling into the ground | **keep idea**, add soil layers → soil layers with a borehole |
| Tacheometric Survey | [tacheometry.png](current-assets/service-icons/tacheometry.png) | filled total station (front view) | **keep idea**, redraw as outline on a tripod |
| As-Built Survey | [asbuilt.png](current-assets/service-icons/asbuilt.png) | instrument on a tripod with a dimensioned plan | **change** → blueprint sheet with a check mark |
| Core Boxes & Sample Bags | [field-supplies.png](current-assets/service-icons/field-supplies.png) | hexagon nut shape | **change** → core tray holding cylindrical core samples |

The 5 Service Category icons are new and have no current version.

---

## Prompt 1 - Service card design sheet (light, Russian)

```text
Design a single desktop web screen (1440px wide): a design sheet for the "Our services" section of GeoExploration, a Kazakhstan company doing engineering-geological surveys, geodesy and topography, water well drilling, hydrogeology, and supplying field equipment (core boxes, sample bags). The audience is construction developers, design institutes and mining companies. The mood: precise, trustworthy, earthy, modern, calm. No stock photos, no illustrations of people, no gradients-heavy "AI" look.

BRAND TOKENS (use exactly):
- Page background #FAF7F2 (warm cream). Card surface #FDFCFA. Card border #E5DFD8.
- Text #4A3B32 (dark earth). Secondary text #715F55.
- Muted surface #F0EDE8.
- Accent 1 (brand): terracotta #9F5538. Accent 2: mineral slate blue #497EA2.
- Font: Inter only. Corner radius 12px on cards, 10px on icon tiles. Soft, low shadows.

SECTION HEADER (centered): small uppercase terracotta eyebrow "ЧТО МЫ ПРЕДЛАГАЕМ", heading "Наши услуги" (bold, ~30px), a short 64px-wide terracotta rule under it.

SERVICE CARD GRID: 4 columns, 24px gaps, 12 cards, max content width 1152px. Each card is a clickable link and contains, top to bottom, left-aligned:
1. An icon tile 48x48 (warm muted #F0EDE8 background) holding a 24px line icon in #4A3B32.
2. A small category label (11px, uppercase, letter-spaced, slate blue).
3. Title (15px, semibold). Must wrap gracefully to 2–3 lines - titles are long.
4. Description (13px, secondary text, max 3 lines).
5. A bottom row "Подробнее →" in terracotta, pinned to the card bottom so all cards in a row align.
All cards in a row must have equal height.

Show the HOVER state on the 2nd card: card lifts 4px, border becomes terracotta at 30% opacity, softer larger shadow, icon tile becomes terracotta at 10% tint with the icon turning terracotta, arrow nudges right. Show a keyboard FOCUS ring (slate blue, 2px offset) on the 7th card.

ICON STYLE (critical): monoline outline icons on a 24px grid, 1.75px stroke, round caps and joins, no fills, no text, no letters, no numbers inside icons, single color (currentColor). Geometric, simple, readable at 24px, same visual weight across the set. Lucide-icons style.

ATTACHED IMAGE: the attached contact sheet shows the CURRENT icons that this redesign replaces. Use it only to see what geoscience equipment and scenes the company deals with. Do NOT copy its drawing style (it mixes clip-art, filled shapes and hatching). Where the subject listed below differs from the attached icon, follow the subject below.

CARDS (category label | title | description | icon subject):
1. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Инженерная геодезия и сопровождение | Геодезическое сопровождение строительства, проектирования и контроль точности | theodolite on a tripod
2. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Топографическая съёмка | Создание топопланов для проектных и кадастровых работ | contour lines
3. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Вынос в натуру | Разметка осей зданий и инженерных сетей | survey stake with a crosshair
4. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Кадастровая съёмка | Документы для регистрации земли и объектов | land parcel with corner markers
5. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Съёмка фасадов | Высокоточные измерения зданий и сооружений | building facade with a dimension line
6. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | 3D-сканирование | Цифровые модели местности и зданий | cube inside scan corner brackets
7. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Геодезия для ландшафта | Планировка участков и подготовка под благоустройство | tree on a graded slope
8. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Контроль вертикальности | Мониторинг конструкций на предмет отклонений | tall building with a plumb line
9. ИНЖЕНЕРНО-ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ | Инженерно-геологические изыскания | Бурение скважин, лабораторные анализы, отчёты | soil layers with a borehole
10. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Тахеометрическая съёмка | Построение планов и вычисление объёмов | total station on a tripod
11. ГЕОДЕЗИЯ И ТОПОГРАФИЯ | Исполнительная съёмка | Фактическое расположение построенных объектов | blueprint sheet with a check mark
12. ОБОРУДОВАНИЕ И МАТЕРИАЛЫ | Керновые ящики и мешки для проб | Поставка керновых ящиков PQ/HQ/NQ и мешков для отбора проб | core tray holding cylindrical core samples

Below the grid, add a labeled strip "Responsive" showing the same card at tablet (3 columns) and mobile (1 column, 360px wide) widths.
```

## Prompt 2 - Dark mode

```text
Create the same screen in dark mode, keeping layout, copy and icons identical. Dark tokens: page #1A1614, card #221E1B, card border #3A322C, muted surface / icon tile #2E2824, text #F0EDE8, secondary text #A89888, terracotta accent #D29D89, slate blue accent #9BBDD4. Icons use the light text color #F0EDE8 and must stay clearly visible on the icon tile. Show the same hover state on card 2 and focus ring on card 7. Shadows should be subtle; rely on border and tint for depth.
```

## Prompt 3 - Kazakh and English (language stress test)

```text
Create a screen with two stacked rows of the same light-mode service cards (first 4 cards only, same icons), to prove the card holds up in all site languages. No text may appear inside icons.

Row A - Kazakh. Eyebrow "БІЗ НЕ ҰСЫНАМЫЗ", heading "Біздің қызметтер", link label "Толығырақ →":
1. ГЕОДЕЗИЯ ЖӘНЕ ТОПОГРАФИЯ | Инженерлік геодезия және сүйемелдеу | Құрылыс пен жобалауды геодезиялық сүйемелдеу және дәлдікті бақылау
2. ГЕОДЕЗИЯ ЖӘНЕ ТОПОГРАФИЯ | Топографиялық түсірілім | Жобалау және кадастрлық жұмыстар үшін топоплан жасау
3. ИНЖЕНЕРЛІК-ГЕОЛОГИЯЛЫҚ ЗЕРТТЕУЛЕР | Инженерлік-геологиялық зерттеулер | Ұңғыма бұрғылау, зертханалық талдаулар, есептер
4. ЖАБДЫҚТАР МЕН МАТЕРИАЛДАР | Керн жәшіктері және сынама қаптары | PQ/HQ/NQ керн жәшіктерін және сынама алу қаптарын жеткізу

Row B - English. Eyebrow "WHAT WE OFFER", heading "Our services", link label "Learn more →":
1. GEODESY & TOPOGRAPHY | Engineering Geodesy & Support | Geodetic support for construction, design and precision control
2. GEODESY & TOPOGRAPHY | Topographic Survey | Creating topographic plans for design and cadastral work
3. ENGINEERING-GEOLOGICAL SURVEYS | Engineering-Geological Surveys | Well drilling, laboratory analyses, reports
4. EQUIPMENT & MATERIALS | Core Boxes & Sample Bags | Supply of PQ/HQ/NQ core boxes and sample bags

Cards in each row must keep equal heights and aligned bottom links despite different text lengths.
```

## Prompt 4 - Icon style sheet

```text
Create an icon style sheet screen on the light cream background (#FAF7F2). Show all 17 icons below, each drawn LARGE (96px) on a visible 24-unit grid, with the same icon at 24px next to it, and a caption under each written in English (captions are labels on the sheet, never inside the icon). Icon style: monoline outline, 24px grid, 1.75px stroke, round caps and joins, no fills, no text/letters/numbers inside icons, color #4A3B32, consistent visual weight, Lucide-icons style. The attached contact sheet shows the current icons being replaced. Use it for subject matter only, never for style. Add a small "before → after" row for 3D Scanning, Tacheometric Survey and Engineering-Geological Surveys, showing the old icon next to the new one so the upgrade is visible. Group them:

Group "Services" (12): theodolite on a tripod; contour lines; survey stake with a crosshair; land parcel with corner markers; building facade with a dimension line; cube inside scan corner brackets; tree on a graded slope; tall building with a plumb line; soil layers with a borehole; total station on a tripod; blueprint sheet with a check mark; core tray holding cylindrical core samples.

Group "Service Categories" (5): Geodesy - tripod with a crosshair; Engineering-Geological Survey - soil layers with a drill bit; Water Well Drilling - drill tower with a water drop; Hydrogeology - water drop over groundwater layers; Field Supplies - sample bag with a tag.

Add one row showing three icons inside the 48px icon tile in its three states: rest (#F0EDE8 tile, #4A3B32 icon), hover (terracotta #9F5538 at 10% tile, terracotta icon), dark mode (#2E2824 tile, #F0EDE8 icon).
```

---

## Non-negotiables to check before exporting

- No text, letters or numbers inside any icon (the site serves ru, kk and en).
- All 17 icons share one stroke weight and style. Regenerate any that look like clip-art or are filled.
- Long Russian and Kazakh titles wrap cleanly. Card heights and "Подробнее / Толығырақ / Learn more" rows stay aligned.
- Icons stay visible in dark mode.
