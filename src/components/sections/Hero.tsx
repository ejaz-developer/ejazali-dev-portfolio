import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaCode, FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-950"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-500/10"></div>

      <div className="relative container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slideUp">
            {/* Greeting with icon */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
              <span className="text-blue-700 dark:text-blue-300 text-lg font-medium">Hello, World!</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Ejaz Ali
              </span>
              <span className="inline-block ml-2 animate-pulse">👋</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Software Developer
              </span>{' '}
              &{' '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Student
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              I'm a passionate self-taught software developer learning coding from YouTube. I love
              building <span className="text-blue-600 dark:text-blue-400 font-medium">front-end</span> and{' '}
              <span className="text-blue-700 dark:text-blue-300 font-medium">full-stack applications</span> using
              modern tools like React and Appwrite.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-600 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Get in Touch
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="#projects"
                className="group px-8 py-4 bg-transparent text-blue-700 dark:text-blue-300 font-bold rounded-lg border-2 border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <FaRocket className="group-hover:translate-y-[-2px] transition-transform duration-300" />
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <SocialLink
                href="https://github.com/ejaz-developer"
                icon={<FaGithub />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/ejaz-ali-dev/"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-all duration-300 hover:scale-110"
                aria-label="Download Resume"
              >
                <FaDownload />
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  Resume
                </span>
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:block animate-slideUp">
            <div className="relative group">
              {/* Simple background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 rounded-full opacity-20"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full p-2 group-hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden aspect-square rounded-full border-4 border-blue-200 dark:border-blue-700">
                  <img
                    src="/images/hero_image.png"
                    alt="Ejaz Ali - Software Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Simple floating icons */}
              <div className="absolute top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <FaCode className="text-white text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <FaRocket className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    {icon}
    {/* Tooltip */}
    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
      {label}
    </span>
  </a>
);

export default Hero;
