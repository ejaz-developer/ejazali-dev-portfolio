'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import GitHubHeaderStats from './GitHubHeaderStats';

function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const navLinks = [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
   ];

   return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
               {/* Logo */}
               <a
                  href="#"
                  className="text-xl font-bold text-white hover:text-zinc-300 transition-colors"
               >
                  Ejaz<span className="text-blue-500">.</span>dev
               </a>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                     <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                     >
                        {link.name}
                     </a>
                  ))}
               </nav>

               {/* Social Links & CTA */}
               <div className="hidden md:flex items-center gap-4">
                  <GitHubHeaderStats username="ejaz-developer" />
                  <a
                     href="https://github.com/ejaz-developer"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-zinc-400 hover:text-white transition-colors"
                  >
                     <Github className="h-5 w-5" />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/ejaz-developer/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-zinc-400 hover:text-white transition-colors"
                  >
                     <Linkedin className="h-5 w-5" />
                  </a>
                  <Button
                     size="sm"
                     className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                     <Mail className="h-4 w-4 mr-2" />
                     Contact Me
                  </Button>
               </div>

               {/* Mobile Menu Button */}
               <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
               >
                  {isMenuOpen ? (
                     <X className="h-6 w-6" />
                  ) : (
                     <Menu className="h-6 w-6" />
                  )}
               </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
               <div className="md:hidden py-4 border-t border-zinc-800">
                  <nav className="flex flex-col gap-4">
                     {navLinks.map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           {link.name}
                        </a>
                     ))}
                     <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                        <a
                           href="https://github.com/ejaz-developer"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-zinc-400 hover:text-white transition-colors"
                        >
                           <Github className="h-5 w-5" />
                        </a>
                        <a
                           href="https://linkedin.com/in/ejaz-developer"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-zinc-400 hover:text-white transition-colors"
                        >
                           <Linkedin className="h-5 w-5" />
                        </a>
                        <Button
                           size="sm"
                           className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                           <Mail className="h-4 w-4 mr-2" />
                           Contact
                        </Button>
                     </div>
                  </nav>
               </div>
            )}
         </div>
      </header>
   );
}

export default Header;
