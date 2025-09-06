import { useState } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaDownload,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import data from '../../data.json';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DashboardLayout = ({ children, activeSection, onSectionChange }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { personalInfo } = data;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaHome },
    { id: 'about', label: 'About Me', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-r border-gray-200 dark:border-gray-700 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Portfolio<span className="text-blue-600">.dev</span>
              </h1>
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white border border-gray-700">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto border border-blue-400/30">
                <span className="text-3xl font-bold">EA</span>
              </div>
              <h2 className="text-center font-bold text-xl mb-1">{personalInfo.name}</h2>
              <p className="text-center text-gray-300 text-sm mb-1">{personalInfo.title}</p>
              <p className="text-center text-blue-300 text-xs mb-4">{personalInfo.subtitle}</p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a 
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        onSectionChange(item.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-200 border ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border-blue-500'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white border-transparent hover:border-gray-200 dark:hover:border-gray-600'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium text-lg">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Actions */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-3">
              <button
                onClick={toggleTheme}
                className="flex-1 flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
                <span className="text-sm font-medium">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex-1 flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 border border-blue-500 shadow-lg shadow-blue-600/25"
              >
                <FaDownload size={16} />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-6 left-6 z-60 w-12 h-12 bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700"
      >
        <FaBars className="text-gray-600 dark:text-gray-400" size={20} />
      </button>

      {/* Main Content */}
      <div className="lg:ml-80">
        <main className="p-8 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
