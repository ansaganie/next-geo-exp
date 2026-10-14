# Spec: SEO Review Resolution & Landing Enhancements

## Context
Following an ULTRA-level code review of branch `feature/indexnow-seo-drilling-optimization` against `origin/main` and an in-depth SEO investigation (`docs/research/seo-service-company-landing.md`), this feature resolves all code review findings (standards violations, spec discrepancies, baseline smells) and implements core SEO enhancements for `geoexploration.kz`.

## Requirements
1. **Standards & Glossary Alignment**:
   - Update `GLOSSARY.md` to define canonical trilingual entity names for Core Drilling, Water Well Drilling, and Geotechnical Drilling with avoid-lists.
   - Align `messages/en.json` to canonical `"Geotechnical Drilling"`.
   - Fix section eyebrow markup and tokens in `src/app/[locale]/services/drilling/page.tsx` per `DESIGN.md`.
   - Document `NEXT_PUBLIC_GOOGLE_VERIFICATION` and `NEXT_PUBLIC_YANDEX_VERIFICATION` in `README.md`.
   - Update `docs/adr/0004-seo-geo-targeting-and-indexnow-integration.md` to formally endorse the 4-stage workflow and `@type: "Service"` schema.

2. **Root Layout Schema & Verification Env Var Fallbacks**:
   - Localize `PostalAddress` in `src/app/[locale]/layout.tsx` dynamically per locale (`kk`, `ru`, `en`).
   - Add server-side environment variable fallbacks (`GOOGLE_VERIFICATION`, `YANDEX_VERIFICATION`).

3. **Homepage H1 & Regional Geo-Targeting**:
   - Ensure the homepage has an accessible, keyword-optimized `<h1>` in `HeroCarousel.tsx` using localized headings in `messages/*.json`.
   - Add `hreflang="x-default"` to metadata alternates in `layout.tsx` and `sitemap.ts`.
   - Add regional geo meta tags (`geo.region: KZ-AST`, `geo.placename: Astana`, `ICBM: 51.169392, 71.449074`).

4. **Site Config & Metadata Deduplication**:
   - Extract `src/shared/config/site.ts` with canonical site origin, coordinates, and locale metadata.
   - Extract `src/shared/lib/seo.ts` helper for canonical and alternate URL construction respecting `routing.defaultLocale`.
   - Refactor service pages, `layout.tsx`, `sitemap.ts`, and `submit-indexnow.ts` to consume `siteConfig` and `seo.ts`.
