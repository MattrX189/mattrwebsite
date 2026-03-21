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
   FULL-PAGE PROJECT DETAIL OVERLAY
   ═══════════════════════════════════════════════════ */
const ProjectDetail = ({ project, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
    tl.fromTo(contentRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.2");
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(contentRef.current, { y: 60, opacity: 0, duration: 0.3, ease: "power2.in" });
    tl.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.15");
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/90 backdrop-blur-xl p-4 md:p-8"
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div ref={contentRef} className="relative w-full max-w-4xl">
        {/* close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white md:-top-4 md:-right-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c10]">
          {/* hero area */}
          <div className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${project.bgGrad} md:h-80`}>
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full blur-[80px] opacity-30"
              style={{ backgroundColor: project.accentColor }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {project.logo ? (
                <img src={project.logo} alt={project.name} className="h-24 w-auto max-w-[220px] object-contain drop-shadow-2xl md:h-32" />
              ) : (
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm">
                  <span className="font-circular-web text-5xl font-bold" style={{ color: `${project.accentColor}80` }}>
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c0c10] to-transparent" />
          </div>

          {/* content */}
          <div className="px-8 pb-10 pt-4 md:px-12 md:pb-14">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-general text-[9px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  borderColor: `${project.accentColor}30`,
                  backgroundColor: `${project.accentColor}10`,
                  color: `${project.accentColor}cc`,
                }}
              >
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: project.accentColor }} />
                {project.category}
              </span>
            </div>

            <h2 className="mb-2 font-circular-web text-3xl font-medium text-white md:text-4xl">
              {project.name}
            </h2>
            <p className="mb-6 font-general text-[10px] uppercase tracking-[0.2em] text-white/30">
              {project.tagline}
            </p>

            <p className="mb-8 max-w-2xl font-circular-web text-base leading-[1.9] text-white/50 md:text-lg">
              {project.desc}
            </p>

            <div className="mb-8 h-px w-full bg-white/[0.06]" />

            <div className="mb-8">
              <h4 className="mb-4 font-general text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Services Delivered
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, i) => (
                  <span
                    key={i}
                    className="rounded-full border px-4 py-2 font-general text-[10px] uppercase tracking-[0.15em] transition-all"
                    style={{
                      borderColor: `${project.accentColor}20`,
                      backgroundColor: `${project.accentColor}08`,
                      color: `${project.accentColor}aa`,
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-general text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:gap-4"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}40, ${project.accentColor}20)`,
                border: `1px solid ${project.accentColor}30`,
              }}
            >
              Visit Project
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   STACKED CARD — wide landscape layout
   ═══════════════════════════════════════════════════ */
const StackCard = ({ project, index, totalCards, onClick }) => {
  return (
    <div
      className="stack-card absolute left-1/2 w-[90vw] max-w-[820px] cursor-pointer"
      data-index={index}
      onClick={() => onClick(project)}
      style={{
        top: "80px",
        zIndex: totalCards - index,
        transformOrigin: "center top",
      }}
    >
      <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111116] shadow-[0_12px_60px_-12px_rgba(0,0,0,0.9)]">
        {/* Two-column layout: image left, content right */}
        <div className="flex flex-col md:flex-row">
          {/* LEFT — visual area */}
          <div className={`relative h-[200px] w-full overflow-hidden bg-gradient-to-br ${project.bgGrad} md:h-auto md:w-[45%] md:min-h-[320px]`}>
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full blur-[70px] opacity-30"
              style={{ backgroundColor: project.accentColor }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {project.logo ? (
                <img src={project.logo} alt={project.name} className="h-16 w-auto max-w-[160px] object-contain opacity-85 drop-shadow-2xl md:h-20 md:max-w-[200px]" />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm md:h-24 md:w-24">
                  <span className="font-circular-web text-3xl font-bold md:text-5xl" style={{ color: `${project.accentColor}70` }}>
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            {/* category pill */}
            <div className="absolute top-4 left-4">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-general text-[8px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm md:text-[9px]"
                style={{
                  borderColor: `${project.accentColor}25`,
                  backgroundColor: `${project.accentColor}10`,
                  color: `${project.accentColor}cc`,
                }}
              >
                <span className="h-1 w-1 rounded-full" style={{ backgroundColor: project.accentColor }} />
                {project.category}
              </span>
            </div>
          </div>

          {/* RIGHT — content area */}
          <div className="flex flex-1 flex-col justify-center px-6 py-5 md:px-10 md:py-8">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-circular-web text-2xl font-medium text-white md:text-3xl">
                  {project.name}
                </h3>
                <span className="mt-1.5 block font-general text-[9px] uppercase tracking-[0.2em] text-white/25 md:text-[10px]">
                  {project.tagline}
                </span>
              </div>
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 text-white/25">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <p className="mb-5 font-circular-web text-sm leading-[1.85] text-white/40 md:text-[15px]">
              {project.desc}
            </p>

            <div className="mb-4 h-px w-full bg-white/[0.06]" />

            <div className="flex flex-wrap gap-2">
              {project.services.map((service, si) => (
                <span
                  key={si}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-general text-[8px] uppercase tracking-[0.15em] text-white/30 md:text-[9px]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-full"
          style={{
            background: `linear-gradient(90deg, ${project.accentColor}60, ${project.accentColor}10, transparent)`,
          }}
        />
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   PORTFOLIO SECTION — stacked cards with scroll
   ═══════════════════════════════════════════════════ */
const Portfolio = () => {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const totalCards = projects.length;

  /* ── scroll-driven stacked card animation ── */
  useGSAP(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    if (!section || !stack) return;

    const ctx = gsap.context(() => {
      /* heading animations */
      gsap.fromTo(
        ".pf-intro",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".pf-heading-block", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".pf-bar",
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.2, ease: "power3.inOut",
          scrollTrigger: { trigger: ".pf-bar", start: "top 85%" },
        }
      );

      /* stacked cards scroll animation — single pass with 2x scale */
      const cards = gsap.utils.toArray(".stack-card");
      const stackOffset = -22;
      const scaleStep = 0.03;
      const visibleCards = 5;

      gsap.set(stack, { perspective: 1200 });

      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          y: i * stackOffset,
          scale: 1 - i * scaleStep,
          opacity: i < visibleCards ? 1 : 0,
          zIndex: totalCards - i,
          rotateX: 0,
        });
      });

      const scrollPerCard = 1 / totalCards;

      // Total scroll: cards + 4 extra phases (overlay, heading, content, button)
      const cardScrollTotal = totalCards * 600;
      const phaseScroll = 400;
      const totalScroll = cardScrollTotal + phaseScroll * 4;

      // Set initial states for CTA elements
      const ctaOverlay = section.querySelector(".pf-cta-overlay");
      const ctaHeading = section.querySelector(".pf-cta-heading");
      const ctaContent = section.querySelector(".pf-cta-content");
      const ctaButton = section.querySelector(".pf-cta-button");
      if (ctaOverlay) gsap.set(ctaOverlay, { opacity: 0, pointerEvents: "none" });
      if (ctaHeading) gsap.set(ctaHeading, { opacity: 0, y: 40 });
      if (ctaContent) gsap.set(ctaContent, { opacity: 0, y: 30 });
      if (ctaButton) gsap.set(ctaButton, { opacity: 0, scale: 0.5, y: 20 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;
          const cardPhaseEnd = cardScrollTotal / totalScroll;

          // ── CARD ANIMATION PHASE ──
          const cardProgress = Math.min(progress / cardPhaseEnd, 1);
          const currentCard = Math.min(Math.floor(cardProgress * totalCards), totalCards - 1);

          cards.forEach((card, i) => {
            const perCard = 1 / totalCards;
            const cp = (cardProgress - i * perCard) / perCard;

            if (i < currentCard) {
              gsap.set(card, {
                xPercent: -50, y: 900, scale: 2, opacity: 0,
                zIndex: totalCards + i, rotateX: -18,
              });
            } else if (i === currentCard) {
              const exit = Math.max(0, cp);
              gsap.set(card, {
                xPercent: -50,
                y: exit * exit * 900,
                scale: 1 + exit * 1.0,
                opacity: exit < 0.5 ? 1 : Math.max(0, 1 - (exit - 0.5) * 2),
                zIndex: totalCards + 1,
                rotateX: exit * -18,
              });
            } else {
              const stackIndex = i - currentCard;
              const approach = Math.max(0, Math.min(1, cp + 1));
              const targetY = stackIndex * stackOffset - approach * stackOffset;
              const targetScale = 1 - stackIndex * scaleStep + approach * scaleStep;
              gsap.set(card, {
                xPercent: -50,
                y: targetY,
                scale: Math.min(1, Math.max(1 - visibleCards * scaleStep, targetScale)),
                opacity: stackIndex < visibleCards ? 1 : 0,
                zIndex: totalCards - stackIndex,
                rotateX: 0,
              });
            }
          });

          // ── CTA PHASES (after all cards exit) ──
          const ctaProgress = Math.max(0, (progress - cardPhaseEnd) / (1 - cardPhaseEnd));

          // Phase 1 (0→0.25): Opaque overlay fades in
          const p1 = Math.min(ctaProgress / 0.25, 1);
          if (ctaOverlay) {
            gsap.set(ctaOverlay, {
              opacity: p1,
              pointerEvents: p1 > 0.5 ? "auto" : "none",
            });
          }

          // Phase 2 (0.25→0.50): Heading animates in
          const p2 = Math.max(0, Math.min((ctaProgress - 0.25) / 0.25, 1));
          if (ctaHeading) {
            gsap.set(ctaHeading, {
              opacity: p2,
              y: (1 - p2) * 50,
            });
          }

          // Phase 3 (0.50→0.75): Description + stats animate in
          const p3 = Math.max(0, Math.min((ctaProgress - 0.50) / 0.25, 1));
          if (ctaContent) {
            gsap.set(ctaContent, {
              opacity: p3,
              y: (1 - p3) * 30,
            });
          }

          // Phase 4 (0.75→1.0): CTA button — dramatic scale + glow entrance
          const p4 = Math.max(0, Math.min((ctaProgress - 0.75) / 0.25, 1));
          if (ctaButton) {
            const eased = p4 < 1 ? 1 - Math.pow(1 - p4, 3) : 1;
            const btnScale = 0.6 + eased * 0.4;
            gsap.set(ctaButton, {
              opacity: p4,
              scale: btnScale,
              y: (1 - eased) * 30,
            });
            // Apply glow to the anchor itself, not the wrapper div
            const btnLink = ctaButton.querySelector("a");
            if (btnLink) {
              const g = eased * 50;
              btnLink.style.boxShadow = `0 0 ${g}px rgba(202,255,41,${eased * 0.5}), 0 0 ${g * 2.5}px rgba(202,255,41,${eased * 0.2}), 0 0 ${g * 4}px rgba(202,255,41,${eased * 0.08})`;
            }
          }
        },
      });

      /* background orbs */
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

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative w-screen overflow-hidden bg-black pt-6 pb-8 md:pt-8 md:pb-12"
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

      {/* ═══════════ STACKED CARDS ═══════════ */}
      <div ref={stackRef} className="relative z-10 mx-auto w-full h-[calc(100dvh-200px)]">
        {/* card stack */}
        <div className="relative h-full w-full">
          {projects.map((project, i) => (
            <StackCard
              key={project.name}
              project={project}
              index={i}
              totalCards={totalCards}
              onClick={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* ═══════════ FULL-SCREEN CTA OVERLAY ═══════════ */}
      <div className="pf-cta-overlay absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black opacity-0 pointer-events-none" style={{ transformOrigin: "center center" }}>
        {/* background glow orbs */}
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/[0.1] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-indigo-500/[0.08] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-violet-500/[0.05] blur-[150px]" />

        {/* dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />

        {/* ── HEADING GROUP (Phase 2) ── */}
        <div className="pf-cta-heading relative flex flex-col items-center">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-violet-400 to-transparent" />
            <span className="font-general text-[10px] font-medium uppercase tracking-[0.25em] text-violet-400">
              What's Next?
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-violet-400 to-transparent" />
          </div>

          <h3 className="mb-4 font-circular-web text-4xl font-medium leading-[1.2] text-white md:text-6xl lg:text-7xl">
            Let's build something{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h3>
        </div>

        {/* ── CONTENT GROUP (Phase 3) ── */}
        <div className="pf-cta-content relative flex flex-col items-center">
          <div className="mx-auto my-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />

          <p className="mx-auto mb-6 max-w-lg font-circular-web text-base leading-[1.8] text-slate-400 md:text-[17px]">
            We've shipped{" "}
            <span className="text-white/80">50+ products</span> across industries — each one built with obsessive attention to detail.
          </p>

          <div className="mb-10 flex items-center gap-10 md:gap-16">
          {[
            { num: "50+", label: "Products" },
            { num: "30+", label: "Brands" },
            { num: "6+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-circular-web text-3xl font-medium text-white md:text-4xl">
                {stat.num}
              </span>
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        </div>

        {/* ── CTA BUTTON (Phase 4) ── */}
        <div className="pf-cta-button relative mt-10">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-3 rounded-full bg-[#CAFF29] px-12 py-5 font-general text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 md:px-14 md:py-6 md:text-base"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ═══════════ FULL PAGE DETAIL OVERLAY ═══════════ */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
