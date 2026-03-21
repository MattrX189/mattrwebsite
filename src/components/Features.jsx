import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════════
   STUDIOS GRAPHIC — code editor + browser
   ═══════════════════════════════════════════ */
const StudiosGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* gradient bg */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-950/80 via-black to-indigo-950/60" />

    {/* floating grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }} />

    {/* browser mockup */}
    <div className="absolute top-[15%] right-[8%] w-[55%] max-w-[500px] animate-float-slow">
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm shadow-2xl">
        {/* browser bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="ml-3 flex-1 rounded-md bg-white/[0.05] px-3 py-1">
            <span className="font-general text-[9px] text-white/30">mattrdesign.studio</span>
          </div>
        </div>
        {/* browser content */}
        <div className="p-4 space-y-3">
          <div className="h-3 w-[70%] rounded-full bg-gradient-to-r from-violet-400/20 to-indigo-400/20" />
          <div className="h-2 w-[90%] rounded-full bg-white/[0.06]" />
          <div className="h-2 w-[60%] rounded-full bg-white/[0.06]" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-lg bg-gradient-to-br from-violet-500/15 to-indigo-500/15 border border-violet-500/10" />
            <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-500/15 to-blue-500/15 border border-indigo-500/10" />
            <div className="h-16 rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/10" />
          </div>
          <div className="h-2 w-[45%] rounded-full bg-white/[0.06]" />
          <div className="h-8 w-[35%] rounded-full bg-gradient-to-r from-violet-500/25 to-indigo-500/25 border border-violet-500/15" />
        </div>
      </div>
    </div>

    {/* code editor mockup */}
    <div className="absolute bottom-[10%] left-[5%] w-[45%] max-w-[380px] animate-float-slow-reverse">
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
          <span className="ml-3 font-general text-[9px] text-white/20">App.tsx</span>
        </div>
        <div className="p-4 font-mono text-[10px] leading-relaxed space-y-1">
          <div><span className="text-violet-400/70">import</span> <span className="text-blue-300/60">React</span> <span className="text-violet-400/70">from</span> <span className="text-emerald-400/60">'react'</span></div>
          <div><span className="text-violet-400/70">import</span> <span className="text-blue-300/60">{'{ motion }'}</span> <span className="text-violet-400/70">from</span> <span className="text-emerald-400/60">'framer'</span></div>
          <div className="h-1" />
          <div><span className="text-violet-400/70">const</span> <span className="text-yellow-300/60">App</span> <span className="text-white/30">= () =&gt; {'{'}</span></div>
          <div className="pl-4"><span className="text-violet-400/70">return</span> <span className="text-white/30">(</span></div>
          <div className="pl-8"><span className="text-blue-300/60">&lt;motion.div</span></div>
          <div className="pl-10"><span className="text-cyan-300/50">animate</span><span className="text-white/20">=</span><span className="text-emerald-400/60">{'{...}'}</span></div>
          <div className="pl-8"><span className="text-blue-300/60">/&gt;</span></div>
          <div className="pl-4"><span className="text-white/30">)</span></div>
          <div><span className="text-white/30">{'}'}</span></div>
        </div>
      </div>
    </div>

    {/* floating accent orbs */}
    <div className="absolute top-[20%] left-[30%] h-32 w-32 rounded-full bg-violet-500/10 blur-[80px] animate-pulse" />
    <div className="absolute bottom-[25%] right-[30%] h-24 w-24 rounded-full bg-indigo-500/10 blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />
  </div>
);

/* ═══════════════════════════════════════════
   LABS GRAPHIC — product/app UI mockup
   ═══════════════════════════════════════════ */
const LabsGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/60 via-black to-blue-950/60" />

    {/* floating grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
      backgroundSize: "30px 30px",
    }} />

    {/* phone mockup */}
    <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[45%] max-w-[180px] animate-float-slow">
      <div className="rounded-[24px] border border-white/[0.1] bg-white/[0.04] p-2 backdrop-blur-sm shadow-2xl">
        <div className="rounded-[18px] border border-white/[0.06] bg-black/50 overflow-hidden">
          {/* status bar */}
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[8px] text-white/30 font-general">9:41</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-3 rounded-sm bg-white/20" />
              <div className="h-1.5 w-1.5 rounded-sm bg-white/20" />
            </div>
          </div>
          {/* app content */}
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

    {/* floating molecules/atoms */}
    <div className="absolute top-[15%] left-[12%] h-5 w-5 rounded-full border border-cyan-400/30 animate-spin-slow" />
    <div className="absolute bottom-[20%] right-[15%] h-3 w-3 rounded-full bg-cyan-400/20 animate-pulse" />
    <div className="absolute top-[40%] right-[12%] h-8 w-8 rounded-full border border-blue-400/15 animate-spin-slow" style={{ animationDuration: "8s" }} />

    {/* glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-cyan-500/8 blur-[80px]" />
  </div>
);

/* ═══════════════════════════════════════════
   MEDIA GRAPHIC — content/video layout
   ═══════════════════════════════════════════ */
const MediaGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-950/50 via-black to-orange-950/50" />

    {/* video grid */}
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-3 w-full max-w-[280px] animate-float-slow">
        {/* video card 1 */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-rose-500/15 to-orange-500/15 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="h-0 w-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white/50 ml-0.5" />
            </div>
          </div>
        </div>
        {/* video card 2 */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-orange-500/15 to-yellow-500/15 p-3 flex flex-col justify-end">
            <div className="h-1.5 w-[70%] rounded-full bg-white/10" />
            <div className="h-1.5 w-[50%] rounded-full bg-white/[0.06] mt-1.5" />
          </div>
        </div>
        {/* video card 3 */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-pink-500/15 to-rose-500/15 p-3 flex flex-col justify-end">
            <div className="h-1.5 w-[60%] rounded-full bg-white/10" />
            <div className="h-1.5 w-[40%] rounded-full bg-white/[0.06] mt-1.5" />
          </div>
        </div>
        {/* video card 4 */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden aspect-square">
          <div className="h-full w-full bg-gradient-to-br from-amber-500/15 to-orange-500/15 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <div className="h-0 w-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white/50 ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* floating elements */}
    <div className="absolute top-[10%] right-[10%] h-4 w-4 rounded-full bg-rose-400/20 animate-pulse" />
    <div className="absolute bottom-[15%] left-[10%] h-3 w-3 rounded-full bg-orange-400/20 animate-pulse" style={{ animationDelay: "0.5s" }} />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-rose-500/8 blur-[60px]" />
  </div>
);

/* ═══════════════════════════════════════════
   BUILDRS HUB GRAPHIC — community/network
   ═══════════════════════════════════════════ */
const BuildrsGraphic = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-black to-teal-950/50" />

    {/* network nodes */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[280px] h-[200px] animate-float-slow">
        {/* center node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/20 flex items-center justify-center backdrop-blur-sm z-10">
          <span className="text-emerald-400/70 font-bold text-lg">M</span>
        </div>

        {/* satellite nodes */}
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

        {/* connection lines (SVG) */}
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

    {/* glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-emerald-500/8 blur-[80px]" />
  </div>
);

/* ═══════════════════════════════════════════
   BENTO CARD with graphics
   ═══════════════════════════════════════════ */
export const BentoCard = ({ src, title, description, isComingSoon, graphic: Graphic }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {/* Graphic background */}
      {Graphic && <Graphic />}

      {/* Video fallback (hidden if graphic exists) */}
      {src && !Graphic && (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-white/70">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const introWrap = section.querySelector(".feat-intro-wrap");
      const curtainL = section.querySelector(".feat-curtain-l");
      const curtainR = section.querySelector(".feat-curtain-r");
      const centerTitle = section.querySelector(".feat-center-title");
      const headingBlock = section.querySelector(".feat-heading-block");
      const bentoGrid = section.querySelector(".bento-grid");

      // Initial states — curtains start CLOSED so overlay is immediately visible
      gsap.set(curtainL, { xPercent: 0 });
      gsap.set(curtainR, { xPercent: 0 });
      gsap.set(centerTitle, { opacity: 0, scale: 0.9 });
      gsap.set(headingBlock, { opacity: 0 });
      gsap.set(bentoGrid, { opacity: 0 });

      const phaseScroll = 350;
      const totalPhases = 4;

      ScrollTrigger.create({
        trigger: introWrap,
        start: "top top",
        end: `+=${phaseScroll * totalPhases}`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;

          // Phase 1 (0→0.25): Title appears on closed curtains
          const p1 = Math.min(p / 0.25, 1);
          gsap.set(curtainL, { xPercent: 0 });
          gsap.set(curtainR, { xPercent: 0 });
          gsap.set(centerTitle, { opacity: p1, scale: 0.9 + p1 * 0.1 });

          // Phase 2 (0.25→0.50): Curtains open + center title fades → real heading
          const p2 = Math.max(0, Math.min((p - 0.25) / 0.25, 1));
          if (p2 > 0) {
            gsap.set(curtainL, { xPercent: -p2 * 100 });
            gsap.set(curtainR, { xPercent: p2 * 100 });
            gsap.set(centerTitle, { opacity: 1 - p2, scale: 1 + p2 * 0.1 });
            gsap.set(headingBlock, { opacity: p2, y: (1 - p2) * 40 });
          }

          // Phase 3 (0.50→0.75): Hero card
          const p3 = Math.max(0, Math.min((p - 0.50) / 0.25, 1));
          gsap.set(bentoGrid, { opacity: p3 });
          const heroCard = section.querySelector(".bento-entrance-hero");
          if (heroCard) gsap.set(heroCard, { opacity: p3, y: (1 - p3) * 60 });

          // Phase 4 (0.75→1.0): Grid cards
          const p4 = Math.max(0, Math.min((p - 0.75) / 0.25, 1));
          [".bento-entrance-1", ".bento-entrance-2", ".bento-entrance-3"].forEach((sel, i) => {
            const el = section.querySelector(sel);
            if (el) {
              const stagger = i * 0.15;
              const ep = Math.max(0, Math.min((p4 - stagger) / (1 - stagger), 1));
              gsap.set(el, { opacity: ep, y: (1 - ep) * 50 });
            }
          });
        },
      });
    }, section);

    return () => ctx.revert();
  });

  return (
    <section ref={sectionRef} className="bg-black relative">
      {/* Section divider */}
      <div className="section-divider w-full" />

      <div className="feat-intro-wrap relative overflow-hidden min-h-screen">
        {/* ── Curtain overlays ── */}
        <div className="feat-curtain-l pointer-events-none absolute inset-y-0 left-0 w-1/2 z-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a12] to-[#0d0a1a]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(139,92,246,0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <div className="absolute top-1/3 right-0 h-[300px] w-[300px] rounded-full bg-violet-600/[0.08] blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 h-[200px] w-[200px] rounded-full bg-indigo-500/[0.06] blur-[100px]" />
        </div>
        <div className="feat-curtain-r pointer-events-none absolute inset-y-0 right-0 w-1/2 z-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-[#0a0a12] to-[#0d0a1a]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(139,92,246,0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <div className="absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-violet-600/[0.08] blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[200px] w-[200px] rounded-full bg-indigo-500/[0.06] blur-[100px]" />
        </div>

        {/* ── Center title (shown during curtain phase) ── */}
        <div className="feat-center-title pointer-events-none absolute top-0 left-0 right-0 h-screen z-50 flex flex-col items-center justify-center text-center">
          {/* glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-violet-600/[0.15] blur-[150px]" />
          <span className="relative mb-4 inline-block rounded-full border border-[#CAFF29]/20 bg-[#CAFF29]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#CAFF29] font-general">
            Our Ecosystem
          </span>
          <h1 className="relative special-font font-zentry font-black text-5xl sm:text-7xl md:text-8xl text-white drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            Welcome to
          </h1>
          <h1 className="relative special-font font-zentry font-black text-6xl sm:text-8xl md:text-9xl shimmer-text drop-shadow-[0_0_60px_rgba(139,92,246,0.4)]">
            MattrVerse
          </h1>
        </div>

        <div className="container mx-auto px-3 md:px-10">
          <div className="feat-heading-block px-5 py-32 text-center">
            <span className="mb-6 inline-block rounded-full border border-[#CAFF29]/20 bg-[#CAFF29]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#CAFF29] font-general">
              Our Ecosystem
            </span>
            <h1 className="special-font font-zentry font-black text-5xl sm:text-7xl md:text-8xl text-blue-75">
              Welcome to
            </h1>
            <h1 className="special-font font-zentry font-black text-6xl sm:text-8xl md:text-9xl shimmer-text">
              MattrVerse
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base text-slate-400 font-circular-web md:text-lg">
              Mattr is not just a service company. We are builders at heart.
            </p>
          </div>

        <div className="bento-grid">
          <BentoTilt className="bento-entrance-hero border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-2xl md:h-[65vh]">
            <BentoCard
              title={<>Studios</>}
              description="Crafting digital experiences with precision — web, design, AI, and automation that fuel real growth."
              graphic={StudiosGraphic}
            />
          </BentoTilt>

          <div className="grid w-full grid-cols-1 gap-5 md:h-[135vh] md:grid-cols-2 md:grid-rows-3">
            <BentoTilt className="bento-entrance-1 bento-tilt_1 row-span-1 h-72 md:h-auto md:col-span-1 md:row-span-2">
              <BentoCard
                title={<>Labs</>}
                description="Building bold products that simplify life and inspire innovation."
                graphic={LabsGraphic}
              />
            </BentoTilt>

            <BentoTilt className="bento-entrance-2 bento-tilt_1 row-span-1 h-72 md:h-auto md:col-span-1">
              <BentoCard
                title={<>Media</>}
                description="Content that educates, empowers, and sparks curiosity in tech."
                graphic={MediaGraphic}
              />
            </BentoTilt>

            <BentoTilt className="bento-entrance-3 bento-tilt_1 h-72 md:h-auto md:col-span-1">
              <BentoCard
                title={<>Buildrs Hub</>}
                description="A community of visionaries collaborating to build what truly matters."
                graphic={BuildrsGraphic}
              />
            </BentoTilt>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
