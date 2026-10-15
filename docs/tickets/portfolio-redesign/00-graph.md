# Portfolio Redesign — task graph

Source spec: `docs/specs/portfolio-redesign.md` (authoritative; read it first).

Integration branch: `feat/portfolio-redesign`.

## Graph

```
T1 Foundation ──┬── T2 Hero ─────────┐
                ├── T3 Home sections ─┼── T5 SEO / OG / quality
                └── T4 Case studies ──┘
```

- **T1** blocks everything (tokens, fonts, primitives, site config).
- **T2, T3, T4** are independent once T1 lands; run in parallel.
- **T5** depends on T2, T3, T4.

## Shared agreements (do not renegotiate)

- Canonical origin: `https://hello-ejaz.vercel.app` (old `helloejaz.dev` does not resolve).
- Project slugs / order: `bookmygb`, `record-keeper`, `cogniclick`, `audiothought`.
- Status labels are exactly `Live` or `In development`.
- Contact surface: email + LinkedIn only (`hello.ejaz@outlook.com`,
  `https://www.linkedin.com/in/hello-ejaz/`).
- Stack: Next.js 16 · React 19 · Tailwind 4 · `motion`. MDX added by T4.
- No fabricated metrics, testimonials, or placeholder images. Substanciated facts only.
- No dead links.

## Bundled product work (spec §10) — NOT in this repo

Launch BookMyGB, launch AudioThought, and de-fake the CogniClick marketing site all
live in **separate private repositories**. They cannot be actioned here. The site
must instead present those projects honestly (status labels, scope facts, real
screenshots). Recorded as an explicit non-goal in the final report.
