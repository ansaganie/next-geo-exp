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

- **Framework**: Next.js 15 with App Router (`src/app/` directory)
- **Build Tool**: Turbopack (via `--turbopack` flag in dev script)
- **Styling**: Tailwind CSS with shadcn/ui design system
- **Components**: shadcn/ui with "new-york" style, Lucide icons
- **Fonts**: Geist Sans and Geist Mono (optimized via `next/font/google`)
- **Language**: TypeScript with strict mode enabled

## Key Development Patterns

### Component Structure

- Use the shadcn/ui component system configured in `components.json`
- Components should go in `src/components/` with UI components in `src/components/ui/`
- Import the `cn()` utility from `src/lib/utils.ts` for conditional className merging

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

## Path Aliases

The project uses TypeScript path mapping:

- `src/*` → `./src/*` (configured in `tsconfig.json`)
- `@/components` → `src/components` (via `components.json`)
- `@/lib` → `src/lib`
- `@/ui` → `src/components/ui`

## Critical Files

- `components.json`: shadcn/ui configuration - defines component installation paths and styling preferences
- `src/lib/utils.ts`: Contains the `cn()` utility for className merging (clsx + tailwind-merge)
- `src/app/globals.css`: Design system CSS variables and Tailwind imports
- `src/app/layout.tsx`: Root layout with font configuration and metadata

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

When adding shadcn/ui components, they install to `src/components/ui/` and can be customized. Use the component's built-in variant props rather than overriding styles.

### Content Guidelines

- Use geological/engineering terminology appropriately (drilling, subsurface, geological surveys, etc.)
- Consider professional imagery and icons related to construction, earth sciences, and industrial equipment
- Structure content to highlight technical expertise and project case studies

## External Dependencies

- **lucide-react**: Icon library (preferred over other icon sets)
- **class-variance-authority**: For building type-safe component variants
- **tailwindcss-animate**: Animation utilities

Focus on leveraging the existing shadcn/ui ecosystem and Tailwind design tokens rather than custom CSS.
