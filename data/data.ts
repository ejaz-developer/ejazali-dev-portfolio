import {
  Github,
  Twitter,
  Mail,
  WindowApp,
  Receipt,
  Chip,
} from "@/components/icons";
import type { IconProps } from "@/components/icons";
import type { ComponentType } from "react";

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ejaz-developer",
    label: "GitHub",
  },
  {
    icon: Twitter,
    href: "https://x.com/helloejazoff",
    label: "X",
  },
  {
    icon: Mail,
    href: "mailto:hello.ejaz@outlook.com",
    label: "Email",
  },
];

export const thingsIBuild: {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}[] = [
  {
    title: "Web applications",
    description:
      "SaaS products, dashboards, internal tools, and business applications.",
    icon: WindowApp,
  },
  {
    title: "Business systems",
    description:
      "POS, booking, inventory, and workflow software built around real business needs.",
    icon: Receipt,
  },
  {
    title: "AI-powered products",
    description:
      "Web applications where AI genuinely improves the product.",
    icon: Chip,
  },
];

export interface Project {
  title: string;
  description: string;
  preview?: string;
  github: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    title: "AudioThought",
    description:
      "Turns rambling voice recordings into structured notes and actionable tasks.",
    github: "https://github.com/ejaz-developer/AudioThought",
    tags: ["Next.js", "TypeScript", "Node.js"],
    image: "/project-images/AudioThought.avif",
    imageAlt:
      "AudioThought interface turning a voice recording into structured notes",
  },
  {
    title: "Record Keeper",
    description:
      "A simple POS system for managing products, inventory, and daily sales.",
    preview: "https://recordkeeper-pink.vercel.app/",
    github: "https://github.com/ejaz-developer/recordkeeper",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project-images/RecordKeeper-.avif",
    imageAlt:
      "Record Keeper point-of-sale screen listing products and daily sales",
  },
  {
    title: "CogniClick",
    description:
      "Helps YouTube creators test thumbnails and titles before publishing instead of relying on guesswork.",
    preview: "https://cogniclick-three.vercel.app/",
    github: "https://github.com/ejaz-developer/cogniclick",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/project-images/CogniClick.avif",
    imageAlt:
      "CogniClick comparing YouTube thumbnail and title variants side by side",
  },
];
