# T5 — Metadata, OG, canonical, dead-link sweep, quality floor

Spec refs: §11, §12 (Quality floor).
Depends on: T2, T3, T4.

## Goal

Final pass: make metadata accurate against the **working** canonical URL, add site-level
SEO surfaces, sweep every dead link, and verify the quality floor.

## Deliverables

### 1. `app/layout.tsx` — metadata

- Use `siteUrl` from `lib/site.ts` (`https://hello-ejaz.vercel.app`) for
  `metadataBase`, `openGraph.url`, `authors`, etc. **`helloejaz.dev` must not appear
  anywhere.**
- Title template `%s · Ejaz Ali`; default title + description reflect the §3 positioning
  (booking platforms & business web apps for entrepreneurs / business owners / SaaS
  founders), not "Full-stack Web Engineer".
- OpenGraph `type: website`, `locale`, `siteName`, `images` (`/og.png`, 1200×630, alt).
- Twitter card `summary_large_image` (upgrade from `summary`), `creator: @helloejazoff`.
- `robots: { index: true, follow: true }`.
- Keep the font wiring from T1 and the skip-link/nav/footer structure.

### 2. `app/opengraph-image.tsx` (optional) / `public/og.png`

- Either regenerate `public/og.png` to match the new system, or add a file-based
  `app/opengraph-image.tsx` via `next/og`. Whichever is chosen, the default OG image
  must exist, be 1200×630, and accurately represent the site. Do not leave stale art.

### 3. `app/sitemap.ts` and `app/robots.ts`

- `sitemap.ts`: `/`, `/work/<slug>` ×4, `/privacy`, `/terms` — absolute URLs from
  `siteUrl`.
- `robots.ts`: allow all, sitemap URL, host from `siteUrl`.

### 4. Dead-link sweep (§5, §12)

- `rg` the repo for `helloejaz.dev`, `picsum`, `desktop-app`, `github.com/ejaz-developer/`
  source links, and any `href`/`src` to non-existent assets. Remove or fix all.
- Verify every outgoing link target used on the site (`demo` URLs, socials, email).
- Verify every `/project-images/*` and any `public/` asset referenced actually exists.
- Case-study pages must not link to private sources.

### 5. Quality floor (§12)

- Responsive down to 360px: `/`, all four `/work/<slug>`, `/privacy`, `/terms`.
- Visible keyboard focus everywhere (skip link works; nav, CTAs, links).
- `prefers-reduced-motion` respected (hero static, reveals off).
- No horizontal scroll on mobile.
- One `<h1>` per page; heading order sane.
- Add `app/work/[slug]` and legal pages to the title template coverage (each page sets
  its own `title`).

### 6. Accessibility / semantics sanity

- `<main id="main">` present; `lang="en"`; nav labelled; images have alt text.
- Color contrast of ink-on-paper text passes WCAG AA; check `--muted` on paper.

## Acceptance

- `bun run build` green; `bun run lint` clean.
- `bun run build` output lists all routes incl. four `/work/*`, `sitemap.xml`,
  `robots.txt`.
- No occurrence of `helloejaz.dev`, `picsum`, `desktop-app` anywhere in the repo.
- No dead `href`/`src` in shipped pages.
- Reduced-motion verified; focus visible; 360px layout clean.

## Constraints

- Owns `app/layout.tsx` metadata, `app/sitemap.ts`, `app/robots.ts`,
  `app/opengraph-image.tsx` and/or `public/og.png`.
- May make small cross-cutting fixes required by the sweep, but must not regress T2/T3/T4
  content decisions. Coordinate with the integration branch.

## Verify

```
bun run lint && bun run build
```
