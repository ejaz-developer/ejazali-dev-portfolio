export const site = {
  name: "Ejaz",
  fullName: "Ejaz",
  tagline: "I build web apps that kill manual work.",
  description:
    "Full-stack developer building business web apps and founder MVPs that replace manual processes. Available for new projects.",
  url: "https://hello-ejaz.vercel.app",
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/ejaz-developer",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hello-ejaz/",
    },
    { id: "x", label: "X", href: "https://x.com/helloejazoff" },
  ],
} as const;

export const skills = [
  { label: "React", icon: "react" },
  { label: "Next.js", icon: "nextjs" },
  { label: "TypeScript", icon: "typescript" },
  { label: "Node.js", icon: "nodejs" },
  { label: "Express", icon: "express" },
  { label: "MongoDB", icon: "mongodb" },
  { label: "Tailwind CSS", icon: "tailwind" },
  { label: "shadcn/ui", icon: "shadcn" },
  { label: "Agentic Engineering", icon: "agentic" },
] as const;

export const services = [
  {
    title: "Founder MVPs",
    description:
      "Zero to launched product: scope, build, and ship a working MVP your first users can pay for.",
  },
  {
    title: "Business Web Apps",
    description:
      "Custom internal tools and web apps that replace spreadsheets, copy-paste, and manual workflows.",
  },
  {
    title: "Process Automation",
    description:
      "Integrations, data pipelines, and background jobs that remove the busywork between your tools.",
  },
  {
    title: "Existing Product Improvement",
    description:
      "Rebuilds, performance work, and feature delivery on apps you already have.",
  },
] as const;
