# 08 — Deferred blog features (add when thresholds are hit)

Status: needs-triage

## Context

Deliberately deferred at launch to keep publishing friction low and avoid dead
weight on a 3-post blog. Add each when its trigger is hit — not before.

## Deferred, with triggers

- **Tag pages** (`/blog/tags/<tag>`) — trigger: ~10 posts. Tag chips already
  render on cards and post headers; they become links when the pages exist.
- **Related-posts block** — trigger: ~10 posts. Below the fold on each post.
- **Table of contents** — trigger: posts routinely exceed ~1500 words / many H2s.
- **Share buttons** — trigger: when there's evidence readers want them. On a
  3-post blog they're decoration.
- **Build-time OG image generation** (Satori/resvg) — trigger: per-post custom
  OG images are wanted enough to justify the build deps. Today: default branded
  PNG + optional `ogImage` frontmatter override.
- **On-site analytics** (Plausible / Vercel Analytics) — trigger: when GSC
  alone stops answering "is this working." GSC is the only measurement today.
- **`llms-full.txt`** — deliberately not planned; full HTML is already crawlable
  and an inlined copy drifts out of sync. Revisit only if there's a concrete
  reason a links-only index isn't enough.
- **Cross-posting to Medium/Dev.to** (backlinks) — trigger: after the 3 launch
  posts have settled; use `canonical` frontmatter pointing back to the site.
