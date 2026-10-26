"use client";

import { useEffect, useState } from "react";
import { socialLinks } from "@/data/data";
import { cn, externalLinkProps } from "@/lib/utils";
import { Cancel, Menu } from "@/components/icons";

const navItems = [
  { label: "What I do", href: "#what-i-do" },
  { label: "Packages", href: "#packages" },
  { label: "Selected work", href: "#work" },
  { label: "How I work", href: "#how-i-work" },
  { label: "FAQ", href: "#faq" },
];

const linkBase =
  "relative inline-block font-mono text-[11px] uppercase tracking-[0.14em] transition-colors sm:text-[12px]";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-bg-subtle/95 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1000px] items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            handleNav("#hero");
          }}
          className="flex shrink-0 items-baseline gap-2.5"
        >
          <span className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">
            Ejaz Ali
          </span>
          <span className="mono-label hidden xl:inline">Web Developer</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNav(item.href);
                }}
                className={cn(linkBase, "px-2.5 text-muted hover:text-ink")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-0.5 sm:flex">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...externalLinkProps(link.href)}
                    aria-label={link.label}
                    className="flex items-center rounded-[3px] p-1.5 text-ink transition-colors hover:text-teal"
                  >
                    <Icon size={16} />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-9 w-9 items-center justify-center rounded-[3px] text-ink transition-colors hover:bg-bg-2 lg:hidden"
          >
            {open ? <Cancel size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-rule bg-bg lg:hidden"
      >
        <ul className="mx-auto max-w-[1000px] px-4 py-2 sm:px-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNav(item.href);
                }}
                className={cn(
                  linkBase,
                  "w-full border-b border-rule py-3.5 text-ink-subtle hover:text-ink",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="mx-auto flex max-w-[1000px] flex-wrap items-center gap-x-5 gap-y-2 px-4 pb-5 pt-2 sm:px-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...externalLinkProps(link.href)}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
