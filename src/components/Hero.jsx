import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useState, useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const subtitleRef = useRef(null);

  // Scramble text effect
  const useTextScramble = (finalText, delay = 0) => {
    const [text, setText] = useState("");
    const chars = "!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const triggered = useRef(false);

    useEffect(() => {
      if (loading || triggered.current) return;
      triggered.current = true;

      const timeout = setTimeout(() => {
        let iteration = 0;
        const interval = setInterval(() => {
          setText(
            finalText
              .split("")
              .map((char, i) => {
                if (i < iteration) return finalText[i];
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join("")
          );
          iteration += 1 / 2;
          if (iteration >= finalText.length) {
            clearInterval(interval);
            setText(finalText);
          }
        }, 30);
      }, delay);

      return () => clearTimeout(timeout);
    }, [loading]);

    return text;
  };

  const scramble1 = useTextScramble("BUILDING", 300);
  const scramble2 = useTextScramble("EXPERIENCES", 600);
  const scramble3 = useTextScramble("THAT", 900);

  // Hero entrance + clip animation
  useGSAP(
    () => {
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",
      });
      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0% 0% 0% 0%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Hero content entrance
      if (!loading) {
        const tl = gsap.timeline({ delay: 0.2 });

        // Fade in subtitle
        tl.fromTo(
          ".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.8
        );

        // Slide up CTA
        tl.fromTo(
          ".hero-cta",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          1.2
        );

        // Fade in scroll indicator
        tl.fromTo(
          ".scroll-indicator",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out" },
          1.6
        );

        // Animate the scroll indicator bounce
        gsap.to(".scroll-arrow", {
          y: 8,
          duration: 1.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Parallax on the hero bottom text
      gsap.to(".hero-bottom-text", {
        y: -80,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { dependencies: [loading] }
  );

  const videoSrc = "videos/hero-1.mp4";

  return (
    <div ref={heroRef} className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            id="main-video"
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={() => setLoading(false)}
          />
        </div>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 z-30 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Bottom-right brand text */}
        <h1 className="hero-bottom-text special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Mattr
        </h1>

        {/* Main hero content */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            {/* Main heading with scramble effect */}
            <h1 className="special-font hero-heading text-blue-100" style={{ letterSpacing: "-0.02em" }}>
              {scramble1 || "\u00A0"}
            </h1>
            <h1 className="special-font hero-heading text-blue-100" style={{ letterSpacing: "-0.02em" }}>
              {scramble2 || "\u00A0"}
            </h1>
            <h1 className="special-font hero-heading text-blue-100" style={{ letterSpacing: "-0.02em" }}>
              {scramble3 || "\u00A0"}
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="hero-subtitle mt-6 max-w-md text-sm leading-relaxed text-white/70 font-circular-web sm:text-base md:text-lg opacity-0"
            >
              We design &amp; engineer digital products that move
              people, markets, and culture forward.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta mt-8 flex flex-wrap items-center gap-4 opacity-0">
              <a
                href="#contact"
                className="magnetic-btn group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#CAFF29] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-500 hover:bg-[#d4ff47]"
              >
                <span className="relative z-10 font-general">Start a Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 font-general"
              >
                View Our Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-general">
              Scroll
            </span>
            <div className="relative h-12 w-[1px] overflow-hidden bg-white/10">
              <div className="scroll-arrow absolute top-0 left-0 h-4 w-full bg-gradient-to-b from-[#CAFF29] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Mattr
      </h1>
    </div>
  );
};

export default Hero;
