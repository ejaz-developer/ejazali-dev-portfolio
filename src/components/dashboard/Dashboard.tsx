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
  FaPaperPlane
} from 'react-icons/fa';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiGithub 
} from 'react-icons/si';

interface DashboardProps {
  onSectionChange: (section: string) => void;
}

const Dashboard = ({ onSectionChange }: DashboardProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const stats = [
    { label: 'Years Experience', value: '2+', icon: FaCalendar, color: 'bg-blue-500' },
    { label: 'Projects Built', value: '15+', icon: FaProjectDiagram, color: 'bg-green-500' },
    { label: 'Technologies', value: '10+', icon: FaCode, color: 'bg-purple-500' },
    { label: 'Coffee Cups', value: '∞', icon: FaHeart, color: 'bg-red-500' },
  ];

  const quickActions = [
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn more about my background and journey',
      icon: FaUser,
      color: 'from-blue-500 to-blue-600',
      action: () => onSectionChange('about')
    },
    {
      id: 'skills',
      title: 'Skills & Technologies',
      description: 'Explore my technical expertise',
      icon: FaCode,
      color: 'from-green-500 to-green-600',
      action: () => onSectionChange('skills')
    },
    {
      id: 'projects',
      title: 'My Projects',
      description: 'Check out my latest work',
      icon: FaProjectDiagram,
      color: 'from-purple-500 to-purple-600',
      action: () => onSectionChange('projects')
    },
    {
      id: 'contact',
      title: 'Get In Touch',
      description: 'Let\'s work together',
      icon: FaEnvelope,
      color: 'from-red-500 to-red-600',
      action: () => onSectionChange('contact')
    }
  ];

  const techStack = [
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-white' },
  ];

  const recentProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      status: 'Completed',
      views: 234
    },
    {
      title: 'Task Management App',
      description: 'Modern task manager with real-time collaboration',
      status: 'In Progress',
      views: 156
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with interactive maps',
      status: 'Completed',
      views: 189
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to my Portfolio! 👋
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            I'm Ejaz Ali, a passionate software developer who loves creating amazing digital experiences. 
            Explore my work, skills, and let's build something awesome together!
          </p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSectionChange('contact')}
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <FaPaperPlane />
              Let's Talk
            </button>
            <a
              href="/resume.pdf"
              download
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/30 transition-colors"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={action.action}
                onMouseEnter={() => setHoveredCard(action.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 text-white text-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <FaArrowRight 
                    className={`transition-transform duration-300 ${
                      hoveredCard === action.id ? 'transform translate-x-1' : ''
                    }`} 
                    size={16} 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                <p className="text-white/80">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Stack & Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tech Stack */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="flex flex-col items-center p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <Icon className={`${tech.color} text-2xl mb-2`} />
                  <span className="text-sm text-slate-600 dark:text-slate-400 text-center">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Recent Projects</h3>
            <button
              onClick={() => onSectionChange('projects')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
            >
              View All <FaArrowRight size={12} />
            </button>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white">{project.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{project.description}</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <FaEye size={10} /> {project.views}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
            <FaMapMarkerAlt className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Currently Located</h3>
            <p className="text-slate-600 dark:text-slate-400">Skardu, Pakistan 🏔️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;