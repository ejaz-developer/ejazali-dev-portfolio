import type { IconProps } from "@/components/icons";
import { WindowApp, Receipt, Chip, Layers } from "@/components/icons";
import type { ComponentType } from "react";
import type { ProjectStatus } from "@/lib/site";

export { socials as socialLinks } from "@/lib/site";

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const whatIDo: {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}[] = [
  {
    title: "Business websites",
    description:
      "Websites that bring in more customers and make it easy to reach you.",
    icon: WindowApp,
  },
  {
    title: "Booking platforms",
    description:
      "Booking systems and business applications that remove manual work.",
    icon: Receipt,
  },
  {
    title: "Web tools for SaaS",
    description:
      "Practical tools for SaaS founders, built fast and built to last.",
    icon: Chip,
  },
  {
    title: "Requirements to software",
    description:
      "From interface to backend, turning requirements into working software.",
    icon: Layers,
  },
];

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  image: string;
  imageAlt: string;
  demo?: string;
  order: number;
}

/**
 * Featured roster in spec §5 order (flagship-first).
 * Only Live projects carry a `demo`; every URL below is known to resolve.
 */
export const projects: Project[] = [
  {
    slug: "bookmygb",
    title: "BookMyGB",
    summary:
      "Ticket booking for Skardu — operator, user, and super-admin roles in one system.",
    status: "In development",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    image: "/project-images/BookMyGB.avif",
    imageAlt:
      "BookMyGB landing page with the headline \"Seamless tickets for the mountains and beyond\" and status badges reading zero operators live and zero seats open",
    order: 1,
  },
  {
    slug: "record-keeper",
    title: "Record Keeper",
    summary:
      "Point-of-sale app for sales, customers, invoices, and cash flow.",
    status: "Live",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project-images/RecordKeeper-.avif",
    imageAlt:
      "Record Keeper point-of-sale screen listing products and daily sales",
    demo: "https://recordkeeper-pink.vercel.app/",
    order: 2,
  },
  {
    slug: "cogniclick",
    title: "CogniClick",
    summary:
      "Test YouTube thumbnails and titles before publishing, instead of guessing.",
    status: "Live",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project-images/CogniClick.avif",
    imageAlt:
      "CogniClick comparing YouTube thumbnail and title variants side by side",
    demo: "https://cogniclick-three.vercel.app/",
    order: 3,
  },
  {
    slug: "audiothought",
    title: "AudioThought",
    summary:
      "Turns voice recordings into structured notes and flowcharts.",
    status: "In development",
    stack: ["Next.js", "TypeScript", "Supabase", "AssemblyAI"],
    image: "/project-images/AudioThought.avif",
    imageAlt:
      "AudioThought interface turning a voice recording into structured notes",
    order: 4,
  },
];

export const howIWork: {
  step: string;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    title: "Understand the problem",
    description:
      "Start with the work behind the software — who does what today, and where it breaks down.",
  },
  {
    step: "02",
    title: "Design the build",
    description:
      "Turn requirements into a scope, a data model, and screens before writing much code.",
  },
  {
    step: "03",
    title: "Build the system",
    description:
      "Interface through to backend and database, in reviewable pieces rather than one big drop.",
  },
  {
    step: "04",
    title: "Ship and hand over",
    description:
      "Deploy, walk through what was built, and leave documentation for what comes next.",
  },
];
