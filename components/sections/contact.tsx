"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "@/components/icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="panel px-6 py-8 sm:px-9 sm:py-10 lg:col-span-12"
    >
      <h2 className="font-display text-[17px] italic text-sage-ink">
        Work with me
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="max-w-[46ch] space-y-3 text-[15px] leading-[1.7] text-foreground/80">
          <p>Have a product, business system, or web application in mind?</p>
          <p>Tell me what you&apos;re building and what you&apos;re trying to solve.</p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a href="mailto:hello.ejaz@outlook.com" className="btn-solid">
            Start a conversation <ArrowUpRight size={15} />
          </a>
          <p className="text-[13px] text-muted">hello.ejaz@outlook.com</p>
        </div>
      </motion.div>
    </section>
  );
}
