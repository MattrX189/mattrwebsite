import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef(null);
  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);
  const topTweenRef = useRef(null);
  const bottomTweenRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const topTrack = topTrackRef.current;
    const bottomTrack = bottomTrackRef.current;
    if (!section || !topTrack || !bottomTrack) return;

    // kill old tweens
    [topTweenRef, bottomTweenRef].forEach((ref) => {
      if (ref.current) {
        ref.current.kill();
        ref.current = null;
      }
    });

    const setupMarquee = (track, tweenRef, direction = 1) => {
      const row = track.querySelector(".clients-row");
      if (!row) return;
      const w = row.offsetWidth;
      const speed = w / 60;

      // For left-moving (direction=-1): start at 0, go to -w
      // For right-moving (direction=1): start at -w, go to 0
      if (direction === 1) {
        gsap.set(track, { x: -w });
      } else {
        gsap.set(track, { x: 0 });
      }

      tweenRef.current = gsap.to(track, {
        x: direction === 1 ? 0 : -w,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    setupMarquee(topTrack, topTweenRef, 1);   // row 1: left to right
    setupMarquee(bottomTrack, bottomTweenRef, -1); // row 2: right to left

    // pause / resume when section leaves viewport
    const pause = () => {
      topTweenRef.current?.pause();
      bottomTweenRef.current?.pause();
    };
    const play = () => {
      topTweenRef.current?.play();
      bottomTweenRef.current?.play();
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      onEnter: play,
      onLeave: pause,
      onEnterBack: play,
      onLeaveBack: pause,
    });

    // fade-in on scroll
    gsap.fromTo(
      section,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=80",
        },
      }
    );

    return () => {
      topTweenRef.current?.kill();
      bottomTweenRef.current?.kill();
    };
  });

  // 10 logos per row, no duplicates
  const topLogos = logos.slice(0, 10);
  const bottomLogos = logos.slice(10, 20);

  return (
    <section id="clients" ref={sectionRef} className="py-28 bg-transparent">
      <div className="mx-auto px-0">
        <div className="container mx-auto px-6">
          <AnimatedTitle
            title={`Trusted by <b>brands</b> that <br/> build with us`}
            containerClass="text-center mb-6 !text-white"
          />

          <p className="text-center text-sm md:text-base text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed">
            We partner with bold teams and ambitious brands — delivering
            pixel-perfect products and measurable outcomes.
          </p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

          <div
            ref={topTrackRef}
            className="flex will-change-transform items-center"
            style={{ whiteSpace: "nowrap" }}
          >
            {[0, 1, 2, 3].map((copy) => (
              <div key={`top-${copy}`} className="clients-row flex items-center gap-4 pr-4">
                {topLogos.map((logo, i) => (
                  <LogoCard key={`t-${copy}-${i}`} {...logo} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

          <div
            ref={bottomTrackRef}
            className="flex will-change-transform items-center"
            style={{ whiteSpace: "nowrap" }}
          >
            {[0, 1, 2, 3].map((copy) => (
              <div key={`bot-${copy}`} className="clients-row flex items-center gap-4 pr-4">
                {bottomLogos.map((logo, i) => (
                  <LogoCard key={`b-${copy}-${i}`} {...logo} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoCard = ({ src, alt }) => (
  <div className="group relative flex items-center justify-center w-36 h-20 md:w-44 md:h-24 flex-shrink-0 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12]">
    <img
      src={src}
      alt={alt}
      className="max-h-[70%] max-w-[80%] object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
    />
  </div>
);

const logos = [
  // Row 1 (indices 0-9)
  { src: "/img/clients/cocacola.png", alt: "Coca-Cola" },
  { src: "/img/clients/reddit.png", alt: "Reddit" },
  { src: "/img/clients/fifa.png", alt: "FIFA" },
  { src: "/img/clients/htc.png", alt: "HTC" },
  { src: "/img/clients/almeera.png", alt: "Al Meera" },
  { src: "/img/clients/noon.png", alt: "Noon" },
  { src: "/img/clients/daraz.png", alt: "Daraz" },
  { src: "/img/clients/hul.png", alt: "HUL" },
  { src: "/img/clients/levista.png", alt: "Levista" },
  { src: "/img/clients/lonewolf.png", alt: "Lonewolf" },
  // Row 2 (indices 10-19)
  { src: "/img/clients/liuvinci.png", alt: "Liu Vinci" },
  { src: "/img/clients/newsahoot.png", alt: "Newsahoot" },
  { src: "/img/clients/flexifyme.svg", alt: "FlexifyMe" },
  { src: "/img/clients/gudworld.avif", alt: "Gudworld" },
  { src: "/img/clients/jumbosouq.png", alt: "Jumbo Souq" },
  { src: "/img/clients/sbi.jpg", alt: "SBI" },
  { src: "/img/clients/skininspired.png", alt: "Skin Inspired" },
  { src: "/img/clients/shellhair.png", alt: "Shell Hair" },
  { src: "/img/clients/ohipng.png", alt: "OHI" },
  { src: "/img/clients/chefdecoded.png", alt: "Chef Decoded" },
];

export default Clients;
