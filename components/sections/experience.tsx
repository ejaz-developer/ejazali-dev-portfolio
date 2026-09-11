"use client";

import { experience } from "@/data/data";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-16">
      <div className="mx-auto max-w-[680px]">
        <div className="border-t border-border pt-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            Experience
          </p>

          <div className="mt-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-[15px] font-medium text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-[12px] text-muted-2">{exp.period}</span>
                </div>

                <p className="mt-1 text-[13px] text-muted">{exp.company}</p>

                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {exp.description}
                </p>

                <p className="mt-3 text-[12px] text-muted-2">
                  {exp.technologies.join(" · ")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
