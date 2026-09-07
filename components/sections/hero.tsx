"use client";

import type { LogoItem } from "@/components/reactbits/LogoLoop";
import LogoLoop from "@/components/reactbits/LogoLoop";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
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

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

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

function TechIcon({ icon, label }: { icon: { path: string }; label: string }) {
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
      className="relative overflow-hidden px-5 pt-32 pb-0 sm:px-8 lg:pt-40"
    >
      <div className="mx-auto w-full max-w-[90rem]">
        <div className="grid items-end gap-14 pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-28">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <span className="inline-flex items-center gap-3 font-ui text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                <span className="size-2 rounded-full bg-accent" /> Available for
                selected projects
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
              className="mt-16 font-ui text-[10px] font-semibold tracking-[0.2em] text-muted uppercase"
            >
              Full-stack developer / Skardu, Pakistan
            </motion.p>

            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3.7rem,8vw,8.8rem)] leading-[0.87] tracking-[-0.045em] text-foreground">
              Software for the <em className="text-accent">real</em> world.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              I turn requirements into working software. Interfaces, APIs, and
              the quiet details that make a product feel dependable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#projects" className="btn-primary group">
                Explore selected work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </a>
              <a href="#about" className="btn-secondary">
                How I work
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[30rem]">
              <div className="absolute -top-8 right-5 z-10 bg-foreground px-3 py-2 font-ui text-[9px] font-semibold tracking-[0.16em] text-background uppercase">
                Portrait / 01
              </div>
              <div className="overflow-hidden border border-foreground bg-surface p-2">
                <Image
                  src="/my-hero-image.avif"
                  alt="Ejaz Ali, full-stack developer"
                  width={960}
                  height={1080}
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="h-auto w-full object-cover grayscale-[15%]"
                />
              </div>
              <p className="mt-3 max-w-[16rem] font-ui text-[10px] leading-relaxed tracking-[0.08em] text-muted uppercase">
                Building from the interface down to the data layer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="signal-line relative h-2 w-full" />
      <div className="flex flex-col justify-between gap-5 border-t border-border py-5 sm:flex-row sm:items-center">
        <p className="font-ui text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
          A working palette
        </p>
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={18}
          gap={38}
          fadeOut
          fadeOutColor="var(--color-surface)"
          className="max-w-xl py-1"
          ariaLabel="Technologies"
        />
        <a
          href="#projects"
          className="hidden items-center gap-2 font-ui text-[10px] font-semibold tracking-[0.16em] text-muted uppercase transition-colors hover:text-accent sm:flex"
        >
          Scroll to work <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
