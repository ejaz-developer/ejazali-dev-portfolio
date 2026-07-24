"use client";

import { contactInfo } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24"
    >
      <div className="max-w-lg w-full">
        <FadeUp>
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 text-center"
            whileHover="hover"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-foreground via-accent to-foreground bg-[length:200%_100%] bg-clip-text text-transparent"
              variants={{
                hover: {
                  backgroundPosition: ["0% 0%", "100% 0%"],
                  transition: { duration: 0.8, ease: "easeInOut" },
                },
              }}
            >
              Contact
            </motion.span>
          </motion.h2>
          <div className="w-8 h-0.5 bg-accent mx-auto mb-8" />
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="text-muted text-sm leading-relaxed mb-8 max-w-md mx-auto text-center">
            Open to work and always happy to connect. If you have a project,
            question, or just want to say hello — reach out.
          </p>
        </FadeUp>

        <div className="space-y-2 mb-8 max-w-sm mx-auto">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <FadeUp key={info.label} delay={0.05 * i + 0.05}>
                <motion.a
                  href={info.href}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border transition-colors duration-200 group"
                  whileHover={{
                    x: 4,
                    borderColor: "rgba(229,72,77,0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={14} className="text-muted shrink-0" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-muted">{info.label}</p>
                    <p className="text-sm text-foreground truncate group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowUpRight
                      size={14}
                      className="text-muted/50 group-hover:text-accent transition-colors shrink-0"
                    />
                  </motion.div>
                </motion.a>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.25}>
          <div className="text-center">
            <motion.a
              href="mailto:hello.ejaz@outlook.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium transition-colors"
            >
              Send a message
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
