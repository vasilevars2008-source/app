import React, { createContext, useContext, useState } from "react";

export const translations = {
  ru: {
    nav: { about: "О преподавателе", why: "Почему ArtJoga", state: "Состояние", formats: "Форматы", atmosphere: "Атмосфера", reviews: "Отзывы", faq: "Вопросы", contacts: "Контакты", book: "Записаться" },
    hero: {
      tag: "Kundalini Yoga Studio",
      title: "Kundalini Yoga for Body, Mind & Soul",
      slogan: "Find Harmony. Feel Love. Live Consciously.",
      desc: [
        "ArtJoga — это пространство тишины среди шума повседневной жизни.",
        "Здесь через Кундалини-йогу, осознанное дыхание и медитацию вы возвращаетесь к себе: отпускаете напряжение, восстанавливаете силы, пробуждаете внутреннюю энергию и учитесь жить в гармонии с телом, разумом и душой.",
        "Кундалини-йога — это йога нейтрального ума. Вы перестаёте быть слепо захваченными эмоциями, убеждениями и реакциями и обретаете доступ к точке внутреннего наблюдения, из которой всё становится видно ясно, будто на ладони.",
        "Каждая практика — это шаг к спокойствию, ясности и любви к себе. Потому что настоящие изменения начинаются изнутри.",
      ],
      book: "Записаться",
      learn: "Узнать больше",
    },
    about: {
      tag: "О преподавателе",
      name: "Aleksandra Vasileuskaya",
      role: "Kundalini Yoga Teacher",
      desc: "Меня зовут Александра. Я преподаватель Кундалини-йоги. Моя цель — помочь людям найти внутреннюю гармонию, улучшить качество жизни и раскрыть свой потенциал через практику йоги, дыхания и медитации. В своей работе я объединяю дыхательные техники, крийи, медитации и глубокую релаксацию. Практики помогают уменьшить стресс, повысить уровень энергии, улучшить концентрацию и почувствовать больше уверенности в повседневной жизни. Для меня самое важное в жизни — любовь, осознанность и забота о себе.",
      stat1: { num: "2000+", label: "Занятий" },
      stat2: { num: "8+", label: "Лет практики" },
    },
    why: {
      tag: "Почему ArtJoga",
      title: "Больше, чем занятия йогой",
      lead: "ArtJoga — это больше, чем занятия йогой. Название объединяет два важных смысла.",
      art: { letter: "Art", desc: "Искусство жить осознанно, чувствовать красоту момента и создавать свою жизнь с любовью." },
      joga: { letter: "Joga", desc: "Путь соединения тела, разума и души через практику." },
      paras: [
        "Каждое занятие ArtJoga — это возможность остановиться в быстром ритме жизни, отпустить напряжение, восстановить внутренний баланс и наполниться энергией.",
        "Здесь нет соревнования, сравнения или стремления быть идеальным. Есть только уважение к своему телу, своему состоянию и своему темпу.",
        "ArtJoga — это пространство, где практика становится частью жизни, а внутренние изменения постепенно проявляются во внешнем мире.",
      ],
    },
    state: {
      tag: "Состояние",
      title: "Ваше состояние",
      intro: [
        "Практика начинается на коврике, а продолжается в вашей повседневной жизни.",
        "Кундалини-йога — это путь к внутреннему равновесию, ясности и гармонии. С каждой практикой вы учитесь лучше слышать себя, восстанавливать силы и создавать пространство, в котором становится легче жить, чувствовать и принимать решения.",
      ],
      items: [
        { title: "Внутреннее спокойствие", desc: "Обретайте устойчивость и сохраняйте равновесие даже в самом насыщенном ритме жизни." },
        { title: "Жизненная энергия", desc: "Наполняйтесь силами, чтобы жить активно, творить и вдохновляться каждым днём." },
        { title: "Ясность ума", desc: "Освобождайтесь от внутреннего шума, чтобы принимать решения спокойно и осознанно." },
        { title: "Глубокий сон", desc: "Расслабление нервной системы помогает телу полноценно восстанавливаться и просыпаться отдохнувшим." },
        { title: "Здоровое тело", desc: "Развивайте гибкость, силу, свободное дыхание и ощущение лёгкости в каждом движении." },
        { title: "Концентрация", desc: "Развивайте способность быть в настоящем моменте и сохранять внимание на том, что действительно важно." },
        { title: "Любовь к себе", desc: "Учитесь относиться к себе с заботой, уважением и принятием." },
        { title: "Гармония", desc: "Почувствуйте единство тела, разума и души — состояние, которое остаётся с вами далеко за пределами коврика." },
      ],
    },
    formats: {
      tag: "Форматы",
      title: "Выберите свой формат",
      intro: "Выберите формат, который подходит вашему ритму жизни и практике.",
      items: [
        { icon: "users", title: "Офлайн-группы", desc: "Живые занятия в пространстве. Практика в группе, присутствие, дыхание и общее поле." },
        { icon: "monitor", title: "Онлайн-группы", desc: "Занятия в реальном времени из любого места." },
        { icon: "heart", title: "Индивидуально офлайн", desc: "Персональная практика в живом контакте." },
        { icon: "globe", title: "Индивидуально онлайн", desc: "Глубокая личная работа в онлайн-формате. Гибкость и индивидуальное сопровождение." },
        { icon: "repeat", title: "40-дневные практики", desc: "Системная практика для устойчивых внутренних изменений. Регулярность, дисциплина и постепенное углубление состояния." },
      ],
      ctaTitle: "Хочешь подобрать формат под себя?",
      ctaText: "Свяжись со мной — и я помогу выбрать то, что подходит именно тебе.",
      ctaButton: "Написать / Записаться",
    },
    atmosphere: {
      tag: "Атмосфера",
      title: "Атмосфера",
      subtitle: "Пространство, где практика соединяется с природой, тишиной и состоянием внутри.",
    },
    reviews: {
      tag: "Отзывы",
      title: "Что говорят наши ученики",
      items: [
        { text: "Занятия с Александрой полностью изменили моё отношение к себе. Я научилась слышать своё тело и дышать заново. Это больше, чем йога — это путь к себе.", name: "Мария К.", role: "Ученица, 1 год практики" },
        { text: "После рабочего дня практика Кундалини возвращает меня в баланс. Стресс уходит, появляется ясность и спокойствие. Лучшее решение для моей жизни.", name: "Дмитрий С.", role: "Ученик, 8 месяцев" },
        { text: "Атмосфера студии невероятная — тепло, забота и принятие. Я начинала с нуля, и сейчас не представляю жизни без этих практик.", name: "Анна В.", role: "Ученица, 2 года" },
        { text: "Я пришла с постоянной тревогой и бессонницей. Уже через месяц занятий сон наладился, а мысли стали спокойнее. Благодарна за бережный подход.", name: "Ольга Т.", role: "Полгода практики" },
        { text: "Кундалини-йога стала моей опорой. Дыхательные практики помогают справляться со стрессом на работе за считанные минуты. Рекомендую всем.", name: "Екатерина Л.", role: "Ученица, 1.5 года" },
        { text: "Не верил, что йога подойдёт мужчине с нулевой гибкостью. Оказалось — это про силу, дыхание и ясность ума. По-настоящему затягивает.", name: "Игорь М.", role: "Ученик, 4 месяца" },
        { text: "Александра — потрясающий преподаватель. Чувствуешь заботу и внимание к каждому. После занятий будто заново рождаешься.", name: "Наталья П.", role: "Ученица, 2 года" },
        { text: "40-дневная практика перевернула моё представление о себе. Появились дисциплина, энергия и настоящая любовь к себе.", name: "Светлана Р.", role: "40-дневная практика" },
        { text: "Занимаюсь онлайн из другого города. Вовлечённость и качество такие же, как вживую. Очень удобно и глубоко.", name: "Андрей К.", role: "Онлайн-ученик" },
        { text: "Каждое занятие — маленькое путешествие внутрь себя. Ушли зажимы в теле, стало больше лёгкости и радости.", name: "Юлия Д.", role: "Ученица, 8 месяцев" },
        { text: "Здесь я нашла не просто йогу, а сообщество близких по духу людей и пространство, куда хочется возвращаться снова и снова.", name: "Виктория С.", role: "Ученица, 3 года" },
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
      closingTitle: "Если у вас остались сомнения — это нормально.",
      closingText: "Можно просто написать мне, и я помогу выбрать формат.",
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
    nav: { about: "About", why: "Why ArtJoga", state: "State", formats: "Formats", atmosphere: "Atmosphere", reviews: "Reviews", faq: "FAQ", contacts: "Contacts", book: "Book Now" },
    hero: {
      tag: "Kundalini Yoga Studio",
      title: "Kundalini Yoga for Body, Mind & Soul",
      slogan: "Find Harmony. Feel Love. Live Consciously.",
      desc: [
        "ArtJoga is a space of silence amid the noise of everyday life.",
        "Here, through Kundalini Yoga, conscious breathing and meditation, you return to yourself: release tension, restore your strength, awaken inner energy and learn to live in harmony with body, mind and soul.",
        "Kundalini Yoga is the yoga of the neutral mind. You stop being blindly captured by emotions, beliefs and reactions and gain access to a point of inner observation, from which everything becomes clearly visible, as if in the palm of your hand.",
        "Every practice is a step towards calm, clarity and self-love. Because real change begins from within.",
      ],
      book: "Book Now",
      learn: "Learn More",
    },
    about: {
      tag: "About the teacher",
      name: "Aleksandra Vasileuskaya",
      role: "Kundalini Yoga Teacher",
      desc: "My name is Aleksandra. I am a Kundalini Yoga teacher. My goal is to help people find inner harmony, improve their quality of life and unlock their potential through the practice of yoga, breath and meditation. In my work I combine breathing techniques, kriyas, meditations and deep relaxation. These practices help reduce stress, raise energy levels, improve focus and bring more confidence into everyday life. The most important things in life for me are love, consciousness and self-care.",
      stat1: { num: "2000+", label: "Classes" },
      stat2: { num: "8+", label: "Years of practice" },
    },
    why: {
      tag: "Why ArtJoga",
      title: "More than yoga classes",
      lead: "ArtJoga is more than yoga classes. The name unites two important meanings.",
      art: { letter: "Art", desc: "The art of living consciously, feeling the beauty of the moment and creating your life with love." },
      joga: { letter: "Joga", desc: "The path of uniting body, mind and soul through practice." },
      paras: [
        "Every ArtJoga class is a chance to pause in the fast rhythm of life, release tension, restore inner balance and fill up with energy.",
        "There is no competition, comparison or striving to be perfect here. There is only respect for your body, your state and your pace.",
        "ArtJoga is a space where practice becomes part of life, and inner changes gradually manifest in the outer world.",
      ],
    },
    state: {
      tag: "State",
      title: "Your state",
      intro: [
        "Practice begins on the mat and continues in your everyday life.",
        "Kundalini Yoga is a path to inner balance, clarity and harmony. With each practice you learn to hear yourself better, restore your strength and create a space in which it becomes easier to live, feel and make decisions.",
      ],
      items: [
        { title: "Inner peace", desc: "Gain stability and keep your balance even in the busiest rhythm of life." },
        { title: "Vital energy", desc: "Fill up with strength to live actively, create and be inspired every day." },
        { title: "Clarity of mind", desc: "Free yourself from inner noise to make decisions calmly and consciously." },
        { title: "Deep sleep", desc: "Relaxing the nervous system helps the body fully recover and wake up rested." },
        { title: "Healthy body", desc: "Develop flexibility, strength, free breathing and a sense of lightness in every movement." },
        { title: "Concentration", desc: "Develop the ability to be in the present moment and keep your attention on what truly matters." },
        { title: "Self-love", desc: "Learn to treat yourself with care, respect and acceptance." },
        { title: "Harmony", desc: "Feel the unity of body, mind and soul — a state that stays with you far beyond the mat." },
      ],
    },
    formats: {
      tag: "Formats",
      title: "Choose your format",
      intro: "Choose the format that suits your rhythm of life and practice.",
      items: [
        { icon: "users", title: "Offline groups", desc: "Live classes in the space. Practice in a group, presence, breath and a shared field." },
        { icon: "monitor", title: "Online groups", desc: "Real-time classes from anywhere." },
        { icon: "heart", title: "Individual offline", desc: "Personal practice in live contact." },
        { icon: "globe", title: "Individual online", desc: "Deep personal work in an online format. Flexibility and individual guidance." },
        { icon: "repeat", title: "40-day practices", desc: "Systematic practice for lasting inner change. Regularity, discipline and gradual deepening of your state." },
      ],
      ctaTitle: "Want to find the right format for you?",
      ctaText: "Get in touch — and I'll help you choose what suits you best.",
      ctaButton: "Message / Book",
    },
    atmosphere: {
      tag: "Atmosphere",
      title: "Atmosphere",
      subtitle: "A space where practice connects with nature, silence and the state within.",
    },
    reviews: {
      tag: "Testimonials",
      title: "What our students say",
      items: [
        { text: "Practicing with Aleksandra completely changed my relationship with myself. I learned to listen to my body and to breathe anew. It's more than yoga — it's a path to yourself.", name: "Maria K.", role: "Student, 1 year" },
        { text: "After a workday, the Kundalini practice brings me back to balance. Stress fades and clarity arrives. The best decision for my life.", name: "Dmitry S.", role: "Student, 8 months" },
        { text: "The studio atmosphere is incredible — warmth, care and acceptance. I started from scratch and now I can't imagine life without these practices.", name: "Anna V.", role: "Student, 2 years" },
        { text: "I came with constant anxiety and insomnia. Within a month my sleep improved and my mind grew calmer. Grateful for the gentle approach.", name: "Olga T.", role: "6 months of practice" },
        { text: "Kundalini Yoga has become my anchor. The breathing practices help me handle work stress in minutes. I recommend it to everyone.", name: "Ekaterina L.", role: "Student, 1.5 years" },
        { text: "I didn't believe yoga was for a man with zero flexibility. Turns out it's about strength, breath and clarity of mind. Truly captivating.", name: "Igor M.", role: "Student, 4 months" },
        { text: "Aleksandra is an amazing teacher. You feel her care and attention to everyone. After class you feel reborn.", name: "Natalia P.", role: "Student, 2 years" },
        { text: "The 40-day practice transformed how I see myself. It brought discipline, energy and genuine self-love.", name: "Svetlana R.", role: "40-day practice" },
        { text: "I practice online from another city. The engagement and quality are just like in person. Very convenient and deep.", name: "Andrey K.", role: "Online student" },
        { text: "Every class is a little journey inward. The tension in my body is gone, replaced by lightness and joy.", name: "Yulia D.", role: "Student, 8 months" },
        { text: "Here I found not just yoga, but a community of kindred spirits and a space I want to return to again and again.", name: "Victoria S.", role: "Student, 3 years" },
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
      closingTitle: "If you still have doubts — that's completely normal.",
      closingText: "You can simply message me, and I'll help you choose a format.",
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
