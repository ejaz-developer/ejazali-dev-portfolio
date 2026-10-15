import { ImageResponse } from "next/og";
import { ogContentType, ogPalette, OgFrame, ogSize } from "@/lib/og";

export const alt =
  "Ejaz Ali — booking platforms and business web apps for founders and business owners";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return new ImageResponse(
    (
      <OgFrame
        headerRight="Web Developer"
        footerLeft="Freelance web development · remote"
      >
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
                color: ogPalette.teal,
                backgroundColor: ogPalette.paper2,
                border: `3px solid ${ogPalette.teal}`,
                borderRadius: 4,
                padding: "12px 24px",
              }}
            >
              Requirements to working software
            </span>
          </div>
        </div>
      </OgFrame>
    ),
    { ...size }
  );
}
