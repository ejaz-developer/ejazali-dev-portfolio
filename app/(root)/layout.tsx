import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { AnimatedBackground } from '@/components/shared/AnimatedBackground';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}
