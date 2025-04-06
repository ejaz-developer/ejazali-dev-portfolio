import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaLinux } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiAppwrite } from "react-icons/si";

// Neon color assignments for skills
const neonColors = [
  "neon-blue",
  "neon-pink",
  "neon-green",
  "neon-purple",
  "neon-yellow",
  "neon-blue",
  "neon-pink",
  "neon-green",
  "neon-purple",
  "neon-yellow",
];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container">
        <motion.h2
          className="section-title neon-text neon-blue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Technical Skills
          </h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SkillCard
              icon={<SiJavascript />}
              name="JavaScript"
              variants={itemVariants}
            />
            <SkillCard
              icon={<FaReact />}
              name="React"
              variants={itemVariants}
            />
            <SkillCard
              icon={<SiTypescript />}
              name="TypeScript"
              variants={itemVariants}
            />
            <SkillCard
              icon={<SiAppwrite />}
              name="Appwrite"
              variants={itemVariants}
            />
            <SkillCard icon={<FaGitAlt />} name="Git" variants={itemVariants} />
            <SkillCard
              icon={<FaHtml5 />}
              name="HTML5"
              variants={itemVariants}
            />
            <SkillCard
              icon={<FaCss3Alt />}
              name="CSS3"
              variants={itemVariants}
            />
            <SkillCard
              icon={<FaLinux />}
              name="Linux"
              variants={itemVariants}
            />
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Professional Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalSkill
              title="Problem Solving"
              percentage={90}
              delay={0.1}
            />
            <ProfessionalSkill
              title="Self-Learning"
              percentage={95}
              delay={0.2}
            />
            <ProfessionalSkill title="Creativity" percentage={85} delay={0.3} />
            <ProfessionalSkill
              title="Adaptability"
              percentage={88}
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  icon,
  name,
  variants,
}: {
  icon: React.ReactNode;
  name: string;
  variants: any;
}) => {
  // Get a random neon color class
  const randomNeonClass =
    neonColors[Math.floor(Math.random() * neonColors.length)];

  return (
    <motion.div
      className={`bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 border border-transparent hover:border-current ${randomNeonClass} hover:neon-border hover-lift`}
      variants={variants}
    >
      <div className={`text-4xl mb-3 ${randomNeonClass} neon-text`}>{icon}</div>
      <h4 className="font-medium text-white">{name}</h4>
    </motion.div>
  );
};

const ProfessionalSkill = ({
  title,
  percentage,
  delay,
}: {
  title: string;
  percentage: number;
  delay: number;
}) => {
  // Get a random neon color class
  const randomNeonClass =
    neonColors[Math.floor(Math.random() * neonColors.length)];

  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6 hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium text-white">{title}</h4>
        <span className={`text-sm ${randomNeonClass} neon-text`}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`${randomNeonClass} neon-border h-2.5 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
