"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-warm border-b border-cream/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-heading text-xl font-bold text-charcoal tracking-tight hover:text-gold transition-colors"
        >
          Yoke
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-sm font-medium font-body pb-0.5 transition-colors ${
                  pathname === href
                    ? "text-gold"
                    : "text-charcoal/65 hover:text-charcoal"
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-charcoal/6 transition-colors text-charcoal"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-cream/80 bg-warm">
          <ul className="max-w-5xl mx-auto px-6 py-2">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 py-3.5 text-base font-medium font-body border-b border-cream/80 last:border-0 transition-colors ${
                    pathname === href ? "text-gold" : "text-charcoal hover:text-gold"
                  }`}
                >
                  {pathname === href && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  )}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
