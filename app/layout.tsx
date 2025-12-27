import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevForge | Ejaz Ali - Full-Stack Developer',
  description:
    'DevForge by Ejaz Ali - Your partner in crafting exceptional digital experiences. Full-stack web development specializing in MERN stack and Next.js. Building scalable, performant, and beautiful web applications.',
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
    title: 'DevForge | Ejaz Ali - Full-Stack Developer',
    description:
      'DevForge by Ejaz Ali - Building exceptional digital experiences with MERN & Next.js.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevForge | Ejaz Ali - Full-Stack Developer',
    description:
      'Your partner in crafting exceptional digital experiences. Full-stack web development.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: 'var(--oxford-blue)',
                border: '1px solid rgba(229, 229, 229, 0.1)',
                color: 'var(--white)',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
