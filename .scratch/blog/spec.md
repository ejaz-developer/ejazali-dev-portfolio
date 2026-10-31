# Blog — spec

Status: ready-for-agent

Purpose: add written content to the portfolio so Ejaz ranks on Google for the
queries his ideal Client actually types, and is quotable by AI answer engines.
Extends the existing proof engine (case studies) with written substance — per
PRODUCT.md and ADR 0001.

## Settled decisions (from grilling session)

**Audience & angle** — Primary: Clients (founders/businesses) searching for the
services Ejaz offers. Posts answer real search queries at different funnel
stages. Recruiters are a side audience, never the target.

**Authoring** — Ejaz writes ongoing in Notion; an `import:notion` script in the
repo converts a Notion export into clean MDX + assets. The three launch posts
are drafted directly as MDX in the repo for speed; one real Notion export
validates the converter before post #4.

**Launch content** — 3 cornerstone posts, one per top service line:
1. How much does it cost to build an MVP? (Founder MVPs)
2. Signs your business has outgrown spreadsheets (Process Automation)
3. Build vs buy: custom software vs off-the-shelf SaaS (Business Web Apps)

**Storage** — `blog` MDX collection in `src/content.config.ts`, mirroring `work`.
Frontmatter contract: `title`, `description` (~150 chars, doubles as meta +
schema + llms.txt summary), `date`, `updated?`, `tags[]`, `draft`,
`canonical?`, `ogImage?`. Slug from filename, stable from first draft.

**Post template** — Tier-1 contract enforced on every post:
- Answer-first opening paragraph (3–4 quotable sentences).
- FAQ section (3–4 Q&As) wired to `FAQPage` JSON-LD, driven by frontmatter `faq[]`.
- ≥1 internal link to `/` services or `/work`.
Tier-2 (guidance, not a gate): H2s lead with the answer before elaborating.

**Surfaces** — `/blog` listing, `/blog/<slug>` post pages, `@astrojs/rss` feed
at `/rss.xml`, sitemap (already wired), links-only `llms.txt`. Tag pages
deferred until ~10 posts. Page furniture: date + updated-if-newer + reading
time + tag chips + author line + prev/next. No TOC, share buttons, or
related-posts yet.

**AI SEO (all three layers)**
- `robots.txt` allows every AI crawler (GPTBot, ClaudeBot, PerplexityBot,
  CCBot, Google-Extended).
- `llms.txt` is a links-only index (title + description + canonical URL).
  No `llms-full.txt` — full HTML is already crawlable.
- Schema.org JSON-LD on every post: `BlogPosting` + `FAQPage` + `BreadcrumbList`.

**SEO/OG** — branded default OG image (1200×630), `ogImage` frontmatter
override. GSC via meta tag. Analytics = GSC only (no on-site analytics yet).

**Drafts & rollout** — `draft: true` filtered from listing, sitemap, feed, and
llms.txt at build. Nav "Blog" link ships in the same commit as the launch
posts — nothing public until all 3 are live.

**Domain** — staying on `helo-ejaz.vercel.app` for now. A later domain
migration means new canonical domain, sitemap regen, GSC property move, and
301s — tracked as a separate issue (see `issues/06-domain-migration.md`).
GSC starts on the vercel.app property.

## Build steps

1. `blog` collection + Zod schema in `src/content.config.ts`.
2. `/blog` listing page (cards, reading time, tags, date).
3. `/blog/[slug]` post page: furniture, `prose` body, FAQ block, prev/next,
   `BlogPosting`/`FAQPage`/`BreadcrumbList` JSON-LD.
4. `/rss.xml` endpoint (`@astrojs/rss`), draft-filtered.
5. `/llms.txt` endpoint, links-only, draft-filtered.
6. `public/robots.txt` — allow-all + sitemap pointer.
7. `Base.astro`: `og:image`/`twitter:image` support + `ogImage` prop +
   GSC verification meta + RSS autodiscovery link.
8. `Nav.astro`: "Blog" link.
9. Branded default OG image (1200×630) in `public/`.
10. `scripts/import-notion.mjs` + `bun run import:notion` script.
11. Three cornerstone posts as MDX, satisfying the Tier-1 contract.
12. Docs: ADR 0002, GLOSSARY "Post" term, PRODUCT.md capability lines.

## Non-goals (deferred)

- Tag pages, categories, on-site search, TOC, share buttons, related posts.
- Build-time OG generation (Satori/resvg).
- On-site analytics (Plausible/Vercel) — GSC only for now.
- Domain migration.
