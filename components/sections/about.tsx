import SectionHeading from "./section-heading";

/* ── About section (folded into funnel closing) ───────────────────
   The About section no longer stands alone. Its credibility facts are
   folded into the closing area of the funnel (after case studies, before
   FAQ). This section is kept for backward compatibility but its content
   is consumed by the closing CTA area.
   ──────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 hidden sm:block"
      aria-hidden="true"
    >
      <SectionHeading index="04" title="About" />
      <div className="mt-8">
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
    </section>
  );
}