import { useState, type SubmitEvent } from "react";
import { Button } from "../ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/70 transition-all duration-200 hover:border-navy/30 focus-visible:border-navy focus-visible:outline-2 focus-visible:outline-ring/30";

const labelClass = "text-sm font-semibold text-ink";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-navy-wash px-6 py-10 text-center">
        <p className="font-heading text-2xl font-semibold tracking-tight text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building, and what manual work should it kill?"
          className={`${inputClass} resize-y`}
        />
      </div>
      {status === "error" && (
        <p className="text-sm font-medium text-destructive" role="alert">
          Something went wrong — please email me directly or try again.
        </p>
      )}
      <div>
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="mt-1"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" && (
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.7" />
            </svg>
          )}
        </Button>
      </div>
    </form>
  );
}
