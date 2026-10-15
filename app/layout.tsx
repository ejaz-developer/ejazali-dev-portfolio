import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://helloejaz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ejaz Ali — Full-stack Web Engineer",
    template: "%s · Ejaz Ali",
  },
  description:
    "Full-stack web engineer building web products from Skardu, Pakistan. Next.js, TypeScript, Node.js, and PostgreSQL.",
  keywords: [
    "full stack engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Ejaz Ali", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ejaz Ali",
    title: "Ejaz Ali — Full-stack Web Engineer",
    description:
      "Full-stack web engineer building web products from Skardu, Pakistan.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ejaz Ali — full-stack web engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ejaz Ali — Full-stack Web Engineer",
    description:
      "Full-stack web engineer building web products from Skardu, Pakistan.",
    creator: "@helloejazoff",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bricolage.variable} ${plexMono.variable}`}
    >
      <body>
        <div className="relative z-10">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-skip focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2.5 focus:text-sm focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
