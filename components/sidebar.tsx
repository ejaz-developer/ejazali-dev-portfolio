"use client";

import { navLinks, socialLinks } from "@/data/data";
import { useCallback, useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

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

export default function AppSidebar() {
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(sectionIds);

  const handleNav = useCallback((href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="p-4 pt-5">
        <div className="px-2">
          <h1 className="text-base font-semibold tracking-tight text-foreground">
            helloejaz
          </h1>
          <p className="text-xs text-muted mt-0.5">Full-stack developer</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton
                      isActive={isActive}
                      onClick={() => handleNav(link.href)}
                      className={cn(
                        "gap-3",
                        isActive && "text-accent font-medium"
                      )}
                    >
                      <span
                        className={cn(
                          "shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-200",
                          isActive
                            ? "bg-accent shadow-[0_0_6px_rgba(168,85,247,0.5)]"
                            : "bg-border"
                        )}
                      />
                      <span>{link.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 pb-5">
        <SidebarSeparator className="mx-0 mb-3" />
        <div className="flex items-center gap-1 px-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-sidebar-accent transition-all duration-200"
                aria-label={link.label}
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
