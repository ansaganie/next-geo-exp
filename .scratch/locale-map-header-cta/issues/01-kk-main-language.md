# 01: Configure Kazakh (`kk`) as the Primary Website Language

Type: task
Status: ready-for-agent
Blocked by:

## Description
Make Kazakh (`kk`) the default language for the site across routing and SEO metadata.

## Acceptance Criteria
1. `src/i18n/routing.ts` defines `defaultLocale: "kk"`, `locales: ["kk", "ru", "en"]`, and `localeLabels` starting with `kk`.
2. `src/app/[locale]/layout.tsx` routes Kazakh to root `/` prefix-less, Russian to `/ru`, and English to `/en`.
3. `src/app/[locale]/layout.tsx` sets canonical URL to `https://geoexploration.kz` for `kk`, and includes localized keywords for `kk`, `ru`, and `en`.
4. `bun run build` passes with `/` pre-rendered for Kazakh.
