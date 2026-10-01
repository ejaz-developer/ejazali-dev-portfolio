"use client";

import { motion } from "motion/react";
import Window from "@/components/window";

const terminalLines: { cmd: string; out?: string }[] = [
  { cmd: "whoami", out: "ejaz ali — full-stack web engineer" },
  { cmd: "pwd", out: "skardu, pakistan" },
  { cmd: "stack", out: "next.js · typescript · node.js · postgresql" },
];

export default function Hero() {
  return (
    <section id="hero" className="lg:col-span-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[13px] font-medium tracking-tight text-sage-ink">
          Full-stack web engineer
        </p>

        <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.6rem,7vw,4.25rem)] leading-[1.02] tracking-[-0.015em] text-foreground">
          I design, build, and ship <em className="italic">web products</em>.
        </h1>
      </motion.div>

      <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_420px] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[62ch] space-y-4 text-[15px] leading-[1.7] text-foreground/80"
        >
          <p>I&apos;m a full-stack web engineer building web products.</p>
          <p>
            I work across the interface, backend, database, and everything in
            between. I mostly build with Next.js, TypeScript, Node.js, and
            PostgreSQL.
          </p>
          <p>
            I use AI heavily during implementation to move faster, while keeping
            architecture, product, and engineering decisions my own.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Window title="ejaz — zsh — 80×24">
            <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
              {terminalLines.map((line) => (
                <div key={line.cmd}>
                  <p>
                    <span className="text-accent">$</span> {line.cmd}
                  </p>
                  <p className="text-muted">{line.out}</p>
                </div>
              ))}
              <p>
                <span className="text-accent">$</span>{" "}
                <span className="caret" aria-hidden="true" />
              </p>
            </div>
          </Window>
        </motion.div>
      </div>
    </section>
  );
}
