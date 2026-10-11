# Feature Map: Kazakh Primary Locale, Map Removal, and Mobile Header CTA

## Decisions-so-far
- [Ticket 01](issues/01-kk-main-language.md): Default locale changed from `ru` to `kk` with `localePrefix: "as-needed"`. Root `/` serves Kazakh prefix-less, `/ru` serves Russian, `/en` serves English. Canonical URL and OpenGraph defaults updated to Kazakh, and SEO keywords localized per locale.
- [Ticket 02](issues/02-remove-map.md): Map iframe removed; left side of Contact section restructured as contact details card with phone, email, working hours, and direct WhatsApp CTA button. Obsolete `mapTitle` keys and `NEXT_PUBLIC_MAP_IFRAME_SRC` removed.
- [Ticket 03](issues/03-mobile-header-cta.md): Primary mobile action CTA ("Өтінім қалдыру") moved out of drawer into mobile header bar next to menu icon with compact responsive styling.
- [Ticket 04](issues/04-adr-and-cleanup.md): Recorded `docs/adr/0003-primary-locale-kazakh-and-contact-ui-simplification.md`.

## Task Graph
- `01-kk-main-language` (resolved)
- `02-remove-map` (resolved)
- `03-mobile-header-cta` (resolved)
- `04-adr-and-cleanup` (resolved)

## Frontier
- (empty - all tickets resolved)
