import { useEffect, useState } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative animate-fadeIn">
      {/* Section Indicator */}
      <SectionIndicator activeSection={activeSection} />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Page Sections */}
      <div className="animate-slideUp">
        <Hero />
      </div>

      <div className="animate-slideUp">
        <About />
      </div>

      <div className="animate-slideUp">
        <Skills />
      </div>

      <div className="animate-slideUp">
        <Projects />
      </div>

      <div className="animate-slideUp">
        <Contact />
      </div>
    </main>
  );
};

// Simplified Section Indicator Component
const SectionIndicator = ({ activeSection }: { activeSection: string }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full p-3 border border-blue-200 dark:border-blue-700 shadow-lg">
        <div className="space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-blue-400 hover:scale-110'
              }`}
            >
              {/* Tooltip */}
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm pointer-events-none">
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simplified Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-600 hover:scale-110 transition-all duration-300 border border-blue-400"
      onClick={scrollToTop}
    >
      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default Home;
