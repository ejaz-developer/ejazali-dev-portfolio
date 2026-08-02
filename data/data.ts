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
    period: "2024 - 2025",
    description:
      "Built scalable web applications from front to back using modern technologies. Worked on everything from responsive user interfaces to APIs, databases, and production deployments.",
    skills: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    company: "CodeHub Skardu",
    role: "Frontend Developer",
    period: "2023 - 2024",
    description:
      "Developed responsive, accessible, and high-performance interfaces for client projects. Worked closely with designers and backend developers to deliver smooth user experiences across different devices.",
    skills: ["React", "JavaScript", "Redux", "Framer Motion", "REST APIs"],
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
    description:
      "Fast, responsive websites and web apps built with React, Next.js, and the MERN stack.",
    icon: Globe,
  },
  {
    name: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with React Native for both Android and iOS.",
    icon: Smartphone,
  },
  {
    name: "UI Development",
    description:
      "Clean, responsive, and accessible interfaces with attention to detail, usability, and performance.",
    icon: PenTool,
  },
  {
    name: "Backend Development",
    description:
      "Secure APIs, authentication systems, and scalable backend services built with Node.js and MongoDB.",
    icon: Server,
  },
  {
    name: "SEO & Performance",
    description:
      "Faster load times, better search rankings, and an improved experience on every device.",
    icon: Search,
  },
  {
    name: "Performance Optimization",
    description:
      "Improving Core Web Vitals and making applications feel fast and reliable.",
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
      "AudioThought is a productivity application that transforms unstructured, rambling voice recordings into polished, structured text and actionable tasks.",
    github: "https://github.com/ejaz-developer/AudioThought",
    tags: ["Next.js", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    title: "Record Keeper POS",
    description:
      "A modern point-of-sale system built for small businesses. It helps manage products, inventory, sales, and daily operations through an intuitive dashboard designed for speed and simplicity.",
    preview: "https://recordkeeper-pink.vercel.app/",
    github: "https://github.com/ejaz-developer/recordkeeper",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    featured: false,
  },
  {
    title: "CogniClick",
    description:
      "An AI-powered platform that helps YouTube creators improve click-through rates by analyzing thumbnails and titles before publishing. It provides actionable insights to help creators make better content decisions.",
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
