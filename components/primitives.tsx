import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type StampTone = "terracotta" | "teal" | "maize" | "ink";

interface BaseProps {
  className?: string;
}

export function Stamp({
  children,
  tone = "terracotta",
  className,
}: BaseProps & { children: ReactNode; tone?: StampTone }) {
  return (
    <span className={cn("stamp", className)} data-tone={tone}>
      {children}
    </span>
  );
}

export function MonoLabel({ children, className }: BaseProps & { children: ReactNode }) {
  return <span className={cn("mono-label", className)}>{children}</span>;
}

export function DashedRule({ className }: BaseProps) {
  return (
    <div role="separator" aria-hidden="true" className={cn("rule-dashed", className)} />
  );
}

export function Perforation({ className }: BaseProps) {
  return <div aria-hidden="true" className={cn("perforation", className)} />;
}

export function LedgerRow({
  label,
  value,
  href,
  className,
}: BaseProps & {
  label: ReactNode;
  value: ReactNode;
  href?: string;
}) {
  return (
    <div className={cn("ledger-row", className)}>
      <span className="ledger-label">{label}</span>
      <span className="ledger-leader" aria-hidden="true" />
      <span className="ledger-value">
        {href ? (
          <a href={href} className="link-underline">
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

export function TicketNo({ value, className }: BaseProps & { value: ReactNode }) {
  return <span className={cn("ticket-no", className)}>{value}</span>;
}

export function ScreenshotFrame({
  label,
  caption,
  ticket,
  children,
  className,
}: BaseProps & {
  label?: ReactNode;
  caption?: ReactNode;
  ticket?: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure className={cn("screenshot-frame", className)}>
      {(label || ticket) && (
        <div className="screenshot-frame-head">
          {label ? <Stamp tone="ink">{label}</Stamp> : <span aria-hidden="true" />}
          {ticket ? <TicketNo value={ticket} /> : null}
        </div>
      )}
      <div className="screenshot-frame-body">{children}</div>
      {caption ? (
        <figcaption className="screenshot-frame-caption mono-label">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
