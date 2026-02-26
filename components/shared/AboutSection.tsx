'use client';

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
   GraduationCap,
   Languages,
   Briefcase,
   Code2,
   Terminal,
   Globe,
   Cpu,
   GitBranch,
   Smartphone,
   Zap,
   Database,
   Figma,
   Calendar,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Floating tools icons configuration
const toolsIcons = [
   { Icon: Code2, top: '0%', left: '-10%', delay: 0 },
   { Icon: Terminal, top: '20%', right: '-15%', delay: 0.5 },
   { Icon: Globe, bottom: '10%', left: '-5%', delay: 1 },
   { Icon: Cpu, bottom: '30%', right: '-10%', delay: 1.5 },
   { Icon: GitBranch, top: '40%', left: '5%', delay: 2 },
   { Icon: Smartphone, top: '60%', right: '0%', delay: 2.5 },
   { Icon: Zap, bottom: '-5%', left: '15%', delay: 3 },
   { Icon: Database, bottom: '15%', right: '5%', delay: 3.5 },
   { Icon: Figma, top: '10%', right: '-5%', delay: 4 },
];

// Experience data
const experiences = [
   {
      title: 'Full Stack Web Developer',
      company: 'Codehub Skardu',
      period: '2025 - Present',
      description: 'Building full-stack web apps with MERN & Next.js',
      icon: Briefcase,
   },
   {
      title: 'Web Developer',
      company: 'DreamCode',
      period: '2024 - 2025',
      description:
         'Developed responsive web applications and collaborated with design team.',
      icon: Code2,
   },
];

