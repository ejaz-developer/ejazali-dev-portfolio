import { howIWork } from "@/data/data";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="scroll-mt-24">
      <SectionHeading
        index="04"
        title="How I work"
        lede="A predictable process, so you always know what is happening and what comes next."
      />

      <div className="mt-8 grid gap-px overflow-clip rounded-[3px] border border-rule bg-rule sm:grid-cols-2">
        {howIWork.map((item) => (
          <Reveal
            key={item.step}
            className="bg-paper-2 p-6 sm:p-7"
          >
            <span className="ticket-no">STEP {item.step}</span>
            <h3 className="mt-3 text-[16px] font-medium tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.65] text-ink/75">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
