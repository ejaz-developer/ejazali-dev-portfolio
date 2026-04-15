'use client';

import { Button } from '@/components/ui/button';
import {
   AnimatePresence,
   motion,
   useMotionValue,
   useSpring,
   useTransform,
} from 'framer-motion';
import {
   ArrowRight,
   Code2,
   Cpu,
   GitBranch,
   Globe,
   Smartphone,
   Terminal,
   Zap,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skills = [
   'FULL_STACK_DEV.exe',
   'NEXT.JS_EXPERT.sh',
   'UI_UX_DESIGN.sys',
   'PROBLEM_SOLVER.bin',
];

const floatingData = [
   { label: 'SYS_UPTIME', top: '15%', left: '5%', delay: 0 },
   { label: 'MEM_ALLOC', top: '25%', right: '10%', delay: 0.5 },
   { label: 'NET_PING', bottom: '20%', left: '15%', delay: 1 },
   { label: 'GPU_LOAD', bottom: '30%', right: '8%', delay: 1.5 },
];

const Hero = () => {
   const [currentSkill, setCurrentSkill] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);

   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const springConfig = { damping: 25, stiffness: 150 };
   const xSpring = useSpring(mouseX, springConfig);
   const ySpring = useSpring(mouseY, springConfig);

   const rotateX = useTransform(ySpring, [-300, 300], [10, -10]);
   const rotateY = useTransform(xSpring, [-300, 300], [-10, 10]);

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         const rect = containerRef.current?.getBoundingClientRect();
         if (rect) {
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            mouseX.set(x);
            mouseY.set(y);
         }
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, [mouseX, mouseY]);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSkill((prev) => (prev + 1) % skills.length);
      }, 3000);
      return () => clearInterval(interval);
   }, []);

   return (
      <section
         ref={containerRef}
         className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
         {/* Gamified CRT Scanline & Border Wrapper */}
         <div className="absolute inset-4 border-2 border-foreground/30 pointer-events-none hidden md:block">
            {/* Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-foreground" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-foreground" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-foreground" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-foreground" />

            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(150,150,150,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(150,150,150,0.05)_1px,transparent_1px)] bg-size-[30px_30px]" />
         </div>

         {/* Floating System Data */}
         {floatingData.map((item, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0 }}
               animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -10, 0] }}
               transition={{
                  duration: 4,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
               style={{
                  position: 'absolute',
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
               }}
               className="hidden md:flex flex-col items-start gap-1 font-mono text-[10px] text-muted-foreground uppercase opacity-50 z-0 pointer-events-none"
            >
               <span className="font-bold border-b border-muted-foreground/30 pb-1">
                  {item.label}
               </span>
               <span>{`> [ 0x${Math.floor(Math.random() * 10000)
                  .toString(16)
                  .padEnd(4, '0')} ]`}</span>
            </motion.div>
         ))}

         <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-foreground bg-background text-foreground text-xs font-black uppercase tracking-widest mb-10 shadow-[4px_4px_0px_0px_rgba(150,150,150,1)]">
                     <span className="relative flex h-2.5 w-2.5 mx-1">
                        <span className="animate-ping absolute inline-flex h-full w-full bg-foreground opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 bg-foreground"></span>
                     </span>
                     [ USER_STATUS: OPEN.LINK ]
                  </div>

                  <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase flex flex-col md:flex-row items-center justify-center md:gap-4">
                     <span className="text-muted-foreground text-2xl md:text-5xl rotate-0 md:-rotate-90">
                        SYS.
                     </span>
                     <span className="text-foreground decoration-8 decoration-foreground underline underline-offset-8">
                        Ejaz Ali
                     </span>
                  </h1>

                  {/* Typing / Terminal Text Replaces smooth morphing */}
                  <div className="h-16 relative overflow-hidden mt-6 mb-10 flex justify-center items-center font-mono text-xl md:text-2xl text-foreground font-bold tracking-widest bg-foreground/5 py-4 border-y-2 border-foreground/30">
                     <AnimatePresence mode="wait">
                        <motion.span
                           key={currentSkill}
                           initial={{
                              opacity: 0,
                              filter: 'blur(4px)',
                              scale: 0.95,
                           }}
                           animate={{
                              opacity: 1,
                              filter: 'blur(0px)',
                              scale: 1,
                           }}
                           exit={{
                              opacity: 0,
                              filter: 'blur(4px)',
                              scale: 1.05,
                           }}
                           transition={{ duration: 0.2 }}
                           className="absolute flex items-center gap-2"
                        >
                           <span className="text-muted-foreground">{'<'}</span>
                           {skills[currentSkill]}
                           <span className="text-muted-foreground">{'>'}</span>
                           <span className="w-3 h-6 bg-foreground animate-pulse ml-1" />
                        </motion.span>
                     </AnimatePresence>
                  </div>

                  <p className="text-lg md:text-xl text-foreground font-medium mb-12 max-w-2xl mx-auto leading-relaxed border-l-4 border-foreground pl-6 text-left">
                     OPERATING FROM SKARDU, PK
                     <br />
                     <span className="text-muted-foreground">
                        3+ YEARS EXP IN DEPLOYING SCALABLE WEB_APPS AND HARDENED
                        UI PROTOCOLS.
                     </span>
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                     <Button
                        size="lg"
                        className="rounded-none px-10 h-16 bg-foreground hover:bg-muted-foreground text-background font-black gap-3 transition-all hover:translate-x-1 hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(150,150,150,1)] uppercase tracking-[0.2em] text-sm"
                        onClick={() =>
                           document
                              .getElementById('work')
                              ?.scrollIntoView({ behavior: 'smooth' })
                        }
                     >
                        [ EXECUTE_WORK ]
                        <ArrowRight className="w-5 h-5 ml-2" />
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="rounded-none px-10 h-16 bg-background text-foreground font-black gap-3 transition-all hover:translate-x-1 hover:-translate-y-1 border-2 border-foreground shadow-[8px_8px_0px_0px_rgba(150,150,150,1)] hover:bg-foreground hover:text-background uppercase tracking-[0.2em] text-sm"
                        onClick={() =>
                           document
                              .getElementById('contact')
                              ?.scrollIntoView({ behavior: 'smooth' })
                        }
                     >
                        [ INIT_CONTACT ]
                     </Button>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
