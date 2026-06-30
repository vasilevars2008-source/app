import React, { createContext, useContext, useState } from "react";

export const translations = {
  ru: {
    nav: { about: "О преподавателе", why: "Почему ArtJoga", benefits: "Преимущества", gallery: "Галерея", reviews: "Отзывы", faq: "Вопросы", book: "Записаться" },
    hero: {
      tag: "Kundalini Yoga Studio",
      title: "Kundalini Yoga for Body, Mind & Soul",
      slogan: "Find Harmony. Feel Love. Live Consciously.",
      desc: "Добро пожаловать в ArtJoga — пространство гармонии, любви и осознанности. Мы помогаем людям обрести внутреннее спокойствие, укрепить тело, раскрыть свой потенциал и наполнить жизнь энергией с помощью Кундалини-йоги, дыхательных практик и медитаций.",
      book: "Записаться",
      learn: "Узнать больше",
    },
    about: {
      tag: "О преподавателе",
      name: "Aleksandra Vasileuskaya",
      role: "Kundalini Yoga Teacher",
      desc: "Меня зовут Александра. Я преподаватель Кундалини-йоги. Моя цель — помочь людям найти внутреннюю гармонию, улучшить качество жизни и раскрыть свой потенциал через практику йоги, дыхания и медитации. Для меня самое важное в жизни — любовь, осознанность и забота о себе.",
    },
    why: {
      tag: "Почему выбирают ArtJoga",
      title: "Практика, созданная для вас",
      items: [
        "Индивидуальный подход",
        "Кундалини-йога для начинающих и опытных",
        "Медитации",
        "Дыхательные практики",
        "Гармония тела и разума",
        "Развитие осознанности",
        "Восстановление энергии",
        "Эмоциональный баланс",
      ],
    },
    benefits: {
      tag: "Преимущества занятий",
      title: "Что вы почувствуете",
      items: [
        "Снижение стресса",
        "Улучшение сна",
        "Больше энергии",
        "Внутреннее спокойствие",
        "Укрепление здоровья",
        "Повышение концентрации",
        "Любовь к себе",
        "Гармония тела и души",
      ],
    },
    gallery: { tag: "Галерея", title: "Йога и природа" },
    reviews: {
      tag: "Отзывы",
      title: "Что говорят наши ученики",
      items: [
        { text: "Занятия с Александрой полностью изменили моё отношение к себе. Я научилась слышать своё тело и дышать заново. Это больше, чем йога — это путь к себе.", name: "Мария К.", role: "Ученица, 1 год практики" },
        { text: "После рабочего дня практика Кундалини возвращает меня в баланс. Стресс уходит, появляется ясность и спокойствие. Лучшее решение для моей жизни.", name: "Дмитрий С.", role: "Ученик, 8 месяцев" },
        { text: "Атмосфера студии невероятная — тепло, забота и принятие. Я начинала с нуля, и сейчас не представляю жизни без этих практик.", name: "Анна В.", role: "Ученица, 2 года" },
      ],
    },
    faq: {
      tag: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      items: [
        { q: "Что такое Кундалини-йога?", a: "Кундалини-йога — это динамичная практика, объединяющая движение, дыхание (пранаяму), медитацию и мантры. Она направлена на пробуждение энергии, укрепление нервной системы и достижение внутренней гармонии тела, ума и души." },
        { q: "Подходит ли новичкам?", a: "Да, абсолютно. Практика адаптируется под любой уровень подготовки. Начинающие выполняют упражнения в комфортном для себя темпе, а опытные ученики углубляют практику. Никакого предыдущего опыта не требуется." },
        { q: "Что взять на первое занятие?", a: "Удобную одежду из натуральных тканей, коврик для йоги (можно взять у нас), воду и открытое сердце. Рекомендуем не есть плотно за 2 часа до практики." },
        { q: "Как проходят занятия?", a: "Занятие начинается с настройки и дыхания, затем следует крийя (комплекс упражнений), глубокое расслабление и медитация. Каждая практика — это целостное путешествие длительностью около 75–90 минут." },
        { q: "Есть ли онлайн-занятия?", a: "Да, мы проводим онлайн-занятия в прямом эфире, а также предоставляем доступ к записям. Вы можете практиковать из любой точки мира в удобное время." },
      ],
    },
    contact: {
      tag: "Запись на занятие",
      title: "Начните свой путь сегодня",
      desc: "Оставьте заявку, и мы свяжемся с вами, чтобы подобрать удобное время для первого занятия.",
      name: "Имя",
      phone: "Телефон",
      email: "Email",
      message: "Сообщение",
      submit: "Записаться",
      sending: "Отправка...",
      success: "Спасибо! Ваша заявка отправлена. Мы скоро свяжемся с вами.",
      error: "Что-то пошло не так. Попробуйте ещё раз.",
    },
    footer: {
      slogan: "Find Harmony. Feel Love. Live Consciously.",
      desc: "Пространство гармонии, любви и осознанности.",
      contacts: "Контакты",
      rights: "Все права защищены.",
    },
  },
  en: {
    nav: { about: "About", why: "Why ArtJoga", benefits: "Benefits", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", book: "Book Now" },
    hero: {
      tag: "Kundalini Yoga Studio",
      title: "Kundalini Yoga for Body, Mind & Soul",
      slogan: "Find Harmony. Feel Love. Live Consciously.",
      desc: "Welcome to ArtJoga — a space of harmony, love and consciousness. We help people find inner peace, strengthen the body, unlock their potential and fill life with energy through Kundalini Yoga, breathwork and meditation.",
      book: "Book Now",
      learn: "Learn More",
    },
    about: {
      tag: "About the teacher",
      name: "Aleksandra Vasileuskaya",
      role: "Kundalini Yoga Teacher",
      desc: "My name is Aleksandra. I am a Kundalini Yoga teacher. My goal is to help people find inner harmony, improve their quality of life and unlock their potential through the practice of yoga, breath and meditation. The most important things in life for me are love, consciousness and self-care.",
    },
    why: {
      tag: "Why choose ArtJoga",
      title: "A practice made for you",
      items: [
        "Individual approach",
        "Kundalini Yoga for beginners and advanced",
        "Meditations",
        "Breathing practices",
        "Harmony of body and mind",
        "Developing consciousness",
        "Energy restoration",
        "Emotional balance",
      ],
    },
    benefits: {
      tag: "Benefits of practice",
      title: "What you will feel",
      items: [
        "Reduced stress",
        "Better sleep",
        "More energy",
        "Inner peace",
        "Stronger health",
        "Improved focus",
        "Self-love",
        "Harmony of body and soul",
      ],
    },
    gallery: { tag: "Gallery", title: "Yoga & Nature" },
    reviews: {
      tag: "Testimonials",
      title: "What our students say",
      items: [
        { text: "Practicing with Aleksandra completely changed my relationship with myself. I learned to listen to my body and to breathe anew. It's more than yoga — it's a path to yourself.", name: "Maria K.", role: "Student, 1 year" },
        { text: "After a workday, the Kundalini practice brings me back to balance. Stress fades and clarity arrives. The best decision for my life.", name: "Dmitry S.", role: "Student, 8 months" },
        { text: "The studio atmosphere is incredible — warmth, care and acceptance. I started from scratch and now I can't imagine life without these practices.", name: "Anna V.", role: "Student, 2 years" },
      ],
    },
    faq: {
      tag: "Q & A",
      title: "Frequently asked questions",
      items: [
        { q: "What is Kundalini Yoga?", a: "Kundalini Yoga is a dynamic practice that combines movement, breathwork (pranayama), meditation and mantra. It aims to awaken energy, strengthen the nervous system and achieve inner harmony of body, mind and soul." },
        { q: "Is it suitable for beginners?", a: "Yes, absolutely. The practice adapts to any level. Beginners move at their own comfortable pace, while experienced students deepen their practice. No prior experience is needed." },
        { q: "What should I bring to my first class?", a: "Comfortable clothing made of natural fabrics, a yoga mat (we can provide one), water and an open heart. We recommend not eating a heavy meal 2 hours before practice." },
        { q: "How do the classes go?", a: "A class begins with tuning in and breathwork, followed by a kriya (set of exercises), deep relaxation and meditation. Each practice is a complete journey of about 75–90 minutes." },
        { q: "Are there online classes?", a: "Yes, we offer live online classes and provide access to recordings. You can practice from anywhere in the world at a convenient time." },
      ],
    },
    contact: {
      tag: "Book a class",
      title: "Begin your journey today",
      desc: "Leave a request and we'll get in touch to find a convenient time for your first class.",
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      submit: "Book Now",
      sending: "Sending...",
      success: "Thank you! Your request has been sent. We'll contact you soon.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      slogan: "Find Harmony. Feel Love. Live Consciously.",
      desc: "A space of harmony, love and consciousness.",
      contacts: "Contacts",
      rights: "All rights reserved.",
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ru");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
