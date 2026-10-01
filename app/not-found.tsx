import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-5">
      <div className="panel w-full max-w-[400px] px-8 py-12 text-center">
        <p className="font-display text-[17px] italic text-sage-ink">
          Page not found
        </p>
        <h1 className="mt-3 font-display text-[64px] leading-none tracking-[-0.01em] text-accent">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
          This page doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
