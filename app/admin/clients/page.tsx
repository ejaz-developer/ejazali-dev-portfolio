'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Users, Mail, Calendar, FolderKanban, Shield, MoreVertical, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface Client {
  _id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  role: 'client' | 'admin';
  createdAt: string;
  projectCount?: number;
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const fetchClients = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/clients');
      if (response.ok) {
        const data = await response.json();
        setClients(data);
      }
    } catch (error) {
      console.error('Failed to fetch clients:', error);
      toast.error('Failed to load clients');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const updateRole = async (userId: string, newRole: 'client' | 'admin') => {
    try {
      const response = await fetch(`/api/admin/clients/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        toast.success(`User role updated to ${newRole}!`);
        fetchClients();
      } else {
        toast.error('Failed to update role');
      }
    } catch (error) {
      console.error('Failed to update role:', error);
      toast.error('Failed to update role');
    }
  };

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === 'all' || client.role === roleFilter;

    return matchesSearch && matchesRole;
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
          <h2 className="text-3xl font-bold text-[var(--white)]">Clients</h2>
          <p className="text-[var(--platinum)]/60 mt-1">Manage your clients and their access</p>
        </div>
        <Badge variant="outline" className="text-[var(--orange-web)] border-[var(--orange-web)]/30">
          {clients.length} Total Users
        </Badge>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--platinum)]/40" />
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px] bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20">
            <SelectItem value="all" className="text-[var(--white)]">
              All Roles
            </SelectItem>
            <SelectItem value="client" className="text-[var(--white)]">
              Clients
            </SelectItem>
            <SelectItem value="admin" className="text-[var(--white)]">
              Admins
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clients Grid */}
      {filteredClients.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredClients.map((client, index) => (
            <motion.div
              key={client._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm hover:border-[var(--orange-web)]/20 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-[var(--platinum)]/10">
                        <AvatarImage src={client.profileImage} />
                        <AvatarFallback className="bg-gradient-to-br from-[var(--orange-web)] to-red-500 text-white">
                          {client.firstName?.[0]}
                          {client.lastName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-[var(--white)]">
                          {client.firstName} {client.lastName}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant="outline"
                            className={
                              client.role === 'admin'
                                ? 'bg-[var(--orange-web)]/10 text-[var(--orange-web)] border-[var(--orange-web)]/30'
                                : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            }
                          >
                            <Shield className="h-3 w-3 mr-1" />
                            {client.role}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[var(--platinum)]/60 hover:text-[var(--white)] opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-[var(--oxford-blue)] border-[var(--platinum)]/20"
                      >
                        <DropdownMenuItem
                          className="text-[var(--white)] hover:bg-[var(--platinum)]/10"
                          onClick={() =>
                            updateRole(client._id, client.role === 'admin' ? 'client' : 'admin')
                          }
                        >
                          Make {client.role === 'admin' ? 'Client' : 'Admin'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[var(--platinum)]/60">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{client.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--platinum)]/60">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {new Date(client.createdAt).toLocaleDateString()}</span>
                    </div>
                    {client.projectCount !== undefined && (
                      <div className="flex items-center gap-2 text-sm text-[var(--platinum)]/60">
                        <FolderKanban className="h-4 w-4" />
                        <span>{client.projectCount} Projects</span>
                      </div>
                    )}
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
              <Users className="h-8 w-8 text-[var(--platinum)]/60" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">No Clients Found</h3>
            <p className="text-[var(--platinum)]/60 text-center max-w-sm">
              {searchTerm || roleFilter !== 'all'
                ? 'Try adjusting your search or filter criteria.'
                : 'Clients will appear here when they sign up.'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
