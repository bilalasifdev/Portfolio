"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        <span>Your name</span>
        <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
      </label>
      <label>
        <span>Email address</span>
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
      </label>
      <label className="contact-form-wide">
        <span>What are we building?</span>
        <textarea name="message" rows={4} placeholder="Tell me about your idea..." required />
      </label>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

      <button className="contact-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : status === "sent" ? "Message sent ✓" : "Send message ↗"}
      </button>

      {status === "sent" && (
        <p className="contact-success" role="status">
          Thanks — your message has been sent. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="contact-error" role="alert">
          Something went wrong while sending. Please try again, or email me at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
