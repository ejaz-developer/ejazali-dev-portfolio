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

export const collections = { work };
