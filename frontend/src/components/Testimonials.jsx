import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { IMAGES } from "../assets";

export const Testimonials = () => {
  const { t } = useLang();
  return (
    <section id="reviews" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-ink text-sand-50">
      <Reveal className="max-w-2xl mb-16">
        <span className="text-xs tracking-[0.25em] uppercase font-semibold text-gold">{t.reviews.tag}</span>
        <h2 className="font-serif text-4xl sm:text-5xl tracking-tight mt-4">{t.reviews.title}</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {t.reviews.items.map((r, i) => (
          <motion.div
            key={i}
            data-testid={`review-card-${i}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 flex flex-col"
          >
            <Quote className="text-terracotta" size={32} />
            <p className="font-serif text-xl leading-relaxed text-sand-50/90 mt-5 flex-1">"{r.text}"</p>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
              <img src={IMAGES.testimonials[i]} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-medium text-sand-50">{r.name}</p>
                <p className="text-sm text-sand-50/50">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
