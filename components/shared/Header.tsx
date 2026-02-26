'use client';

import { navLinks } from '@/constant';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useTheme } from 'next-themes';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Header() {
   const { setTheme, theme, resolvedTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const headerRef = useRef<HTMLElement>(null);
   const navContainerRef = useRef<HTMLDivElement>(null);
   const logoRef = useRef<HTMLAnchorElement>(null);
   const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
   const actionsRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      setMounted(true);
   }, []);

   useEffect(() => {
      if (!mounted) return;

      const ctx = gsap.context(() => {
         // Initial states
         gsap.set(
            [logoRef.current, navContainerRef.current, actionsRef.current],
            {
               opacity: 0,
               y: -20,
            }
         );

         const tl = gsap.timeline({
            defaults: { ease: 'power3.out' },
            delay: 0.2,
         });

         tl.to(logoRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
         })
            .to(
               navContainerRef.current,
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
               },
               '-=0.5'
            )
            .to(
               actionsRef.current,
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
               },
               '-=0.5'
            )
            .fromTo(
               navItemsRef.current,
               { opacity: 0, y: 10 },
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.06,
                  ease: 'power2.out',
               },
               '-=0.4'
            );

         // Subtle floating animation for nav container
         gsap.to(navContainerRef.current, {
            y: '-=5',
            duration: 0.6,
            ease: 'sine.inOut',
            yoyo: true,
         });

         // Scroll-based background enhancement
         ScrollTrigger.create({
            trigger: document.body,
            start: 'top top',
            end: 'max',
            onUpdate: (self) => {
               const scrollProgress = self.progress;
               const blurAmount = 4 + scrollProgress * 10;
               const bgOpacity = 0.3 + scrollProgress * 0.4;

               gsap.to(headerRef.current, {
                  backdropFilter: `blur(${blurAmount}px)`,
                  backgroundColor:
                     resolvedTheme === 'dark'
                        ? `rgba(1, 31, 46, ${bgOpacity})`
                        : `rgba(255, 255, 255, ${bgOpacity})`,
                  duration: 0.1,
                  overwrite: 'auto',
               });
            },
         });
      }, headerRef);

      return () => ctx.revert();
   }, [mounted, resolvedTheme]);

   const handleNavHoverEnter = (el: HTMLAnchorElement) => {
      gsap.to(el, { y: -2, duration: 0.25, ease: 'power2.out' });
   };

   const handleNavHoverLeave = (el: HTMLAnchorElement) => {
      gsap.to(el, { y: 0, duration: 0.25, ease: 'power2.in' });
   };

   const handleContactHoverEnter = (el: HTMLButtonElement) => {
      const icon = el.querySelector('.contact-icon');
      gsap.to(icon, { x: 3, y: -3, duration: 0.3, ease: 'power2.out' });
   };

   const handleContactHoverLeave = (el: HTMLButtonElement) => {
      const icon = el.querySelector('.contact-icon');
      gsap.to(icon, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
   };

   // Prevent hydration mismatch
   if (!mounted) {
      return (
         <header className="fixed top-0 left-0 right-0 z-50 h-20">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
               <div className="text-2xl font-bold">Ejaz.</div>
            </div>
         </header>
      );
   }

   return (
      <header
         ref={headerRef}
         className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
         style={{
            backdropFilter: 'blur(4px)',
            backgroundColor:
               resolvedTheme === 'dark'
                  ? 'rgba(1, 31, 46, 0.3)'
                  : 'rgba(255, 255, 255, 0.3)',
         }}
      >
         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a
               ref={logoRef}
               href="#"
               className="text-2xl font-bold tracking-tight cursor-pointer select-none group"
            >
               <span className="relative">
                  Ejaz
                  <span className="text-primary transition-transform duration-300 inline-block group-hover:rotate-12">
                     .
                  </span>
               </span>
            </a>

            {/* Floating Navigation Pill */}
            <div
               ref={navContainerRef}
               className="hidden md:flex items-center mt-8 "
            >
               <nav className="relative px-2 py-2 rounded-full border border-border/30 bg-card/60 backdrop-blur-md shadow-lg shadow-black/5">
                  <ul className="flex items-center gap-1">
                     {navLinks.map((link, i) => (
                        <li key={link.name}>
                           <a
                              href={link.href}
                              ref={(el) => {
                                 navItemsRef.current[i] = el;
                              }}
                              className="relative px-5 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 rounded-full hover:bg-accent/10 block"
                              onMouseEnter={(e) =>
                                 handleNavHoverEnter(e.currentTarget)
                              }
                              onMouseLeave={(e) =>
                                 handleNavHoverLeave(e.currentTarget)
                              }
                           >
                              {link.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>

            {/* Actions */}
            <div ref={actionsRef} className="flex items-center gap-3">
               {/* Theme Toggle */}
               <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full w-10 h-10 text-foreground/70 hover:text-foreground hover:bg-accent/10 transition-all duration-300"
                  onClick={() =>
                     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                  }
                  aria-label="Toggle theme"
               >
                  {resolvedTheme === 'dark' ? (
                     <Sun className="h-5 w-5 text-amber-400" />
                  ) : (
                     <Moon className="h-5 w-5 text-slate-600" />
                  )}
               </Button>

               {/* Contact Button */}
               <Button
                  variant="outline"
                  size="sm"
                  className="relative group rounded-full px-5 py-2 h-10 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                  onMouseEnter={(e) =>
                     handleContactHoverEnter(
                        e.currentTarget as HTMLButtonElement
                     )
                  }
                  onMouseLeave={(e) =>
                     handleContactHoverLeave(
                        e.currentTarget as HTMLButtonElement
                     )
                  }
               >
                  <span className="font-medium text-sm">Contact</span>
                  <ArrowUpRight className="contact-icon ml-1 h-4 w-4 transition-transform duration-300" />
               </Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
