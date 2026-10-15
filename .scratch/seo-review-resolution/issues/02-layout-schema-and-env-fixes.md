# 02-layout-schema-and-env-fixes

Status: resolved
Type: task
Blocked by: 01

## Description
Resolve root layout structured data defect (hardcoded Russian address across locales) and support server-side environment variable fallbacks for Google and Yandex verification.

## Acceptance Criteria
- [x] Root `PostalAddress` in `src/app/[locale]/layout.tsx` is localized dynamically per locale (`kk`: `"Астана қ."`, `ru`: `"г. Астана"`, `en`: `"Astana"`).
- [x] `verification` in `src/app/[locale]/layout.tsx` checks both `process.env.GOOGLE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION` and `process.env.YANDEX_VERIFICATION || process.env.NEXT_PUBLIC_YANDEX_VERIFICATION`.

## Answer
Resolved in layout.tsx: PostalAddress is now localized per locale ('kk', 'ru', 'en') and verification tokens check server-side env vars first before falling back to NEXT_PUBLIC_* variables.
