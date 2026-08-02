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
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "fixed inset-x-0 z-50 flex justify-center px-4 transition-all duration-300",
        scrolled ? "top-1.5" : "top-4",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "glass no-scrollbar flex w-full items-center justify-between gap-2 overflow-x-auto rounded-full pr-2 pl-4 transition-all duration-300",
          scrolled ? "max-w-3xl py-1.5" : "max-w-7xl py-2",
        )}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className={cn(
            "flex shrink-0 items-center font-serif tracking-tight text-foreground transition-colors hover:text-accent focus-visible:rounded focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none",
            scrolled ? "text-base" : "text-lg",
          )}
        >
          Ejaz <span className="italic text-accent">Ali</span>
        </a>

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
                    "rounded-full font-ui font-medium tracking-tight transition-colors duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none",
                    scrolled ? "px-3 py-1.5 text-[12px]" : "px-3.5 py-2 text-[13px]",
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
                  <Icon size={scrolled ? 14 : 15} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
