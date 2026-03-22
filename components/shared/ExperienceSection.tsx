'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '@/constant';

const ExperienceSection = () => {
   return (
      <section id="experience" className="py-24 px-4 bg-muted/30">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-4 py-1">
                  My Journey
               </Badge>
               <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Professional Experience
               </h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                  My path as a developer, focused on delivering high-quality web
                  solutions and continuous learning.
               </p>
            </div>

            <div className="relative space-y-8">
               {/* Vertical Line */}
               <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-indigo-500/20 -translate-x-1/2 hidden md:block" />

               {experience.map((exp, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className={`relative flex flex-col md:flex-row gap-8 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                     }`}
                  >
                     {/* Timeline Dot */}
                     <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-indigo-600 border-4 border-background -translate-x-1/2 hidden md:block z-10" />

                     {/* Content Card */}
                     <div className="md:w-1/2 group">
                        <div className="bg-card p-6 rounded-2xl border border-border hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-xl">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                                 <Briefcase className="w-5 h-5" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                    {exp.role}
                                 </h3>
                                 <p className="text-indigo-500 font-medium">
                                    {exp.company}
                                 </p>
                              </div>
                           </div>

                           <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                 <Calendar className="w-4 h-4" />
                                 {exp.period}
                              </div>
                              <div className="flex items-center gap-1">
                                 <MapPin className="w-4 h-4" />
                                 Skardu, Pakistan
                              </div>
                           </div>

                           <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                              {exp.description}
                           </p>

                           <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, i) => (
                                 <Badge
                                    key={i}
                                    variant="secondary"
                                    className="text-[10px] bg-muted/50 text-indigo-400 border-indigo-500/10"
                                 >
                                    {skill}
                                 </Badge>
                              ))}
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ExperienceSection;
