import { whatIDo } from "@/data/data";
import { pad2 } from "@/lib/utils";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

export default function WhatIDo() {
  return (
    <section>
      <SectionHeading
        index="02"
        title="What I do"
        lede="I build the systems a business runs on — from the customer-facing site to the booking engine and back office behind it."
      />

      <div className="mt-8 overflow-hidden rounded-[3px] border border-rule bg-paper-2 shadow-[0_22px_44px_-34px_rgba(38,70,83,0.5)]">
        {whatIDo.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className={i > 0 ? "border-t border-dashed border-rule" : undefined}
            >
              <div className="grid grid-cols-[auto_1fr] gap-4 px-5 py-5 sm:gap-6 sm:px-7 sm:py-6">
                <span className="ticket-no pt-0.5 tabular-nums">
                  {pad2(i + 1)}
                </span>

                <div>
                  <div className="flex items-center gap-2.5">
                    <Icon size={17} className="shrink-0 text-teal" />
                    <h3 className="text-[16px] font-medium tracking-tight text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 max-w-[60ch] text-[14px] leading-[1.65] text-ink/75">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
