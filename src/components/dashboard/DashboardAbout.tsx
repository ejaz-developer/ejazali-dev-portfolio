import { 
  FaGraduationCap, 
  FaCode, 
  FaHeart, 
  FaRocket, 
  FaLightbulb,
  FaMusic,
  FaGamepad,
  FaPlane,
  FaBookOpen,
  FaMapMarkerAlt
} from 'react-icons/fa';
import data from '../../data.json';

const DashboardAbout = () => {
  const { personalInfo, expertise } = data;

  const personalInfoItems = [
    { label: 'Full Name', value: personalInfo.name, icon: FaCode },
    { label: 'Role', value: personalInfo.title, icon: FaGraduationCap },
    { label: 'Location', value: personalInfo.location, icon: FaMapMarkerAlt },
    { label: 'Status', value: personalInfo.availability, icon: FaRocket },
  ];

  const interests = [
    { name: 'Coding', icon: FaCode, color: 'bg-blue-600' },
    { name: 'Learning', icon: FaBookOpen, color: 'bg-green-600' },
    { name: 'YouTube Learning', icon: FaMusic, color: 'bg-purple-600' },
    { name: 'Problem Solving', icon: FaLightbulb, color: 'bg-yellow-600' },
    { name: 'Building Apps', icon: FaRocket, color: 'bg-red-600' },
    { name: 'Innovation', icon: FaHeart, color: 'bg-indigo-600' },
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Started Learning Programming',
      description: 'Began my journey with HTML, CSS, and JavaScript through YouTube tutorials',
      type: 'education'
    },
    {
      year: '2023',
      title: 'First React Project',
      description: 'Built my first React application and fell in love with component-based development',
      type: 'milestone'
    },
    {
      year: '2024',
      title: 'MERN Stack Development',
      description: 'Expanded skills to include MongoDB, Express.js, React, and Node.js for full-stack solutions',
      type: 'skill'
    },
    {
      year: '2024',
      title: 'Self-Taught Developer',
      description: 'Continuing to learn and build projects while excelling in 9th grade studies',
      type: 'current'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {personalInfo.bio}
        </p>
      </div>

      {/* Personal Story Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Story</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {personalInfo.detailedBio.split('\n\n').map((paragraph, index) => (
              <span key={index} className="block mb-4">
                {paragraph}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Personal Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personalInfoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{item.label}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
            </div>
          );
        })}
      </div>

      {/* Journey Timeline */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">My Journey</h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className={`w-4 h-4 rounded-full border-4 ${
                  item.type === 'current' 
                    ? 'bg-blue-600 border-blue-200 dark:border-blue-800' 
                    : 'bg-gray-300 dark:bg-gray-600 border-gray-200 dark:border-gray-700'
                }`}></div>
                <div className={`w-0.5 h-12 ml-1.5 mt-2 ${
                  index === timeline.length - 1 ? 'bg-transparent' : 'bg-gray-200 dark:bg-gray-700'
                }`}></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{item.year}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'education' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800' :
                    item.type === 'milestone' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800' :
                    item.type === 'skill' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800' :
                    'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-800'
                  }`}>
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Grid */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">Interests & Passions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${interest.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium">{interest.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAbout;
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-slate-300 mb-6">
          Get to know the person behind the code
        </p>
      </div>

      {/* Personal Story */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
          <FaHeart className="text-red-500" />
          My Story
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Hi! I'm <strong>Ejaz Ali</strong>, a passionate self-taught software developer from the beautiful 
            mountainous region of Skardu, Pakistan. My journey into programming started with curiosity 
            and has grown into a deep love for creating digital solutions.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            What started as watching YouTube tutorials has evolved into building full-stack applications 
            using modern technologies like React, TypeScript, and Node.js. I believe in learning by doing 
            and constantly challenging myself with new projects.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source 
            projects, or enjoying the natural beauty of my hometown. I'm always excited to collaborate 
            on meaningful projects that make a difference.
          </p>
        </div>
      </div>

      {/* Personal Info & Interests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">Personal Info</h3>
          <div className="space-y-4">
            {personalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-600 dark:text-blue-400" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{info.label}</p>
                    <p className="font-medium text-slate-800 dark:text-white">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">Interests & Hobbies</h3>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <div className={`w-8 h-8 ${interest.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={14} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{interest.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2">
          <FaRocket className="text-blue-500" />
          My Journey
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const typeColors: Record<string, string> = {
                education: 'bg-green-500',
                milestone: 'bg-blue-500',
                skill: 'bg-purple-500',
                current: 'bg-red-500'
              };
              
              return (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-4 h-4 ${typeColors[item.type]} rounded-full border-4 border-white dark:border-slate-800 shadow-lg`}></div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
                        <span className="text-lg font-semibold text-slate-800 dark:text-white">{item.title}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-blue-200 dark:border-slate-600">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLightbulb className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Innovation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Always seeking creative solutions and embracing new technologies
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBookOpen className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Continuous Learning</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Committed to growing and improving my skills every day
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Quality</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Building solutions that are robust, scalable, and user-friendly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAbout;