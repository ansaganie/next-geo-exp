# 02: Remove Map and Restructure Contact Section

Type: task
Status: resolved
Blocked by:

## Description
Remove the map iframe and placeholder from `ContactSection.tsx`, replacing it with a clean contact info & messenger card in the two-column grid. Clean up obsolete map config and translations.

## Acceptance Criteria
1. `src/widgets/contact/ContactSection.tsx` no longer renders any `iframe` or map placeholder.
2. The left column of `ContactSection.tsx` renders a structured contact card with phone, email, and WhatsApp quick CTA.
3. Obsolete `mapTitle` keys removed from `messages/kk.json`, `messages/ru.json`, and `messages/en.json`.
4. `NEXT_PUBLIC_MAP_IFRAME_SRC` removed from `.github/workflows/deploy-plesk.yml` and `README.md`.
5. `bun run build` passes.

## Answer
- Removed `iframe` and map placeholder from `src/widgets/contact/ContactSection.tsx`.
- Restructured left column into a structured contact details card matching the styling of the form card (`rounded-xl border border-border/60 bg-card p-6 shadow-sm`):
  - Direct clickable phone link (`tel:`)
  - Direct clickable email link (`mailto:`)
  - Working hours schedule (`Clock` icon)
  - Direct WhatsApp action button (`siWhatsapp` brand icon)
- Cleaned up obsolete `mapTitle` key from `messages/kk.json`, `messages/ru.json`, and `messages/en.json`, and added localized keys for the contact card details and WhatsApp CTA.
- Removed `NEXT_PUBLIC_MAP_IFRAME_SRC` from `.github/workflows/deploy-plesk.yml` and `README.md`.
- Added unit tests in `src/widgets/contact/ContactSection.test.tsx` verifying map removal and presence of structured contact links.
- Verified all tests pass via `bun test` and build passes via `bun run build`.
