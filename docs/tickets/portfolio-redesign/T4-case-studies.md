# T4 — MDX pipeline, `/work/<slug>` template, four case studies

Spec refs: §6 (routes + case-study template), §7 (screenshot frames), §11 (Tech),
§12 (quality floor).
Depends on: T1.

## Goal

Add an MDX content pipeline and a `/work/<slug>` case-study route, with four case
studies authored as MDX (one file per project) carrying frontmatter.

## Deliverables

### 1. Dependency + config

- Add `next-mdx-remote` (`^6`) to `package.json` (RSC entry `next-mdx-remote/rsc`);
  run `bun install` and commit the updated `bun.lock`.
- If custom MDX components need a wrapper, prefer passing `components` to
  `compileMDX`. Only touch `next.config.ts` if you genuinely need MDX page support
  (`@next/mdx`); the recommended path (**content collection via `next-mdx-remote`
  `compileMDX` + `generateStaticParams`**) needs no `next.config.ts` change.

### 2. Content

- `content/work/<slug>.mdx` ×4: `bookmygb`, `record-keeper`, `cogniclick`,
  `audiothought`.
- Frontmatter per §6: `title`, `slug`, `summary` (one line), `status`
  (`Live` | `In development`), `stack` (string[]), `images` (string[] — real repo
  images under `/project-images/*.avif` or new files you add under `public/`),
  plus `alt` text per image.
- Body follows the §6 template with these exact H2 headings, in order:
  1. `## Challenge`
  2. `## Approach`
  3. `## What I built`
  4. `## Stack`
  5. `## Result & status`
- **Honesty rules (§4/§5):** no invented metrics, no fabricated testimonials, no
  placeholder (`picsum`) images. Prove with scope, features, working demo, screenshots.
  Where real facts are unknown, describe scope/features rather than numbers. BookMyGB:
  operator/user/super-admin roles, In development. Record Keeper: sales, customers,
  invoices, cash flow; Live (thin). CogniClick: AI thumbnail/title testing; Live.
  AudioThought: voice → structured notes + flowchart, Next.js + Supabase + AssemblyAI;
  In development.

### 3. `lib/mdx.ts` (or similar)

- `getAllSlugs()` from `content/work/`.
- `getCaseStudy(slug)` → `{ frontmatter, content }` via `compileMDX` with
  `options: { parseFrontmatter: true }`, reading the file with `fs/promises`.
- A typed `CaseStudyFrontmatter` interface.
- Return `null`/throw for unknown slugs so the page can `notFound()`.

### 4. `app/work/[slug]/page.tsx`

- **Next.js 16 params are async**: `params: Promise<{ slug: string }>` — `await` it.
- `generateStaticParams()` returns the four slugs; page is statically generated.
- `generateMetadata()` from frontmatter (title, description = summary, OpenGraph).
- Renders, in order: a header (title, `summary`, status `<Stamp>`, stack tags), the
  `ScreenshotFrame`(s) with mono captions, then the MDX body. Ruled margin / print
  treatment per §7. A back link to `/#work`.
- `notFound()` on unknown slug (reuses `app/not-found.tsx`).

### 5. MDX components mapping

Provide a `components` map so MDX body elements (headings, lists, links, code) inherit
the print system and the §6 H2 styling. Keep it minimal and consistent with T1 tokens.

### 6. Per-case-study OG images (§11)

- Add `app/work/[slug]/opengraph-image.tsx` using `next/og` `ImageResponse`
  (edge/node as Next 16 defaults dictate) — 1200×630, paper background, project title,
  status, site name. Reference it from the page metadata (file-based OG convention
  auto-wires it).
- Must build statically for each of the four slugs.

## Acceptance

- `bun run build` green; `bun run lint` clean.
- `/work/bookmygb`, `/work/record-keeper`, `/work/cogniclick`, `/work/audiothought` all
  statically generate; unknown slug → 404.
- Every case study renders the five headings in order and shows its status label.
- No fabricated metrics/testimonials; no `picsum` or placeholder image URLs.
- Each case study emits its own OG image.
- Responsive to mobile; keyboard focus visible; reduced motion respected.
- No dead links (all `images`/`demo` targets resolve; source links absent).

## Constraints

- Owns `content/**`, `app/work/**`, `lib/mdx.ts`, MDX components, `package.json`,
  `bun.lock`, and `next.config.ts` if needed.
- Does **not** edit `data/data.ts`, `app/page.tsx`, `app/layout.tsx`, `globals.css`,
  navbar/footer. It may **import** `lib/site.ts` (T1) and T1 primitives.
- If a case study needs a project image that exists, reuse `/project-images/*.avif`.
  Adding new real screenshots under `public/` is allowed (leave clear alt text).

## Verify

```
bun run lint && bun run build
```
