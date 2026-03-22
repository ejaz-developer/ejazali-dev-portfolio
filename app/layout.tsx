import CustomCursor from '@/components/shared/CustomCursor';
import FluidBackground from '@/components/shared/FluidBackground';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({
   variable: '--font-inter',
   subsets: ['latin'],
});

const dmSans = DM_Sans({
   variable: '--font-dm-sans',
   subsets: ['latin'],
   weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
   title: {
      default: 'Ejaz Ali - Full Stack MERN Developer | Portfolio',
      template: '%s | Ejaz Ali',
   },
   description:
      'Ejaz Ali is a Full Stack MERN Developer crafting scalable, pixel-perfect web experiences. Based in Skardu, Pakistan with 5+ years of experience.',
   keywords: [
      'Ejaz Ali',
      'full stack developer',
      'MERN developer',
      'Next.js developer',
      'web developer Pakistan',
      'portfolio',
      'React developer',
      'Node.js',
      'TypeScript',
      'Skardu',
      'Codehub Skardu',
   ],
   authors: [{ name: 'Ejaz Ali' }],
   creator: 'Ejaz Ali',
   publisher: 'Ejaz Ali',
   openGraph: {
      title: 'Ejaz Ali - Full Stack Developer',
      description:
         'I build modern, high-performance web applications using the MERN stack. Explore my work and story.',
      url: 'https://ejazali.dev',
      siteName: 'Ejaz Ali Portfolio',
      locale: 'en_US',
      type: 'website',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Ejaz Ali - Full Stack Developer',
      description:
         'Full Stack MERN Developer crafting scalable, pixel-perfect web experiences.',
   },
   category: 'technology',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
         <body
            className={`${inter.variable} ${dmSans.variable} antialiased font-sans`}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               <div className="noise" />
               <FluidBackground />
               <CustomCursor />
               <Header />
               <main>{children}</main>
               <Footer />
               <Toaster position="bottom-right" />
            </ThemeProvider>
         </body>
      </html>
   );
}
