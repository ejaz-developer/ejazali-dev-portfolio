'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Code2, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
   const stats = [
      {
         label: 'Years Experience',
         value: '3+',
         icon: Sparkles,
         color: 'text-blue-500',
      },
      {
         label: 'Projects Completed',
         value: '20+',
         icon: Rocket,
         color: 'text-purple-500',
      },
      {
         label: 'Happy Clients',
         value: '15+',
         icon: Heart,
         color: 'text-pink-500',
      },
   ];

   return (
      <section
         id="about"
         className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               {/* Left: Interactive Image/Grid */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
               >
                  <div className="relative z-10 rounded-3xl overflow-hidden border border-blue-500/10 shadow-2xl bg-muted/20">
                     <Image
                        src="/hero-section.png"
                        alt="About Me"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover"
                     />
                  </div>

                  {/* Floating Tech Stack */}
                  <div className="absolute -bottom-6 -right-6 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-blue-500/20">
                     <div className="flex items-center gap-3 mb-4">
                        <Code2 className="text-blue-600" />
                        <span className="font-bold">Tech Stack</span>
                     </div>
                     <div className="grid grid-cols-3 gap-2">
                        {[
                           'React',
                           'Next.js',
                           'Node',
                           'TS',
                           'Tailwind',
                           'MongoDB',
                        ].map((tech) => (
                           <Badge
                              key={tech}
                              variant="secondary"
                              className="text-[10px] py-1"
                           >
                              {tech}
                           </Badge>
                        ))}
                     </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute top-1/2 -right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-[100px]" />
               </motion.div>

               {/* Right: Content */}
               <div className="space-y-8">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                  >
                     <Badge
                        variant="outline"
                        className="px-4 py-1 border-blue-500/30 text-blue-600 mb-6 bg-blue-500/5 backdrop-blur-sm"
                     >
                        My Story
                     </Badge>
                     <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        Crafting High-Performance <br />
                        <span className="text-blue-600 dark:text-blue-400">
                           Digital Solutions
                        </span>
                     </h2>
                     <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        I am a passionate Full Stack Developer with a deep love
                        for building seamless user experiences. My journey
                        started with a curiosity for how things work on the web,
                        which evolved into a professional career focused on
                        modern frameworks and scalable architecture.
                     </p>
                     <p className="text-muted-foreground text-lg leading-relaxed">
                        Based in the beautiful Skardu, Pakistan, I bring a
                        unique perspective and global standards to every project
                        I undertake. I believe in writing clean, maintainable
                        code that not only solves problems but delights users.
                     </p>
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                     {stats.map((stat, idx) => (
                        <motion.div
                           key={idx}
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: idx * 0.1 }}
                           className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 group hover:border-blue-500/30 transition-all text-center"
                        >
                           <stat.icon
                              className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`}
                           />
                           <h3 className="text-3xl font-black mb-1">
                              {stat.value}
                           </h3>
                           <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                              {stat.label}
                           </p>
                        </motion.div>
                     ))}
                  </div>

                  <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     className="pt-4"
                  >
                     <Button
                        size="lg"
                        className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                     >
                        Let's Talk Business
                     </Button>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
