"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const titleChars = "Builds web applications from Skardu.".split("");

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-xl w-full text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-accent font-mono text-sm mb-5 tracking-wide"
        >
          Full-stack developer
        </motion.p>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1] mb-4 overflow-hidden">
          {titleChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.015,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="inline-block"
              whileHover={{
                color: "#e5484d",
                y: -3,
                transition: { duration: 0.15 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-muted text-base leading-relaxed max-w-lg mx-auto mb-10"
        >
          React, Next.js, TypeScript, Node.js — I turn requirements into
          working software that ships fast and holds up under real use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium transition-colors"
          >
            See the work
            <ArrowDown size={14} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
