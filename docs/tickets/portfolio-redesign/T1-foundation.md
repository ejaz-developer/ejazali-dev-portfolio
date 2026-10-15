# T1 — Foundation: design tokens, type, receipt primitives, site config

Spec refs: §7 (Visual system), §11 (Tech), §12 (Quality floor).

## Goal

Replace the warm-charcoal/macOS-frosted system with the **paper + print** system in
§7, and expose shared primitives so the Hero, home sections, and case studies can be
built without re-defining them. No consumer components are rewritten by this ticket —
it only adds the foundation.

## Deliverables

### 1. `app/globals.css` — tokens

Keep the existing `@theme inline` + `:root` structure. Define and map:

- Paper surfaces: `--paper: #f7f2eb`, `--paper-2: #fbf8f3`.
- Ink / accents: `--ink: #264653`, `--teal: #2a9d8f`, `--maize: #e9c46a`,
  `--sand: #f4a261`, `--terracotta: #e76f51`.
- Derived: `--ink-soft` (ink at ~70% / a muted ink), `--rule` (hairline derived from
  ink), `--muted` (ink mixed toward paper), `--muted-2`.
- Map them into `@theme inline` so Tailwind utilities exist:
  `--color-paper`, `--color-paper-2`, `--color-ink`, `--color-teal`, `--color-maize`,
  `--color-sand`, `--color-terracotta`, `--color-rule`, `--color-muted`,
  `--color-muted-2`, plus `--color-background`, `--color-foreground`,
  `--color-border`, `--color-accent`.
- **Backwards compatibility is required**: the current components (until T3 rewrites
  them) use `text-foreground`, `text-muted`, `text-muted-2`, `text-accent`,
  `text-sage-ink`, `bg-sage-soft`, `border-border`, `text-background`. Keep those
  theme mappings defined (aliasing sage-ink→ink, accent→terracotta, etc.) so the build
  and existing pages still render. `bun run build` must stay green after this ticket.
- Body: paper background (no radial washes, no fixed grain layer / no frost). Remove
  `body::before` grain and the radial gradient background. Keep `::selection`,
  `:focus-visible`, `prefers-reduced-motion` block, and the `a:active` feedback.
- `--font-sans` → Geist var, `--font-display` → Bricolage Grotesque var,
  `--font-mono` → IBM Plex Mono var.
- Delete the macOS-frosted primitives (`.panel`, `.window`, `.window-bar`,
  `.window-title`, `.tl*`, `.window-hover`, `.seg`, `.tag`, `.btn-solid`) **only if**
  nothing still references them; otherwise leave them for T3 to remove. Prefer leaving
  them in place (they are inert CSS) to keep this ticket additive and conflict-free.

### 2. `app/globals.css` — receipt / ledger primitives (§7 signature element)

Add documented utility classes, all print-on-paper, all driven by the tokens above:

- `.rule-left` / `.rule-right` — a single ruled margin line (1px ink hairline).
- `.rule-dashed` — horizontal dashed rule (dashes from ink/rule).
- `.perforation` — a torn/perforated edge (repeating dashed mask or radial dots).
- `.stamp` — rotated, outlined stamp label (terracotta or teal ink, uppercase, mono,
  a subtle double border).
- `.ledger` / `.ledger-row` — dot-leader rows: label left, value right, leader dots
  between. Tabular figures.
- `.mono-label` — uppercase IBM Plex Mono, letter-spacing, small, muted ink.
- `.ticket-no` — dotted/slashed order-ticket number, mono.
- `.screenshot-frame` — the replacement for macOS window chrome: a bordered paper
  card with a ruled margin, a small stamped label area, and a mono caption slot.
- `.link-underline` and `.btn-solid` should be **removed or re-skinned** to the new
  palette if kept. Prefer re-skin: `btn-solid` = solid ink button with paper text.

Also add `font-variant-numeric: tabular-nums` support (a `.tnum` helper).

### 3. `app/layout.tsx` — fonts

- Add `Bricolage_Grotesque` (variable, `--font-bricolage`) and `IBM_Plex_Mono`
  (weights 400/500, `--font-mono`). Keep `Geist`.
- Remove `Instrument_Serif` (no longer used).
- Wire all variables onto `<html className=...>`.
- Do **not** change the `metadata` block here (T5 owns it).
- Keep the existing skip-link + Navbar/Footer/main structure untouched.

### 4. `lib/site.ts` — single source of truth for site-level constants

Export:
- `siteUrl = "https://hello-ejaz.vercel.app"` (comment: one-line change to swap domain).
- `siteName`, `siteTitle`, `siteDescription`, `siteTagline`.
- `contact = { email, linkedin }`.
- `socials` array (`{ label, href, icon }`) for email, linkedin, github, x — using
  icons from `components/icons.tsx`. GitHub `https://github.com/ejaz-developer`,
  X `https://x.com/helloejazoff`.

### 5. `components/primitives.tsx` — shared React primitives

Small, typed, server-safe components built on the CSS classes. At minimum:

- `Stamp({ children, tone })` → `.stamp`.
- `MonoLabel({ children })` → `.mono-label`.
- `DashedRule()` → `.rule-dashed`.
- `Perforation()` → `.perforation`.
- `LedgerRow({ label, value, href? })` → `.ledger-row`.
- `ScreenshotFrame({ label, caption, children })` → `.screenshot-frame` wrapper with a
  slot for an `<Image>`/figure and a stamped label + mono caption.
- `TicketNo({ value })`.

Export everything from this one file. Do not yet wire them into sections.

### 6. `components/icons.tsx`

Add any missing stroke icons needed later and keep the existing 1.5-weight `Stroke`
convention. Add `Linkedin` already exists; ensure `Mail`, `Github`, `Twitter` exist
(they do). Add `ArrowRight`, `ArrowDown`, and a `Sun`/`Moon` only if trivially useful —
otherwise skip.

## Acceptance

- `bun run build` green; `bun run lint` clean.
- `:root` contains every token in §7.1 exactly (`#f7f2eb`, `#fbf8f3`, `#264653`,
  `#2a9d8f`, `#e9c46a`, `#f4a261`, `#e76f51`).
- Fonts: Bricolage Grotesque (display), Geist (body), IBM Plex Mono (data) all load.
- `lib/site.ts` and `components/primitives.tsx` exist and typecheck.
- No new runtime dependency added.

## Constraints

- Do not rewrite navbar/footer/sections/data — T3 owns those.
- Do not touch `next.config.ts` / `package.json` — T4 owns those.
- Keep everything additive and build-green; intermediate visual degradation of the old
  sections is acceptable.

## Verify

```
bun run lint && bun run build
```
