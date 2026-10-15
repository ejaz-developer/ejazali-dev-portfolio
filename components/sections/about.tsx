import { DashedRule, LedgerRow } from "@/components/primitives";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading index="04" title="About" />

      <Reveal className="mt-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-12">
          <div className="space-y-4 text-[15px] leading-[1.75] text-ink/80">
            <p>
              I&apos;m Ejaz Ali, a web developer based in Skardu, in northern
              Pakistan. Over the past three years I&apos;ve designed and built
              web applications end to end.
            </p>
            <p>
              That means owning the full path: the interface someone uses, the
              API behind it, the database it reads from, and the deploy that
              puts it live. I care about systems that stay simple to run and
              maintainable after launch.
            </p>
            <p>
              I work mainly with Next.js, TypeScript, and PostgreSQL, and use AI
              to move faster during implementation while keeping architecture
              and product decisions my own.
            </p>
          </div>

          <aside className="h-fit rounded-[3px] border border-rule bg-paper-2 px-5 py-5 sm:px-6">
            <p className="mono-label">Record</p>
            <DashedRule className="my-3" />
            <div className="ledger">
              <LedgerRow label="Based" value="Skardu, Pakistan" />
              <LedgerRow label="Timezone" value="PKT · UTC+5" />
              <LedgerRow label="Experience" value="~3 years" />
              <LedgerRow label="2023–2025" value="CodeHub Skardu" />
              <LedgerRow label="Scope" value="Interface → backend" />
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
