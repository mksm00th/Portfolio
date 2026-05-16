import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LangContext';
import { LangSwitch } from './LangSwitch';
import tr from '../i18n/translations';

export function Navigation() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t(tr.nav.works), href: '#works' },
    { label: t(tr.nav.about), href: '#about' },
    { label: t(tr.nav.services), href: '#services' },
    { label: t(tr.nav.contact), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-sm tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors duration-300">
            Gladkikh M.
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-[0.08em] text-white/40 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <LangSwitch />
            <a
              href="https://t.me/m4ksmooth"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-5 py-2 text-[12px] tracking-[0.1em] uppercase border border-white/20 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
            >
              {t(tr.nav.contact)}
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <LangSwitch />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-[5px] w-7 h-7 items-center justify-center"
              aria-label="Menu"
            >
              <span className={`block w-5 h-px bg-white transition-all duration-400 ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-400 ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl tracking-[0.1em] text-white/80 hover:text-white transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://t.me/m4ksmooth"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-3 text-sm tracking-[0.15em] uppercase border border-white/20 text-white/60 hover:bg-white hover:text-black transition-all duration-300"
        >
          Telegram →
        </a>
      </div>
    </>
  );
}
