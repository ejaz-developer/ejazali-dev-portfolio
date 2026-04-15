'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, MapPin } from 'lucide-react';
import { socialLinks } from '@/constant';

const Footer = () => {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <footer className="relative bg-background py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-foreground overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               {/* Brand */}
               <div className="flex items-center gap-3 group cursor-default">
                  <span className="text-3xl font-black tracking-tighter text-foreground uppercase italic group-hover:underline decoration-foreground decoration-4 underline-offset-4 transition-all">
                     Ejaz Ali
                  </span>
               </div>

               {/* Location & Copyright */}
               <div className="text-center md:text-left space-y-4">
                  <p className="text-foreground font-black text-sm uppercase tracking-widest">
                     © {new Date().getFullYear()} · All Rights Reserved
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-background border-2 border-foreground text-xs font-black uppercase tracking-widest text-foreground shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]">
                     <MapPin className="w-4 h-4" />
                     Skardu, Pakistan
                  </div>
               </div>

               {/* Social & Back to Top */}
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 border-r-2 border-foreground pr-6">
                     {socialLinks.map((social, idx) => (
                        <a
                           key={idx}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-12 h-12 rounded-none border-2 border-foreground bg-background flex items-center justify-center text-foreground hover:text-background hover:bg-foreground transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(150,150,150,1)] group"
                           aria-label={social.label}
                        >
                           <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                     ))}
                  </div>

                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={scrollToTop}
                     className="w-12 h-12 rounded-none bg-foreground text-background flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(150,150,150,1)] transition-all border-2 border-foreground hover:bg-background hover:text-foreground"
                     title="Back to top"
                  >
                     <ArrowUp className="w-6 h-6" />
                  </motion.button>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
