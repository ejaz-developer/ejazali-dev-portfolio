'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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
import {
  Plus,
  Edit,
  Trash2,
  GripVertical,
  Code,
  Palette,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  Search,
  Box,
  LayoutGrid,
  Layers,
  Monitor,
  Server,
  Settings,
} from 'lucide-react';
import { toast } from 'sonner';

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  popular: boolean;
  order: number;
  isActive: boolean;
}

const iconOptions = [
  { value: 'Code', label: 'Code', icon: Code },
  { value: 'Palette', label: 'Design', icon: Palette },
  { value: 'Globe', label: 'Web', icon: Globe },
  { value: 'Smartphone', label: 'Mobile', icon: Smartphone },
  { value: 'Database', label: 'Database', icon: Database },
  { value: 'Cloud', label: 'Cloud', icon: Cloud },
  { value: 'Shield', label: 'Security', icon: Shield },
  { value: 'Zap', label: 'Performance', icon: Zap },
  { value: 'Search', label: 'SEO', icon: Search },
  { value: 'Box', label: 'Package', icon: Box },
  { value: 'LayoutGrid', label: 'Layout', icon: LayoutGrid },
  { value: 'Layers', label: 'Stack', icon: Layers },
  { value: 'Monitor', label: 'Display', icon: Monitor },
  { value: 'Server', label: 'Server', icon: Server },
  { value: 'Settings', label: 'Settings', icon: Settings },
];

const colorOptions = [
  { value: 'from-blue-500 to-cyan-500', label: 'Blue Cyan' },
  { value: 'from-purple-500 to-pink-500', label: 'Purple Pink' },
  { value: 'from-green-500 to-emerald-500', label: 'Green Emerald' },
  { value: 'from-orange-500 to-red-500', label: 'Orange Red' },
  { value: 'from-yellow-500 to-orange-500', label: 'Yellow Orange' },
  { value: 'from-indigo-500 to-purple-500', label: 'Indigo Purple' },
  { value: 'from-teal-500 to-green-500', label: 'Teal Green' },
  { value: 'from-rose-500 to-pink-500', label: 'Rose Pink' },
];

const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Code,
    Palette,
    Globe,
    Smartphone,
    Database,
    Cloud,
    Shield,
    Zap,
    Search,
    Box,
    LayoutGrid,
    Layers,
    Monitor,
    Server,
    Settings,
  };
  return iconMap[iconName] || Code;
};

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'Code',
    features: '',
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    isActive: true,
  });

  const fetchServices = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Failed to fetch services:', error);
      toast.error('Failed to load services');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceData = {
      ...formData,
      features: formData.features.split('\n').filter((f) => f.trim()),
    };

    try {
      const url = editingService
        ? `/api/admin/services/${editingService._id}`
        : '/api/admin/services';

      const response = await fetch(url, {
        method: editingService ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });

      if (response.ok) {
        toast.success(editingService ? 'Service updated!' : 'Service created!');
        setDialogOpen(false);
        resetForm();
        fetchServices();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to save service');
      }
    } catch (error) {
      console.error('Failed to save service:', error);
      toast.error('Failed to save service');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Service deleted!');
        fetchServices();
      } else {
        toast.error('Failed to delete service');
      }
    } catch (error) {
      console.error('Failed to delete service:', error);
      toast.error('Failed to delete service');
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      features: service.features.join('\n'),
      color: service.color,
      popular: service.popular,
      isActive: service.isActive,
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setEditingService(null);
    setFormData({
      title: '',
      description: '',
      icon: 'Code',
      features: '',
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      isActive: true,
    });
  };

  const toggleStatus = async (service: Service) => {
    try {
      const response = await fetch(`/api/admin/services/${service._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !service.isActive }),
      });

      if (response.ok) {
        toast.success(`Service ${service.isActive ? 'deactivated' : 'activated'}!`);
        fetchServices();
      }
    } catch (error) {
      console.error('Failed to toggle status:', error);
      toast.error('Failed to update status');
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[var(--white)]">Services</h2>
          <p className="text-[var(--platinum)]/60 mt-1">
            Manage the services displayed on your portfolio
          </p>
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
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20 text-[var(--white)] max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
              <DialogDescription className="text-[var(--platinum)]/60">
                {editingService
                  ? 'Update the service details below'
                  : 'Fill in the details to create a new service'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Web Development"
                  className="bg-[var(--black)]/50 border-[var(--platinum)]/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the service..."
                  className="bg-[var(--black)]/50 border-[var(--platinum)]/20 min-h-[100px]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Icon</Label>
                  <Select
                    value={formData.icon}
                    onValueChange={(value) => setFormData({ ...formData, icon: value })}
                  >
                    <SelectTrigger className="bg-[var(--black)]/50 border-[var(--platinum)]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20">
                      {iconOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-[var(--white)]"
                        >
                          <div className="flex items-center gap-2">
                            <option.icon className="h-4 w-4" />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Color Theme</Label>
                  <Select
                    value={formData.color}
                    onValueChange={(value) => setFormData({ ...formData, color: value })}
                  >
                    <SelectTrigger className="bg-[var(--black)]/50 border-[var(--platinum)]/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20">
                      {colorOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-[var(--white)]"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded bg-gradient-to-r ${option.value}`} />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Features (one per line)</Label>
                <Textarea
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  placeholder="Responsive Design&#10;SEO Optimization&#10;Fast Loading"
                  className="bg-[var(--black)]/50 border-[var(--platinum)]/20 min-h-[120px]"
                  required
                />
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.popular}
                    onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                    className="rounded border-[var(--platinum)]/20 bg-[var(--black)]/50 text-[var(--orange-web)]"
                  />
                  <span className="text-sm text-[var(--platinum)]">Mark as Popular</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="rounded border-[var(--platinum)]/20 bg-[var(--black)]/50 text-[var(--orange-web)]"
                  />
                  <span className="text-sm text-[var(--platinum)]">Active</span>
                </label>
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
                  {editingService ? 'Update Service' : 'Create Service'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Services Grid */}
      {services.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm overflow-hidden relative group ${
                    !service.isActive ? 'opacity-60' : ''
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Drag Handle & Actions */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-[var(--platinum)]/60 hover:text-[var(--white)] cursor-grab"
                    >
                      <GripVertical className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-[var(--platinum)]/60 hover:text-[var(--orange-web)]"
                      onClick={() => handleEdit(service)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-[var(--platinum)]/60 hover:text-red-500"
                      onClick={() => handleDelete(service._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        {service.popular && (
                          <Badge className="bg-[var(--orange-web)]/10 text-[var(--orange-web)] border-[var(--orange-web)]/30">
                            Popular
                          </Badge>
                        )}
                        <Badge
                          className={`cursor-pointer ${
                            service.isActive
                              ? 'bg-green-500/10 text-green-400 border-green-500/30'
                              : 'bg-gray-500/10 text-gray-400 border-gray-500/30'
                          }`}
                          onClick={() => toggleStatus(service)}
                        >
                          {service.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-[var(--white)]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--platinum)]/70 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-[var(--platinum)]/60"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                          />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <p className="text-xs text-[var(--platinum)]/40">
                          +{service.features.length - 3} more features
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="p-4 rounded-full bg-[var(--oxford-blue)]/50 mb-4">
              <Settings className="h-8 w-8 text-[var(--platinum)]/60" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">No Services Yet</h3>
            <p className="text-[var(--platinum)]/60 text-center max-w-sm mb-6">
              Start by adding services that you offer to your clients.
            </p>
            <Button
              onClick={() => setDialogOpen(true)}
              className="bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Service
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
