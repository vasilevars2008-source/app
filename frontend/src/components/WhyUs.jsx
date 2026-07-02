import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";

export const WhyUs = () => {
  const { t } = useLang();
  const cards = [t.why.art, t.why.joga];
  return (
    <section id="why" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Overline>{t.why.tag}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">{t.why.title}</h2>
          <p className="text-base lg:text-lg text-ink/65 leading-relaxed mt-6">{t.why.lead}</p>

          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {cards.map((c, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-sand-100">
                <p className="font-serif text-3xl text-terracotta">{c.letter}</p>
                <p className="text-sm lg:text-base text-ink/65 leading-relaxed mt-3">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:pl-8 flex items-center">
          <div className="space-y-6 lg:border-l lg:border-sand-200 lg:pl-12">
            {t.why.paras.map((p, i) => (
              <p key={i} className="font-serif text-xl md:text-2xl text-ink/80 leading-relaxed">{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
