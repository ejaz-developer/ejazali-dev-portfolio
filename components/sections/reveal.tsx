"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduce = useReducedMotion() === true;

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
      viewport={shouldReduce ? undefined : { once: true, margin: "-60px" }}
      transition={
        shouldReduce
          ? undefined
          : { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
