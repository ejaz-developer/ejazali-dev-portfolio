'use client';

import { useState } from 'react';
import { Database, Server, Cloud, Settings, Monitor } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  level: number; // 1-5 proficiency level
  years: number; // years of experience
}

interface ToolCategory {
  name: string;
  icon: React.ReactNode;
  tools: Tool[];
  color: string;
}

const ToolsIUse = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const toolCategories: ToolCategory[] = [
    {
      name: 'Frontend',
      icon: <Monitor className="w-6 h-6" />,
      color: 'orange-web',
      tools: [
        {
          id: 'react',
          name: 'React',
          category: 'frontend',
          description: 'Building interactive user interfaces with hooks and state management',
          icon: '⚛️',
          color: '#61DAFB',
          level: 5,
          years: 3,
        },
        {
          id: 'nextjs',
          name: 'Next.js',
          category: 'frontend',
          description: 'Full-stack React framework with SSR and API routes',
          icon: '▲',
          color: '#000000',
          level: 5,
          years: 3,
        },
        {
          id: 'typescript',
          name: 'TypeScript',
          category: 'frontend',
          description: 'Type-safe JavaScript development',
          icon: '📘',
          color: '#3178C6',
          level: 5,
          years: 3,
        },
        {
          id: 'tailwind',
          name: 'Tailwind CSS',
          category: 'frontend',
          description: 'Utility-first CSS framework for rapid UI development',
          icon: '🎨',
          color: '#06B6D4',
          level: 5,
          years: 3,
        },
      ],
    },
    {
      name: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'platinum',
      tools: [
        {
          id: 'nodejs',
          name: 'Node.js',
          category: 'backend',
          description: 'JavaScript runtime for server-side development',
          icon: '🟢',
          color: '#339933',
          level: 5,
          years: 3,
        },
        {
          id: 'express',
          name: 'Express.js',
          category: 'backend',
          description: 'Fast and minimal web framework for Node.js',
          icon: '🚀',
          color: '#000000',
          level: 5,
          years: 3,
        },
      ],
    },
    {
      name: 'Database',
      icon: <Database className="w-6 h-6" />,
      color: 'oxford-blue',
      tools: [
        {
          id: 'mongodb',
          name: 'MongoDB',
          category: 'database',
          description: 'NoSQL document database for flexible data storage',
          icon: '🍃',
          color: '#47A248',
          level: 5,
          years: 3,
        },

        {
          id: 'redis',
          name: 'Redis',
          category: 'database',
          description: 'In-memory data structure store for caching and sessions',
          icon: '🔴',
          color: '#DC382D',
          level: 4,
          years: 2,
        },
      ],
    },
    {
      name: 'DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: 'orange-web',
      tools: [
        {
          id: 'docker',
          name: 'Docker',
          category: 'devops',
          description: 'Containerization platform for consistent deployments',
          icon: '🐳',
          color: '#2496ED',
          level: 4,
          years: 3,
        },
        {
          id: 'aws',
          name: 'AWS',
          category: 'devops',
          description: 'Cloud computing services and infrastructure',
          icon: '☁️',
          color: '#FF9900',
          level: 4,
          years: 2,
        },
        {
          id: 'vercel',
          name: 'Vercel',
          category: 'devops',
          description: 'Platform for frontend frameworks and static sites',
          icon: '▲',
          color: '#000000',
          level: 5,
          years: 2,
        },
        {
          id: 'github-actions',
          name: 'GitHub Actions',
          category: 'devops',
          description: 'CI/CD workflows for automated testing and deployment',
          icon: '🔄',
          color: '#2088FF',
          level: 4,
          years: 2,
        },
      ],
    },
    {
      name: 'Tools',
      icon: <Settings className="w-6 h-6" />,
      color: 'platinum',
      tools: [
        {
          id: 'vscode',
          name: 'VS Code',
          category: 'tools',
          description: 'Primary code editor with extensive extensions',
          icon: '💻',
          color: '#007ACC',
          level: 5,
          years: 5,
        },
        {
          id: 'git',
          name: 'Git',
          category: 'tools',
          description: 'Version control system for tracking code changes',
          icon: '📂',
          color: '#F05032',
          level: 5,
          years: 5,
        },
        {
          id: 'figma',
          name: 'Figma',
          category: 'tools',
          description: 'Design tool for UI/UX and prototyping',
          icon: '🎨',
          color: '#F24E1E',
          level: 4,
          years: 2,
        },
        {
          id: 'postman',
          name: 'Postman',
          category: 'tools',
          description: 'API development and testing platform',
          icon: '📮',
          color: '#FF6C37',
          level: 5,
          years: 3,
        },
      ],
    },
  ];

  const getStarsForLevel = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < level ? 'text-[var(--orange-web)]' : 'text-[var(--oxford-blue)]/30'
        }`}
      >
        ★
      </span>
    ));
  };

  const activeTools =
    toolCategories.find((cat) => cat.name.toLowerCase() === activeCategory)?.tools || [];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--oxford-blue)]/20 via-transparent to-[var(--orange-web)]/10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--orange-web)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--oxford-blue)]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4 font-mono">
            Tools I Use
          </h2>
          <p className="text-xl text-[var(--platinum)] max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {toolCategories.map((category) => (
            <button
              key={category.name.toLowerCase()}
              onClick={() => setActiveCategory(category.name.toLowerCase())}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-xl font-mono font-medium
                transition-all duration-300 transform hover:scale-105
                ${
                  activeCategory === category.name.toLowerCase()
                    ? 'bg-[var(--orange-web)] text-[var(--black)] shadow-lg shadow-[var(--orange-web)]/25'
                    : 'bg-[var(--oxford-blue)]/30 text-[var(--platinum)] hover:bg-[var(--oxford-blue)]/50'
                }
              `}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTools.map((tool) => (
            <div
              key={tool.id}
              className={`
                bg-[var(--oxford-blue)]/20 backdrop-blur-sm border border-[var(--platinum)]/10
                rounded-xl p-6 hover:bg-[var(--oxford-blue)]/30 transition-all duration-300
                transform hover:scale-105 hover:shadow-xl cursor-pointer
                ${hoveredTool === tool.id ? 'ring-2 ring-[var(--orange-web)]/50' : ''}
              `}
              onMouseEnter={() => setHoveredTool(tool.id)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              {/* Tool Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{tool.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--white)] font-mono">{tool.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">{getStarsForLevel(tool.level)}</div>
                    <span className="text-sm text-[var(--platinum)]/70">
                      {tool.years} year{tool.years !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tool Description */}
              <p className="text-[var(--platinum)] mb-4 leading-relaxed">{tool.description}</p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--platinum)]/70">Proficiency</span>
                  <span className="text-[var(--orange-web)] font-mono">{tool.level}/5</span>
                </div>
                <div className="h-2 bg-[var(--oxford-blue)]/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--orange-web)] to-[var(--orange-web)]/80 rounded-full transition-all duration-500"
                    style={{ width: `${(tool.level / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-[var(--oxford-blue)]/20 backdrop-blur-sm rounded-xl p-6 border border-[var(--platinum)]/10">
            <div className="text-3xl font-bold text-[var(--orange-web)] font-mono mb-2">
              {toolCategories.reduce((total, category) => total + category.tools.length, 0)}
            </div>
            <div className="text-[var(--platinum)]">Total Tools</div>
          </div>

          <div className="text-center bg-[var(--oxford-blue)]/20 backdrop-blur-sm rounded-xl p-6 border border-[var(--platinum)]/10">
            <div className="text-3xl font-bold text-[var(--orange-web)] font-mono mb-2">
              {Math.max(...toolCategories.flatMap((cat) => cat.tools.map((tool) => tool.years)))}
            </div>
            <div className="text-[var(--platinum)]">Max Experience</div>
          </div>

          <div className="text-center bg-[var(--oxford-blue)]/20 backdrop-blur-sm rounded-xl p-6 border border-[var(--platinum)]/10">
            <div className="text-3xl font-bold text-[var(--orange-web)] font-mono mb-2">
              {toolCategories.flatMap((cat) => cat.tools).filter((tool) => tool.level >= 4).length}
            </div>
            <div className="text-[var(--platinum)]">Expert Level</div>
          </div>

          <div className="text-center bg-[var(--oxford-blue)]/20 backdrop-blur-sm rounded-xl p-6 border border-[var(--platinum)]/10">
            <div className="text-3xl font-bold text-[var(--orange-web)] font-mono mb-2">
              {toolCategories.length}
            </div>
            <div className="text-[var(--platinum)]">Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsIUse;
