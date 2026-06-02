import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why we built Yoke, a devotional accountability app for Christians who want to stay consistent in the Word, together.",
  openGraph: {
    title: "Our Story | Yoke",
    description:
      "Why we built Yoke, a devotional accountability app for Christians who want to stay consistent in the Word, together.",
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
          Faith is better<br />together.
        </h1>
        <p className="mt-6 text-lg text-charcoal/65 font-body leading-relaxed max-w-xl mx-auto">
          Yoke exists because daily devotions are hard to sustain alone. The right
          community changes everything.
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
                  &ldquo;Take my yoke upon you, and learn from me.&rdquo;
                </p>
                <cite className="mt-3 block text-sm text-gold font-body font-semibold not-italic">
                  Matthew 11:29
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-snug">
            Where the name comes from
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed font-body">
            In Matthew 11:28–30, Jesus invites the weary to take his yoke, to walk in
            step with him, to share the load, and to learn from him as they go. A yoke
            is not a burden. It is a partnership.
          </p>
          <p className="mt-4 text-charcoal/70 text-lg leading-relaxed font-body">
            That is what Yoke is about: walking in step with Christ and with the people
            around you who share that same commitment. Being equally yoked means your
            community is pulling in the same direction. That is what makes the daily
            discipline possible.
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
            Most Christians want to read their Bible every day. Very few actually do.
            Not because they do not care, but because hard habits rarely survive in
            isolation. Life fills the gap. Days slip. The intention stays, but the
            practice fades.
          </p>
          <p>
            Accountability is the missing ingredient. When your friends can see your
            streak, you show up differently. Not out of pressure, but because community
            makes hard disciplines sustainable. That is what small groups have always
            known. Yoke brings that same accountability to your daily devotional.
          </p>
          <p>
            Yoke is for the Christian who wants to be consistent in the Word and wants
            to do it alongside people who will notice when they miss a day, celebrate
            when they do not, and grow right along with them. Real accountability.
            Real community.
          </p>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    label: "Scripture First",
    description:
      "The daily Bible passage is the anchor. Every feature is built to support your time in the Word, not replace it.",
  },
  {
    label: "Real Accountability",
    description:
      "Not just a reminder on your lock screen. Your people can actually see if you showed up today. That changes things.",
  },
  {
    label: "Community Over Performance",
    description:
      "This isn't about who has the longest streak. It's about doing this together, grace and all. Miss a day? Your group is still there.",
  },
  {
    label: "Consistency as Worship",
    description:
      "Showing up daily in the Word is not legalism. It is faithfulness. Yoke makes that consistency something you build with others.",
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
            The values that shape every decision we make at Yoke.
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
