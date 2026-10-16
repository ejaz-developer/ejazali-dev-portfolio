import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
 * Reveals its children as they scroll into view using a CSS scroll-driven
 * animation (compositor thread, zero JS). Where the timeline API is
 * unsupported the content simply renders in place — never hidden.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
