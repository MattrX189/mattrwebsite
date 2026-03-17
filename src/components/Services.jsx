import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    tag: "Strategy",
    title: "Digital Strategy & Consulting",
    desc: "We map your brand's digital future with data-driven insights, market intelligence, and actionable roadmaps.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "Design",
    title: "UI/UX & Art Direction",
    desc: "Interfaces that feel alive. Pixel-perfect, intuitive designs that users genuinely love to interact with.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "Development",
    title: "Full-Stack Engineering",
    desc: "Scalable, performant, production-ready. Modern tech stacks engineered to grow with your ambition.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "Growth",
    title: "Product & Growth Engineering",
    desc: "Launch, iterate, scale. Analytics-driven optimization that turns products into category leaders.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
];

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
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-heading-block", start: "top 80%" },
        }
      );

      /* divider line */
      gsap.fromTo(
        ".svc-divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".svc-divider", start: "top 88%" },
        }
      );

      /* cards stagger in */
      gsap.fromTo(
        ".svc-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
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

      {/* subtle bg glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[900px] bg-[radial-gradient(ellipse_at_center,rgba(202,255,41,0.02),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">

        {/* ── HEADER ── */}
        <div className="svc-heading-block mb-16 md:mb-24 max-w-3xl">
          <span className="svc-heading mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#CAFF29]/70 font-general">
            <span className="inline-block h-px w-8 bg-[#CAFF29]/40" />
            What We Do
          </span>

          <h2 className="svc-heading font-zentry font-black text-4xl uppercase leading-[1.05] text-white md:text-5xl lg:text-[3.5rem]">
            Crafting Digital Excellence.
          </h2>

          <p className="svc-heading mt-6 max-w-lg text-base leading-relaxed text-slate-400 font-circular-web md:text-lg">
            From strategic consulting to immersive interfaces —
            we transform ambitious ideas into products that
            define categories.
          </p>
        </div>

        {/* ── DIVIDER ── */}
        <div className="svc-divider mb-16 md:mb-20 h-px w-full origin-left bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

        {/* ── SERVICE CARDS — full-width list ── */}
        <div className="svc-grid space-y-0">
          {services.map((svc, i) => (
            <div
              key={i}
              className="svc-card group"
            >
              {/* top border for first card */}
              {i === 0 && <div className="h-px w-full bg-white/[0.06]" />}

              <div className="grid items-center gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12">
                {/* number */}
                <div className="md:col-span-1">
                  <span className="font-general text-xs font-bold tracking-wider text-white/20 transition-colors duration-500 group-hover:text-[#CAFF29]/60">
                    {svc.num}
                  </span>
                </div>

                {/* icon + tag */}
                <div className="md:col-span-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-500 transition-all duration-500 group-hover:bg-[#CAFF29]/10 group-hover:border-[#CAFF29]/20 group-hover:text-[#CAFF29]">
                    {svc.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 font-general transition-colors duration-500 group-hover:text-white/70">
                    {svc.tag}
                  </span>
                </div>

                {/* title */}
                <div className="md:col-span-4">
                  <h3 className="font-zentry text-xl font-black text-white leading-tight md:text-2xl transition-colors duration-500 group-hover:text-white">
                    {svc.title}
                  </h3>
                </div>

                {/* description */}
                <div className="md:col-span-4">
                  <p className="text-sm leading-relaxed text-slate-500 font-circular-web transition-colors duration-500 group-hover:text-slate-400">
                    {svc.desc}
                  </p>
                </div>

                {/* arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-white/20 transition-all duration-500 group-hover:border-[#CAFF29]/30 group-hover:text-[#CAFF29] group-hover:bg-[#CAFF29]/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* bottom border */}
              <div className="h-px w-full bg-white/[0.06] transition-colors duration-500 group-hover:bg-[#CAFF29]/10" />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="svc-cta mt-16 md:mt-20 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-slate-500 font-circular-web">
            Have a project in mind? Let's make it happen.
          </p>
          <a
            href="#contact"
            className="magnetic-btn group inline-flex items-center gap-2.5 rounded-full bg-[#CAFF29] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#d4ff47] hover:shadow-[0_0_30px_rgba(202,255,41,0.15)] font-general"
          >
            Work With Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
