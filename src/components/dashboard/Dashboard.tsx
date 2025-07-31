import { useState } from 'react';
import { 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaArrowRight,
  FaCalendar,
  FaMapMarkerAlt,
  FaHeart,
  FaEye,
  FaDownload,
  FaPaperPlane,
  FaGraduationCap
} from 'react-icons/fa';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiGithub,
  SiAppwrite,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiLinux
} from 'react-icons/si';
import { FaGitAlt, FaNodeJs } from 'react-icons/fa';
import data from '../../data.json';

interface DashboardProps {
  onSectionChange: (section: string) => void;
}

const Dashboard = ({ onSectionChange }: DashboardProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { personalInfo, projects } = data;

  const stats = [
    { label: 'Years Experience', value: '2+', icon: FaCalendar, color: 'bg-blue-600' },
    { label: 'Projects Built', value: `${projects.length}+`, icon: FaProjectDiagram, color: 'bg-green-600' },
    { label: 'Technologies', value: '12+', icon: FaCode, color: 'bg-purple-600' },
    { label: 'Current Grade', value: '9th', icon: FaGraduationCap, color: 'bg-indigo-600' },
  ];

  const quickActions = [
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn more about my background and journey',
      icon: FaUser,
      color: 'from-blue-600 to-blue-700',
      action: () => onSectionChange('about')
    },
    {
      id: 'skills',
      title: 'Skills & Technologies',
      description: 'Explore my technical expertise',
      icon: FaCode,
      color: 'from-green-600 to-green-700',
      action: () => onSectionChange('skills')
    },
    {
      id: 'projects',
      title: 'My Projects',
      description: 'Check out my latest work',
      icon: FaProjectDiagram,
      color: 'from-purple-600 to-purple-700',
      action: () => onSectionChange('projects')
    },
    {
      id: 'contact',
      title: 'Get In Touch',
      description: 'Let\'s work together',
      icon: FaEnvelope,
      color: 'from-red-600 to-red-700',
      action: () => onSectionChange('contact')
    }
  ];

  const techStack = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300' },
    { name: 'Appwrite', icon: SiAppwrite, color: 'text-pink-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
    { name: 'Linux', icon: SiLinux, color: 'text-yellow-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 text-white relative overflow-hidden border border-gray-700">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <div className="mb-6">
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.greeting.split('\n')[0]}
            </h1>
            <h2 className="text-3xl font-semibold mb-4 text-gray-100">
              {personalInfo.greeting.split('\n')[1]}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                {personalInfo.title}
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium">
                {personalInfo.subtitle}
              </span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSectionChange('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-500/50 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              <FaPaperPlane />
              Let's Talk
            </button>
            <a
              href="/resume.pdf"
              download
              className="bg-gray-800/50 border border-gray-600/50 backdrop-blur-sm text-gray-200 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={action.action}
                onMouseEnter={() => setHoveredCard(action.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gradient-to-br ${action.color} rounded-2xl p-8 text-white text-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <FaArrowRight 
                    className={`transition-transform duration-300 ${
                      hoveredCard === action.id ? 'transform translate-x-2' : ''
                    }`} 
                    size={20} 
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{action.title}</h3>
                <p className="text-white/90 text-lg">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Stack & Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tech Stack */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <Icon className={`${tech.color} text-3xl mb-3`} />
                  <span className="text-sm text-gray-600 dark:text-gray-400 text-center font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Recent Projects</h3>
            <button
              onClick={() => onSectionChange('projects')}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              View All <FaArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-6">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 py-3 rounded-r-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-white text-lg mb-2">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Availability Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaMapMarkerAlt className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">{personalInfo.location}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{personalInfo.availability}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600 dark:text-gray-400 mb-1">{personalInfo.education}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Self-taught developer learning from YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;