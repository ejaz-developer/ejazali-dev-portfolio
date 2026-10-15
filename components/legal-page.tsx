import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import { DashedRule, MonoLabel } from "@/components/primitives";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="px-5 pt-28 pb-24">
      <div className="mx-auto max-w-[680px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-terracotta"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <article className="mt-8 border border-rule bg-paper-2 px-6 py-10 sm:px-10 sm:py-12">
          <MonoLabel>Legal record</MonoLabel>

          <h1 className="mt-4 font-display text-[34px] leading-tight tracking-[-0.01em] text-ink">
            {title}
          </h1>

          <p className="mono-label mt-3">Last updated — {updated}</p>

          <DashedRule className="mt-7" />

          <div className="mt-8 space-y-6 text-[14px] leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-[17px] [&_h2]:text-ink [&_p]:mb-4 [&_a]:text-terracotta [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
