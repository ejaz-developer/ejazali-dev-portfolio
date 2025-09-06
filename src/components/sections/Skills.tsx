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
  const technicalSkills = [
    { icon: SiJavascript, name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { icon: FaReact, name: 'React', color: 'from-blue-400 to-blue-600' },
    { icon: SiTypescript, name: 'TypeScript', color: 'from-blue-500 to-blue-600' },
    { icon: SiAppwrite, name: 'Appwrite', color: 'from-blue-500 to-blue-700' },
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
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Self-Learning',
      percentage: 95,
      icon: FaLightbulb,
      color: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Creativity',
      percentage: 85,
      icon: FaCode,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Adaptability',
      percentage: 88,
      icon: FaRocket,
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-500/10"></div>

      <div className="relative container z-10">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white flex items-center justify-center gap-3 animate-slideUp">
            <FaCode className="text-blue-600 dark:text-blue-400" />
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-slideUp">
            {technicalSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                IconComponent={skill.icon}
                name={skill.name}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="animate-slideUp">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <FaBrain className="text-blue-600 dark:text-blue-400" />
            Professional Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill) => (
              <ProfessionalSkill
                key={skill.title}
                title={skill.title}
                percentage={skill.percentage}
                IconComponent={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  IconComponent,
  name,
  color,
}: {
  IconComponent: React.ComponentType;
  name: string;
  color: string;
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl">
      <div className={`text-5xl mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent />
      </div>
      <h4 className="font-bold text-gray-900 dark:text-white text-center group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
        {name}
      </h4>
    </div>
  );
};

const ProfessionalSkill = ({
  title,
  percentage,
  IconComponent,
  color,
}: {
  title: string;
  percentage: number;
  IconComponent: React.ComponentType;
  color: string;
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`text-2xl bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            <IconComponent />
          </div>
          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h4>
        </div>
        <span className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {percentage}%
        </span>
      </div>

      {/* Progress bar container */}
      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        {/* Progress bar */}
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        >
        </div>
      </div>
    </div>
  );
};

export default Skills;
