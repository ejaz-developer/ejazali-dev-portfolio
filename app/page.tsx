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
import { ArrowRight, CheckCircle, ExternalLink, Mail, Menu, Podcast } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-[#191c1d] selection:bg-secondary-container bg-[#f8f9fa]">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16 flex items-center justify-between">
          <Link className="font-heading text-2xl font-bold text-tertiary" href="/">
            Ejaz.dev
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors text-base"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="px-6 py-2 bg-primary text-on-primary rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-all active:scale-95"
            >
              Resume
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden py-24 md:py-32 flex items-center">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-12 items-center gap-gutter">
            <div className="md:col-span-7 space-y-6">
              <FadeIn>
                <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded">
                   MERN & Next.js Specialist
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                  Crafting high-performance web experiences through <span className="italic font-normal">thoughtful design</span>.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base md:text-lg text-on-surface-variant max-w-xl">
                  I&apos;m Ejaz, a developer dedicated to making the web a better place for everyone. My focus lies at the intersection of aesthetic clarity and radical performance.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    className="px-8 py-4 bg-primary text-on-primary rounded-lg font-semibold text-sm shadow-sm hover:shadow-lg transition-all"
                    href="#projects"
                  >
                    View Projects
                  </Link>
                  <Link
                    className="px-8 py-4 border border-outline text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-on-primary transition-all"
                    href="#contact"
                  >
                    Get in touch
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.4} className="md:col-span-5 relative mt-12 md:mt-0">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container-high border border-outline-variant/30">
                <Image
                  className="w-full h-full object-cover"
                  alt="Ejaz Ali"
                  src="https://lh3.googleusercontent.com/a/ACg8ocL0O_w5lXq-y-J-R6W-U-Q-O-Q-O-Q-O-Q-O-Q=s288-c-no"
                  width={600}
                  height={750}
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-outline-variant/30 hidden lg:block">
                <p className="font-heading text-xl text-secondary italic">
                  &quot;Performance isn&apos;t a feature, it&apos;s a right.&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section className="py-section-gap bg-white" id="about">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-12 gap-gutter">
              <div className="md:col-span-4">
                <h2 className="font-heading text-3xl md:text-4xl sticky top-24">The Journey</h2>
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
                    <FadeIn delay={0.2 + i * 0.1} key={skill.title} className="p-4 bg-[#f8f9fa] border border-outline-variant/30 rounded-lg">
                      <skill.icon className="text-secondary h-6 w-6 mb-2" />
                      <p className="text-sm font-bold text-primary uppercase tracking-wider">{skill.title}</p>
                      <p className="text-xs text-on-surface-variant">{skill.desc}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-section-gap" id="projects">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <FadeIn>
                  <h2 className="font-heading text-5xl mb-4">Selected Works</h2>
                  <p className="text-lg text-on-surface-variant">
                    A curated collection of projects where performance meets accessibility. Each piece represents a solution to a specific human problem.
                  </p>
                </FadeIn>
              </div>
              <Link className="text-primary font-semibold text-sm flex items-center gap-2 hover:underline" href="#">
                Explore all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-section-gap">
              {projects.map((project, i) => (
                <FadeIn delay={i * 0.1} key={project.title} className="group grid md:grid-cols-12 gap-gutter items-center">
                  <div className={`md:col-span-7 overflow-hidden rounded-xl bg-surface-container-high aspect-video border border-outline-variant/30 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
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
                        <span key={tag} className="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-widest rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl">{project.title}</h3>
                    <p className="text-on-surface-variant">
                      {project.description}
                    </p>
                    <div className="pt-4 flex gap-4">
                      <Link
                        className="inline-flex items-center gap-2 font-semibold text-sm hover:text-primary transition-colors"
                        href={project.preview}
                        target="_blank"
                      >
                        Live Demo <ExternalLink className="h-4 w-4" />
                      </Link>
                      <Link
                        className="inline-flex items-center gap-2 font-semibold text-sm hover:text-primary transition-colors"
                        href={project.github}
                        target="_blank"
                      >
                        GitHub <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-section-gap bg-surface-container-low" id="experience">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-12 gap-gutter">
              <div className="md:col-span-4">
                <h2 className="font-heading text-3xl md:text-4xl">Professional Path</h2>
              </div>
              <div className="md:col-span-8 space-y-12">
                {experience.map((exp, i) => (
                  <FadeIn delay={i * 0.1} key={exp.company + exp.role} className="relative pl-8 border-l border-outline-variant">
                    <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full ${i === 0 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
                    <span className="text-sm font-semibold text-on-surface-variant">{exp.period}</span>
                    <h4 className="font-heading text-2xl mt-1">{exp.role}</h4>
                    <p className="text-sm font-semibold text-secondary">{exp.company}</p>
                    <p className="text-on-surface-variant mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section-gap bg-white" id="contact">
          <div className="max-w-[800px] mx-auto px-margin-mobile text-center">
            <FadeIn>
              <h2 className="font-heading text-5xl md:text-6xl mb-4">Let&apos;s build something <span className="italic font-normal">meaningful</span>.</h2>
              <p className="text-lg text-on-surface-variant mb-12">Whether you have a specific project in mind or just want to chat about technology, my door is always open.</p>
            </FadeIn>

            <form className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Your Name</label>
                  <input className="w-full p-4 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email Address</label>
                  <input className="w-full p-4 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="john@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Message</label>
                <textarea className="w-full p-4 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-tertiary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40" placeholder="How can I help you?" rows={5}></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-on-primary font-semibold text-sm rounded-lg shadow-sm hover:shadow-lg transition-all active:scale-[0.98]" type="submit">
                Send Message
              </button>
            </form>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-on-surface-variant">
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="mailto:devpro.ejazali34@gmail.com">
                <Mail className="h-4 w-4" /> devpro.ejazali34@gmail.com
              </a>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <Podcast className="h-4 w-4" /> Newsletter
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-section-gap bg-white border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl text-tertiary">Ejaz.dev</h3>
            <p className="text-sm font-semibold text-on-surface-variant">© 2024 Ejaz.dev. Built with focus and clarity.</p>
          </div>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-on-surface-variant hover:text-primary hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-black text-white tracking-widest uppercase">
        E.
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <button className="hidden md:flex border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors px-4 py-2 bg-transparent text-sm font-medium">
        Resume
      </button>
    </header>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center mb-12">
      <h2 className="text-2xl md:text-3xl font-black text-white whitespace-nowrap">
        {title}
      </h2>
      <div className="ml-6 h-px bg-zinc-800 w-full max-w-sm"></div>
    </div>
  );
}
