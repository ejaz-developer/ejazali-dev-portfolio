import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  Home,
  Briefcase,
  MessageSquare,
  Star,
  FileText,
  BarChart3,
} from 'lucide-react';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Check if user is admin
  await connectDB();
  const dbUser = await User.findOne({ clerkId: user.id });

  if (!dbUser || dbUser.role !== 'admin') {
    redirect('/dashboard');
  }

  const navigation = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
    { name: 'Clients', href: '/admin/clients', icon: Users },
    { name: 'Services', href: '/admin/services', icon: Briefcase },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { name: 'Testimonials', href: '/admin/testimonials', icon: Star },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Site Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] relative">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--platinum) 1px, transparent 1px),
              linear-gradient(90deg, var(--platinum) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed -top-40 -left-40 w-[400px] h-[400px] bg-[var(--orange-web)]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[var(--oxford-blue)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-[var(--platinum)]/10 bg-[var(--black)]/80 backdrop-blur-xl">
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center border-b border-[var(--platinum)]/10 px-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--orange-web)] to-red-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[var(--white)] font-bold text-xl font-mono">A</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-[var(--orange-web)]/50 to-red-500/50 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                </div>
                <div>
                  <span className="text-[var(--white)] font-bold text-lg font-mono block">
                    Admin Panel
                  </span>
                  <span className="text-[var(--orange-web)] text-xs">DevForge</span>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-[var(--platinum)]/80 hover:bg-[var(--oxford-blue)]/30 hover:text-[var(--white)] transition-all duration-200 group"
                >
                  <item.icon className="h-5 w-5 group-hover:text-[var(--orange-web)] transition-colors" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Bottom Links */}
            <div className="border-t border-[var(--platinum)]/10 p-4 space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-[var(--platinum)]/60 hover:bg-[var(--oxford-blue)]/20 hover:text-[var(--white)] transition-all duration-200"
              >
                <FileText className="h-5 w-5" />
                <span className="font-medium">Client View</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-[var(--platinum)]/60 hover:bg-[var(--oxford-blue)]/20 hover:text-[var(--white)] transition-all duration-200"
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">View Site</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Header */}
          <header className="sticky top-0 z-30 h-16 border-b border-[var(--platinum)]/10 bg-[var(--black)]/80 backdrop-blur-xl">
            <div className="flex h-full items-center justify-between px-6">
              <div>
                <h1 className="text-lg font-semibold text-[var(--white)]">Admin Dashboard</h1>
                <p className="text-sm text-[var(--platinum)]/60">
                  Manage your portfolio and clients
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right mr-2">
                  <p className="text-sm font-medium text-[var(--white)]">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-[var(--orange-web)]">Administrator</p>
                </div>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-10 h-10 ring-2 ring-[var(--orange-web)]/50',
                    },
                  }}
                />
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
