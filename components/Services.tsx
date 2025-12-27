'use client';

import { useEffect, useState } from 'react';
import {
  Code,
  Palette,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  Search,
  Box,
  LayoutGrid,
  Layers,
  Monitor,
  Server,
  Settings,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  popular: boolean;
}

// Fallback services if database is empty
const fallbackServices: Omit<Service, '_id'>[] = [
  {
    icon: 'Code',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications built with modern technologies like React, Next.js, Node.js, and MongoDB.',
    features: ['Custom Web Apps', 'API Development', 'Database Design', 'Authentication'],
    color: 'from-blue-500 to-cyan-500',
    popular: true,
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that prioritize user experience and modern design principles.',
    features: ['Responsive Design', 'Design Systems', 'Prototyping', 'User Testing'],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
  {
    icon: 'Zap',
    title: 'Performance Optimization',
    description:
      'Speed up your existing applications with code optimization, caching, and best practices.',
    features: ['Code Audits', 'Speed Optimization', 'SEO Improvements', 'Analytics Setup'],
    color: 'from-orange-500 to-red-500',
    popular: false,
  },
  {
    icon: 'Database',
    title: 'Backend & APIs',
    description:
      'Robust server-side solutions with secure APIs, database management, and cloud integration.',
    features: ['REST APIs', 'GraphQL', 'Cloud Deployment', 'Database Scaling'],
    color: 'from-green-500 to-emerald-500',
    popular: false,
  },
  {
    icon: 'Smartphone',
    title: 'Mobile-First Solutions',
    description:
      'Progressive web apps and mobile-responsive designs that work seamlessly across all devices.',
    features: ['PWA Development', 'Mobile Apps', 'Cross-Platform', 'Offline Support'],
    color: 'from-indigo-500 to-purple-500',
    popular: false,
  },
  {
    icon: 'Globe',
    title: 'Website Maintenance',
    description:
      'Ongoing support, updates, and improvements to keep your website running smoothly.',
    features: ['Regular Updates', 'Security Patches', 'Content Updates', '24/7 Support'],
    color: 'from-teal-500 to-cyan-500',
    popular: false,
  },
];

const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Code,
    Palette,
    Globe,
    Smartphone,
    Database,
    Cloud,
    Shield,
    Zap,
    Search,
    Box,
    LayoutGrid,
    Layers,
    Monitor,
    Server,
    Settings,
  };
  return iconMap[iconName] || Code;
};

const Services = () => {
  const [services, setServices] = useState<(Service | Omit<Service, '_id'>)[]>(fallbackServices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setServices(data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
        // Keep fallback services on error
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--platinum) 1px, transparent 1px),
              linear-gradient(90deg, var(--platinum) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="bg-[var(--orange-web)]/20 text-[var(--orange-web)] border-[var(--orange-web)]/30 mb-4">
            What I Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-6 font-mono">
            Services & <span className="text-[var(--orange-web)]">Solutions</span>
          </h2>
          <p className="text-lg text-[var(--platinum)]/70 leading-relaxed">
            From concept to deployment, I provide comprehensive web development services tailored to
            your business needs. Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--orange-web)]"></div>
          </div>
        )}

        {/* Services Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <Card
                  key={'_id' in service ? service._id : index}
                  className={`group bg-[var(--oxford-blue)]/10 border-[var(--platinum)]/10 backdrop-blur-sm hover:border-[var(--orange-web)]/30 transition-all duration-500 hover:transform hover:-translate-y-2 relative overflow-hidden ${
                    service.popular ? 'ring-2 ring-[var(--orange-web)]/30' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[var(--orange-web)] text-[var(--black)] font-semibold">
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-4`}
                    >
                      <div className="w-full h-full rounded-2xl bg-[var(--black)] flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-[var(--white)]" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-[var(--white)] font-mono group-hover:text-[var(--orange-web)] transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[var(--platinum)]/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-[var(--platinum)]/60"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[var(--orange-web)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--platinum)]/5 border border-[var(--platinum)]/10 text-[var(--platinum)] hover:bg-[var(--orange-web)]/10 hover:border-[var(--orange-web)]/30 hover:text-[var(--orange-web)] transition-all group/btn">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-[var(--oxford-blue)]/30 to-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10">
          <div className="text-left">
            <h3 className="text-xl font-bold text-[var(--white)] mb-1">Need a custom solution?</h3>
            <p className="text-[var(--platinum)]/60">
              Let&apos;s discuss your project requirements
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90 text-[var(--black)] font-semibold rounded-xl transition-colors flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
