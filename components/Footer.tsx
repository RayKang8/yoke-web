import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg font-bold text-gold">Yoke: Faith Together</p>
          <p className="text-sm mt-1 opacity-60">Be equally yoked.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm opacity-70">
          <Link href="/" className="hover:text-gold hover:opacity-100 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gold hover:opacity-100 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gold hover:opacity-100 transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-gold hover:opacity-100 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-gold hover:opacity-100 transition-colors">Terms</Link>
          <a
            href="https://instagram.com/yokefaith"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold hover:opacity-100 transition-colors"
          >
            Instagram
          </a>
        </nav>

        <p className="text-xs opacity-40">© 2026 Yoke. All rights reserved.</p>
      </div>
    </footer>
  );
}
