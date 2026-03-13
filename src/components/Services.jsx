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
    desc: "Mapping the future of your brand with data-driven insights and market intelligence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    gradient: "from-violet-600/20 to-indigo-600/20",
  },
  {
    num: "02",
    tag: "Design",
    title: "UI/UX Design & Art Direction",
    desc: "Creating intuitive interfaces that users love to interact with, pixel by pixel.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    gradient: "from-purple-600/20 to-fuchsia-600/20",
  },
  {
    num: "03",
    tag: "Development",
    title: "Full-Stack Development",
    desc: "Engineering scalable, performant applications with modern tech stacks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    num: "04",
    tag: "Growth",
    title: "Product & Growth Engineering",
    desc: "Launching, iterating, and scaling products with analytics-driven optimization.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* label + heading */
      gsap.fromTo(
        ".svc-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-heading-block", start: "top 80%" },
        }
      );

      /* accent bar */
      gsap.fromTo(
        ".svc-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".svc-bar", start: "top 85%" },
        }
      );

      /* description */
      gsap.fromTo(
        ".svc-desc",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".svc-desc", start: "top 85%" },
        }
      );

      /* service cards */
      gsap.fromTo(
        ".svc-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".svc-grid", start: "top 80%" },
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
      {/* bg glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-[radial-gradient(ellipse_at_center,rgba(101,111,226,0.06),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* ═══ TOP: Left text + Right cards ═══ */}
        <div className="grid items-start gap-12 md:grid-cols-5 lg:gap-20">
          {/* LEFT COLUMN — sticky intro */}
          <div className="svc-heading-block md:col-span-2 md:sticky md:top-32">
            {/* label */}
            <div className="svc-heading mb-6 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-violet-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400 font-general">
                Services
              </span>
            </div>

            {/* heading */}
            <h2 className="svc-heading font-zentry font-black text-4xl uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl">
              What We Do Best For You.
            </h2>

            {/* accent bar */}
            <div className="svc-bar mt-6 mb-6 h-[3px] w-20 origin-left rounded-full bg-violet-500" />

            {/* description */}
            <p className="svc-desc max-w-md text-base leading-relaxed text-slate-400 font-circular-web md:text-lg">
              At Mattr, we craft digital experiences that transcend the ordinary. From strategic consulting to immersive UI/UX, we transform ideas into digital reality.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="svc-desc group mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              Explore All Services
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* RIGHT COLUMN — cards grid */}
          <div className="svc-grid md:col-span-3 grid gap-5 sm:grid-cols-2">
            {services.map((svc, i) => (
              <div
                key={i}
                className="svc-card group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                {/* gradient top strip */}
                <div className={`h-44 w-full bg-gradient-to-br ${svc.gradient} relative overflow-hidden`}>
                  {/* decorative grid pattern */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h1v1H0zM20 0h1v1h-1zM0 20h1v1H0zM20 20h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
                  {/* floating accent circle */}
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/[0.05] transition-transform duration-700 group-hover:scale-150" />
                  <div className="absolute bottom-4 left-4 right-4 top-auto rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-3">
                    <div className="h-2 w-16 rounded bg-white/20 mb-2" />
                    <div className="h-2 w-24 rounded bg-white/10" />
                  </div>
                </div>

                {/* content */}
                <div className="p-6">
                  {/* tag + icon row */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold text-violet-400 font-general">
                      {svc.num} — {svc.tag}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors duration-300 group-hover:border-violet-500/30 group-hover:text-violet-400">
                      {svc.icon}
                    </div>
                  </div>

                  {/* title */}
                  <h3 className="mb-2 font-zentry text-xl font-black text-white leading-tight md:text-2xl">
                    {svc.title}
                  </h3>

                  {/* description */}
                  <p className="text-sm leading-relaxed text-slate-400 font-circular-web">
                    {svc.desc}
                  </p>
                </div>

                {/* bottom hover accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
