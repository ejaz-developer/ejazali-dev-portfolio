'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
   Code2,
   Code,
   Terminal,
   Globe,
   Cpu,
   GitBranch,
   Smartphone,
   Zap,
   Sparkles,
} from 'lucide-react';

const skills = [
   'React',
   'TypeScript',
   'Node.js',
   'UI/UX',
   'GSAP',
   'Tailwind',
   'MERN',
   'Next.js',
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
   const container = useRef<HTMLDivElement>(null);
   const leftRef = useRef<HTMLDivElement>(null);
   const rightRef = useRef<HTMLDivElement>(null);
   const nameRef = useRef<HTMLHeadingElement>(null);
   const titleRef = useRef<HTMLParagraphElement>(null);
   const skillRef = useRef<HTMLSpanElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const imageRef = useRef<HTMLDivElement>(null);
   const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
   const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

   const [currentSkill, setCurrentSkill] = useState(0);

   // Entrance animations
   useGSAP(
      () => {
         gsap.set(
            [
               nameRef.current,
               titleRef.current,
               skillRef.current,
               ctaRef.current,
               imageRef.current,
               ...iconsRef.current,
               ...circlesRef.current,
            ],
            { opacity: 0, y: 30 }
         );

         const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
         tl.to(nameRef.current, { opacity: 1, y: 0, duration: 1 })
            .to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.6')
            .to(skillRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.6')
            .to(ctaRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.6')
            .to(imageRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.8')
            .to(
               iconsRef.current,
               { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
               '-=0.5'
            )
            .to(
               circlesRef.current,
               { opacity: 0.6, y: 0, duration: 1, stagger: 0.2 },
               '-=1'
            );
      },
      { scope: container }
   );

   // Floating animation for icons
   useEffect(() => {
      iconsRef.current.forEach((el, i) => {
         if (!el) return;
         gsap.to(el, {
            y: -15,
            duration: 2 + i * 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: floatingIcons[i].delay,
         });
      });
   }, []);

   // Subtle background circle animation
   useEffect(() => {
      circlesRef.current.forEach((el, i) => {
         if (!el) return;
         gsap.to(el, {
            scale: 1.1,
            duration: 8 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
         });
      });
   }, []);

   // Skill changer animation
   useEffect(() => {
      if (!skillRef.current) return;

      const interval = setInterval(() => {
         setCurrentSkill((prev) => (prev + 1) % skills.length);
      }, 2000);

      return () => clearInterval(interval);
   }, []);

   useEffect(() => {
      if (skillRef.current) {
         gsap.fromTo(
            skillRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
         );
      }
   }, [currentSkill]);

   return (
      <section
         ref={container}
         className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
         {/* Background circles */}
         <div
            ref={(el) => {
               circlesRef.current[0] = el;
            }}
            className="absolute top-10 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl"
         />
         <div
            ref={(el) => {
               circlesRef.current[1] = el;
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl"
         />
         <div
            ref={(el) => {
               circlesRef.current[2] = el;
            }}
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-300/30 dark:bg-pink-600/20 rounded-full blur-3xl"
         />

         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left column - text */}
               <div ref={leftRef} className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6">
                     <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        3+ Years of Experience
                     </span>
                  </div>
                  <h1
                     ref={nameRef}
                     className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                  >
                     <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Ejaz Ali
                     </span>
                  </h1>
                  <p
                     ref={titleRef}
                     className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
                  >
                     <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        Full Stack Web Developer
                     </span>{' '}
                     based in Pakistan 🇵🇰
                  </p>
                  <div className="mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                     I specialize in{' '}
                     <span
                        ref={skillRef}
                        className="inline-block min-w-[120px] font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                     >
                        {skills[currentSkill]}
                     </span>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
                     Crafting modern web experiences with cutting-edge
                     technologies. Let's turn your ideas into reality.
                  </p>
                  <div
                     ref={ctaRef}
                     className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                  >
                     <Button
                        size="lg"
                        className="rounded-full px-8 cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0"
                     >
                        View Projects
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm cursor-pointer hover:bg-white/80 dark:hover:bg-gray-800/80"
                     >
                        Contact Me
                     </Button>
                  </div>
               </div>

               {/* Right column - image with floating icons and quote */}
               <div
                  ref={rightRef}
                  className="flex justify-center lg:justify-end"
               >
                  <div
                     ref={imageRef}
                     className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px]"
                  >
                     {/* Main image */}
                     <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                        <Image
                           src="/hero-section.png"
                           alt="Ejaz Ali"
                           fill
                           className="object-cover"
                           priority
                        />
                     </div>

                     {/* Floating tech icons */}
                     {floatingIcons.map(
                        ({ Icon, top, left, right, bottom, delay }, index) => (
                           <div
                              key={index}
                              ref={(el) => {
                                 iconsRef.current[index] = el;
                              }}
                              className="absolute p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                              style={{
                                 top: top,
                                 left: left,
                                 right: right,
                                 bottom: bottom,
                              }}
                           >
                              <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                           </div>
                        )
                     )}

                     {/* Quote bubble */}
                     <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-[200px] backdrop-blur-sm">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                           "Code is like humor. When you have to explain it,
                           it's bad."
                        </p>
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700 transform rotate-45" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
