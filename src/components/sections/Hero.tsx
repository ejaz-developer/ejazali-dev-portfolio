import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaCode, FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-600/20 animate-gradient-x opacity-70"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-50 animation-delay-300"></div>
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-indigo-400 rounded-full animate-pulse opacity-40 animation-delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-purple-300 rounded-full animate-bounce opacity-70 animation-delay-700"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-50 animation-delay-1000"></div>
        <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse opacity-60 animation-delay-1200"></div>
      </div>

      <div className="relative container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Greeting with icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <FaCode className="text-purple-400 text-xl animate-pulse" />
              <span className="text-purple-300 text-lg font-medium">Hello, World!</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-500">
                Ejaz Ali
              </span>
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block ml-2"
              >
                👋
              </motion.span>
            </motion.h1>

            {/* Subtitle with enhanced styling */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-200 mb-6 font-semibold"
            >
              <span className="bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Software Developer
              </span>{' '}
              &{' '}
              <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                Student
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed"
            >
              I'm a passionate self-taught software developer learning coding from YouTube. I love
              building <span className="text-purple-300 font-medium">front-end</span> and{' '}
              <span className="text-indigo-300 font-medium">full-stack applications</span> using
              modern tools like React and Appwrite.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-bold rounded-full transition-all duration-500 hover:from-purple-500 hover:via-purple-400 hover:to-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 transform active:scale-95 border border-purple-400/30 hover:border-purple-300/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get in Touch
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </a>

              <a
                href="#projects"
                className="group relative px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-purple-400/50 hover:border-purple-300 transition-all duration-500 hover:bg-purple-700/20 hover:scale-105 transform active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <FaRocket className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            {/* Social links with enhanced effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <SocialLink
                href="https://github.com/ejaz-developer"
                icon={<FaGithub />}
                label="GitHub"
                hoverColor="hover:text-purple-300"
              />
              <SocialLink
                href="https://www.linkedin.com/in/ejaz-ali-dev/"
                icon={<FaLinkedin />}
                label="LinkedIn"
                hoverColor="hover:text-indigo-300"
              />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-300 hover:text-pink-300 text-2xl transition-all duration-300 hover:scale-125 transform active:scale-95"
                aria-label="Download Resume"
              >
                <div className="relative">
                  <FaDownload />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
                  {/* Ripple effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-purple-800/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
                  Resume
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-indigo-600/30 rounded-full blur-2xl animate-pulse group-hover:animate-none group-hover:from-purple-500/40 group-hover:via-pink-400/40 group-hover:to-indigo-500/40 transition-all duration-500"></div>

              {/* Rotating border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full animate-spin-slow opacity-75"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800 rounded-full p-2 group-hover:scale-105 transition-transform duration-500">
                <div className="relative overflow-hidden aspect-square rounded-full border-4 border-white/20">
                  <img
                    src="/images/hero_image.png"
                    alt="Ejaz Ali - Software Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating icons around image */}
              <div className="absolute top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center animate-bounce animation-delay-500">
                <FaCode className="text-white text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse animation-delay-700">
                <FaRocket className="text-white text-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x"></div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
  hoverColor = 'hover:text-purple-300',
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColor?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`relative group text-gray-300 ${hoverColor} text-2xl transition-all duration-300 hover:scale-125 transform active:scale-95`}
    aria-label={label}
  >
    <div className="relative">
      {icon}
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
      {/* Ripple effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Tooltip */}
    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-purple-800/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
      {label}
    </span>
  </a>
);

export default Hero;
