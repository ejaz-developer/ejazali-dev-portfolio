import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ejaz Ali | Full-Stack MERN & Next.js Developer',
  description:
    'Portfolio of Ejaz Ali, a full-stack web developer specializing in the MERN stack and Next.js. Showcasing projects, scalable architectures, performant APIs, and modern UI/UX implementations.',
  keywords: [
    'Ejaz Ali',
    'Full Stack Developer',
    'MERN',
    'Next.js',
    'React',
    'Node.js',
    'Portfolio',
    'Web Development',
    'Skardu',
    'GB',
    'Pakistan',
    'JavaScript',
    'TypeScript',
    'API Development',
    'Performance Optimization',
    'UI/UX Design',
    'Clean Code',
    'Scalable Architecture',
    'Modern Web Solutions',
    'Ejaz Ali Portfolio',
    'Ejaz Ali Developer',
  ],
  authors: [{ name: 'Ejaz Ali' }],
  creator: 'Ejaz Ali',
  openGraph: {
    title: 'Ejaz Ali | Full-Stack MERN & Next.js Developer',
    description:
      'Explore the portfolio of Ejaz Ali: MERN & Next.js projects, clean code, performance, and modern web solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ejaz Ali | Full-Stack MERN & Next.js Developer',
    description:
      'MERN & Next.js projects, APIs, performance optimization and modern web solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}
      >
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          {/* Main black background */}
          <div className="absolute inset-0 bg-[var(--black)]"></div>

          {/* Subtle gradient overlay for depth */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[var(--black)] via-[var(--oxford-blue)]/10 to-[var(--black)] animate-pulse"
            style={{ animationDuration: '8s' }}
          ></div>

          {/* Large animated orbs - Orange Web */}
          <div
            className="absolute -top-40 -left-40 w-80 h-80 bg-[var(--orange-web)]/15 rounded-full blur-3xl animate-bounce"
            style={{ animationDuration: '6s' }}
          ></div>
          <div
            className="absolute top-1/4 -right-40 w-96 h-96 bg-[var(--orange-web)]/10 rounded-full blur-3xl animate-bounce"
            style={{ animationDuration: '8s', animationDelay: '2s' }}
          ></div>
          <div
            className="absolute -bottom-40 left-1/3 w-72 h-72 bg-[var(--orange-web)]/20 rounded-full blur-3xl animate-bounce"
            style={{ animationDuration: '7s', animationDelay: '3s' }}
          ></div>

          {/* Medium floating elements - Oxford Blue */}
          <div
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-[var(--oxford-blue)]/30 rounded-full blur-2xl animate-ping"
            style={{ animationDuration: '4s' }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[var(--oxford-blue)]/25 rounded-full blur-xl animate-ping"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          ></div>

          {/* Small floating particles - Platinum */}
          <div
            className="absolute top-1/4 left-1/2 w-16 h-16 bg-[var(--platinum)]/20 rounded-full blur-lg animate-pulse"
            style={{ animationDuration: '3s' }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/5 w-20 h-20 bg-[var(--platinum)]/15 rounded-full blur-lg animate-pulse"
            style={{ animationDuration: '4s', animationDelay: '2s' }}
          ></div>
          <div
            className="absolute top-3/4 right-1/3 w-12 h-12 bg-[var(--platinum)]/25 rounded-full blur-md animate-pulse"
            style={{ animationDuration: '2s', animationDelay: '1s' }}
          ></div>

          {/* Geometric shapes - Orange accents */}
          <div
            className="absolute top-1/2 left-1/6 w-8 h-8 bg-[var(--orange-web)]/20 rotate-45 animate-spin"
            style={{ animationDuration: '20s' }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/6 w-6 h-6 bg-[var(--orange-web)]/25 rotate-45 animate-spin"
            style={{ animationDuration: '15s', animationDelay: '3s' }}
          ></div>

          {/* Additional scattered dots for texture */}
          <div
            className="absolute top-1/5 right-1/5 w-3 h-3 bg-[var(--platinum)]/30 rounded-full animate-pulse"
            style={{ animationDuration: '2s', animationDelay: '1s' }}
          ></div>
          <div
            className="absolute bottom-1/5 left-2/3 w-2 h-2 bg-[var(--orange-web)]/40 rounded-full animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '2s' }}
          ></div>
          <div
            className="absolute top-2/3 left-1/5 w-4 h-4 bg-[var(--oxford-blue)]/20 rounded-full animate-pulse"
            style={{ animationDuration: '4s' }}
          ></div>
        </div>

        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
