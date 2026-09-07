"use client";

import { navLinks, socialLinks } from "@/data/data";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
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
  const lenis = useLenis();

  const handleNav = useCallback(
    (href: string) => {
      if (isHome) {
        if (lenis) {
          lenis.scrollTo(href, { offset: -88 });
        } else {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/${href}`);
      }
    },
    [isHome, router, lenis],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 px-5 backdrop-blur-md sm:px-8">
      <nav aria-label="Main" className="mx-auto flex h-[4.5rem] w-full max-w-[90rem] items-center justify-between gap-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="flex shrink-0 items-center gap-2 font-serif text-[1.35rem] tracking-tight text-foreground transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
        >
          <span className="flex size-7 items-center justify-center bg-foreground font-ui text-[10px] font-bold text-background">EA</span>
          Ejaz Ali
        </a>

        <ul className="hidden items-center gap-7 md:flex">
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
                      "editorial-link font-ui text-[10px] font-semibold tracking-[0.16em] uppercase transition-colors duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none",
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-foreground",
                  )}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="flex items-center gap-1">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                    className="flex size-9 items-center justify-center border border-transparent text-muted transition-colors duration-200 hover:border-border hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
                  >
                  <Icon size={15} />
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav("#contact"); }} className="hidden border border-foreground bg-foreground px-3 py-2 font-ui text-[9px] font-semibold tracking-[0.14em] text-background uppercase transition-colors hover:border-accent hover:bg-accent sm:inline-flex md:hidden">Start a project</a>
      </nav>
    </header>
  );
}
