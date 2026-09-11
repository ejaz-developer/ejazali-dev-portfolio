import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-5">
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
          Page not found
        </p>
        <h1 className="mt-4 text-[48px] font-medium tracking-tight text-foreground">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
          This page doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
