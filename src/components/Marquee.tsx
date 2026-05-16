import { useLang } from '../i18n/LangContext';
import tr from '../i18n/translations';

export function Marquee() {
  const { lang } = useLang();
  const words = tr.marquee.items[lang];
  const items: string[] = [];
  words.forEach((w, i) => {
    items.push(w);
    if (i < words.length - 1) items.push('\u2014');
  });
  items.push('\u2014');

  return (
    <div className="py-6 md:py-8 border-y border-white/[0.06] overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-4 md:mx-6 text-[13px] md:text-sm tracking-[0.2em] uppercase ${
              item === '\u2014' ? 'text-white/10' : 'text-white/15'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
