import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const navItems = ["Studio", "Labs", "Media", "BuildrsHub", "Contact"];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <a href="#" className="group relative">
              <img src="/img/logo.png" alt="logo" className="w-20 transition-opacity duration-300 group-hover:opacity-80" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden md:flex items-center">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}

              {/* CTA in navbar */}
              <a
                href="#contact"
                className="ml-10 inline-flex items-center gap-2 rounded-full bg-[#CAFF29] px-5 py-2 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#d4ff47] hover:shadow-[0_0_20px_rgba(202,255,41,0.3)] font-general"
              >
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3 w-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>

            {/* Audio button */}
            <button
              onClick={toggleAudioIndicator}
              className="ml-6 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="ml-4 flex flex-col gap-1.5 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={clsx("h-[2px] w-6 bg-white transition-all duration-300", isMobileMenuOpen && "translate-y-[5px] rotate-45")} />
              <span className={clsx("h-[2px] w-6 bg-white transition-all duration-300", isMobileMenuOpen && "opacity-0")} />
              <span className={clsx("h-[2px] w-6 bg-white transition-all duration-300", isMobileMenuOpen && "-translate-y-[5px] -rotate-45")} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={clsx(
            "absolute left-0 right-0 top-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mt-2 mx-4 rounded-2xl border border-white/[0.06] bg-black/90 backdrop-blur-xl p-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-sm uppercase tracking-wider text-white/70 transition-colors duration-200 hover:text-[#CAFF29] font-general"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#CAFF29] px-5 py-3 text-xs font-bold uppercase tracking-wider text-black font-general"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3 w-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
