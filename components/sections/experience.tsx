"use client";

import { experience } from "@/data/data";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[90rem]">
        <div className="section-rule grid gap-10 pt-7 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4"><p className="eyebrow">Experience</p><h2 className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">The timeline.</h2></div>
          <div className="lg:col-span-8">
            {experience.map((exp, i) => (
              <motion.div key={`${exp.company}-${exp.role}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-b border-border pb-10">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline"><h3 className="font-serif text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">{exp.role}</h3><span className="font-ui text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">{exp.period}</span></div>
                <p className="mt-3 font-ui text-[10px] font-semibold tracking-[0.15em] text-muted uppercase">{exp.company}</p>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted">{exp.description}</p>
                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">{exp.skills.map((skill) => <li key={skill} className="font-ui text-[9px] font-semibold tracking-[0.1em] text-muted uppercase">{skill}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
