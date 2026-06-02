export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsYoke />
      <Features />
      <Screenshots />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-warm py-28 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-gold font-body font-semibold text-sm tracking-widest uppercase mb-4">
          Faith Together
        </p>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
          Find Your Match<br className="hidden sm:block" /> in Faith
        </h1>
        <p className="mt-5 font-heading text-xl md:text-2xl text-charcoal/50 italic">
          Be equally yoked.
        </p>
        <p className="mt-6 text-lg text-charcoal/70 max-w-xl mx-auto leading-relaxed font-body">
          Yoke is a dating app for Christian singles who are serious about finding
          a partner who shares their walk with God.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <AppStoreButton />
        </div>
        <p className="mt-4 text-sm text-charcoal/35 font-body">
          Coming soon to iOS &amp; Android
        </p>
      </div>
    </section>
  );
}

function AppStoreButton() {
  return (
    <a
      href="#"
      aria-label="Download on the App Store"
      className="inline-flex items-center gap-3 bg-charcoal text-cream font-body font-semibold px-7 py-4 rounded-full text-base hover:bg-charcoal/85 transition-all shadow-md"
    >
      <AppleIcon />
      <span>Download on the App Store</span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 814 1000"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.5-142.6-93.4C52.4 649.2 14.7 546.9 14.7 449.5c0-154.8 100.8-236.7 199.7-236.7 73.9 0 127.5 48.4 170.9 48.4 41.6 0 106.6-51.2 190.7-51.2 30.5 0 110.1 2.6 173.1 82.5zm-255.9-175c28.6-35.2 49-84.4 49-133.6 0-6.5-.6-13-.6-18.9-46.8 1.9-101.1 31.2-134.7 71.8-26.6 30.8-49.7 80-49.7 129.8 0 6.5 1.3 13.1 1.3 15.1 3.2.6 8.4 1.3 13.6 1.3 42.1 0 91.7-27.8 120.1-65.5z" />
    </svg>
  );
}

function WhatIsYoke() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-snug">
            More than dating —<br />a covenant foundation
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed font-body">
            Yoke is built on 2 Corinthians 6:14. We believe a lasting relationship
            starts with a shared faith — so every feature is designed to help you
            find someone aligned in belief, values, and calling.
          </p>
          <p className="mt-4 text-charcoal/70 text-lg leading-relaxed font-body">
            No shallow swipes. No algorithms chasing engagement. Just genuine
            believers seeking genuine connection.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-3xl bg-gold/20 border-2 border-gold/30 flex items-center justify-center">
            <span className="font-heading text-7xl font-bold text-gold/50 select-none">Y</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "Faith-Centered Matching",
    description:
      "Connect with believers who share your convictions, your denomination, and your daily walk with God.",
    icon: CrossIcon,
  },
  {
    title: "Equally Yoked",
    description:
      "Go beyond interests. Our profiles surface what actually matters — theology, values, and life vision.",
    icon: ScaleIcon,
  },
  {
    title: "Authentic Community",
    description:
      "More than a dating app — a space where believers can encourage, uplift, and find their person.",
    icon: HeartIcon,
  },
];

function Features() {
  return (
    <section className="bg-warm py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
            Why Yoke?
          </h2>
          <p className="mt-3 text-charcoal/55 text-lg font-body max-w-lg mx-auto">
            Every feature exists to help you find a partner who shares your faith.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-cream rounded-2xl p-8 flex flex-col items-start gap-4 shadow-sm border border-gold/10"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                <Icon />
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal">{title}</h3>
              <p className="text-charcoal/65 leading-relaxed font-body text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section className="bg-charcoal py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream">
            See Yoke in Action
          </h2>
          <p className="mt-3 text-cream/50 text-lg font-body">
            A beautiful, intentional experience built for believers.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {["Discover", "Match", "Connect"].map((label) => (
            <PhoneMockup key={label} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ label }: { label: string }) {
  return (
    <div className="w-52 h-[26rem] rounded-[2.5rem] border-2 border-cream/10 bg-warm/5 flex flex-col items-center justify-end pb-10 gap-2 shadow-xl">
      <div className="w-8 h-1 rounded-full bg-gold/40" />
      <span className="text-cream/30 text-xs font-body tracking-wide">{label}</span>
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="bg-gold py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
          Ready to be equally yoked?
        </h2>
        <p className="mt-4 text-charcoal/65 text-lg font-body">
          Download Yoke and start your journey toward a faith-filled relationship.
        </p>
        <div className="mt-9">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="4" y1="8" x2="20" y2="8" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 9l7-6 7 6" />
      <path d="M3 17l4-8 4 8M3 17h8" />
      <path d="M13 17l4-8 4 8M13 17h8" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
