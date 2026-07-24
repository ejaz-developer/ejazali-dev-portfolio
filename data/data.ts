import { Github, Twitter } from "@/components/icons";
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
    period: "2024 - Present",
    description:
      "Building scalable web applications from front to back using modern technologies. I work on everything from creating responsive user interfaces to designing APIs, managing databases, and deploying production-ready applications.",
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
    label: "Years of Experience",
    value: "3+",
    icon: "Sparkles",
    color: "text-indigo-500",
  },
  {
    label: "Projects Built",
    value: "15+",
    icon: "Rocket",
    color: "text-purple-500",
  },
  {
    label: "Technologies",
    value: "10+",
    icon: "Palette",
    color: "text-pink-500",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "Git",
      "Supabase",
      "Firebase",
    ],
  },
];

export const services = [
  {
    name: "Web Development",
    description:
      "I build fast, responsive, and modern websites using React, Next.js, and the MERN stack.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with React Native that deliver a smooth experience on both Android and iOS.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "UI Development",
    description:
      "Clean, responsive, and accessible interfaces with attention to detail, usability, and performance.",
    icon: PenTool,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Backend Development",
    description:
      "Secure APIs, authentication systems, and scalable backend services built with Node.js, Express, and MongoDB.",
    icon: Server,
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "SEO & Performance",
    description:
      "Optimizing websites for faster load times, better search rankings, and an improved user experience.",
    icon: Search,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Performance Optimization",
    description:
      "Improving Core Web Vitals, reducing load times, and making applications feel fast and reliable.",
    icon: Gauge,
    color: "from-yellow-500 to-orange-500",
  },
];

export const projects = [
  {
    title: "BookMyGB",
    description:
      "An online bus booking platform that makes traveling across Gilgit-Baltistan simple and convenient. Passengers can search routes, reserve seats, and manage bookings, while operators can efficiently handle schedules and reservations.",
    preview: "https://bookmygb.vercel.app/",
    github: "https://github.com/ejaz-developer/bookmygb",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
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

export const contactInfo = [
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
    href: "#",
  },
];
