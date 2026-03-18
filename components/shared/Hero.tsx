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
   Code,
   Code2,
   Cpu,
   Download,
   GitBranch,
   Globe,
   Smartphone,
   Sparkles,
   Terminal,
   Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const skills = [
   'React',
   'TypeScript',
   'Node.js',
   'Tailwind',
   'MERN',
   'Next.js',
   'GSAP',
   'UI/UX',
];

const floatingIcons = [
   { Icon: Code2, top: '10%', left: '5%', delay: 0 },
   { Icon: Terminal, top: '20%', right: '10%', delay: 0.5 },
   { Icon: Globe, bottom: '15%', left: '15%', delay: 1 },
   { Icon: Cpu, bottom: '25%', right: '5%', delay: 1.5 },
   { Icon: GitBranch, top: '40%', left: '20%', delay: 2 },
   { Icon: Smartphone, top: '60%', right: '15%', delay: 2.5 },
   { Icon: Zap, bottom: '40%', left: '5%', delay: 3 },
   { Icon: Code, bottom: '10%', right: '20%', delay: 3.5 },
];

const Hero = () => {
   const [currentSkill, setCurrentSkill] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);

   // Mouse parallax effect
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
         className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      >
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
               animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.3, 0.5, 0.3],
               }}
               transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
               className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]"
            />
            <motion.div
               animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                  opacity: [0.2, 0.4, 0.2],
               }}
               transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
               className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[140px]"
            />
         </div>

         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Content */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="space-y-8"
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 animate-pulse">
                     <Sparkles className="w-4 h-4" />
                     <span className="text-xs font-bold uppercase tracking-wider">
                        Available for new projects
                     </span>
                  </div>

                  <div className="space-y-4">
                     <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                        Hi, I'm{' '}
                        <span className="text-foreground font-bold">
                           Ejaz Ali
                        </span>
                     </h2>
                     <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        Building <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                           Digital Dreams
                        </span>
                     </h1>
                     <div className="flex items-center gap-3 text-2xl md:text-3xl font-semibold text-muted-foreground h-12">
                        <span>Specialized in</span>
                        <AnimatePresence mode="wait">
                           <motion.span
                              key={currentSkill}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-500/30"
                           >
                              {skills[currentSkill]}
                           </motion.span>
                        </AnimatePresence>
                     </div>
                  </div>

                  <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                     A full-stack developer passionate about creating
                     high-performance, interactive web experiences that combine
                     scalable code with pixel-perfect design.
                  </p>

                  <div className="flex flex-wrap gap-4">
                     <Button
                        size="lg"
                        className="rounded-full px-8 group bg-blue-600 hover:bg-blue-700"
                     >
                        View Projects
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8 group border-blue-500/30"
                     >
                        Resume
                        <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                     </Button>
                  </div>
               </motion.div>

               {/* Visual Elements */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative flex justify-center lg:justify-end"
                  style={{ rotateX, rotateY, perspective: 1000 }}
               >
                  <div className="relative w-72 h-72 md:w-96 md:h-96">
                     {/* Decorative Rings */}
                     <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                           duration: 20,
                           repeat: Infinity,
                           ease: 'linear',
                        }}
                        className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full"
                     />
                     <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                           duration: 25,
                           repeat: Infinity,
                           ease: 'linear',
                        }}
                        className="absolute inset-4 border border-dashed border-indigo-500/20 rounded-full"
                     />

                     {/* Main Image Container */}
                     <div className="absolute inset-8 rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 shadow-2xl flex items-center justify-center bg-muted/20">
                        <div className="relative w-full h-full p-4 overflow-hidden">
                           <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                           <Image
                              src="/hero-section.png"
                              alt="Ejaz Ali"
                              fill
                              className="object-contain hover:scale-105 transition-transform duration-500"
                              priority
                           />
                        </div>
                     </div>

                     {/* Floating Badges */}
                     <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                           duration: 3,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        }}
                        className="absolute -top-4 -right-4 p-4 bg-background/80 backdrop-blur-md rounded-2xl border shadow-xl"
                     >
                        <Zap className="w-6 h-6 text-yellow-500 mb-1" />
                        <span className="text-xs font-bold">Fast Delivery</span>
                     </motion.div>

                     <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                           duration: 4,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        }}
                        className="absolute -bottom-4 -left-4 p-4 bg-background/80 backdrop-blur-md rounded-2xl border shadow-xl"
                     >
                        <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-1" />
                        <span className="text-xs font-bold">Clean Code</span>
                     </motion.div>

                     {/* Particle icons */}
                     {floatingIcons.map((item, i) => (
                        <motion.div
                           key={i}
                           className="absolute hidden md:block p-3 bg-white/5 backdrop-blur-xs rounded-xl border border-white/10 text-blue-500/60"
                           style={{
                              top: item.top,
                              left: item.left,
                              right: item.right,
                              bottom: item.bottom,
                           }}
                           animate={{
                              y: [0, -15, 0],
                              opacity: [0.4, 1, 0.4],
                           }}
                           transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: item.delay,
                           }}
                        >
                           <item.Icon size={20} />
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>

         {/* Scroll Indicator */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
         >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
               Scroll
            </span>
            <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="w-1 h-3 bg-blue-600 rounded-full"
            />
         </motion.div>
      </section>
   );
};

export default Hero;
