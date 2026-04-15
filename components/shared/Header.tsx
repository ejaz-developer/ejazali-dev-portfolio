'use client';

import { navLinks } from '@/constant';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeSection, setActiveSection] = useState('Home');

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);

         const sections = ['work', 'about', 'experience', 'contact'];
         const current = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
               const rect = element.getBoundingClientRect();
               return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
         });
         if (current)
            setActiveSection(
               current.charAt(0).toUpperCase() + current.slice(1)
            );
         else if (window.scrollY < 100) setActiveSection('Home');
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <header className="fixed top-0 left-0 right-0 z-100 px-4 py-6 transition-all duration-500">
         <div className="max-w-7xl mx-auto">
            <motion.nav
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className={cn(
                  'flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-full border',
                  isScrolled
                     ? 'bg-black/80 backdrop-blur-xl border-primary/20 shadow-2xl py-3'
                     : 'bg-transparent border-transparent'
               )}
            >
               {/* Logo */}
               <div
                  className="flex items-center gap-2 group cursor-pointer"
                  onClick={() =>
                     window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
               >
                  <span className="text-xl font-black tracking-tight text-white uppercase italic group-hover:underline decoration-white underline-offset-4 transition-all">
                     EA
                  </span>
               </div>

               {/* Desktop Navigation */}
               <div className="hidden md:flex items-center gap-1">
                  {navLinks.map((link) => (
                     <a
                        key={link.name}
                        href={link.href}
                        className={cn(
                           'px-6 py-2 rounded-full text-sm font-medium transition-all relative group',
                           activeSection === link.name
                              ? 'text-primary'
                              : 'text-gray-400 hover:text-white'
                        )}
                     >
                        {link.name}
                        {activeSection === link.name && (
                           <motion.span
                              layoutId="activeSection"
                              className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                              transition={{
                                 type: 'spring',
                                 bounce: 0.2,
                                 duration: 0.6,
                              }}
                           />
                        )}
                     </a>
                  ))}
               </div>

               {/* Action Button */}
               <div className="hidden md:flex">
                  <button
                     onClick={() =>
                        document
                           .getElementById('contact')
                           ?.scrollIntoView({ behavior: 'smooth' })
                     }
                     className="px-6 py-2.5 bg-foreground text-black rounded-none border-2 border-foreground font-black text-sm uppercase tracking-wider hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] flex items-center gap-2 group"
                  >
                     [ INIT_COMMS ]
                     <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                     />
                  </button>
               </div>

               {/* Mobile Toggle */}
               <button
                  className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </motion.nav>
         </div>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-x-4 top-24 z-90 md:hidden"
               >
                  <div className="bg-black/95 backdrop-blur-2xl rounded-3xl border border-primary/20 p-8 shadow-2xl flex flex-col gap-4">
                     {navLinks.map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           onClick={() => setIsMobileMenuOpen(false)}
                           className={cn(
                              'text-2xl font-bold py-2 transition-colors',
                              activeSection === link.name
                                 ? 'text-primary'
                                 : 'text-white hover:text-primary'
                           )}
                        >
                           {link.name}
                        </a>
                     ))}
                     <button
                        onClick={() => {
                           setIsMobileMenuOpen(false);
                           document
                              .getElementById('contact')
                              ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg"
                     >
                        Get Started
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Header;
