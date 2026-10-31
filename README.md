# Muhammad Bilal Asif — Portfolio (Next.js)

A responsive, accessible personal portfolio built with Next.js (App Router),
TypeScript, and hand-written CSS using one consistent design-token system.

## Structure

```
app/
  layout.tsx       Root layout: fonts, SEO metadata, Open Graph image
  page.tsx          Assembles all sections from components/
  globals.css       Design tokens + all styles, organized by section
  icon.svg          Favicon
components/          One component per section (Header, Hero, About,
                      Work, Skills, Journey, Contact, Footer, SocialRail)
data/
  content.tsx        Every piece of personal content in one typed file
public/
  images/             Background, profile photo, project thumbnails (webp)
  og.png              Social-share preview image
  Muhammad_Bilal_Asif.pdf
```

## Editing your content

Everything personal — name, email, social links, projects, skills, timeline —
lives in **`data/content.tsx`**. Edit that one file; every component reads
from it automatically.

## Running locally

Requires Node.js 18.18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building for production

```bash
npm run build
npm start
```

## Deploying

Deploys cleanly to Vercel with no extra configuration (build command
`next build`).

## Contact form

Posts to Formspree (`site.formEndpoint` in `data/content.tsx`). The first
submission needs confirming in your inbox; after that every message arrives
by email.

## What changed in this responsive/alignment pass

- Rebuilt around one set of CSS design tokens (colors, spacing, type scale)
  instead of duplicated per-breakpoint rules, so every section shares the
  same left/right edge and holds together at any width.
- Fixed header with a real mobile menu (hamburger to slide-down nav) instead
  of hiding navigation below ~1100px.
- Reworked project cards, skill rows, and the journey timeline with CSS
  Grid/Flexbox and minmax()/clamp() instead of fixed widths, so they reflow
  instead of overlapping or clipping on small screens.
- Images converted to WebP and properly sized, fonts self-hosted with
  @fontsource instead of a render-blocking Google Fonts request, and content
  split into components backed by one content file.
- Added SEO metadata, an Open Graph preview image, a real favicon, visible
  keyboard-focus states, a skip-to-content link, and prefers-reduced-motion
  support.
