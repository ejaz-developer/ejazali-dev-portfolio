'use client';

import { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Clock,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ejaz@devforge.dev',
      href: 'mailto:ejaz@devforge.dev',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Skardu, Pakistan',
      href: null,
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ejaz-developer', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ejaz-developer', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ejaz_developer', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--platinum) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--orange-web)]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--oxford-blue)]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="bg-[var(--orange-web)]/20 text-[var(--orange-web)] border-[var(--orange-web)]/30 mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-6 font-mono">
            Let&apos;s <span className="text-[var(--orange-web)]">Connect</span>
          </h2>
          <p className="text-lg text-[var(--platinum)]/70 leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s
            create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-[var(--white)] font-mono">Contact Information</CardTitle>
                <CardDescription className="text-[var(--platinum)]/60">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5 hover:border-[var(--orange-web)]/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--orange-web)]/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-[var(--orange-web)]" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--platinum)]/50">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[var(--white)] hover:text-[var(--orange-web)] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--white)]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-[var(--white)] font-mono">Follow Me</CardTitle>
                <CardDescription className="text-[var(--platinum)]/60">
                  Connect on social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/10 hover:border-[var(--orange-web)]/30 hover:bg-[var(--orange-web)]/10 transition-all flex flex-col items-center gap-2 group"
                    >
                      <social.icon className="w-5 h-5 text-[var(--platinum)] group-hover:text-[var(--orange-web)] transition-colors" />
                      <span className="text-xs text-[var(--platinum)]/60 group-hover:text-[var(--platinum)] transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--orange-web)]/20 to-[var(--oxford-blue)]/20 border border-[var(--orange-web)]/20">
              <h3 className="text-lg font-bold text-[var(--white)] mb-4 font-mono">
                Why Work With Me?
              </h3>
              <ul className="space-y-3">
                {[
                  'Fast turnaround time',
                  'Clean, maintainable code',
                  'Regular project updates',
                  'Post-launch support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[var(--platinum)]/80">
                    <CheckCircle2 className="w-5 h-5 text-[var(--orange-web)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
                <Send className="w-5 h-5 text-[var(--orange-web)]" />
                Send a Message
              </CardTitle>
              <CardDescription className="text-[var(--platinum)]/60">
                Fill out the form below and I&apos;ll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--white)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--platinum)]/60">
                    Thank you for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[var(--platinum)]">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[var(--platinum)]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[var(--platinum)]">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[var(--platinum)]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90 text-[var(--black)] font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[var(--black)]/30 border-t-[var(--black)] rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
