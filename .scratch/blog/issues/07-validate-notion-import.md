# 07 — Validate import:notion on a real Notion export

Status: needs-info

## Context

`scripts/import-notion.mjs` converts a Notion markdown export into a clean MDX
draft (strips the page-property block, cleans callouts, rewrites image paths,
copies assets, emits a frontmatter stub). It has been tested against a
synthetic export, not a real one. Notion's export format varies (callouts,
toggles, tables, synced blocks, nested pages).

## Work

- Ejaz exports one real page from Notion (`bun run import:notion <folder>`).
- Compare the output against expectations: property block stripped, callouts
  clean, images copied and paths rewritten, no leftover Notion artifacts.
- Fix any conversion gaps the real export reveals (tables and toggles are the
  likely culprits).

## Blocked on

- A real Notion export from Ejaz (the launch posts were drafted directly as
  MDX, so this was not needed for launch).
