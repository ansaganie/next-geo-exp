# Map: SEO Review Resolution & Landing Enhancements

## Decisions So Far
- **Retain Workflow & Service Schema**: Keep the 4-stage workflow and `@type: "Service"` JSON-LD in `drilling/page.tsx` and update ADR-0004 to reflect this decision.
- **Trilingual Glossary**: Enhance `GLOSSARY.md` with explicit English, Russian, and Kazakh terms for drilling services.
- **Dynamic Schema Localization**: Localize `PostalAddress` by active locale rather than static Russian text.
- **Site Config & SEO Helper**: Extract `siteConfig` and `constructServiceMetadata` to remove duplicated URLs and primitive obsession.

## Tickets
- `issues/01-standards-and-glossary-fixes.md` (Type: task, Status: resolved) — [01-standards-and-glossary-fixes](file:///C:/Users/ansag/Sources/repos/next-geo-exp/.scratch/seo-review-resolution/issues/01-standards-and-glossary-fixes.md)
- `issues/02-layout-schema-and-env-fixes.md` (Type: task, Status: resolved) — [02-layout-schema-and-env-fixes](file:///C:/Users/ansag/Sources/repos/next-geo-exp/.scratch/seo-review-resolution/issues/02-layout-schema-and-env-fixes.md)
- `issues/03-homepage-h1-and-geo-tags.md` (Type: task, Status: resolved) — [03-homepage-h1-and-geo-tags](file:///C:/Users/ansag/Sources/repos/next-geo-exp/.scratch/seo-review-resolution/issues/03-homepage-h1-and-geo-tags.md)
- `issues/04-site-config-and-metadata-dedup.md` (Type: task, Status: resolved) — [04-site-config-and-metadata-dedup](file:///C:/Users/ansag/Sources/repos/next-geo-exp/.scratch/seo-review-resolution/issues/04-site-config-and-metadata-dedup.md)

## Fog
- None. All issues resolved and verified.
