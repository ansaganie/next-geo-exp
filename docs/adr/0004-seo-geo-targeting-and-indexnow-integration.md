# 4. SEO Geo-Targeting, Core Drilling Elevation, and IndexNow Integration

Date: 2026-10-11
Status: Accepted

## Context
GeoExploration provides comprehensive engineering-geological surveys, geodetic surveying, hydrogeology, and borehole drilling services across Kazakhstan, with operational headquarters in Astana.

Prior to this decision:
1. The service catalog contained zero items for the `drilling` category (`services.ts`), leaving `/services/drilling` devoid of service cards, structured technical specifications, and key search keywords.
2. High-volume commercial search queries in Google and Yandex—such as "бурение в астане", "бурение в казахстане", "бурение на воду", and "колонковое бурение"—were not targeted in metadata, headings, or structured data.
3. `sitemap.xml` was referenced in `robots.ts` but did not exist (`src/app/sitemap.ts` was missing), and service subpages lacked explicit localized canonical URLs and hreflang alternates, causing indexation ambiguities.
4. Yandex is a dominant search engine in Kazakhstan alongside Google. IndexNow protocol support (used by Yandex and Bing for real-time URL indexing) was not implemented, nor were verification hooks for Yandex Webmaster and Google Search Console.

## Decision
1. **Domain Model & Service Catalog Elevation**:
   - Formalize **Borehole Drilling** as a service category and **Core Drilling** (*Колонковое бурение*), **Water Well Drilling** (*Бурение скважин на воду*), and **Geotechnical Drilling** (*Инженерно-геологическое бурение*) as specific service entities in `GLOSSARY.md` and `src/entities/service/services.ts`.
   - Place Core Drilling and Water Well Drilling at the top of the `services` registry, positioning them as primary cards on the homepage services grid.
   - Promote the Drilling slide as the first active slide (index 0) in the homepage Hero Carousel.

2. **Geo-Targeting Strategy (Astana & Kazakhstan)**:
   - Target Astana as the central operational base and fleet headquarters while explicitly advertising coverage across all regions of Kazakhstan.
   - Structure metadata titles, meta descriptions, and page headings to combine high-intent service keywords with geographical anchors in Russian, Kazakh, and English.
   - Upgrade root JSON-LD schema to `LocalBusiness` / `ProfessionalService` with canonical Astana geographic coordinates (`51.169392, 71.449074`), address, opening hours, and `areaServed`.

3. **Drilling Pillar Page Architecture**:
   - Keep `/services/drilling` as the consolidated pillar page rather than fragmenting authority across thin sub-routes.
   - Include a dedicated `#core-drilling` anchor section detailing wireline core drilling (PQ/HQ/NQ), rock core recovery, and geological analysis.
   - Include a technical fleet capabilities block (rig types УРБ-2А2, Boart Longyear; depths up to 250 m; casing diameters 125–219 mm).
   - Implement an interactive FAQ accordion with matching `FAQPage` JSON-LD schema to capture Google and Yandex rich snippet rankings.

4. **Technical Indexing & IndexNow Pipeline**:
   - Implement dynamic Next.js `src/app/sitemap.ts` generating multilingual sitemap XML with full hreflang alternates (`kk`, `ru`, `en`) and change frequencies.
   - Enforce localized canonical URLs and language alternates across all category and service pages.
   - Host an IndexNow verification key at `/<key>.txt` and provide a CLI submission script `scripts/submit-indexnow.ts` (`bun run indexnow`) submitting all sitemap URLs to both `https://yandex.com/indexnow` and `https://api.indexnow.org/indexnow`.
   - Add search engine verification meta tags (`yandex-verification` and `google-site-verification`) configurable via environment variables.

## Consequences
- **Search Visibility**: The site targets primary commercial keywords ("бурение в астане", "колонковое бурение", "бурение на воду") across both Russian and Kazakh search engine results pages.
- **Instant Indexing**: Yandex and Bing crawl updated URLs within minutes via IndexNow push notifications, while Google crawls properly structured hreflang alternates from `sitemap.xml`.
- **E-E-A-T & Rich Snippets**: Deep technical specifications and structured FAQ schema establish expertise and qualify the drilling landing page for expanded SERP real estate.
