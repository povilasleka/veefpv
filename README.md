# VeeFPV

Portfolio site for VeeFPV — FPV drone cinematography (concerts, sport, creative projects).
Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required media assets

One file is referenced but not included in this repo — add it under `public/assets/`:

- `public/assets/pilot-portrait.jpg` — portrait photo on the About page.

Until it's added, that spot renders as a broken image; everything else (placeholders for portfolio thumbnails) renders intentionally as a diagonal-stripe placeholder — see `src/components/ui/Placeholder.tsx`.

## Structure

```
src/
  app/                    Routes (App Router)
    page.tsx              Home
    portfolio/page.tsx    Portfolio grid, filtered via ?category= search param
    portfolio/[id]/       Project detail (statically generated per project)
    about/page.tsx
    contact/page.tsx
  components/
    ui/                   Shared primitives: Placeholder, Marquee, Reveal, GlitchHeading
    layout/               Navbar, MobileMenu, Clock, Footer
    home/ portfolio/ about/ contact/   Page-specific sections
  lib/
    data.ts               Projects, achievements, equipment, brands, socials
    types.ts
    site-config.ts        Site-wide copy (pilot name, tagline, email) + nav links
```

Content lives in `src/lib/data.ts` — edit project entries, achievements, equipment specs, etc. there rather than in the components.

The accent color and dark background are defined once as CSS variables (`--color-accent`, `--color-ink`) in `src/app/globals.css`.
