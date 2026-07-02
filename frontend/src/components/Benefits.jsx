import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Benefits = () => {
  const { t } = useLang();
  return (
    <section id="state" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-sand-100/40">
      <Reveal className="max-w-2xl">
        <Overline>{t.state.tag}</Overline>
        <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">{t.state.title}</h2>
        <div className="space-y-4 mt-6">
          {t.state.intro.map((p, i) => (
            <p key={i} className="text-base lg:text-lg text-ink/65 leading-relaxed">{p}</p>
          ))}
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-14">
        {t.state.items.map((item, i) => (
          <motion.div
            key={i}
            data-testid={`state-item-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
            className="bg-white rounded-3xl p-7 md:p-8 border border-sand-100 hover:border-gold/40 hover:shadow-md transition-all duration-500 flex gap-5"
          >
            <span className="shrink-0 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mt-0.5">
              <Check size={18} className="text-gold" strokeWidth={2.2} />
            </span>
            <div>
              <p className="font-serif text-xl text-ink leading-snug">{item.title}</p>
              <p className="text-sm lg:text-base text-ink/60 leading-relaxed mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
