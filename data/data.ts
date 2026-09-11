import { Github, Twitter } from "@/components/icons";
import { Mail, Globe, Briefcase, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

export const thingsIBuild: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Web applications",
    description:
      "SaaS products, dashboards, internal tools, and business applications.",
    icon: Globe,
  },
  {
    title: "Business systems",
    description:
      "POS, booking, inventory, and workflow software built around real business needs.",
    icon: Briefcase,
  },
  {
    title: "AI-powered products",
    description:
      "Web applications where AI genuinely improves the product.",
    icon: Sparkles,
  },
];

export interface Project {
  title: string;
  description: string;
  preview?: string;
  github: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "AudioThought",
    description:
      "Turns rambling voice recordings into structured notes and actionable tasks.",
    github: "https://github.com/ejaz-developer/AudioThought",
    tags: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "Record Keeper",
    description:
      "A simple POS system for managing products, inventory, and daily sales.",
    preview: "https://recordkeeper-pink.vercel.app/",
    github: "https://github.com/ejaz-developer/recordkeeper",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    title: "CogniClick",
    description:
      "Helps YouTube creators test thumbnails and titles before publishing instead of relying on guesswork.",
    preview: "https://cogniclick-three.vercel.app/",
    github: "https://github.com/ejaz-developer/cogniclick",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
];

export const experience = [
  {
    role: "Full-stack Developer",
    company: "CodeHub Skardu",
    period: "2024–2025",
    description:
      "Built and shipped web applications across the frontend, backend, database, and deployment stack.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
];
