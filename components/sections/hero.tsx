"use client";

import type { Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

import { ArrowRight, Mail } from "@/components/icons";
import {
  DashedRule,
  LedgerRow,
  MonoLabel,
  Perforation,
  Stamp,
  TicketNo,
} from "@/components/primitives";
import { contact } from "@/lib/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const orderItems = [
  { no: "01", label: "business websites", value: "more customers" },
  { no: "02", label: "booking platforms", value: "no manual work" },
  { no: "03", label: "web tools for SaaS", value: "built fast" },
] as const;

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const d = (value: number) => (reducedMotion ? 0 : value);

  const stageVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: d(0.09), delayChildren: d(0.08) },
    },
  };

  const riseVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: d(0.32), ease: EASE } },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: d(0.24), ease: EASE } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: d(0.34),
        ease: EASE,
        when: "beforeChildren",
        staggerChildren: d(0.09),
        delayChildren: d(0.06),
      },
    },
  };

  const totalVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: d(0.3), ease: EASE } },
  };

  const stampVariants: Variants = {
    hidden: reducedMotion
      ? { opacity: 1, scale: 1, rotate: -5 }
      : { opacity: 0, scale: 1.5, rotate: -14 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: -5,
      transition: { duration: d(0.34), ease: EASE },
    },
  };

  return (
    <section id="hero" className="lg:col-span-12">
      <motion.div variants={stageVariants} initial="hidden" animate="show">
        <motion.div variants={riseVariants} className="flex items-center gap-3">
          <TicketNo value="ORDER · 001" />
          <div className="rule-dashed h-px flex-1" aria-hidden="true" />
          <MonoLabel>freelance · remote</MonoLabel>
        </motion.div>

        <motion.h1
          variants={riseVariants}
          className="mt-6 max-w-[22ch] font-display text-[clamp(1.9rem,5vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink"
        >
          I build booking platforms and business web apps that remove manual
          work.
        </motion.h1>

        <motion.p
          variants={riseVariants}
          className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-muted"
        >
          Freelance web development for founders and small teams, from the
          interface to the backend.
        </motion.p>

        <motion.article
          variants={cardVariants}
          className="relative mt-8 flex w-full max-w-[600px] overflow-hidden rounded-[3px] border border-rule bg-paper-2 shadow-[0_1px_0_rgba(38,70,83,0.05),0_22px_44px_-30px_rgba(38,70,83,0.5)]"
        >
          <div className="flex w-10 shrink-0 items-center justify-center border-r border-rule bg-paper sm:w-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-muted-2 [writing-mode:vertical-rl]">
              work order
            </span>
          </div>

          <div className="min-w-0 flex-1 px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex items-center justify-between gap-3">
              <motion.span variants={lineVariants}>
                <MonoLabel>order no.</MonoLabel>
              </motion.span>
              <motion.span variants={lineVariants}>
                <TicketNo value="2026 · GMT+5" />
              </motion.span>
            </div>

            <motion.div variants={lineVariants}>
              <DashedRule className="my-4" />
            </motion.div>

            <div className="ledger">
              {orderItems.map((item) => (
                <motion.div key={item.no} variants={lineVariants}>
                  <LedgerRow
                    className="flex-wrap"
                    label={
                      <span className="flex items-baseline gap-2.5">
                        <span className="font-mono text-[12px] tabular-nums text-muted-2">
                          {item.no}
                        </span>
                        <span>{item.label}</span>
                      </span>
                    }
                    value={item.value}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div variants={lineVariants}>
              <DashedRule className="my-4" />
            </motion.div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
              <motion.div variants={totalVariants} className="min-w-0">
                <MonoLabel>total</MonoLabel>
                <p className="mt-1.5 font-display text-[clamp(1.15rem,4.4vw,1.6rem)] leading-tight text-ink">
                  turning requirements into working software
                </p>
              </motion.div>

              <motion.div variants={stampVariants} className="shrink-0 sm:pb-1">
                <Stamp tone="teal">accepted</Stamp>
              </motion.div>
            </div>
          </div>

          <Perforation className="absolute inset-x-0 bottom-0" />
        </motion.article>

        <motion.div
          variants={riseVariants}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href={`mailto:${contact.email}`} className="btn-solid">
            <Mail size={15} />
            Email me
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-[3px] border border-rule px-5 py-[0.62rem] text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-paper-2"
          >
            See selected work
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
