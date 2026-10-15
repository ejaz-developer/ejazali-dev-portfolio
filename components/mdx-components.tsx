import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";

/**
 * MDX body elements mapped to the paper/print system (§6/§7) so case-study
 * prose inherits the same ruled, monospace-metadata treatment as the rest of
 * the site. Kept to Tailwind utilities because globals.css is owned elsewhere.
 */
export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 border-t border-dashed border-rule pt-6 font-display text-[24px] leading-[1.15] tracking-[-0.01em] text-ink first:mt-0 sm:text-[27px]"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 font-display text-[19px] font-medium leading-snug text-ink"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mt-6 font-mono text-[12px] tracking-[0.18em] text-muted uppercase"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-[15px] leading-[1.8] text-ink/80" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 space-y-2 pl-5 text-[15px] leading-[1.8] text-ink/80" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-[1.8] text-ink/80"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li className="list-disc pl-1 marker:text-terracotta [ol_&]:list-decimal" {...props}>
      {children}
    </li>
  ),
  a: ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="link-underline text-teal" {...props}>
      {children}
    </a>
  ),
  strong: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-ink" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
  blockquote: ({ children, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-2 border-terracotta pl-4 text-[15px] leading-[1.8] text-ink/70 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: () => <hr className="rule-dashed my-10 border-0" />,
  pre: ({ children, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mt-5 overflow-x-auto rounded-[3px] border border-rule bg-paper-2 p-4 font-mono text-[12.5px] leading-relaxed text-ink [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded-[2px] border border-rule bg-ink/5 px-1.5 py-0.5 font-mono text-[0.85em] text-ink"
      {...props}
    >
      {children}
    </code>
  ),
  table: ({ children, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[14px]" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border-b border-rule py-2 pr-4 font-mono text-[11px] tracking-[0.14em] text-muted uppercase"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-rule py-2 pr-4 text-ink/80" {...props}>
      {children}
    </td>
  ),
};
