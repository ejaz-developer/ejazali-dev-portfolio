"use client";

import { statsData } from "@/data/data";
import { motion } from "motion/react";
import SplitText from "@/components/reactbits/SplitText";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow mb-3 flex items-center gap-4"
        >
          About me
          <span aria-hidden className="h-px w-14 bg-border" />
        </motion.p>

        <SplitText
          text="A developer who ships."
          tag="h2"
          className="max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl"
          textAlign="left"
          splitType="words"
          delay={40}
          duration={0.8}
          from={{ opacity: 0, y: 28 }}
          to={{ opacity: 1, y: 0 }}
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-base leading-relaxed text-muted lg:col-span-7 sm:text-lg"
          >
            I build web applications — booking platforms, POS systems, AI
            tools. Things that solve real problems for real people. I care
            about code that&apos;s maintainable, interfaces that are usable,
            and products that ship on time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="lg:col-span-5"
          >
            <dl className="rounded-[2rem] border border-border bg-surface px-6 sm:px-8">
              {statsData.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08 + 0.15,
                    ease: EASE,
                  }}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-5 last:border-b-0"
                >
                  <dt className="font-ui text-xs font-medium tracking-wide text-muted uppercase">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-3xl text-foreground italic tabular-nums">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}