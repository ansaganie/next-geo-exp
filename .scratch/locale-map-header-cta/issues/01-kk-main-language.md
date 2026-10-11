# 01: Configure Kazakh (`kk`) as the Primary Website Language

Type: task
Status: resolved
Blocked by:

## Description
Make Kazakh (`kk`) the default language for the site across routing and SEO metadata.

## Acceptance Criteria
1. `src/i18n/routing.ts` defines `defaultLocale: "kk"`, `locales: ["kk", "ru", "en"]`, and `localeLabels` starting with `kk`.
2. `src/app/[locale]/layout.tsx` routes Kazakh to root `/` prefix-less, Russian to `/ru`, and English to `/en`.
3. `src/app/[locale]/layout.tsx` sets canonical URL to `https://geoexploration.kz` for `kk`, and includes localized keywords for `kk`, `ru`, and `en`.
4. `bun run build` passes with `/` pre-rendered for Kazakh.

## Answer
- Updated `src/i18n/routing.ts`:
  - Configured `defaultLocale: "kk"`.
  - Configured `locales: ["kk", "ru", "en"]`.
  - Configured `localeLabels: { kk: "Қазақша", ru: "Русский", en: "English" }`.
- Updated `src/app/[locale]/layout.tsx`:
  - Updated `localePrefix = locale === "kk" ? "" : \`/${locale}\``.
  - Updated `canonicalUrl = \`https://geoexploration.kz${localePrefix}\``.
  - Updated `alternates.languages` with `kk: "https://geoexploration.kz"`, `ru: "https://geoexploration.kz/ru"`, and `en: "https://geoexploration.kz/en"`.
  - Added localized keywords for Kazakh (`kk`), Russian (`ru`), and English (`en`).
  - Updated OpenGraph fallback locale to `ogLocaleMap[locale] ?? "kk_KZ"`.
- Added unit tests in `src/i18n/routing.test.ts` and `src/app/[locale]/layout.test.ts` following TDD (red-green), verifying routing configuration, path formatting, canonical URLs, language alternates, localized keywords, and fallback OpenGraph locale.
- Verified all unit tests pass with `bun test` and static build passes cleanly with `bun run build`.
