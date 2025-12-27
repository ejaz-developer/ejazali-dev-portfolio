import { currentUser } from '@clerk/nextjs/server';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Building2, Phone, Mail, Shield, Bell } from 'lucide-react';

export default async function SettingsPage() {
  const user = await currentUser();

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white)] font-mono">
          <span className="text-[var(--orange-web)]">Settings</span>
        </h1>
        <p className="text-[var(--platinum)]/60 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Section */}
      <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
            <User className="w-5 h-5 text-[var(--orange-web)]" />
            Profile Information
          </CardTitle>
          <CardDescription className="text-[var(--platinum)]/60">
            Your personal information and account details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20 ring-4 ring-[var(--orange-web)]/30">
              <AvatarImage src={user?.imageUrl} alt={user?.firstName || 'User'} />
              <AvatarFallback className="bg-[var(--oxford-blue)] text-[var(--orange-web)] text-2xl font-bold">
                {user?.firstName?.[0]}
                {user?.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-[var(--white)]">
                {user?.firstName} {user?.lastName}
              </h3>
              <p className="text-[var(--platinum)]/60">{user?.emailAddresses[0]?.emailAddress}</p>
              <p className="text-xs text-[var(--platinum)]/40 mt-1">
                Member since{' '}
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </p>
            </div>
          </div>

          <Separator className="bg-[var(--platinum)]/10" />

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[var(--platinum)] flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name
              </Label>
              <Input
                id="firstName"
                defaultValue={user?.firstName || ''}
                className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] focus:border-[var(--orange-web)]/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[var(--platinum)] flex items-center gap-2">
                <User className="w-4 h-4" />
                Last Name
              </Label>
              <Input
                id="lastName"
                defaultValue={user?.lastName || ''}
                className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] focus:border-[var(--orange-web)]/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[var(--platinum)] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.emailAddresses[0]?.emailAddress || ''}
                disabled
                className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--platinum)]/60 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-[var(--platinum)] flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Company (Optional)
              </Label>
              <Input
                id="company"
                placeholder="Your company name"
                className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="phone" className="text-[var(--platinum)] flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)] placeholder:text-[var(--platinum)]/40 focus:border-[var(--orange-web)]/50"
              />
            </div>
          </div>

          <Button className="bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90 text-[var(--black)] font-semibold">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
            <Bell className="w-5 h-5 text-[var(--orange-web)]" />
            Notification Preferences
          </CardTitle>
          <CardDescription className="text-[var(--platinum)]/60">
            Choose what updates you want to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              label: 'Project Updates',
              description: 'Get notified when your project status changes',
            },
            { label: 'New Messages', description: 'Receive notifications for new messages' },
            {
              label: 'Weekly Summary',
              description: 'Get a weekly summary of your project progress',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5"
            >
              <div>
                <p className="font-medium text-[var(--white)]">{item.label}</p>
                <p className="text-sm text-[var(--platinum)]/60">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-[var(--platinum)]/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--orange-web)]"></div>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Security Section */}
      <Card className="bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-[var(--white)] font-mono flex items-center gap-2">
            <Shield className="w-5 h-5 text-[var(--orange-web)]" />
            Security
          </CardTitle>
          <CardDescription className="text-[var(--platinum)]/60">
            Manage your account security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[var(--white)]">Password</p>
                <p className="text-sm text-[var(--platinum)]/60">
                  Manage your password through Clerk authentication
                </p>
              </div>
              <Button
                variant="outline"
                className="border-[var(--platinum)]/20 text-[var(--platinum)] hover:bg-[var(--platinum)]/10"
              >
                Manage in Clerk
              </Button>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[var(--white)]">Two-Factor Authentication</p>
                <p className="text-sm text-[var(--platinum)]/60">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button
                variant="outline"
                className="border-[var(--platinum)]/20 text-[var(--platinum)] hover:bg-[var(--platinum)]/10"
              >
                Setup 2FA
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
