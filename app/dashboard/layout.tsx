import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FolderKanban, MessageSquare, Settings, Home } from 'lucide-react';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
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
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--orange-web)] to-[var(--platinum)] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[var(--oxford-blue)] font-bold text-xl font-mono">D</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-[var(--orange-web)]/50 to-[var(--platinum)]/50 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
                </div>
                <span className="text-[var(--white)] font-bold text-xl font-mono">
                  Dev<span className="text-[var(--orange-web)]">Forge</span>
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-4">
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

            {/* Back to Home */}
            <div className="border-t border-[var(--platinum)]/10 p-4">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-[var(--platinum)]/60 hover:bg-[var(--oxford-blue)]/20 hover:text-[var(--white)] transition-all duration-200"
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
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
                <h1 className="text-lg font-semibold text-[var(--white)]">
                  Welcome back, {user.firstName || 'User'}!
                </h1>
                <p className="text-sm text-[var(--platinum)]/60">
                  Manage your projects and track progress
                </p>
              </div>
              <div className="flex items-center gap-4">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-10 h-10 ring-2 ring-[var(--orange-web)]/30',
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
