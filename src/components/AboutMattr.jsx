import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

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
  { end: 30, suffix: "+", label: "Global Brands", icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" },
  { end: 6, suffix: "+", label: "Countries", icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" },
  { end: 50, suffix: "+", label: "Products Shipped", icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" },
  { end: 100, suffix: "%", label: "Founder-Led", icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" },
];

/* ─── locations ─── */
const locations = [
  { name: "Dubai", flag: "AE" },
  { name: "Qatar", flag: "QA" },
  { name: "Nepal", flag: "NP" },
  { name: "Ireland", flag: "IE" },
  { name: "United States", flag: "US" },
  { name: "UAE", flag: "AE" },
];

/* ─── pillars ─── */
const pillars = [
  { title: "Design", desc: "Pixel-perfect UI/UX that users love" },
  { title: "Technology", desc: "Scalable, modern tech stacks" },
  { title: "Strategy", desc: "Data-driven growth frameworks" },
];

const AboutMattr = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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

      /* ── subtitle text ── */
      gsap.fromTo(
        ".am-subtitle",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".am-subtitle", start: "top 85%" },
        }
      );

      /* ── stat cards ── */
      gsap.fromTo(
        ".am-stat-card",
        { y: 80, opacity: 0, rotateX: -15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".am-stats-grid", start: "top 80%" },
        }
      );

      /* ── pillar cards ── */
      gsap.fromTo(
        ".am-pillar",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

      /* ── closing line ── */
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
      {/* ── background orbs ── */}
      <div className="am-orb-1 pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#CAFF29]/[0.03] blur-[120px]" />
      <div className="am-orb-2 pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-violet-500/[0.04] blur-[100px]" />

      {/* ── grid noise texture overlay ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">

        {/* ═══════════════ TOP: TITLE + STATS ═══════════════ */}
        <div className="mb-20 grid items-start gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">

          {/* LEFT — title + one-liner */}
          <div>
            <AnimatedTitle
              title={"MATTR is not just<br />a <b>name</b>. It's a<br /><b>statement</b>."}
              containerClass="!text-white text-left !items-start !sm:px-0 !px-0"
            />
            <div className="am-bar mt-6 mb-6 h-[3px] w-24 origin-left rounded-full bg-[#CAFF29]" />
            <p className="am-subtitle max-w-md text-base leading-relaxed text-slate-400 font-circular-web md:text-lg">
              From startups to Fortune 500 — we build digital products across{" "}
              <span className="text-white">6+ countries</span> that don't just work, they{" "}
              <span className="text-[#CAFF29]">transform</span>.
            </p>
          </div>

          {/* RIGHT — 2×2 stat cards */}
          <div className="am-stats-grid grid grid-cols-2 gap-4" style={{ perspective: "800px" }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="am-stat-card group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 md:p-7 transition-all duration-500 hover:border-[#CAFF29]/25 hover:shadow-[0_0_40px_rgba(202,255,41,0.05)]"
              >
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mb-3 h-5 w-5 text-[#CAFF29]/60 transition-colors duration-300 group-hover:text-[#CAFF29]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>

                {/* number */}
                <span className="block font-zentry text-4xl font-black text-white md:text-5xl lg:text-[3.5rem] leading-none">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </span>

                {/* label */}
                <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-general md:text-xs">
                  {stat.label}
                </span>

                {/* corner glow */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#CAFF29]/[0.04] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════ MIDDLE: 3 PILLARS ═══════════════ */}
        <div className="am-pillars mb-20 grid gap-4 md:grid-cols-3 md:gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="am-pillar group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] px-7 py-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]"
            >
              {/* number badge */}
              <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#CAFF29]/10 text-xs font-bold text-[#CAFF29] font-general">
                0{i + 1}
              </span>
              <h3 className="mb-2 font-zentry text-2xl font-black uppercase text-white md:text-3xl">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 font-circular-web">
                {p.desc}
              </p>
              {/* bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#CAFF29]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* ═══════════════ BOTTOM: LOCATIONS + CLOSING ═══════════════ */}
        <div className="am-locations mb-16 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-slate-600 font-general md:text-xs">
            Where we build
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {locations.map((loc, i) => (
              <span
                key={i}
                className="am-loc inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm text-slate-300 font-circular-web backdrop-blur-sm transition-all duration-300 hover:border-[#CAFF29]/30 hover:text-white hover:bg-white/[0.07] hover:shadow-[0_0_20px_rgba(202,255,41,0.06)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#CAFF29]/50" />
                {loc.name}
              </span>
            ))}
          </div>
        </div>

        {/* ── closing statement ── */}
        <div className="am-close pt-8 text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="mx-auto max-w-2xl font-circular-web text-xl leading-relaxed text-slate-400 md:text-2xl">
            We empower brands with world-class tech &amp; design —
            <br className="hidden md:block" />
            <span className="text-[#CAFF29] font-semibold"> experiences that mattr.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMattr;
