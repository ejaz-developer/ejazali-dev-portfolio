import { FaGithub, FaLinkedin, FaHeart, FaCode, FaRocket, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-blue-200 dark:border-blue-800 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-blue-900/50"></div>

      <div className="relative py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Main content - Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand & About */}
            <div className="lg:col-span-2 space-y-6">
              <div className="group">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                    Ejaz Ali
                  </span>
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <FaCode className="text-blue-600 dark:text-blue-400 text-lg" />
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Software Developer & Student
                  </p>
                  <FaRocket className="text-blue-500 dark:text-blue-500 text-lg" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                  Building digital experiences that make a difference. Passionate about creating 
                  modern web applications with React and exploring full-stack development.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Skardu, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Contact</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Always open to connect</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Links</h3>
              <nav className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:pl-2"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & Tech Stack */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Connect & Tech</h3>
              
              {/* Social Links */}
              <div className="flex gap-4">
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
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Current Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md border border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-200 dark:border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Left - Copyright */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <span>© {currentYear} Ejaz Ali. Made with</span>
                <FaHeart className="text-blue-500 dark:text-blue-400 text-xs animate-pulse" />
                <span>and lots of</span>
                <FaCode className="text-blue-600 dark:text-blue-400 text-xs" />
              </div>

              {/* Right - Legal Links */}
              <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-500">
                <a href="#privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <span className="text-gray-400 dark:text-gray-600">•</span>
                <span className="text-gray-500 dark:text-gray-500">All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
    </footer>
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
    className="group relative p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 transform active:scale-95"
    aria-label={label}
  >
    <div className="relative text-xl">
      {icon}
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>

    {/* Tooltip */}
    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
      {label}
    </span>
  </a>
);

export default Footer;
