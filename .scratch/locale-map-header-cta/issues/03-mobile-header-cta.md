# 03: Move "Contact Us" CTA Button to Mobile App Header

Type: task
Status: claimed
Blocked by: 01

## Description
Move the primary contact CTA button ("Өтінім қалдыру" / `headerCta`) from inside the mobile burger sheet drawer into the top mobile header bar next to the hamburger menu icon.

## Acceptance Criteria
1. On viewports `< md`, the header bar contains the primary CTA button (`headerCta`) positioned to the left of the burger menu trigger button.
2. The duplicate CTA button inside the mobile sheet drawer menu is removed.
3. Mobile CTA button is styled compactly (`size="sm"`) to avoid layout wrapping on 360px+ screens.
4. Clicking the button navigates smoothly to `/#contact-us`.
5. `bun run build` passes.
