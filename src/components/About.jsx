import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1200 center", // extend scroll space for 2 text animations
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Animate image enlargement
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Fade in dark overlay
    clipAnimation.fromTo(
      ".dark-overlay",
      { opacity: 0 },
      { opacity: 0.6, duration: 1 },
      ">-0.3"
    );

    // Show first text
    clipAnimation.fromTo(
      ".overlay-text-1",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 },
      ">-0.2"
    );

    // Fade out first text
    clipAnimation.to(".overlay-text-1", {
      opacity: 0,
      y: -40,
      duration: 1,
    });

    // Show second text
    clipAnimation.fromTo(
      ".overlay-text-2",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 },
      ">-0.3"
    );
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* Original section */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        {/* <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p> */}

        <AnimatedTitle
  title={"MATTR is not just a name.<br />It’s a statement."}
  containerClass="mt-5 !text-white text-center"
/>

        <div className="about-subtext text-white">
          <p>It’s the core of everything we build.</p>
          <p className="text-white">
           

MATTR reflects our commitment to developing revolutionary tech products that create real impact and earn their space in people’s lives.
          </p>
        </div>
      </div>

      {/* Image with fullscreen expansion */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative">
          {/* Background Image */}
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />

          {/* Dark overlay */}
          <div className="dark-overlay absolute inset-0 bg-black opacity-0"></div>

          {/* First overlay text */}
          <div className="overlay-text-1 absolute inset-0 flex items-center justify-center text-center px-6">
            <p className="text-white text-lg md:text-2xl max-w-2xl font-medium leading-relaxed">
              At Mattr, we believe technology should do more than just work — it
              should feel effortless, intuitive, and meaningful.
            </p>
          </div>

          {/* Second overlay text */}
          <div className="overlay-text-2 absolute inset-0 flex items-center justify-center text-center px-6 opacity-0">
            <div className="text-white text-lg md:text-2xl max-w-3xl font-medium leading-relaxed space-y-4">
              <p>
                At Mattr, we believe technology should do more than just work —
                it should feel effortless, intuitive, and meaningful.
              </p>
              <p>
                Just like matter, what we build has impact, and presence in the
                real world.
              </p>
              <p>
                We are not just another digital agency. We are builders of
                experiences that last — {" "} 
                <span style={{ color: "#CAFF29" }}>
                 experiences that mattr
                </span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
