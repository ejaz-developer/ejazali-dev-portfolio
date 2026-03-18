'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '@/constant';

const WorkSection = () => {
   return (
      <section
         id="work"
         className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-500/[0.02]"
      >
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <Badge
                     variant="outline"
                     className="px-4 py-1 border-blue-500/30 text-blue-600 mb-6 bg-blue-500/5 backdrop-blur-sm"
                  >
                     Featured Work
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-black leading-tight">
                     Building the <br />
                     <span className="text-blue-600 dark:text-blue-400">
                        Digital Horizon
                     </span>
                  </h2>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <p className="max-w-md text-muted-foreground text-lg mb-4">
                     I specialize in turning complex ideas into intuitive, fast,
                     and visually stunning web experiences. Here are a few
                     pieces of my recent work.
                  </p>
                  <Button
                     variant="link"
                     className="p-0 text-blue-600 h-auto group font-bold text-lg"
                  >
                     View All Projects
                     <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               {projects.map((project, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className={`group relative rounded-[40px] overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 p-8 md:p-12 flex flex-col justify-between h-[600px] lg:h-[700px] hover:shadow-2xl transition-all duration-700`}
                  >
                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                           <div className="space-y-4">
                              <h3 className="text-3xl md:text-4xl font-black group-hover:text-blue-600 transition-colors duration-500">
                                 {project.title}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                 {[
                                    'Next.js',
                                    'React',
                                    'Tailwind',
                                    'Modern UI',
                                 ].map((tag) => (
                                    <Badge
                                       key={tag}
                                       variant="secondary"
                                       className="bg-white/40 dark:bg-black/40 backdrop-blur-md border-white/10 text-xs py-1 px-3"
                                    >
                                       {tag}
                                    </Badge>
                                 ))}
                              </div>
                           </div>
                           <div className="flex gap-3">
                              {project.github && (
                                 <a
                                    href={project.github}
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 hover:scale-110 transition-transform"
                                 >
                                    <Github className="w-5 h-5" />
                                 </a>
                              )}
                              <a
                                 href={project.preview}
                                 target="_blank"
                                 className="p-3 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 hover:scale-110 transition-transform text-blue-600"
                              >
                                 <ExternalLink className="w-5 h-5" />
                              </a>
                           </div>
                        </div>
                        <p className="text-muted-foreground text-lg max-w-sm font-medium mb-12 group-hover:dark:text-white group-hover:text-black transition-colors duration-500">
                           Professional web application built with modern
                           architecture and focused on seamless user experience.
                        </p>
                     </div>

                     <div className="relative w-full h-[350px] md:h-[450px] -mb-12 mt-4 transition-all duration-700 group-hover:scale-105">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                        <Image
                           src={project.imageSource}
                           alt={project.title}
                           fill
                           className="object-cover rounded-3xl shadow-2xl border border-white/20 transform rotate-1 group-hover:rotate-0 transition-transform duration-700"
                        />
                     </div>
                  </motion.div>
               ))}

               {/* Large Call to Action Card */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="col-span-1 lg:col-span-2 rounded-[40px] bg-blue-600 p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between group cursor-pointer"
               >
                  <div className="relative z-10 space-y-4 text-white text-center md:text-left">
                     <h3 className="text-4xl md:text-5xl font-black">
                        Have a vision for <br /> your next big thing?
                     </h3>
                     <p className="text-white/80 text-lg font-medium">
                        Let's build something extraordinary together.
                     </p>
                     <Button
                        size="lg"
                        className="rounded-full bg-white text-blue-600 hover:bg-white/90 px-10 text-lg font-bold"
                     >
                        Start a Project
                     </Button>
                  </div>
                  <div className="relative w-48 h-48 md:w-80 md:h-80 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                     <Image
                        src="/hero-section.png"
                        alt="CTA"
                        fill
                        className="object-contain"
                     />
                  </div>

                  {/* Decorative Overlays */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-1/2" />
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default WorkSection;
