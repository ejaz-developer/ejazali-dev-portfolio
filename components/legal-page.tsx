import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

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
          className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div className="panel mt-6 px-6 py-8 sm:px-9 sm:py-10">
          <h1 className="font-display text-[34px] leading-tight tracking-[-0.01em] text-foreground">
            {title}
          </h1>
          <p className="mt-2 text-[12px] text-sage-ink">Last updated — {updated}</p>

          <div className="mt-8 space-y-6 border-t border-border pt-7 text-[14px] leading-relaxed text-muted [&_h2]:text-[16px] [&_h2]:font-medium [&_h2]:text-foreground [&_h2]:mb-3 [&_p]:mb-4 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
