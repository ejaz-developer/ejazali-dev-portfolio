import {
   Gauge,
   Github,
   GithubIcon,
   Globe,
   Home,
   Instagram,
   Linkedin,
   Mail,
   MapPin,
   Palette,
   Phone,
   Search,
   Server,
   Smartphone,
   Twitter,
} from 'lucide-react';

export const navLinks = [
   {
      name: 'Home',
      href: '/',
   },
   {
      name: 'About me',
      href: '#about',
   },
   {
      name: 'Work',
      href: '#work',
   },
   {
      name: 'Services',
      href: '#services',
   },
   {
      name: 'Contact',
      href: '#contact',
   },
];

export const socialLinks = [
   {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ejaz-developer/',
      label: 'LinkedIn',
   },
   { icon: Github, href: 'https://github.com/ejaz-developer', label: 'GitHub' },
   {
      icon: Twitter,
      href: 'https://twitter.com/ejazdeveloper',
      label: 'Twitter',
   },
];

export const services = [
   {
      name: 'Web Development',
      description:
         'Building responsive and dynamic websites using modern technologies like React, Next.js, and Node.js.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
   },
   {
      name: 'Mobile App Development',
      description:
         'Creating user-friendly mobile applications for iOS and Android platforms using React Native.',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
   },
   {
      name: 'UI/UX Design',
      description:
         'Designing intuitive and visually appealing user interfaces and experiences with Figma and Adobe XD.',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
   },
   {
      name: 'SEO Optimization',
      description:
         'Improving website visibility on search engines through best practices and performance tuning.',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
   },
   {
      name: 'Backend Development',
      description:
         'Developing robust server-side applications and APIs with Node.js, Express, and MongoDB.',
      icon: Server,
      color: 'from-indigo-500 to-blue-500',
   },
   {
      name: 'Performance Optimization',
      description:
         'Enhancing website speed and performance to deliver exceptional user experiences.',
      icon: Gauge,
      color: 'from-yellow-500 to-amber-500',
   },
];

export const projects = [
   {
      title: 'MERN based Bus Ticketing Web app',
      imageSource: '/bookmygb-image.png',
      preview: 'https://bookmygb.vercel.app/',
      github: 'https://github.com/yourusername/bookmygb', // optional, add if you have
   },
   {
      title: 'Next.js based Point of Sale System',
      imageSource: '/recordkeeper-image.png',
      preview: 'https://recordkeeper-pink.vercel.app/',
      github: 'https://github.com/yourusername/recordkeeper',
   },
   // Add more projects as needed
];

export const contactInfo = [
   {
      icon: Mail,
      label: 'Email',
      value: 'devpro.ejazali34@gmail.com',
      href: 'mailto:devpro.ejazali34@gmail.com',
   },
   {
      icon: Phone,
      label: 'Phone',
      value: '+923115694918',
      href: 'tel:+923115694918',
   },
   {
      icon: MapPin,
      label: 'Location',
      value: 'Skardu, Pakistan',
      href: '#',
   },
];
