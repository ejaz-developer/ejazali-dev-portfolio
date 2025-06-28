import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Preload component and handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

  // Loading screen variants
  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  // Page variants for smooth entrance
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  // Section wrapper variants
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden"
          variants={loadingVariants}
          initial="initial"
          exit="exit"
        >
          {/* Animated background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-600/20 animate-gradient-x opacity-70"></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-32 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-50 animation-delay-300"></div>
            <div className="absolute bottom-40 left-32 w-4 h-4 bg-indigo-400 rounded-full animate-pulse opacity-40 animation-delay-500"></div>
            <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-purple-300 rounded-full animate-bounce opacity-70 animation-delay-700"></div>
          </div>

          <div className="relative z-10 text-center">
            {/* Loading spinner */}
            <motion.div
              className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full mx-auto mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />

            {/* Loading text */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                Ejaz Ali
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Loading Portfolio...
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-64 h-1 bg-purple-800/50 rounded-full mx-auto mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.main className="relative" variants={pageVariants} initial="initial" animate="animate">
      {/* Section Indicator */}
      <SectionIndicator activeSection={activeSection} />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Page Sections */}
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Skills />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Projects />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Contact />
      </motion.div>

      {/* Background decorative elements */}
      <BackgroundDecorations />
    </motion.main>
  );
};

// Section Indicator Component
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
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="bg-gradient-to-b from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-full p-3 border border-purple-400/20 shadow-2xl shadow-purple-500/20">
        <div className="space-y-3">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-purple-400 to-indigo-400 scale-125'
                  : 'bg-gray-500 hover:bg-purple-400/70 hover:scale-110'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Tooltip */}
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-purple-800/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm pointer-events-none">
                {section.label}
              </span>

              {/* Active indicator glow */}
              {activeSection === section.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-sm animate-pulse"></div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Scroll to Top Button Component
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white rounded-full shadow-2xl shadow-purple-500/40 hover:from-purple-500 hover:via-purple-400 hover:to-indigo-500 hover:scale-110 transition-all duration-300 border border-purple-400/30"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-0 hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Background Decorative Elements Component
const BackgroundDecorations = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Gradient orbs */}
    <motion.div
      className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    <motion.div
      className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full blur-3xl"
      animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.4, 0.2, 0.4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1,
      }}
    />

    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 2,
      }}
    />
  </div>
);

export default Home;
