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
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
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
