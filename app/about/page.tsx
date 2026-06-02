import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn the story behind Yoke and what it means to be equally yoked in faith and in love.",
  openGraph: {
    title: "Our Story | Yoke",
    description:
      "Learn the story behind Yoke and what it means to be equally yoked in faith and in love.",
    url: "https://yokefaith.com/about",
  },
  alternates: { canonical: "https://yokefaith.com/about" },
};

export default function About() {
  return (
    <>
      <PageHeader />
      <EquallyYoked />
      <WhyWeBuiltIt />
      <Values />
      <Scripture />
    </>
  );
}

function PageHeader() {
  return (
    <section className="bg-warm py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-gold font-body font-semibold text-sm tracking-widest uppercase mb-4">
          Our Story
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight">
          Built on Faith.<br />Built for You.
        </h1>
        <p className="mt-6 text-lg text-charcoal/65 font-body leading-relaxed max-w-xl mx-auto">
          Yoke exists because believers deserve a dating app that takes their faith
          as seriously as they do.
        </p>
      </div>
    </section>
  );
}

function EquallyYoked() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-3xl bg-gold/20 border-2 border-gold/30" />
            <div className="absolute inset-4 rounded-2xl bg-warm flex items-center justify-center">
              <blockquote className="text-center px-4">
                <p className="font-heading text-base italic text-charcoal/80 leading-relaxed">
                  &ldquo;Do not be unequally yoked with unbelievers.&rdquo;
                </p>
                <cite className="mt-3 block text-sm text-gold font-body font-semibold not-italic">
                  2 Corinthians 6:14
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-snug">
            What does it mean to be equally yoked?
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed font-body">
            In farming, a yoke is the wooden beam that joins two oxen together.
            When the animals are equally matched — in size, strength, and stride —
            they move as one. When they&apos;re mismatched, the load becomes a struggle.
          </p>
          <p className="mt-4 text-charcoal/70 text-lg leading-relaxed font-body">
            Paul used this image to describe the importance of spiritual alignment
            in our closest relationships. Being equally yoked isn&apos;t a limitation —
            it&apos;s a foundation. It means building something together that neither
            of you could carry alone.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyWeBuiltIt() {
  return (
    <section className="bg-warm py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal text-center mb-10">
          Why we built Yoke
        </h2>
        <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed font-body">
          <p>
            Most dating apps treat faith as a filter — a checkbox tucked between
            height and zodiac sign. For serious believers, that&apos;s not enough.
            Faith isn&apos;t a preference. It&apos;s the lens through which we see the world,
            make decisions, and build our lives.
          </p>
          <p>
            We built Yoke for the Christian who has tried the mainstream apps and
            felt the disconnect. Who swiped past hundreds of profiles and found no
            one who understood why Sunday morning is non-negotiable, or why serving
            others is a calling, not a hobby.
          </p>
          <p>
            Yoke is for the believer who isn&apos;t just looking for a date — they&apos;re
            looking for a partner to do life with. Someone who will pray with them,
            grow with them, and walk faithfully beside them for the long haul.
          </p>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    label: "Faith First",
    description:
      "Every feature is designed to surface faith, not bury it. Your relationship with God shapes your relationship with everyone else.",
  },
  {
    label: "Intentionality",
    description:
      "We believe dating should be purposeful. Yoke is built for people who know what they want and why they want it.",
  },
  {
    label: "Authenticity",
    description:
      "No curated highlight reels. We encourage honesty — about your beliefs, your journey, and what you're truly looking for.",
  },
  {
    label: "Community",
    description:
      "Connection doesn't have to be transactional. Yoke fosters a space where believers can encourage one another along the way.",
  },
];

function Values() {
  return (
    <section className="bg-charcoal py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream">
            What we believe
          </h2>
          <p className="mt-3 text-cream/50 text-lg font-body max-w-md mx-auto">
            The values that guide every decision we make at Yoke.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {VALUES.map(({ label, description }) => (
            <div key={label} className="bg-warm/5 border border-cream/10 rounded-2xl p-8">
              <div className="w-2 h-2 rounded-full bg-gold mb-4" />
              <h3 className="font-heading text-xl font-bold text-cream mb-3">{label}</h3>
              <p className="text-cream/60 leading-relaxed font-body text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scripture() {
  return (
    <section className="bg-gold py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <blockquote>
          <p className="font-heading text-2xl md:text-3xl font-bold text-charcoal leading-relaxed italic">
            &ldquo;Two are better than one, because they have a good reward for their
            toil. For if they fall, one will lift up his fellow.&rdquo;
          </p>
          <cite className="mt-6 block text-charcoal/65 font-body font-semibold not-italic tracking-wide">
            Ecclesiastes 4:9–10
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
