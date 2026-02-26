'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/constant';
gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
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
            { opacity: 0, y: 50, scale: 0.9 },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 0.6,
               stagger: 0.1,
               ease: 'back.out(1.2)',
            }
         );
      },
      { scope: sectionRef }
   );

   return (
      <section
         ref={sectionRef}
         className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
         <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
               <p
                  ref={subtitleRef}
                  className="text-indigo-600 dark:text-indigo-400 font-mono text-lg"
               >
                  What I Offer
               </p>
               <h2
                  ref={titleRef}
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2"
               >
                  My Services
               </h2>
               <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  I provide a wide range of digital services to help you build
                  amazing products and grow your business.
               </p>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map((service, index) => (
                  <div
                     key={index}
                     ref={(el) => {
                        cardsRef.current[index] = el;
                     }}
                     className="group h-full"
                  >
                     <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative">
                        {/* Gradient accent line */}
                        <div
                           className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
                        />
                        <CardHeader className="pb-2">
                           <div className="flex items-center justify-between">
                              <div
                                 className={`p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10`}
                              >
                                 <service.icon className="w-6 h-6 text-white" />
                              </div>
                              <Badge
                                 variant="outline"
                                 className="bg-white/50 dark:bg-gray-700/50"
                              >
                                 Service
                              </Badge>
                           </div>
                           <CardTitle className="text-xl mt-4 text-gray-900 dark:text-white">
                              {service.name}
                           </CardTitle>
                        </CardHeader>
                        <CardContent>
                           <CardDescription className="text-gray-600 dark:text-gray-400">
                              {service.description}
                           </CardDescription>
                           <div className="mt-4">
                              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium inline-flex items-center group-hover:gap-2 transition-all">
                                 Learn more
                                 <svg
                                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       d="M9 5l7 7-7 7"
                                    />
                                 </svg>
                              </span>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceSection;
