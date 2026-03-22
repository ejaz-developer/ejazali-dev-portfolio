'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
   Send,
   MapPin,
   Phone,
   Mail,
   Github,
   Linkedin,
   Twitter,
} from 'lucide-react';
import { contactInfo, socialLinks } from '@/constant';

const ContactSection = () => {
   return (
      <section
         id="contact"
         className="py-24 px-4 bg-background relative overflow-hidden"
      >
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
               <Badge
                  variant="outline"
                  className="px-4 py-1 border-indigo-500/30 text-indigo-400 mb-6 bg-indigo-500/5 backdrop-blur-sm"
               >
                  Get In Touch
               </Badge>
               <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                  Ready to Build{' '}
                  <span className="text-indigo-500">Something Great?</span>
               </h2>
               <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  I'm currently available for freelance work and collaborations.
                  Let's talk about your next project.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               {/* Contact Form */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-3xl border border-border shadow-2xl"
               >
                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-medium text-white">
                              Your Name
                           </label>
                           <Input
                              placeholder="John Doe"
                              className="bg-muted border-border focus:border-indigo-500 transition-colors py-6 rounded-xl"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-medium text-white">
                              Your Email
                           </label>
                           <Input
                              placeholder="john@example.com"
                              className="bg-muted border-border focus:border-indigo-500 transition-colors py-6 rounded-xl"
                           />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-white">
                           Subject
                        </label>
                        <Input
                           placeholder="Project Inquiry"
                           className="bg-muted border-border focus:border-indigo-500 transition-colors py-6 rounded-xl"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-white">
                           Your Message
                        </label>
                        <Textarea
                           placeholder="Tell me about your project..."
                           className="min-h-[150px] bg-muted border-border focus:border-indigo-500 transition-colors rounded-xl"
                        />
                     </div>
                     <Button
                        size="lg"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white gap-2 h-14 rounded-xl transition-all hover:scale-105"
                     >
                        Send Message
                        <Send className="w-4 h-4" />
                     </Button>
                  </form>
               </motion.div>

               {/* Contact Information */}
               <div className="space-y-12">
                  <div className="space-y-8">
                     {contactInfo.map((info, index) => (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                           className="flex items-center gap-6 group"
                        >
                           <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                              <info.icon className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-sm text-muted-foreground mb-1">
                                 {info.label}
                              </p>
                              <a
                                 href={info.href}
                                 className="text-xl font-bold text-white hover:text-indigo-400 transition-colors"
                              >
                                 {info.value}
                              </a>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  <div className="pt-8 border-t border-border">
                     <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">
                        Follow Me
                     </p>
                     <div className="flex flex-wrap gap-4">
                        {socialLinks.map((social, index) => (
                           <motion.a
                              key={index}
                              href={social.href}
                              target="_blank"
                              whileHover={{ scale: 1.1, y: -4 }}
                              className="p-4 rounded-2xl bg-muted border border-border text-white hover:border-indigo-500 hover:text-indigo-500 transition-all shadow-md group"
                           >
                              <social.icon className="w-6 h-6" />
                           </motion.a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
