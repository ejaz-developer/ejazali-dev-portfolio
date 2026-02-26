'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/constant';
gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
         ).fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
               opacity: 1,
               y: 0,
               duration: 0.8,
               stagger: 0.2,
               ease: 'power3.out',
            }
         );
      },
      { scope: sectionRef }
   );

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
                  My Work
               </p>
               <h2
                  ref={titleRef}
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2"
               >
                  Featured Projects
               </h2>
               <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills
                  and experience.
               </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {projects.map((project, index) => (
                  <div
                     key={index}
                     ref={(el) => {
                        cardsRef.current[index] = el;
                     }}
                     className="group h-full"
                  >
                     <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                           <Image
                              src={project.imageSource}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           {/* Overlay on hover */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardHeader>
                           <CardTitle className="text-xl text-gray-900 dark:text-white">
                              {project.title}
                           </CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-gray-600 dark:text-gray-400">
                              A full-stack web application built with modern
                              technologies.
                           </p>
                        </CardContent>
                        <CardFooter className="flex gap-3">
                           <Button asChild size="sm" className="rounded-full">
                              <Link
                                 href={project.preview}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <ExternalLink className="w-4 h-4 mr-2" />
                                 Live Preview
                              </Link>
                           </Button>
                           {project.github && (
                              <Button
                                 asChild
                                 size="sm"
                                 variant="outline"
                                 className="rounded-full"
                              >
                                 <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <Github className="w-4 h-4 mr-2" />
                                    Code
                                 </Link>
                              </Button>
                           )}
                        </CardFooter>
                     </Card>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default WorkSection;
