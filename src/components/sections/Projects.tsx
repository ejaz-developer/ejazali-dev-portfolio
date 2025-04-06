import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Bus Ticket Booking Website",
    description:
      "A MERN stack application with login/signup, profile management, bookings, admin dashboard, and role-based routing (User/Admin/Company Admin).",
    image: "/images/bus_ticket_app_screenshot.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    githubUrl: "https://github.com/ejaz-ali/bus-ticket-booking",
    liveUrl: "https://bustickfrontskardu.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A React and TypeScript application that displays current weather information using an external API.",
    image: "/images/weather_app_screenshot.png",
    tags: ["React", "TypeScript", "API"],
    category: "frontend",
    githubUrl: "https://github.com/ejaz-developer/01_Weather_app",
    liveUrl: "https://sky-cast-skardu.vercel.app/",
  },

  {
    id: 4,
    title: "Todo List App",
    description:
      "A full-stack app with user authentication and real-time data using React and Appwrite.",
    image: "/images/todo_app_screenshot.png",
    tags: ["React", "Appwrite", "CSS"],
    category: "fullstack",
    githubUrl: "https://github.com/ejaz-ali/todo-appwrite",
    liveUrl: "https://fast-todo-skd-student.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal website showcasing my skills and projects built with React and Tailwind CSS.",
    image: "/images/portfolio_app_screenshot.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    githubUrl: "https://github.com/ejaz-ali/portfolio",
    liveUrl: "https://ejaz-ali.netlify.app",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container">
        <motion.h2
          className="section-title neon-text neon-green"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-700 rounded-lg p-1 shadow-md">
            <FilterButton
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterButton>
            <FilterButton
              active={filter === "frontend"}
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </FilterButton>
            <FilterButton
              active={filter === "backend"}
              onClick={() => setFilter("backend")}
            >
              Backend
            </FilterButton>
            <FilterButton
              active={filter === "fullstack"}
              onClick={() => setFilter("fullstack")}
            >
              Full Stack
            </FilterButton>
          </div>
        </div>

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
    className={`px-4 py-2 rounded-md transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div
    className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-current hover:neon-border neon-green hover-lift"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    }}
  >
    <div className="h-48 bg-gray-600 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
      />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 hover:neon-text neon-blue flex items-center gap-1"
          aria-label="View GitHub repository"
        >
          <FaGithub /> Code
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 hover:neon-text neon-blue flex items-center gap-1"
          aria-label="View live project"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

export default Projects;
