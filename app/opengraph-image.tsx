import { ImageResponse } from "next/og";
import { siteName, siteUrl } from "@/lib/site";

export const alt =
  "Ejaz Ali — booking platforms and business web apps for founders and business owners";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const paper = "#f7f2eb";
const paper2 = "#fbf8f3";
const ink = "#264653";
const muted = "#7a8b90";
const teal = "#2a9d8f";

export default function Image() {
  const host = siteUrl.replace(/^https?:\/\//, "");

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
          <span>Web Developer</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              lineHeight: 1.05,
              letterSpacing: -2,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            Booking platforms and business web apps
          </div>

          <div style={{ display: "flex", marginTop: 42 }}>
            <span
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: teal,
                backgroundColor: paper2,
                border: `3px solid ${teal}`,
                borderRadius: 4,
                padding: "12px 24px",
              }}
            >
              Requirements to working software
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
          <span>Freelance web development · remote</span>
          <span>{host}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
