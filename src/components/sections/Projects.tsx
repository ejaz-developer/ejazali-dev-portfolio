import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project data
const projectsData = [
  {
    id: 1,
    title: 'Bus Ticket Booking Website',
    description:
      'A MERN stack application with login/signup, profile management, bookings, admin dashboard, and role-based routing (User/Admin/Company Admin).',
    image: '/images/bus_ticket_app_screenshot.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    githubUrl: 'https://github.com/ejaz-ali/bus-ticket-booking',
    liveUrl: 'https://bustickfrontskardu.vercel.app/',
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A React and TypeScript application that displays current weather information using an external API.',
    image: '/images/weather_app_screenshot.png',
    tags: ['React', 'TypeScript', 'API'],
    category: 'frontend',
    githubUrl: 'https://github.com/ejaz-developer/01_Weather_app',
    liveUrl: 'https://sky-cast-skardu.vercel.app/',
  },
  {
    id: 4,
    title: 'Todo List App',
    description:
      'A full-stack app with user authentication and real-time data using React and Appwrite.',
    image: '/images/todo_app_screenshot.png',
    tags: ['React', 'Appwrite', 'CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/ejaz-ali/todo-appwrite',
    liveUrl: 'https://fast-todo-skd-student.vercel.app/',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A personal website showcasing my skills and projects built with React and Tailwind CSS.',
    image: '/images/portfolio_app_screenshot.png',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    githubUrl: 'https://github.com/ejaz-ali/portfolio',
    liveUrl: 'https://ejaz-ali.netlify.app',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all' ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-500/10"></div>

      <div className="relative container z-10">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Showcasing my passion for creating innovative solutions
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slideUp">
          <FilterButton
            label="All"
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          />
          <FilterButton
            label="Frontend"
            active={filter === 'frontend'}
            onClick={() => setFilter('frontend')}
          />
          <FilterButton
            label="Backend"
            active={filter === 'backend'}
            onClick={() => setFilter('backend')}
          />
          <FilterButton
            label="Full Stack"
            active={filter === 'fullstack'}
            onClick={() => setFilter('fullstack')}
          />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-slideUp">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
      active
        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20'
    }`}
  >
    {label}
  </button>
);

const ProjectCard = ({ project }: { project: any }) => (
  <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-blue-800">
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      
      {/* Overlay with links */}
      <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          aria-label="View GitHub repository"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          aria-label="View live project"
        >
          <FaExternalLinkAlt className="w-6 h-6" />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
        >
          <FaGithub className="w-4 h-4" />
          Code
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;