"use client";

import BlurText from "@/components/reactbits/BlurText";
import DotField from "@/components/reactbits/DotField";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 overflow-hidden"
    >
      <DotField
        gradientFrom="rgba(168, 85, 247, 0.5)"
        gradientTo="rgba(217, 70, 239, 0.25)"
        glowColor="#120F17"
        dotRadius={2}
        dotSpacing={20}
        bulgeStrength={80}
        cursorRadius={350}
      />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <p className="text-accent font-mono text-sm mb-6 tracking-[0.2em] uppercase">
          Full-stack developer
        </p>

        <BlurText
          text="Builds web applications from Skardu."
          delay={80}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 justify-center"
          stepDuration={0.3}
        />

        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          React, Next.js, TypeScript, Node.js — I turn requirements into
          working software that ships fast and holds up under real use.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted text-sm font-medium hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
