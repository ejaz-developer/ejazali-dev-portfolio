import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Ejaz Ali - Full Stack MERN Developer | Portfolio",
  description:
    "Ejaz Ali is a Full Stack MERN Developer crafting scalable, pixel-perfect web experiences. Based in Skardu, Pakistan with 5+ years of experience.",
  keywords: [
    "Ejaz Ali,full stack developer,MERN developer,Next.js developer,web developer Pakistan,portfolio,React developer,Node.js,TypeScript,Skardu,Codehub Skardu",
  ],
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
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        ebGaramond.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
