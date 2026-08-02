"use client";

import { contactInfo } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SplitText from "@/components/reactbits/SplitText";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="eyebrow mb-3 flex items-center gap-4"
            >
              Contact
              <span aria-hidden className="h-px w-14 bg-border" />
            </motion.p>

            <SplitText
              text="Say hello."
              tag="h2"
              className="font-serif text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl"
              textAlign="left"
              splitType="words"
              delay={40}
              duration={0.8}
              from={{ opacity: 0, y: 28 }}
              to={{ opacity: 1, y: 0 }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted"
            >
              Open to work and always happy to connect. If you have a project,
              a question, or just want to say hello — reach out. I usually
              reply within a day.
            </motion.p>

            <motion.a
              href="mailto:hello.ejaz@outlook.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="group mt-10 inline-block font-serif text-2xl tracking-tight text-accent italic underline decoration-accent/30 underline-offset-8 transition-colors hover:decoration-accent sm:text-3xl focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
            >
              hello.ejaz@outlook.com
              <ArrowUpRight
                size={20}
                className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>

          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="eyebrow mb-2 flex items-center gap-4"
            >
              Reach me at
              <span aria-hidden className="h-px w-14 bg-border" />
            </motion.p>

            <ul className="mt-6 border-y border-border">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const content = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-ui text-[11px] font-medium tracking-[0.14em] text-muted-2 uppercase">
                        {info.label}
                      </span>
                      <span className="mt-1 block truncate font-ui text-sm font-semibold tracking-tight text-foreground">
                        {info.value}
                      </span>
                    </span>
                    {info.href && (
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-muted-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                      />
                    )}
                  </>
                );
                return (
                  <motion.li
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: EASE,
                    }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 last:border-b-0 hover:bg-white focus-visible:bg-white focus-visible:outline-none"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-5 border-b border-border py-5 last:border-b-0">
                        {content}
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="mt-10"
            >
              <a href="mailto:hello.ejaz@outlook.com" className="btn-primary group">
                Send a message
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
