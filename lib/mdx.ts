import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

export type CaseStudyStatus = "Live" | "In development";

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  summary: string;
  status: CaseStudyStatus;
  stack: string[];
  images: string[];
  imageAlts: string[];
  demo?: string;
}

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  content: ReactElement;
}

const contentDir = path.join(process.cwd(), "content", "work");

const slugPattern = /^[a-z0-9-]+$/;

export async function getAllSlugs(): Promise<string[]> {
  const entries = await readdir(contentDir);
  return entries
    .filter((entry) => entry.endsWith(".mdx"))
    .map((entry) => entry.replace(/\.mdx$/, ""))
    .sort();
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  if (!slugPattern.test(slug)) return null;

  let source: string;
  try {
    source = await readFile(path.join(contentDir, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }

  const { content, frontmatter } = await compileMDX<CaseStudyFrontmatter>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  if (frontmatter.slug !== slug) return null;

  return { frontmatter, content };
}
