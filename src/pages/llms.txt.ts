import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";
import { isPublished, byDateDesc, absoluteUrl } from "../lib/blog";

/**
 * llms.txt — a links-only index so AI answer engines can discover and cite
 * posts. Intentionally NOT a full-text dump: the full HTML is already crawlable
 * at each canonical URL, and an inlined copy would drift out of sync.
 */
export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).filter(isPublished).sort(byDateDesc);

  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Full-stack developer. I build web apps and MVPs that replace spreadsheets, copy-paste, and manual workflows.`,
    "",
    `Site: ${absoluteUrl("/", context.site?.href)}`,
    `Contact: ${absoluteUrl("/#contact", context.site?.href)}`,
    `Work: ${absoluteUrl("/work", context.site?.href)}`,
    "",
    "## Blog",
    "",
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${absoluteUrl(`/blog/${post.id}`, context.site?.href)}): ${post.data.description}`
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
