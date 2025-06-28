import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaRocket,
  FaBrain,
  FaHeart,
} from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
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
            About{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative bg-gradient-to-br from-purple-800/50 via-purple-700/50 to-indigo-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/20 shadow-2xl shadow-purple-500/20">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl font-bold text-white mb-6 flex items-center gap-3"
                >
                  <FaRocket className="text-purple-400 animate-pulse" />
                  My Journey
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4 text-gray-200 leading-relaxed"
                >
                  <p>
                    I'm a{' '}
                    <span className="text-purple-300 font-semibold">
                      16-year-old software developer
                    </span>{' '}
                    from Skardu, Pakistan, currently in 9th grade. My passion for coding started
                    when I discovered the power of creating applications that can solve{' '}
                    <span className="text-indigo-300 font-semibold">real-world problems</span>.
                  </p>
                  <p>
                    I've been teaching myself programming through{' '}
                    <span className="text-pink-300 font-semibold">YouTube tutorials</span> and
                    online resources. I'm particularly interested in{' '}
                    <span className="text-purple-300 font-semibold">front-end development</span>{' '}
                    with React and have been exploring full-stack development using modern tools
                    like Appwrite.
                  </p>
                  <p>
                    When I'm not coding, I focus on my studies and continue learning new
                    technologies to improve my skills. I enjoy building projects that{' '}
                    <span className="text-indigo-300 font-semibold">challenge me</span> and help me
                    grow as a developer.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <InfoCard
                    icon={<FaGraduationCap className="text-purple-400" />}
                    title="Education"
                    info="High School Student"
                    subInfo="9th Grade"
                  />
                  <InfoCard
                    icon={<FaMapMarkerAlt className="text-indigo-400" />}
                    title="Location"
                    info="Skardu, Pakistan"
                    subInfo="Available for remote work"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-indigo-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-purple-800/60 via-purple-700/60 to-indigo-800/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl shadow-purple-500/30 border border-purple-400/30 group-hover:border-purple-300/50 transition-all duration-500">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"
                >
                  <FaBrain className="text-pink-400 animate-pulse" />
                  My Expertise
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-6"
                >
                  <ExpertiseItem
                    icon={<FaCode className="text-purple-400" />}
                    title="Frontend Development"
                    description="Building responsive and interactive user interfaces with React, JavaScript, and modern CSS."
                    delay={0.1}
                  />
                  <ExpertiseItem
                    icon={<FaRocket className="text-indigo-400" />}
                    title="React Development"
                    description="Creating dynamic web applications with React, focusing on component-based architecture and state management."
                    delay={0.2}
                  />
                  <ExpertiseItem
                    icon={<FaHeart className="text-pink-400" />}
                    title="Full Stack Development"
                    description="Building end-to-end applications with React for frontend and Appwrite for backend services."
                    delay={0.3}
                  />
                  <ExpertiseItem
                    icon={<FaBrain className="text-purple-300" />}
                    title="Problem Solving"
                    description="Breaking down complex problems into manageable parts and implementing effective solutions."
                    delay={0.4}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x"></div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  info,
  subInfo,
}: {
  icon: React.ReactNode;
  title: string;
  info: string;
  subInfo: string;
}) => (
  <div className="group relative bg-gradient-to-br from-purple-700/30 via-purple-600/30 to-indigo-700/30 backdrop-blur-lg p-4 rounded-xl border border-purple-400/20 hover:border-purple-300/40 transition-all duration-300 hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-xl">{icon}</div>
        <h4 className="font-bold text-lg text-white">{title}</h4>
      </div>
      <p className="text-purple-200 font-medium">{info}</p>
      <p className="text-gray-300 text-sm">{subInfo}</p>
    </div>
  </div>
);

const ExpertiseItem = ({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative bg-gradient-to-r from-purple-700/20 to-indigo-700/20 border-l-4 border-purple-400 pl-6 py-4 rounded-r-lg transition-all duration-300 hover:pl-8 hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20"
  >
    <div className="flex items-start gap-3">
      <div className="text-xl mt-1 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>

    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
  </motion.div>
);

export default About;
