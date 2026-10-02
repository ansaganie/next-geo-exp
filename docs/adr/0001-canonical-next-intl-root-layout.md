# 1. Canonical Next-Intl Root Layout and Streaming Metadata

Date: 2026-10-01
Status: Accepted

## Context
Google Lighthouse SEO and document audits failed because `<meta name="description">` and other OpenGraph/Twitter tags were rendered inside `document.body` instead of `document.head`. The previous architecture split layout responsibilities: `src/app/layout.tsx` rendered the root `<html>` and `<body>` tags and flushed `<head>` early, while `src/app/[locale]/layout.tsx` contained the asynchronous `generateMetadata` function. Due to React streaming, Next.js flushed the initial document before metadata resolved, streaming metadata tags downstream inside `<body>`.

Furthermore, dynamic requests to `/robots.txt` and `/llms.txt` were intercepted by `src/app/[locale]/page.tsx` and returned 200 OK with full HTML pages, violating crawler specifications.

## Decision
1. Move the root `<html>` and `<body>` tags directly into `src/app/[locale]/layout.tsx` following the canonical `next-intl` App Router architecture. Keep `src/app/layout.tsx` as a pass-through component.
2. Implement `src/app/robots.ts` using Next.js `MetadataRoute.Robots` to serve valid `text/plain` robots instructions.
3. Serve `public/llms.txt` with appropriate `# Title` H1 and markdown resource links to comply with the LLM/Agentic browsing standard.

## Consequences
- All metadata tags resolve into the initial `<head>` stream, satisfying Lighthouse SEO and search engine scrapers.
- Crawler manifests (`robots.txt`, `llms.txt`) bypass locale routing and return valid non-HTML responses.
