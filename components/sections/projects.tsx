"use client";

import { projects } from "@/data/data";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";

const projectImages = [
  "/project-images/AudioThought.avif",
  "/project-images/RecordKeeper-.avif",
  "/project-images/CogniClick.avif",
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[90rem]">
        <div className="section-rule flex flex-col gap-7 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">Selected work</p>
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-foreground sm:text-7xl">Built for the messy middle.</h2>
          </div>
          <a href="https://github.com/ejaz-developer" target="_blank" rel="noopener noreferrer" className="editorial-link mb-1 inline-flex items-center gap-2 font-ui text-[10px] font-semibold tracking-[0.16em] text-muted uppercase transition-colors hover:text-accent">All repositories <ArrowUpRight size={14} /></a>
        </div>

        <div className="divide-y divide-border">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group grid gap-7 py-10 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-10 lg:py-14"
            >
              <span className="font-ui text-[10px] font-semibold tracking-[0.18em] text-muted-2">0{i + 1}</span>
              <div className="flex min-w-0 flex-col">
                <h3 className="font-serif text-4xl leading-none tracking-[-0.03em] text-foreground transition-colors group-hover:text-accent sm:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => <li key={tag} className="font-ui text-[9px] font-semibold tracking-[0.1em] text-muted uppercase">{tag}</li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-5">
                  {project.preview && <a href={project.preview} target="_blank" rel="noopener noreferrer" className="editorial-link inline-flex items-center gap-1.5 font-ui text-[10px] font-semibold tracking-[0.14em] text-accent uppercase">Live site <ArrowUpRight size={13} /></a>}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="editorial-link inline-flex items-center gap-1.5 font-ui text-[10px] font-semibold tracking-[0.14em] text-muted uppercase hover:text-accent"><Github size={13} /> Source <ArrowUpRight size={13} /></a>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
                <Image src={projectImages[i]} alt={`${project.title} — preview`} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover grayscale-[25%] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0" />
                <span className="absolute right-3 bottom-3 bg-background/90 px-2 py-1 font-ui text-[9px] font-semibold tracking-[0.14em] text-foreground uppercase">View / {String(i + 1).padStart(2, "0")}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
