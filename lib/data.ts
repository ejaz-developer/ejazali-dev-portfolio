import { Github, Linkedin, Twitter } from "@/components/icons";
import {
  Gauge,
  Globe,
  Mail,
  MapPin,
  Palette,
  Phone,
  Search,
  Server,
  Smartphone,
} from "lucide-react";

export const navLinks = [
  {
    name: "Work",
    href: "#work",
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
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ejaz-developer/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/ejaz-developer", label: "GitHub" },
  {
    icon: Twitter,
    href: "https://twitter.com/ejazdeveloper",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:devpro.ejazali34@gmail.com",
    label: "Email",
  },
];

export const experience = [
  {
    company: "CodeHub Skardu",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description:
      "Leading the development of high-performance web applications, specializing in Next.js, TypeScript, and scalable MERN stack architectures. Architecting end-to-end solutions from UI/UX design to cloud deployment.",
    skills: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
  },
  {
    company: "CodeHub Skardu",
    role: "Frontend Developer",
    period: "2022 - 2023",
    description:
      "Collaborated on building interactive and responsive user interfaces for tourism and event platforms. Optimized web performance and implemented complex animations using Framer Motion to enhance user delight.",
    skills: ["React", "JavaScript", "Framer Motion", "REST APIs", "Redux"],
  },
];

export const statsData = [
  {
    label: "Years Experience",
    value: "3+",
    icon: "Sparkles",
    color: "text-indigo-500",
  },
  {
    label: "Projects Completed",
    value: "10+",
    icon: "Rocket",
    color: "text-purple-500",
  },
  {
    label: "Technologies",
    value: "10+",
    icon: "Palette",
    color: "text-pink-500",
    technologies: [
      "MERN",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "Git",
      "Docker",
      "AWS",
      "Firebase",
      "Framer Motion",
    ],
  },
];

export const services = [
  {
    name: "Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies like React, Next.js, and Node.js.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for iOS and Android platforms using React Native.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces and experiences with Figma and Adobe XD.",
    icon: Palette,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "SEO Optimization",
    description:
      "Improving website visibility on search engines through best practices and performance tuning.",
    icon: Search,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Backend Development",
    description:
      "Developing robust server-side applications and APIs with Node.js, Express, and MongoDB.",
    icon: Server,
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Performance Optimization",
    description:
      "Enhancing website speed and performance to deliver exceptional user experiences.",
    icon: Gauge,
    color: "from-yellow-500 to-amber-500",
  },
];

export const projects = [
  {
    title: "Bus Ticketing Web App",
    description:
      "A comprehensive full-stack solution for streamlined bus seat reservations and management in Northern Pakistan.",
    imageSource: "/bookmygb-image.png",
    preview: "https://bookmygb.vercel.app/",
    github: "https://github.com/ejaz-developer/bookmygb",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    featured: true,
  },
  {
    title: "Record Keeper POS",
    description:
      "A cloud-based point-of-sale system for small businesses to manage inventory, sales, and analytics with ease.",
    imageSource: "/recordkeeper-image.png",
    preview: "https://recordkeeper-pink.vercel.app/",
    github: "https://github.com/ejaz-developer/recordkeeper",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    featured: false,
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "devpro.ejazali34@gmail.com",
    href: "mailto:devpro.ejazali34@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+923115694918",
    href: "tel:+923115694918",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Skardu, Pakistan",
    href: "#",
  },
];
