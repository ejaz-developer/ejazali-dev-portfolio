"use client";

import { motion } from "motion/react";
import { thingsIBuild } from "@/data/data";

export default function ThingsIBuild() {
  return (
    <section className="panel px-6 py-8 sm:px-9 sm:py-10 lg:col-span-5">
      <h2 className="font-display text-[17px] italic text-sage-ink">
        Things I build
      </h2>

      <div className="mt-6 space-y-5">
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
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sage-soft text-sage-ink">
                <Icon size={16} />
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
    </section>
  );
}
