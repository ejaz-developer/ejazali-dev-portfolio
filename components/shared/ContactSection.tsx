'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, socialLinks } from '@/constant';

const ContactSection = () => {
   const features = [
      'Custom Web Development',
      'UI/UX Design Strategy',
      'API & Database Architecture',
      'Performance Optimization',
   ];

   return (
      <section
         id="contact"
         className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-blue-500/[0.02]"
      >
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full -z-10" />

         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-12">
               {/* Header Content */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-3xl"
               >
                  <Badge
                     variant="outline"
                     className="px-4 py-1 border-blue-500/30 text-blue-600 mb-6 bg-blue-500/5 backdrop-blur-sm"
                  >
                     Let's Connect
                  </Badge>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6">
                     Ready to build <br />
                     <span className="text-blue-600 dark:text-blue-400">
                        something great?
                     </span>
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl font-medium">
                     I'm currently available for freelance work and
                     collaborations. Feel free to reach out through any of these
                     channels.
                  </p>
               </motion.div>

               {/* Contact Cards Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                  {contactInfo.map((item, idx) => (
                     <motion.a
                        key={idx}
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-[32px] border border-blue-500/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group overflow-hidden relative"
                     >
                        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-700" />

                        <div className="relative z-10 flex flex-col items-center">
                           <div className="p-4 rounded-2xl bg-blue-600 text-white mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
                              <item.icon className="w-6 h-6" />
                           </div>
                           <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                              {item.label}
                           </p>
                           <p className="text-xl font-black break-all group-hover:text-blue-600 transition-colors">
                              {item.value}
                           </p>
                        </div>
                     </motion.a>
                  ))}
               </div>

               {/* Social Icons Strip */}
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-center items-center gap-6 pt-12"
               >
                  {socialLinks.map((social, idx) => (
                     <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-2xl border border-blue-500/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-500/30 transition-all hover:scale-110"
                        aria-label={social.label}
                     >
                        <social.icon className="w-6 h-6" />
                     </a>
                  ))}
               </motion.div>

               {/* Features / Capabilities */}
               <div className="flex flex-wrap justify-center gap-6 pt-8">
                  {features.map((feature, idx) => (
                     <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-muted-foreground">
                           {feature}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
