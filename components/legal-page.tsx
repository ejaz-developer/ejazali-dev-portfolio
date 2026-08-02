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
    <div className="px-4 pt-36 pb-24 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 font-ui text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to home
        </Link>

        <h1 className="mt-8 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 font-ui text-xs font-medium tracking-wide text-muted-2 uppercase">
          Last updated — {updated}
        </p>

        <div className="mt-12 space-y-8 border-t border-border pt-10 text-sm leading-relaxed text-muted [&_h2]:font-ui [&_h2]:text-base [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mb-3 [&_p]:mb-4 [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/30 [&_a]:underline-offset-4">
          {children}
        </div>
      </div>
    </div>
  );
}
