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
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLinux,
  FaNodeJs
} from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiAppwrite,
  SiHtml5,
  SiCss3,
  SiLinux
} from 'react-icons/si';
import data from '../../data.json';

const DashboardSkills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const { skills } = data;

  const getSkillLevel = (skillName: string) => {
    switch(skillName.toLowerCase()) {
      case 'html5': return 95;
      case 'css3': return 90;
      case 'javascript': return 88;
      case 'react': return 90;
      case 'typescript': return 80;
      case 'tailwind css': return 85;
      case 'node.js': return 82;
      case 'express.js': return 80;
      case 'mongodb': return 78;
      case 'appwrite': return 85;
      case 'git': return 85;
      case 'linux': return 70;
      default: return 75;
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'SiJavascript': SiJavascript,
      'FaReact': SiReact,
      'SiTypescript': SiTypescript,
      'SiAppwrite': SiAppwrite,
      'FaGitAlt': FaGitAlt,
      'FaHtml5': SiHtml5,
      'FaCss3Alt': SiCss3,
      'SiTailwindcss': SiTailwindcss,
      'FaLinux': SiLinux,
      'FaNodeJs': SiNodedotjs,
      'SiMongodb': SiMongodb,
      'SiExpress': SiExpress,
    };
    return iconMap[iconName] || FaCode;
  };

  const getSkillColor = (skillName: string) => {
    const colorMap: { [key: string]: string } = {
      'JavaScript': 'text-yellow-500',
      'React': 'text-blue-400',
      'TypeScript': 'text-blue-600',
      'Appwrite': 'text-pink-500',
      'Git': 'text-orange-600',
      'HTML5': 'text-orange-500',
      'CSS3': 'text-blue-500',
      'Tailwind CSS': 'text-cyan-500',
      'Linux': 'text-yellow-600',
      'Node.js': 'text-green-600',
      'MongoDB': 'text-green-500',
      'Express.js': 'text-gray-600 dark:text-gray-300',
    };
    return colorMap[skillName] || 'text-gray-600';
  };

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FaCode,
      color: 'from-blue-600 to-blue-700',
      skills: skills.technical.filter(skill => 
        ['JavaScript', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'].includes(skill.name)
      ).map(skill => ({
        name: skill.name,
        level: getSkillLevel(skill.name),
        icon: getIconComponent(skill.icon),
        color: getSkillColor(skill.name)
      }))
    },
    backend: {
      title: 'Backend & Full Stack',
      icon: FaDatabase,
      color: 'from-green-600 to-green-700',
      skills: skills.technical.filter(skill => 
        ['Node.js', 'Express.js', 'MongoDB', 'Appwrite'].includes(skill.name)
      ).map(skill => ({
        name: skill.name,
        level: getSkillLevel(skill.name),
        icon: getIconComponent(skill.icon),
        color: getSkillColor(skill.name)
      }))
    },
    tools: {
      title: 'Tools & Technologies',
      icon: FaTools,
      color: 'from-purple-600 to-purple-700',
      skills: skills.technical.filter(skill => 
        ['Git', 'Linux'].includes(skill.name)
      ).map(skill => ({
        name: skill.name,
        level: getSkillLevel(skill.name),
        icon: getIconComponent(skill.icon),
        color: getSkillColor(skill.name)
      }))
    }
  };

  const learningPath = [
    {
      title: 'Frontend Mastery',
      description: 'Mastering React, TypeScript, and modern CSS frameworks',
      progress: 90,
      color: 'bg-blue-600'
    },
    {
      title: 'MERN Stack Development',
      description: 'Building full-stack applications with MongoDB, Express, React, Node.js',
      progress: 85,
      color: 'bg-green-600'
    },
    {
      title: 'Modern Development Tools',
      description: 'Learning advanced Git workflows, Linux systems, and deployment strategies',
      progress: 75,
      color: 'bg-purple-600'
    },
    {
      title: 'Problem Solving & Algorithms',
      description: 'Improving problem-solving skills and understanding data structures',
      progress: 80,
      color: 'bg-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Technologies</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          My technical expertise and continuous learning journey
        </p>
      </div>

      {/* Skill Categories Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {Object.entries(skillCategories).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <Icon size={20} />
              {category.title}
            </button>
          );
        })}
      </div>

      {/* Active Category Skills */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <div className="flex items-center gap-3 mb-8">
          <div className={`w-12 h-12 bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} rounded-xl flex items-center justify-center`}>
            {(() => {
              const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
              return <Icon className="text-white" size={24} />;
            })()}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className={`${skill.color} text-2xl`} />
                    <span className="font-semibold text-gray-800 dark:text-white text-lg">{skill.name}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 border border-gray-300 dark:border-gray-600">
                  <div
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Professional Skills */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">Professional Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.professional.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200 dark:text-gray-700"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-blue-600"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${skill.percentage}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-800 dark:text-white">{skill.percentage}%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">Learning Path & Progress</h2>
        <div className="space-y-8">
          {learningPath.map((path, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{path.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium ml-4">{path.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 border border-gray-300 dark:border-gray-600">
                <div
                  className={`h-full ${path.color} rounded-full transition-all duration-1000 ease-out shadow-sm flex items-center justify-end pr-2`}
                  style={{ width: `${path.progress}%` }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkills;
