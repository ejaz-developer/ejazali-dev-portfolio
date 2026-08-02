import { Github, Twitter } from "@/components/icons";
import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  Globe,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Search,
  Server,
  Smartphone,
} from "lucide-react";

export const navLinks = [
  {
    name: "Work",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
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
    label: "X (Twitter)",
  },
  {
    icon: Mail,
    href: "mailto:hello.ejaz@outlook.com",
    label: "Email",
  },
];

export const experience = [
  {
    company: "CodeHub Skardu",
    role: "Full Stack Developer",
    period: "2024–2025",
    description:
      "Built scalable web applications end to end: interfaces, APIs, databases, and production deployments.",
    skills: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

export const statsData = [
  {
    label: "Years of experience",
    value: "3.5+",
  },
  {
    label: "Projects shipped",
    value: "15",
  },
  {
    label: "Technologies used",
    value: "12+",
  },
];

export const services = [
  {
    name: "Web Development",
    description: "Fast, responsive apps built with React, Next.js, and the MERN stack.",
    icon: Globe,
  },
  {
    name: "Mobile App Development",
    description: "Cross-platform apps for Android and iOS with React Native.",
    icon: Smartphone,
  },
  {
    name: "UI Development",
    description: "Interfaces that are clean, accessible, and easy to use.",
    icon: PenTool,
  },
  {
    name: "Backend Development",
    description: "Secure APIs, authentication, and scalable services with Node.js, MongoDB, and PostgreSQL.",
    icon: Server,
  },
  {
    name: "SEO & Performance",
    description: "Faster load times and better search rankings on every device.",
    icon: Search,
  },
  {
    name: "Performance Optimization",
    description: "Stronger Core Web Vitals and apps that feel instant.",
    icon: Gauge,
  },
];

interface Project {
  title: string;
  description: string;
  preview?: string;
  github: string;
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AudioThought",
    description:
      "Turns rambling voice recordings into structured text and actionable tasks.",
    github: "https://github.com/ejaz-developer/AudioThought",
    tags: ["Next.js", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    title: "Record Keeper POS",
    description:
      "A POS system for small businesses. Manages products, inventory, and daily sales through one dashboard built for speed.",
    preview: "https://recordkeeper-pink.vercel.app/",
    github: "https://github.com/ejaz-developer/recordkeeper",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    featured: false,
  },
  {
    title: "CogniClick",
    description:
      "Helps YouTube creators test thumbnails and titles before publishing, so they can predict click-through rate instead of guessing.",
    preview: "https://cogniclick-three.vercel.app/",
    github: "https://github.com/ejaz-developer/cogniclick",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],
    featured: true,
  },
];

interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "hello.ejaz@outlook.com",
    href: "mailto:hello.ejaz@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 311 5694918",
    href: "tel:+923115694918",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Skardu, Gilgit-Baltistan, Pakistan",
  },
];
