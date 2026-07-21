"use client";
import { FadeIn } from "@/components/animations";
import { Github } from "@/components/icons";
import {
    experience,
    navLinks,
    projects,
    services,
    socialLinks,
} from "@/lib/data";
import { div, footer, main, section } from "framer-motion/client";
import { ArrowRight, CheckCircle, ExternalLink, Mail, Menu, Podcast, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="font-sans text-foreground bg-background">
      {/* Top Navigation - Glass morphism */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-outline-variant/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between">
          <Link className="font-heading text-3xl font-bold gradient-text tracking-tight" href="/">
            Ejaz.dev
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#"
              className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95 btn-shine"
            >
              Resume
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-gradient min-h-screen relative overflow-hidden flex items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-12 items-center gap-gutter relative z-10">
            <div className="md:col-span-7 space-y-8">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container/50 text-on-secondary-container text-xs font-semibold rounded-full border border-secondary/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  MERN & Next.js Specialist
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
                  Crafting <span className="gradient-text italic font-normal">high-performance</span> web experiences through thoughtful design.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                  I&apos;m Ejaz, a developer dedicated to making the web a better place for everyone. My focus lies at the intersection of aesthetic clarity and radical performance.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    className="px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95 btn-shine"
                    href="#projects"
                  >
                    View Projects
                  </Link>
                  <Link
                    className="px-8 py-4 border border-outline/50 text-primary rounded-xl font-semibold text-sm hover:bg-primary hover:text-on-primary hover:border-transparent transition-all duration-300"
                    href="#contact"
                  >
                    Get in touch
                  </Link>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="pt-8 flex gap-8 border-t border-outline-variant/30">
                  {[
                    { value: "3+", label: "Years Experience" },
                    { value: "10+", label: "Projects Completed" },
                    { value: "10+", label: "Technologies" }
                  ].map((stat, i) => (
                    <div key={stat.label} className="space-y-1">
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.4} className="md:col-span-5 relative mt-12 md:mt-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl glow-strong border border-outline-variant/30 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay"></div>
                <Image
                  className="w-full h-full object-cover"
                  alt="Ejaz Ali"
                  src="https://lh3.googleusercontent.com/a/ACg8ocL0O_w5lXq-y-J-R6W-U-Q-O-Q-O-Q-O-Q-O-Q=s288-c-no"
                  width={600}
                  height={750}
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl border border-outline-variant/30 hidden lg:block card-hover">
                <p className="font-heading text-xl text-secondary italic">
                  &quot;Performance isn&apos;t a feature, it&apos;s a right.&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section className="py-section-gap bg-surface-container-low" id="about">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-12 gap-gutter">
              <div className="md:col-span-4">
                <h2 className="font-heading text-4xl md:text-5xl sticky top-24 gradient-text">The Journey</h2>
              </div>
              <div className="md:col-span-8 space-y-8 text-on-surface-variant">
                <FadeIn>
                  <p className="text-lg leading-relaxed">
                    My fascination with the digital canvas began in 2021, not with complex frameworks, but with the humble art of Tumblr theme editing. I spent nights tweaking CSS, obsessed with how small shifts in spacing and color could change a user&apos;s entire emotional response to content.
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-lg leading-relaxed">
                    What started as a hobby evolved into a professional pursuit. Today, I build high-performance web applications that don&apos;t just look good but are robust enough to be used by anyone. I believe that professional design should be personal, authoritative, and above all, clear.
                  </p>
                </FadeIn>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
                  {[
                    { icon: CheckCircle, title: "Modern Tech", desc: "Next.js & MERN" },
                    { icon: CheckCircle, title: "Frontend", desc: "React & Tailwind" },
                    { icon: CheckCircle, title: "Backend", desc: "Node & Express" }
                  ].map((skill, i) => (
                    <FadeIn delay={0.2 + i * 0.1} key={skill.title} className="p-6 bg-surface-container-high border border-outline-variant/30 rounded-2xl card-hover group">
                      <skill.icon className="text-primary h-7 w-7 mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">{skill.title}</p>
                      <p className="text-xs text-on-surface-variant mt-1">{skill.desc}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-section-gap bg-background" id="projects">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <FadeIn>
                  <h2 className="font-heading text-5xl md:text-6xl mb-4">Selected <span className="gradient-text italic">Works</span></h2>
                  <p className="text-lg text-on-surface-variant">
                    A curated collection of projects where performance meets accessibility. Each piece represents a solution to a specific human problem.
                  </p>
                </FadeIn>
              </div>
              <Link className="text-primary font-semibold text-sm flex items-center gap-2 hover:underline group" href="#">
                Explore all projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-section-gap">
              {projects.map((project, i) => (
                <FadeIn delay={i * 0.1} key={project.title} className="group grid md:grid-cols-12 gap-gutter items-center">
                  <div className={`md:col-span-7 overflow-hidden rounded-2xl bg-surface-container-high aspect-video border border-outline-variant/30 shadow-xl ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <Image
                      src={project.imageSource}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover image-transition"
                    />
                  </div>
                  <div className={`md:col-span-5 space-y-6 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-secondary-container/30 text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-full border border-secondary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-4 flex gap-4">
                      <Link
                        className="inline-flex items-center gap-2 font-semibold text-sm hover:text-primary transition-colors group/link"
                        href={project.preview}
                        target="_blank"
                      >
                        Live Demo <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                      <Link
                        className="inline-flex items-center gap-2 font-semibold text-sm hover:text-primary transition-colors group/link"
                        href={project.github}
                        target="_blank"
                      >
                        GitHub <Github className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-section-gap bg-surface-container" id="experience">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-12 gap-gutter">
              <div className="md:col-span-4">
                <h2 className="font-heading text-4xl md:text-5xl gradient-text">Professional Path</h2>
              </div>
              <div className="md:col-span-8 space-y-12">
                {experience.map((exp, i) => (
                  <FadeIn delay={i * 0.1} key={exp.company + exp.role} className="relative pl-8 border-l border-outline-variant/50 group">
                    <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-primary shadow-lg shadow-primary/50 scale-125' : 'bg-outline-variant group-hover:bg-primary group-hover:scale-110'}`}></div>
                    <span className="text-sm font-semibold text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full inline-block">{exp.period}</span>
                    <h4 className="font-heading text-2xl mt-3 group-hover:text-primary transition-colors duration-300">{exp.role}</h4>
                    <p className="text-sm font-semibold text-secondary">{exp.company}</p>
                    <p className="text-on-surface-variant mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {exp.skills?.map((skill) => (
                        <span key={skill} className="text-xs px-3 py-1 bg-surface-container-highest rounded-full text-on-surface-variant border border-outline-variant/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section-gradient bg-background relative overflow-hidden" id="contact">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-[800px] mx-auto px-margin-mobile text-center relative z-10">
            <FadeIn>
              <h2 className="font-heading text-5xl md:text-6xl mb-4">Let&apos;s build something <span className="gradient-text italic">meaningful</span>.</h2>
              <p className="text-lg text-on-surface-variant mb-12">Whether you have a specific project in mind or just want to chat about technology, my door is always open.</p>
            </FadeIn>

            <form className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Your Name</label>
                  <input className="w-full p-4 bg-surface-container border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40 hover:border-outline" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email Address</label>
                  <input className="w-full p-4 bg-surface-container border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40 hover:border-outline" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Message</label>
                <textarea className="w-full p-4 bg-surface-container border border-outline-variant/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40 hover:border-outline" placeholder="How can I help you?" rows={5}></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-on-primary font-semibold text-sm rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.98] btn-shine" type="submit">
                Send Message
              </button>
            </form>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-on-surface-variant">
              <a className="hover:text-primary transition-colors flex items-center gap-2 group" href="mailto:devpro.ejazali34@gmail.com">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" /> devpro.ejazali34@gmail.com
              </a>
              <a className="hover:text-primary transition-colors flex items-center gap-2 group" href="#">
                <Podcast className="h-4 w-4 group-hover:scale-110 transition-transform" /> Newsletter
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-section-gap bg-surface-container-low border-t border-outline-variant/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl gradient-text">Ejaz.dev</h3>
            <p className="text-sm font-semibold text-on-surface-variant">© 2024 Ejaz.dev. Built with focus and clarity.</p>
          </div>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-on-surface-variant hover:text-primary hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm group"
              >
                {link.label}
                <span className="block h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
