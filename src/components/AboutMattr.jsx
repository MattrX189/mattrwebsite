import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/* ─── animated number counter ─── */
const Counter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const num = { val: 0 };
          gsap.to(num, {
            val: end,
            duration,
            ease: "power2.out",
            onUpdate: () => setCount(Math.round(num.val)),
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ─── stat data ─── */
const stats = [
  { end: 30, suffix: "+", label: "Global Brands Served" },
  { end: 6, suffix: "+", label: "Countries Worldwide" },
  { end: 50, suffix: "+", label: "Products Shipped" },
  { end: 100, suffix: "%", label: "Founder-Led Team" },
];

/* ─── locations ─── */
const locations = [
  { name: "Dubai", flag: "🇦🇪" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Nepal", flag: "🇳🇵" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "United States", flag: "🇺🇸" },
  { name: "UAE", flag: "🇦🇪" },
];

/* ─── pillars ─── */
const pillars = [
  {
    title: "Design",
    desc: "Thoughtful interfaces crafted with precision — where every interaction tells a story and every pixel serves a purpose.",
    icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
  },
  {
    title: "Technology",
    desc: "Modern stacks, scalable architecture, and clean code — engineered to perform today and evolve tomorrow.",
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
  {
    title: "Strategy",
    desc: "Data-informed decisions that connect business goals to user needs — turning complexity into clear direction.",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
];

const AboutMattr = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* ── top intro elements ── */
      gsap.fromTo(
        ".am-intro",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".am-intro-block", start: "top 80%" },
        }
      );

      /* ── accent bar ── */
      gsap.fromTo(
        ".am-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".am-bar", start: "top 85%" },
        }
      );

      /* ── stat items ── */
      gsap.fromTo(
        ".am-stat",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".am-stats-row", start: "top 82%" },
        }
      );

      /* ── pillar cards ── */
      gsap.fromTo(
        ".am-pillar",
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".am-pillars", start: "top 80%" },
        }
      );

      /* ── location pills ── */
      gsap.fromTo(
        ".am-loc",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(2)",
          scrollTrigger: { trigger: ".am-locations", start: "top 85%" },
        }
      );

      /* ── closing ── */
      gsap.fromTo(
        ".am-close",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".am-close", start: "top 85%" },
        }
      );

      /* ── floating orbs parallax ── */
      gsap.to(".am-orb-1", {
        y: -120,
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.to(".am-orb-2", {
        y: 100,
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, section);

    return () => ctx.revert();
  });

  return (
    <section
      ref={sectionRef}
      id="about-mattr"
      className="relative w-screen overflow-hidden bg-black py-28 md:py-40"
    >
      {/* Section divider */}
      <div className="section-divider absolute top-0 w-full" />

      {/* background orbs — violet/blue tones */}
      <div className="am-orb-1 pointer-events-none absolute -top-32 right-[10%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.04] blur-[140px]" />
      <div className="am-orb-2 pointer-events-none absolute -bottom-40 left-[5%] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.04] blur-[120px]" />

      {/* subtle noise texture — very faint */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.008]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* ═══════════ INTRO BLOCK ═══════════ */}
        <div className="am-intro-block mb-24 max-w-3xl">
          {/* tag */}
          <div className="am-intro mb-6 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-violet-400 to-transparent" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-violet-400 font-general">
              About Mattr
            </span>
          </div>

          {/* heading — refined, mixed weight, NOT all caps */}
          <h2 className="am-intro font-circular-web text-4xl font-medium leading-[1.15] text-white md:text-5xl lg:text-[3.5rem]">
            We don't just build products.{" "}
            <br className="hidden md:block" />
            We build things that{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              actually matter
            </span>
            .
          </h2>

          {/* accent bar — violet */}
          <div className="am-bar mt-8 mb-8 h-[2px] w-20 origin-left rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />

          {/* description */}
          <p className="am-intro max-w-xl text-base leading-[1.8] text-slate-400 font-circular-web md:text-[17px]">
            From seed-stage startups to Fortune 500 enterprises, we've shipped
            digital products across <span className="text-white/80">6+ countries</span> that
            don't just perform — they redefine what's possible.
          </p>

          {/* DPIIT badge */}
          <div className="am-intro mt-6 inline-flex items-center gap-4 rounded-xl border border-violet-500/15 bg-violet-500/[0.06] px-5 py-3">
            <img src="/img/startup-india.png" alt="Startup India" className="h-16 w-auto rounded-lg bg-white p-1.5" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 font-general">DPIIT Recognised</span>
              <span className="block text-xs text-slate-400 font-circular-web">Startup India Registered Firm</span>
            </div>
          </div>
        </div>

        {/* ═══════════ STATS ROW ═══════════ */}
        <div className="am-stats-row mb-28">
          {/* top line */}
          <div className="mb-10 h-[1px] w-full bg-gradient-to-r from-violet-500/20 via-white/[0.06] to-transparent" />

          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {stats.map((stat, i) => (
              <div key={i} className="am-stat group text-center md:text-left">
                {/* number — elegant, thin weight with gradient */}
                <span className="block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent font-circular-web text-5xl font-medium leading-none md:text-6xl lg:text-7xl">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </span>

                {/* label */}
                <span className="mt-3 block text-[11px] uppercase tracking-[0.2em] text-slate-500 font-general md:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* bottom line */}
          <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-violet-500/20" />
        </div>

        {/* ═══════════ 3 PILLARS ═══════════ */}
        <div className="am-pillars mb-28 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="am-pillar group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-9 transition-all duration-500 hover:bg-white/[0.04] hover:border-violet-500/15"
            >
              {/* top row: icon + number */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-indigo-500/10 text-violet-400 transition-colors duration-300 group-hover:from-violet-500/25 group-hover:to-indigo-500/15">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <span className="text-xs font-medium text-white/15 font-general tracking-wider">
                  0{i + 1}
                </span>
              </div>

              {/* title — elegant, not screaming */}
              <h3 className="mb-3 font-circular-web text-xl font-medium text-white md:text-2xl">
                {p.title}
              </h3>

              {/* description */}
              <p className="text-sm leading-[1.7] text-slate-400 font-circular-web">
                {p.desc}
              </p>

              {/* bottom accent line — violet gradient */}
              <div className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500/50 via-indigo-500/30 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              {/* corner glow on hover */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-violet-500/[0.04] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* ═══════════ GLOBAL REACH ═══════════ */}
        <div className="am-locations mb-20">
          <p className="am-close mb-5 text-center font-circular-web text-sm text-slate-500 md:text-base">
            Served clients across 6+ countries — and always open for more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="am-loc group inline-flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-base text-white/80 font-circular-web transition-all duration-300 hover:border-violet-400/25 hover:bg-white/[0.06] hover:text-white md:px-8 md:py-5 md:text-lg"
              >
                <span className="text-2xl leading-none md:text-3xl">{loc.flag}</span>
                {loc.name}
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════ CLOSING ═══════════ */}
        <div className="am-close pt-4 pb-4 text-center">
          <div className="mx-auto mb-8 h-[1px] w-20 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <p className="mx-auto max-w-2xl font-circular-web text-xl leading-relaxed text-white/50 md:text-2xl">
            World-class technology. Thoughtful design.
            <br className="hidden sm:block" />
            Relentless execution.
          </p>
          <p className="mt-3 font-circular-web text-xl md:text-2xl">
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-medium">
              Experiences that mattr.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMattr;
