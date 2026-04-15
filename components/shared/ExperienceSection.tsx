'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Terminal } from 'lucide-react';
import { experience } from '@/constant';

const ExperienceSection = () => {
   return (
      <section
         id="experience"
         className="py-24 px-4 bg-background border-t-[3px] border-foreground relative overflow-hidden"
      >
         {/* CRT overlay */}
         <div className="pointer-events-none absolute inset-0 z-50 h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),_linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,_3px_100%] opacity-20" />

         <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center justify-center flex flex-col items-center mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
               >
                  <Badge
                     variant="outline"
                     className="px-6 py-2 border-2 border-foreground text-foreground mb-8 rounded-none font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] font-mono"
                  >
                     [ TIMELINE_DATA ]
                  </Badge>
                  <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter decoration-foreground decoration-8 underline-offset-8">
                     Professional <br />
                     <span className="text-muted-foreground italic tracking-widest bg-foreground text-background px-4">
                        HISTORY
                     </span>
                  </h2>
                  <p className="max-w-2xl mx-auto text-foreground text-lg md:text-xl font-medium border-l-4 border-foreground pl-6 text-left my-8 font-mono">
                     {'>'} PARSING_CAREER_LOGS...
                     <br />
                     {'>'} 2_MODULES_FOUND
                     <br />
                     <span className="animate-pulse">_</span>
                  </p>
               </motion.div>
            </div>

            <div className="relative space-y-12">
               {/* Vertical Line */}
               <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[4px] bg-foreground md:-translate-x-[2px] hidden md:block" />

               {experience.map((exp, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className={`relative flex flex-col md:flex-row gap-8 items-center ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                     }`}
                  >
                     {/* Timeline Dot */}
                     <div className="absolute left-0 md:left-1/2 top-1/2 w-8 h-8 bg-background border-[4px] border-foreground md:-translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10 shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]">
                        <div className="w-2 h-2 bg-foreground" />
                     </div>

                     {/* Content Card */}
                     <div
                        className={`md:w-1/2 w-full group ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                     >
                        <div className="bg-card p-8 rounded-none border-[3px] border-foreground shadow-[8px_8px_0px_0px_rgba(150,150,150,1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(150,150,150,1)] hover:-translate-y-2 relative">
                           {/* Corner Accents */}
                           <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-foreground z-20"></div>
                           <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-foreground z-20"></div>

                           <div className="absolute top-2 right-4 text-[10px] font-mono font-bold text-muted-foreground uppercase opacity-50">
                              [ LOG_ENTRY_0{index + 1} ]
                           </div>

                           <div className="flex items-start gap-4 mb-6 relative z-10">
                              <div className="p-3 bg-muted border-[3px] border-foreground text-foreground shadow-[2px_2px_0px_0px_rgba(150,150,150,1)] flex-shrink-0">
                                 <Terminal className="w-6 h-6" />
                              </div>
                              <div>
                                 <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-1 group-hover:underline decoration-4 underline-offset-4">
                                    {exp.role}
                                 </h3>
                                 <p className="text-foreground font-mono font-bold text-sm bg-muted inline-block px-2 py-1 border-[2px] border-foreground">
                                    @ {exp.company}
                                 </p>
                              </div>
                           </div>

                           <div className="flex flex-wrap gap-4 text-xs font-mono font-bold text-muted-foreground mb-6 uppercase tracking-widest border-l-2 border-foreground pl-4">
                              <div className="flex items-center gap-2">
                                 <Calendar className="w-4 h-4" />[{exp.period}]
                              </div>
                              <div className="flex items-center gap-2">
                                 <MapPin className="w-4 h-4" />
                                 [SKARDU_PK]
                              </div>
                           </div>

                           <p className="text-sm text-foreground font-mono leading-relaxed mb-8">
                              {'>'} {exp.description}
                           </p>

                           <div className="flex flex-wrap gap-2 pt-6 border-t-2 border-dashed border-border group-hover:border-foreground transition-colors">
                              {exp.skills.map((skill, i) => (
                                 <Badge
                                    key={i}
                                    variant="outline"
                                    className="text-[10px] bg-background text-foreground border-2 border-foreground font-bold font-mono uppercase shadow-[2px_2px_0px_0px_rgba(150,150,150,1)] hover:bg-foreground hover:text-background transition-colors cursor-crosshair rounded-none"
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
