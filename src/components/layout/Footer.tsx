import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              <span className="neon-blue neon-text">Ejaz</span>Ali
            </h2>
            <p className="mt-2 text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
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
            <p className="text-gray-400 text-sm">
              © {currentYear} Ejaz Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
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
    className="text-gray-400 hover:text-blue-400 hover:neon-text neon-blue text-xl transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
