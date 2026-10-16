import { ArrowRight, Mail } from "@/components/icons";
import {
  DashedRule,
  LedgerRow,
  MonoLabel,
  Perforation,
  Stamp,
  TicketNo,
} from "@/components/primitives";
import { contact } from "@/lib/site";

const orderItems = [
  { no: "01", label: "business websites", value: "more customers" },
  { no: "02", label: "booking platforms", value: "no manual work" },
  { no: "03", label: "web tools for SaaS", value: "built fast" },
] as const;

/*
 * Entrance is CSS-only. Animating `transform` (never `opacity`) keeps the
 * copy visible from the first paint, so FCP/LCP never wait on hydration.
 */
export default function Hero() {
  return (
    <section id="hero" className="lg:col-span-12">
      <div className="rise flex items-center gap-3" style={{ animationDelay: "0.02s" }}>
        <TicketNo value="ORDER · 001" />
        <div className="rule-dashed h-px flex-1" aria-hidden="true" />
        <MonoLabel>freelance · remote</MonoLabel>
      </div>

      <h1
        className="rise mt-6 max-w-[22ch] font-display text-[clamp(1.9rem,5vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink"
        style={{ animationDelay: "0.06s" }}
      >
        I build booking platforms and business web apps that remove manual
        work.
      </h1>

      <p
        className="rise mt-4 max-w-[48ch] text-[15px] leading-relaxed text-muted"
        style={{ animationDelay: "0.1s" }}
      >
        Freelance web development for founders and small teams, from the
        interface to the backend.
      </p>

      <article
        className="rise relative mt-8 flex w-full max-w-[600px] overflow-hidden rounded-[3px] border border-rule bg-paper-2 shadow-[0_1px_0_rgba(38,70,83,0.05),0_22px_44px_-30px_rgba(38,70,83,0.5)]"
        style={{ animationDelay: "0.14s" }}
      >
        <div className="flex w-10 shrink-0 items-center justify-center border-r border-rule bg-paper sm:w-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-muted-2 [writing-mode:vertical-rl]">
            work order
          </span>
        </div>

        <div className="min-w-0 flex-1 px-4 py-5 sm:px-6 sm:py-6">
          <div className="flex items-center justify-between gap-3">
            <MonoLabel>order no.</MonoLabel>
            <TicketNo value="2026 · GMT+5" />
          </div>

          <DashedRule className="my-4" />

          <div className="ledger">
            {orderItems.map((item) => (
              <LedgerRow
                key={item.no}
                className="flex-wrap"
                label={
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-mono text-[12px] tabular-nums text-muted-2">
                      {item.no}
                    </span>
                    <span>{item.label}</span>
                  </span>
                }
                value={item.value}
              />
            ))}
          </div>

          <DashedRule className="my-4" />

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <MonoLabel>total</MonoLabel>
              <p className="mt-1.5 font-display text-[clamp(1.15rem,4.4vw,1.6rem)] leading-tight text-ink">
                turning requirements into working software
              </p>
            </div>

            <div className="shrink-0 sm:pb-1">
              <Stamp tone="teal">accepted</Stamp>
            </div>
          </div>
        </div>

        <Perforation className="absolute inset-x-0 bottom-0" />
      </article>

      <div
        className="rise mt-8 flex flex-wrap items-center gap-3"
        style={{ animationDelay: "0.18s" }}
      >
        <a href={`mailto:${contact.email}`} className="btn-solid">
          <Mail size={15} />
          Email me
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-[3px] border border-rule px-5 py-[0.62rem] text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-paper-2"
        >
          See selected work
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
