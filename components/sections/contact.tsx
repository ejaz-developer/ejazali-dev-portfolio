"use client";

import { contactInfo } from "@/data/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-foreground px-5 py-24 text-background sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7"><p className="font-ui text-[10px] font-semibold tracking-[0.2em] text-background/55 uppercase">Next observation</p><h2 className="mt-8 max-w-3xl font-serif text-6xl leading-[0.86] tracking-[-0.05em] sm:text-8xl">Have something <em className="text-accent">real</em> to build?</h2><p className="mt-8 max-w-lg text-base leading-relaxed text-background/65">Open to work. If you have a project, a question, or just want to talk shop, reach out. I usually reply within a day.</p><a href="mailto:hello.ejaz@outlook.com" className="editorial-link mt-10 inline-flex items-center gap-2 font-ui text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">Start a conversation <ArrowUpRight size={15} /></a></div>
        <div className="lg:col-span-5 lg:pt-14"><div className="border-t border-background/20">{contactInfo.map((info, i) => { const Icon = info.icon; const content = <><Icon size={16} className="text-accent" /><span className="flex-1"><span className="block font-ui text-[9px] font-semibold tracking-[0.16em] text-background/45 uppercase">{info.label}</span><span className="mt-1 block break-all text-sm text-background/85">{info.value}</span></span>{info.href && <ArrowUpRight size={15} className="text-background/45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />}</>; return <motion.div key={info.label} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>{info.href ? <a href={info.href} className="group flex items-center gap-5 border-b border-background/20 py-6 transition-colors hover:border-accent">{content}</a> : <div className="flex items-center gap-5 border-b border-background/20 py-6">{content}</div>}</motion.div>; })}</div></div>
      </div>
    </section>
  );
}
