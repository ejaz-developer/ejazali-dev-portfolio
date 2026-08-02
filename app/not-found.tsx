import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4 pt-24 pb-16">
      <div className="w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] border border-border bg-surface px-6 py-20 text-center shadow-[0_24px_80px_-32px_rgba(17,24,39,0.18)] sm:px-14 sm:py-28">
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:24px_24px]"
          />
          <div className="relative">
            <p className="eyebrow">Page not found</p>
            <h1 className="mt-4 font-serif text-7xl tracking-tight text-foreground sm:text-8xl">
              <span className="text-accent italic">404</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
              This page doesn&apos;t exist or has moved. The work is still
              there — head back to the homepage and it&apos;ll be waiting.
            </p>
            <div className="mt-10">
              <Link href="/" className="btn-primary group">
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
