import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? 'bg-gradient-to-r from-purple-900/98 via-purple-800/98 to-indigo-900/98 backdrop-blur-xl shadow-2xl shadow-purple-500/30 border-b border-purple-400/30 transform scale-y-100'
          : 'bg-gradient-to-r from-purple-900/30 via-purple-800/30 to-indigo-900/30 backdrop-blur-sm shadow-lg shadow-purple-500/10'
      }`}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-indigo-600/10 animate-gradient-x opacity-50"></div>

      <div className="relative container flex items-center justify-between py-4 px-6">
        {/* Logo with enhanced animations */}
        <Link
          to="/"
          className="text-3xl font-bold text-white group transition-all duration-500 hover:scale-110 transform relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          <span className="relative bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent animate-pulse group-hover:animate-none group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-indigo-200 transition-all duration-500">
            Ejaz
          </span>
          <span className="relative text-white group-hover:text-purple-200 transition-all duration-500 ml-1 group-hover:drop-shadow-lg">
            Ali
          </span>
        </Link>

        {/* Desktop Navigation with enhanced effects */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#skills">Skills</NavLink>
          <NavLink to="#projects">Projects</NavLink>
          <NavLink to="#contact">Contact</NavLink>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-semibold rounded-full transition-all duration-500 hover:from-purple-500 hover:via-purple-400 hover:to-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transform active:scale-95 border border-purple-400/30 hover:border-purple-300/50"
          >
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
          </a>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <button
          className={`md:hidden text-white p-2 rounded-lg transition-all duration-300 hover:bg-purple-700/30 hover:scale-110 active:scale-95 ${
            isMenuOpen ? 'bg-purple-600/40 rotate-180' : 'hover:rotate-12'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-indigo-900/95 backdrop-blur-xl border-t border-purple-400/20 shadow-2xl shadow-purple-500/30">
          <div className="container py-6 flex flex-col space-y-2">
            <MobileNavLink to="/#home" onClick={toggleMenu} delay="delay-75">
              Home
            </MobileNavLink>
            <MobileNavLink to="/#about" onClick={toggleMenu} delay="delay-100">
              About
            </MobileNavLink>
            <MobileNavLink to="/#skills" onClick={toggleMenu} delay="delay-150">
              Skills
            </MobileNavLink>
            <MobileNavLink to="/#projects" onClick={toggleMenu} delay="delay-200">
              Projects
            </MobileNavLink>
            <MobileNavLink to="/#contact" onClick={toggleMenu} delay="delay-250">
              Contact
            </MobileNavLink>
            <div className="pt-4 animate-fade-in-up delay-300">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-semibold rounded-full text-center transition-all duration-500 hover:from-purple-500 hover:via-purple-400 hover:to-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transform active:scale-95 border border-purple-400/30"
                onClick={toggleMenu}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      const targetId = to.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <Link
      to={to}
      className="relative px-4 py-2 text-white font-medium transition-all duration-300 hover:text-purple-200 rounded-lg hover:bg-purple-700/20 hover:scale-105 transform active:scale-95 group"
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
    </Link>
  );
};

const MobileNavLink = ({
  to,
  children,
  onClick,
  delay = '',
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  delay?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick();

    if (to.startsWith('#')) {
      e.preventDefault();
      const targetId = to.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
          });
        }, 300);
      }
    }
  };

  return (
    <Link
      to={to}
      className={`block px-6 py-3 text-white font-medium transition-all duration-300 hover:text-purple-200 rounded-lg hover:bg-purple-700/20 hover:scale-105 transform active:scale-95 animate-fade-in-up ${delay} group relative overflow-hidden`}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      {/* Slide-in effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      {/* Left border animation */}
      <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-purple-400 to-indigo-400 group-hover:h-full transition-all duration-300"></div>
    </Link>
  );
};

export default Navbar;
