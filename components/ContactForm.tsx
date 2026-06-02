"use client";

import { useState } from "react";

// Sign up at formspree.io, create a form, and paste the ID here.
const FORMSPREE_ID = "YOUR_FORM_ID";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          json?.errors?.[0]?.message ?? "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
          <CheckIcon />
        </div>
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">
          Message sent!
        </h3>
        <p className="text-charcoal/60 font-body">
          Thanks for reaching out. We&apos;ll get back to you at {" "}
          <span className="text-charcoal font-medium">contact@yokefaith.com</span> soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-gold font-body font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          id="name"
          name="name"
          label="Your name"
          type="text"
          placeholder="Jane Smith"
          required
        />
        <Field
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="jane@example.com"
          required
        />
      </div>
      <Field
        id="subject"
        name="subject"
        label="Subject"
        type="text"
        placeholder="I'd love to learn more about Yoke"
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-body font-semibold text-charcoal">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us what's on your mind…"
          className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/35 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 font-body bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-charcoal font-body font-semibold px-8 py-3.5 rounded-full text-sm hover:brightness-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
      >
        {status === "submitting" ? (
          <>
            <SpinnerIcon />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-body font-semibold text-charcoal">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/35 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition"
      />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
    </svg>
  );
}
