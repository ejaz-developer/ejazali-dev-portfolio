'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogIn } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--black)]/40 backdrop-blur-lg shadow-2xl border-b border-[var(--orange-web)]/20'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[var(--orange-web)] to-[var(--platinum)] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-[var(--oxford-blue)] font-bold text-lg sm:text-xl font-mono">
                    E
                  </span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[var(--orange-web)]/50 to-[var(--platinum)]/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-[var(--white)] hover:text-[var(--orange-web)] transition-colors duration-300 font-semibold text-xs sm:text-sm tracking-wide drop-shadow-sm font-mono">
                  {item.name}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--orange-web)] to-[var(--platinum)] group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-[var(--platinum)]/20">
              <SignedOut>
                <Link href="/sign-in">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[var(--white)] hover:text-[var(--orange-web)] hover:bg-[var(--platinum)]/10"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button
                    size="sm"
                    className="bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90 text-[var(--black)] font-semibold"
                  >
                    Get Started
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[var(--white)] hover:text-[var(--orange-web)] hover:bg-[var(--platinum)]/10"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-9 h-9 ring-2 ring-[var(--orange-web)]/30',
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-7 h-7 sm:w-8 sm:h-8 flex flex-col justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-5 sm:w-6 h-0.5 bg-[var(--white)] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`w-5 sm:w-6 h-0.5 bg-[var(--white)] transition-all duration-300 mt-1.5 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-5 sm:w-6 h-0.5 bg-[var(--white)] transition-all duration-300 mt-1.5 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4 sm:mt-6' : 'max-h-0'
          }`}
        >
          <div className="bg-[var(--black)]/60 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-[var(--orange-web)]/20 shadow-2xl">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--white)] hover:text-[var(--orange-web)] transition-colors duration-300 font-semibold py-2 border-b border-[var(--orange-web)]/20 last:border-b-0 drop-shadow-sm font-mono text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Elements for Extra Visual Appeal */}
      <div className="absolute -top-4 left-1/4 w-2 h-2 bg-[var(--orange-web)]/60 rounded-full animate-pulse"></div>
      <div className="absolute -top-2 right-1/3 w-1 h-1 bg-[var(--platinum)]/80 rounded-full animate-ping"></div>
    </header>
  );
};

export default Header;
