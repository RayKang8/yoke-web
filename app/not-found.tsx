import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-warm px-6 py-32 text-center">
      <p className="font-body text-sm font-semibold text-gold tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
        Page not found
      </h1>
      <p className="text-charcoal/55 font-body text-lg max-w-sm leading-relaxed mb-10">
        Looks like this page has gone astray. Let&apos;s get you back on the right path.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gold text-charcoal font-body font-semibold px-7 py-3.5 rounded-full text-sm hover:brightness-105 transition-all shadow-sm"
      >
        <ArrowLeftIcon />
        Back to Home
      </Link>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
