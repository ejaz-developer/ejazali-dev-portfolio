import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="neon-blue neon-text">Ejaz</span>Ali
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/#home">Home</NavLink>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#skills">Skills</NavLink>
          <NavLink to="/#projects">Projects</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
              className="h-6 w-6"
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
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <MobileNavLink to="/#home" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/#about" onClick={toggleMenu}>
              About
            </MobileNavLink>
            <MobileNavLink to="/#skills" onClick={toggleMenu}>
              Skills
            </MobileNavLink>
            <MobileNavLink to="/#projects" onClick={toggleMenu}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="/#contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-center"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an anchor link
    if (to.startsWith("#")) {
      e.preventDefault();
      const targetId = to.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Link
      to={to}
      className="text-white hover:text-blue-400 hover:neon-text neon-blue font-medium transition-colors"
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
    // Close mobile menu
    onClick();

    // If it's an anchor link
    if (to.startsWith("#")) {
      e.preventDefault();
      const targetId = to.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Add a small delay to allow the menu to close first
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          });
        }, 300);
      }
    }
  };

  return (
    <Link
      to={to}
      className="text-white hover:text-blue-400 hover:neon-text neon-blue font-medium transition-colors block py-2"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
