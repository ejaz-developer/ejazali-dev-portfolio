"use client";

import { projects } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "@/components/icons";
import Image from "next/image";
import Window from "@/components/window";

export default function Projects() {
  return (
    <section
      id="projects"
      className="panel px-6 py-8 sm:px-9 sm:py-10 lg:col-span-12"
    >
      <h2 className="font-display text-[17px] italic text-sage-ink">
        Selected work
      </h2>

      <div className="mt-6 divide-y divide-border">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group grid gap-5 py-6 first:pt-0 sm:grid-cols-[1fr_220px] sm:items-start"
          >
            <div className="min-w-0">
              <div className="flex items-baseline gap-3">
                <span className="text-[12px] tabular-nums text-muted-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[17px] font-medium tracking-tight text-foreground">
                  {project.title}
                </h3>
              </div>

              <p className="mt-2 pl-8 max-w-[64ch] text-[14px] leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-3 pl-8 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 pl-8 flex flex-wrap items-center gap-4">
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-[13px] text-muted transition-colors duration-200 hover:text-accent"
                  >
                    Live site <ArrowUpRight size={13} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-[13px] text-muted transition-colors duration-200 hover:text-accent"
                >
                  Source <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <Window
              title={project.title}
              className="window-hover w-full max-w-[260px] sm:max-w-none"
            >
              <div className="relative aspect-[16/9] bg-foreground/[0.03]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 640px) 220px, 260px"
                  className="object-cover grayscale-[40%] transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
            </Window>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
