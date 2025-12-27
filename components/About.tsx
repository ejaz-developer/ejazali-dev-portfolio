'use client';

import { useEffect, useState } from 'react';
import { Code2, GraduationCap, Target, Lightbulb, Award, Coffee, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: '3+ Years',
      subtitle: 'Coding Experience',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: '15+',
      subtitle: 'Projects Delivered',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Coffee,
      title: '1000+',
      subtitle: 'Cups of Coffee',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Target,
      title: '100%',
      subtitle: 'Client Satisfaction',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description:
        'Always exploring new technologies and approaches to deliver cutting-edge solutions.',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Self-taught developer who believes in lifelong learning and skill improvement.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description:
        'Focused on delivering measurable results that help businesses grow and succeed.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--platinum) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[var(--orange-web)]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[var(--oxford-blue)]/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="bg-[var(--orange-web)]/20 text-[var(--orange-web)] border-[var(--orange-web)]/30 mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-6 font-mono">
            Crafting <span className="text-[var(--orange-web)]">Digital Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content - Story */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-4">
              <p className="text-lg text-[var(--platinum)]/80 leading-relaxed">
                Hello! I&apos;m{' '}
                <span className="text-[var(--orange-web)] font-semibold">Ejaz Ali</span>, a
                passionate self-taught full-stack developer from the beautiful valleys of
                <span className="inline-flex items-center gap-1 mx-1">
                  <MapPin className="w-4 h-4 text-[var(--orange-web)]" />
                  <span className="text-[var(--orange-web)]">Skardu, Pakistan</span>
                </span>
                .
              </p>
              <p className="text-lg text-[var(--platinum)]/70 leading-relaxed">
                My journey into web development began with YouTube tutorials and a burning curiosity
                to create. What started as a hobby has transformed into a full-fledged career where
                I help businesses and individuals bring their digital visions to life.
              </p>
              <p className="text-lg text-[var(--platinum)]/70 leading-relaxed">
                I specialize in building modern web applications using the{' '}
                <span className="text-[var(--orange-web)]">MERN stack</span> and{' '}
                <span className="text-[var(--orange-web)]">Next.js</span>. My approach combines
                clean code, intuitive design, and a deep understanding of user needs to create
                solutions that not only look great but perform exceptionally.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/5 hover:border-[var(--orange-web)]/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--orange-web)]/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-[var(--orange-web)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--white)] mb-1">{value.title}</h3>
                    <p className="text-sm text-[var(--platinum)]/60">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm hover:border-[var(--orange-web)]/30 transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="p-6 relative">
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                    />

                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4`}
                    >
                      <div className="w-full h-full rounded-xl bg-[var(--black)] flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[var(--white)]" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-[var(--white)] font-mono mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-[var(--platinum)]/60">{item.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote Card */}
            <Card className="mt-4 bg-gradient-to-br from-[var(--orange-web)]/10 to-[var(--oxford-blue)]/20 border-[var(--orange-web)]/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="text-4xl text-[var(--orange-web)]">&ldquo;</div>
                  <div>
                    <p className="text-[var(--platinum)]/80 italic leading-relaxed">
                      Code is poetry. Every line should tell a story and serve a purpose. I believe
                      in writing clean, maintainable code that stands the test of time.
                    </p>
                    <p className="text-[var(--orange-web)] font-semibold mt-4">— Ejaz Ali</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-6 flex gap-4">
              <a
                href="#contact"
                className="flex-1 py-4 px-6 rounded-xl bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90 text-[var(--black)] font-semibold text-center transition-colors"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="#projects"
                className="flex-1 py-4 px-6 rounded-xl border border-[var(--platinum)]/20 text-[var(--white)] hover:bg-[var(--platinum)]/5 font-semibold text-center transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
