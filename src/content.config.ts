import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["finished", "in-progress"]),
    stack: z.array(z.string()),
    liveUrl: z.url().optional(),
    date: z.coerce.date(),
  }),
});

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    /** ~150 chars. Doubles as meta description, schema description, and llms.txt summary. */
    description: z.string().max(200),
    date: z.coerce.date(),
    /** Set when the post is materially revised after `date`. */
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    /** Optional canonical override (e.g. cross-posts on Medium/Dev.to). */
    canonical: z.url().optional(),
    /** Optional OG image override; falls back to the site default. */
    ogImage: z.string().optional(),
    /** FAQ section — wired to FAQPage JSON-LD. 3–4 items per the post contract. */
    faq: z.array(faqItem).min(1),
  }),
});

export const collections = { work, blog };
