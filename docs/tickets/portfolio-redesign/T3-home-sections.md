# T3 — Home sections, data model, nav & footer

Spec refs: §3, §4, §5, §6, §7, §9, §12.
Depends on: T1.

## Goal

Rebuild the home page as one scrolling thesis with the exact section order in §6, on
the new paper/print system, and rewrite the data model to carry the honest four-project
roster in §5. Owns `data/data.ts` and every consumer of it.

## Deliverables

### 1. `data/data.ts` — new model

```ts
export type ProjectStatus = "Live" | "In development";

export interface Project {
  slug: string;                 // bookmygb | record-keeper | cogniclick | audiothought
  title: string;
  summary: string;              // one line
  status: ProjectStatus;
  stack: string[];
  image: string;                // /project-images/...
  imageAlt: string;
  demo?: string;                // ONLY when the URL is known to resolve
  order: number;
}
```

- `projects` in §5 order: **BookMyGB** (In development, no demo), **Record Keeper**
  (Live, demo `https://recordkeeper-pink.vercel.app/`), **CogniClick** (Live, demo
  `https://cogniclick-three.vercel.app/`), **AudioThought** (In development, no demo).
- Remove every `github` field and every dead source link. §5: sources stay private; the
  site leads with demos + case studies.
- **AudioThought must read `In development`** (spec §5 says "Not live"; the two allowed
  labels are `Live` / `In development`).
- Replace `thingsIBuild` with `whatIDo`: the **four** offerings in §3, each
  `{ title, description, icon }`, using T1/`components/icons.tsx` stroke icons.
- Replace `navLinks` with: Home (`#hero`), Work (`#work`), About (`#about`),
  Contact (`#contact`).
- `socialLinks` → derive from `lib/site.ts` `socials` (or re-export); email, LinkedIn,
  GitHub, X. No dead links.
- Drop `desktop-app` references entirely.
- Add `howIWork`: 3–4 steps (`{ step, title, description }`). Process signalling only —
  **no pricing, no availability**.
- Reuse existing `/project-images/*.avif` files; add real screenshot slots. If a project
  needs an image the repo lacks (e.g. BookMyGB), reference a clearly-named placeholder
  path and note it in the PR/handoff — do **not** invent a `picsum` URL.

### 2. Home sections (`components/sections/*`)

Rewrite to the §6 order and the print system. Suggested files (rename freely):

1. `hero.tsx` — **owned by T2; do not touch.**
2. `what-i-do.tsx` — the four offerings. Print/ledger treatment (numbered rows or
   stamped cards), not generic icon cards.
3. `selected-work.tsx` — the four projects, §5 order. Each is a link to
   `/work/<slug>` (route is built by T4; linking now is expected). Show title, one-line
   summary, stack tags, and an honest **status label** (`Live` / `In development`).
   Show the real demo link only when `demo` exists. Use `<ScreenshotFrame>` for imagery.
4. `about.tsx` — credibility block per §4: ~3 years of work, Skardu, CodeHub Skardu
   2023–2025, what is owned end-to-end (interface → backend), location/timezone (PKT,
   UTC+5). Tight. No résumé dump, no CV download.
5. `how-i-work.tsx` — 3–4 step process (§6).
6. `contact.tsx` — email + LinkedIn only, per §4/§6. Email `hello.ejaz@outlook.com`,
   LinkedIn `https://www.linkedin.com/in/hello-ejaz/`. A `mailto:` CTA is fine.

### 3. `app/page.tsx`

Compose the six sections in §6 order. Remove the old `ThingsIBuild` / ordering. Keep
its outer container sensible for the new design (paper, ruled margins), responsive to
mobile.

### 4. `components/navbar.tsx`, `components/footer.tsx`

- Nav per §6: Home, Work, About, Contact + social icons. Keep the active-section
  behaviour for `hero`, `work`, `about`, `contact`. Restyle to the print system
  (not macOS pill). Must be keyboard accessible, `aria-label="Main"`.
- Footer: name, positioning line, socials, Privacy/Terms links, © year. Print system.
- Both must be responsive (mobile: nav still usable; socials may collapse).

### 5. Motion (§9)

Subtle scroll reveals on sections only (`whileInView`, small y + opacity). No ambient
effects. Collapse to no-op under `prefers-reduced-motion`.

### 6. Cleanup

Delete now-unused old sections (`things-i-build.tsx`, `projects.tsx`) and any dead
`Window` usage on the home page. `components/window.tsx` may be deleted if nothing uses
it after this ticket — **but T4's case studies may use `ScreenshotFrame` instead**, so
coordinate: if unsure, leave `window.tsx` in the tree unused rather than deleting.

## Acceptance

- `bun run build` green; `bun run lint` clean.
- Home page has exactly one `<h1>` (the hero's).
- Section order on `/` is exactly: Hero, What I do, Selected work, About, How I work,
  Contact.
- Every project shows an honest status label; no source links; no dead links.
- Nav anchors resolve to existing section ids (`#hero`, `#work`, `#about`, `#contact`).
- Contact exposes email + LinkedIn only.
- Reduced motion respected; keyboard focus visible.

## Constraints

- Owns `data/data.ts`, `app/page.tsx`, `components/navbar.tsx`, `components/footer.tsx`,
  the home section components.
- Does **not** touch `app/layout.tsx` metadata (T5), `next.config.ts`/`package.json`
  (T4), `globals.css` (T1), `components/sections/hero.tsx` (T2).
- No new runtime dependencies.

## Verify

```
bun run lint && bun run build
```
