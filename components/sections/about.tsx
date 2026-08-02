"use client";

import { statsData, services } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
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

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              Full-stack developer based in Skardu, Pakistan. I build web
              applications — booking platforms, POS systems, AI tools — that
              solve real problems for real people. I care about code that&apos;s
              maintainable, interfaces that are usable, and products that ship
              on time.
            </motion.p>

            <dl className="mt-12 border-t border-border">
              {statsData.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: EASE,
                  }}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-5"
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
          </div>

          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="eyebrow mb-2 flex items-center gap-4"
            >
              What I do
              <span aria-hidden className="h-px w-14 bg-border" />
            </motion.p>

            <ul className="mt-6 border-y border-border">
              {services.map((service, i) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: EASE,
                  }}
                >
                  <a
                    href="#contact"
                    className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 last:border-b-0 hover:bg-white focus-visible:bg-white focus-visible:outline-none"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <service.icon size={17} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-ui text-sm font-semibold tracking-tight text-foreground">
                        {service.name}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">
                        {service.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-muted-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
