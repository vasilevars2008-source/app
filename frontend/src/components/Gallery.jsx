import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { motion } from "framer-motion";
import { IMAGES } from "../assets";

export const Gallery = () => {
  const { t } = useLang();
  const imgs = IMAGES.gallery;
  return (
    <section id="atmosphere" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <Reveal className="max-w-2xl mb-14">
        <Overline>{t.atmosphere.tag}</Overline>
        <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">{t.atmosphere.title}</h2>
        <p className="text-base lg:text-lg text-ink/65 leading-relaxed mt-4">{t.atmosphere.subtitle}</p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {imgs.map((src, i) => (
          <motion.div
            key={i}
            data-testid={`gallery-image-${i}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            className="overflow-hidden rounded-[1.75rem] group h-[420px] md:h-[560px]"
          >
            <img
              src={src}
              alt={`ArtJoga atmosphere ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
