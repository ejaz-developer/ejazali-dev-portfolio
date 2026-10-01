import { socialLinks } from "@/data/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-[14px] font-medium text-foreground">
              Ejaz Ali
            </p>
            <p className="mt-1 text-[12px] text-muted">
              Full-stack web engineer · Skardu, Pakistan
            </p>
          </div>

          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[12px] text-muted-2">
            © {new Date().getFullYear()} Ejaz Ali
          </p>

          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="/privacy"
                className="link-underline text-[12px] text-muted transition-colors duration-200 hover:text-accent"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="link-underline text-[12px] text-muted transition-colors duration-200 hover:text-accent"
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
