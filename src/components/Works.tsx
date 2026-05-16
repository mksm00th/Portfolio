import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

const images = [
  'https://mir-s3-cdn-cf.behance.net/projects/max_808/07e23c247820245.Y3JvcCwxMzQyLDEwNTAsMjksMA.png',
  'https://mir-s3-cdn-cf.behance.net/projects/max_808/268e97247449837.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png',
  'https://mir-s3-cdn-cf.behance.net/projects/max_808/ae0493247412975.Y3JvcCwxMDA3LDc4OCwxOTcsMA.png',
  'https://mir-s3-cdn-cf.behance.net/projects/max_808/d9f1dd247022617.Y3JvcCwxMzA5LDEwMjQsNjQsMA.png',
  'https://mir-s3-cdn-cf.behance.net/projects/max_808/f248ad247011503.Y3JvcCw1MDAwLDM5MTAsMCw1NDQ.png',
  'https://mir-s3-cdn-cf.behance.net/projects/max_808/d7619d247011777.Y3JvcCw1NzUzLDQ1MDAsMjU2LDA.jpg',
];

const urls = [
  'https://www.behance.net/gallery/247820245/A2-HR-agentstvo',
  'https://www.behance.net/gallery/247449837/freakoseu',
  'https://www.behance.net/gallery/247412975/Freakos-Soda',
  'https://www.behance.net/gallery/247022617/AImagine',
  'https://www.behance.net/gallery/247011503/OKVision',
  'https://www.behance.net/gallery/247011777/COULD-PRODUCT',
];

function ProjectCard({ index }: { index: number }) {
  const { ref, isInView } = useInView(0.08);
  const { t } = useLang();
  const [hovered, setHovered] = useState(false);
  const proj = tr.works.projects[index];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={urls[index]}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
          <img
            src={images[index]}
            alt={proj.title}
            className={`w-full h-full object-cover transition-all duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 px-5 py-2.5 border border-white/40 bg-black/30 backdrop-blur-sm">
              <span className="text-[11px] tracking-[0.2em] uppercase text-white">{t(tr.works.viewOn)}</span>
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <h3 className="text-base md:text-lg font-light text-white/80 group-hover:text-white transition-colors duration-300">
            {proj.title}
          </h3>
          <span className="text-[11px] tracking-[0.15em] uppercase text-white/25">
            {t(proj.category)}
          </span>
        </div>
      </a>
    </div>
  );
}

export function Works() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);
  const { t } = useLang();

  return (
    <section id="works" className="py-24 md:py-36 px-6 md:px-10 max-w-6xl mx-auto">
      <div ref={titleRef} className="mb-14 md:mb-20">
        <span className={`block text-[11px] tracking-[0.4em] uppercase text-white/25 mb-4 transition-all duration-600 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
          {t(tr.works.label)}
        </span>
        <h2 className={`font-['Playfair_Display'] text-4xl md:text-6xl font-light text-white transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t(tr.works.title)}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {tr.works.projects.map((_, index) => (
          <ProjectCard key={index} index={index} />
        ))}
      </div>

      <div className="mt-14 md:mt-20 flex justify-center">
        <a
          href="https://www.behance.net/sm0oth"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-3.5 border border-white/15 text-[12px] tracking-[0.15em] uppercase text-white/50 hover:border-white/40 hover:text-white transition-all duration-300"
        >
          {t(tr.works.allBtn)}
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </section>
  );
}
