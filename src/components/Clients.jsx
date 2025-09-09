import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    if (tweenRef.current) {
      tweenRef.current.kill();
      tweenRef.current = null;
    }

    const firstRow = track.querySelector(".clients-row");
    const trackWidth = firstRow ? firstRow.offsetWidth : track.offsetWidth / 2;
    const duration = Math.max(20, trackWidth / 120);

    tweenRef.current = gsap.to(track, {
      x: -trackWidth,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % -trackWidth}px`,
      },
    });

    wrap.addEventListener("mouseenter", () => tweenRef.current.pause());
    wrap.addEventListener("mouseleave", () => tweenRef.current.play());

    ScrollTrigger.create({
      trigger: wrap,
      start: "top bottom",
      onEnter: () => tweenRef.current && tweenRef.current.play(),
      onLeave: () => tweenRef.current && tweenRef.current.pause(),
      onEnterBack: () => tweenRef.current && tweenRef.current.play(),
      onLeaveBack: () => tweenRef.current && tweenRef.current.pause(),
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });

  return (
    <section id="clients" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedTitle
          title={`Trusted by <b>brands</b> that <br/> build with us`}
          containerClass="text-center mb-8 !text-white"
        />

        <p className="text-center text-sm md:text-base text-slate-300 mb-10 max-w-2xl mx-auto">
          We partner with bold teams and ambitious brands — delivering pixel-perfect
          products and measurable outcomes. A snapshot of some collaborators:
        </p>

        <div
          ref={wrapRef}
          className="overflow-hidden relative rounded-2xl p-4 bg-white/3 border border-white/5"
        >
          <div
            ref={trackRef}
            className="flex will-change-transform items-center gap-8"
            style={{ whiteSpace: "nowrap" }}
          >
            {/* row 1 */}
            <div className="clients-row flex items-center gap-8">
              {logos.map((logo, i) => (
                <LogoCard key={`logo-a-${i}`} src={logo.src} alt={logo.alt} />
              ))}
            </div>

            {/* row 2 (duplicate for seamless loop) */}
            <div className="clients-row flex items-center gap-8">
              {logos.map((logo, i) => (
                <LogoCard key={`logo-b-${i}`} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoCard = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center w-40 h-20 md:w-48 md:h-24 flex-shrink-0">
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out hover:scale-105"
      />
    </div>
  );
};

// list of your client logos
const logos = [
  { src: "/img/fifa.png", alt: "FIFA" },
  { src: "/img/cocacola.png", alt: "Coca-Cola" },
    { src: "/img/reddit.png", alt: "FIFA" },
  { src: "/img/cocacola.png", alt: "Coca-Cola" },
    { src: "/img/fifa.png", alt: "FIFA" },
  { src: "/img/cocacola.png", alt: "Coca-Cola" },

];

export default Clients;
