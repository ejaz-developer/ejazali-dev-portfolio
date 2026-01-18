import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TypingEffect from '@/components/shared/TypingEffect';
import GitHubStats from '@/components/shared/GitHubStats';
import {
   Code2,
   Rocket,
   Sparkles,
   Github,
   ExternalLink,
   ArrowRight,
   Database,
   Server,
   Container,
   Cloud,
   GitBranch,
   Workflow,
} from 'lucide-react';

export default function Home() {
   const projects = [
      {
         title: 'E-Commerce Platform',
         description:
            'A full-stack e-commerce solution with advanced features.',
         tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
         image: '🛍️',
      },
      {
         title: 'AI Content Generator',
         description:
            'AI-powered tool for generating marketing content and blogs.',
         tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
         image: '🤖',
      },
      {
         title: 'Task Management App',
         description:
            'Collaborative project management with real-time updates.',
         tags: ['Vue.js', 'Firebase', 'Tailwind', 'PWA'],
         image: '📋',
      },
      {
         title: 'Portfolio CMS',
         description: 'Headless CMS for managing portfolio content easily.',
         tags: ['Strapi', 'GraphQL', 'React', 'Docker'],
         image: '📝',
      },
   ];

   const skills = [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Rocket },
      { name: 'TypeScript', icon: Code2 },
      { name: 'Node.js', icon: Server },
      { name: 'Tailwind CSS', icon: Sparkles },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Docker', icon: Container },
      { name: 'AWS', icon: Cloud },
      { name: 'GraphQL', icon: Code2 },
      { name: 'Git', icon: GitBranch },
      { name: 'CI/CD', icon: Workflow },
   ];

   return (
      <div className="min-h-screen bg-black">
         {/* Grid Background Effect */}
         <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

         <main className="relative">
            {/* Hero Section */}
            <section
               id="hero"
               className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center justify-center"
            >
               <div className="max-w-4xl text-center">
                  <div className="flex items-center justify-center gap-2 mb-6">
                     <Sparkles className="h-5 w-5 text-blue-500" />
                     <span className="text-blue-500 font-medium">
                        Welcome to my portfolio
                     </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                     <TypingEffect
                        phrases={[
                           'Built websites',
                           'Quality code',
                           'Digital experiences',
                           'Modern solutions',
                        ]}
                        className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500"
                     />
                  </h1>
                  <p className="text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed mx-auto">
                     I'm a passionate software developer specializing in
                     building exceptional digital experiences. Currently focused
                     on creating accessible, human-centered products.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                     >
                        <Rocket className="mr-2 h-5 w-5" />
                        View My Work
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="border-zinc-700 text-white hover:bg-zinc-800"
                     >
                        Download Resume
                        <ArrowRight className="ml-2 h-5 w-5" />
                     </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-zinc-800">
                     <div>
                        <div className="text-3xl font-bold text-white mb-1">
                           5+
                        </div>
                        <div className="text-sm text-zinc-400">
                           Years Experience
                        </div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-white mb-1">
                           50+
                        </div>
                        <div className="text-sm text-zinc-400">
                           Projects Completed
                        </div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-white mb-1">
                           30+
                        </div>
                        <div className="text-sm text-zinc-400">
                           Happy Clients
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 border-t border-zinc-800">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center">
                     <div className="flex items-center justify-center gap-2 mb-4">
                        <Code2 className="h-5 w-5 text-blue-500" />
                        <span className="text-blue-500 font-medium">
                           About Me
                        </span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Crafting digital experiences that matter
                     </h2>
                     <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                        With over 5 years of experience in software development,
                        I've had the privilege of working on diverse projects
                        ranging from startups to enterprise solutions. My
                        approach combines technical excellence with
                        user-centered design principles.
                     </p>
                     <p className="text-lg text-zinc-400 leading-relaxed">
                        I believe in writing clean, maintainable code and
                        creating solutions that not only work well but also
                        provide delightful user experiences. When I'm not
                        coding, you'll find me contributing to open-source
                        projects and sharing knowledge with the developer
                        community.
                     </p>
                  </div>
               </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 border-t border-zinc-800">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                     <Rocket className="h-5 w-5 text-blue-500" />
                     <span className="text-blue-500 font-medium">
                        Portfolio
                     </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                     Featured Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {projects.map((project, index) => (
                        <Card
                           key={index}
                           className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 group"
                        >
                           <CardContent className="p-6">
                              <div className="text-5xl mb-4">
                                 {project.image}
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                                 {project.title}
                              </h3>
                              <p className="text-zinc-400 mb-4 leading-relaxed">
                                 {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                 {project.tags.map((tag, tagIndex) => (
                                    <Badge
                                       key={tagIndex}
                                       variant="secondary"
                                       className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                                    >
                                       {tag}
                                    </Badge>
                                 ))}
                              </div>
                              <div className="flex gap-4">
                                 <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-zinc-400 hover:text-white"
                                 >
                                    <Github className="h-4 w-4 mr-2" />
                                    Code
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-zinc-400 hover:text-white"
                                 >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live Demo
                                 </Button>
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 border-t border-zinc-800">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-6xl mx-auto">
                     <div className="flex items-center justify-center gap-2 mb-4">
                        <Code2 className="h-5 w-5 text-blue-500" />
                        <span className="text-blue-500 font-medium">
                           Skills
                        </span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                        Technologies I work with
                     </h2>
                     <div className="flex flex-wrap gap-4 justify-center">
                        {skills.map((skill, index) => {
                           const Icon = skill.icon;
                           return (
                              <Badge
                                 key={index}
                                 variant="outline"
                                 className="text-base px-5 py-3 border-zinc-700 text-zinc-300 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center gap-2"
                              >
                                 <Icon className="h-4 w-4" />
                                 {skill.name}
                              </Badge>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </section>

            {/* GitHub Stats Section */}
            <section id="github" className="py-20 border-t border-zinc-800">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-6xl mx-auto">
                     <div className="flex items-center justify-center gap-2 mb-4">
                        <Github className="h-5 w-5 text-blue-500" />
                        <span className="text-blue-500 font-medium">
                           GitHub
                        </span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                        My Coding Journey
                     </h2>

                     <GitHubStats username="ejaz-developer" />
                  </div>
               </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 border-t border-zinc-800">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center">
                     <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="h-5 w-5 text-blue-500" />
                        <span className="text-blue-500 font-medium">
                           Get In Touch
                        </span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's work together
                     </h2>
                     <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                        I'm always interested in hearing about new projects and
                        opportunities. Whether you have a question or just want
                        to say hi, feel free to reach out!
                     </p>
                     <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                     >
                        Start a Conversation
                        <ArrowRight className="ml-2 h-5 w-5" />
                     </Button>
                  </div>
               </div>
            </section>
         </main>
      </div>
   );
}
