import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";
import { isPublished, byDateDesc } from "../lib/blog";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).filter(isPublished).sort(byDateDesc);

  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.id}`,
      pubDate: post.data.date,
    })),
    customData: "<language>en</language>",
  });
}
