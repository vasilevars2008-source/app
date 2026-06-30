import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { motion } from "framer-motion";
import { Heart, Sparkles, Brain, Wind, Flower2, Eye, BatteryCharging, Scale } from "lucide-react";

const icons = [Heart, Sparkles, Brain, Wind, Flower2, Eye, BatteryCharging, Scale];

export const WhyUs = () => {
  const { t } = useLang();
  return (
    <section id="why" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <Reveal className="max-w-2xl">
        <Overline>{t.why.tag}</Overline>
        <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">{t.why.title}</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-14">
        {t.why.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              data-testid={`why-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group bg-white rounded-3xl p-8 border border-sand-100 hover:border-terracotta/40 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-sand-100 flex items-center justify-center group-hover:bg-terracotta transition-colors duration-500">
                <Icon className="text-terracotta group-hover:text-white transition-colors duration-500" size={22} strokeWidth={1.6} />
              </div>
              <p className="font-serif text-xl text-ink mt-6 leading-snug">{item}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
