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
         className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background border-t-[3px] border-foreground"
      >
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(150,150,150,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(150,150,150,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               {/* Left: Interactive Image/Grid */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative p-2 border-[3px] border-foreground bg-muted shadow-[12px_12px_0px_0px_rgba(150,150,150,1)]"
               >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-foreground z-20 -translate-x-[3px] -translate-y-[3px]"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-foreground z-20 translate-x-[3px] -translate-y-[3px]"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-foreground z-20 -translate-x-[3px] translate-y-[3px]"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-foreground z-20 translate-x-[3px] translate-y-[3px]"></div>

                  <div className="absolute top-4 left-4 z-20 bg-foreground text-background font-mono text-[10px] px-2 py-1 font-bold shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]">
                     [ VISUAL_DATA ]
                  </div>

                  <div className="relative z-10 rounded-none overflow-hidden aspect-square max-w-md mx-auto lg:max-w-none filter grayscale contrast-125 border-2 border-foreground">
                     <Image
                        src="/hero-section.png"
                        alt="Ejaz Ali"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-foreground/10 mix-blend-overlay"></div>
                  </div>
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
                        className="px-6 py-2 border-[3px] border-foreground text-foreground mb-8 rounded-none font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] font-mono"
                     >
                        [ ROOT_ACCESS ]
                     </Badge>
                     <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter decoration-foreground decoration-8 underline-offset-8">
                        Architecting{' '}
                        <span className="text-muted-foreground italic bg-foreground text-background px-2 tracking-widest">
                           SYSTEMS.
                        </span>
                     </h2>
                     <p className="text-lg text-foreground font-mono leading-relaxed border-l-4 border-foreground pl-6">
                        {'>'} INITIALIZING_DEV_PROFILE...
                        <br />
                        {'>'} MERN_STACK_ENGINEER_DETECTED
                        <br />
                        {'>'} FOCUS: PERFORMANCE_AND_UI_UX
                        <br />
                        <span className="mt-4 block text-muted-foreground">
                           Building robust, clean, and user-centric
                           architecture. Merging technical precision with raw
                           brutalist aesthetics to deploy high-performing
                           solutions.
                        </span>
                     </p>
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     {statsData.map((stat, index) => {
                        const Icon = iconMap[stat.icon] || Code2;
                        return (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="group relative p-6 rounded-none bg-card border-[3px] border-foreground hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_0px_rgba(150,150,150,1)]"
                           >
                              <div className="p-3 rounded-none border-[3px] border-foreground bg-muted w-fit mb-4 text-foreground shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]">
                                 <Icon className="w-6 h-6 text-foreground" />
                              </div>
                              <h3 className="text-3xl font-black mb-1 font-mono">
                                 {stat.value}
                              </h3>
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
                                 [ {stat.label} ]
                              </p>

                              {stat.technologies && (
                                 <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 bg-foreground rounded-none flex flex-wrap gap-2 items-center justify-center transition-opacity duration-300 z-20">
                                    {stat.technologies.map((tech) => (
                                       <Badge
                                          key={tech}
                                          variant="outline"
                                          className="text-[10px] bg-background text-foreground border-2 border-background rounded-none font-bold uppercase font-mono shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]"
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
