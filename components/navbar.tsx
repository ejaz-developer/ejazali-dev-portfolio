"use client";

import { navLinks, socialLinks } from "@/data/data";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(isHome ? sectionIds : []);

  const handleNav = useCallback(
    (href: string) => {
      if (isHome) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
    },
    [isHome, router],
  );

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className="glass no-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-full py-2 pr-2 pl-4"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="font-serif text-lg tracking-tight text-foreground transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
        >
          hello<span className="italic text-accent">ejaz</span>
        </a>

        <span aria-hidden className="mx-2 h-4 w-px shrink-0 bg-border" />

        <ul className="flex items-center gap-0.5">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 font-ui text-[13px] font-medium tracking-tight whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <span aria-hidden className="mx-2 h-4 w-px shrink-0 bg-border" />

        <ul className="flex items-center gap-0.5">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex size-8 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-accent/10 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
                >
                  <Icon size={15} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
