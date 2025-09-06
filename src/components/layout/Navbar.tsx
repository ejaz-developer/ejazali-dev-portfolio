import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-blue-200 dark:border-blue-800'
          : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-md border border-blue-100 dark:border-blue-900'
      } rounded-2xl w-[calc(100%-2rem)] max-w-4xl`}
    >
      <div className="flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-300"
        >
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Ejaz
          </span>
          <span className="ml-1">Ali</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#skills">Skills</NavLink>
          <NavLink to="#projects">Projects</NavLink>
          <NavLink to="#contact">Contact</NavLink>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:shadow-md"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            className="text-blue-700 dark:text-blue-300 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-blue-200 dark:border-blue-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-b-2xl">
          <div className="py-4 px-6 space-y-3">
            <MobileNavLink to="#home" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="#skills" onClick={toggleMenu}>Skills</MobileNavLink>
            <MobileNavLink to="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink to="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg text-center hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                onClick={toggleMenu}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
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
          top: targetElement.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <Link
      to={to}
      className="text-blue-700 dark:text-blue-300 font-medium hover:text-blue-900 dark:hover:text-blue-100 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
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
            top: targetElement.offsetTop - 100,
            behavior: 'smooth',
          });
        }, 300);
      }
    }
  };

  return (
    <Link
      to={to}
      className="block text-blue-700 dark:text-blue-300 font-medium hover:text-blue-900 dark:hover:text-blue-100 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
