# 01-standards-and-glossary-fixes

Status: resolved
Type: task

## Description
Fix all code review standards violations, update GLOSSARY.md with trilingual entities, align messages/en.json, and update ADR-0004.

## Acceptance Criteria
- [x] `GLOSSARY.md` includes explicit English, Russian, and Kazakh names for Core Drilling, Water Well Drilling, and Geotechnical Drilling with avoid-lists.
- [x] `messages/en.json` uses `"Geotechnical Drilling"` for `serviceItems["geotechnical-drilling"].title`.
- [x] `src/app/[locale]/services/drilling/page.tsx` has centered terracotta eyebrow above `detailsHeading` matching `DESIGN.md`.
- [x] `src/app/[locale]/services/drilling/page.tsx` uses `text-sm font-medium uppercase tracking-widest text-secondary` for `coreSection.eyebrow`.
- [x] `README.md` documents `NEXT_PUBLIC_GOOGLE_VERIFICATION` and `NEXT_PUBLIC_YANDEX_VERIFICATION`.
- [x] `docs/adr/0004-seo-geo-targeting-and-indexnow-integration.md` records decision to include 4-stage workflow and `@type: "Service"` JSON-LD schema.

## Answer
All standards violations and glossary terms resolved. Eyebrow tokens and styling aligned with DESIGN.md, English messages aligned with GLOSSARY.md, verification variables documented in README.md, and ADR-0004 updated to formalize workflow stages and Service schema.
