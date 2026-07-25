"use client";

import { statsData, services } from "@/data/data";
import { motion } from "motion/react";
import SplitText from "@/components/reactbits/SplitText";
import LogoLoop from "@/components/reactbits/LogoLoop";
import type { LogoItem } from "@/components/reactbits/LogoLoop";
import SpotlightCard from "@/components/reactbits/SpotlightCard";


const techLogos: LogoItem[] = [
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">React</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">Next.js</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">TypeScript</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">Node.js</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">MongoDB</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">Tailwind CSS</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">Redux</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">Git</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">Supabase</span> },
  { node: <span className="text-sm font-medium text-muted hover:text-accent transition-colors">Firebase</span> },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent-2/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl w-full">
        <SplitText
          text="About"
          tag="h2"
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
          textAlign="center"
          splitType="chars"
          delay={40}
          duration={0.8}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />

        <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-2 mx-auto mb-10 rounded-full" />

        <p className="text-muted text-sm sm:text-base leading-relaxed mb-16 max-w-xl mx-auto text-center">
          Full-stack developer based in Skardu, Pakistan. I build web
          applications — booking platforms, POS systems, AI tools — that solve
          real problems for real people. I care about code that&apos;s
          maintainable, interfaces that are usable, and products that ship on
          time.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-16 max-w-xs mx-auto">
          {statsData
            .filter((s) => !s.technologies)
            .map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, borderColor: "rgba(168, 85, 247, 0.3)" }}
                className="p-5 rounded-xl bg-surface/60 border border-border/50 text-center backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-foreground mb-1 bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-muted leading-snug">{stat.label}</div>
              </motion.div>
            ))}
        </div>

        <div className="mb-16">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={32}
            gap={48}
            fadeOut
            className="py-4"
          />
        </div>

        <h3 className="text-lg font-medium text-foreground mb-8 text-center">
          Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            >
              <SpotlightCard
                className="h-full p-5"
                spotlightColor="rgba(168, 85, 247, 0.08)"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/10 text-accent">
                    <service.icon size={16} />
                  </div>
                  <h4 className="text-sm font-medium text-foreground">{service.name}</h4>
                </div>
                <p className="text-xs text-muted/80 leading-relaxed">{service.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
