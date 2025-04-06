import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a 16-year-old software developer from Skardu, Pakistan,
              currently in 9th grade. My passion for coding started when I
              discovered the power of creating applications that can solve
              real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I've been teaching myself programming through YouTube tutorials
              and online resources. I'm particularly interested in front-end
              development with React and have been exploring full-stack
              development using modern tools like Appwrite.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I focus on my studies and continue learning
              new technologies to improve my skills. I enjoy building projects
              that challenge me and help me grow as a developer.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  High School Student
                  <br />
                  9th Grade
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Skardu, Pakistan
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  My Expertise
                </h3>

                <div className="space-y-4">
                  <ExpertiseItem
                    title="Frontend Development"
                    description="Building responsive and interactive user interfaces with React, JavaScript, and modern CSS."
                  />
                  <ExpertiseItem
                    title="React Development"
                    description="Creating dynamic web applications with React, focusing on component-based architecture and state management."
                  />
                  <ExpertiseItem
                    title="Full Stack Development"
                    description="Building end-to-end applications with React for frontend and Appwrite for backend services."
                  />
                  <ExpertiseItem
                    title="Problem Solving"
                    description="Breaking down complex problems into manageable parts and implementing effective solutions."
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="border-l-4 border-blue-600 pl-4 py-1 transition-all duration-300 hover:pl-6 hover:border-neon-blue">
    <h4 className="font-bold text-lg">{title}</h4>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default About;
