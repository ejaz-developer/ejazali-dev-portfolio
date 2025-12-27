import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  ExternalLink,
  Github,
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle,
} from 'lucide-react';

// Mock data - In production, fetch from MongoDB
const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    status: 'in-progress',
    progress: 65,
    priority: 'high',
    startDate: '2024-01-01',
    estimatedEndDate: '2024-02-15',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    milestones: [
      { title: 'Project Setup', completed: true },
      { title: 'Database Schema', completed: true },
      { title: 'User Authentication', completed: true },
      { title: 'Product Management', completed: true },
      { title: 'Shopping Cart', completed: false },
      { title: 'Payment Integration', completed: false },
      { title: 'Testing & Deployment', completed: false },
    ],
    liveUrl: null,
    repositoryUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: '2',
    title: 'Portfolio Website Redesign',
    description: 'Modern portfolio website with animations, contact forms, and CMS integration.',
    status: 'review',
    progress: 90,
    priority: 'medium',
    startDate: '2024-01-10',
    estimatedEndDate: '2024-01-30',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Sanity CMS'],
    milestones: [
      { title: 'Design Mockups', completed: true },
      { title: 'Frontend Development', completed: true },
      { title: 'Animations', completed: true },
      { title: 'CMS Integration', completed: true },
      { title: 'Final Review', completed: false },
    ],
    liveUrl: 'https://example-portfolio.vercel.app',
    repositoryUrl: null,
  },
  {
    id: '3',
    title: 'Mobile App Backend',
    description: 'RESTful API backend for a fitness tracking mobile application.',
    status: 'pending',
    progress: 15,
    priority: 'urgent',
    startDate: '2024-01-20',
    estimatedEndDate: '2024-03-01',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
    milestones: [
      { title: 'API Architecture', completed: true },
      { title: 'User Authentication', completed: false },
      { title: 'Workout Tracking API', completed: false },
      { title: 'Progress Analytics', completed: false },
      { title: 'Push Notifications', completed: false },
    ],
    liveUrl: null,
    repositoryUrl: 'https://github.com/example/fitness-api',
  },
];

const getStatusConfig = (status: string) => {
  const configs: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
    pending: {
      color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      icon: <Clock className="w-4 h-4" />,
      label: 'Pending',
    },
    'in-progress': {
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      icon: <Circle className="w-4 h-4" />,
      label: 'In Progress',
    },
    review: {
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      icon: <AlertCircle className="w-4 h-4" />,
      label: 'In Review',
    },
    completed: {
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      icon: <CheckCircle2 className="w-4 h-4" />,
      label: 'Completed',
    },
    'on-hold': {
      color: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      icon: <Clock className="w-4 h-4" />,
      label: 'On Hold',
    },
  };
  return configs[status] || configs['pending'];
};

const getPriorityColor = (priority: string) => {
  const colors: Record<string, string> = {
    low: 'bg-green-500/20 text-green-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    high: 'bg-orange-500/20 text-orange-400',
    urgent: 'bg-red-500/20 text-red-400 animate-pulse',
  };
  return colors[priority] || colors['medium'];
};

export default function ProjectsPage() {
  const activeProjects = projects.filter((p) => p.status !== 'completed');
  const completedProjects = projects.filter((p) => p.status === 'completed');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white)] font-mono">
          My <span className="text-[var(--orange-web)]">Projects</span>
        </h1>
        <p className="text-[var(--platinum)]/60 mt-2">
          Track the progress of your ongoing and completed projects
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="bg-[var(--oxford-blue)]/30 border border-[var(--platinum)]/10">
          <TabsTrigger
            value="active"
            className="data-[state=active]:bg-[var(--orange-web)]/20 data-[state=active]:text-[var(--orange-web)]"
          >
            Active ({activeProjects.length})
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="data-[state=active]:bg-[var(--orange-web)]/20 data-[state=active]:text-[var(--orange-web)]"
          >
            Completed ({completedProjects.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {activeProjects.map((project) => {
            const statusConfig = getStatusConfig(project.status);
            const completedMilestones = project.milestones.filter((m) => m.completed).length;

            return (
              <Card
                key={project.id}
                className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm hover:border-[var(--orange-web)]/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-[var(--white)] font-mono text-xl flex items-center gap-3">
                        {project.title}
                        <Badge variant="outline" className={statusConfig.color}>
                          {statusConfig.icon}
                          <span className="ml-1">{statusConfig.label}</span>
                        </Badge>
                        <Badge className={getPriorityColor(project.priority)}>
                          {project.priority}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-[var(--platinum)]/70 mt-2 max-w-2xl">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-[var(--orange-web)] font-mono">
                        {project.progress}%
                      </p>
                      <p className="text-sm text-[var(--platinum)]/50">Complete</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--platinum)]/60">Progress</span>
                      <span className="text-[var(--platinum)]/60">
                        {completedMilestones}/{project.milestones.length} milestones
                      </span>
                    </div>
                    <Progress value={project.progress} className="h-3 bg-[var(--platinum)]/10" />
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-sm text-[var(--platinum)]/60 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-[var(--black)]/30 border-[var(--platinum)]/20 text-[var(--platinum)]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <p className="text-sm text-[var(--platinum)]/60 mb-3">Milestones</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.milestones.map((milestone, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 p-3 rounded-lg ${
                            milestone.completed
                              ? 'bg-green-500/10 border border-green-500/20'
                              : 'bg-[var(--black)]/30 border border-[var(--platinum)]/10'
                          }`}
                        >
                          {milestone.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-[var(--platinum)]/40 shrink-0" />
                          )}
                          <span
                            className={`text-sm ${
                              milestone.completed ? 'text-green-400' : 'text-[var(--platinum)]/70'
                            }`}
                          >
                            {milestone.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Links */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t border-[var(--platinum)]/10">
                    <div className="flex items-center gap-6 text-sm text-[var(--platinum)]/60">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Started: {new Date(project.startDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Est. Completion: {new Date(project.estimatedEndDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--orange-web)]/20 text-[var(--orange-web)] hover:bg-[var(--orange-web)]/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Preview
                        </a>
                      )}
                      {project.repositoryUrl && (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--platinum)]/10 text-[var(--platinum)] hover:bg-[var(--platinum)]/20 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Repository
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          {completedProjects.length === 0 ? (
            <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10">
              <CardContent className="py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-[var(--platinum)]/30 mx-auto mb-4" />
                <p className="text-[var(--platinum)]/60">No completed projects yet</p>
                <p className="text-[var(--platinum)]/40 text-sm mt-1">
                  Completed projects will appear here
                </p>
              </CardContent>
            </Card>
          ) : (
            completedProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-[var(--oxford-blue)]/20 border-green-500/20 backdrop-blur-sm"
              >
                {/* Similar card content as active projects */}
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
