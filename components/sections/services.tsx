"use client";

import { services } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Capabilities</p>
            <h2 className="max-w-sm font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">A small studio mindset.</h2>
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-muted">End to end, from a first mockup to a deployed product that holds up under real traffic.</p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {services.map((service, i) => (
                <motion.a key={service.name} href="#contact" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} className="group grid gap-4 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-7">
                  <span className="font-ui text-[10px] font-semibold tracking-[0.14em] text-muted-2">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent">{service.name}</h3>
                    <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted">{service.description}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
