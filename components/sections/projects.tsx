"use client";

import { projects } from "@/data/data";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const rotations = [-1, 0.5, -0.5];
const alignments = ["self-start", "self-center", "self-end"] as const;

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24"
    >
      <div className="max-w-3xl w-full">
        <FadeUp>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 text-center"
            whileHover="hover"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-foreground via-accent to-foreground bg-[length:200%_100%] bg-clip-text text-transparent"
              variants={{
                hover: {
                  backgroundPosition: ["0% 0%", "100% 0%"],
                  transition: { duration: 0.8, ease: "easeInOut" },
                },
              }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <div className="w-8 h-0.5 bg-accent mx-auto mb-8" />
        </FadeUp>

        <div className="flex flex-col items-center gap-5">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={0.08 * i}>
              <div className={`${alignments[i]} w-auto`}>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  whileHover={{ scale: 1.04, y: -8 }}
                  style={{ rotate: rotations[i] }}
                >
                <motion.div
                  className="w-72 p-5 rounded-xl bg-surface border border-border hover:shadow-[0_0_20px_rgba(229,72,77,0.08)] transition-shadow duration-300"
                  whileHover={{ borderColor: "rgba(229,72,77,0.3)" }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-sm font-medium text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.featured && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                          Featured
                        </span>
                      )}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-muted hover:text-foreground hover:bg-border transition-all"
                        aria-label={`${project.title} source`}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Github size={13} />
                      </motion.a>
                      <motion.a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-muted hover:text-foreground hover:bg-border transition-all"
                        aria-label={`${project.title} live`}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.15 }}
                      >
                        <ExternalLink size={13} />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-background text-muted inline-block"
                        whileHover={{
                          color: "#e5484d",
                          backgroundColor: "rgba(229,72,77,0.08)",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
