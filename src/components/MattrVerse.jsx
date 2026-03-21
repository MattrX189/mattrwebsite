import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/* ─── Tilt wrapper ─── */
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const tiltX = ((e.clientY - top) / height - 0.5) * 5;
    const tiltY = ((e.clientX - left) / width - 0.5) * -5;
    setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95,.95,.95)`);
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

/* ─── Card ─── */
const BentoCard = ({ title, description, graphic: Graphic }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setCursorPosition({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div className="relative size-full">
      {Graphic && <Graphic />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      <div className="relative z-10 flex size-full flex-col justify-start p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-white/70">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   GRAPHIC BACKGROUNDS
   ═══════════════════════════════════════ */
const StudiosGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-950/80 via-black to-indigo-950/60" />
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }} />

    {/* IDE layout — right 65% of card, full height */}
    <div className="absolute inset-y-0 right-0 w-[65%] flex flex-col gap-3 p-4">

      {/* Browser mockup — top section */}
      <div className="flex-[3] rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm shadow-2xl flex flex-col overflow-hidden animate-float-slow">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5 shrink-0">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="ml-3 flex-1 rounded-md bg-white/[0.05] px-3 py-1">
            <span className="font-general text-[9px] text-white/30">mattrdesign.studio</span>
          </div>
        </div>
        <div className="p-4 space-y-3 flex-1 flex flex-col">
          <div className="h-3 w-[65%] rounded-full bg-gradient-to-r from-violet-400/25 to-indigo-400/25" />
          <div className="h-2 w-[85%] rounded-full bg-white/[0.06]" />
          <div className="h-2 w-[55%] rounded-full bg-white/[0.06]" />
          <div className="grid grid-cols-3 gap-2 flex-1 mt-2">
            <div className="rounded-lg bg-gradient-to-br from-violet-500/15 to-indigo-500/15 border border-violet-500/10 min-h-[40px]" />
            <div className="rounded-lg bg-gradient-to-br from-indigo-500/15 to-blue-500/15 border border-indigo-500/10 min-h-[40px]" />
            <div className="rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/10 min-h-[40px]" />
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="rounded-lg bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/8 min-h-[30px]" />
            <div className="rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/8 min-h-[30px]" />
          </div>
          <div className="h-8 w-[30%] rounded-full bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border border-violet-500/15 shrink-0" />
        </div>
      </div>

      {/* Code editor — bottom section */}
      <div className="flex-[2] rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm shadow-2xl flex flex-col overflow-hidden animate-float-slow-reverse">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2 shrink-0">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
          <span className="ml-3 font-general text-[9px] text-white/20">App.tsx</span>
        </div>
        <div className="p-3 font-mono text-[10px] leading-relaxed space-y-0.5 flex-1 overflow-hidden">
          <div><span className="text-violet-400/70">import</span> <span className="text-blue-300/60">React</span> <span className="text-violet-400/70">from</span> <span className="text-emerald-400/60">&apos;react&apos;</span></div>
          <div><span className="text-violet-400/70">import</span> <span className="text-blue-300/60">{"{ motion }"}</span> <span className="text-violet-400/70">from</span> <span className="text-emerald-400/60">&apos;framer&apos;</span></div>
          <div><span className="text-violet-400/70">import</span> <span className="text-blue-300/60">{"{ gsap }"}</span> <span className="text-violet-400/70">from</span> <span className="text-emerald-400/60">&apos;gsap&apos;</span></div>
          <div className="h-1" />
          <div><span className="text-violet-400/70">const</span> <span className="text-yellow-300/60">App</span> <span className="text-white/30">= () =&gt; {"{"}</span></div>
          <div className="pl-4"><span className="text-violet-400/70">const</span> <span className="text-blue-300/60">ref</span> <span className="text-white/30">= </span><span className="text-yellow-300/60">useRef</span><span className="text-white/30">(</span><span className="text-orange-300/50">null</span><span className="text-white/30">)</span></div>
          <div className="pl-4"><span className="text-yellow-300/60">useEffect</span><span className="text-white/30">(() =&gt; {"{"}</span></div>
          <div className="pl-8"><span className="text-blue-300/60">gsap</span><span className="text-white/30">.</span><span className="text-yellow-300/60">to</span><span className="text-white/30">(ref, {"{"} </span><span className="text-cyan-300/50">opacity</span><span className="text-white/20">: </span><span className="text-orange-300/50">1</span><span className="text-white/30"> {"}"})</span></div>
          <div className="pl-4"><span className="text-white/30">{"}"}, [])</span></div>
          <div className="pl-4"><span className="text-violet-400/70">return</span> <span className="text-blue-300/60">&lt;motion.div</span> <span className="text-cyan-300/50">animate</span><span className="text-white/20">=</span><span className="text-emerald-400/60">{"{...}"}</span> <span className="text-blue-300/60">/&gt;</span></div>
          <div><span className="text-white/30">{"}"}</span></div>
        </div>
      </div>

      {/* Terminal — bottom strip */}
      <div className="flex-[1] rounded-lg border border-white/[0.08] bg-[#0d0b14]/80 backdrop-blur-sm shadow-xl flex flex-col overflow-hidden">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-1.5 shrink-0">
          <div className="h-2 w-2 rounded-full bg-emerald-400/50" />
          <span className="font-general text-[8px] text-white/20">terminal</span>
        </div>
        <div className="p-2 font-mono text-[9px] leading-relaxed space-y-0.5 flex-1">
          <div><span className="text-emerald-400/50">$</span> <span className="text-white/30">npm run build</span></div>
          <div><span className="text-white/15">✓ 142 modules transformed &middot; built in 1.2s</span></div>
          <div><span className="text-emerald-400/50">$</span> <span className="text-white/30">npm run deploy</span></div>
          <div><span className="text-emerald-400/40">✓ deployed to production</span></div>
        </div>
      </div>
    </div>

    {/* Glow effects */}
    <div className="absolute top-[15%] left-[20%] h-48 w-48 rounded-full bg-violet-500/10 blur-[120px] animate-pulse" />
    <div className="absolute bottom-[20%] left-[10%] h-40 w-40 rounded-full bg-indigo-500/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
    <div className="absolute top-[50%] left-[35%] h-36 w-36 rounded-full bg-violet-600/8 blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />
  </div>
);

const LabsGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/60 via-black to-blue-950/60" />
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
      backgroundSize: "30px 30px",
    }} />
    <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[45%] max-w-[180px] animate-float-slow">
      <div className="rounded-[24px] border border-white/[0.1] bg-white/[0.04] p-2 backdrop-blur-sm shadow-2xl">
        <div className="rounded-[18px] border border-white/[0.06] bg-black/50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[8px] text-white/30 font-general">9:41</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-3 rounded-sm bg-white/20" />
              <div className="h-1.5 w-1.5 rounded-sm bg-white/20" />
            </div>
          </div>
          <div className="px-3 pb-4 space-y-3">
            <div className="h-20 w-full rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/10 flex items-center justify-center">
              <div className="h-8 w-8 rounded-lg bg-cyan-400/20 border border-cyan-400/20" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-[80%] rounded-full bg-white/10" />
              <div className="h-2 w-[60%] rounded-full bg-white/[0.06]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/10" />
              <div className="h-10 rounded-lg bg-blue-500/10 border border-blue-500/10" />
            </div>
            <div className="h-7 w-full rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/15" />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-[15%] left-[12%] h-5 w-5 rounded-full border border-cyan-400/30 animate-spin-slow" />
    <div className="absolute bottom-[20%] right-[15%] h-3 w-3 rounded-full bg-cyan-400/20 animate-pulse" />
    <div className="absolute top-[40%] right-[12%] h-8 w-8 rounded-full border border-blue-400/15 animate-spin-slow" style={{ animationDuration: "8s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-cyan-500/8 blur-[80px]" />
  </div>
);

const MediaGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-950/50 via-black to-orange-950/50" />
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-3 w-full max-w-[280px] animate-float-slow">
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-rose-500/15 to-orange-500/15 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="h-0 w-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white/50 ml-0.5" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-orange-500/15 to-yellow-500/15 p-3 flex flex-col justify-end">
            <div className="h-1.5 w-[70%] rounded-full bg-white/10" />
            <div className="h-1.5 w-[50%] rounded-full bg-white/[0.06] mt-1.5" />
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-pink-500/15 to-rose-500/15 p-3 flex flex-col justify-end">
            <div className="h-1.5 w-[60%] rounded-full bg-white/10" />
            <div className="h-1.5 w-[40%] rounded-full bg-white/[0.06] mt-1.5" />
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-amber-500/15 to-orange-500/15 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="h-0 w-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white/50 ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-[10%] right-[10%] h-4 w-4 rounded-full bg-rose-400/20 animate-pulse" />
    <div className="absolute bottom-[15%] left-[10%] h-3 w-3 rounded-full bg-orange-400/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-rose-500/8 blur-[60px]" />
  </div>
);

const BuildrsGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-black to-teal-950/50" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[280px] h-[200px] animate-float-slow">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/20 flex items-center justify-center backdrop-blur-sm z-10">
          <span className="text-emerald-400/70 font-bold text-lg">M</span>
        </div>
        <div className="absolute top-[5%] left-[15%] h-9 w-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-emerald-400/25" />
        </div>
        <div className="absolute top-[8%] right-[18%] h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-teal-400/25" />
        </div>
        <div className="absolute bottom-[10%] left-[10%] h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <div className="h-3.5 w-3.5 rounded-full bg-cyan-400/25" />
        </div>
        <div className="absolute bottom-[5%] right-[12%] h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/25" />
        </div>
        <div className="absolute top-[40%] left-[2%] h-7 w-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-teal-400/25" />
        </div>
        <div className="absolute top-[35%] right-[2%] h-9 w-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-emerald-400/25" />
        </div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="20%" y2="15%" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="78%" y2="18%" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="85%" y2="88%" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="8%" y2="48%" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="50%" x2="92%" y2="42%" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-emerald-500/8 blur-[80px]" />
  </div>
);

/* ═══════════════════════════════════════
   MATTRVERSE COMPONENT
   ═══════════════════════════════════════ */
const MattrVerse = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const introWrap = section.querySelector(".mv-intro-wrap");
      const bg = section.querySelector(".mv-bg");
      const heading = section.querySelector(".mv-heading");
      const tagline = section.querySelector(".mv-tagline");
      const subtitle = section.querySelector(".mv-subtitle");

      if (!introWrap || !bg || !heading || !tagline) return;

      // Initial states
      gsap.set(bg, { yPercent: 100 });
      gsap.set(heading, { opacity: 0, scale: 0.85 });
      gsap.set(tagline, { opacity: 0, y: -20 });
      gsap.set(subtitle, { opacity: 0, y: 20 });

      const phaseScroll = 600;
      const totalPhases = 4;

      // Initial state for Studios card inside pin
      const heroCard = section.querySelector(".mv-card-hero");
      if (heroCard) gsap.set(heroCard, { opacity: 0, y: 80 });

      // Pinned intro: 4 phases — bg, heading, heading moves, Studios card
      ScrollTrigger.create({
        trigger: introWrap,
        start: "top top",
        end: `+=${phaseScroll * totalPhases}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;

          // Phase 1 (0→0.25): Background slides up
          const p1 = Math.min(p / (1 / 4), 1);
          const e1 = 1 - Math.pow(1 - p1, 3);
          gsap.set(bg, { yPercent: (1 - e1) * 100 });

          // Phase 2 (0.25→0.5): Heading appears centered
          const p2 = Math.max(0, Math.min((p - 1 / 4) / (1 / 4), 1));
          const e2 = 1 - Math.pow(1 - p2, 3);
          gsap.set(tagline, { opacity: e2, y: (1 - e2) * -20 });
          gsap.set(heading, { opacity: e2, scale: 0.85 + e2 * 0.15 });

          // Phase 3 (0.5→0.75): Heading group moves to top + shrinks
          const p3 = Math.max(0, Math.min((p - 2 / 4) / (1 / 4), 1));
          const e3 = 1 - Math.pow(1 - p3, 3);
          const vh = window.innerHeight;
          const headingContainer = section.querySelector(".mv-heading-container");
          if (headingContainer) {
            gsap.set(headingContainer, { y: e3 * -(vh * 0.42) });
          }
          gsap.set(heading, { scale: 1 - e3 * 0.45 });
          gsap.set(tagline, { scale: 1 - e3 * 0.3 });
          gsap.set(subtitle, { opacity: e3, y: (1 - e3) * 20 });

          // Phase 4 (0.75→1.0): Studios card appears
          const p4 = Math.max(0, Math.min((p - 3 / 4) / (1 / 4), 1));
          const e4 = 1 - Math.pow(1 - p4, 3);
          if (heroCard) gsap.set(heroCard, { opacity: e4, y: (1 - e4) * 80 });
        },
      });

      // Remaining cards — scroll-triggered entrances in normal flow
      const cards = [
        { selector: ".mv-card-1", y: 80 },
        { selector: ".mv-card-2", y: 80 },
        { selector: ".mv-card-3", y: 80 },
      ];

      cards.forEach(({ selector, y }) => {
        const card = section.querySelector(selector);
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.5,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  });

  return (
    <section ref={sectionRef} className="relative bg-black" style={{ zIndex: 60 }}>
      {/* Pinned intro section */}
      <div className="mv-intro-wrap relative overflow-hidden min-h-screen">
        {/* Background overlay */}
        <div className="mv-bg absolute inset-0" style={{ zIndex: 1 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#08060f] via-[#0a0814] to-[#06050d]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(139,92,246,0.5) 1px, transparent 0)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute top-[20%] left-[15%] h-[350px] w-[350px] rounded-full bg-violet-600/[0.1] blur-[140px]" />
          <div className="absolute bottom-[15%] right-[20%] h-[300px] w-[300px] rounded-full bg-indigo-500/[0.08] blur-[120px]" />
        </div>

        {/* Heading — single element that moves from center to top */}
        <div
          className="mv-heading-container absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          style={{ zIndex: 2 }}
        >
          <span className="mv-tagline relative mb-5 inline-block rounded-full border border-[#CAFF29]/20 bg-[#CAFF29]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#CAFF29] font-general">
            Our Ecosystem
          </span>
          <div className="mv-heading">
            <h1 className="relative special-font font-zentry font-black text-5xl sm:text-7xl md:text-8xl text-white">
              Welcome to
            </h1>
            <h1 className="relative special-font font-zentry font-black text-6xl sm:text-8xl md:text-9xl text-gradient-violet">
              MattrVerse
            </h1>
          </div>
          <p className="mv-subtitle mx-auto mt-4 max-w-lg text-sm text-slate-400 font-circular-web md:text-base">
            Mattr is not just a service company. We are builders at heart.
          </p>
        </div>

        {/* Studios card — inside pinned section, appears in phase 4 */}
        <div
          className="absolute left-0 right-0 bottom-0 px-3 md:px-10"
          style={{ zIndex: 3, top: "35%" }}
        >
          <div className="max-w-7xl mx-auto">
            <BentoTilt className="mv-card-hero border-hsla relative h-[65vh] w-full overflow-hidden rounded-2xl opacity-0">
              <BentoCard
                title={<>Studios</>}
                description="Crafting digital experiences with precision — web, design, AI, and automation that fuel real growth."
                graphic={StudiosGraphic}
              />
            </BentoTilt>
          </div>
        </div>
      </div>

      {/* Remaining cards — normal flow */}
      <div className="relative bg-gradient-to-b from-[#08060f] via-[#0a0814] to-[#06050d] px-3 md:px-10 pb-16 pt-7">
        <div className="max-w-7xl mx-auto">
          <div className="grid w-full grid-cols-1 gap-5 md:h-[135vh] md:grid-cols-2 md:grid-rows-3">
            <BentoTilt className="mv-card-1 bento-tilt_1 row-span-1 h-72 md:h-auto md:col-span-1 md:row-span-2 overflow-hidden rounded-2xl">
              <BentoCard
                title={<>Labs</>}
                description="Building bold products that simplify life and inspire innovation."
                graphic={LabsGraphic}
              />
            </BentoTilt>

            <BentoTilt className="mv-card-2 bento-tilt_1 row-span-1 h-72 md:h-auto md:col-span-1 overflow-hidden rounded-2xl">
              <BentoCard
                title={<>Media</>}
                description="Content that educates, empowers, and sparks curiosity in tech."
                graphic={MediaGraphic}
              />
            </BentoTilt>

            <BentoTilt className="mv-card-3 bento-tilt_1 h-72 md:h-auto md:col-span-1 overflow-hidden rounded-2xl">
              <BentoCard
                title={<>Buildrs Hub</>}
                description="A community of visionaries collaborating to build what truly matters."
                graphic={BuildrsGraphic}
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MattrVerse;
