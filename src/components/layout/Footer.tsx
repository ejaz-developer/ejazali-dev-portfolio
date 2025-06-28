import { FaGithub, FaLinkedin, FaHeart, FaCode, FaRocket } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-600/20 animate-gradient-x opacity-70"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-50 animation-delay-300"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-40 animation-delay-500"></div>
        <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-70 animation-delay-700"></div>
      </div>

      <div className="relative py-16 px-6">
        <div className="container mx-auto">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

            {/* Left section - Brand */}
            <div className="text-center lg:text-left group">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-500 group-hover:scale-105">
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent animate-pulse group-hover:animate-none group-hover:from-purple-200 group-hover:via-pink-200 group-hover:to-indigo-200 transition-all duration-500">
                  Ejaz
                </span>
                <span className="text-white group-hover:text-purple-200 transition-all duration-500 ml-2">
                  Ali
                </span>
              </h2>

              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <FaCode className="text-purple-400 text-lg animate-pulse" />
                <p className="text-gray-300 text-lg font-medium">
                  Building digital experiences that make a difference.
                </p>
                <FaRocket className="text-indigo-400 text-lg animate-bounce" />
              </div>

              {/* Skills showcase */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                {['React', 'TypeScript', 'Node.js', 'Python'].map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-200 text-sm rounded-full border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right section - Social & Contact */}
            <div className="text-center lg:text-right">
              {/* Social links */}
              <div className="flex justify-center lg:justify-end space-x-6 mb-6">
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
              </div>

              {/* Contact info */}
              <div className="space-y-2 mb-6">
                <p className="text-gray-300 hover:text-purple-200 transition-colors duration-300">
                  Ready to collaborate?
                </p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-purple-300 hover:text-white transition-all duration-300 hover:scale-105 inline-block font-medium"
                >
                  Let's connect!
                </a>
              </div>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 px-6">
                <FaHeart className="text-pink-400 text-xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-pink-400 animate-pulse text-xs" />
              <span>by Ejaz Ali</span>
            </div>

            <div className="text-gray-400 text-sm">
              <span>© {currentYear} All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a href="#privacy" className="hover:text-purple-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#terms" className="hover:text-purple-300 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x"></div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
  hoverColor = "hover:text-purple-300",
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

export default Footer;
