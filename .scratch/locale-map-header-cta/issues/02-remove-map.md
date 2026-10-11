# 02: Remove Map and Restructure Contact Section

Type: task
Status: ready-for-agent
Blocked by:

## Description
Remove the map iframe and placeholder from `ContactSection.tsx`, replacing it with a clean contact info & messenger card in the two-column grid. Clean up obsolete map config and translations.

## Acceptance Criteria
1. `src/widgets/contact/ContactSection.tsx` no longer renders any `iframe` or map placeholder.
2. The left column of `ContactSection.tsx` renders a structured contact card with phone, email, and WhatsApp quick CTA.
3. Obsolete `mapTitle` keys removed from `messages/kk.json`, `messages/ru.json`, and `messages/en.json`.
4. `NEXT_PUBLIC_MAP_IFRAME_SRC` removed from `.github/workflows/deploy-plesk.yml` and `README.md`.
5. `bun run build` passes.
