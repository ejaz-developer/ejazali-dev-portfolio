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
      className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 dark:from-blue-600/10 dark:to-blue-500/10"></div>

      <div className="relative container z-10">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slideUp">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <FaRocket className="text-blue-600 dark:text-blue-400" />
                My Journey
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a{' '}
                  <span className="text-blue-700 dark:text-blue-300 font-semibold">
                    16-year-old software developer
                  </span>{' '}
                  from Skardu, Pakistan, currently in 9th grade. My passion for coding started
                  when I discovered the power of creating applications that can solve{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">real-world problems</span>.
                </p>
                <p>
                  I've been teaching myself programming through{' '}
                  <span className="text-blue-700 dark:text-blue-300 font-semibold">YouTube tutorials</span> and
                  online resources. I'm particularly interested in{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">front-end development</span>{' '}
                  with React and have been exploring full-stack development using modern tools
                  like Appwrite.
                </p>
                <p>
                  When I'm not coding, I focus on my studies and continue learning new
                  technologies to improve my skills. I enjoy building projects that{' '}
                  <span className="text-blue-700 dark:text-blue-300 font-semibold">challenge me</span> and help me
                  grow as a developer.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                  icon={<FaGraduationCap className="text-blue-600 dark:text-blue-400" />}
                  title="Education"
                  info="High School Student"
                  subInfo="9th Grade"
                />
                <InfoCard
                  icon={<FaMapMarkerAlt className="text-blue-700 dark:text-blue-300" />}
                  title="Location"
                  info="Skardu, Pakistan"
                  subInfo="Available for remote work"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-slideUp">
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                <FaBrain className="text-blue-600 dark:text-blue-400" />
                My Expertise
              </h3>

              <div className="space-y-6">
                <ExpertiseItem
                  icon={<FaCode className="text-blue-600 dark:text-blue-400" />}
                  title="Frontend Development"
                  description="Building responsive and interactive user interfaces with React, JavaScript, and modern CSS."
                />
                <ExpertiseItem
                  icon={<FaRocket className="text-blue-700 dark:text-blue-300" />}
                  title="React Development"
                  description="Creating dynamic web applications with React, focusing on component-based architecture and state management."
                />
                <ExpertiseItem
                  icon={<FaHeart className="text-blue-500 dark:text-blue-500" />}
                  title="Full Stack Development"
                  description="Building end-to-end applications with React for frontend and Appwrite for backend services."
                />
                <ExpertiseItem
                  icon={<FaBrain className="text-blue-600 dark:text-blue-400" />}
                  title="Problem Solving"
                  description="Breaking down complex problems into manageable parts and implementing effective solutions."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105">
    <div className="flex items-center gap-3 mb-2">
      <div className="text-xl">{icon}</div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h4>
    </div>
    <p className="text-blue-700 dark:text-blue-300 font-medium">{info}</p>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{subInfo}</p>
  </div>
);

const ExpertiseItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group border-l-4 border-blue-500 dark:border-blue-400 pl-6 py-4 transition-all duration-300 hover:pl-8 hover:border-blue-600 dark:hover:border-blue-300">
    <div className="flex items-start gap-3">
      <div className="text-xl mt-1 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default About;
