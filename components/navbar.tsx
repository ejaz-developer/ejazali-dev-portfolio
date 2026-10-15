"use client";

import { navLinks, socialLinks } from "@/data/data";
import { useCallback, useEffect, useState } from "react";
import { cn, externalLinkProps } from "@/lib/utils";

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
        // activate whichever section crosses a band below the fixed nav,
        // independent of how tall the section is
        { threshold: 0, rootMargin: "-100px 0px -60% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export default function Navbar() {
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(sectionIds);

  const handleNav = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1000px] items-center justify-between gap-3 px-4 sm:px-6"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="flex shrink-0 items-baseline gap-2.5"
        >
          <span className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">
            Ejaz Ali
          </span>
          <span className="mono-label hidden md:inline">Web Developer</span>
        </a>

        <ul className="flex items-center gap-0.5 sm:gap-1">
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
                    "relative inline-block px-2 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors sm:px-2.5 sm:text-[12px]",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-2 -bottom-px h-px bg-terracotta transition-transform duration-200",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="hidden items-center gap-0.5 sm:flex">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...externalLinkProps(link.href)}
                  aria-label={link.label}
                  className="flex items-center rounded-[3px] p-1.5 text-muted transition-colors hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
