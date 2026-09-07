import type { Metadata } from "next";
import { Instrument_Serif, Inter, Montserrat, Geist_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
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
    default: "Ejaz Ali — Full Stack Developer",
    template: "%s · Ejaz Ali",
  },
  description:
    "Full-stack developer building software that ships. React, Next.js, TypeScript, and Node.js apps that hold up under real use.",
  keywords: [
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Ejaz Ali", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ejaz Ali",
    title: "Ejaz Ali — Full Stack Developer",
    description:
      "Full-stack developer building software that ships. React, Next.js, TypeScript, and Node.js apps that hold up under real use.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ejaz Ali — full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ejaz Ali — Full Stack Developer",
    description:
      "Full-stack developer building software that ships. React, Next.js, TypeScript, and Node.js apps that hold up under real use.",
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
        {/* THESIS: A field guide to shipped software, refusing the floating-card portfolio default.
        OWN-WORLD: Chalk paper, ink typography, thin rules, and an iridescent signal band as the only color language.
        STORY: Visitors see the work doing its job, understand the full-stack range behind it, and know how to start a conversation.
        FIRST VIEWPORT: A project-led statement sits left of the portrait, with the first proof image and primary work action visible below.
        FORM: Editorial observation sheet, position 5, seed ceae1f94. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
        <div className="relative z-10">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
          >
            Skip to content
          </a>
          <ReactLenis root options={{ anchors: true, lerp: 0.09 }}>
            <TooltipProvider>
              <Navbar />
              <main id="main">{children}</main>
              <Footer />
            </TooltipProvider>
          </ReactLenis>
        </div>
      </body>
    </html>
  );
}
