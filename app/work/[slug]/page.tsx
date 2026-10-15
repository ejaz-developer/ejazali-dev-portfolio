import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import {
  DashedRule,
  MonoLabel,
  ScreenshotFrame,
  Stamp,
} from "@/components/primitives";
import { getAllSlugs, getCaseStudy } from "@/lib/mdx";
import { siteName } from "@/lib/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) return {};

  const { frontmatter } = study;
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: "article",
      title: `${frontmatter.title} — ${siteName}`,
      description: frontmatter.summary,
      url: `/work/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${frontmatter.title} — ${siteName}`,
      description: frontmatter.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  const { frontmatter, content } = study;
  const isLive = frontmatter.status === "Live";
  const slugs = await getAllSlugs();
  const position = slugs.indexOf(slug) + 1;

  return (
    <div className="px-5 pt-28 pb-24">
      <div className="mx-auto max-w-[820px]">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-terracotta"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>

        <header className="mt-8">
          <MonoLabel>
            Case study — {String(position).padStart(2, "0")} /{" "}
            {String(slugs.length).padStart(2, "0")}
          </MonoLabel>

          <h1 className="mt-4 font-display text-[36px] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[46px]">
            {frontmatter.title}
          </h1>

          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink/80">
            {frontmatter.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4">
            <Stamp tone={isLive ? "teal" : "terracotta"}>
              {frontmatter.status}
            </Stamp>

            {frontmatter.demo ? (
              <a
                href={frontmatter.demo}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium text-ink"
              >
                View live demo
                <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>

          <DashedRule className="mt-9" />

          <div className="mt-6 flex flex-wrap gap-2">
            {frontmatter.stack.map((item) => (
              <span
                key={item}
                className="rounded-[2px] border border-rule bg-paper-2 px-2.5 py-1 font-mono text-[11px] tracking-[0.08em] text-ink/70 uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        {frontmatter.images.length > 0 ? (
          <div className="mt-12 space-y-8">
            {frontmatter.images.map((src, index) => (
              <ScreenshotFrame
                key={src}
                label={frontmatter.title}
                ticket={`FIG. ${String(index + 1).padStart(2, "0")}`}
                caption={frontmatter.imageAlts[index]}
              >
                <div className="relative aspect-[16/9] w-full bg-paper">
                  <Image
                    src={src}
                    alt={frontmatter.imageAlts[index] ?? `${frontmatter.title} screenshot`}
                    fill
                    sizes="(max-width: 820px) 100vw, 760px"
                    className="object-contain"
                  />
                </div>
              </ScreenshotFrame>
            ))}
          </div>
        ) : null}

        <DashedRule className="mt-14" />

        <article className="mt-10">{content}</article>
      </div>
    </div>
  );
}
