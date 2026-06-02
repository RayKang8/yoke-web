import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-warm border-b border-cream">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold text-charcoal tracking-tight">
          Yoke
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="text-charcoal hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-charcoal hover:text-gold transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-charcoal hover:text-gold transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
