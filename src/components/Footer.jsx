import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const el = footerRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".ft-animate");
    gsap.fromTo(
      items,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (demo). Connect API here.");
  };

  return (
    <footer ref={footerRef} className="bg-black text-white relative">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0B0B0D] rounded-3xl overflow-hidden border border-white/10">
          {/* Left content */}
          <div className="p-10 flex flex-col justify-center ft-animate">
            <p className="uppercase text-sm tracking-wide text-slate-400 mb-3">
              Work with us today
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to <span className="text-[#CAFF29]">Upgrade?</span>
            </h2>
            <p className="text-slate-400 max-w-md">
              Dive into the future with Mattr. Get in touch and build out a
              smarter, more meaningful experience.
            </p>
          </div>

          {/* Right form */}
          <div className="p-10 bg-[#0E0E11] rounded-2xl m-6 ft-animate">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-md bg-transparent border border-slate-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CAFF29]"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-md bg-transparent border border-slate-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CAFF29]"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-md bg-transparent border border-slate-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CAFF29]"
              />
              <textarea
                rows="5"
                placeholder="How can we help?"
                className="w-full rounded-md bg-transparent border border-slate-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#CAFF29]"
              ></textarea>
              <button
                type="submit"
                className="mt-2 rounded-md bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 flex items-center justify-center gap-2"
              >
                Submit Enquiry →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-white text-black py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + copyright */}
        <div className="flex items-center gap-4 ft-animate">
          <img src="/img/logo.png" alt="Mattr" className="h-14 w-auto" />
          <p className="text-xs text-slate-600">
            © Mattr {new Date().getFullYear()}
          </p>
        </div>

        {/* Center: Socials from /public/img */}
        <div className="flex items-center gap-6 ft-animate">
         
          <a href="https://www.instagram.com/mattr_official/" aria-label="Instagram" className="hover:opacity-70">
            <img src="/img/insta.svg" alt="Instagram" className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
            <img src="/img/youtube.svg" alt="LinkedIn" className="h-5 w-5" />
          </a>
           <a href="#" aria-label="X" className="hover:opacity-70">
            <img src="/img/x.svg" alt="X" className="h-5 w-5" />
          </a>
        </div>

        {/* Right: links */}
        <div className="flex items-center gap-6 text-sm text-slate-600 ft-animate">
          <a href="/terms" className="hover:text-black">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-black">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
