# 04: Record Architectural Decision Record (ADR)

Type: task
Status: resolved
Blocked by: 01, 02, 03

## Description
Document the architectural decisions for making Kazakh the primary default locale and simplifying the contact UX (removing iframe map, mobile header CTA elevation) in `docs/adr/`.

## Acceptance Criteria
1. `docs/adr/0003-primary-locale-kazakh-and-contact-ui-simplification.md` created following repo ADR conventions.
2. Context, Decision, and Consequences clearly articulated.

## Answer
- Created `docs/adr/0003-primary-locale-kazakh-and-contact-ui-simplification.md` adhering to the repository's ADR structure:
  - **Context**: Articulated domestic Kazakhstan market focus, previous Russian default routing (`/` serving Russian, `/kk` serving Kazakh), external map iframe dependency overhead/CSP/touch issues, and mobile conversion friction with the hidden drawer CTA.
  - **Decision**: Documented the configuration of Kazakh as prefix-less default locale (`defaultLocale: "kk"`, `localePrefix: "as-needed"`), the complete removal of the map iframe replaced by a structured contact card maintaining the balanced desktop grid, and the elevation of the primary CTA button into the mobile header bar.
  - **Consequences**: Outlined search engine and market alignment, performance and security enhancements without third-party iframe dependencies, and improved mobile conversion ergonomics.
- Verified test suite (`bun test`) passing 12/12 tests across all 4 suites.
- Verified production build (`bun run build`) compiled successfully and pre-rendered all 24 static pages without issues.
