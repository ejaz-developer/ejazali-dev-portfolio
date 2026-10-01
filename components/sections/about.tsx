"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="panel px-6 py-8 sm:px-9 sm:py-10 lg:col-span-7"
    >
      <h2 className="font-display text-[17px] italic text-sage-ink">About</h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 space-y-4 text-[15px] leading-[1.7] text-foreground/80"
      >
        <p>I&apos;m Ejaz, a full-stack web engineer.</p>
        <p className="max-w-[62ch]">
          I build web applications from the frontend to the backend —
          designing interfaces, building APIs, working with databases, and
          shipping production software.
        </p>
        <p className="max-w-[62ch]">
          I care about simple systems, maintainable code, and products that
          actually get used.
        </p>
      </motion.div>
    </section>
  );
}
