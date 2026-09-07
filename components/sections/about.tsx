"use client";

import { statsData } from "@/data/data";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-foreground px-5 py-24 text-background sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-ui text-[10px] font-semibold tracking-[0.2em] text-background/55 uppercase">About the practice</p>
          <div className="mt-12 h-px w-24 bg-accent" />
          <p className="mt-5 max-w-[15rem] font-ui text-[10px] leading-relaxed tracking-[0.1em] text-background/55 uppercase">From first sketch to deployed product, without losing the thread.</p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">The best software is felt before it is understood.</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-background/70 sm:text-xl">I build web applications — booking platforms, POS systems, AI tools. Things that solve real problems for real people. I care about code that&apos;s maintainable, interfaces that are usable, and products that ship on time.</p>
          <dl className="mt-16 grid grid-cols-3 border-t border-background/20">
            {statsData.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-r border-background/20 py-6 pr-4 last:border-r-0 sm:pr-8">
                <dd className="font-serif text-4xl tracking-[-0.03em] text-accent sm:text-6xl">{stat.value}</dd>
                <dt className="mt-3 max-w-[8rem] font-ui text-[9px] font-semibold leading-relaxed tracking-[0.12em] text-background/55 uppercase">{stat.label}</dt>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
