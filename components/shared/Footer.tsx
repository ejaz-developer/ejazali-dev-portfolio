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
      <footer className="relative bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-indigo-500/10 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
               {/* Brand */}
               <div className="flex items-center gap-3 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-indigo-500/20">
                     EA
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                     Ejaz <span className="text-indigo-500">Ali</span>
                  </h2>
               </div>

               {/* Location & Copyright */}
               <div className="text-center md:text-left space-y-2">
                  <p className="text-muted-foreground font-medium text-sm">
                     © {new Date().getFullYear()} · All Rights Reserved.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-xs font-bold text-indigo-400">
                     <MapPin className="w-3 h-3" />
                     Skardu, Pakistan
                  </div>
               </div>

               {/* Social & Back to Top */}
               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border-r border-indigo-500/10 pr-4">
                     {socialLinks.map((social, idx) => (
                        <a
                           key={idx}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-10 h-10 rounded-xl border border-indigo-500/10 flex items-center justify-center text-muted-foreground hover:text-indigo-400 hover:bg-indigo-500/10 transition-all hover:scale-110"
                           aria-label={social.label}
                        >
                           <social.icon className="w-5 h-5" />
                        </a>
                     ))}
                  </div>

                  <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     onClick={scrollToTop}
                     className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                     title="Back to top"
                  >
                     <ArrowUp className="w-5 h-5" />
                  </motion.button>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
