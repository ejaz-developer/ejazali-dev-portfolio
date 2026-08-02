"use client";

import { projects } from "@/data/data";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import SplitText from "@/components/reactbits/SplitText";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projectImages = [
  "/project-images/AudioThought.avif",
  "/project-images/RecordKeeper-.avif",
  "/project-images/CogniClick.avif",
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow mb-3 flex items-center gap-4"
        >
          Selected work
          <span aria-hidden className="h-px w-14 bg-border" />
        </motion.p>

        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SplitText
            text="Projects in production."
            tag="h2"
            className="max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl"
            textAlign="left"
            splitType="words"
            delay={40}
            duration={0.8}
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
          />
          <motion.a
            href="https://github.com/ejaz-developer"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="group inline-flex shrink-0 items-center gap-1.5 font-ui text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
          >
            More on GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{ top: `calc(6.5rem + ${i * 20}px)` }}
              className={cn(
                "card group flex w-full flex-col gap-7 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_80px_-32px_rgba(225,29,72,0.25)] sm:p-9",
                "lg:sticky lg:flex-row lg:gap-10 lg:transition-transform lg:duration-300"
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-2 sm:aspect-[16/9] lg:w-[54%] lg:aspect-auto lg:self-stretch">
                <Image
                  src={projectImages[i]}
                  alt={`${project.title} — preview`}
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl text-muted italic tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.featured && (
                      <span className="font-serif text-sm text-accent italic">
                        featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted sm:text-[15px]">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-surface-2/70 px-3 py-1 font-ui text-xs font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto">
                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary group !px-5 !py-2.5 text-[13px]"
                      >
                        Live site
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !px-5 !py-2.5 text-[13px]"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
