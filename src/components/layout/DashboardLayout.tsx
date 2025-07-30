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

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DashboardLayout = ({ children, activeSection, onSectionChange }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Portfolio<span className="text-blue-600">.dev</span>
              </h1>
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-2xl font-bold">EA</span>
              </div>
              <h2 className="text-center font-semibold text-lg">Ejaz Ali</h2>
              <p className="text-center text-blue-100 text-sm">Software Developer</p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-3">
                <a 
                  href="https://github.com" 
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <FaGithub size={16} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
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
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Actions */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <button
                onClick={toggleTheme}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
                <span className="text-sm">{theme === 'light' ? 'Dark' : 'Light'}</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaDownload size={14} />
                <span className="text-sm">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Top Bar (Mobile) */}
        <header className="lg:hidden bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
            >
              <FaBars size={20} />
            </button>
            <h1 className="text-lg font-semibold text-slate-800 dark:text-white">
              {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
            </h1>
            <div className="w-8"></div> {/* Spacer for centering */}
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;