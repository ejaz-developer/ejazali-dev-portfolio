import type { ComponentType } from "react";
import { Github, Linkedin, Mail, Twitter } from "@/components/icons";
import type { IconProps } from "@/components/icons";

/**
 * Canonical site URL. Swap this single line when moving to a custom domain.
 */
export const siteUrl = "https://hello-ejaz.vercel.app";

export const siteName = "Ejaz Ali";
export const siteTitle = "Ejaz Ali — Web Developer";
export const siteTagline =
  "Booking platforms and business web apps, from requirements to working software.";
export const siteDescription =
  "Web developer building booking platforms and business web apps that help entrepreneurs streamline operations and grow.";

export const contact = {
  email: "hello.ejaz@outlook.com",
  linkedin: "https://www.linkedin.com/in/hello-ejaz/",
} as const;

/**
 * The one status vocabulary for wherever a product is described (§4/§5).
 */
export type ProjectStatus = "Live" | "In development";

export type StatusTone = "teal" | "maize";

export function statusTone(status: ProjectStatus): StatusTone {
  return status === "Live" ? "teal" : "maize";
}

/**
 * Canonical flagship-first order (§5). Drives case-study numbering so the
 * counter tracks the roster, not the alphabet.
 */
export const caseStudyOrder = [
  "bookmygb",
  "record-keeper",
  "cogniclick",
  "audiothought",
] as const;

export interface Social {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
}

export const socials: Social[] = [
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  { label: "GitHub", href: "https://github.com/ejaz-developer", icon: Github },
  { label: "X", href: "https://x.com/helloejazoff", icon: Twitter },
];
