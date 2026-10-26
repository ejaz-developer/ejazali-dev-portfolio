import { motion, useReducedMotion } from "motion/react";
import { Button } from "../ui/button";

const words = ["I", "build", "web", "apps", "that"];
const accentWords = ["kill", "manual", "work."];

export default function HeroTagline() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.07, delayChildren: 0.1 },
    },
  };

  const word = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: "110%" },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <div>
      <h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        <motion.span
          variants={container}
          initial="hidden"
          animate="show"
          className="inline-block"
        >
          {[...words, ...accentWords].map((w, i) => (
            <span key={w + i} className="inline-block overflow-hidden pb-[0.08em] pr-[0.28em] align-bottom">
              <motion.span
                variants={word}
                className={i >= words.length ? "inline-block text-primary" : "inline-block"}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.75, duration: 0.5 }}
        className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
      >
        I&apos;m Ejaz — a full-stack developer helping founders and businesses turn
        spreadsheets, copy-paste, and busywork into software that runs the business.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.9, duration: 0.45 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <Button size="lg" render={<a href="#contact" />} className="h-10 rounded-2xl px-6 text-base">
          Hire me
        </Button>
        <Button
          variant="outline"
          size="lg"
          render={<a href="#work" />}
          className="h-10 rounded-2xl px-6 text-base"
        >
          View work
        </Button>
      </motion.div>
    </div>
  );
}
