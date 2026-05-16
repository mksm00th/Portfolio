import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[12px] tracking-[0.1em] text-white/15">
          &copy; {new Date().getFullYear()} {t(tr.footer.copy)}
        </span>
        <div className="flex items-center gap-6">
          <a href="https://www.behance.net/sm0oth" target="_blank" rel="noopener noreferrer" className="text-[12px] tracking-[0.1em] text-white/15 hover:text-white/50 transition-colors duration-300">
            Behance
          </a>
          <a href="https://t.me/m4ksmooth" target="_blank" rel="noopener noreferrer" className="text-[12px] tracking-[0.1em] text-white/15 hover:text-white/50 transition-colors duration-300">
            Telegram
          </a>
          <a href="mailto:maksmoothreal@gmail.com" className="text-[12px] tracking-[0.1em] text-white/15 hover:text-white/50 transition-colors duration-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
