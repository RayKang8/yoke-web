import Image from "next/image";

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
          Daily Devotions. Real Accountability.
        </p>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
          Show Up for Your<br className="hidden sm:block" /> Faith. Every Day.
        </h1>
        <p className="mt-5 font-heading text-xl md:text-2xl text-charcoal/50 italic">
          Be equally yoked.
        </p>
        <p className="mt-6 text-lg text-charcoal/70 max-w-xl mx-auto leading-relaxed font-body">
          Yoke is a devotional accountability app. Every day you get a Bible passage,
          write your reflection, and post it to your groups and friends. Your people
          can see if you showed up.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}

function AppStoreButton() {
  return (
    <a
      href="https://apps.apple.com/us/app/yoke-faith-together/id6764186352"
      target="_blank"
      rel="noopener noreferrer"
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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WhatIsYoke() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-snug">
            Your daily devotional,<br />done in community
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg leading-relaxed font-body">
            Every day, Yoke gives you a Bible passage and a prompt. You read, you
            reflect, you write, and then you post it to your accountability groups
            and friends.
          </p>
          <p className="mt-4 text-charcoal/70 text-lg leading-relaxed font-body">
            Your people can see if you showed up today. That simple fact changes
            everything. It is not pressure. It is the power of doing hard things
            alongside people who care.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/Yoke-Icon.png"
            alt="Yoke icon"
            width={256}
            height={256}
            className="rounded-3xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "Daily Passage & Reflection",
    description:
      "Each day, a new Bible passage and devotional prompt to guide your time in the Word. Read it, write your reflection, post it.",
    icon: CrossIcon,
  },
  {
    title: "Accountability Groups",
    description:
      "Create or join groups with friends, your small group, or your church community. Your people can see if you showed up today.",
    icon: ScaleIcon,
  },
  {
    title: "Friends Feed & Streaks",
    description:
      "See your friends' daily reflections, react and encourage. Personal and group streaks make consistency something you build together.",
    icon: HeartIcon,
  },
];

function Features() {
  return (
    <section className="bg-warm py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
            How it works
          </h2>
          <p className="mt-3 text-charcoal/55 text-lg font-body max-w-lg mx-auto">
            A daily rhythm that keeps you in the Word, with people who hold you to it.
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

const SCREENSHOTS = [
  { src: "/devotional.PNG", alt: "Daily devotional screen" },
  { src: "/feed.PNG",       alt: "Friends feed screen" },
  { src: "/groups.PNG",     alt: "Accountability groups screen" },
  { src: "/profile.PNG",    alt: "Profile and streaks screen" },
];

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
          {SCREENSHOTS.map(({ src, alt }) => (
            <PhoneMockup key={src} src={src} alt={alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-52 rounded-[2.5rem] border-2 border-cream/15 bg-charcoal shadow-2xl overflow-hidden">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-cream/20 z-10" />
      <Image
        src={src}
        alt={alt}
        width={208}
        height={450}
        className="w-full h-auto"
      />
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="bg-gold py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
          Ready to show up together?
        </h2>
        <p className="mt-4 text-charcoal/65 text-lg font-body">
          Download Yoke and start your daily devotional with people who will hold you to it.
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