const AboutSection = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const leftRef = useRef<HTMLDivElement>(null);
   const rightRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const descriptionRef = useRef<HTMLParagraphElement>(null);
   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
   const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
   const timelineRef = useRef<HTMLDivElement>(null);
   const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

   useGSAP(
      () => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: sectionRef.current,
               start: 'top 80%',
               end: 'bottom 20%',
               toggleActions: 'play none none reverse',
            },
         });

         tl.fromTo(
            [subtitleRef.current, titleRef.current],
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
         )
            .fromTo(
               leftRef.current,
               { opacity: 0, x: -50 },
               { opacity: 1, x: 0, duration: 1 },
               '-=0.4'
            )
            .fromTo(
               iconsRef.current,
               { opacity: 0, scale: 0 },
               { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
               '-=0.6'
            )
            .fromTo(
               descriptionRef.current,
               { opacity: 0, y: 20 },
               { opacity: 1, y: 0, duration: 0.8 },
               '-=0.6'
            )
            .fromTo(
               cardsRef.current,
               { opacity: 0, y: 30 },
               { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
               '-=0.4'
            )
            .fromTo(
               timelineItemsRef.current,
               { opacity: 0, x: 30 },
               { opacity: 1, x: 0, duration: 0.8, stagger: 0.3 },
               '-=0.2'
            );
      },
      { scope: sectionRef }
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
            delay: toolsIcons[i].delay,
         });
      });
   }, []);

   return (
      <section
         ref={sectionRef}
         className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      >
         <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
               <p
                  ref={subtitleRef}
                  className="text-indigo-600 dark:text-indigo-400 font-mono text-lg"
               >
                  Introduction
               </p>
               <h2
                  ref={titleRef}
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2"
               >
                  About Me
               </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               {/* Left column - Image with floating icons */}
               <div
                  ref={leftRef}
                  className="flex justify-center lg:justify-end"
               >
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] overflow-visible">
                     {/* White rectangular background */}
                     <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform rotate-3 scale-105 transition-transform hover:rotate-2 hover:scale-110 duration-300" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-lg">
                           <Image
                              src="/hero-section.png" // Replace with your about image
                              alt="Ejaz Ali"
                              fill
                              className="object-cover"
                           />
                        </div>
                     </div>

                     {/* Floating tools icons */}
                     {toolsIcons.map(
                        ({ Icon, top, left, right, bottom, delay }, index) => (
                           <div
                              key={index}
                              ref={(el) => {
                                 iconsRef.current[index] = el;
                              }}
                              className="absolute p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 z-20"
                              style={{
                                 top: top,
                                 left: left,
                                 right: right,
                                 bottom: bottom,
                              }}
                           >
                              <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                           </div>
                        )
                     )}
                  </div>
               </div>

               {/* Right column - About text and cards */}
               <div ref={rightRef} className="space-y-6">
                  <div>
                     <p
                        ref={descriptionRef}
                        className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                     >
                        I'm{' '}
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                           Ejaz Ali
                        </span>
                        , a full-stack MERN and Next.js web developer with{' '}
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                           2+ years
                        </span>{' '}
                        of experience in building production-grade applications.
                        I'm currently working as a full-stack web developer at{' '}
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                           Codehub Skardu
                        </span>
                        .
                     </p>
                     <p className="mt-4 text-gray-600 dark:text-gray-400">
                        I love crafting seamless digital experiences and solving
                        real-world problems through code. When I'm not coding,
                        you can find me exploring new technologies or enjoying
                        the beautiful mountains of Skardu.
                     </p>
                  </div>

                  {/* Language and Education Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                     {/* Language Card */}
                     <div
                        ref={(el) => {
                           cardsRef.current[0] = el;
                        }}
                        className="group"
                     >
                        <Card className="hover:shadow-2xl transition-shadow duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                           <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                 <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                                    <Languages className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                 </div>
                                 <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                    Languages
                                 </h3>
                              </div>
                              <div className="space-y-2">
                                 <div className="flex justify-between items-center">
                                    <span className="text-gray-700 dark:text-gray-300">
                                       Urdu
                                    </span>
                                    <Badge variant="secondary">Native</Badge>
                                 </div>
                                 <div className="flex justify-between items-center">
                                    <span className="text-gray-700 dark:text-gray-300">
                                       English
                                    </span>
                                    <Badge variant="secondary">
                                       Professional
                                    </Badge>
                                 </div>
                                 <div className="flex justify-between items-center">
                                    <span className="text-gray-700 dark:text-gray-300">
                                       Balti
                                    </span>
                                    <Badge variant="secondary">Native</Badge>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </div>

                     {/* Education Card */}
                     <div
                        ref={(el) => {
                           cardsRef.current[1] = el;
                        }}
                        className="group"
                     >
                        <Card className="hover:shadow-2xl transition-shadow duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                           <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                 <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                                    <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                 </div>
                                 <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                                    Education
                                 </h3>
                              </div>
                              <div className="space-y-4">
                                 <div>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                       Computer Science
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                       Uswa Boys College Skardu, 2025-present
                                    </p>
                                 </div>
                                 <div>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                       Learned everything from YouTube
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                       Online, 2023-2024
                                    </p>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </div>
                  </div>

                  {/* Timeline for Experience */}
                  <div ref={timelineRef} className="mt-8">
                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        Work Experience
                     </h3>
                     <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-full" />

                        {/* Experience items */}
                        <div className="space-y-8">
                           {experiences.map((exp, index) => (
                              <div
                                 key={index}
                                 ref={(el) => {
                                    timelineItemsRef.current[index] = el;
                                 }}
                                 className="relative pl-12"
                              >
                                 {/* Timeline dot */}
                                 <div className="absolute left-2 top-2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-900/50" />

                                 {/* Content card */}
                                 <Card className="hover:shadow-2xl transition-shadow duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                                    <CardContent className="p-5">
                                       <div className="flex items-start gap-3">
                                          <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg shrink-0">
                                             <exp.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                          </div>
                                          <div className="flex-1">
                                             <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                                   {exp.title}
                                                </h4>
                                                <Badge
                                                   variant="outline"
                                                   className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                                                >
                                                   <Calendar className="w-3 h-3 mr-1" />
                                                   {exp.period}
                                                </Badge>
                                             </div>
                                             <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                                                {exp.company}
                                             </p>
                                             <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                {exp.description}
                                             </p>
                                          </div>
                                       </div>
                                    </CardContent>
                                 </Card>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
