import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { caseStudyOrder } from "@/lib/site";
import type { ProjectStatus } from "@/lib/site";

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  images: CaseStudyImage[];
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
  const slugs = entries
    .filter((entry) => entry.endsWith(".mdx"))
    .map((entry) => entry.replace(/\.mdx$/, ""));

  return slugs.sort((a, b) => {
    const ai = caseStudyOrder.indexOf(a as (typeof caseStudyOrder)[number]);
    const bi = caseStudyOrder.indexOf(b as (typeof caseStudyOrder)[number]);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
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
