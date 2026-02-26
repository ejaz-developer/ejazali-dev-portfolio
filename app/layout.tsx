import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';

const geistSans = Saira({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   // Basic metadata
   title: {
      default: 'Ejaz Ali - Full Stack Developer | Portfolio',
      template: '%s | Ejaz Ali',
   },
   description:
      'Ejaz Ali is a full-stack MERN and Next.js developer with 2+ years of experience. Explore his portfolio of web applications, projects, and skills. Based in Skardu, Pakistan.',
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
   authors: [{ name: 'Ejaz Ali', url: 'https://ejazali.dev' }],
   creator: 'Ejaz Ali',
   publisher: 'Ejaz Ali',

   // Open Graph (for social media sharing)
   openGraph: {
      title: 'Ejaz Ali - Full Stack Developer',
      description:
         'Bring your ideas to life with code. Explore the portfolio of Ejaz Ali, a passionate full-stack developer from Pakistan.',
      url: 'https://ejazali.dev',
      siteName: 'Ejaz Ali Portfolio',
      images: [
         {
            url: 'https://ejazali.dev/og-image.png', // Replace with your actual OG image path
            width: 1200,
            height: 630,
            alt: 'Ejaz Ali - Full Stack Developer',
         },
      ],
      locale: 'en_US',
      type: 'website',
   },

   // Twitter Card
   twitter: {
      card: 'summary_large_image',
      title: 'Ejaz Ali - Full Stack Developer',
      description:
         'Bring your ideas to life with code. Explore the portfolio of Ejaz Ali, a passionate full-stack developer from Pakistan.',
      images: ['https://ejazali.dev/twitter-image.png'], // Replace with your actual Twitter image path
      creator: '@ejazali', // Replace with your Twitter handle
   },

   // Robots instructions
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
   category: 'technology',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="dark">
         <body className={`${geistSans.variable} antialiased`}>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <Toaster position="top-center" reverseOrder={false} />
               <Header />
               {children}
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
