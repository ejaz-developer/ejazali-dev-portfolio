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

const DashboardAbout = () => {
  const personalInfo = [
    { label: 'Full Name', value: 'Ejaz Ali', icon: FaCode },
    { label: 'Role', value: 'Software Developer & Student', icon: FaGraduationCap },
    { label: 'Location', value: 'Skardu, Pakistan', icon: FaMapMarkerAlt },
    { label: 'Status', value: 'Available for work', icon: FaRocket },
  ];

  const interests = [
    { name: 'Coding', icon: FaCode, color: 'bg-blue-500' },
    { name: 'Learning', icon: FaBookOpen, color: 'bg-green-500' },
    { name: 'Music', icon: FaMusic, color: 'bg-purple-500' },
    { name: 'Gaming', icon: FaGamepad, color: 'bg-red-500' },
    { name: 'Travel', icon: FaPlane, color: 'bg-yellow-500' },
    { name: 'Innovation', icon: FaLightbulb, color: 'bg-indigo-500' },
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
      title: 'Full-Stack Development',
      description: 'Expanded skills to include Node.js, databases, and modern development tools',
      type: 'skill'
    },
    {
      year: 'Present',
      title: 'Building Amazing Projects',
      description: 'Creating full-stack applications and contributing to open source',
      type: 'current'
    }
  ];

  return (
    <div className="space-y-6">
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