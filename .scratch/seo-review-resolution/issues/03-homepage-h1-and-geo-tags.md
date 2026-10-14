# 03-homepage-h1-and-geo-tags

Status: resolved
Type: task
Blocked by: 02

## Description
Implement semantic, keyword-optimized `<h1>` in `HeroCarousel.tsx` using localized messages, and add `hreflang="x-default"` and regional geo tags in `layout.tsx` and `sitemap.ts`.

## Acceptance Criteria
- [x] `HeroCarousel.tsx` uses `<h1 id="hero-heading" className="sr-only">` with localized `heading` message.
- [x] `messages/*.json` hero.heading updated to high-intent commercial keywords with geo-targeting.
- [x] `layout.tsx` includes `hreflang="x-default"` pointing to `https://geoexploration.kz`.
- [x] `sitemap.ts` includes `x-default` alternate.
- [x] `layout.tsx` includes `other` metadata for `geo.region`, `geo.placename`, and `ICBM`.

## Answer
Hero heading promoted to h1 in HeroCarousel.tsx. High-intent localized commercial keywords added to hero.heading across all three language dictionaries. Hreflang x-default alternate added to layout.tsx and sitemap.ts, and geo metadata (region KZ-AST, Astana placename, ICBM coordinates) added to root layout metadata.
