#!/usr/bin/env bun
/**
 * import:notion — convert a Notion markdown export into a clean blog draft.
 *
 * Usage:
 *   bun run import:notion <export-folder-or-file> [slug]
 *
 * Examples:
 *   bun run import:notion ~/Downloads/My-Article
 *   bun run import:notion ~/Downloads/My-Article.md my-article-slug
 *
 * What it does:
 *   1. Reads the exported .md (Notion exports a folder of .md files + an assets
 *      subfolder of the same name).
 *   2. Strips Notion-specific noise: the page-property block that sits under the
 *      H1, callout "> [!NOTE]" markers, and collapsed-toggle indentation.
 *   3. Copies image assets into src/content/blog/assets/<slug>/ and rewrites the
 *      markdown image paths to point there.
 *   4. Emits src/content/blog/<slug>.md with a frontmatter stub: title, today's
 *      date, draft: true, and empty description/tags/faq for you to fill.
 *
 * The output lands as a DRAFT. Fill in `description` (~150 chars), `faq`
 * (3–4 items), and at least one internal link before flipping `draft: false`.
 * See .scratch/blog/spec.md for the post contract.
 */
import { readFile, writeFile, mkdir, copyFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const [input, maybeSlug] = process.argv.slice(2);

if (!input) {
  console.error("Usage: bun run import:notion <export-folder-or-file> [slug]");
  process.exit(1);
}

// Resolve the source .md file (accept a folder or a direct .md path).
let sourceFile = input;
let sourceDir = path.dirname(input);
if (existsSync(input) && (await stat(input)).isDirectory()) {
  const mds = (await readdir(input)).filter((f) => f.endsWith(".md"));
  if (mds.length === 0) {
    console.error(`No .md file found inside ${input}`);
    process.exit(1);
  }
  sourceFile = path.join(input, mds[0]);
  sourceDir = input;
}

const raw = await readFile(sourceFile, "utf8");

// Slug: explicit > first H1 > filename.
const h1Match = raw.match(/^#\s+(.+)$/m);
const title = h1Match ? h1Match[1].trim() : path.basename(sourceFile, ".md");
const slug =
  maybeSlug ??
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

if (!slug) {
  console.error("Could not derive a slug; pass one explicitly.");
  process.exit(1);
}

const outDir = "src/content/blog";
const assetOutDir = path.join(outDir, "assets", slug);
await mkdir(outDir, { recursive: true });

// ---- Body cleanup ---------------------------------------------------------

let body = raw;

// Drop the Notion page-property block: lines of `Key\nValue` pairs that sit
// between the H1 and the first blank-line-separated content block. Heuristic:
// remove short key/value lines directly under the title that aren't markdown.
body = body.replace(/^(#\s+.+\n)((?:\s*[^\s#>*-][^\n]*\n){2,})/m, (match, heading) => {
  // Only strip if it looks like a property table (no markdown syntax present).
  const block = match.slice(heading.length);
  const looksLikeProperties = !/(\*\*|__|\[|\(|^\s*[-*]\s|^#{1,6}\s|^\s*>)/m.test(block);
  return looksLikeProperties ? heading : match;
});

// Callouts: Notion exports "> [!NOTE] text" (or other variants) → blockquote.
body = body.replace(/^>\s*\[![A-Z]+\]\s*/gm, "> ");

// Collapse toggle/indentation noise: Notion wraps toggled content in extra
// indentation that renders as code blocks. This is best-effort — review output.
// (Left mostly intact; only trailing whitespace normalized.)
body = body
  .split("\n")
  .map((line) => line.replace(/\s+$/, ""))
  .join("\n");

// ---- Asset handling -------------------------------------------------------

const assetDirCandidates = [
  path.join(sourceDir, path.basename(sourceFile, ".md")),
  sourceDir,
];
const copiedAssetFiles = [];

// Rewrite image paths: ![alt](<relative-path>) → ![alt](assets/<slug>/<file>)
body = body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
  if (/^(https?:|data:)/.test(src)) return match; // remote URLs pass through
  const fileName = path.basename(decodeURIComponent(src));
  for (const dir of assetDirCandidates) {
    const full = path.join(dir, decodeURIComponent(src));
    if (existsSync(full)) {
      copiedAssetFiles.push({ full, fileName });
      return `![${alt}](./assets/${slug}/${fileName})`;
    }
  }
  // Fallback: leave the path, warn so the author fixes it.
  console.warn(`  ! image not found, leaving path as-is: ${src}`);
  return match;
});

// Copy the assets we found, now that we know how many there are.
if (copiedAssetFiles.length > 0) {
  await mkdir(assetOutDir, { recursive: true });
  for (const { full, fileName } of copiedAssetFiles) {
    await copyFile(full, path.join(assetOutDir, fileName));
  }
}
const copiedAssets = copiedAssetFiles.length;

// ---- Frontmatter stub -----------------------------------------------------

const today = new Date().toISOString().slice(0, 10);
const frontmatter = [
  "---",
  `title: "${title.replace(/"/g, '\\"')}"`,
  `description: ""`, // ~150 chars — required before publish
  `date: ${today}`,
  `tags: []`,
  `draft: true`, // flip to false when ready — excluded from listing/feed/llms.txt until then
  `faq:`,
  `  - question: ""`,
  `    answer: ""`,
  `  - question: ""`,
  `    answer: ""`,
  `  - question: ""`,
  `    answer: ""`,
  "---",
  "",
]
  .join("\n");

const outFile = path.join(outDir, `${slug}.md`);
await writeFile(outFile, frontmatter + body.trim() + "\n");

console.log(`✓ Draft written to ${outFile}`);
if (copiedAssets > 0) console.log(`✓ Copied ${copiedAssets} asset(s) to ${assetOutDir}/`);
console.log("");
console.log("Next steps before publishing:");
console.log("  1. Fill `description` (~150 chars).");
console.log("  2. Fill 3–4 `faq` question/answer pairs.");
console.log("  3. Open with a direct answer (3–4 sentences).");
console.log("  4. Add ≥1 internal link to / or /#services.");
console.log("  5. Flip `draft: false`.");
