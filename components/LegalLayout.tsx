import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-warm py-20 px-6 text-center border-b border-cream/80">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal">{title}</h1>
          <p className="mt-4 text-charcoal/60 font-body text-lg">{subtitle}</p>
          <p className="mt-2 text-charcoal/35 font-body text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto prose-legal">
          {children}
        </div>
      </section>
    </>
  );
}
