"use client";

import { experience } from "@/data/data";
import { motion } from "motion/react";

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

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24"
    >
      <div className="max-w-lg w-full">
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
              Experience
            </motion.span>
          </motion.h2>
          <div className="w-8 h-0.5 bg-accent mx-auto mb-8" />
        </FadeUp>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <FadeUp key={`${exp.company}-${exp.role}`} delay={0.1 * i}>
              <motion.div
                className="relative pl-8"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute left-0 top-1.5 bottom-0 flex flex-col items-center">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  {i < experience.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-1.5" />
                  )}
                </div>

                <motion.div
                  className="p-4 rounded-lg bg-surface border border-border"
                  whileHover={{
                    borderColor: "rgba(229,72,77,0.3)",
                    y: -2,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-accent">{exp.company}</p>
                    </div>
                    <span className="text-[11px] text-muted whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mt-2 mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-background text-muted inline-block"
                        whileHover={{
                          color: "#e5484d",
                          backgroundColor: "rgba(229,72,77,0.08)",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
