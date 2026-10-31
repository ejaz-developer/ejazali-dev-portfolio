# 06 — Domain migration off hello-ejaz.vercel.app

Status: needs-triage

## Context

The blog and site currently live on `hello-ejaz.vercel.app`. Per the grilling
decision (Q1, option b) we launch there now and migrate to a custom domain
later. A free subdomain is weaker for brand credibility and link equity, and it
is what AI crawlers would cite verbatim — so migration is worth doing, just not
blocking launch.

## Work when a domain is bought

- Point the custom domain at Vercel (DNS + Vercel domain config).
- Update `site.url` in `src/data/site.ts` and `site` in `astro.config.mjs`.
- Update the hardcoded origin in `public/robots.txt` (Sitemap line) and the
  `absoluteUrl` fallback in `src/lib/blog.ts`.
- Set the canonical domain in GSC; submit the new sitemap; use GSC's
  Change of Address tool.
- Add 301 redirects from `hello-ejaz.vercel.app` to the new domain (Vercel
  `redirects` in `vercel.json`) so existing URLs and citations keep working.
- Regenerate the default OG image (`public/og-default.png`) to show the new URL.

## Blocked on

- Ejaz buying a custom domain (decision + purchase is his).
