import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

function ServiceRow({ index }: { index: number }) {
  const { ref, isInView } = useInView(0.1);
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const service = tr.services.items[index];
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={ref}
      className={`border-b border-white/[0.06] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-7 md:py-10 flex items-center gap-6 md:gap-10 text-left group"
      >
        <span className="text-[13px] text-white/15 font-light shrink-0 w-8">{num}</span>
        <h3 className="font-['Playfair_Display'] text-2xl md:text-4xl font-light text-white/70 group-hover:text-white transition-colors duration-300 flex-1">
          {t(service.title)}
        </h3>
        <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-400 shrink-0 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-60 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <div className="pl-14 md:pl-[4.5rem] pr-4">
          <p className="text-[14px] text-white/35 leading-[1.7] mb-5 max-w-xl">{t(service.description)}</p>
          <div className="flex flex-wrap gap-2">
            {service.tags[lang].map((tag) => (
              <span key={tag} className="px-3 py-1 text-[11px] tracking-[0.1em] uppercase text-white/25 border border-white/[0.08]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);
  const { t } = useLang();

  return (
    <section id="services" className="py-24 md:py-36 max-w-6xl mx-auto px-6 md:px-10">
      <div ref={titleRef} className="mb-14 md:mb-20">
        <span className={`block text-[11px] tracking-[0.4em] uppercase text-white/25 mb-4 transition-all duration-600 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
          {t(tr.services.label)}
        </span>
        <h2 className={`font-['Playfair_Display'] text-4xl md:text-6xl font-light text-white transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t(tr.services.title)}
        </h2>
      </div>

      <div className="border-t border-white/[0.06]">
        {tr.services.items.map((_, index) => (
          <ServiceRow key={index} index={index} />
        ))}
      </div>
    </section>
  );
}
