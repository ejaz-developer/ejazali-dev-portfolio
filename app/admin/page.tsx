'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FolderKanban,
  Users,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

interface Stats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalClients: number;
  pendingMessages: number;
  totalRevenue: number;
  recentProjects: Array<{
    _id: string;
    title: string;
    status: string;
    client: { firstName: string; lastName: string };
    progress: number;
  }>;
  recentMessages: Array<{
    _id: string;
    subject: string;
    sender: { firstName: string; lastName: string };
    createdAt: string;
    read: boolean;
  }>;
}

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Projects',
      value: stats?.totalProjects || 0,
      icon: FolderKanban,
      change: '+12%',
      changeType: 'positive',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Active Clients',
      value: stats?.totalClients || 0,
      icon: Users,
      change: '+8%',
      changeType: 'positive',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Pending Messages',
      value: stats?.pendingMessages || 0,
      icon: MessageSquare,
      change: '-5%',
      changeType: 'negative',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Revenue',
      value: `$${(stats?.totalRevenue || 0).toLocaleString()}`,
      icon: DollarSign,
      change: '+23%',
      changeType: 'positive',
      color: 'from-[var(--orange-web)] to-red-500',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'in_progress':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'on_hold':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--orange-web)]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold text-[var(--white)]">Overview</h2>
        <p className="text-[var(--platinum)]/60 mt-1">
          Welcome back! Here&apos;s what&apos;s happening with your portfolio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm overflow-hidden relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-[var(--white)]">{stat.value}</p>
                  <p className="text-sm text-[var(--platinum)]/60 mt-1">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Status Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-[var(--white)] flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[var(--orange-web)]" />
                Project Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Clock className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-[var(--platinum)]">In Progress</span>
                </div>
                <span className="text-[var(--white)] font-semibold">
                  {stats?.activeProjects || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-[var(--platinum)]">Completed</span>
                </div>
                <span className="text-[var(--white)] font-semibold">
                  {stats?.completedProjects || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500/10">
                    <AlertCircle className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span className="text-[var(--platinum)]">Pending</span>
                </div>
                <span className="text-[var(--white)] font-semibold">
                  {(stats?.totalProjects || 0) -
                    (stats?.activeProjects || 0) -
                    (stats?.completedProjects || 0)}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-[var(--white)] flex items-center gap-2">
                <FolderKanban className="h-5 w-5 text-[var(--orange-web)]" />
                Recent Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats?.recentProjects && stats.recentProjects.length > 0 ? (
                <div className="space-y-4">
                  {stats.recentProjects.map((project) => (
                    <div
                      key={project._id}
                      className="flex items-center justify-between p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-[var(--white)]">{project.title}</h4>
                        <p className="text-sm text-[var(--platinum)]/60">
                          {project.client?.firstName} {project.client?.lastName}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-24">
                          <div className="h-2 bg-[var(--black)] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[var(--orange-web)] to-red-500 transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-[var(--platinum)]/60 mt-1 text-right">
                            {project.progress}%
                          </p>
                        </div>
                        <Badge variant="outline" className={getStatusColor(project.status)}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-[var(--platinum)]/60">No projects yet</div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Messages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-[var(--white)] flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[var(--orange-web)]" />
              Recent Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            {stats?.recentMessages && stats.recentMessages.length > 0 ? (
              <div className="space-y-3">
                {stats.recentMessages.map((message) => (
                  <div
                    key={message._id}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                      message.read
                        ? 'bg-[var(--black)]/20 border-[var(--platinum)]/5'
                        : 'bg-[var(--orange-web)]/5 border-[var(--orange-web)]/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {!message.read && (
                        <div className="w-2 h-2 bg-[var(--orange-web)] rounded-full" />
                      )}
                      <div>
                        <h4 className="font-medium text-[var(--white)]">{message.subject}</h4>
                        <p className="text-sm text-[var(--platinum)]/60">
                          From: {message.sender?.firstName} {message.sender?.lastName}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-[var(--platinum)]/40">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-[var(--platinum)]/60">No messages yet</div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
