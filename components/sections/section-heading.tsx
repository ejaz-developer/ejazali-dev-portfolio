import type { ReactNode } from "react";
import { DashedRule } from "@/components/primitives";

export default function SectionHeading({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header>
      <div className="flex items-center gap-4">
        <span className="mono-label whitespace-nowrap">Section {index}</span>
        <DashedRule className="flex-1" />
      </div>

      <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] tracking-[-0.015em] text-ink">
        {title}
      </h2>

      {lede ? (
        <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.7] text-ink/75">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
