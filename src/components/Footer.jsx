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

    const ctx = gsap.context(() => {
      /* CTA card entrance */
      gsap.fromTo(
        ".cta-card",
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cta-card", start: "top 85%" },
        }
      );

      /* stagger inner elements */
      gsap.fromTo(
        ".cta-el",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cta-card", start: "top 80%" },
        }
      );

      /* form slide up */
      gsap.fromTo(
        ".cta-form",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cta-form", start: "top 90%" },
        }
      );

      /* footer bottom */
      gsap.fromTo(
        ".ft-bottom",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".ft-bottom-wrap", start: "top 95%" },
        }
      );

      /* floating orbs parallax */
      gsap.to(".cta-orb-1", {
        y: -60,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.to(".cta-orb-2", {
        y: 40,
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, el);

    return () => ctx.revert();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (demo). Connect API here.");
  };

  return (
    <footer ref={footerRef} className="relative bg-black text-white overflow-hidden">

      {/* ═══════════ CTA + FORM SECTION ═══════════ */}
      <div className="relative px-6 pt-28 pb-20 md:pt-40 md:pb-28">
        {/* background orbs */}
        <div className="cta-orb-1 pointer-events-none absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[120px]" />
        <div className="cta-orb-2 pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-[#CAFF29]/[0.04] blur-[100px]" />

        {/* single unified card */}
        <div className="cta-card relative mx-auto max-w-6xl rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-1 backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0A0A0F]/80">

            {/* decorative top gradient line */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            {/* corner accents */}
            <div className="pointer-events-none absolute top-5 left-5 h-10 w-10 border-l-2 border-t-2 border-white/[0.06] rounded-tl-lg" />
            <div className="pointer-events-none absolute top-5 right-5 h-10 w-10 border-r-2 border-t-2 border-white/[0.06] rounded-tr-lg" />
            <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-l-2 border-b-2 border-white/[0.06] rounded-bl-lg" />
            <div className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 border-r-2 border-b-2 border-white/[0.06] rounded-br-lg" />

            {/* ── 2-column layout ── */}
            <div className="relative z-10 grid md:grid-cols-2">

              {/* LEFT — heading + info */}
              <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
                {/* label */}
                <span className="cta-el mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-violet-400 font-general">
                  Ready to upgrade?
                </span>

                {/* heading */}
                <h2 className="cta-el font-zentry font-black text-4xl uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl">
                  Let's Build<br />Something<br />
                  <span className="text-violet-400">Together.</span>
                </h2>

                {/* description */}
                <p className="cta-el mt-5 max-w-sm text-base leading-relaxed text-slate-400 font-circular-web">
                  Turn your vision into a digital reality. Whether it's a product, a platform, or a brand — we build what matters.
                </p>

                {/* quick contact info */}
                <div className="cta-el mt-8 space-y-3">
                  <a href="mailto:hello@mattr.co" className="flex items-center gap-3 text-sm text-slate-400 transition-colors duration-200 hover:text-white font-circular-web">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    hello@mattr.co.in
                  </a>
                  <div className="flex items-center gap-3 text-sm text-slate-400 font-circular-web">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                  India
                  </div>
                </div>
              </div>

              {/* RIGHT — form */}
              <div className="cta-form border-t border-white/[0.06] p-10 md:border-l md:border-t-0 md:p-14 lg:p-16">
                <h3 className="mb-6 font-zentry text-lg font-black uppercase text-white md:text-xl">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-violet-500/50 focus:bg-white/[0.05] font-circular-web"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-violet-500/50 focus:bg-white/[0.05] font-circular-web"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-violet-500/50 focus:bg-white/[0.05] font-circular-web"
                  />
                  <select
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-slate-500 outline-none transition-all duration-300 focus:border-violet-500/50 focus:bg-white/[0.05] font-circular-web appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>What are you looking for?</option>
                    <option value="design">UI/UX Design</option>
                    <option value="development">Web / App Development</option>
                    <option value="strategy">Digital Strategy</option>
                    <option value="branding">Brand Identity</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-violet-500/50 focus:bg-white/[0.05] font-circular-web"
                  ></textarea>
                  <button
                    type="submit"
                    className="group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                  >
                    Submit Enquiry
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  <p className="mt-1 text-center text-[11px] text-slate-600 font-general">
                    We'll get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ FULL FOOTER ═══════════ */}
      <div className="ft-bottom-wrap border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">

          {/* ── top row: logo + nav columns ── */}
          <div className="grid gap-12 md:grid-cols-12">

            {/* brand column */}
            <div className="ft-bottom md:col-span-4">
              <img src="/img/logo.png" alt="Mattr" className="mb-5 h-12 w-auto brightness-0 invert" />
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-500 font-circular-web">
                We build digital products that don't just work — they transform. From strategy to shipping, we're your end-to-end technology partner.
              </p>
              {/* socials */}
              <div className="flex items-center gap-3">
                {[
                  { href: "https://www.instagram.com/mattr_official/", icon: "/img/insta.svg", label: "Instagram" },
                  { href: "#", icon: "/img/youtube.svg", label: "YouTube" },
                  { href: "#", icon: "/img/x.svg", label: "X" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10"
                  >
                    <img src={s.icon} alt={s.label} className="h-3.5 w-3.5 brightness-0 invert opacity-50" />
                  </a>
                ))}
              </div>
            </div>

            {/* nav: Company */}
            <div className="ft-bottom md:col-span-2">
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white font-general">
                Company
              </h4>
              <ul className="space-y-3">
                {["About", "Services", "Portfolio", "Careers", "Blog"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-slate-500 transition-colors duration-200 hover:text-white font-circular-web">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* nav: Services */}
            <div className="ft-bottom md:col-span-3">
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white font-general">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "UI/UX Design",
                  "Web Development",
                  "Mobile Apps",
                  "Digital Strategy",
                  "Brand Identity",
                ].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-sm text-slate-500 transition-colors duration-200 hover:text-white font-circular-web">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* nav: Get in Touch */}
            <div className="ft-bottom md:col-span-3">
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white font-general">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-violet-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:hello@mattr.co" className="text-sm text-slate-500 transition-colors duration-200 hover:text-white font-circular-web">
                    hello@mattr.co.in
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-violet-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="text-sm text-slate-500 font-circular-web">
                    India
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  
                  
                </li>
              </ul>
            </div>
          </div>

          {/* ── divider ── */}
          <div className="mt-14 mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          {/* ── bottom bar ── */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="ft-bottom text-xs text-slate-600 font-general">
              © {new Date().getFullYear()} Mattr™. All rights reserved.
            </p>

            <div className="ft-bottom flex items-center gap-6 text-xs text-slate-600 font-general">
              <a href="/terms" className="transition-colors duration-200 hover:text-white">
                Terms & Conditions
              </a>
              <span className="text-white/10">|</span>
              <a href="/privacy" className="transition-colors duration-200 hover:text-white">
                Privacy Policy
              </a>
              <span className="text-white/10">|</span>
              <a href="/cookies" className="transition-colors duration-200 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
