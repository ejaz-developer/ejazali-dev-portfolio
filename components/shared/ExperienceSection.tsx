'use client';

import { Badge } from '@/components/ui/badge';
import { experience } from '@/constant';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ExperienceSection = () => {
   return (
      <section
         id="experience"
         className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-blue-500/[0.01]"
      >
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
               >
                  <Badge
                     variant="outline"
                     className="px-6 py-2 border-blue-500/30 text-blue-600 mb-8 bg-blue-500/5 backdrop-blur-sm rounded-full font-bold uppercase tracking-widest text-xs"
                  >
                     Career Path
                  </Badge>
                  <h2 className="text-5xl md:text-7xl font-black mb-6">
                     My Professional <br />
                     <span className="text-blue-600 dark:text-blue-400">
                        Journey
                     </span>
                  </h2>
               </motion.div>
            </div>

            {/* Timeline */}
            <div className="relative">
               {/* Central Line (Desktop) */}
               <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-blue-500/10 hidden md:block" />

               {/* Experience Items */}
               <div className="space-y-16 md:space-y-24">
                  {experience.map((item, idx) => (
                     <motion.div
                        key={idx}
                        className={`group relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                     >
                        {/* Timeline Dot (Desktop) */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-black z-10 hidden md:block shadow-lg shadow-blue-500/50 group-hover:scale-150 transition-transform duration-500" />

                        {/* Content Side */}
                        <div
                           className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                        >
                           <div
                              className={`p-8 rounded-[40px] border border-blue-500/10 bg-white/40 dark:bg-black/40 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500`}
                           >
                              <div
                                 className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                              >
                                 <Calendar className="w-4 h-4 text-blue-600" />
                                 <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                                    {item.period}
                                 </span>
                              </div>
                              <h3 className="text-3xl font-black mb-1 group-hover:text-blue-600 transition-colors">
                                 {item.role}
                              </h3>
                              <p className="text-lg font-bold text-muted-foreground mb-6">
                                 {item.company}
                              </p>

                              <p className="text-muted-foreground leading-relaxed mb-8">
                                 {item.description}
                              </p>

                              <div
                                 className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                              >
                                 {item.skills.map((skill, sIdx) => (
                                    <Badge
                                       key={sIdx}
                                       variant="secondary"
                                       className="bg-blue-500/5 border-blue-500/10 text-xs py-1"
                                    >
                                       {skill}
                                    </Badge>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* Visual Side (Hidden or Decorative on Desktop) */}
                        <div className="hidden md:block w-10" />
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ExperienceSection;
