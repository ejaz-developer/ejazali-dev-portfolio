# T2 — Hero: the self-printing order-ticket

Spec refs: §8 (Hero), §9 (Motion), §3 (Positioning), §12 (Quality floor).
Depends on: T1.

## Goal

Replace `components/sections/hero.tsx` with a **self-printing order-ticket**: monospace
lines feed out one after another, the total line reveals the positioning statement, and
a stamp lands on it. This is the single orchestrated animation on the site (§9) and it
directly encodes the "business systems / order tickets" idea.

## Deliverables

### `components/sections/hero.tsx` (client component, `"use client"`)

Composition:

1. A thin mono kicker / `ticket-no` line (e.g. `ORDER · 001`), `<Stamp>` or stamp
   treatment optional.
2. The **printing ticket**: a paper card (`--paper-2`) with a ruled left margin, a
   dashed rule at the top, and a `Perforation` bottom edge. Monospace lines print out
   in sequence (`motion` staggered reveal, or a typewriter that reveals line by line):
   - itemised lines that read like an order: e.g.
     `01  business websites ......... brings customers`
     `02  booking platforms ......... removes manual work`
     `03  web tools for SaaS ....... built fast`
   - a dashed rule
   - the **total** line that reveals the positioning. Total value text:
     `turning requirements into working software`.
3. A **stamp lands** after the total: a `<Stamp>` that animates in (scale + slight
   rotation + opacity) with short delay, e.g. `ACCEPTED` / `IN PRODUCTION`.
4. A concise H1 thesis (visible, not only inside the ticket) — must communicate the
   freelance offer for booking platforms & business web apps. Keep it short and
   specific to §3; do not reuse the old "I design, build, and ship web products" line.
5. Primary CTA to contact (email) + secondary to `#work`, using the new button style.

### Motion (§9)

- This is the **one** orchestrated moment. Use `motion` variants with stagger; keep it
  under ~2.5s total.
- Respect `prefers-reduced-motion`: when reduced, render the ticket **fully printed**
  with the stamp already landed — no animation. Use motion's `useReducedMotion()`.
- No ambient/scroll effects in the hero.

### Layout

- Full-width single-column within the site's `max-w-[1000px]` grid; must be responsive
  to mobile (ticket lines wrap or shrink; the ticket does not overflow horizontally).
- Uses only T1 tokens/primitives and existing `components/icons.tsx`.
- Section keeps `id="hero"` so nav anchors still work.

## Acceptance

- `bun run build` green; `bun run lint` clean.
- Keyboard focus visible on both CTAs; CTAs have accessible names.
- With `prefers-reduced-motion: reduce`, the ticket is fully rendered and static.
- No layout shift that pushes content off-screen on 360px width.
- Text hierarchy: exactly one `<h1>` on the page (this hero owns it).

## Constraints

- Touch only `components/sections/hero.tsx` (and, if genuinely needed, add a small
  hero-local helper alongside it). Do **not** edit `app/page.tsx`, `data/data.ts`,
  navbar, footer, or globals — T3 owns those; T1 owns globals.
- Do not add dependencies.

## Verify

```
bun run lint && bun run build
```
