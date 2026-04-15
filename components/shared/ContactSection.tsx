'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactInfo, socialLinks } from '@/constant';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

const ContactSection = () => {
   return (
      <section
         id="contact"
         className="py-24 px-4 bg-background relative overflow-hidden border-t-2 border-border"
      >
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

         <div className="max-w-7xl mx-auto relative z-10">
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
                     [ COMM_LINK ]
                  </Badge>
                  <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter decoration-foreground decoration-8 underline-offset-8">
                     Establish <br />
                     <span className="text-muted-foreground italic tracking-widest bg-foreground px-4">
                        CONNECTION
                     </span>
                  </h2>
                  <p className="max-w-2xl mx-auto text-foreground text-lg md:text-xl font-medium border-l-4 border-foreground pl-6 text-left my-8 font-mono">
                     {'>'} SYSTEM_READY_FOR_INPUT...
                     <br />
                     {'>'} AWAITING_SECURE_TRANSMISSION
                     <br />
                     <span className="animate-pulse">_</span>
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
               {/* Contact Form */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-none border-[3px] border-foreground shadow-[12px_12px_0px_0px_rgba(150,150,150,1)] relative"
               >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-foreground z-20"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-foreground z-20"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-foreground z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-foreground z-20 pointer-events-none"></div>

                  <div className="absolute -top-3 left-6 bg-foreground text-background px-2 py-1 font-mono text-xs font-bold uppercase z-30 shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]">
                     [ DATA_INPUT ]
                  </div>

                  <form className="space-y-6 mt-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 group cursor-text">
                           <label className="text-sm font-bold text-foreground font-mono uppercase flex items-center gap-2">
                              <Terminal className="w-4 h-4" /> USER.NAME
                           </label>
                           <Input
                              placeholder="GUEST_USER"
                              className="bg-muted border-foreground text-black dark:text-black placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-all py-6 rounded-none border-[3px] font-mono shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] hover:translate-x-1 hover:-translate-y-1"
                           />
                        </div>
                        <div className="space-y-2 group cursor-text">
                           <label className="text-sm font-bold text-foreground font-mono uppercase flex items-center gap-2">
                              <Terminal className="w-4 h-4" /> USER.EMAIL
                           </label>
                           <Input
                              placeholder="SIGNAL@DOMAIN.COM"
                              className="bg-muted border-foreground text-black dark:text-black placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-all py-6 rounded-none border-[3px] font-mono shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] hover:translate-x-1 hover:-translate-y-1"
                           />
                        </div>
                     </div>
                     <div className="space-y-2 group cursor-text">
                        <label className="text-sm font-bold text-foreground font-mono uppercase flex items-center gap-2">
                           <Terminal className="w-4 h-4" /> TRANSMISSION.SUBJECT
                        </label>
                        <Input
                           placeholder="PROJECT_INQUIRY"
                           className="bg-muted border-foreground text-black dark:text-black placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-all py-6 rounded-none border-[3px] font-mono shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] hover:translate-x-1 hover:-translate-y-1"
                        />
                     </div>
                     <div className="space-y-2 group cursor-text">
                        <label className="text-sm font-bold text-foreground font-mono uppercase flex items-center gap-2">
                           <Terminal className="w-4 h-4" /> PAYLOAD
                        </label>
                        <Textarea
                           placeholder="ENTER_DATA_HERE..."
                           className="min-h-37.5 bg-muted border-foreground text-black dark:text-black placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-all rounded-none border-[3px] font-mono shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] hover:translate-x-1 hover:-translate-y-1 p-4"
                        />
                     </div>
                     <Button
                        size="lg"
                        className="w-full bg-foreground hover:bg-muted-foreground text-background gap-2 h-14 rounded-none transition-all hover:translate-x-1 hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(150,150,150,1)] font-mono font-bold uppercase tracking-widest text-lg"
                     >
                        [ TRANSMIT_DATA ]
                        <Send className="w-5 h-5" />
                     </Button>
                  </form>
               </motion.div>

               {/* Contact Information */}
               <div className="space-y-12 h-full flex flex-col justify-center">
                  <div className="space-y-8 relative">
                     {/* Decorative line */}
                     <div className="absolute left-6.5 top-0 bottom-0 w-0.75 bg-foreground/20 -z-10" />

                     {contactInfo.map((info, index) => (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, x: 50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                           className="flex items-center gap-6 group cursor-crosshair relative"
                        >
                           <div className="p-4 rounded-none border-[3px] border-foreground bg-background text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] relative z-10 w-14 h-14 flex items-center justify-center">
                              <info.icon className="w-6 h-6" />
                           </div>
                           <div className="bg-muted p-4 border-[3px] border-foreground grow shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] group-hover:translate-x-2 transition-transform duration-300">
                              <p className="text-[10px] font-bold text-foreground font-mono uppercase tracking-widest mb-1 opacity-50">
                                 [ {info.label}_NODE ]
                              </p>
                              <a
                                 href={info.href}
                                 className="text-lg font-black text-foreground font-mono group-hover:underline decoration-[3px] underline-offset-4 transition-all uppercase"
                              >
                                 {info.value}
                              </a>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  <div className="pt-8 border-t-[3px] border-foreground mt-8">
                     <p className="text-xs font-bold text-foreground mb-6 font-mono uppercase tracking-widest bg-muted inline-block px-4 py-2 border-[3px] border-foreground shadow-[4px_4px_0px_0px_rgba(150,150,150,1)]">
                        [ EXTERNAL_NETWORKS ]
                     </p>
                     <div className="flex flex-wrap gap-6">
                        {socialLinks.map((social, index) => (
                           <motion.a
                              key={index}
                              href={social.href}
                              target="_blank"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="p-4 rounded-none border-[3px] border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 shadow-[6px_6px_0px_0px_rgba(150,150,150,1)] group cursor-crosshair relative"
                           >
                              <social.icon className="w-6 h-6 relative z-10" />
                              <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                           </motion.a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
