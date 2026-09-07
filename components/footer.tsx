import { navLinks, socialLinks } from "@/data/data";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[-0.03em] text-foreground">Ejaz Ali</p>
          <p className="mt-2 font-ui text-[9px] font-semibold tracking-[0.16em] text-muted uppercase">Full-stack developer / software that ships</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {navLinks.map((link) => <a key={link.href} href={`/${link.href}`} className="editorial-link font-ui text-[9px] font-semibold tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent">{link.name}</a>)}
          {socialLinks.slice(0, 2).map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="editorial-link inline-flex items-center gap-1 font-ui text-[9px] font-semibold tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent">{link.label} <ArrowUpRight size={11} /></a>)}
          <a href="/privacy" className="font-ui text-[9px] font-semibold tracking-[0.14em] text-muted-2 uppercase hover:text-accent">Privacy</a>
          <a href="/terms" className="font-ui text-[9px] font-semibold tracking-[0.14em] text-muted-2 uppercase hover:text-accent">Terms</a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[90rem] justify-between border-t border-border pt-4 font-ui text-[9px] font-semibold tracking-[0.12em] text-muted-2 uppercase"><span>© {new Date().getFullYear()} Ejaz Ali</span><a href="#hero" className="hover:text-accent">Back to top ↑</a></div>
    </footer>
  );
}
