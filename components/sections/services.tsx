"use client";

import { services } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SplitText from "@/components/reactbits/SplitText";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow mb-3 flex items-center gap-4"
        >
          What I do
          <span aria-hidden className="h-px w-14 bg-border" />
        </motion.p>

        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SplitText
            text="Services that ship."
            tag="h2"
            className="max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl"
            textAlign="left"
            splitType="words"
            delay={40}
            duration={0.8}
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            End to end, from a first mockup to a deployed product that holds up
            under real traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.a
              key={service.name}
              href="#contact"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="card group relative flex flex-col overflow-hidden p-7 transition-shadow duration-500 hover:shadow-[0_24px_64px_-28px_rgba(244,63,94,0.35)] sm:p-8"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-16 size-48 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/10"
              />
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(244,63,94,0.06) 0%, transparent 50%, rgba(244,63,94,0.03) 100%)",
                }}
              />
              <div className="relative z-10 flex h-full flex-col gap-8">
                <div className="flex items-center gap-5">
                  <motion.span
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
                  >
                    <service.icon size={20} />
                  </motion.span>
                  <h3 className="font-serif text-lg tracking-tight text-foreground">
                    {service.name}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="absolute right-7 bottom-7 z-10 shrink-0 text-muted-2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}