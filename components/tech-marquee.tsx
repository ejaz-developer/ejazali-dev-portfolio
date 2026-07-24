"use client";

import { statsData } from "@/data/data";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const technologies = statsData.find((s) => s.technologies)!.technologies!;

export default function TechMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-3"
        animate={
          isPaused
            ? {}
            : {
                x: ["0%", `-50%`],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <span
            key={i}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-muted hover:border-accent/30 hover:text-accent transition-colors"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
