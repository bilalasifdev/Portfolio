# Muhammad Bilal Asif — Portfolio (Next.js)

This is the Next.js (App Router) version of the portfolio, converted from the
original React + Vite project. The visual design, animations, and content are
unchanged — only the framework and project structure changed.

## Structure

```
app/
  layout.tsx      Root layout: fonts, page metadata, wraps every page
  page.tsx         The portfolio itself (hero, about, work, skills, journey, contact)
  globals.css      All site styles (Tailwind CSS v4 + hand-written CSS)
public/
  images/          Background and profile images
  Muhammad_Bilal_Asif.pdf   CV, served for the "Download CV" buttons
```

## Running locally

Requires Node.js 18.18 or newer.

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

This project deploys cleanly to **Vercel** (build command `next build`, no
extra configuration needed), or any host that supports Next.js.

## Contact form

The contact form posts to Formspree. Before it can send real emails, replace
`YOUR_FORM_ID` in `app/page.tsx` with your own Formspree form ID (sign up free
at formspree.io).

## What changed from the Vite version

- Routing: `wouter` removed — the site is a single page, so Next.js's built-in
  App Router handles it directly (`app/page.tsx`).
- Build tool: Vite replaced by Next.js's own build system.
- Fonts: still loaded the same way, via Google Fonts `<link>` tags in
  `app/layout.tsx`, so every `font-family` in the CSS keeps working unchanged.
- Removed: the Express server, Manus-specific dev tooling, and unused
  shadcn/ui components and hooks that the portfolio page never used — none of
  it was part of what renders on the page.
