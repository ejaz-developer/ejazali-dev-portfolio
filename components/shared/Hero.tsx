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
   'Full Stack MERN Developer',
   'Next.js Expert',
   'UI/UX Enthusiast',
   'Problem Solver',
];

const floatingIcons = [
   { Icon: Code2, top: '10%', left: '5%', delay: 0 },
   { Icon: Terminal, top: '20%', right: '10%', delay: 0.5 },
   { Icon: Globe, bottom: '15%', left: '15%', delay: 1 },
   { Icon: Cpu, bottom: '25%', right: '5%', delay: 1.5 },
   { Icon: GitBranch, top: '40%', left: '20%', delay: 2 },
   { Icon: Smartphone, top: '60%', right: '15%', delay: 2.5 },
   { Icon: Zap, bottom: '40%', left: '5%', delay: 3 },
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
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
               animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.2, 0.3, 0.2],
               }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px]"
            />
            <motion.div
               animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                  opacity: [0.2, 0.3, 0.2],
               }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]"
            />
         </div>

         {/* Floating Icons */}
         {floatingIcons.map((item, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0 }}
               animate={{
                  opacity: [0.2, 0.5, 0.2],
                  y: [0, -20, 0],
                  x: [0, 10, 0],
               }}
               transition={{
                  duration: 5,
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
               className="hidden md:block"
            >
               <item.Icon className="w-8 h-8 text-indigo-500/30" />
            </motion.div>
         ))}

         <div className="container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                     </span>
                     Available for new projects
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                     I'm{' '}
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                        Ejaz Ali
                     </span>
                     <br />
                     <div className="h-[1.2em] relative overflow-hidden mt-2">
                        <AnimatePresence mode="wait">
                           <motion.span
                              key={currentSkill}
                              initial={{ y: 40, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -40, opacity: 0 }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                              className="absolute inset-0"
                           >
                              {skills[currentSkill]}
                           </motion.span>
                        </AnimatePresence>
                     </div>
                  </h1>

                  <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                     Based in Skardu, Pakistan · 5+ years of experience crafting
                     scalable, pixel-perfect web experiences with the MERN
                     stack.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Button
                        size="lg"
                        className="rounded-full px-8 h-12 bg-indigo-600 hover:bg-indigo-700 text-white gap-2 transition-all hover:scale-105"
                        onClick={() =>
                           document
                              .getElementById('work')
                              ?.scrollIntoView({ behavior: 'smooth' })
                        }
                     >
                        View Work
                        <ArrowRight className="w-4 h-4" />
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8 h-12 gap-2 transition-all hover:scale-105 border-indigo-500/20 hover:bg-indigo-500/10"
                        onClick={() =>
                           document
                              .getElementById('contact')
                              ?.scrollIntoView({ behavior: 'smooth' })
                        }
                     >
                        Let's Talk
                     </Button>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
