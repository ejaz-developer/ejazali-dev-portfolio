"use client";

import { navLinks, socialLinks } from "@/data/data";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

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

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(sectionIds);

  const handleNav = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 rounded-lg bg-surface border border-border text-muted hover:text-accent transition-colors"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-60 bg-background/95 backdrop-blur-xl border-r border-border flex flex-col p-8 transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1 rounded-md text-muted hover:text-accent transition-colors"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        <div className="mb-10">
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            helloejaz
          </h1>
          <p className="text-sm text-muted mt-1">Full-stack developer</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-all duration-200 text-left ${
                      isActive
                        ? "text-foreground bg-surface"
                        : "text-muted hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        isActive ? "bg-accent" : "bg-border"
                      }`}
                    />
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-6 border-t border-border">
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface transition-all duration-200"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      <div className="hidden lg:block w-60 shrink-0" />
    </>
  );
}
