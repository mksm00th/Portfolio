import { useLang } from '../i18n/LangContext';

export function LangSwitch() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center border border-white/10 overflow-hidden">
      <button
        onClick={() => setLang('ru')}
        className={`px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase transition-all duration-300 ${
          lang === 'ru'
            ? 'bg-white text-black'
            : 'bg-transparent text-white/30 hover:text-white/60'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase transition-all duration-300 ${
          lang === 'en'
            ? 'bg-white text-black'
            : 'bg-transparent text-white/30 hover:text-white/60'
        }`}
      >
        EN
      </button>
    </div>
  );
}
