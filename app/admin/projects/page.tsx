'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Edit, Trash2, FolderKanban, Search, Calendar, User, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

interface Project {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  budget: number;
  startDate?: string;
  endDate?: string;
  client: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  createdAt: string;
}

interface Client {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  in_progress: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  on_hold: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  completed: 'bg-green-500/10 text-green-400 border-green-500/30',
  cancelled: 'bg-red-500/10 text-red-400 border-red-500/30',
};

const priorityColors: Record<string, string> = {
  low: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
  medium: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  high: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  urgent: 'bg-red-500/10 text-red-400 border-red-500/30',
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    clientId: '',
    status: 'pending',
    priority: 'medium',
    progress: 0,
    budget: 0,
    startDate: '',
    endDate: '',
  });

  const fetchData = useCallback(async () => {
    try {
      const [projectsRes, clientsRes] = await Promise.all([
        fetch('/api/admin/projects'),
        fetch('/api/admin/clients'),
      ]);

      if (projectsRes.ok) {
        const projectsData = await projectsRes.json();
        setProjects(projectsData);
      }

      if (clientsRes.ok) {
        const clientsData = await clientsRes.json();
        setClients(clientsData.filter((c: Client & { role: string }) => c.role === 'client'));
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingProject
        ? `/api/admin/projects/${editingProject._id}`
        : '/api/admin/projects';

      const response = await fetch(url, {
        method: editingProject ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(editingProject ? 'Project updated!' : 'Project created!');
        setDialogOpen(false);
        resetForm();
        fetchData();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to save project');
      }
    } catch (error) {
      console.error('Failed to save project:', error);
      toast.error('Failed to save project');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Project deleted!');
        fetchData();
      } else {
        toast.error('Failed to delete project');
      }
    } catch (error) {
      console.error('Failed to delete project:', error);
      toast.error('Failed to delete project');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      clientId: project.client._id,
      status: project.status,
      priority: project.priority,
      progress: project.progress,
      budget: project.budget,
      startDate: project.startDate ? project.startDate.split('T')[0] : '',
      endDate: project.endDate ? project.endDate.split('T')[0] : '',
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      description: '',
      clientId: '',
      status: 'pending',
      priority: 'medium',
      progress: 0,
      budget: 0,
      startDate: '',
      endDate: '',
    });
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client?.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client?.lastName?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[var(--white)]">Projects</h2>
          <p className="text-[var(--platinum)]/60 mt-1">Manage all client projects</p>
        </div>
        <Dialog
          open={dialogOpen}
          onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) resetForm();
          }}
        >
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20 text-[var(--white)] max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Project' : 'Create New Project'}</DialogTitle>
              <DialogDescription className="text-[var(--platinum)]/60">
                {editingProject
                  ? 'Update the project details below'
                  : 'Fill in the details to create a new project'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Project title"
                  className="bg-[var(--black)]/50 border-[var(--platinum)]/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Project description..."
                  className="bg-[var(--black)]/50 border-[var(--platinum)]/20 min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Client</Label>
                <Select
                  value={formData.clientId}
                  onValueChange={(value) => setFormData({ ...formData, clientId: value })}
                >
                  <SelectTrigger className="bg-[var(--black)]/50 border-[var(--platinum)]/20">
                    <SelectValue placeholder="Select client" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20">
                    {clients.map((client) => (
                      <SelectItem
                        key={client._id}
                        value={client._id}
                        className="text-[var(--white)]"
                      >
                        {client.firstName} {client.lastName} ({client.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger className="bg-[var(--black)]/50 border-[var(--platinum)]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20">
                      <SelectItem value="pending" className="text-[var(--white)]">
                        Pending
                      </SelectItem>
                      <SelectItem value="in_progress" className="text-[var(--white)]">
                        In Progress
                      </SelectItem>
                      <SelectItem value="on_hold" className="text-[var(--white)]">
                        On Hold
                      </SelectItem>
                      <SelectItem value="completed" className="text-[var(--white)]">
                        Completed
                      </SelectItem>
                      <SelectItem value="cancelled" className="text-[var(--white)]">
                        Cancelled
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  >
                    <SelectTrigger className="bg-[var(--black)]/50 border-[var(--platinum)]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20">
                      <SelectItem value="low" className="text-[var(--white)]">
                        Low
                      </SelectItem>
                      <SelectItem value="medium" className="text-[var(--white)]">
                        Medium
                      </SelectItem>
                      <SelectItem value="high" className="text-[var(--white)]">
                        High
                      </SelectItem>
                      <SelectItem value="urgent" className="text-[var(--white)]">
                        Urgent
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Progress ({formData.progress}%)</Label>
                  <Input
                    type="range"
                    min="0"
                    max="100"
                    value={formData.progress}
                    onChange={(e) =>
                      setFormData({ ...formData, progress: parseInt(e.target.value) })
                    }
                    className="bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Budget ($)</Label>
                  <Input
                    type="number"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: parseFloat(e.target.value) || 0 })
                    }
                    placeholder="0.00"
                    className="bg-[var(--black)]/50 border-[var(--platinum)]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="bg-[var(--black)]/50 border-[var(--platinum)]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="bg-[var(--black)]/50 border-[var(--platinum)]/20"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                  className="border-[var(--platinum)]/20 text-[var(--platinum)] hover:bg-[var(--platinum)]/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90"
                >
                  {editingProject ? 'Update Project' : 'Create Project'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--platinum)]/40" />
          <Input
            placeholder="Search projects or clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20">
            <SelectItem value="all" className="text-[var(--white)]">
              All Status
            </SelectItem>
            <SelectItem value="pending" className="text-[var(--white)]">
              Pending
            </SelectItem>
            <SelectItem value="in_progress" className="text-[var(--white)]">
              In Progress
            </SelectItem>
            <SelectItem value="on_hold" className="text-[var(--white)]">
              On Hold
            </SelectItem>
            <SelectItem value="completed" className="text-[var(--white)]">
              Completed
            </SelectItem>
            <SelectItem value="cancelled" className="text-[var(--white)]">
              Cancelled
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Projects List */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm hover:border-[var(--orange-web)]/20 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--orange-web)] to-red-500 hidden sm:block">
                          <FolderKanban className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[var(--white)]">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[var(--platinum)]/60 mt-1 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 mt-3">
                            <div className="flex items-center gap-1 text-sm text-[var(--platinum)]/60">
                              <User className="h-4 w-4" />
                              {project.client?.firstName} {project.client?.lastName}
                            </div>
                            {project.budget > 0 && (
                              <div className="flex items-center gap-1 text-sm text-[var(--platinum)]/60">
                                <DollarSign className="h-4 w-4" />${project.budget.toLocaleString()}
                              </div>
                            )}
                            {project.endDate && (
                              <div className="flex items-center gap-1 text-sm text-[var(--platinum)]/60">
                                <Calendar className="h-4 w-4" />
                                Due: {new Date(project.endDate).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={statusColors[project.status]}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                        <Badge variant="outline" className={priorityColors[project.priority]}>
                          {project.priority}
                        </Badge>
                      </div>

                      <div className="w-32">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-[var(--platinum)]/60">Progress</span>
                          <span className="text-xs text-[var(--white)]">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-[var(--platinum)]/60 hover:text-[var(--orange-web)]"
                          onClick={() => handleEdit(project)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-[var(--platinum)]/60 hover:text-red-500"
                          onClick={() => handleDelete(project._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="p-4 rounded-full bg-[var(--oxford-blue)]/50 mb-4">
              <FolderKanban className="h-8 w-8 text-[var(--platinum)]/60" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">No Projects Found</h3>
            <p className="text-[var(--platinum)]/60 text-center max-w-sm mb-6">
              {searchTerm || statusFilter !== 'all'
                ? 'Try adjusting your search or filter criteria.'
                : 'Create your first project to get started.'}
            </p>
            <Button
              onClick={() => setDialogOpen(true)}
              className="bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create First Project
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
