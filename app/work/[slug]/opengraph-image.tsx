import { ImageResponse } from "next/og";
import { getAllSlugs, getCaseStudy } from "@/lib/mdx";
import { siteName } from "@/lib/site";
import {
  ogContentType,
  ogPalette,
  OgFrame,
  ogSize,
  ogStatusInk,
} from "@/lib/og";

export const alt = "Case study — Ejaz Ali";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);

  const title = study?.frontmatter.title ?? siteName;
  const status = study?.frontmatter.status ?? "Case study";
  const stack = (study?.frontmatter.stack ?? []).slice(0, 4).join("  ·  ");
  const statusInk = study ? ogStatusInk(study.frontmatter.status) : ogPalette.muted;

  return new ImageResponse(
    (
      <OgFrame headerRight="Case study" footerLeft={stack}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.04,
              letterSpacing: -2,
              fontWeight: 700,
            }}
          >
            {title}
          </div>

          <div style={{ display: "flex", marginTop: 42 }}>
            <span
              style={{
                display: "flex",
                fontSize: 26,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: statusInk,
                backgroundColor: ogPalette.paper2,
                border: `3px solid ${statusInk}`,
                borderRadius: 4,
                padding: "12px 24px",
              }}
            >
              {status}
            </span>
          </div>
        </div>
      </OgFrame>
    ),
    { ...size }
  );
}
