import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Skin Inspired",
    category: "Beauty & Skincare",
    tagline: "E-Commerce · UI/UX · Branding",
    desc: "A premium skincare e-commerce experience with elegant product showcases and seamless checkout — designed to convert browsers into loyal customers.",
    url: "https://skininspired.in",
    services: ["E-Commerce", "UI/UX Design", "Branding"],
    logo: "/img/clients/skininspired.png",
    accentColor: "#f472b6",
    bgGrad: "from-rose-500/10 via-pink-500/5 to-fuchsia-500/10",
  },
  {
    name: "Lonewolf",
    category: "Craft Beverages",
    tagline: "Web Design · Brand Identity · Development",
    desc: "Bold brand identity and immersive web experience for a craft beverage company — capturing the spirit of independence with rich visuals and smooth interactions.",
    url: "https://lonewolfbev.com",
    services: ["Web Design", "Brand Identity", "Development"],
    logo: "/img/clients/lonewolf.png",
    accentColor: "#fb923c",
    bgGrad: "from-amber-500/10 via-orange-500/5 to-yellow-500/10",
  },
  {
    name: "Liu Vinci",
    category: "Fashion & Lifestyle",
    tagline: "E-Commerce · Creative Direction · UI/UX",
    desc: "A luxury fashion platform blending art and commerce — featuring editorial-grade layouts, dynamic lookbooks, and a refined shopping experience.",
    url: "https://www.liuvinci.com",
    services: ["E-Commerce", "Creative Direction", "UI/UX"],
    logo: "/img/clients/liuvinci.png",
    accentColor: "#a78bfa",
    bgGrad: "from-violet-500/10 via-purple-500/5 to-indigo-500/10",
  },
  {
    name: "Nextbot",
    category: "AI & Technology",
    tagline: "Product Design · Full-Stack Dev · AI",
    desc: "An intelligent AI chatbot platform with a clean, modern interface — empowering businesses to automate conversations and scale customer engagement.",
    url: "https://www.nextbot.in",
    services: ["Product Design", "Full-Stack Dev", "AI Integration"],
    logo: null,
    accentColor: "#22d3ee",
    bgGrad: "from-cyan-500/10 via-blue-500/5 to-indigo-500/10",
  },
  {
    name: "Chef Decoded",
    category: "Food & Culinary",
    tagline: "Web Design · Content Strategy · Dev",
    desc: "A culinary content platform that brings recipes and food stories to life — with appetite-driven visuals and an intuitive browsing experience.",
    url: "https://www.chefdecoded.com",
    services: ["Web Design", "Content Strategy", "Development"],
    logo: "/img/clients/chefdecoded.png",
    accentColor: "#34d399",
    bgGrad: "from-emerald-500/10 via-teal-500/5 to-green-500/10",
  },
  {
    name: "Patent Ninja",
    category: "Legal Tech",
    tagline: "Product Design · SaaS · UX Research",
    desc: "A powerful IP management platform that simplifies patent research and filing — combining complex legal workflows into an intuitive interface.",
    url: "https://patent.ninja",
    services: ["Product Design", "SaaS Development", "UX Research"],
    logo: null,
    accentColor: "#818cf8",
    bgGrad: "from-indigo-500/10 via-violet-500/5 to-purple-500/10",
  },
];

