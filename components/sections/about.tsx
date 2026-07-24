"use client";

import { statsData, services } from "@/data/data";
import { motion } from "motion/react";
import TechMarquee from "@/components/tech-marquee";

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

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24"
    >
      <div className="max-w-xl w-full">
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
              About
            </motion.span>
          </motion.h2>
          <div className="w-8 h-0.5 bg-accent mx-auto mb-8" />
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="text-muted text-sm sm:text-base leading-relaxed mb-14 max-w-lg mx-auto text-center">
            Full-stack developer based in Skardu, Pakistan. I build web
            applications — booking platforms, POS systems, AI tools — that solve
            real problems for real people. I care about code that&apos;s
            maintainable, interfaces that are usable, and products that ship on
            time.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 gap-3 mb-12 max-w-xs mx-auto">
          {statsData
            .filter((s) => !s.technologies)
            .map((stat, i) => (
              <FadeUp key={stat.label} delay={0.05 * i}>
                <motion.div
                  className="p-4 rounded-lg bg-surface border border-border text-center h-full flex flex-col"
                  whileHover={{ y: -3, borderColor: "rgba(229,72,77,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-1">
                    <motion.div
                      className="text-xl sm:text-2xl font-semibold text-foreground mb-0.5"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-muted leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
        </div>

        <div className="mb-14">
          <TechMarquee />
        </div>

        <FadeUp delay={0.05}>
          <h3 className="text-base font-medium text-foreground mb-8 text-center">
            Services
          </h3>
        </FadeUp>

        <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            const rotations = [-1.5, 1, -1, 1.5, -0.5, 0.5];
            return (
              <FadeUp key={service.name} delay={0.04 * i}>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  whileHover={{ scale: 1.04, y: -8 }}
                  style={{ rotate: rotations[i] }}
                  className="shrink-0"
                >
                  <motion.div
                    className="px-5 py-4 rounded-xl bg-surface border border-border hover:shadow-[0_0_20px_rgba(229,72,77,0.08)] transition-shadow duration-300 w-56"
                    whileHover={{ borderColor: "rgba(229,72,77,0.3)" }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon size={14} className="text-accent shrink-0" />
                      </motion.div>
                      <h4 className="text-sm font-medium text-foreground whitespace-nowrap">
                        {service.name}
                      </h4>
                    </div>
                    <p className="text-[11px] text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
