'use client';

import { Badge } from '@/components/ui/badge';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { services } from '@/constant';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Layers, Zap } from 'lucide-react';

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
   },
};

const cardVariants = {
   hidden: { opacity: 0, y: 40, rotateX: 20 },
   visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
   },
};

const ServiceSection = () => {
   return (
      <section
         id="services"
         className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden"
      >
         <div className="absolute top-0 inset-x-0 h-px w-full bg-border" />

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center justify-center flex flex-col items-center mb-24">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
               >
                  <Badge
                     variant="outline"
                     className="px-6 py-2 border-2 border-foreground text-foreground mb-8 rounded-none font-bold uppercase tracking-widest text-xs shadow-[4px_4px_0px_0px_rgba(150,150,150,1)]"
                  >
                     [ MODULES.LOADED ]
                  </Badge>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter decoration-foreground decoration-8 underline-offset-8">
                     Digital <br />
                     <span className="text-muted-foreground italic">
                        Precision
                     </span>
                  </h2>
                  <p className="max-w-2xl mx-auto text-foreground text-lg md:text-xl font-medium border-l-4 border-foreground pl-6 text-left my-8 font-mono">
                     {'>'} INTEGRATING TECHNICAL_MASTERY WITH CREATIVE
                     <br />
                     {'>'} DELIVERING HIGH_PERFORMANCE_SOLUTIONS
                     <br />
                     <span className="animate-pulse">_</span>
                  </p>
               </motion.div>
            </div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: '-50px' }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {services.map((service, idx) => (
                  <motion.div
                     key={idx}
                     variants={cardVariants}
                     className="h-full"
                  >
                     <Card className="group h-full flex flex-col rounded-none overflow-hidden border-2 border-foreground bg-card transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(150,150,150,1)] hover:-translate-y-2 hover:-translate-x-2 relative cursor-crosshair">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                           <service.icon className="w-32 h-32 text-foreground group-hover:rotate-12 group-hover:scale-125 transition-transform duration-700" />
                        </div>
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground z-20"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground z-20"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground z-20"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground z-20"></div>

                        <CardHeader className="relative z-10 border-b-2 border-border pb-8">
                           <div className="flex justify-between items-start">
                              <div className="w-16 h-16 rounded-none border-2 border-foreground bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300 relative">
                                 <service.icon className="w-8 h-8 relative z-10" />
                                 <span className="absolute -bottom-2 -right-2 text-[10px] font-mono bg-foreground text-background px-1">
                                    M-0{idx + 1}
                                 </span>
                              </div>
                              <span className="text-[10px] font-mono text-muted-foreground uppercase">
                                 [SYS.ACTIVE]
                              </span>
                           </div>
                           <CardTitle className="text-3xl font-black uppercase tracking-tight group-hover:pl-2 transition-all duration-300 flex items-center gap-2">
                              {service.name}
                           </CardTitle>
                        </CardHeader>

                        <CardContent className="pt-8 relative z-10 grow">
                           <p className="text-muted-foreground text-base leading-relaxed font-mono group-hover:text-foreground transition-colors duration-300">
                              {service.description}
                           </p>
                        </CardContent>

                        <CardFooter className="border-t-2 border-border py-6 relative z-10 bg-muted/50">
                           <div className="flex flex-row items-center w-full justify-between">
                              <div className="flex items-center gap-3">
                                 <Zap className="w-5 h-5 text-foreground group-hover:animate-ping" />
                                 <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-foreground">
                                    [ EXECUTE_SUBROUTINE ]
                                 </span>
                              </div>
                              <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-foreground" />
                           </div>
                        </CardFooter>
                     </Card>
                  </motion.div>
               ))}
            </motion.div>

            {/* Bottom Row */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="mt-24 flex flex-wrap justify-center gap-4 relative z-10"
            >
               {[
                  { icon: Globe, text: 'SYS.GLOBAL' },
                  { icon: Cpu, text: 'SYS.AI_CORE' },
                  { icon: Layers, text: 'SYS.MICRO_SVC' },
                  { icon: Zap, text: 'SYS.UI_RENDER' },
               ].map((item, idx) => (
                  <div
                     key={idx}
                     className="flex items-center gap-3 px-6 py-4 rounded-none bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-300 group cursor-pointer shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(150,150,150,1)] font-mono"
                  >
                     <item.icon className="w-5 h-5" />
                     <span className="text-sm font-bold uppercase tracking-widest">
                        [{item.text}]
                     </span>
                  </div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default ServiceSection;
