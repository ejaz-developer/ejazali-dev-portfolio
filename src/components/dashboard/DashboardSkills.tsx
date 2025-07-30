import { useState } from 'react';
import { 
  FaCode, 
  FaChartLine, 
  FaStar,
  FaAward,
  FaCertificate,
  FaTools,
  FaDatabase,
  FaPalette,
  FaCloud
} from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiVercel,
  SiNetlify,
  SiFigma
} from 'react-icons/si';

const DashboardSkills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FaCode,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 90, icon: SiReact, color: 'text-blue-400' },
        { name: 'TypeScript', level: 85, icon: SiTypescript, color: 'text-blue-600' },
        { name: 'JavaScript', level: 88, icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'Tailwind CSS', level: 92, icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Next.js', level: 80, icon: SiNextdotjs, color: 'text-gray-800 dark:text-white' },
        { name: 'Vite', level: 85, icon: SiVite, color: 'text-purple-500' },
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: FaDatabase,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 82, icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'Express.js', level: 80, icon: SiExpress, color: 'text-gray-600 dark:text-gray-400' },
        { name: 'MongoDB', level: 75, icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', level: 70, icon: SiPostgresql, color: 'text-blue-700' },
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: FaTools,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: SiGithub, color: 'text-gray-800 dark:text-white' },
        { name: 'Vercel', level: 85, icon: SiVercel, color: 'text-gray-800 dark:text-white' },
        { name: 'Netlify', level: 82, icon: SiNetlify, color: 'text-cyan-500' },
      ]
    },
    design: {
      title: 'Design & UI/UX',
      icon: FaPalette,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Figma', level: 75, icon: SiFigma, color: 'text-purple-500' },
      ]
    }
  };

  const achievements = [
    {
      title: '15+ Projects Completed',
      description: 'Successfully delivered various web applications',
      icon: FaAward,
      color: 'bg-yellow-500'
    },
    {
      title: 'Self-taught Developer',
      description: 'Learned programming through online resources',
      icon: FaCertificate,
      color: 'bg-blue-500'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to community projects',
      icon: FaStar,
      color: 'bg-green-500'
    },
    {
      title: 'Problem Solver',
      description: 'Love tackling complex technical challenges',
      icon: FaChartLine,
      color: 'bg-purple-500'
    }
  ];

  const learningPath = [
    { skill: 'HTML & CSS', year: '2022', status: 'mastered' },
    { skill: 'JavaScript', year: '2022', status: 'mastered' },
    { skill: 'React', year: '2023', status: 'mastered' },
    { skill: 'TypeScript', year: '2023', status: 'advanced' },
    { skill: 'Node.js', year: '2024', status: 'advanced' },
    { skill: 'Next.js', year: '2024', status: 'learning' },
    { skill: 'Docker', year: '2024', status: 'planning' },
  ];

  const SkillBar = ({ skill }: { skill: any }) => {
    const Icon = skill.icon;
    
    return (
      <div className="bg-white dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
        <div className="flex items-center gap-3 mb-3">
          <Icon className={`${skill.color} text-2xl`} />
          <div className="flex-1">
            <h4 className="font-semibold text-slate-800 dark:text-white">{skill.name}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{skill.level}% proficiency</p>
          </div>
          <span className="text-lg font-bold text-slate-600 dark:text-slate-300">{skill.level}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Skills & Technologies</h1>
        <p className="text-xl text-slate-300 mb-6">
          My technical expertise and continuous learning journey
        </p>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className={`w-12 h-12 ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <Icon className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{achievement.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
            </div>
          );
        })}
      </div>

      {/* Skills Categories */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto bg-slate-50 dark:bg-slate-700 p-1">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === key
                    ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={16} />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2">
          <FaChartLine className="text-blue-500" />
          Learning Journey
        </h2>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-blue-500 to-slate-300"></div>
          
          <div className="space-y-6">
            {learningPath.map((item, index) => {
              const statusColors: Record<string, string> = {
                mastered: 'bg-green-500',
                advanced: 'bg-blue-500',
                learning: 'bg-yellow-500',
                planning: 'bg-slate-400'
              };
              
              const statusLabels: Record<string, string> = {
                mastered: 'Mastered',
                advanced: 'Advanced',
                learning: 'Learning',
                planning: 'Planned'
              };
              
              return (
                <div key={index} className="relative flex items-center gap-4">
                  <div className={`relative z-10 w-3 h-3 ${statusColors[item.status]} rounded-full border-2 border-white dark:border-slate-800`}></div>
                  
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">{item.skill}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Started in {item.year}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'mastered' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : item.status === 'advanced'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : item.status === 'learning'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                    }`}>
                      {statusLabels[item.status]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* What I'm Learning Next */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-blue-200 dark:border-slate-600">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCloud className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Cloud Platforms</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              AWS, Azure, and cloud-native development
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDatabase className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Advanced Backend</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Microservices, Docker, and Kubernetes
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCode className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Mobile Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              React Native and cross-platform apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkills;