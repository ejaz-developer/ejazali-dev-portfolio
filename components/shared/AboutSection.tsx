'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Code2, Rocket, Palette } from 'lucide-react';
import { statsData } from '@/constant';

const AboutSection = () => {
   const iconMap: Record<string, any> = {
      Sparkles: Sparkles,
      Rocket: Rocket,
      Palette: Palette,
   };

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
                  <div className="relative z-10 rounded-3xl overflow-hidden border border-indigo-500/10 shadow-2xl bg-muted/20 aspect-square max-w-md mx-auto lg:max-w-none">
                     <Image
                        src="/hero-section.png"
                        alt="Ejaz Ali"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                     />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
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
                        className="px-4 py-1 border-indigo-500/30 text-indigo-400 mb-6 bg-indigo-500/5 backdrop-blur-sm"
                     >
                        My Story
                     </Badge>
                     <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Crafting High-Performance{' '}
                        <span className="text-indigo-500">
                           Digital Experiences.
                        </span>
                     </h2>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm a Full Stack MERN Developer focused on building
                        clean, performant, and user-centric web applications. My
                        approach combines technical excellence with a keen eye
                        for design, ensuring every project is not just
                        functional, but a delight to use.
                     </p>
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     {statsData.map((stat, index) => {
                        const Icon = iconMap[stat.icon] || Sparkles;
                        return (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-indigo-500/30 transition-all duration-300"
                           >
                              <div
                                 className={`p-3 rounded-xl bg-muted w-fit mb-4 ${stat.color} bg-opacity-10`}
                              >
                                 <Icon className={`w-6 h-6 ${stat.color}`} />
                              </div>
                              <h3 className="text-3xl font-bold mb-1">
                                 {stat.value}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                 {stat.label}
                              </p>

                              {stat.technologies && (
                                 <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 bg-card rounded-2xl flex flex-wrap gap-2 items-center justify-center transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                                    {stat.technologies.map((tech) => (
                                       <Badge
                                          key={tech}
                                          variant="secondary"
                                          className="text-[10px] bg-indigo-500 text-white"
                                       >
                                          {tech}
                                       </Badge>
                                    ))}
                                 </div>
                              )}
                           </motion.div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
