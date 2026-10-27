# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Client** (primary): a founder or business that pays Ejaz to build or improve a web product. They arrive evaluating whether Ejaz can take a manual process off their plate — usually via search, referrals, or social links — and need fast proof of competence and a clear path to contact.

**Recruiter** (secondary): a hiring-side reader evaluating Ejaz for employment. Served by the same case studies and skills evidence without optimizing the site for them.

## Product Purpose

Ejaz Ali's personal brand website and the storefront for his upcoming digital agency (web development). It wins client work by presenting proof — case studies of built software — and making contact effortless. Success means a qualified visitor (client first, recruiter second) leaves convinced of competence and able to reach out. A future blog extends the proof engine with written substance.

## Positioning

"I build web apps that kill manual work." The claim a neighboring freelancer could not truthfully copy: end-to-end delivery (shape → build → ship) of software that replaces spreadsheets, copy-paste, and workflows living in someone's head — offered as Custom Web Development, Founder MVPs, Business Web Apps, Process Automation, and improvement of existing products. The site is the personal brand behind an agency Ejaz intends to launch; personal-brand bar named by Ejaz: Ali Abdaal (polished, personality-led, professional). Anti-position: more software, feature factories, bloated big-agency overhead.

## Operating Context

- Static Astro site deployed on Vercel (`helo-ejaz.vercel.app`); pure static build, no server runtime.
- Contact form posts to Formspree (Vercel shared domain cannot verify a sending domain for Resend).
- Interactive pieces (animated hero, contact form) ship as React islands; the rest is zero-JS Astro.
- Blog support is planned as an MDX collection, not a migration.
- Case-study content lives in `src/content/work/` as an MDX collection; all current entries are explicit placeholders.

## Capabilities and Constraints

- Home page sections: Hero, Skills Marquee, About, Work, Services, Contact.
- Case-study detail pages at `/work/[slug]`; In-Progress projects are labeled with screenshots and never have case-study pages until they ship.
- Terminology is fixed by `GLOSSARY.md`: Client, Founder MVP, Business Web App, Project, Case Study, Effect, In Progress, Agentic Engineering.
- Effects (technical or business outcomes) count only when real; effort alone never counts. No fabricated users, revenue, hours, testimonials, clients, or benchmarks — real case studies and effects are forthcoming, none in hand yet.
- Availability claim is factual: available for new projects; no geography, timezone, language, or work-type constraints recorded.

## Brand Commitments

- Name: Ejaz Ali (site uses "Ejaz" as the short form).
- Tagline: "I build web apps that kill manual work."
- Voice: direct, plain-spoken, outcome-first; no jargon inflation ("Most teams don't need more software. They need the right software.").
- Socials: GitHub (`ejaz-developer`), LinkedIn (`hello-ejaz`), X (`helloejazoff`).
- Domain/URL: https://helo-ejaz.vercel.app.
- Visual direction preference (standing): the familiar category-standard personal-brand/agency site, executed at full craft — no invented visual worlds, no subversive quirks. Craft bar set by reference products Ejaz names.

## Evidence on Hand

- Placeholder case studies: `src/content/work/example-client-portal.mdx`, `example-inventory-tracker.mdx`, `example-ai-support-agent.mdx` — explicitly marked scaffolding; replace with real projects when the project list arrives.
- Hero image asset: `src/assets/hero.png`.
- No real effects, testimonials, press, or client names exist. Future work must not fabricate any of these.

## Product Principles

1. Proof over polish: case studies and effects carry the site; decoration never substitutes for evidence.
2. One primary action: reaching out about a project. Everything funnels toward contact without dark patterns.
3. Honesty as brand: placeholder content is labeled as such; claims appear only when real.
4. Content-first and crawlable: static, server-readable HTML for case studies and (later) blog posts — SEO and link previews are part of winning clients.
5. Right-sized software is the message: the site itself should feel like the work it promises — lean, fast, no unnecessary machinery.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established. Baseline web accessibility expectations apply.
