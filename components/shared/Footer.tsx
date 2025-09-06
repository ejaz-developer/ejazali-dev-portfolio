'use client';

import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Heart,
  ArrowUp,
  MapPin,
  Calendar,
  Coffee,
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/ejaz-developer',
      color: 'hover:text-[#333]',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/ejaz-developer',
      color: 'hover:text-[#0077B5]',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/ejaz_developer',
      color: 'hover:text-[#1DA1F2]',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:ejaz@example.com',
      color: 'hover:text-[var(--orange-web)]',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#tools' },
    { name: 'GitHub Stats', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'];

  return (
    <>
      <footer className="relative overflow-hidden">
        {/* Background Effects - Matching your theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--oxford-blue)]/95 via-[var(--black)] to-[var(--black)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 to-transparent" />

        {/* Animated background elements matching your layout */}
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-[var(--orange-web)]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-[var(--oxford-blue)]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-[var(--orange-web)]/5 rounded-full blur-2xl animate-ping"
          style={{ animationDuration: '8s' }}
        />

        {/* Top border gradient */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--orange-web)]/60 to-transparent" />

        <div className="container mx-auto px-6 py-16 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--white)] font-mono mb-3">Ejaz Ali</h3>
                <p className="text-[var(--platinum)] leading-relaxed mb-4">
                  Full-stack developer passionate about creating amazing digital experiences with
                  modern technologies and clean code.
                </p>
                <div className="flex items-center gap-2 text-[var(--platinum)]/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Pakistan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-3 bg-[var(--oxford-blue)]/20 backdrop-blur-sm hover:bg-[var(--oxford-blue)]/40
                      rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                      text-[var(--platinum)] ${social.color}
                      border border-[var(--platinum)]/10 hover:border-[var(--orange-web)]/50
                      shadow-lg hover:shadow-[var(--orange-web)]/20
                    `}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--white)] font-mono mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[var(--platinum)] hover:text-[var(--orange-web)]
                               transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--white)] font-mono mb-6">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[var(--oxford-blue)]/20 backdrop-blur-sm text-[var(--platinum)]
                             rounded-lg text-sm border border-[var(--platinum)]/10
                             hover:border-[var(--orange-web)]/50 hover:text-[var(--orange-web)]
                             hover:bg-[var(--oxford-blue)]/30 hover:shadow-lg hover:shadow-[var(--orange-web)]/10
                             transition-all duration-300 cursor-default transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-[var(--white)] font-mono mb-6">
                Let&apos;s Connect
              </h4>
              <div className="space-y-4">
                <p className="text-[var(--platinum)] leading-relaxed">
                  Open to discussing new opportunities, collaborations, or just having a chat about
                  technology.
                </p>
                <a
                  href="mailto:ejaz@example.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--orange-web)]/10
                           hover:bg-[var(--orange-web)]/20 text-[var(--orange-web)] rounded-xl
                           border border-[var(--orange-web)]/30 hover:border-[var(--orange-web)]/60
                           backdrop-blur-sm hover:shadow-lg hover:shadow-[var(--orange-web)]/20
                           transition-all duration-300 font-mono transform hover:scale-105 hover:-translate-y-1"
                >
                  <Mail className="w-4 h-4" />
                  Get in touch
                </a>
                <div className="flex items-center gap-2 text-[var(--platinum)]/70 text-sm">
                  <Coffee className="w-4 h-4" />
                  <span>Always available for a coffee chat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--orange-web)]/30 to-transparent" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--orange-web)] rounded-full"></div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-[var(--platinum)]/70 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>© {currentYear} Ejaz Ali</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-[var(--platinum)]/20" />
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4 text-amber-600" />
              </div>
            </div>

            <div className="text-[var(--platinum)]/70 text-sm font-mono">
              Built with Next.js 15 & Tailwind CSS
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90
                     text-[var(--black)] rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--orange-web)]/30
                     transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50
                     border border-[var(--orange-web)]/20 backdrop-blur-sm"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;
