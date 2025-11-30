# GitHub Copilot Instructions

## Project Overview

This is a **Next.js 15** template project for **GeoExploration** - a company providing water drilling, geological exploration, and geo-engineering services. The project uses **Turbopack**, **React 19**, and **shadcn/ui** components, designed as a foundation for building a complex landing page showcasing the company's services.

## Business Domain

**GeoExploration Services:**

- Water drilling and well installation
- Geological surveys and exploration
- Geo-engineering consulting and analysis
- Site assessment and subsurface investigation

When creating components, content, or features, consider this geological/engineering context for relevant terminology, imagery, and user workflows.

## Architecture & Tech Stack

- **Framework**: Next.js 15 (App Router in `src/app/`)
- **Build Tool**: Turbopack (via `bun dev` or `next dev --turbopack`)
- **Styling**: Tailwind CSS + shadcn/ui (design tokens via CSS variables)
- **Architecture**: Feature Sliced Design (FSD) — domain & layer oriented
- **Components**: shadcn/ui ("new-york" style) + Lucide icons
- **Fonts**: Inter (variable, Cyrillic support) via `next/font` (Geist deprecated here)
- **Language**: TypeScript (strict)

### FSD Layer Overview

```
src/
├── app/         # Next.js routing, layouts, global providers
├── processes/   # Cross-feature business flows (empty / future)
├── widgets/     # Page-level composite blocks (sections)
├── features/    # User-facing interaction units (still to be added)
├── entities/    # Business entities (service, portfolio, video)
└── shared/      # Reusable low-level code (ui, lib, providers)
```

Layer rules:

- `shared` can be imported anywhere.
- `entities` expose domain components/data; do NOT import `widgets`/`features`.
- `widgets` compose `entities` + `shared` (optionally `features`).
- `features` encapsulate interaction logic (forms, filters) — can use `entities` & `shared`.
- `processes` orchestrate multi-step flows (none implemented yet).

### What Changed From Legacy Structure

- Removed `src/components/`, `src/data/`, `src/lib/` in favor of FSD layers.
- UI primitives moved to `src/shared/ui/`.
- Data arrays moved into `src/entities/*` or `src/shared/lib` (cross-entity).
- Section components (Header, Footer, Hero, etc.) moved to `src/widgets/`.
- Path aliases updated (see Path Aliases section).

## Key Development Patterns

### Component Structure (FSD)

- shadcn/ui primitives live in `src/shared/ui/` (generated via CLI, kept minimal).
- Domain visualization elements (e.g., `ServiceCard`) live in `src/entities/<entity>/`.
- Section/landing blocks (HeroCarousel, ServicesGrid, PortfolioSection) in `src/widgets/`.
- Future interactive logic (filters, forms beyond basics) will move to `src/features/`.
- Use `cn()` from `src/shared/lib/utils.ts` for class merging.
- Avoid placing new code in removed legacy folders (`src/components/`).

### Styling Approach

- **CSS Variables**: Project uses CSS custom properties in `src/app/globals.css` for theming
- **Dark Mode**: Configured with `class` strategy via `darkMode: ["class"]` in Tailwind config
- **Design Tokens**: Uses OKLCH color space for better color precision
- **Component Variants**: Leverage `class-variance-authority` for component API design

### Development Workflow

```bash
# Development with Turbopack (faster builds)
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

## Path Aliases (Updated for FSD)

Defined in `tsconfig.json`:

| Alias           | Resolves To         |
| --------------- | ------------------- |
| `@/shared/*`    | `./src/shared/*`    |
| `@/entities/*`  | `./src/entities/*`  |
| `@/features/*`  | `./src/features/*`  |
| `@/widgets/*`   | `./src/widgets/*`   |
| `@/processes/*` | `./src/processes/*` |
| `@/app/*`       | `./src/app/*`       |

Legacy aliases (`@/components`, `@/lib`, `@/ui`) are deprecated — use the mappings above.

## Critical Files

- `components.json`: Updated aliases pointing to FSD `shared` layer.
- `src/shared/lib/utils.ts`: `cn()` utility (clsx + tailwind-merge).
- `src/shared/lib/links.ts` & `slides.ts`: Centralized non-entity shared data.
- `src/entities/service/services.ts`: Services dataset & types.
- `src/entities/portfolio/portfolio.ts`: Portfolio dataset & types.
- `src/entities/video/videos.ts`: Video testimonials dataset & types.
- `src/widgets/*/`: Page sections (header, footer, hero-carousel, etc.).
- `src/app/globals.css`: Tailwind layers + CSS variables.
- `src/app/layout.tsx`: Root layout, metadata, font, structured data.

## Code Conventions

### TypeScript

- Strict mode enabled - handle null/undefined explicitly
- Use `type` for object shapes, `interface` for extensible contracts
- Prefer React 19 patterns (no more forwardRef needed for custom components)

### CSS Classes

```tsx
// Use cn() utility for conditional classes
className={cn("base-classes", condition && "conditional-class", className)}
```

### Component Creation

- Generate new UI primitives via shadcn CLI; they will be placed under `src/shared/ui/` per updated `components.json`.
- Do not manually create variant-heavy components unless needed; rely on existing shadcn patterns.
- Place domain-specific cards or composite parts in `entities/` (e.g., `ServiceCard`).
- Place full-width or sectional compositions in `widgets/`.
- Postpone `features/` usage until interaction or multi-entity logic emerges.

### Content Guidelines

- Use geological/engineering terminology appropriately (drilling, subsurface, geological surveys, etc.)
- Consider professional imagery and icons related to construction, earth sciences, and industrial equipment
- Structure content to highlight technical expertise and project case studies

## External Dependencies

- **lucide-react**: Icon library (preferred set).
- **tailwindcss-animate**: Animation utilities.
- **react-hook-form + zod**: Form validation (contact form, future features).
- **shadcn/ui**: Source of UI primitives under `shared/ui`.

cvA is bundled in shadcn — no manual usage needed currently.

Focus on composition via FSD layers, minimizing cross-layer imports.

## Migration Notes

The project has fully transitioned to FSD:

- All legacy component paths updated.
- Build & type checks pass (`bun run build`).
- Tailwind `content` now scans `shared`, `widgets`, `entities`, `features`, `processes`.
- Future additions should respect layer boundaries (see above).

## Authoring Guidance (Quick Checklist)

- Pick target layer first (shared/entity/widget/feature).
- Prefer data colocated with entity (`entities/<name>/`), unless shared globally.
- Avoid deep relative paths — use aliases.
- Keep `shared/ui` focused: primitives only, no business rules.
- Keep `widgets` dumb: assemble, don’t implement domain logic.
- Introduce `features` only when logic spans multiple entities or requires user interaction state.

## Example Imports

```ts
// UI primitive
import { Button } from "@/shared/ui/button";
// Domain entity component
import { ServiceCard } from "@/entities/service/ServiceCard";
// Data
import { services } from "@/entities/service/services";
// Widget (section)
import { PortfolioSection } from "@/widgets/portfolio/PortfolioSection";
// Utility
import { cn } from "@/shared/lib/utils";
```

## Future Expansion Targets

- `features/contact-form/` (extract form logic)
- `features/service-filter/` (interactive filtering)
- `features/portfolio-filter/` (gallery tabs & filters)
- `processes/lead-capture/` (multi-step submission)

---
