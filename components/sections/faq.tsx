"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";

/* ── FAQ section ────────────────────────────────────────────────
   Answers the standard objections a potential client might have.
   Each answer guides the reader to the next clear step — the inquiry form.
   ──────────────────────────────────────────────────────────────── */

const faqItems = [
  {
    q: "I'm a small business — is this too enterprise for me?",
    a:
      "No. The site is built specifically for cleaning agencies, business owners, and small service businesses like yours. The packages, copy, and funnel all target your scale.",
  },
  {
    q: "How can I trust quality without testimonials or logos?",
    a:
      "Every showcased project carries a current status label — Live or In development — and an honest summary. No fabricated metrics or invented testimonials appear anywhere.",
  },
  {
    q: "Do you work remotely, and what time zones do you cover?",
    a:
      "I'm based in Skardu, Pakistan (PKT · UTC+5) and work with clients remotely across time zones. The funnel is designed for async communication, and I'm happy to sync at a time that suits you.",
  },
  {
    q: "What's the typical timeline from inquiry to launch?",
    a:
      "Website Development typically takes 6–8 weeks from discovery to launch. Website Redesign is 3–5 weeks depending on scope. The inquiry form asks your desired timeline so we can align from the start.",
  },
  {
    q: "Will the site be mobile-friendly and fast?",
    a:
      "Yes. Every site is mobile-responsive and performance-optimized from the start. The dark identity and three.js hero are progressively enhanced — the headline and copy are visible from first paint, and touch devices get a reduced-density hero fallback.",
  },
  {
    q: "Do you offer ongoing maintenance or retainer packages?",
    a:
      "No. The site offers two one-off engagement shapes: Website Development and Website Redesign. No ongoing or retainer tiers appear anywhere on the site.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24">
      <SectionHeading
        index="05"
        title="FAQ"
        lede="Standard objections, honest answers. Every question points toward the next step."
      />

      <div className="mt-10 space-y-4 max-w-[800px] mx-auto">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="accordion">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-3 px-4 rounded-[6px] border border-rule bg-bg-subtle text-[15px] font-medium text-ink hover:bg-bg-2 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="text-left">{item.q}</span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M5 12l6 6l6-6" />
                </svg>
              </button>
              {isOpen ? (
                <div id={`faq-${i}`} className="mt-2 px-4 max-w-[48ch] text-[14px] text-ink/75">
                  {item.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}