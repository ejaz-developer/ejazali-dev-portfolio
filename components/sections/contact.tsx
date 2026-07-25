"use client";

import { contactInfo } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SplitText from "@/components/reactbits/SplitText";
import MetaBalls from "@/components/reactbits/MetaBalls";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24 overflow-hidden"
    >
      <MetaBalls
        color="#a855f7"
        cursorBallColor="#d946ef"
        speed={0.2}
        animationSize={25}
        ballCount={12}
        enableTransparency
      />

      <div className="relative z-10 max-w-lg w-full">
        <SplitText
          text="Contact"
          tag="h2"
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
          textAlign="center"
          splitType="chars"
          delay={40}
          duration={0.8}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />

        <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-2 mx-auto mb-8 rounded-full" />

        <p className="text-muted text-sm leading-relaxed mb-10 max-w-md mx-auto text-center">
          Open to work and always happy to connect. If you have a project,
          question, or just want to say hello — reach out.
        </p>

        <div className="space-y-3 mb-10">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              >
                <a
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-border/50 backdrop-blur-sm hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <Icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted">{info.label}</p>
                    <p className="text-sm text-foreground truncate group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-muted/50 group-hover:text-accent transition-colors shrink-0"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="mailto:hello.ejaz@outlook.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
