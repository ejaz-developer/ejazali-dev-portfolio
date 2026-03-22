'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constant';
import { Github, Globe, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const WorkSection = () => {
   return (
      <section
         id="work"
         className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background"
      >
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <Badge
                  variant="outline"
                  className="px-4 py-1 border-indigo-500/30 text-indigo-400 mb-6 bg-indigo-500/5 backdrop-blur-sm"
               >
                  My Projects
               </Badge>
               <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                  Featured <span className="text-indigo-500">Work.</span>
               </h2>
               <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  A selection of my recent full-stack applications and digital
                  tools.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className={`group relative rounded-3xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-indigo-500/30 hover:shadow-2xl hover:-translate-y-2 ${
                        project.featured
                           ? 'md:col-span-2 lg:col-span-1 border-indigo-500/20'
                           : ''
                     }`}
                  >
                     <div className="aspect-video relative overflow-hidden">
                        <Image
                           src={project.imageSource}
                           alt={project.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                           <Link
                              href={project.preview}
                              target="_blank"
                              className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all hover:scale-110"
                           >
                              <Globe className="w-6 h-6" />
                           </Link>
                           <Link
                              href={project.github}
                              target="_blank"
                              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
                           >
                              <Github className="w-6 h-6" />
                           </Link>
                        </div>
                     </div>

                     <div className="p-8">
                        {project.featured && (
                           <Badge className="bg-indigo-500 text-white mb-4 animate-pulse">
                              Featured
                           </Badge>
                        )}
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">
                           {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                           {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                           {project.tags.map((tag, i) => (
                              <Badge
                                 key={i}
                                 variant="secondary"
                                 className="text-[10px] bg-indigo-500/10 text-indigo-400 border-indigo-500/10"
                              >
                                 {tag}
                              </Badge>
                           ))}
                        </div>

                        <div className="flex items-center gap-4">
                           <Link
                              href={project.preview}
                              target="_blank"
                              className="text-indigo-500 hover:text-indigo-400 font-bold flex items-center gap-2 text-sm"
                           >
                              View Demo
                              <ExternalLink className="w-4 h-4" />
                           </Link>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default WorkSection;
