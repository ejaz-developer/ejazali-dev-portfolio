import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body>
        <div className="relative z-10">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
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
