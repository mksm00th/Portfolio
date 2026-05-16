import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

export function Hero() {
  const { t } = useLang();
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className={`mb-10 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[11px] tracking-[0.35em] uppercase text-white/30">
            {t(tr.hero.tag)}
          </span>
        </div>

        <h1 className={`transition-all duration-1000 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="block font-['Playfair_Display'] text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-normal leading-[0.85] tracking-[-0.02em] text-white">
            Gladkikh
          </span>
          <span className="block font-['Playfair_Display'] italic text-5xl sm:text-6xl md:text-[6rem] lg:text-[8rem] font-normal leading-[0.9] tracking-[-0.02em] text-white/50 mt-1 md:mt-2">
            Maksim
          </span>
        </h1>

        <div className={`flex justify-center mt-10 md:mt-14 transition-all duration-700 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`h-px bg-white/20 transition-all duration-1000 delay-[800ms] ${loaded ? 'w-20' : 'w-0'}`} />
        </div>

        <p className={`text-[13px] md:text-sm text-white/30 tracking-[0.15em] uppercase mt-8 transition-all duration-700 delay-[900ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {t(tr.hero.subtitle)}
        </p>

        <div className={`mt-12 md:mt-16 flex items-center justify-center transition-all duration-700 delay-[1100ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#works"
            className="group inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300"
          >
            {t(tr.hero.cta)}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[1300ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-[pulseSubtle_2.5s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
