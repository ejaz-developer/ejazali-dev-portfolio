import Link from "next/link";
import { socialLinks } from "@/data/data";
import { siteTagline } from "@/lib/site";
import { DashedRule } from "@/components/primitives";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-[17px] font-semibold tracking-[-0.01em] text-ink">
              Ejaz Ali
            </p>
            <p className="mt-2 max-w-[44ch] text-[13px] leading-relaxed text-muted">
              {siteTagline}
            </p>
            <p className="mono-label mt-3">Skardu, Pakistan · PKT UTC+5</p>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => {
              const external = !link.href.startsWith("mailto:");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="link-underline text-[13px] text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <DashedRule className="my-7" />

        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="mono-label">© {year} Ejaz Ali</p>

          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="/privacy"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
