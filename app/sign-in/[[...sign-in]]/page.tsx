import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--black)] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--platinum) 1px, transparent 1px),
              linear-gradient(90deg, var(--platinum) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[var(--orange-web)]/15 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--oxford-blue)]/20 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[var(--white)] mb-2 font-mono">
            Welcome to <span className="text-[var(--orange-web)]">DevForge</span>
          </h1>
          <p className="text-[var(--platinum)]/70">Sign in to access your dashboard</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 'bg-[var(--orange-web)] hover:bg-[var(--orange-web)]/90',
              card: 'bg-[var(--oxford-blue)]/30 backdrop-blur-xl border border-[var(--platinum)]/10',
              headerTitle: 'text-[var(--white)]',
              headerSubtitle: 'text-[var(--platinum)]/70',
              socialButtonsBlockButton:
                'border-[var(--platinum)]/20 text-[var(--white)] hover:bg-[var(--platinum)]/10',
              formFieldLabel: 'text-[var(--platinum)]',
              formFieldInput:
                'bg-[var(--black)]/50 border-[var(--platinum)]/20 text-[var(--white)]',
              footerActionLink: 'text-[var(--orange-web)] hover:text-[var(--orange-web)]/80',
            },
          }}
        />
      </div>
    </div>
  );
}
