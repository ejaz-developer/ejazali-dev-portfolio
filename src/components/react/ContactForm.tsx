import { useState, type SubmitEvent } from "react";
import { Button } from "../ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-2xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)] placeholder:text-muted-foreground transition-all duration-300 focus-visible:border-ring focus-visible:shadow-[inset_0_1px_2px_rgb(0_0_0/0.35),0_0_0_3px_rgb(247_127_0/0.18)] focus-visible:ring-3 focus-visible:ring-ring/50 outline-none";

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
      <div className="rounded-2xl border border-sunflower-gold-400/40 bg-sunflower-gold-100/40 px-6 py-8 text-center">
        <p className="font-heading text-lg font-semibold text-foreground">Message sent.</p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
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
        <p className="text-sm text-flag-red-500" role="alert">
          Something went wrong — please email me directly or try again.
        </p>
      )}
      <div>
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="h-10 rounded-2xl px-6 text-base"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
