import { useEffect, useState } from 'react';
import { LangProvider } from './i18n/LangContext';
import { CursorGlow } from './components/CursorGlow';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Works } from './components/Works';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 200);
          setTimeout(() => onComplete(), 900);
          return 100;
        }
        return prev + Math.random() * 18 + 6;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <span className="text-[13px] tracking-[0.3em] uppercase text-white/40 mb-8">
        Gladkikh Maksim
      </span>
      <div className="w-32 h-px bg-white/[0.08] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-white/40 transition-all duration-200"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <LangProvider>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Works />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
