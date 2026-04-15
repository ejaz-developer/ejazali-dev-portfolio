'use client';

import { Badge } from '@/components/ui/badge';
import { projects } from '@/constant';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
   },
};

const WorkSection = () => {
   return (
      <section
         id="work"
         className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background border-t-2 border-border"
      >
         <div className="max-w-7xl mx-auto">
            <div className="text-center justify-center flex flex-col items-center mb-24">
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
                     [ DATA_ARCHIVES ]
                  </Badge>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter decoration-foreground decoration-8 underline-offset-8">
                     Featured <br />
                     <span className="italic tracking-widest bg-foreground text-background px-4">
                        WORK_LOGS
                     </span>
                  </h2>
                  <p className="max-w-2xl mx-auto text-foreground text-lg md:text-xl font-medium border-l-4 border-foreground pl-6 text-left my-8 font-mono">
                     {'>'} ACCESSING_RECENT_DEPLOYMENTS...
                     <br />
                     {'>'} FULL_STACK_APPLICATIONS_DETECTED
                     <br />
                     <span className="animate-pulse">_</span>
                  </p>
               </motion.div>
            </div>

            <motion.div
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: '-50px' }}
            >
               {projects.map((project, index) => (
                  <motion.div
                     key={index}
                     variants={{
                        hidden: { opacity: 0, y: 40, rotateX: 10 },
                        visible: {
                           opacity: 1,
                           y: 0,
                           rotateX: 0,
                           transition: {
                              duration: 0.6,
                              ease: 'easeOut' as const,
                           },
                        },
                     }}
                  >
                     <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="h-full"
                     >
                        <Card
                           className={`group h-full flex flex-col relative rounded-none overflow-hidden border-[3px] border-foreground bg-card transition-all duration-500 hover:shadow-[12px_12px_0px_0px_rgba(150,150,150,1)] hover:-translate-y-2 hover:-translate-x-2 cursor-crosshair ${
                              project.featured
                                 ? 'md:col-span-2 lg:col-span-1'
                                 : ''
                           }`}
                        >
                           {/* Corner Accents */}
                           <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground z-20"></div>
                           <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground z-20"></div>
                           <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground z-20 pointer-events-none"></div>
                           <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground z-20 pointer-events-none"></div>

                           <div className="aspect-video relative overflow-hidden border-b-[3px] border-foreground bg-muted p-2">
                              <div className="absolute top-2 left-2 z-10 bg-foreground text-background font-mono text-[10px] px-1 font-bold shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]">
                                 ID: PKG_0{index + 1}
                              </div>
                              <Image
                                 src={project.imageSource}
                                 alt={project.title}
                                 fill
                                 className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                              />
                              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-md">
                                 <Link
                                    href={project.preview}
                                    target="_blank"
                                    className="p-4 rounded-none bg-foreground text-background hover:bg-muted-foreground transition-all hover:scale-110 border-2 border-transparent shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] flex items-center gap-2 group/btn"
                                 >
                                    <Globe className="w-6 h-6" />
                                    <span className="font-mono text-xs font-bold uppercase hidden md:inline-block">
                                       [ ENGAGE ]
                                    </span>
                                 </Link>
                                 <Link
                                    href={project.github}
                                    target="_blank"
                                    className="p-4 rounded-none bg-background text-foreground border-[3px] border-foreground hover:bg-muted transition-all hover:scale-110 shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] flex items-center gap-2"
                                 >
                                    <Github className="w-6 h-6" />
                                    <span className="font-mono text-xs font-bold uppercase hidden md:inline-block">
                                       [ SRC ]
                                    </span>
                                 </Link>
                              </div>
                           </div>

                           <CardContent className="p-8 grow flex-col bg-background relative">
                              {project.featured && (
                                 <Badge className="bg-foreground text-background self-start mb-6 rounded-none border-[3px] border-foreground uppercase font-black tracking-widest text-xs py-1.5 shadow-[2px_2px_0px_0px_rgba(150,150,150,1)] font-mono">
                                    [ PRIORITY_TARGET ]
                                 </Badge>
                              )}
                              <h3 className="text-3xl font-black mb-4 group-hover:underline decoration-[3px] underline-offset-8 transition-all font-mono uppercase">
                                 {project.title}
                              </h3>
                              <p className="text-muted-foreground font-mono mb-8 line-clamp-3 md:line-clamp-4 leading-relaxed text-sm grow border-l-2 border-foreground pl-4">
                                 {project.description}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-8">
                                 {project.tags.map((tag, i) => (
                                    <Badge
                                       key={i}
                                       variant="outline"
                                       className="text-[10px] rounded-none border-2 border-foreground font-bold uppercase transition-colors group-hover:bg-foreground group-hover:text-background font-mono"
                                    >
                                       {tag}
                                    </Badge>
                                 ))}
                              </div>

                              <div className="flex items-center justify-between border-t-2 border-border pt-6 mt-auto">
                                 <Link
                                    href={project.preview}
                                    target="_blank"
                                    className="text-foreground hover:text-muted-foreground font-bold flex items-center gap-2 text-sm uppercase tracking-widest group/link font-mono"
                                 >
                                    [ DEPLOY_LINK ]
                                    <ExternalLink className="w-5 h-5 group-hover/link:translate-x-2 group-hover/link:-translate-y-2 transition-transform duration-300" />
                                 </Link>
                              </div>
                           </CardContent>
                        </Card>
                     </motion.div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default WorkSection;
