"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="px-5 py-16">
      <div className="mx-auto max-w-[680px]">
        <div className="border-t border-border pt-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            About
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-5 text-[15px] leading-[1.7] text-foreground/80"
          >
            <p>
              I&apos;m Ejaz, a full-stack web engineer.
            </p>
            <p>
              I build web applications from the frontend to the backend —
              designing interfaces, building APIs, working with databases, and
              shipping production software.
            </p>
            <p>
              I care about simple systems, maintainable code, and products that
              actually get used.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
