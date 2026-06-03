"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meewqqzv");

  if (state.succeeded) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
          <CheckIcon />
        </div>
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">
          Message sent!
        </h3>
        <p className="text-charcoal/60 font-body">
          Thanks for reaching out. We&apos;ll get back to you at{" "}
          <span className="text-charcoal font-medium">contact@yokefaith.com</span> soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="name" name="name" label="Your name" type="text" placeholder="Jane Smith" required />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-body font-semibold text-charcoal">
            Email address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            required
            className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/35 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition"
          />
          <ValidationError field="email" errors={state.errors} className="text-xs text-red-600 font-body mt-0.5" />
        </div>
      </div>

      <Field id="subject" name="subject" label="Subject" type="text" placeholder="I'd love to learn more about Yoke" />

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
        <ValidationError field="message" errors={state.errors} className="text-xs text-red-600 font-body mt-0.5" />
      </div>

      <ValidationError errors={state.errors} className="text-sm text-red-600 font-body bg-red-50 border border-red-200 rounded-lg px-4 py-3" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-charcoal font-body font-semibold px-8 py-3.5 rounded-full text-sm hover:brightness-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
      >
        {state.submitting ? (
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
