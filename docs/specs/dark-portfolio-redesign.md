# Dark Agency Redesign + Client Funnel — Build Spec

Status: ready-for-agent
Owner: Ejaz Ali
Supersedes: `docs/specs/portfolio-redesign.md` — that spec's §7 (Visual system), §8 (Hero) and §9 (Motion) are void. Every other part of it (credibility rules, verified contact facts, roster, routes, quality floor) is **inherited** and remains binding.

Source: the grill-me interview in this conversation. The design tree was worked to an empty frontier; every decision below was explicitly chosen by the owner across three interview rounds plus a confirmation. Nothing here was assumed.

---

## Problem Statement

The portfolio looks like a craftsman's notebook, not a firm you'd trust with money. It presents as a warm paper/ledger novelty: charming, stylistically distinct, but quiet about selling. There is no funnel — a visitor hits the page, and the only conversion is a bare `mailto:`. Nothing qualifies a lead (no project types, no budget filter, no timeline capture). Nothing demonstrates the site owner's redesign competence (no before/after work). The audience the owner actually wants — cleaning agencies and small business owners — would have to infer that he serves them.

## Solution

Rebuild the site as a **dark, agency-grade, single-accent portfolio** with a real client funnel:

- A Linear/Vercel-grade minimal dark identity: near-black surfaces, off-white editorial type, one electric-lime accent. The entire paper/ledger system is discarded.
- A three.js wireframe-grid-terrain hero (not generic particles) with GSAP-driven motion, selected specifically to look engineered rather than decorative.
- A landing page explicitly sequenced as a funnel: hook → capabilities → packages → proof → deeper proof → process → objection handling → a multi-step project inquiry form.
- Before/after redesign proof drawn from the four current showcase projects.
- Case studies rebuilt on their own pages as funnel assets, each closing with the inquiry form.
- A validated server-side submission pipeline delivering formatted client briefs to the owner's inbox.

## User Stories

1. As a visitor arriving on the homepage, I want an immediately professional, dark, distinctive first screen, so that I take the site seriously as an agency-level provider within seconds.
2. As a visitor, I want a striking engineered hero (wireframe grid terrain reacting to my cursor), so that I perceive technical skill before reading a word.
3. As a visitor on a small laptop or phone, I want the hero to stay clean, spacious and readable, so that the 3D scene decorates rather than obstructs the message.
4. As a visitor who prefers reduced motion, I want the scene and animations disabled or reduced, so that the site doesn't make me motion-sick or waste my battery.
5. As a visitor on a low-end phone, I want a reduced-density (or static) hero fallback, so that the site still loads fast for me.
6. As a cleaning-agency owner, I want the site to speak to businesses like mine, so that I recognize myself in the offer.
7. As a small business owner, I want to see the two things I can buy — a new website and a website redesign — as clear packages, so that I know the engagement shape without hunting.
8. As a potential client, I want the packages to carry no prices but describe scope clearly, so that I can self-qualify and contact without sticker-shock filtering.
9. As a potential client, I want to see before/after redesign comparisons, so that I can visually judge the quality of the transformation he sells.
10. As a potential client, I want honest status labels on every showcased project, so that I know what is live and what is in development.
11. As a deep researcher, I want separate case-study pages structured as problem → before/after → build → outcome, so that I can develop conviction before contacting.
12. As a reader deep in a case study, I want a persistent reminder/CTA toward the inquiry form, so that the next step is always one click away.
13. As a visitor thinking "is this guy too small/far away/new?", I want an FAQ that answers the standard objections, so that my doubts are handled before I decide.
14. As a potential client, I want every section of the page to point at one clear next step, so that I always know how to engage rather than wondering "now what?"
15. As a potential client, I want to submit a structured inquiry (contact details, project type, budget range, timeline), so that communicating my needs takes minutes without writing an essay.
16. As a potential client who is not sure which package I need, I want the inquiry flow to guide me by project type rather than expecting jargon, so that I don't get stuck or mislabel my request.
17. As the site owner, I want form submissions delivered as a formatted brief to my existing inbox, so that no lead lands in a dashboard I don't check.
18. As the site owner, I want spam and bot submissions silently discarded, so that my inbox stays usable and real leads aren't buried.
19. As the site owner, I want every submission validated server-side, so that garbage requests never reach me or the email service.
20. As the site owner, I want a failure of the email provider to surface as a clear error to the visitor with a working fallback path, so that a technical hiccup never silently swallows a lead.
21. As a keyboard user, I want visible, consistent focus states throughout, so that I can navigate and submit the form without a mouse.
22. As a visitor reading the homepage top-to-bottom, I want scroll-revealed section motion driven by the animation library, so that the page earns a feeling of craft without hype.
23. As the site owner, I want the visual identity replaceable via design tokens rather than scattered hard-coded colors, so that future adjustments don't require touching every component.
24. As a future client told about the site, I want the homepage to load the essentials fast (hero copy and headline visible from first paint), so that the flash of the 3D canvas never holds the message hostage.

## Implementation Decisions

All made by the owner during the interview:

**Visual identity**
1. Dark aesthetic: **Minimal dark + single accent** — near-black base, off-white editorial type, one sharp accent color (electric lime) used sparingly for CTAs, focus rings and small highlights. Benchmarked against **Linear/Vercel restraint**; glow/glass and brutalist variants were rejected.
2. **Full redesign** depth: new design tokens, new primitives, restructured sections, rewritten/retightened copy — not a reskin.
3. The paper/ledger/receipt identity (**stamps, ledgers, perforations, ticket numbers, dashed rules, screenshot frames**) is **discarded entirely**, along with its palette and type stack.
4. Typography: **Geist-only** system (display and body roles from one family, tight tracking) plus a monospace for small labels. Bricolage Grotesque is removed from the font loading.

