import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { motion } from "framer-motion";
import { Users, Monitor, Heart, Globe, Repeat } from "lucide-react";

const iconMap = { users: Users, monitor: Monitor, heart: Heart, globe: Globe, repeat: Repeat };

export const Formats = () => {
  const { t } = useLang();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="formats" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <Reveal className="max-w-2xl">
        <Overline>{t.formats.tag}</Overline>
        <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">{t.formats.title}</h2>
        <p className="text-base lg:text-lg text-ink/65 leading-relaxed mt-6">{t.formats.intro}</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-14">
        {t.formats.items.map((item, i) => {
          const Icon = iconMap[item.icon] || Users;
          return (
            <motion.div
              key={i}
              data-testid={`format-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group bg-white rounded-3xl p-8 border border-sand-100 hover:border-terracotta/40 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-sand-100 flex items-center justify-center group-hover:bg-terracotta transition-colors duration-500">
                <Icon className="text-terracotta group-hover:text-white transition-colors duration-500" size={22} strokeWidth={1.6} />
              </div>
              <p className="font-serif text-xl text-ink mt-6 leading-snug">{item.title}</p>
              <p className="text-sm lg:text-base text-ink/60 leading-relaxed mt-3">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 bg-ink text-sand-50 rounded-[2rem] px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl">{t.formats.ctaTitle}</h3>
            <p className="text-sand-50/70 mt-3 max-w-lg">{t.formats.ctaText}</p>
          </div>
          <button
            data-testid="formats-cta-button"
            onClick={() => scrollTo("contact")}
            className="shrink-0 bg-sand-50 text-ink rounded-full px-8 py-4 font-medium hover:bg-terracotta hover:text-white transition-colors duration-300"
          >
            {t.formats.ctaButton}
          </button>
        </div>
      </Reveal>
    </section>
  );
};
