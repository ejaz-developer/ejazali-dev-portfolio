import { motion } from 'framer-motion';
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaCode,
  FaBrain,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiAppwrite,
  SiTailwindcss
} from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const technicalSkills = [
    { icon: SiJavascript, name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { icon: FaReact, name: 'React', color: 'from-blue-400 to-blue-600' },
    { icon: SiTypescript, name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
    { icon: SiAppwrite, name: 'Appwrite', color: 'from-pink-500 to-red-600' },
    { icon: FaGitAlt, name: 'Git', color: 'from-orange-500 to-red-600' },
    { icon: FaHtml5, name: 'HTML5', color: 'from-orange-400 to-red-500' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'from-blue-400 to-blue-600' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
    { icon: FaLinux, name: 'Linux', color: 'from-gray-600 to-gray-800' },
  ];

  const professionalSkills = [
    {
      title: 'Problem Solving',
      percentage: 90,
      icon: FaBrain,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Self-Learning',
      percentage: 95,
      icon: FaLightbulb,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Creativity',
      percentage: 85,
      icon: FaCode,
      color: 'from-pink-500 to-purple-600'
    },
    {
      title: 'Adaptability',
      percentage: 88,
      icon: FaRocket,
      color: 'from-green-500 to-blue-600',
    },
  ];

  return (
    <section
      id="skills"
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
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-white flex items-center justify-center gap-3"
          >
            <FaCode className="text-purple-400 animate-pulse" />
            Technical Skills
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                IconComponent={skill.icon}
                name={skill.name}
                color={skill.color}
                variants={itemVariants}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>

        {/* Professional Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-white flex items-center justify-center gap-3"
          >
            <FaBrain className="text-pink-400 animate-pulse" />
            Professional Skills
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill, index) => (
              <ProfessionalSkill
                key={skill.title}
                title={skill.title}
                percentage={skill.percentage}
                IconComponent={skill.icon}
                color={skill.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x"></div>
    </section>
  );
};

const SkillCard = ({
  IconComponent,
  name,
  color,
  variants,
  delay = 0,
}: {
  IconComponent: React.ComponentType;
  name: string;
  color: string;
  variants: any;
  delay?: number;
}) => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 border border-purple-400/20 hover:border-purple-300/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        <div className={`text-5xl mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent />
        </div>
        <h4 className="font-bold text-white text-center group-hover:text-purple-200 transition-colors duration-300">
          {name}
        </h4>
      </div>

      {/* Animated border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

      {/* Floating particles on hover */}
      <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
    </motion.div>
  );
};

const ProfessionalSkill = ({
  title,
  percentage,
  IconComponent,
  color,
  delay,
}: {
  title: string;
  percentage: number;
  IconComponent: React.ComponentType;
  color: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20 hover:border-purple-300/50 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`text-2xl bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              <IconComponent />
            </div>
            <h4 className="font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
              {title}
            </h4>
          </div>
          <span className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {percentage}%
          </span>
        </div>

        {/* Progress bar container */}
        <div className="relative w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
          {/* Background glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 rounded-full`}></div>

          {/* Progress bar */}
          <motion.div
            className={`relative h-full bg-gradient-to-r ${color} rounded-full shadow-lg`}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </motion.div>

          {/* Glow effect on progress */}
          <motion.div
            className={`absolute top-0 h-full bg-gradient-to-r ${color} rounded-full blur-sm opacity-50`}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
