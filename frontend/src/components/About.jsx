import React from "react";
import { useLang } from "../i18n";
import { IMAGES } from "../assets";
import { Reveal, Overline } from "./Reveal";

export const About = () => {
  const { t, lang } = useLang();
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-sand-100/40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <img
              data-testid="about-image"
              src={IMAGES.about}
              alt={t.about.name}
              className="w-full h-[460px] md:h-[620px] object-cover rounded-[2rem]"
            />
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-sand-50 rounded-2xl px-7 py-5 shadow-md border border-sand-100">
              <p className="font-serif text-xl text-ink">Aleksandra</p>
              <p className="text-xs tracking-[0.15em] uppercase text-gold mt-1">Kundalini Teacher</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Overline>{t.about.tag}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">
            {t.about.name}
          </h2>
          <p className="text-terracotta font-medium mt-2">{t.about.role}</p>
          <p className="text-base lg:text-lg text-ink/65 leading-relaxed mt-7 max-w-xl">
            {t.about.desc}
          </p>
          <div className="flex gap-10 mt-10">
            <div>
              <p className="font-serif text-4xl text-terracotta">500+</p>
              <p className="text-sm text-ink/55 mt-1">{lang === "en" ? "Classes" : "Занятий"}</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-terracotta">8+</p>
              <p className="text-sm text-ink/55 mt-1">{lang === "en" ? "Years" : "Лет практики"}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
