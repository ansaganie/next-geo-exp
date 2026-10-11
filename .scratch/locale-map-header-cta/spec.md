# Specification: Kazakh Primary Locale, Map Removal, and Mobile Header CTA

## Objective
1. Make Kazakh (`kk`) the primary language of the website.
2. Remove the map iframe from the contact section and replace it with a structured contact card.
3. Move the primary contact CTA button ("Өтінім қалдыру" / "submitRequest") out of the mobile burger sheet drawer into the mobile app header bar.

## Detailed Requirements

### 1. Kazakh (`kk`) as Main Language
- In `src/i18n/routing.ts`:
  - `locales: ["kk", "ru", "en"]`
  - `defaultLocale: "kk"`
  - `localePrefix: "as-needed"`
  - `localeLabels: { kk: "Қазақша", ru: "Русский", en: "English" }`
- In `src/app/[locale]/layout.tsx`:
  - Kazakh (`kk`) is served at `/` without prefix.
  - Russian is served at `/ru` and English at `/en`.
  - Canonical URL for root `/` is `https://geoexploration.kz` with `og:locale` set to `kk_KZ`.
  - Localized keywords for Kazakh (`kk`), Russian (`ru`), and English (`en`).
- In `Header.tsx`:
  - The language dropdown lists `kk`, `ru`, `en` in order.

### 2. Remove Map & Streamline Contact Section
- In `src/widgets/contact/ContactSection.tsx`:
  - Remove `process.env.NEXT_PUBLIC_MAP_IFRAME_SRC` iframe and placeholder box.
  - Retain the two-column grid (`md:grid-cols-2`) on desktop.
  - Replace the map slot with a clean, well-structured contact card with clickable phone, email, WhatsApp quick action, and working hours / office note.
- In `messages/{kk,ru,en}.json`:
  - Remove unused `mapTitle` key.
- In `.github/workflows/deploy-plesk.yml` and `README.md`:
  - Clean up `NEXT_PUBLIC_MAP_IFRAME_SRC` references.

### 3. Mobile Header CTA Button
- In `src/widgets/header/Header.tsx`:
  - In `<div className="flex md:hidden items-center">`:
    - Render a compact CTA button (`size="sm"`) linking to `headerCta.href` (`/#contact-us`) with label `tNav(headerCta.labelKey)`.
    - Place it immediately before the `SheetTrigger` (hamburger menu icon).
  - Inside the `SheetContent` navigation menu:
    - Remove the redundant `<Button variant="default" className="mt-2" asChild>...` CTA button.
  - Ensure responsive alignment so logo, button, and menu icon fit cleanly on narrow screens (360px+).

### 4. Architectural Decision Record
- Add `docs/adr/0003-primary-locale-kazakh-and-contact-ui-simplification.md`.
