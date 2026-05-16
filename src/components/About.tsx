import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

const tools = ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Figma'];

export function About() {
  const { t } = useLang();
  const { ref: sectionRef, isInView } = useInView(0.1);
  const { ref: imageRef, isInView: imageInView } = useInView(0.15);
  const { ref: statsRef, isInView: statsInView } = useInView(0.2);

  const stats = [
    { value: '50+', label: t(tr.about.stats.projects) },
    { value: '3+', label: t(tr.about.stats.designYears) },
    { value: '5+', label: t(tr.about.stats.videoYears) },
  ];

  return (
    <section id="about" className="py-24 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-5 gap-14 md:gap-20">
          <div
            ref={imageRef}
            className={`lg:col-span-2 transition-all duration-[800ms] ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden bg-[#111]">
              <img
                src="https://avatars.yandex.net/get-music-content/9868087/059883b9.p.7657200/m1000x1000?webp=false"
                alt="Gladkikh Maksim"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className={`block text-[11px] tracking-[0.4em] uppercase text-white/25 mb-4 transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
              {t(tr.about.label)}
            </span>
            <h2 className={`font-['Playfair_Display'] text-4xl md:text-5xl font-light text-white mb-8 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Gladkikh Maksim
            </h2>

            <div className={`space-y-5 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="text-[15px] text-white/45 leading-[1.8]">{t(tr.about.bio1)}</p>
              <p className="text-[15px] text-white/45 leading-[1.8]">{t(tr.about.bio2)}</p>
              <p className="text-[15px] text-white/45 leading-[1.8]">{t(tr.about.bio3)}</p>
            </div>

            <div className={`mt-10 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="block text-[11px] tracking-[0.3em] uppercase text-white/20 mb-4">
                {t(tr.about.toolsLabel)}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 text-[12px] tracking-[0.05em] text-white/35 border border-white/[0.08] hover:border-white/20 hover:text-white/60 transition-all duration-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-20 md:mt-28 pt-14 border-t border-white/[0.06]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-['Playfair_Display'] text-3xl md:text-4xl font-light text-white">{stat.value}</div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/25 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
