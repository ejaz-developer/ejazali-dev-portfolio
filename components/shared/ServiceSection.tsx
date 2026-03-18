'use client';

import { Badge } from '@/components/ui/badge';
import { services } from '@/constant';
import { motion } from 'framer-motion';
import { Cpu, Globe, Layers, Zap } from 'lucide-react';

const ServiceSection = () => {
   return (
      <section
         id="services"
         className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
         {/* Decorative Gradients */}
         <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
         <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full -z-10" />

         <div className="max-w-7xl mx-auto">
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
                     My Expertise
                  </Badge>
                  <h2 className="text-5xl md:text-7xl font-black mb-6">
                     Solving Problems With <br />
                     <span className="text-blue-600 dark:text-blue-400">
                        Digital Precision
                     </span>
                  </h2>
                  <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-medium">
                     I combine technical mastery with creative intuition to
                     deliver solutions that are not only functional but truly
                     memorable.
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
               {services.map((service, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className={`group relative overflow-hidden rounded-[40px] border border-blue-500/10 bg-gradient-to-br ${service.color.includes('/') ? service.color : service.color.replace('to-', 'to-').replace('from-', 'from-') + '/10'} p-10 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between h-full`}
                  >
                     {/* Background Icon Watermark */}
                     <service.icon
                        className={`absolute -bottom-10 -right-10 w-64 h-64 text-blue-500/[0.03] group-hover:scale-125 transition-transform duration-1000 rotate-12`}
                     />

                     <div className="relative z-10">
                        <div
                           className={`w-14 h-14 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 shadow-xl group-hover:rotate-12 transition-transform duration-500`}
                        >
                           <service.icon className={`w-7 h-7 text-blue-500`} />
                        </div>

                        <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors">
                           {service.name}
                        </h3>
                        <p className="text-muted-foreground text-base mb-8 leading-relaxed font-medium">
                           {service.description}
                        </p>
                     </div>

                     <div className="relative z-10 flex flex-col gap-4">
                        <div className="h-px w-full bg-blue-500/10 mb-4" />
                        <div className="flex items-center gap-3">
                           <Zap className="w-4 h-4 text-blue-600 animate-pulse" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                              Professional Execution
                           </span>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Bottom Row: Additional Capabilities */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-16 flex flex-wrap justify-center gap-6"
            >
               {[
                  { icon: Globe, text: 'Global Standards' },
                  { icon: Cpu, text: 'AI Integration' },
                  { icon: Layers, text: 'Microservices' },
                  { icon: Zap, text: 'UI Polish' },
               ].map((item, idx) => (
                  <div
                     key={idx}
                     className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 transition-all cursor-default group"
                  >
                     <item.icon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                     <span className="text-sm font-bold uppercase tracking-wider">
                        {item.text}
                     </span>
                  </div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default ServiceSection;
