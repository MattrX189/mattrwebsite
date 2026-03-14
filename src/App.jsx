import { useRef, useEffect } from "react";
import gsap from "gsap";
import About from "./components/About";
import AboutMattr from "./components/AboutMattr";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Clients from "./components/Clients";

function App() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onMouseDown = () => {
      gsap.to(dot, { scale: 0.6, duration: 0.15 });
      gsap.to(ring, { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(dot, { scale: 1, duration: 0.15 });
      gsap.to(ring, { scale: 1, duration: 0.2 });
    };

    const onMouseEnterLink = () => {
      gsap.to(dot, { scale: 1.5, duration: 0.2 });
      gsap.to(ring, { scale: 1.8, opacity: 0.3, duration: 0.2 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const interactiveSelector = "a, button, [role='button'], input, textarea, select, .cursor-pointer";
    const addLinkListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    addLinkListeners();
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden cursor-none">
      {/* Custom cursor — dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 10,
          height: 10,
          background: "radial-gradient(circle, #a855f7, #6366f1)",
          boxShadow: "0 0 12px rgba(168, 85, 247, 0.6)",
        }}
      />
      {/* Custom cursor — ring */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/50"
        style={{
          width: 36,
          height: 36,
        }}
      />
      <NavBar />
      <Hero />
      <Clients />
      <About />
      <AboutMattr />
      <Services />
      <Portfolio />
      <Features />

      {/* <Story />
      <Contact /> */}
      <Footer />
    </main>
  );
}

export default App;
