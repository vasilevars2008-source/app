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

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
        {imgs.map((src, i) => (
          <motion.div
            key={i}
            data-testid={`gallery-image-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
            className="mb-4 md:mb-6 overflow-hidden rounded-[1.75rem] group break-inside-avoid"
          >
            <img
              src={src}
              alt={`ArtJoga atmosphere ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
