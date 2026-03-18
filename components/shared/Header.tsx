'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/constant';

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 transition-all duration-500">
         <div className="max-w-7xl mx-auto">
            <motion.nav
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className={cn(
                  'flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-[28px] border',
                  isScrolled
                     ? 'bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-blue-500/20 shadow-2xl py-3'
                     : 'bg-transparent border-transparent'
               )}
            >
               {/* Logo */}
               <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
                     E
                  </div>
                  <span className="text-2xl font-black tracking-tight group-hover:text-blue-600 transition-colors">
                     Ejaz <span className="text-blue-600">Ali</span>
                  </span>
               </div>

               {/* Desktop Navigation */}
               <div className="hidden md:flex items-center gap-1">
                  {navLinks.map((link) => (
                     <a
                        key={link.name}
                        href={link.href}
                        className="px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:text-blue-600 hover:bg-blue-500/5 transition-all relative group"
                     >
                        {link.name}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-4" />
                     </a>
                  ))}
               </div>

               {/* Action Button */}
               <div className="hidden md:flex">
                  <button className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/10 flex items-center gap-2 group">
                     Let's Talk
                     <ExternalLink
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                     />
                  </button>
               </div>

               {/* Mobile Toggle */}
               <button
                  className="md:hidden w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </motion.nav>
         </div>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed inset-x-4 top-[100px] z-[90] md:hidden"
               >
                  <div className="bg-white/95 dark:bg-black/95 backdrop-blur-3xl rounded-[40px] border border-blue-500/10 p-10 shadow-2xl flex flex-col items-center justify-center gap-8">
                     {navLinks.map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           onClick={() => setIsMobileMenuOpen(false)}
                           className="text-3xl font-black hover:text-blue-600 transition-colors"
                        >
                           {link.name}
                        </a>
                     ))}
                     <button className="mt-4 w-full h-16 bg-blue-600 text-white rounded-2xl font-black text-xl">
                        Work With Me
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Header;
