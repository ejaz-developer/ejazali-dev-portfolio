"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="px-5 pt-28 pb-16 sm:pt-36">
      <div className="mx-auto max-w-[680px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[13px] font-medium text-muted">
            Full-stack web engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 space-y-5 text-[15px] leading-[1.7] text-foreground/80"
        >
          <p>
            I&apos;m a full-stack web engineer building web products.
          </p>
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
      </div>
    </section>
  );
}
