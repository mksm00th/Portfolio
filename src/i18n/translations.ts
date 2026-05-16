export type Lang = 'ru' | 'en';

const translations = {
  nav: {
    works: { ru: 'Работы', en: 'Works' },
    about: { ru: 'Обо мне', en: 'About' },
    services: { ru: 'Услуги', en: 'Services' },
    contact: { ru: 'Контакт', en: 'Contact' },
  },
  hero: {
    tag: { ru: 'Дизайнер & Моушн-артист', en: 'Designer & Motion Artist' },
    subtitle: { ru: 'Брендинг · UI/UX · Моушн-дизайн · Видео', en: 'Branding · UI/UX · Motion Design · Video' },
    cta: { ru: 'Смотреть работы', en: 'View works' },
  },
  marquee: {
    items: {
      ru: ['Графический дизайн', 'Брендинг', 'Видеомонтаж', 'Моушн-дизайн', 'UI/UX', 'Web-анимации', 'Прототипирование'],
      en: ['Graphic Design', 'Branding', 'Video Editing', 'Motion Design', 'UI/UX', 'Web Animation', 'Prototyping'],
    },
  },
  works: {
    label: { ru: 'Портфолио', en: 'Selected Work' },
    title: { ru: 'Проекты', en: 'Projects' },
    viewOn: { ru: 'Смотреть на Behance', en: 'View on Behance' },
    allBtn: { ru: 'Все проекты на Behance', en: 'All projects on Behance' },
    projects: [
      {
        title: 'A2 \u2014 HR Agency',
        category: { ru: 'Брендинг', en: 'Branding' },
      },
      {
        title: 'freakos.eu',
        category: { ru: 'Веб-дизайн', en: 'Web Design' },
      },
      {
        title: 'Freakos Soda',
        category: { ru: 'Брендинг / Упаковка', en: 'Branding / Packaging' },
      },
      {
        title: 'AImagine',
        category: { ru: 'UI/UX', en: 'UI/UX' },
      },
      {
        title: 'OKVision',
        category: { ru: 'Айдентика', en: 'Identity' },
      },
      {
        title: 'COULD PRODUCT',
        category: { ru: 'Продуктовый дизайн', en: 'Product Design' },
      },
    ],
  },
  about: {
    label: { ru: 'Обо мне', en: 'About' },
    bio1: {
      ru: 'Привет! Меня зовут Максим. Я занимаюсь графическим дизайном более 3 лет и видеомонтажом более 5 лет. За это время создал большое количество превью для YouTube, логотипов, визуальных концепций для брендов, анимаций и прототипов сайтов.',
      en: 'Hi! My name is Maksim. I have been doing graphic design for 3+ years and video editing for 5+ years. During this time I have created numerous YouTube thumbnails, logos, visual brand concepts, animations, and website prototypes.',
    },
    bio2: {
      ru: 'Имею практический опыт в создании моушн-дизайна, web-анимации и прототипировании интерфейсов. Умею работать с разными форматами задач — от простых креативов до комплексных визуальных решений.',
      en: 'I have hands-on experience in motion design, web animation, and interface prototyping. I can handle a variety of tasks, from simple creatives to complex visual solutions.',
    },
    bio3: {
      ru: 'В работе ценю аккуратность, соблюдение сроков и внимание к деталям. Быстро адаптируюсь под требования проекта и стиль заказчика.',
      en: 'I value precision, meeting deadlines, and attention to detail. I adapt quickly to project requirements and client style.',
    },
    toolsLabel: { ru: 'Инструменты', en: 'Tools' },
    stats: {
      projects: { ru: 'Проектов', en: 'Projects' },
      designYears: { ru: 'Года в дизайне', en: 'Years in Design' },
      videoYears: { ru: 'Лет монтажа', en: 'Years in Video' },
    },
  },
  services: {
    label: { ru: 'Что я делаю', en: 'What I Do' },
    title: { ru: 'Услуги', en: 'Services' },
    items: [
      {
        title: { ru: 'Графический дизайн', en: 'Graphic Design' },
        description: {
          ru: 'Превью для YouTube, постеры, баннеры, SMM-креативы и рекламные материалы для цифровых и печатных носителей.',
          en: 'YouTube thumbnails, posters, banners, SMM creatives and advertising materials for digital and print media.',
        },
        tags: {
          ru: ['YouTube-превью', 'Постеры', 'Баннеры', 'SMM'],
          en: ['YouTube Thumbnails', 'Posters', 'Banners', 'SMM'],
        },
      },
      {
        title: { ru: 'Брендинг и айдентика', en: 'Branding & Identity' },
        description: {
          ru: 'Разработка визуальной идентичности — от логотипа до полного гайдлайна. Визуальные концепции, фирменный стиль, типографика.',
          en: 'Visual identity development, from logo to full guidelines. Visual concepts, brand style, typography.',
        },
        tags: {
          ru: ['Логотипы', 'Фирменный стиль', 'Гайдлайны', 'Концепции'],
          en: ['Logos', 'Brand Guidelines', 'Visual Identity', 'Concepts'],
        },
      },
      {
        title: { ru: 'UI/UX и прототипы', en: 'UI/UX & Prototyping' },
        description: {
          ru: 'Проектирование интерфейсов и прототипирование сайтов и приложений в Figma — от вайрфреймов до финального дизайна.',
          en: 'Interface design and prototyping of websites and apps in Figma, from wireframes to final design.',
        },
        tags: {
          ru: ['Веб-дизайн', 'Прототипы', 'Приложения', 'Figma'],
          en: ['Web Design', 'Prototypes', 'Mobile Apps', 'Figma'],
        },
      },
      {
        title: { ru: 'Видео и моушн', en: 'Video & Motion' },
        description: {
          ru: 'Видеомонтаж и моушн-дизайн с 5+ годами опыта. Web-анимации, рекламные ролики, интро и визуальные эффекты.',
          en: 'Video editing and motion design with 5+ years of experience. Web animations, commercials, intros and VFX.',
        },
        tags: {
          ru: ['Видеомонтаж', 'Моушн-дизайн', 'After Effects', 'Анимация'],
          en: ['Video Editing', 'Motion Design', 'After Effects', 'Animation'],
        },
      },
    ],
  },
  process: {
    label: { ru: 'Как я работаю', en: 'How I Work' },
    title: { ru: 'Процесс', en: 'Process' },
    steps: [
      { title: { ru: 'Бриф', en: 'Brief' }, description: { ru: 'Обсуждаем идею, цели и визуальные предпочтения. Формируем задачу.', en: 'We discuss the idea, goals and visual preferences. We form the task.' } },
      { title: { ru: 'Концепция', en: 'Concept' }, description: { ru: 'Референсы, мудборды и несколько концептуальных направлений.', en: 'References, moodboards and several conceptual directions.' } },
      { title: { ru: 'Дизайн', en: 'Design' }, description: { ru: 'Воплощение концепции в деталях. Каждый элемент продуман.', en: 'Bringing the concept to life in detail. Every element is considered.' } },
      { title: { ru: 'Результат', en: 'Delivery' }, description: { ru: 'Финализация и передача всех материалов в нужных форматах.', en: 'Finalization and delivery of all materials in required formats.' } },
    ],
  },
  contact: {
    label: { ru: 'Связаться', en: 'Get in Touch' },
    title1: { ru: 'Давайте работать', en: "Let's work" },
    title2: { ru: 'вместе', en: 'together' },
    description: {
      ru: 'Открыт для новых проектов и коллабораций — от простых креативов до комплексных визуальных решений.',
      en: 'Open for new projects and collaborations, from simple creatives to complex visual solutions.',
    },
    cta: { ru: 'Написать в Telegram', en: 'Write in Telegram' },
    or: { ru: 'или', en: 'or' },
  },
  footer: {
    copy: { ru: 'Гладких Максим', en: 'Gladkikh Maksim' },
  },
} as const;

export default translations;
