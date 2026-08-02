import { navLinks, socialLinks } from "@/data/data";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-2xl tracking-tight text-foreground">
              hello<span className="italic text-accent">ejaz</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Full-stack developer building web applications from Skardu,
              Pakistan.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`/${link.href}`}
                    className="text-sm text-muted transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
                    >
                      <Icon size={13} />
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="text-muted-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Ejaz Ali. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="text-xs text-muted-2 transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-xs text-muted-2 transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
            >
              Terms
            </a>
            <a
              href="#hero"
              className="text-xs text-muted-2 transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
