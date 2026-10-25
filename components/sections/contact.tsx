import { contact } from "@/lib/site";
import { DashedRule, LedgerRow } from "@/components/primitives";
import { ArrowUpRight } from "@/components/icons";
import Reveal from "./reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Reveal>
        <div className="rounded-[3px] border border-rule bg-paper-2 px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex items-center gap-4">
            <span className="mono-label whitespace-nowrap">Section 07</span>
            <DashedRule className="flex-1" />
          </div>

          <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,2.75rem)] leading-[1.05] tracking-[-0.015em] text-ink">
            Let&apos;s build something.
          </h2>

          <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.7] text-ink/75">
            Have a product, booking system, or business application in mind? Tell
            me what you&apos;re trying to solve, and I&apos;ll tell you how I&apos;d
            build it.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${contact.email}`}
              className="btn-solid"
            >
              Email me
              <ArrowUpRight size={15} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium text-ink"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>

          <DashedRule className="my-7" />

          <div className="ledger">
            <LedgerRow
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <LedgerRow
              label="LinkedIn"
              value="in/hello-ejaz"
              href={contact.linkedin}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
