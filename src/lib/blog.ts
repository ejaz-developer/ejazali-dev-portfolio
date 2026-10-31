import type { CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"blog">;

/** Posts are only public when `draft` is false. Drafts stay in the collection for local preview. */
export function isPublished(entry: PostEntry): boolean {
  return !entry.data.draft;
}

/** Newest first. */
export function byDateDesc(a: PostEntry, b: PostEntry): number {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

/**
 * Rough reading time from the raw markdown body (~200 wpm).
 * Cheap approximation — good enough for the "N min read" furniture.
 */
export function readingTimeMinutes(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** "October 12, 2026" — stable across locales for machine + human readers. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** True when the post was revised after publication (drives the "Updated" note). */
export function isUpdated(entry: PostEntry): boolean {
  return entry.data.updated != null && entry.data.updated.valueOf() > entry.data.date.valueOf();
}

/** Absolute URL for an site-relative path, using the configured site origin. */
export function absoluteUrl(path: string, site: string | URL | undefined): string {
  const base = site?.toString() ?? "https://helo-ejaz.vercel.app";
  return new URL(path, base).href;
}
