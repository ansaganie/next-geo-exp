# Feature Map: Kazakh Primary Locale, Map Removal, and Mobile Header CTA

## Decisions-so-far
- Default locale changed from `ru` to `kk` with `localePrefix: "as-needed"`. Root `/` serves Kazakh.
- Map iframe removed; left side of Contact section restructured as contact details & direct WhatsApp card.
- Map env var and translations cleaned up.
- Mobile primary CTA ("Өтінім қалдыру") moved out of drawer into mobile header bar next to menu icon.

## Task Graph
- `01-kk-main-language` (ready-for-agent)
- `02-remove-map` (ready-for-agent)
- `03-mobile-header-cta` (blocked by 01)
- `04-adr-and-cleanup` (blocked by 01, 02, 03)

## Frontier
- `01-kk-main-language`
- `02-remove-map`
