import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading word-by-word reveal
      gsap.fromTo(
        ".about-word",
        { y: 80, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-heading-block", start: "top 80%" },
        }
      );

      // Subtitle + subtext
      gsap.fromTo(
        ".about-fade",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-heading-block", start: "top 75%" },
        }
      );
    }, section);

    // Clip animation
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1200 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    clipAnimation.fromTo(
      ".dark-overlay",
      { opacity: 0 },
      { opacity: 0.7, duration: 1 },
      ">-0.3"
    );

    clipAnimation.fromTo(
      ".overlay-text-1",
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
      ">-0.2"
    );

    clipAnimation.to(".overlay-text-1", {
      opacity: 0,
      y: -60,
      scale: 1.05,
      duration: 1,
    });

    clipAnimation.fromTo(
      ".overlay-text-2",
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
      ">-0.3"
    );

    // Parallax decorative
    gsap.to(".about-float-1", {
      y: -80,
      scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: 1 },
    });
    gsap.to(".about-float-2", {
      y: 60,
      scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: 1 },
    });

    return () => ctx.revert();
  });

  // Split text into words for animation
  const headingLine1 = "Mattr™ is not just a name.";
  const headingLine2 = "It's a statement.";

  return (
    <div id="about" ref={sectionRef} className="min-h-screen w-screen relative">
      {/* Floating decorative elements */}
      <div className="about-float-1 pointer-events-none absolute top-20 left-[10%] h-40 w-40 rounded-full bg-violet-500/[0.04] blur-[80px]" />
      <div className="about-float-2 pointer-events-none absolute top-60 right-[15%] h-32 w-32 rounded-full bg-indigo-500/[0.03] blur-[60px]" />

      {/* Section divider */}
      <div className="section-divider w-full" />

      <div className="about-heading-block relative mb-8 mt-36 flex flex-col items-center gap-5 px-6">
        {/* Tag */}
        <div className="about-fade flex items-center gap-3 mb-4">
          <div className="h-[1px] w-8 bg-gradient-to-r from-violet-400 to-transparent" />
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-violet-400 font-general">
            Who We Are
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-violet-400 to-transparent" />
        </div>

        {/* Heading — refined, word-by-word animated */}
        <h2 className="text-center font-circular-web text-4xl font-medium leading-[1.2] text-white sm:text-5xl md:text-6xl lg:text-[4rem]" style={{ perspective: "600px" }}>
          <span className="flex flex-wrap justify-center gap-x-[0.3em]">
            {headingLine1.split(" ").map((word, i) => (
              <span key={`l1-${i}`} className="about-word inline-block">
                {word}
              </span>
            ))}
          </span>
          <span className="flex flex-wrap justify-center gap-x-[0.3em] mt-1">
            {headingLine2.split(" ").map((word, i) => (
              <span
                key={`l2-${i}`}
                className={`about-word inline-block ${
                  word === "statement." ? "bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </h2>

        {/* Subtext */}
        <div className="about-subtext text-center max-w-xl mx-auto mt-4">
          <p className="about-fade text-base md:text-lg font-circular-web text-white/70 leading-relaxed">
            Every pixel has purpose. Every line of code has intent.
          </p>
          <p className="about-fade text-sm md:text-base font-circular-web text-white/40 mt-3 leading-relaxed">
            We're a collective of designers, engineers, and strategists building
            digital products that earn their place in people's lives.
          </p>
        </div>
      </div>

      {/* Image with fullscreen expansion */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative">
          <img
            src="img/about.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />

          <div className="dark-overlay absolute inset-0 bg-black opacity-0"></div>

          <div className="overlay-text-1 absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl">
              <span className="mb-5 inline-block text-[10px] uppercase tracking-[0.3em] text-violet-400/80 font-general">Our Philosophy</span>
              <p className="text-white text-xl md:text-3xl max-w-2xl font-medium leading-relaxed font-circular-web">
                Technology should do more than just work — it should feel
                effortless, intuitive, and meaningful.
              </p>
            </div>
          </div>

          <div className="overlay-text-2 absolute inset-0 flex items-center justify-center text-center px-6 opacity-0">
            <div className="text-white text-lg md:text-2xl max-w-3xl font-medium leading-relaxed space-y-5">
              <p className="font-circular-web">
                Like matter itself, what we create has substance — weight, presence,
                and impact in the real world.
              </p>
              <p className="font-circular-web">
                We don't just build websites. We engineer{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                  experiences that mattr™
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
