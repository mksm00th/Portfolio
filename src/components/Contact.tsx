import { useInView } from '../hooks/useInView';
import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

export function Contact() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);
  const { ref: contentRef, isInView: contentInView } = useInView(0.1);
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 md:py-36 max-w-6xl mx-auto px-6 md:px-10">
      <div ref={titleRef} className="text-center mb-14 md:mb-20">
        <span className={`block text-[11px] tracking-[0.4em] uppercase text-white/25 mb-4 transition-all duration-600 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
          {t(tr.contact.label)}
        </span>
        <h2 className={`font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-light text-white transition-all duration-700 delay-100 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t(tr.contact.title1)}<br />
          <span className="italic text-white/50">{t(tr.contact.title2)}</span>
        </h2>
        <p className={`text-[14px] text-white/30 mt-6 max-w-md mx-auto leading-[1.7] transition-all duration-700 delay-200 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {t(tr.contact.description)}
        </p>
      </div>

      <div ref={contentRef} className="max-w-lg mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://t.me/m4ksmooth"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-10 py-5 border border-white/20 hover:bg-white transition-all duration-400 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
            <span className="relative text-sm tracking-[0.15em] uppercase text-white group-hover:text-black transition-colors duration-400">
              {t(tr.contact.cta)}
            </span>
            <svg className="relative w-4 h-4 text-white/50 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/15">{t(tr.contact.or)}</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        <div className={`grid grid-cols-3 gap-px bg-white/[0.04] transition-all duration-700 delay-200 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://www.behance.net/sm0oth"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0a0a0a] hover:bg-[#111] p-8 text-center transition-all duration-300"
          >
            <svg className="w-5 h-5 mx-auto mb-3 text-white/20 group-hover:text-white/60 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
            <span className="block text-[11px] tracking-[0.2em] uppercase text-white/20 group-hover:text-white/50 transition-colors duration-300">Behance</span>
            <span className="block text-[13px] text-white/40 group-hover:text-white/70 mt-1 transition-colors duration-300">sm0oth</span>
          </a>
          <a
            href="https://t.me/m4ksmooth"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0a0a0a] hover:bg-[#111] p-8 text-center transition-all duration-300"
          >
            <svg className="w-5 h-5 mx-auto mb-3 text-white/20 group-hover:text-white/60 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span className="block text-[11px] tracking-[0.2em] uppercase text-white/20 group-hover:text-white/50 transition-colors duration-300">Telegram</span>
            <span className="block text-[13px] text-white/40 group-hover:text-white/70 mt-1 transition-colors duration-300">@m4ksmooth</span>
          </a>
          <a
            href="mailto:maksmoothreal@gmail.com"
            className="group bg-[#0a0a0a] hover:bg-[#111] p-8 text-center transition-all duration-300"
          >
            <svg className="w-5 h-5 mx-auto mb-3 text-white/20 group-hover:text-white/60 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="block text-[11px] tracking-[0.2em] uppercase text-white/20 group-hover:text-white/50 transition-colors duration-300">Email</span>
            <span className="block text-[13px] text-white/40 group-hover:text-white/70 mt-1 transition-colors duration-300 break-all">maksmoothreal@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
