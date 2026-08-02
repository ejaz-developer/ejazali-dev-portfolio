"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  siFirebase,
  siGit,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siRedux,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import LogoLoop from "@/components/reactbits/LogoLoop";
import type { LogoItem } from "@/components/reactbits/LogoLoop";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headlineWords = [
  { text: "Ejaz", accent: false },
  { text: "Ali", accent: false },
];

const techStack = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siMongodb, label: "MongoDB" },
  { icon: siPrisma, label: "Prisma" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siRedux, label: "Redux" },
  { icon: siSupabase, label: "Supabase" },
  { icon: siFirebase, label: "Firebase" },
  { icon: siGit, label: "Git" },
];

function TechIcon({
  icon,
  label,
}: {
  icon: { path: string };
  label: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className="flex items-center text-muted transition-colors duration-300 hover:text-accent"
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
    </span>
  );
}

const techLogos: LogoItem[] = techStack.map(({ icon, label }) => ({
  node: <TechIcon icon={icon} label={label} />,
}));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center px-4 pt-28 pb-12 sm:px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(17,24,39,0.18)]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:24px_24px]"
          />
          <div
            aria-hidden
            className="absolute -top-44 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]"
          />

          <div className="relative px-6 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-3.5 py-1.5">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-accent" />
                    </span>
                    <span className="font-ui text-xs font-medium tracking-tight text-foreground">
                      Open to work
                    </span>
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                  className="mt-8 font-ui text-xs font-medium tracking-[0.22em] text-muted uppercase"
                >
                  Full-stack developer
                </motion.p>

                <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.04] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-7xl">
                  {headlineWords.map((word, i) => (
                    <motion.span
                      key={word.text}
                      className={`inline-block whitespace-pre ${word.accent ? "text-accent italic" : ""}`}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.15 + i * 0.07, ease: EASE }}
                    >
                      {word.text}
                      {i < headlineWords.length - 1 ? " " : ""}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                >
                  I turn requirements into working software. React, Next.js,
                  TypeScript, and Node.js apps that ship fast and hold up under
                  real use.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
                  className="mt-10 flex flex-wrap items-center gap-4"
                >
                  <a href="#projects" className="btn-primary group">
                    See my work
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Say hello
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto w-fit rotate-1 rounded-[2rem] border border-border bg-surface p-3 pb-5 shadow-[0_24px_64px_-24px_rgba(17,24,39,0.25)]">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/my-hero-image.avif"
                      alt="Ejaz Ali, full-stack developer"
                      width={960}
                      height={1080}
                      sizes="(min-width: 1024px) 38vw, 90vw"
                      className="h-auto w-full max-w-80 object-cover sm:max-w-96 lg:max-w-none"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative border-t border-border px-6 py-5 sm:px-10">
            <p className="mb-3 font-ui text-[10px] font-medium tracking-[0.22em] text-muted-2 uppercase">
              Tech I work with
            </p>
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={20}
              gap={48}
              fadeOut
              fadeOutColor="var(--color-surface)"
              className="py-1"
              ariaLabel="Technologies"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
