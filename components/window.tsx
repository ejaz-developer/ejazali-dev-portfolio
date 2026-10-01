import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function WindowBar({ title }: { title: string }) {
  return (
    <div className="window-bar">
      <span className="flex gap-[7px]" aria-hidden="true">
        <span className="tl tl-red" />
        <span className="tl tl-amber" />
        <span className="tl tl-green" />
      </span>
      <span className="window-title">{title}</span>
      <span className="ml-auto w-[47px]" aria-hidden="true" />
    </div>
  );
}

export default function Window({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("window", className)}>
      <WindowBar title={title} />
      {children}
    </div>
  );
}
