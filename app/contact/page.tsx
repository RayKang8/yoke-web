import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Yoke team. We'd love to hear from you.",
  openGraph: {
    title: "Contact | Yoke",
    description: "Get in touch with the Yoke team. We'd love to hear from you.",
    url: "https://yokefaith.com/contact",
  },
  alternates: { canonical: "https://yokefaith.com/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHeader />
      <ContactSection />
    </>
  );
}

function PageHeader() {
  return (
    <section className="bg-warm py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-gold font-body font-semibold text-sm tracking-widest uppercase mb-4">
          Say Hello
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight">
          Get in Touch
        </h1>
        <p className="mt-6 text-lg text-charcoal/65 font-body leading-relaxed max-w-lg mx-auto">
          Questions, feedback, partnership inquiries. We would love to hear from you.
          We read every message.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">

        {/* Sidebar */}
        <aside className="md:col-span-2 flex flex-col gap-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              Other ways to reach us
            </h2>
            <a
              href="mailto:contact@yokefaith.com"
              className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors font-body text-sm group"
            >
              <span className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold/25 transition-colors">
                <MailIcon />
              </span>
              contact@yokefaith.com
            </a>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              Follow Yoke
            </h2>
            <ul className="flex flex-col gap-3">
              <SocialLink
                href="https://instagram.com/yokefaith"
                label="@yokefaith"
                platform="Instagram"
                icon={<InstagramIcon />}
              />
              <SocialLink
                href="https://tiktok.com/@yokefaith"
                label="@yokefaith"
                platform="TikTok"
                icon={<TikTokIcon />}
              />
              <SocialLink
                href="https://youtube.com/@yokefaith"
                label="@yokefaith"
                platform="YouTube"
                icon={<YouTubeIcon />}
              />
            </ul>
          </div>

          <div className="bg-warm border border-gold/20 rounded-2xl p-5">
            <p className="font-body text-sm text-charcoal/65 leading-relaxed">
              We&apos;re a small team building something meaningful. We aim to
              reply within 1–2 business days.
            </p>
          </div>
        </aside>

        {/* Form */}
        <div className="md:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
            Send us a message
          </h2>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  platform,
  icon,
}: {
  href: string;
  label: string;
  platform: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors font-body text-sm group"
      >
        <span className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold/25 transition-colors">
          {icon}
        </span>
        <span>
          <span className="block text-xs text-charcoal/40 leading-none mb-0.5">{platform}</span>
          {label}
        </span>
      </a>
    </li>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}
