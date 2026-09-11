"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16">
      <div className="mx-auto max-w-[680px]">
        <div className="border-t border-border pt-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            Work with me
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-8 text-[15px] leading-[1.7] text-foreground/80">
              Have a product, business system, or web application in mind?
            </p>
            <p className="mt-3 text-[15px] leading-[1.7] text-foreground/80">
              Tell me what you&apos;re building and what you&apos;re trying to
              solve.
            </p>

            <a
              href="mailto:hello.ejaz@outlook.com"
              className="link-underline mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-foreground transition-colors hover:text-muted"
            >
              Start a conversation <ArrowUpRight size={14} />
            </a>

            <p className="mt-6 text-[13px] text-muted">
              hello.ejaz@outlook.com
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
