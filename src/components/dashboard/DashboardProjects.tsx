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
  SiNextdotjs,
  SiExpress,
  SiVite
} from 'react-icons/si';

const DashboardProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      longDescription: 'Complete e-commerce platform built with React and Node.js featuring user authentication, product management, shopping cart functionality, payment processing, and comprehensive admin dashboard.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-600' }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      status: 'completed',
      featured: true,
      stats: { views: 1240, likes: 89, forks: 23 },
      date: '2024-01'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern task manager with real-time collaboration, drag-and-drop functionality, and team features.',
      longDescription: 'Collaborative task management application with real-time updates, drag-and-drop interface, team collaboration features, and productivity analytics.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-blue-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      status: 'in-progress',
      featured: true,
      stats: { views: 856, likes: 67, forks: 15 },
      date: '2024-02'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with interactive maps, forecasts, and location-based alerts.',
      longDescription: 'Comprehensive weather dashboard featuring interactive maps, detailed forecasts, weather alerts, and location-based weather tracking with beautiful visualizations.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      status: 'completed',
      featured: false,
      stats: { views: 623, likes: 45, forks: 12 },
      date: '2024-03'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Full-stack blogging platform with markdown support, comments, and user management.',
      longDescription: 'Modern blogging platform with markdown editor, comment system, user authentication, admin panel, and SEO optimization features.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      status: 'completed',
      featured: false,
      stats: { views: 745, likes: 52, forks: 18 },
      date: '2023-12'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with dark mode and smooth animations.',
      longDescription: 'Personal portfolio website featuring modern design, dark/light mode toggle, smooth animations, and responsive layout across all devices.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-blue-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Vite', icon: SiVite, color: 'text-purple-500' }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      status: 'completed',
      featured: false,
      stats: { views: 892, likes: 73, forks: 25 },
      date: '2024-01'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, file sharing, and emoji support.',
      longDescription: 'Real-time messaging application with chat rooms, file sharing capabilities, emoji support, and user presence indicators.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      status: 'planning',
      featured: false,
      stats: { views: 0, likes: 0, forks: 0 },
      date: '2024-04'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: 'Completed', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      'in-progress': { label: 'In Progress', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
      planning: { label: 'Planning', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-slate-300 mb-6">
          Showcase of my work and technical achievements
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{projects.length}</div>
            <div className="text-slate-300 text-sm">Total Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{projects.filter(p => p.status === 'completed').length}</div>
            <div className="text-slate-300 text-sm">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{projects.reduce((acc, p) => acc + p.stats.likes, 0)}</div>
            <div className="text-slate-300 text-sm">Total Likes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{projects.reduce((acc, p) => acc + p.stats.views, 0)}</div>
            <div className="text-slate-300 text-sm">Total Views</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-4 mb-4">
          <FaFilter className="text-slate-600 dark:text-slate-400" />
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Filter Projects</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              project.featured ? 'ring-2 ring-blue-500/20' : ''
            }`}
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
              {project.featured && (
                <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <FaStar size={10} />
                  Featured
                </div>
              )}
              
              <div className="absolute top-3 right-3">
                {getStatusBadge(project.status)}
              </div>
              
              {/* Placeholder for project image */}
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaCode className="text-4xl text-slate-400" />
              </div>
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <FaCalendar size={12} />
                  <span>{project.date}</span>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index} className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
                      <Icon className={`${tech.color} text-sm`} />
                      <span className="text-xs text-slate-600 dark:text-slate-400">{tech.name}</span>
                    </div>
                  );
                })}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 px-2 py-1">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm">
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
                
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <FaGithub size={14} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contribution Graph Placeholder */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
          <FaGithub className="text-slate-600 dark:text-slate-400" />
          GitHub Activity
        </h2>
        
        <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Check out my GitHub profile for detailed contribution activity
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 dark:bg-white text-white dark:text-slate-800 px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
          >
            <FaGithub />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;