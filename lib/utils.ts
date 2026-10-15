import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pad2(n: number): string {
  return String(n).padStart(2, "0")
}

export function externalLinkProps(
  href: string,
): { target?: "_blank"; rel?: string } {
  if (href.startsWith("mailto:")) return {}
  return { target: "_blank", rel: "noopener noreferrer" }
}
