import { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaStar,
  FaFilter,
  FaCalendar,
  FaEye,
  FaHeart
} from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiAppwrite,
  SiCss3,
  SiFramer
} from 'react-icons/si';
import data from '../../data.json';

const DashboardProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { projects } = data;

  const getIconComponent = (techName: string) => {
    const iconMap: { [key: string]: any } = {
      'React': SiReact,
      'Node.js': SiNodedotjs,
      'MongoDB': SiMongodb,
      'Express': SiExpress,
      'TypeScript': SiTypescript,
      'API': FaCode,
      'Appwrite': SiAppwrite,
      'CSS': SiCss3,
      'Tailwind CSS': SiTailwindcss,
      'Framer Motion': SiFramer,
    };
    return iconMap[techName] || FaCode;
  };

  const getTechColor = (techName: string) => {
    const colorMap: { [key: string]: string } = {
      'React': 'text-blue-400',
      'Node.js': 'text-green-600',
      'MongoDB': 'text-green-500',
      'Express': 'text-gray-600 dark:text-gray-300',
      'TypeScript': 'text-blue-600',
      'API': 'text-purple-500',
      'Appwrite': 'text-pink-500',
      'CSS': 'text-blue-500',
      'Tailwind CSS': 'text-cyan-500',
      'Framer Motion': 'text-purple-400',
    };
    return colorMap[techName] || 'text-gray-600';
  };

  const processedProjects = projects.map(project => ({
    ...project,
    technologies: project.tags.map(tag => ({
      name: tag,
      icon: getIconComponent(tag),
      color: getTechColor(tag)
    })),
    status: 'completed',
    featured: project.id === 1,
    stats: { 
      views: Math.floor(Math.random() * 1000) + 500, 
      likes: Math.floor(Math.random() * 50) + 20, 
      forks: Math.floor(Math.random() * 20) + 5 
    },
    date: '2024'
  }));

  const filteredProjects = activeFilter === 'all' 
    ? processedProjects 
    : processedProjects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects', count: processedProjects.length },
    { id: 'fullstack', label: 'Full Stack', count: processedProjects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: processedProjects.filter(p => p.category === 'frontend').length },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A showcase of my work and creative solutions
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
              activeFilter === filter.id
                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <FaFilter size={16} />
            {filter.label}
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeFilter === filter.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}>
              {filter.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              project.featured 
                ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                    <FaStar size={12} />
                    Featured
                  </span>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-gray-400 dark:text-gray-600">
                  <FaCode />
                </div>
              </div>
              {/* Overlay on hover */}
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  project.category === 'fullstack' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                }`}>
                  {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.technologies.slice(0, 4).map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <Icon className={`${tech.color} text-sm`} />
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{tech.name}</span>
                    </div>
                  );
                })}
                {project.technologies.length > 4 && (
                  <div className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  </div>
                )}
              </div>

              {/* Project Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <FaEye size={12} />
                    {project.stats.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart size={12} />
                    {project.stats.likes}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <FaCalendar size={12} />
                  {project.date}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub size={16} />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-gray-300 mb-6 text-lg">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:devpro.ejazali34@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-lg shadow-blue-600/25"
          >
            Let's Connect
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
