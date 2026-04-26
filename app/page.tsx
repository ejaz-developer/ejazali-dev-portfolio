"use client";
import { FadeIn } from "@/components/animations";
import { Github } from "@/components/icons";
import {
  experience,
  navLinks,
  projects,
  services,
  socialLinks,
  statsData,
} from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center py-20"
        >
          <FadeIn>
            <p className="text-zinc-400 font-medium tracking-wide uppercase text-sm mb-4">
              Hi, my name is
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight">
              Ejaz Ali.
              <br />
              <span className="text-zinc-500">I build for the web.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-lg text-zinc-400 mb-10 leading-relaxed">
              I&apos;m a software engineer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I&apos;m focused on building accessible, human-centered
              products as a Full Stack Developer.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <button className="bg-zinc-100 text-zinc-900 hover:bg-zinc-300 transition-colors h-14 px-8 text-base font-semibold">
                Check out my work
              </button>
              <button className="border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors h-14 px-8 text-base font-medium flex items-center">
                <Download className="mr-2 h-4 w-4" /> Resume
              </button>
            </div>
          </FadeIn>
        </section>

        {/* ABOUT & STATS */}
        <section id="about" className="py-24 border-t border-zinc-900">
          <SectionHeader title="About Me" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="prose prose-invert prose-lg text-zinc-400">
                <p>
                  Hello! My name is Ejaz and I enjoy creating things that live
                  on the internet. My interest in web development started back
                  in 2021 when I decided to try editing custom Tumblr themes
                  &mdash; turns out hacking together HTML & CSS taught me a lot
                  about architecture!
                </p>
                <p>
                  Fast-forward to today, and I&apos;ve had the privilege of
                  working at an agency, a start-up, and a huge corporation. My
                  main focus these days is building accessible, inclusive
                  products and digital experiences at CodeHub Skardu for a
                  variety of clients.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.1}>
                  <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl h-full flex flex-col justify-center">
                    <span className="text-4xl font-black text-white mb-2">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 border-t border-zinc-900">
          <SectionHeader title="Where I've Worked" />
          <div className="space-y-12 max-w-3xl">
            {experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group border-l-2 border-zinc-800 pl-6 hover:border-zinc-500 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-zinc-200 transition-colors">
                    {exp.role}{" "}
                    <span className="text-zinc-500">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-zinc-500 font-mono mb-4">
                    {exp.period}
                  </p>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-zinc-900 text-zinc-300 text-xs font-medium rounded-full border border-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="py-24 border-t border-zinc-900">
          <SectionHeader title="Some Things I've Built" />
          <div className="space-y-24">
            {projects.map((project, i) => (
              <FadeIn key={i}>
                <div
                  className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
                >
                  <div className="w-full md:w-3/5 group relative">
                    <div className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                      {/* Placeholder for image */}
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-600 bg-zinc-900">
                        {project.title} Preview Image
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full md:w-2/5 flex flex-col justify-center ${i % 2 === 1 ? "md:items-start md:text-left" : "md:items-end md:text-right"} relative z-10`}
                  >
                    <p className="text-zinc-500 text-sm font-mono mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-3xl font-black text-white mb-6 hover:text-zinc-300 transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                    <div className="bg-zinc-900 p-6 rounded-lg text-zinc-300 shadow-2xl border border-zinc-800 mb-6">
                      <p>{project.description}</p>
                    </div>
                    <ul
                      className={`flex flex-wrap gap-4 text-xs font-mono text-zinc-400 mb-8 ${i % 2 === 1 ? "justify-start" : "justify-end"}`}
                    >
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4 items-center text-zinc-400">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <ArrowRight className="w-6 h-6 rotate-45" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 border-t border-zinc-900">
          <SectionHeader title="What I Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors rounded-2xl h-full group">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-zinc-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.name}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-32 border-t border-zinc-900 text-center max-w-2xl mx-auto"
        >
          <FadeIn>
            <p className="text-zinc-500 font-mono text-sm mb-4">
              04. What's Next?
            </p>
            <h2 className="text-5xl font-black text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-zinc-400 mb-10">
              Although I'm not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>
            <button className="bg-white text-zinc-950 hover:bg-zinc-200 transition-colors h-14 px-8 text-base font-bold">
              Say Hello
            </button>
          </FadeIn>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center text-zinc-500 text-sm font-mono border-t border-zinc-900">
        <div className="flex items-center justify-center gap-6 mb-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-white transition-colors"
              >
                <span className="sr-only">{social.label}</span>
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        <p>Built with Next.js & Tailwind CSS.</p>
        <p className="mt-2 text-xs">Ejaz Ali © {new Date().getFullYear()}</p>
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
