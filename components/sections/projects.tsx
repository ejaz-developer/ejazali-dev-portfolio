"use client";

import { projects } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-16">
      <div className="mx-auto max-w-[680px]">
        <div className="border-t border-border pt-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            Selected work
          </p>

          <div className="mt-10 divide-y divide-border">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="py-8 first:pt-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[12px] tabular-nums text-muted-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-medium text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 pl-10 text-[14px] leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 pl-10 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-[12px] text-muted-2">
                    {project.tags.join(" · ")}
                  </span>
                </div>

                <div className="mt-4 pl-10 flex flex-wrap items-center gap-4">
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-foreground"
                    >
                      Live site <ArrowUpRight size={12} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 text-[13px] text-muted transition-colors hover:text-foreground"
                  >
                    Source <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
