# 03: Move "Contact Us" CTA Button to Mobile App Header

Type: task
Status: resolved
Blocked by: 01

## Description
Move the primary contact CTA button ("Өтінім қалдыру" / `headerCta`) from inside the mobile burger sheet drawer into the top mobile header bar next to the hamburger menu icon.

## Acceptance Criteria
1. On viewports `< md`, the header bar contains the primary CTA button (`headerCta`) positioned to the left of the burger menu trigger button.
2. The duplicate CTA button inside the mobile sheet drawer menu is removed.
3. Mobile CTA button is styled compactly (`size="sm"`) to avoid layout wrapping on 360px+ screens.
4. Clicking the button navigates smoothly to `/#contact-us`.
5. `bun run build` passes.

## Answer
- Updated `src/widgets/header/Header.tsx`:
  - Added the primary action button (`headerCta`) inside the mobile controls container (`<div className="flex md:hidden items-center">`) directly to the left of `Sheet` / `SheetTrigger`.
  - Configured compact styling with `size="sm"` and class names `bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg text-xs px-2.5 h-8 sm:text-sm sm:px-3 sm:h-9 mr-2` ensuring responsive fit alongside the brand logo and burger icon on screens 360px and wider.
  - Linked to `headerCta.href` (`/#contact-us`) with label `tNav(headerCta.labelKey)`.
  - Removed duplicate `<Button variant="default" className="mt-2" asChild><Link href={headerCta.href}>{tNav(headerCta.labelKey)}</Link></Button>` from inside the mobile drawer navigation list (`SheetContent`).
- Added unit tests in `src/widgets/header/Header.test.tsx` following TDD (red-green), verifying that:
  - The mobile header controls bar renders the primary CTA button outside the sheet before the hamburger menu trigger button with compact sizing classes.
  - The mobile sheet drawer nav does not contain the duplicate CTA button.
- Ran `bun test` (12 passing tests across 4 suites) and `bun run build` (compiled and static pages pre-rendered cleanly).
