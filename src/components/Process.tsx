import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

export function Process() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);
  const { t } = useLang();

  return (
    <section className="py-24 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="mb-14 md:mb-20">
          <span className={`block text-[11px] tracking-[0.4em] uppercase text-white/25 mb-4 transition-all duration-600 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
            {t(tr.process.label)}
          </span>
          <h2 className={`font-['Playfair_Display'] text-4xl md:text-6xl font-light text-white transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {t(tr.process.title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {tr.process.steps.map((step, index) => {
            const { ref, isInView } = useInView(0.15);
            const num = String(index + 1).padStart(2, '0');
            return (
              <div
                key={num}
                ref={ref}
                className={`bg-[#0a0a0a] p-8 md:p-10 group hover:bg-[#0f0f0f] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-[11px] tracking-[0.2em] text-white/10 group-hover:text-white/25 transition-colors duration-300">
                  {num}
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-light text-white/70 group-hover:text-white mt-4 transition-colors duration-300">
                  {t(step.title)}
                </h3>
                <p className="text-[13px] text-white/25 leading-[1.7] mt-3 group-hover:text-white/40 transition-colors duration-300">
                  {t(step.description)}
                </p>
                <div className="mt-6 h-px w-0 bg-white/15 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