**Motion & hero**
5. Hero scene: a **wireframe grid terrain** — a monochrome line-on-black plane/terrain whose surface lifts in soft waves following the cursor, with lime tracer accents and camera drift tied to scroll. Explicitly chosen over generic particles ("not AI slop") and over an interactive-mesh or dimensional-type hero.
6. Motion stack: **three.js for the scene, GSAP (with ScrollTrigger) for entrance and scroll-linked animations**, replacing the current CSS-only reveal system site-wide.
7. Performance/behavior guards: the hero copy must be visible from first paint (scene is decoration, never a loading gate); reduced particle density or a static frame on touch devices; `prefers-reduced-motion` disables the scene and reveals.

**Funnel architecture**
8. The homepage is a **single-page funnel** in this exact order: Hero (3D + GSAP) → Services/What-I-do → Packages → Before/After redesigns → Selected case studies → How I work/Process → FAQ → Inquiry form + closing CTA. Owner confirmed this order as proposed.
9. The About section stops being a standalone section; its credibility facts are folded into the closing area. Nav is updated to the funnel's seams rather than the old Home/Work/About/Contact arrangement.
10. The promise-oriented hero headline is **kept** ("I build booking platforms and business web apps that remove manual work") restyled for the dark hero — the owner explicitly rejected re-angularizing it into agency-style variants.

**Offer & copy**
11. Packages: **Website Development** and **Website Redesign** — the owner's own definition of the offer; no ongoing/retainer tier and no prices anywhere on the site.
12. Audience positioning: the copy targets **cleaning agencies, business owners, and similar small service businesses**. This refines (not replaces) the existing positioning; the inherited credibility rules of the old spec (no fabricated metrics, no invented testimonials, honest `Live` / `In development` status labels) continue to apply.

**Proof**
13. The before/after showcase draws its pairs from the **four current projects** (Booking platform for Skardu, POS tool, thumbnail-testing tool, voice-notes tool) — the owner stated these pairs are ready, provided as the existing roster.
14. Honesty constraint on the before/after section: where a genuine "before" asset does not exist on disk, the section must not fabricate a fake comparison — it renders only what is real (and the owner drops in his "before" assets into the project media set; the component accepts them without redesign).

**Conversion plumbing**
15. Primary CTA: a **multi-step project inquiry form** (contact details, project type, budget range, timeline) woven through the page — navbar CTA, section CTAs, case-study sticky CTA.
16. Submissions flow through a **server-side route/action with validation and spam protection** (honeypot plus lightweight throttling), delivering a formatted brief via a **transactional email API**. The service will be researched and picked at build time (a plain send-focused API is the target profile; notification-orchestration platforms were rejected as overkill). Keys live in server environment variables, never in client code or chat. The recipient is the verified address inherited from the old spec.
17. When the email provider is misconfigured or fails, the form surfaces a clear error state and preserves the visitor's input plus a direct email fallback.

**Case studies**
18. The existing per-project case-study pages are **rebuilt as funnel assets**: challenge → before/after → build → outcome, dark-themed, with a sticky CTA into the inquiry form. The MDX pipeline and project roster carry over unchanged.

**Testing seams** (confirmed by the owner)
19. The inquiry submission pipeline is the principal test seam, verified externally over HTTP (see Testing Decisions).
20. Section content renders from data modules; verifies through typecheck/lint/build plus rendered-DOM checks, not unit tests.
21. Visual and motion behavior (three.js scene, GSAP timelines) is verified in-browser only.

## Testing Decisions

- Only external behavior is tested — no assertions on internal component details.
- **Inquiry endpoint** (first automated tests in this codebase — no prior art exists): act at the HTTP level. Required coverage: valid payload → success response and an email-send attempt occurring; missing/invalid fields → validation failure with no email attempt; honeypot filled → a fake-success response and no email attempt; provider error → error response that never echoes the recipient address or key material.
- **Content/rendering seam**: sections consume data modules; runs as typecheck + lint + production build staying green, plus HTML checks that every roster entry, package and FAQ topic renders at least once. Broken or missing image references must fail loudly at build/render, not visually.
- **Visual/motion seam**: browser-level smoke check against the dev server — the WebGL canvas mounts, the page has no console errors, the hero headline content is in the DOM immediately (not gated on scene load). Manual/aesthetic judgment is explicitly reserved for the owner's review in the preview.
- The site owner cannot be assumed to have an email-provider account during development — tests and dev mode must degrade gracefully (dev dry-run mode that logs the formatted brief instead of sending) so the endpoint is testable without a paid key.

## Out of Scope

- Showing prices, an availability banner, or an ongoing-monthly package tier on the site.
- Testimonials or client logos (the inherited spec's prohibit-fabrication rule stands until real ones exist).
- Anything not on the confirmed homepage order: no About mega-section, no blog, no lead magnet / email-capture funnel, no calendar booking embed.
- Moving to a custom domain (stays a later one-line change).
- Launching or fixing the showcased products themselves (BookMyGB launch, AudioThought launch, CogniClick de-faking — separate repositories, inherited as a recorded non-goal).
- Migration off Vercel or any hosting change.

## Further Notes

- The dev flow hit a broken toolchain during research (system `npx` runs under an abandoned Node 18 against a bun-managed project); the build tooling of record here is **bun**. Document the GSAP/three usage patterns the implementation crystallizes on, so agents don't re-derive them.
- The interview surfaced one ancestor conflict worth remembering: the old spec's "one orchestrated animation" motion doctrine is void; motion is now deliberately richer (GSAP-linked reveals site-wide) while respecting the reduced-motion floor.
- If the owner later wants an email-capture/lead-magnet lane or a discovery-call booking step, the inquiry endpoint should be the seam they extend — not a second pipeline added in parallel.
