import { ImageResponse } from "next/og";
import { getAllSlugs, getCaseStudy } from "@/lib/mdx";
import { siteName, siteUrl } from "@/lib/site";

export const alt = "Case study — Ejaz Ali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paper = "#f7f2eb";
const paper2 = "#fbf8f3";
const ink = "#264653";
const muted = "#7a8b90";
const teal = "#2a9d8f";
const terracotta = "#e76f51";

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
  const host = siteUrl.replace(/^https?:\/\//, "");
  const statusInk = status === "Live" ? teal : terracotta;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: paper,
          color: ink,
          padding: "68px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: muted,
          }}
        >
          <span>{siteName}</span>
          <span>Case study</span>
        </div>

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
                backgroundColor: paper2,
                border: `3px solid ${statusInk}`,
                borderRadius: 4,
                padding: "12px 24px",
              }}
            >
              {status}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: muted,
          }}
        >
          <span>{stack}</span>
          <span>{host}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
