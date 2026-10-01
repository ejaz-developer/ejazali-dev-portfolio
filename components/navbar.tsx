"use client";

import { navLinks, socialLinks } from "@/data/data";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        // activate whichever section crosses a band below the floating nav,
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <nav
        aria-label="Main"
        className="mx-auto flex w-fit max-w-full items-center gap-1 rounded-full border border-white/70 bg-white/60 px-2 py-1.5 backdrop-blur-xl shadow-[inset_0_1px 0_rgba(255,255,255,0.85),0_10px_30px_-12px_rgba(43,39,31,0.28)]"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <Image
            src="/my-hero-image.avif"
            alt="Ejaz Ali"
            width={28}
            height={28}
            className="size-7 rounded-[9px] object-cover grayscale transition-[filter,transform] duration-300 hover:grayscale-0"
          />
          Ejaz Ali
        </a>

        <ul className="flex items-center gap-0.5">
          {navLinks.slice(1).map((link) => {
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
                  data-active={isActive ? "true" : undefined}
                  className={cn(
                    "seg",
                    isActive ? "text-foreground" : undefined,
                  )}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="ml-1 hidden items-center gap-1 border-l border-black/5 pl-2 sm:flex">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center rounded-full p-1.5 text-muted transition-[color,transform] duration-200 hover:text-accent active:scale-90"
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
