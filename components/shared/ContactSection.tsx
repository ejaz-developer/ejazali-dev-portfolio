'use client';

import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
   Mail,
   Phone,
   MapPin,
   Linkedin,
   Github,
   Twitter,
   Send,
   User,
   MessageSquare,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import { socialLinks, contactInfo } from '@/constant/';
import toast from 'react-hot-toast';

const ContactSection = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const headerRef = useRef<HTMLDivElement>(null);
   const leftRef = useRef<HTMLDivElement>(null);
   const rightRef = useRef<HTMLDivElement>(null);
   const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: '',
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      // Simulate submission
      setTimeout(() => {
         setIsSubmitting(false);
         toast.success(
            'Message sent successfully! I will get back to you soon.',
            {
               duration: 4000,
            }
         );
         setFormState({ name: '', email: '', message: '' });
      }, 1500);
   };

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
            headerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
         )
            .fromTo(
               leftRef.current,
               { opacity: 0, x: -30 },
               { opacity: 1, x: 0, duration: 0.8 },
               '-=0.4'
            )
            .fromTo(
               rightRef.current,
               { opacity: 0, x: 30 },
               { opacity: 1, x: 0, duration: 0.8 },
               '-=0.8'
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
            {/* Section Header */}
            <div ref={headerRef} className="text-center mb-12">
               <p className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">
                  Get in Touch
               </p>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                  Contact Me
               </h2>
               <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Have a project in mind or just want to say hello? Feel free to
                  reach out!
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Left Column - Contact Info */}
               <div ref={leftRef}>
                  <Card className="h-full border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
                     <CardContent className="p-6 md:p-8 space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                           Let's Connect
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                           I'm always interested in hearing about new
                           opportunities, collaborations, or just having a chat.
                           Reach out and let's create something amazing
                           together.
                        </p>

                        {/* Contact Info List */}
                        <div className="space-y-4">
                           {contactInfo.map((item, index) => (
                              <a
                                 key={index}
                                 href={item.href}
                                 className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors group"
                              >
                                 <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                 </div>
                                 <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                       {item.label}
                                    </p>
                                    <p className="text-gray-900 dark:text-white font-medium">
                                       {item.value}
                                    </p>
                                 </div>
                              </a>
                           ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                           <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                              Follow me on
                           </p>
                           <div className="flex gap-3">
                              {socialLinks.map((social, index) => (
                                 <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full hover:scale-110 transition-transform"
                                    aria-label={social.label}
                                 >
                                    <social.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                 </a>
                              ))}
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </div>

               {/* Right Column - Improved Contact Form */}
               <div ref={rightRef}>
                  <Card className="h-full border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 pointer-events-none" />
                     <CardContent className="relative p-6 md:p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                           Send a Message
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                           I'll get back to you as soon as possible
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-5">
                           {/* Name field with icon */}
                           <div className="relative">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                 <User className="w-5 h-5" />
                              </div>
                              <Input
                                 type="text"
                                 name="name"
                                 placeholder="Your Name"
                                 value={formState.name}
                                 onChange={handleChange}
                                 required
                                 className="w-full pl-10 pr-4 py-6 rounded-xl border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                              />
                           </div>

                           {/* Email field with icon */}
                           <div className="relative">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                 <Mail className="w-5 h-5" />
                              </div>
                              <Input
                                 type="email"
                                 name="email"
                                 placeholder="Your Email"
                                 value={formState.email}
                                 onChange={handleChange}
                                 required
                                 className="w-full pl-10 pr-4 py-6 rounded-xl border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                              />
                           </div>

                           {/* Message field with icon */}
                           <div className="relative">
                              <div className="absolute left-3 top-5 text-gray-400">
                                 <MessageSquare className="w-5 h-5 " />
                              </div>
                              <Textarea
                                 name="message"
                                 placeholder="Your Message"
                                 rows={5}
                                 value={formState.message}
                                 onChange={handleChange}
                                 required
                                 className="w-full pl-10 pr-4 py-3 rounded-xl border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                              />
                           </div>

                           {/* Submit button with loading state */}
                           <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                              {isSubmitting ? (
                                 <span className="flex items-center justify-center gap-2">
                                    <svg
                                       className="animate-spin h-5 w-5 text-white"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                    >
                                       <circle
                                          className="opacity-25"
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                       ></circle>
                                       <path
                                          className="opacity-75"
                                          fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                       ></path>
                                    </svg>
                                    Sending...
                                 </span>
                              ) : (
                                 <span className="flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                 </span>
                              )}
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;
