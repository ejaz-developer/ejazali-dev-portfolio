import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  FolderKanban,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Calendar,
  MessageSquare,
  Zap,
} from 'lucide-react';

// Mock data - In production, this would come from MongoDB
const mockProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    status: 'in-progress',
    progress: 65,
    priority: 'high',
    dueDate: '2024-02-15',
  },
  {
    id: '2',
    title: 'Portfolio Website Redesign',
    status: 'review',
    progress: 90,
    priority: 'medium',
    dueDate: '2024-01-30',
  },
  {
    id: '3',
    title: 'Mobile App Backend',
    status: 'pending',
    progress: 15,
    priority: 'urgent',
    dueDate: '2024-03-01',
  },
];

const stats = [
  {
    title: 'Active Projects',
    value: '3',
    change: '+1 this month',
    icon: FolderKanban,
    color: 'text-[var(--orange-web)]',
    bgColor: 'bg-[var(--orange-web)]/10',
  },
  {
    title: 'In Progress',
    value: '2',
    change: 'On schedule',
    icon: Clock,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    title: 'Completed',
    value: '12',
    change: '+3 this quarter',
    icon: CheckCircle2,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },
  {
    title: 'Pending Review',
    value: '1',
    change: 'Awaiting feedback',
    icon: AlertCircle,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
];

const getStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'in-progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    review: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    completed: 'bg-green-500/20 text-green-400 border-green-500/30',
    'on-hold': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };
  return colors[status] || colors['pending'];
};

const getPriorityColor = (priority: string) => {
  const colors: Record<string, string> = {
    low: 'bg-green-500/20 text-green-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    high: 'bg-orange-500/20 text-orange-400',
    urgent: 'bg-red-500/20 text-red-400',
  };
  return colors[priority] || colors['medium'];
};

export default async function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm hover:border-[var(--orange-web)]/30 transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--platinum)]/60 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-[var(--white)] font-mono">{stat.value}</p>
                  <p className="text-xs text-[var(--platinum)]/50 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Projects */}
        <Card className="lg:col-span-2 bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-[var(--white)] font-mono">Active Projects</CardTitle>
                <CardDescription className="text-[var(--platinum)]/60">
                  Your ongoing project development
                </CardDescription>
              </div>
              <Badge className="bg-[var(--orange-web)]/20 text-[var(--orange-web)] border-[var(--orange-web)]/30">
                {mockProjects.length} Projects
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5 hover:border-[var(--orange-web)]/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[var(--white)]">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status.replace('-', ' ')}
                      </Badge>
                      <Badge className={getPriorityColor(project.priority)}>
                        {project.priority}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[var(--orange-web)] font-mono">
                      {project.progress}%
                    </p>
                    <p className="text-xs text-[var(--platinum)]/50 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due: {new Date(project.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Progress value={project.progress} className="h-2 bg-[var(--platinum)]/10" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions & Recent Activity */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
                <Zap className="w-5 h-5 text-[var(--orange-web)]" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full p-3 rounded-xl bg-[var(--orange-web)]/10 border border-[var(--orange-web)]/30 text-[var(--orange-web)] hover:bg-[var(--orange-web)]/20 transition-all duration-200 text-left flex items-center gap-3">
                <MessageSquare className="w-5 h-5" />
                <span>Send a Message</span>
              </button>
              <button className="w-full p-3 rounded-xl bg-[var(--platinum)]/5 border border-[var(--platinum)]/10 text-[var(--platinum)] hover:bg-[var(--platinum)]/10 transition-all duration-200 text-left flex items-center gap-3">
                <FolderKanban className="w-5 h-5" />
                <span>View All Projects</span>
              </button>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[var(--orange-web)]" />
                Recent Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MessageSquare className="w-12 h-12 text-[var(--platinum)]/30 mx-auto mb-3" />
                <p className="text-[var(--platinum)]/60 text-sm">No new messages</p>
                <p className="text-[var(--platinum)]/40 text-xs mt-1">
                  Messages from the developer will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
