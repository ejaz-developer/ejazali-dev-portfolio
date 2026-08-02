"use client";

import { experience } from "@/data/data";
import { motion } from "motion/react";
import SplitText from "@/components/reactbits/SplitText";
import LineSidebar from "@/components/reactbits/LineSidebar";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const experienceLabels = experience.map((e) => e.company);

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section
      id="experience"
      className="relative px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow mb-3 flex items-center gap-4"
        >
          Experience
          <span aria-hidden className="h-px w-14 bg-border" />
        </motion.p>

        <SplitText
          text="Where I've worked."
          tag="h2"
          className="mb-14 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl"
          textAlign="left"
          splitType="words"
          delay={40}
          duration={0.8}
          from={{ opacity: 0, y: 28 }}
          to={{ opacity: 1, y: 0 }}
        />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="lg:w-64 lg:shrink-0">
            <LineSidebar
              items={experienceLabels}
              accentColor="var(--color-accent)"
              textColor="var(--color-muted)"
              markerColor="var(--color-border)"
              showIndex
              showMarker
              markerLength={80}
              markerGap={16}
              proximityRadius={100}
              maxShift={20}
              defaultActive={0}
              fontSize={1}
              onItemClick={(index) => setActiveExp(index)}
            />
          </div>

          <div className="min-w-0 flex-1">
            {experience.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`transition-all duration-500 ${
                  i === activeExp
                    ? "opacity-100 translate-y-0"
                    : "hidden opacity-0 translate-y-4"
                }`}
              >
                {i === activeExp && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="card p-7 sm:p-10"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-serif text-2xl tracking-tight text-foreground sm:text-3xl">
                          {exp.role}
                        </h3>
                        <p className="mt-2 font-ui text-sm font-semibold tracking-tight text-accent">
                          {exp.company}
                        </p>
                      </div>
                      <span className="w-fit rounded-full border border-border bg-surface/80 px-3.5 py-1.5 font-ui text-xs font-medium text-muted whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-6 max-w-prose text-sm leading-relaxed text-muted sm:text-[15px]">
                      {exp.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-accent/10 px-3 py-1 font-ui text-xs font-medium text-accent"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
