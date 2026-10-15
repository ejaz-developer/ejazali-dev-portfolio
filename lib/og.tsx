import type { CSSProperties, ReactNode } from "react";
import { siteName, siteUrl, statusTone } from "@/lib/site";
import type { ProjectStatus } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * The §7 palette, as literals — `ImageResponse` cannot read CSS variables.
 */
export const ogPalette = {
  paper: "#f7f2eb",
  paper2: "#fbf8f3",
  ink: "#264653",
  muted: "#7a8b90",
  teal: "#2a9d8f",
  maize: "#e9c46a",
  sand: "#f4a261",
  terracotta: "#e76f51",
} as const;

export function ogStatusInk(status: ProjectStatus): string {
  return statusTone(status) === "teal" ? ogPalette.teal : ogPalette.maize;
}

export const ogHost = siteUrl.replace(/^https?:\/\//, "");

const headerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 22,
  letterSpacing: 5,
  textTransform: "uppercase",
  color: ogPalette.muted,
};

const footerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 22,
  color: ogPalette.muted,
};

/**
 * Shared 1200×630 frame: site name top-left, contextual label top-right,
 * a free-form middle, and the host bottom-right.
 */
export function OgFrame({
  headerRight,
  footerLeft,
  children,
}: {
  headerRight: ReactNode;
  footerLeft: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: ogPalette.paper,
        color: ogPalette.ink,
        padding: "68px 80px",
      }}
    >
      <div style={headerStyle}>
        <span>{siteName}</span>
        <span>{headerRight}</span>
      </div>

      {children}

      <div style={footerStyle}>
        <span>{footerLeft}</span>
        <span>{ogHost}</span>
      </div>
    </div>
  );
}
