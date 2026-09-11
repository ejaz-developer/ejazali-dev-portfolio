"use client";

import { thingsIBuild } from "@/data/data";
import { motion } from "motion/react";

export default function ThingsIBuild() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[680px]">
        <div className="border-t border-border pt-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
            Things I build
          </p>

          <div className="mt-8 space-y-5">
            {thingsIBuild.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground">
                    <Icon size={16} strokeWidth={1.5} />
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
