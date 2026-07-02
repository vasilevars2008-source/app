import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { LanguageProvider } from "@/i18n";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Benefits } from "@/components/Benefits";
import { Formats } from "@/components/Formats";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="App bg-sand-50 min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <WhyUs />
          <Benefits />
          <Formats />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </LanguageProvider>
  );
}

export default App;
