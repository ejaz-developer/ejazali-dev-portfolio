'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Heart, Linkedin, Github, Twitter, ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
   const footerRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   useGSAP(
      () => {
         gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 30 },
            {
               opacity: 1,
               y: 0,
               duration: 0.8,
               ease: 'power3.out',
               scrollTrigger: {
                  trigger: footerRef.current,
                  start: 'top 90%',
                  end: 'bottom bottom',
                  toggleActions: 'play none none reverse',
               },
            }
         );
      },
      { scope: footerRef }
   );

   return (
      <footer
         ref={footerRef}
         className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700"
      >
         <div className="max-w-7xl mx-auto">
            <div
               ref={contentRef}
               className="flex flex-col items-center justify-center space-y-6"
            >
               {/* Social Links */}
               <div className="flex items-center gap-4">
                  <a
                     href="https://linkedin.com/in/ejazali"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                     aria-label="LinkedIn"
                  >
                     <Linkedin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </a>
                  <a
                     href="https://github.com/ejazali"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                     aria-label="GitHub"
                  >
                     <Github className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </a>
                  <a
                     href="https://twitter.com/ejazali"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                     aria-label="Twitter"
                  >
                     <Twitter className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </a>
               </div>

               {/* Tagline */}
               <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                  Crafting digital experiences with passion and precision.
               </p>

               {/* Copyright */}
               <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1">
                  © {new Date().getFullYear()} Ejaz Ali. Made with
                  <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
                  in Skardu.
               </p>

               {/* Back to top button */}
               <Button
                  onClick={scrollToTop}
                  size="icon"
                  variant="outline"
                  className="rounded-full border-gray-300 dark:border-gray-600 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:border-indigo-400 transition-all"
                  aria-label="Back to top"
               >
                  <ArrowUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
               </Button>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
