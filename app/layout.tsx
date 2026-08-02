import type { Metadata } from "next";
import {
  Instrument_Serif,
  Inter,
  Montserrat,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://helloejaz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "helloejaz — Full Stack Developer",
    template: "%s · helloejaz",
  },
  description:
    "Full-stack developer based in Skardu, Pakistan. Building booking platforms, POS systems, and AI tools with React, Next.js, and TypeScript.",
  keywords: [
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Skardu",
    "Pakistan",
  ],
  authors: [{ name: "Ejaz Ali", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "helloejaz",
    title: "helloejaz — Full Stack Developer",
    description:
      "Full-stack developer based in Skardu, Pakistan. Building booking platforms, POS systems, and AI tools.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "helloejaz — full-stack developer from Skardu",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "helloejaz — Full Stack Developer",
    description:
      "Full-stack developer based in Skardu, Pakistan. Building booking platforms, POS systems, and AI tools.",
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
      className={cn(
        "antialiased",
        instrumentSerif.variable,
        montserrat.variable,
        geistMono.variable,
        inter.variable
      )}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <TooltipProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
