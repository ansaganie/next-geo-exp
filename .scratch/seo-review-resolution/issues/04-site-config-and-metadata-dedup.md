# 04-site-config-and-metadata-dedup

Status: resolved
Type: task
Blocked by: 03

## Description
Extract shared `siteConfig` constant and reusable `constructServiceMetadata` helper to eliminate URL primitive obsession and code duplication across all service pages and sitemap generators.

## Acceptance Criteria
- [x] Create `src/shared/config/site.ts` with base site URL, geographic coordinates, default locale, and organization info.
- [x] Create `src/shared/lib/seo.ts` with helper to build localized canonical and hreflang alternate URLs respecting `routing.defaultLocale`.
- [x] Refactor all 5 service pages (`drilling`, `geodesy`, `geotechnical`, `hydrogeology`, `equipment`) to use `constructServiceMetadata`.
- [x] Refactor `layout.tsx`, `sitemap.ts`, and `submit-indexnow.ts` to consume `siteConfig`.
- [x] All tests and lints pass.

## Answer
Extracted centralized siteConfig in src/shared/config/site.ts and constructServiceMetadata helper in src/shared/lib/seo.ts. Refactored all 5 service pages, layout.tsx, sitemap.ts, and submit-indexnow.ts to consume siteConfig and SEO helpers. Cleaned up slides.ts to eliminate duplicate copy. All 26 unit tests and linter pass.
