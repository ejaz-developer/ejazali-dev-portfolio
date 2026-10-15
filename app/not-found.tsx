import Link from "next/link";
import { ArrowLeft } from "@/components/icons";
import { DashedRule, MonoLabel } from "@/components/primitives";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-5">
      <div className="w-full max-w-[420px] border border-rule bg-paper-2 px-8 py-12 text-center">
        <MonoLabel>Error / not found</MonoLabel>

        <h1 className="mt-4 font-display text-[64px] leading-none tracking-[-0.01em] text-terracotta">
          404
        </h1>

        <p className="mx-auto mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
          This page doesn&apos;t exist or has moved.
        </p>

        <DashedRule className="my-7" />

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-terracotta"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
