import { whatIDo } from "@/data/data";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

/*
 * Section 01 — What I do.
 *
 * The offer is four capabilities, but the product is one system. So the
 * section is a four-up capability matrix (hairline grid, no cards) sitting
 * above a three-surface strip: site → booking flow → back office. The strip
 * is the signature — it carries the claim the hero makes, in structure
 * rather than in another paragraph.
 */

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="scroll-mt-24">
      <SectionHeading
        index="01"
        title="What I do"
        lede="I build the systems a business runs on — from the customer-facing site to the booking engine and the back office behind it."
      />

      <ul className="mt-9 grid grid-cols-1 gap-px overflow-clip rounded-[4px] border border-rule bg-rule sm:grid-cols-2 xl:grid-cols-4">
        {whatIDo.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="bg-bg">
              <Reveal className="flex h-full flex-col px-5 py-6 sm:px-6 sm:py-7">
                <Icon size={18} className="shrink-0 text-teal" />
                <h3 className="mt-5 text-[15px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-ink/70">
                  {item.description}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
