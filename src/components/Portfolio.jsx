import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Nova Banking",
    category: "Fintech",
    categoryColor: "bg-blue-600",
    desc: "Next-gen mobile banking experience",
    year: "2023",
    icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
    mockup: (
      /* Fintech dashboard mockup */
      <div className="relative h-full w-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex items-center justify-center">
        <div className="w-full max-w-[280px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm">
          <div className="mb-1 text-[10px] text-slate-400">Total Balance</div>
          <div className="mb-4 text-2xl font-bold text-white font-zentry">$24,500.00</div>
          <div className="flex gap-1">
            <div className="h-1.5 w-12 rounded-full bg-blue-500" />
            <div className="h-1.5 w-6 rounded-full bg-blue-500/30" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-8 rounded-lg bg-white/5" />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Aura Health",
    category: "Lifestyle",
    categoryColor: "bg-violet-600",
    desc: "Wellness tracking and meditation",
    year: "2024",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    mockup: (
      /* Health app mockup */
      <div className="relative h-full w-full bg-gradient-to-br from-violet-900/80 to-purple-900/80 p-6 flex items-center justify-center">
        <div className="flex gap-3 w-full max-w-[300px]">
          <div className="flex-1 rounded-2xl border border-white/10 bg-violet-600/30 p-4">
            <div className="text-lg font-bold text-white font-zentry">Mobile First</div>
            <div className="mt-1 text-[10px] text-white/60">Optimized for high performance and seamless interaction.</div>
          </div>
          <div className="w-24 space-y-2">
            <div className="h-16 rounded-xl bg-white/10" />
            <div className="h-16 rounded-xl bg-white/10" />
            <div className="flex gap-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-6 w-6 rounded-full bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Metric Flow",
    category: "SaaS",
    categoryColor: "bg-emerald-600",
    desc: "Enterprise analytics dashboard",
    year: "2023",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    mockup: (
      /* SaaS dashboard mockup */
      <div className="relative h-full w-full bg-gradient-to-br from-slate-900 to-gray-900 p-5 flex items-center justify-center">
        <div className="w-full max-w-[300px] rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="mb-3 flex gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-3 flex-1 rounded bg-white/10" />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-8 rounded-lg bg-white/5" />
            ))}
          </div>
          <div className="h-2 w-full rounded bg-white/5" />
        </div>
      </div>
    ),
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* heading */
      gsap.fromTo(
        ".pf-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pf-heading-block", start: "top 80%" },
        }
      );

      /* cards */
      gsap.fromTo(
        ".pf-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pf-cards", start: "top 80%" },
        }
      );
    }, section);

    return () => ctx.revert();
  });

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector(".pf-card")?.offsetWidth || 400;
    const gap = 24;
    const next = Math.max(0, Math.min(currentIndex + dir, projects.length - 1));
    setCurrentIndex(next);
    gsap.to(track, {
      x: -(next * (cardWidth + gap)),
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-screen overflow-hidden bg-black py-28 md:py-40"
    >
      {/* separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* ═══ HEADER ═══ */}
        <div className="pf-heading-block mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            {/* label */}
            <span className="pf-heading mb-5 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400 font-general">
              Our Work &amp; Philosophy
            </span>

            {/* heading */}
            <h2 className="pf-heading font-zentry font-black text-4xl uppercase leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Transforming Ideas<br />
              into<br />
              Digital Reality.
            </h2>

            {/* description */}
            <p className="pf-heading mt-6 max-w-xl text-base leading-relaxed text-slate-400 font-circular-web md:text-lg">
              We partner with visionary companies to build products that redefine industries. From fintech to healthcare, our portfolio reflects precision, aesthetics, and technical excellence.
            </p>
          </div>

          {/* nav arrows */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scroll(-1)}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-white/40 hover:bg-white/5 disabled:opacity-30"
              disabled={currentIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-white/40 hover:bg-white/5 disabled:opacity-30"
              disabled={currentIndex === projects.length - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* ═══ CARDS CAROUSEL ═══ */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="pf-cards flex gap-6 will-change-transform"
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="pf-card group flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[440px] overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.12]"
              >
                {/* mockup area */}
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  {project.mockup}
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                {/* info */}
                <div className="p-6">
                  {/* icon + name + desc row */}
                  <div className="mb-5 flex items-start gap-4">
                    {/* project icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={project.icon} />
                      </svg>
                    </div>

                    {/* category pill */}
                    <span className={`mt-0.5 inline-block rounded-md ${project.categoryColor} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white font-general`}>
                      {project.category}
                    </span>

                    {/* name + desc */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-zentry text-2xl font-black text-white leading-tight md:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400 font-circular-web">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  {/* divider */}
                  <div className="h-px w-full bg-white/[0.06]" />

                  {/* bottom row */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-general">
                      Built in <span className="text-violet-400 font-semibold">{project.year}</span>
                    </span>

                    {/* arrow link */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10 group-hover:text-violet-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
