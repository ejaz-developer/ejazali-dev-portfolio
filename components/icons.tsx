import type { ReactNode, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/* Brand marks — filled */
export function Github({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Linkedin({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Twitter({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* Utility marks — stroked at a single 1.5 weight everywhere */
function Stroke({
  size = 24,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Stroke>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </Stroke>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Stroke>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </Stroke>
  );
}

export function Mail(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7.5 7.2 5.3a2 2 0 0 0 2 0l7.2-5.3" />
    </Stroke>
  );
}

/* Feature marks — deliberately not the usual globe/briefcase/sparkles */
export function WindowApp(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6.4 6.5h.01M9.2 6.5h.01" />
      <path d="M7 13.5h7M7 16.5h11" />
    </Stroke>
  );
}

export function Receipt(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 3h12v18l-3-1.6L12 21l-3-1.6L6 21Z" />
      <path d="M9 8.5h6M9 12h6" />
    </Stroke>
  );
}

export function Chip(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9 2.5v4M15 2.5v4M9 17.5v4M15 17.5v4" />
      <path d="M2.5 9h4M2.5 15h4M17.5 9h4M17.5 15h4" />
    </Stroke>
  );
}

export function Layers(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Stroke>
  );
}
