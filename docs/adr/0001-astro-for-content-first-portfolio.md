# Astro for the content-first portfolio

The site's job is winning clients through case studies and (later) a blog, which makes crawlable static content the product — but the repo was a client-rendered Vite + React SPA that serves crawlers and link previews an empty shell. We pivot to Astro (static-first, MDX content collections, React islands for the few interactive pieces), deployed as a pure static build on Vercel; Next.js SSG was considered and rejected because showcasing Next is not part of the personal brand, and staying on the Vite SPA was rejected for the SEO cost.

## Consequences

- The contact form cannot use a server runtime or provider-verified sending domain (`hello-ejaz.vercel.app` is on Vercel's shared domain, unverifiable in Resend), so it posts to Formspree — no server code at all.
- Interactive UI (animated hero, contact form) ships as React islands; everything else is zero-JS Astro.
- Blog support is "add an MDX collection", not a migration.
