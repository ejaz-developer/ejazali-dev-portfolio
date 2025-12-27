'use client';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Main black background */}
      <div className="absolute inset-0 bg-[var(--black)]"></div>

      {/* Grid Pattern */}
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

      {/* Radial Grid Accent */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, var(--orange-web) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--black)] via-[var(--oxford-blue)]/5 to-[var(--black)]"></div>

      {/* Large animated orbs */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--orange-web)]/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[var(--oxford-blue)]/15 rounded-full blur-[120px] animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />
      <div
        className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] bg-[var(--orange-web)]/8 rounded-full blur-[80px] animate-pulse"
        style={{ animationDuration: '12s', animationDelay: '4s' }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--orange-web)]/60 rounded-full animate-ping"
        style={{ animationDuration: '3s' }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-3 h-3 bg-[var(--platinum)]/40 rounded-full animate-ping"
        style={{ animationDuration: '4s', animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[var(--orange-web)]/50 rounded-full animate-ping"
        style={{ animationDuration: '5s', animationDelay: '2s' }}
      />

      {/* Corner gradient accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[var(--orange-web)]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[var(--oxford-blue)]/10 to-transparent" />
    </div>
  );
}
