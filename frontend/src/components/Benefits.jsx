import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { IMAGES } from "../assets";

export const Benefits = () => {
  const { t } = useLang();
  return (
    <section id="benefits" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-sand-100/40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <img
            data-testid="benefits-image"
            src={IMAGES.gallery[3]}
            alt="Yoga in nature"
            className="w-full h-[420px] md:h-[560px] object-cover rounded-[2rem]"
          />
        </Reveal>
        <div>
          <Reveal>
            <Overline>{t.benefits.tag}</Overline>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4 mb-10">{t.benefits.title}</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {t.benefits.items.map((item, i) => (
              <motion.div
                key={i}
                data-testid={`benefit-item-${i}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-center gap-4"
              >
                <span className="shrink-0 w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center">
                  <Check size={16} className="text-gold" strokeWidth={2.2} />
                </span>
                <span className="text-base lg:text-lg text-ink/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
