# 2. Responsive Image Delivery Pipeline and Asset Standards

Date: 2026-10-11
Status: Accepted

## Context
The production showcase images (`portfolio-01.jpg` through `portfolio-04.jpg` and `about-left-image.png`) were low-resolution mobile photographs (~363×500 px) exhibiting heavy compression artifacts, sensor noise, and poor clarity on high-DPI (Retina) and desktop screens. Furthermore, `bg1.png` was an uncompressed legacy asset of 23.8 MB causing repository bloat.

We evaluated two technical routes for delivering responsive, multi-size images across mobile, tablet, and desktop:
1. Pre-rendering multiple discrete static resolution files (e.g. `-sm`, `-md`, `-lg`) and serving them via `<picture>` elements.
2. Generating high-resolution master source assets (up to 2K resolution) and leveraging Next.js's native on-demand image optimization pipeline (`next/image`) with tuned `sizes` attributes and automated AVIF/WebP conversion.

## Decision
1. **Master High-Res Source Assets**: Retain single high-resolution master assets in `public/assets/images/` produced via image-to-image enhancement (denoising, detail sharpening, upscaling) while preserving authentic field machinery, crew, and geological terrain.
2. **On-Demand Dynamic Sizing**: Leverage Next.js `next/image` with `deviceSizes` (`[640, 750, 828, 1080, 1200, 1920]`) and format negotiation (`image/avif`, `image/webp`).
3. **Viewport Breakpoint Tuning**: Specify explicit `sizes` media queries on each component (`HeroCarousel`, `PortfolioSection`, `AboutSection`) matching container constraints so browsers request exact target widths for 1x, 2x, and 3x device pixel ratios.
4. **Legacy Asset Pruning**: Deprecate and remove bloated unoptimized files (including the 23.8MB `bg1.png`).

## Consequences
- Single master files keep repository clean without dozens of static variant files.
- Browsers receive optimally sized, modern AVIF/WebP formats tailored to each viewport and pixel ratio.
- High-fidelity visual quality without compromising mobile load times or Lighthouse performance.
