import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
          className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <h1 className="mt-8 text-[28px] font-medium tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-2 text-[12px] text-muted-2">
          Last updated — {updated}
        </p>

        <div className="mt-10 space-y-6 border-t border-border pt-8 text-[14px] leading-relaxed text-muted [&_h2]:text-[16px] [&_h2]:font-medium [&_h2]:text-foreground [&_h2]:mb-3 [&_p]:mb-4 [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </div>
    </div>
  );
}
