import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function Footer() {
   const currentYear = new Date().getFullYear();

   const socialLinks = [
      {
         icon: Github,
         href: 'https://github.com/ejaz-developer',
         label: 'GitHub',
      },
      {
         icon: Linkedin,
         href: 'https://www.linkedin.com/in/ejaz-developer/',
         label: 'LinkedIn',
      },
      { icon: Mail, href: 'mailto:contact@ejaz.dev', label: 'Email' },
   ];

   const footerLinks = {
      Navigation: [
         { name: 'About', href: '#about' },
         { name: 'Projects', href: '#projects' },
         { name: 'Skills', href: '#skills' },
         { name: 'Contact', href: '#contact' },
      ],
      Connect: [
         { name: 'GitHub', href: 'https://github.com/ejaz-developer' },
         {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ejaz-developer/',
         },
         { name: 'Email', href: 'mailto:contact@ejaz.dev' },
      ],
   };

   return (
      <footer className="border-t border-zinc-800 bg-black">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {/* Brand Section */}
               <div className="md:col-span-2">
                  <a
                     href="#"
                     className="text-2xl font-bold text-white hover:text-zinc-300 transition-colors inline-block mb-4"
                  >
                     Ejaz<span className="text-blue-500">.</span>dev
                  </a>
                  <p className="text-zinc-400 text-sm max-w-md mb-6">
                     Passionate software developer dedicated to bringing ideas
                     to life through elegant code and innovative solutions.
                  </p>
                  <div className="flex gap-4">
                     {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                           <a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-400 hover:text-white transition-colors"
                              aria-label={social.label}
                           >
                              <Icon className="h-5 w-5" />
                           </a>
                        );
                     })}
                  </div>
               </div>

               {/* Links Sections */}
               {Object.entries(footerLinks).map(([title, links]) => (
                  <div key={title}>
                     <h3 className="text-white font-semibold mb-4">{title}</h3>
                     <ul className="space-y-2">
                        {links.map((link) => (
                           <li key={link.name}>
                              <a
                                 href={link.href}
                                 className="text-zinc-400 hover:text-white text-sm transition-colors"
                              >
                                 {link.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <Separator className="my-8 bg-zinc-800" />

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
               <p className="text-zinc-400 text-sm">
                  © {currentYear} Ejaz Developer. All rights reserved.
               </p>
               <div className="flex gap-6 text-sm">
                  <a
                     href="#privacy"
                     className="text-zinc-400 hover:text-white transition-colors"
                  >
                     Privacy Policy
                  </a>
                  <a
                     href="#terms"
                     className="text-zinc-400 hover:text-white transition-colors"
                  >
                     Terms of Service
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
