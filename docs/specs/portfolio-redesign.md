# Portfolio Redesign — Build Spec

Status: approved
Owner: Ejaz Ali
Supersedes: current single-page portfolio on `main`

---

## 1. Goal

Convert visitors into **freelance clients** for **booking platforms and business web
applications**.

The current site is stylistically distinct but says little and proves little: three
projects with one-line descriptions, all their source links 404, no work history, no
case studies, and a canonical domain (`helloejaz.dev`) that does not resolve while the
live copy sits on `hello-ejaz.vercel.app`.

The redesign is therefore **content- and credibility-led**, not a visual polish pass.

## 2. Audience

- Entrepreneurs and founders who need a product built.
- Business owners who need a website, booking system, or internal tool.
- SaaS founders who need practical tools built quickly.

## 3. Positioning

From the LinkedIn profile (`linkedin.com/in/hello-ejaz/`):

> Web Developer | Booking Platforms & Business Web Apps | Helping Entrepreneurs
> Streamline Operations and Grow

The site sells four things:
- Business websites that bring in more customers.
- Booking platforms and business applications that remove manual work.
- Practical web tools for SaaS founders.
- Turning requirements into working software, from interface to backend.

The **"What I do"** section mirrors this positioning.

## 4. Credibility strategy

There is **no paid client work yet**. Credibility must come from real, honestly
presented products plus the removal of any trust-breaking artifacts.

Rules:

- **Substantiated numbers only.** If a number cannot be backed (tests, uptime, data
  volume, transaction count), prove with scope, a working demo, and screenshots
  instead. No invented metrics.
- **No fabricated social proof.** Fabricated testimonials are removed. Real
  testimonials are pursued over time (product users, collaborators, people who
  received free work) and added only when genuine. Until then, substitute verifiable
  proof: live demos, screenshots, feature scope.
- **Honest status labels** on every project: `Live` or `In development`.
- **Credibility-focused About**: ~3 years of work, Skardu (CodeHub Skardu 2023–2025),
  what is owned end-to-end, location/timezone. Tight — not a résumé dump.
- **Process section** ("How I work", 3–4 steps) signals predictability. **No pricing,
  no availability banner.**
- **Contact**: email + LinkedIn only.

## 5. Roster

Featured order (flagship-first):

| # | Project | What it is | Status | Bundled action |
|---|---------|-----------|--------|----------------|
| 1 | **BookMyGB** | Ticket booking system for Skardu with operator, user, and super-admin roles | In development | **Launch**: deploy, seed/demo data, screenshots |
| 2 | **Record Keeper** | POS / business app — sales, customers, invoices, cash flow | Live (thin) | Strengthen demo + write case study |
| 3 | **CogniClick** | AI YouTube thumbnail/title testing | Live | **De-fake** marketing site (fabricated testimonials + placeholder images) |
| 4 | **AudioThought** | Voice recording → structured notes + flowchart. Next.js + Supabase + AssemblyAI | Not live | **Launch** (screenshots already exist) |

Dropped: `desktop-app` (out of positioning, unlaunched), and it is no longer
referenced.

Source repositories for Record Keeper, CogniClick, and AudioThought stay **private**;
the site leads with **live demos + case studies** instead of source links. Every dead
link is removed.

## 6. Structure

### Routes

- `/` — one scrolling thesis.
- `/work/<slug>` — case-study page ×4.
- `/privacy`, `/terms` — kept, restyled to the new system.

Slugs: `bookmygb`, `record-keeper`, `cogniclick`, `audiothought`.

### Home section order

1. **Hero** — the thesis (see §8).
2. **What I do** — the four offerings (§3).
3. **Selected work** — the four projects, order per §5.
4. **About** — credibility block.
5. **How I work** — 3–4 step process.
6. **Contact** — email + LinkedIn.

Nav: Home, Work, About, Contact, plus social icons.

### Case-study template

Every `/work/<slug>` page follows:

1. **Challenge** — the problem the product solves.
2. **Approach** — how it was thought about / structured.
3. **What I built** — key features.
4. **Stack** — real technologies used.
5. **Result & status** — honest product status, scope facts, screenshots.

Authored as **MDX** (one file per project) with frontmatter carrying: title, slug,
one-line summary, status label, stack tags, and image references.

## 7. Visual system

### Color

- **Base (paper)**: `#f7f2eb` and `#fbf8f3`.
- **Ink / accents**:
  - `#264653` slate-teal (primary ink)
  - `#2a9d8f` teal
  - `#e9c46a` maize
  - `#f4a261` sand
  - `#e76f51` terracotta

Warm paper remains the surface; the cool palette is applied as ink, stamps, and data
accents so it reads as print on paper rather than a generic swatch set.

### Typography

- **Display**: Bricolage Grotesque (variable).
- **Body**: Geist (kept).
- **Data / labels / metadata**: IBM Plex Mono, tabular figures.

### Signature element

**Receipts / ledgers / order-tickets.** Expressed through ruled margins, dashed
rules, perforations, stamps, order-ticket numbering, and monospace metadata. This
encodes what is actually sold (business systems) rather than decorating.

### Screenshot frames

Replace the current macOS window chrome. Screenshots are presented as **printed
records**: ruled margins, a stamped label, monospace metadata.

### Iconography

Hugeicons (already configured in `components.json`).

## 8. Hero

A **self-printing order-ticket**: monospace lines feed out, the total line reveals the
positioning, and a stamp lands. This is the single orchestrated animation on the site
and it directly encodes the business-systems idea.

## 9. Motion

- One orchestrated hero moment (the self-printing ticket).
- Subtle scroll reveals on sections and case studies.
- Scattered / ambient effects are cut.
- `prefers-reduced-motion` fully respected.

## 10. Bundled product work

Beyond the website:

1. **Launch BookMyGB** — deploy, seed/demo data, capture screenshots.
2. **Launch AudioThought** — deploy using existing screenshots.
3. **De-fake CogniClick** — remove fabricated testimonials and placeholder
   (`picsum`) images; replace with honest visuals.

## 11. Tech & implementation

- Keep Next.js 16 · React 19 · Tailwind 4 · `motion`. Add MDX for case studies.
- Canonical URL → `hello-ejaz.vercel.app` now; switching to a custom domain later
  should be a one-line change.
- Per-case-study OG images.
- Content lives in MDX files (per project) + existing `data/data.ts` for nav, socials,
  services, and project summaries.

## 12. Quality floor

- Responsive down to mobile.
- Visible keyboard focus.
- Reduced motion respected.
- SEO metadata (title template, description, OpenGraph, Twitter card) accurate and
  pointing at the working canonical URL.
- No dead links anywhere.

## 13. Out of scope

- Starting any new product.
- Public pricing or availability promises.
- A blog / insights section (not now).
- A downloadable CV (About carries the history instead).

---

## Verified contact

- Email: `hello.ejaz@outlook.com`
- LinkedIn: `https://www.linkedin.com/in/hello-ejaz/`
- GitHub: `https://github.com/ejaz-developer`
- X: `https://x.com/helloejazoff`

## Build sequence

1. Design tokens (color, type, spacing) + receipt/ledger primitives.
2. Hero — self-printing ticket (highest-risk piece).
3. Home sections: What I do → Selected work → About → How I work → Contact.
4. MDX pipeline + `/work/<slug>` template + four case studies.
5. Product work: launch BookMyGB, launch AudioThought, de-fake CogniClick.
6. Metadata, OG images, canonical URL, dead-link sweep, quality-floor pass.
