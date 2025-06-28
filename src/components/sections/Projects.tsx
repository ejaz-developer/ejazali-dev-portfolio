import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';

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
      className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden"
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-600/20 animate-gradient-x opacity-70"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50 animation-delay-300"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-40 animation-delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-300 rounded-full animate-bounce opacity-70 animation-delay-700"></div>
      </div>

      <div className="relative container z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Showcasing my passion for creating innovative solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gradient-to-r from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-xl p-2 shadow-2xl shadow-purple-500/20 border border-purple-400/20">
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              All
            </FilterButton>
            <FilterButton active={filter === 'frontend'} onClick={() => setFilter('frontend')}>
              Frontend
            </FilterButton>
            <FilterButton active={filter === 'backend'} onClick={() => setFilter('backend')}>
              Backend
            </FilterButton>
            <FilterButton active={filter === 'fullstack'} onClick={() => setFilter('fullstack')}>
              Full Stack
            </FilterButton>
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x"></div>
    </section>
  );
};

const FilterButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden ${
      active
        ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/40 scale-105'
        : 'text-gray-300 hover:text-white hover:bg-purple-700/30 hover:scale-105'
    }`}
    onClick={onClick}
  >
    <span className="relative z-10">{children}</span>
    {active && (
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-30 animate-pulse"></div>
    )}
    {!active && (
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    )}
  </button>
);

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-400/20 hover:border-purple-300/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    }}
  >
    {/* Glow effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative">
      {/* Project image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling!.style.display = 'flex';
          }}
        />

        {/* Fallback gradient when image fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 flex items-center justify-center hidden">
          <FaCode className="text-6xl text-white/50" />
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              aria-label="View GitHub repository"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              aria-label="View live project"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-200 text-sm rounded-full border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 text-white font-semibold rounded-lg transition-all duration-300 hover:from-purple-500/60 hover:to-indigo-500/60 hover:scale-105 border border-purple-400/30 hover:border-purple-300/50 overflow-hidden"
            aria-label="View GitHub repository"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaGithub />
              Code
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-pink-600/50 to-purple-600/50 text-white font-semibold rounded-lg transition-all duration-300 hover:from-pink-500/60 hover:to-purple-500/60 hover:scale-105 border border-pink-400/30 hover:border-pink-300/50 overflow-hidden"
            aria-label="View live project"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaRocket />
              Live Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Projects;
