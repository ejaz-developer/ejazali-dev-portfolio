'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminSetupPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSetup = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/setup', {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setTimeout(() => {
          router.push('/admin');
        }, 2000);
      } else {
        setStatus('error');
        setMessage(data.error);
      }
    } catch {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--black)] flex items-center justify-center p-6 relative">
      {/* Background Effects */}
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
      <div className="fixed -top-40 -left-40 w-[400px] h-[400px] bg-[var(--orange-web)]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[var(--oxford-blue)]/10 rounded-full blur-[120px] pointer-events-none" />

      <Card className="w-full max-w-md bg-[var(--oxford-blue)]/20 border-[var(--platinum)]/10 backdrop-blur-xl relative z-10">
        <CardHeader className="text-center pb-2">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--orange-web)] to-red-500 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-[var(--white)]">Admin Setup</CardTitle>
          <CardDescription className="text-[var(--platinum)]/60">
            Set up the first admin account for your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <SignedOut>
            <div className="text-center space-y-4">
              <p className="text-[var(--platinum)]/80">
                Please sign in first to set up your admin account.
              </p>
              <SignInButton mode="modal">
                <Button className="w-full bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90">
                  Sign In to Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </div>
          </SignedOut>

          <SignedIn>
            {status === 'idle' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[var(--black)]/30 border border-[var(--platinum)]/10">
                  <h4 className="font-medium text-[var(--white)] mb-2">What this does:</h4>
                  <ul className="space-y-2 text-sm text-[var(--platinum)]/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      Sets your account as the admin
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      Gives access to admin dashboard
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      Allows managing services, projects & clients
                    </li>
                  </ul>
                </div>
                <Button
                  onClick={handleSetup}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[var(--orange-web)] to-red-500 hover:opacity-90"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2" />
                      Setting up...
                    </>
                  ) : (
                    <>
                      Setup Admin Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )}

            {status === 'success' && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-green-400 font-medium">{message}</p>
                <p className="text-[var(--platinum)]/60 text-sm">
                  Redirecting to admin dashboard...
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-red-400 font-medium">{message}</p>
                <Button
                  onClick={() => router.push('/admin')}
                  variant="outline"
                  className="border-[var(--platinum)]/20 text-[var(--platinum)]"
                >
                  Go to Admin Dashboard
                </Button>
              </div>
            )}
          </SignedIn>
        </CardContent>
      </Card>
    </div>
  );
}
