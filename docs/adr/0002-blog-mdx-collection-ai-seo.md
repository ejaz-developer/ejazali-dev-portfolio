# Blog as an MDX collection with layered AI SEO

The blog ships as a second Astro content collection (`blog`), not a CMS and not
a hosted platform, because ADR 0001 already committed the site to
crawlable-static content and "add an MDX collection, not a migration." Posts are
authored as MDX in-repo; Ejaz writes ongoing in Notion and a local
`import:notion` script converts an export into clean MDX + assets. The three
launch posts were drafted directly as MDX to move fast; the converter is
validated on a real Notion export before post #4.

The SEO goal is twofold and the two layers are designed together, not bolted on:
rank on Google for Client-intent queries, and be quotable by AI answer engines.

## Decisions

- **Frontmatter contract** (`title`, `description`, `date`, `updated?`,
  `tags[]`, `draft`, `canonical?`, `ogImage?`, `faq[]`). `description` (~150
  chars) is the single source reused as meta description, schema description,
  and the llms.txt summary line. `faq[]` drives both the rendered FAQ and the
  FAQPage JSON-LD, so the markup can never drift from the visible content.
- **Tier-1 post contract, enforced by review not by build**: answer-first
  opening paragraph, an FAQ section, and ≥1 internal link to services/work.
  Tier-2 (H2s lead with the answer) is guidance, not a gate — a hard gate would
  raise publishing friction and kill the blog, which is the real risk.
- **Drafts are a frontmatter flag** (`draft: true`), not a directory. The file
  keeps its final path/slug from first draft, so internal links to upcoming
  posts can be written in advance, and publishing is a one-word flip. Drafts are
  filtered at build from the listing, sitemap, feed, and llms.txt.
- **AI SEO = all three layers**: (1) `robots.txt` allows every AI crawler
  (GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended, ...); (2) a
  links-only `llms.txt` index generated from the collection; (3) `FAQPage` +
  `BlogPosting` + `BreadcrumbList` JSON-LD on every post.
- **llms.txt is links-only, deliberately.** No `llms-full.txt`: full HTML is
  already crawlable at each canonical URL, and an inlined copy drifts out of
  sync. One source of truth.
- **RSS via `@astrojs/rss`** at `/rss.xml`, draft-filtered, autodiscovered in
  the head.

## Consequences

- Publishing requires filling a description and 3–4 FAQ pairs per post — the
  schema enforces `faq` is non-empty, so a post cannot ship without it.
- Tag pages are deferred until ~10 posts; with 3 launch posts a taxonomy is dead
  weight. Tag chips render but are not yet links.
- The site stays on `hello-ejaz.vercel.app` for now. A later domain migration
  means a new canonical domain, sitemap regen, a GSC property move, and 301s —
  tracked as a separate issue.
- GSC (meta-tag verification) is the only measurement for now; no on-site
  analytics.
- A branded default OG image (`public/og-default.png`, 1200×630) covers every
  page; `ogImage` frontmatter overrides per post. Build-time OG generation
  (Satori/resvg) is deliberately deferred.
