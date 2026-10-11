# 3. Primary Locale Kazakh and Contact UI Simplification

Date: 2026-10-11
Status: Accepted

## Context
The primary target market and operational base for GeoExploration is Kazakhstan. The website previously defaulted to Russian (`/` serving Russian, `/kk` serving Kazakh), with an external map iframe loading third-party scripts/assets and potential hydration/network failures, and the primary mobile contact CTA ("Өтінім қалдыру") hidden inside the collapsible burger drawer.

This configuration did not properly reflect domestic market priorities or search engine indexing preferences in Kazakhstan. In addition, the embedded iframe map (`NEXT_PUBLIC_MAP_IFRAME_SRC`) introduced third-party asset loading overhead, network failure risk, and unnecessary Content Security Policy (CSP) exposure, while touch gestures on mobile devices frequently conflicted with map panning. Finally, requiring mobile visitors to open the hamburger navigation drawer before accessing the primary conversion CTA introduced unnecessary friction.

## Decision
1. **Configure Kazakh as Primary Default Locale**:
   - Reconfigure `next-intl` routing (`src/i18n/routing.ts`) with `defaultLocale: "kk"` and `localePrefix: "as-needed"`.
   - Serve Kazakh prefix-less at `/`, while routing Russian to `/ru` and English to `/en`.
   - Align canonical URL metadata to `https://geoexploration.kz` with OpenGraph locale `kk_KZ` for the root path, and maintain localized SEO keywords across all three languages.
   - Reorder language selector dropdown options to Kazakh (`kk`), Russian (`ru`), and English (`en`).

2. **Remove Map Iframe & Simplify Contact Section**:
   - Completely remove the third-party map iframe and its environment variable configuration (`NEXT_PUBLIC_MAP_IFRAME_SRC`).
   - Replace the map slot with a clean, structured contact card featuring direct phone, email, WhatsApp quick-action button, and office hours / visiting notes.
   - Preserve the balanced two-column desktop grid (`md:grid-cols-2`) alongside the inquiry submission form without third-party iframe overhead.

3. **Elevate Mobile Header Contact CTA**:
   - Elevate the primary contact CTA button ("Өтінім қалдыру" / "submitRequest") directly into the mobile application header next to the burger menu trigger for friction-free conversions.
   - Remove the redundant CTA button from inside the collapsible mobile burger drawer.
   - Apply compact sizing (`size="sm"`) and responsive flex spacing so the brand logo, CTA button, and drawer toggle fit cleanly on narrow mobile viewports (360px+).

## Consequences
- **SEO & Market Alignment**: Search engines and domestic visitors land on authentic Kazakh copy by default at `https://geoexploration.kz/`, strengthening domestic brand presence and ranking signals.
- **Performance & Security**: Eliminating the external map iframe removes third-party network dependencies, eliminates hydration/scroll interference issues, and streamlines Content Security Policy compliance.
- **Conversion Ergonomics**: Mobile users can initiate contact or jump to the inquiry form immediately with a single tap from the fixed header without opening intermediate navigation menus.
