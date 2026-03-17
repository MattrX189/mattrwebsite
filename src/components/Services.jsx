import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    tag: "Development",
    title: "Website Development",
    desc: "High-performance, responsive websites built with modern tech stacks — engineered to scale with your business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    gradient: "from-[#CAFF29]/20 via-[#CAFF29]/5 to-transparent",
    accentColor: "#CAFF29",
  },
  {
    num: "02",
    tag: "AI",
    title: "AI Automation",
    desc: "Smart workflows and intelligent systems that automate the mundane — so your team can focus on what matters.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    gradient: "from-cyan-400/20 via-cyan-400/5 to-transparent",
    accentColor: "#22d3ee",
  },
  {
    num: "03",
    tag: "Marketing",
    title: "Banners & Social Media Graphics",
    desc: "Scroll-stopping visuals for every platform — from ad banners to social posts that drive engagement and clicks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
    ),
    gradient: "from-amber-400/20 via-amber-400/5 to-transparent",
    accentColor: "#fbbf24",
  },
  {
    num: "04",
    tag: "Packaging",
    title: "Packaging Design",
    desc: "Shelf-ready packaging that tells your brand story at first glance — bold, functional, and impossible to ignore.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
    accentColor: "#f97316",
  },
  {
    num: "05",
    tag: "Motion",
    title: "3D Animation & VFX",
    desc: "Immersive 3D worlds and visual effects that push creative boundaries — from product renders to full cinematic sequences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    accentColor: "#10b981",
  },
  {
    num: "06",
    tag: "Video",
    title: "Video Editing",
    desc: "Cinematic cuts, seamless transitions, and compelling narratives — video content that captivates from frame one.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    gradient: "from-red-500/20 via-red-500/5 to-transparent",
    accentColor: "#ef4444",
  },
];

/* Card spans: alternating 7/5 and 5/7 columns for 6 cards */
const cardSpans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

const ServiceCard = ({ svc, span, index }) => {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className={`svc-card group relative col-span-12 ${span} overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.12] hover:bg-white/[0.04]`}
    >
      {/* gradient glow on hover */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />

      {/* large decorative number */}
      <div className="pointer-events-none absolute -right-4 -top-6 select-none font-zentry text-[10rem] font-black leading-none text-white/[0.02] transition-all duration-700 group-hover:text-white/[0.05] md:text-[12rem]">
        {svc.num}
      </div>

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
        {/* top: tag pill + icon */}
        <div className="mb-12 flex items-center justify-between md:mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] font-general transition-all duration-500"
            style={{
              borderColor: `${svc.accentColor}33`,
              color: `${svc.accentColor}cc`,
              backgroundColor: `${svc.accentColor}0a`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: svc.accentColor }}
            />
            {svc.num} — {svc.tag}
          </span>

          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-500"
            style={{
              borderColor: `${svc.accentColor}1a`,
              color: `${svc.accentColor}80`,
            }}
          >
            {svc.icon}
          </div>
        </div>

        {/* bottom: title + desc + arrow */}
        <div>
          <h3 className="font-zentry text-2xl font-black leading-tight text-white md:text-3xl lg:text-[2rem]">
            {svc.title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 font-circular-web transition-colors duration-500 group-hover:text-slate-400">
            {svc.desc}
          </p>

          {/* arrow link */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 font-general transition-colors duration-500 group-hover:text-white/60">
              Learn more
            </span>
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110"
              style={{
                borderColor: `${svc.accentColor}20`,
                backgroundColor: `${svc.accentColor}08`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-3.5 w-3.5 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: svc.accentColor }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* section header */
      gsap.fromTo(
        ".svc-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-heading-block", start: "top 80%" },
        }
      );

      /* cards stagger in */
      gsap.fromTo(
        ".svc-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".svc-grid", start: "top 82%" },
        }
      );

      /* CTA fade in */
      gsap.fromTo(
        ".svc-cta",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".svc-cta", start: "top 90%" },
        }
      );
    }, section);

    return () => ctx.revert();
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-screen overflow-hidden bg-black py-28 md:py-40"
    >
      {/* Section divider */}
      <div className="section-divider absolute top-0 w-full" />

      {/* subtle ambient glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[600px] w-[600px] bg-[radial-gradient(ellipse_at_center,rgba(202,255,41,0.03),transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.03),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* ── HEADER ── */}
        <div className="svc-heading-block mb-20 md:mb-28 flex flex-col items-center text-center">
          <span className="svc-heading mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#CAFF29]/70 font-general">
            <span className="inline-block h-px w-8 bg-[#CAFF29]/40" />
            What We Do
            <span className="inline-block h-px w-8 bg-[#CAFF29]/40" />
          </span>

          <h2 className="svc-heading font-zentry font-black text-4xl uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Crafting Digital
            <br />
            <span className="text-gradient-blue">Excellence.</span>
          </h2>

          <p className="svc-heading mt-6 max-w-xl text-base leading-relaxed text-slate-400 font-circular-web md:text-lg">
            From websites and branding to 3D animation and AI —
            we bring ambitious ideas to life across every
            creative medium.
          </p>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="svc-grid grid grid-cols-12 gap-4 md:gap-5">
          {services.map((svc, i) => (
            <ServiceCard
              key={i}
              svc={svc}
              span={cardSpans[i]}
              index={i}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="svc-cta mt-20 md:mt-28 flex flex-col items-center gap-6">
          <p className="text-sm text-slate-500 font-circular-web">
            Have a project in mind? Let's make it happen.
          </p>
          <a
            href="#contact"
            className="magnetic-btn group inline-flex items-center gap-2.5 rounded-full bg-[#CAFF29] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#d4ff47] hover:shadow-[0_0_40px_rgba(202,255,41,0.2)] font-general"
          >
            Work With Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
