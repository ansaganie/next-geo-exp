# Feature Sliced Design Structure

This project follows the Feature Sliced Design (FSD) architectural pattern.

## Layer Hierarchy (from top to bottom)

```
┌─────────────────────────────────────────┐
│          app/                           │  ← Next.js App Router
│  (routing, layouts, global styles)      │
├─────────────────────────────────────────┤
│          processes/                     │  ← Cross-feature flows
│  (multi-step business processes)        │
├─────────────────────────────────────────┤
│          widgets/                       │  ← Page-level UI blocks
│  (composed from features & entities)    │
├─────────────────────────────────────────┤
│          features/                      │  ← User interactions
│  (isolated business logic units)        │
├─────────────────────────────────────────┤
│          entities/                      │  ← Business entities
│  (domain models & their components)     │
├─────────────────────────────────────────┤
│          shared/                        │  ← Reusable code
│  (UI kit, utils, helpers, configs)      │
└─────────────────────────────────────────┘
```

## Import Rules

**✅ Allowed:**

- Lower layers can be imported by upper layers
- Same layer imports (with caution)
- `shared/` can be imported anywhere

**❌ Not Allowed:**

- Upper layers importing from lower layers
- Cross-feature imports in `features/`
- Circular dependencies

## Path Aliases

```typescript
"@/shared/*"     → "./src/shared/*"
"@/entities/*"   → "./src/entities/*"
"@/features/*"   → "./src/features/*"
"@/widgets/*"    → "./src/widgets/*"
"@/processes/*"  → "./src/processes/*"
"@/app/*"        → "./src/app/*"
```

## Current Usage

### shared/

- **ui/**: shadcn/ui components (Button, Card, Input, etc.)
- **lib/**: Utilities (cn), data (links, slides)
- **providers/**: React context providers

### entities/

- **service/**: Service data, types, and ServiceCard component
- **portfolio/**: Portfolio items data and types
- **video/**: Video testimonials data and types

### widgets/

- **header/**: Site header with navigation
- **footer/**: Site footer with links
- **hero-carousel/**: Main hero section with slides
- **services-grid/**: Services showcase
- **portfolio/**: Portfolio gallery
- **about/**: About section
- **contact/**: Contact form and info
- **video-testimonials/**: Video testimonials player
- **main-content/**: Main page content wrapper

### features/

Currently empty. Future additions:

- contact-form (form submission logic)
- service-filter (filtering functionality)
- portfolio-filter (gallery filtering)

### processes/

Currently empty. Future additions:

- lead-capture (multi-step lead generation)
- authentication (if needed)

## Benefits

1. **Scalable**: Easy to add new features without affecting existing code
2. **Maintainable**: Clear boundaries and responsibilities
3. **Testable**: Isolated layers are easier to test
4. **Team-friendly**: Multiple developers can work on different layers simultaneously

## Resources

- [FSD Official Docs](https://feature-sliced.design/)
- [FSD for React/Next.js](https://feature-sliced.design/docs/guides/frameworks/nextjs)
