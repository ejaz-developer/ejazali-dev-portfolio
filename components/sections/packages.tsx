import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { ArrowRight } from "@/components/icons";

/* ── Section 02 — Packages ───────────────────────────────────────
   Two engagement shapes, presented as spec sheets rather than pricing
   cards: the scope sits in its own ruled column so the difference
   between "new build" and "redesign" is legible at a glance. No
   prices anywhere — the CTA carries the next step.
   ──────────────────────────────────────────────────────────────── */

interface Package {
  code: string;
  kind: string;
  title: string;
  description: string;
  bulletPoints: string[];
  ctaText: string;
  ctaHref: string;
  ctaVariant: "solid" | "outline";
}

const packages: Package[] = [
  {
    code: "A",
    kind: "New build",
    title: "Website Development",
    description:
      "A bespoke website built from scratch — brand identity, UI/UX, and full-stack implementation tailored to your business.",
    bulletPoints: [
      "Custom design from discovery to launch",
      "Full CMS integration (Next.js + Sanity/Prisma)",
      "Booking/contact system built in",
      "Mobile-responsive and performance-optimized",
      "Launch support and 2-week hand-over",
    ],
    ctaText: "Talk about your project",
    ctaHref: "#contact",
    ctaVariant: "solid",
  },
  {
    code: "B",
    kind: "Existing site",
    title: "Website Redesign",
    description:
      "Refresh an existing site with a modern dark identity, improved conversion funnel, and a streamlined admin experience.",
    bulletPoints: [
      "Audit and restructure your current site",
      "New dark-branded visual identity",
      "Redesigned funnel: hook → packages → inquiry",
      "Performance and SEO improvements",
      "Preserve existing content and data",
    ],
    ctaText: "Start the redesign conversation",
    ctaHref: "#contact",
    ctaVariant: "outline",
  },
];

function ctaClass(pkg: Package) {
  if (pkg.ctaVariant === "solid") {
    return "btn-solid mt-8 w-full justify-between sm:w-auto sm:justify-start";
  }
  return "mt-8 inline-flex w-full items-center justify-between gap-2 rounded-[3px] border border-ink/25 px-5 py-[0.7rem] text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-bg-subtle sm:w-auto sm:justify-start";
}

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-24">
      <SectionHeading
        index="02"
        title="Packages"
        lede="Two engagement shapes — no prices, just scope. Pick the one that matches where you are today."
      />

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {packages.map((pkg) => (
          <Reveal key={pkg.title}>
            <article className="overflow-clip rounded-[6px] border border-rule bg-bg-2 transition-colors hover:border-teal/40">
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="mono-label text-teal">Package {pkg.code}</span>
                  <span className="mono-label">{pkg.kind}</span>
                </div>

                <h3 className="mt-4 font-display text-[clamp(1.55rem,4.2vw,2.1rem)] leading-[1.06] tracking-[-0.02em] text-ink">
                  {pkg.title}
                </h3>

                <p className="mt-3 max-w-[46ch] text-[14.5px] leading-[1.7] text-ink/70">
                  {pkg.description}
                </p>

                <div className="mt-auto">
                  <a href={pkg.ctaHref} className={ctaClass(pkg)}>
                    {pkg.ctaText}
                    <ArrowRight size={14} className="shrink-0" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