/* ═══════════════════════════════════════════════════
   SINGLE CARD  –  kree8-inspired tall showcase card
   ═══════════════════════════════════════════════════ */
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleCardEnter = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      scale: 1.06,
      y: -8,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleCardLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="pf-slide group relative z-0 flex-shrink-0 will-change-transform hover:z-10"
      style={{ width: "420px" }}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#111116] transition-all duration-500 hover:border-white/[0.14] hover:bg-[#141419] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)]">
          {/* ── VISUAL AREA ── */}
          <div className={`relative h-[280px] w-full overflow-hidden bg-gradient-to-br ${project.bgGrad}`}>
            {/* subtle noise */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* decorative floating shapes */}
            <div
              className="absolute top-6 right-6 h-20 w-20 rounded-2xl border opacity-[0.08] transition-all duration-700 group-hover:opacity-[0.15] group-hover:rotate-12"
              style={{ borderColor: project.accentColor }}
            />
            <div
              className="absolute bottom-8 left-6 h-14 w-14 rounded-full border opacity-[0.06] transition-all duration-700 group-hover:opacity-[0.12] group-hover:-rotate-12"
              style={{ borderColor: project.accentColor }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full blur-[60px] opacity-20 transition-opacity duration-700 group-hover:opacity-40"
              style={{ backgroundColor: project.accentColor }}
            />

            {/* center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.name}
                  className="relative h-20 w-auto max-w-[180px] object-contain opacity-70 drop-shadow-2xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-110 sm:h-24"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-700 group-hover:scale-110 group-hover:border-white/[0.15]">
                  <span
                    className="font-circular-web text-4xl font-bold transition-colors duration-700"
                    style={{ color: `${project.accentColor}60` }}
                  >
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* category pill */}
            <div className="absolute top-5 left-5">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-general text-[9px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm"
                style={{
                  borderColor: `${project.accentColor}25`,
                  backgroundColor: `${project.accentColor}08`,
                  color: `${project.accentColor}cc`,
                }}
              >
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: project.accentColor }}
                />
                {project.category}
              </span>
            </div>

            {/* bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111116] to-transparent" />
          </div>

          {/* ── CONTENT AREA ── */}
          <div className="flex flex-1 flex-col px-7 pb-7 pt-2">
            {/* name + arrow row */}
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-circular-web text-[1.4rem] font-medium text-white transition-colors duration-500 group-hover:text-white">
                  {project.name}
                </h3>
                <span className="mt-1 block font-general text-[10px] uppercase tracking-[0.2em] text-white/25">
                  {project.tagline}
                </span>
              </div>
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-3.5 w-3.5 -rotate-45 text-white/25 transition-all duration-500 group-hover:rotate-0 group-hover:text-white/60"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            {/* description */}
            <p className="mb-5 flex-1 font-circular-web text-[13px] leading-[1.85] text-white/40 transition-colors duration-500 group-hover:text-white/55">
              {project.desc}
            </p>

            {/* divider */}
            <div className="mb-4 h-px w-full bg-white/[0.06]" />

            {/* services tags */}
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, si) => (
                <span
                  key={si}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-general text-[9px] uppercase tracking-[0.15em] text-white/30 transition-all duration-500 group-hover:border-white/[0.1] group-hover:text-white/45"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* bottom accent line */}
          <div
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
            style={{
              background: `linear-gradient(90deg, ${project.accentColor}80, ${project.accentColor}20, transparent)`,
            }}
          />
        </div>
      </a>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   PORTFOLIO SECTION with auto-scrolling carousel
   ═══════════════════════════════════════════════════ */
const Portfolio = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const cardWidth = 420;
  const gap = 24;
  const totalCards = projects.length;

  /* ── Auto-scroll carousel with GSAP ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate cards for seamless infinite scroll
    const totalWidth = (cardWidth + gap) * totalCards;

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: totalCards * 6,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const mod = parseFloat(x) % totalWidth;
          return mod + "px";
        },
      },
    });

    tweenRef.current = tween;

    return () => tween.kill();
  }, []);

  /* ── Pause on hover ── */
  const handleTrackEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };
  const handleTrackLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
    setIsDragging(false);
  };

  /* ── Drag to scroll ── */
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: trackRef.current?.getBoundingClientRect().x || 0 };
    if (tweenRef.current) tweenRef.current.pause();
  };
  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    gsap.set(trackRef.current, { x: `+=${dx}` });
    dragStart.current.x = e.clientX;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    if (tweenRef.current) tweenRef.current.play();
  };

  /* ── Navigate to specific card ── */
  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
    if (tweenRef.current) tweenRef.current.pause();
    const targetX = -(cardWidth + gap) * index;
    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        if (tweenRef.current) {
          tweenRef.current.progress(index / totalCards);
          tweenRef.current.play();
        }
      },
    });
  }, []);

  /* ── GSAP entrance animations ── */
  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pf-intro",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pf-heading-block", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".pf-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".pf-bar", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".pf-carousel-wrap",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pf-carousel-wrap", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".pf-cta",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".pf-cta", start: "top 90%" },
        }
      );

      gsap.to(".pf-orb-1", {
        y: -120,
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.to(".pf-orb-2", {
        y: 100,
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, section);

    return () => ctx.revert();
  });

  /* Duplicate the project list for seamless loop */
  const displayProjects = [...projects, ...projects];

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-screen overflow-hidden bg-black py-28 md:py-40"
    >
      <div className="section-divider absolute top-0 w-full" />

      {/* background orbs */}
      <div className="pf-orb-1 pointer-events-none absolute -top-40 left-[15%] h-[600px] w-[600px] rounded-full bg-violet-500/[0.03] blur-[160px]" />
      <div className="pf-orb-2 pointer-events-none absolute -bottom-32 right-[10%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.03] blur-[140px]" />

      {/* ═══════════ HEADING ═══════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="pf-heading-block mb-16 max-w-3xl">
          <div className="pf-intro mb-6 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-violet-400 to-transparent" />
            <span className="font-general text-[11px] font-medium uppercase tracking-[0.25em] text-violet-400">
              Selected Work
            </span>
          </div>

          <h2 className="pf-intro font-circular-web text-4xl font-medium leading-[1.15] text-white md:text-5xl lg:text-[3.5rem]">
            Projects that define{" "}
            <br className="hidden md:block" />
            how we{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              build & deliver
            </span>
            .
          </h2>

          <div className="pf-bar mt-8 mb-8 h-[2px] w-20 origin-left rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />

          <p className="pf-intro max-w-xl font-circular-web text-base leading-[1.8] text-slate-400 md:text-[17px]">
            From concept to launch — we partner with ambitious brands to ship
            products that are beautiful, performant, and built to last.
          </p>
        </div>
      </div>

      {/* ═══════════ CAROUSEL ═══════════ */}
      <div
        className="pf-carousel-wrap relative z-10 overflow-hidden py-8"
        onMouseEnter={handleTrackEnter}
        onMouseLeave={handleTrackLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {/* left / right fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-black to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-black to-transparent md:w-40" />

        {/* scrolling track */}
        <div
          ref={trackRef}
          className="flex select-none pl-8 md:pl-20"
          style={{ gap: `${gap}px` }}
        >
          {displayProjects.map((project, i) => (
            <ProjectCard
              key={`${project.name}-${i}`}
              project={project}
              index={i % totalCards}
            />
          ))}
        </div>
      </div>

      {/* ═══════════ DOTS ═══════════ */}
      <div className="relative z-10 mt-10 flex items-center justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeIndex === i
                ? "w-8 bg-violet-400"
                : "w-2 bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="pf-cta mt-20 text-center">
          <div className="mx-auto mb-8 h-[1px] w-20 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <p className="mx-auto max-w-lg font-circular-web text-base leading-relaxed text-slate-400 md:text-lg">
            These are just a few. We've shipped{" "}
            <span className="text-white/80">50+ products</span> across
            industries — each one built with obsessive attention to detail.
          </p>
          <a
            href="#contact"
            className="magnetic-btn mt-8 inline-flex items-center gap-3 rounded-full bg-[#CAFF29] px-8 py-4 font-general text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(202,255,41,0.25)]"
          >
            Start Your Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
