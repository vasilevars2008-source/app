import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { IMAGES } from "../assets";

export const Hero = () => {
  const { t } = useLang();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.25em] uppercase font-semibold text-gold"
          >
            {t.hero.tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink mt-5"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="font-serif italic text-xl md:text-2xl text-terracotta mt-6"
          >
            {t.hero.slogan}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-4 mt-6 max-w-xl"
          >
            {t.hero.desc.map((p, i) => (
              <p key={i} className="text-base lg:text-lg text-ink/60 leading-relaxed">{p}</p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4 mt-9"
          >
            <button
              data-testid="hero-book-button"
              onClick={() => scrollTo("contact")}
              className="bg-ink text-sand-50 rounded-full px-8 py-4 font-medium hover:bg-terracotta transition-colors duration-300"
            >
              {t.hero.book}
            </button>
            <button
              data-testid="hero-learn-button"
              onClick={() => scrollTo("about")}
              className="border border-ink text-ink rounded-full px-8 py-4 font-medium hover:bg-ink hover:text-sand-50 transition-colors duration-300"
            >
              {t.hero.learn}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-sand-100 rounded-[2.5rem] -z-10 hidden md:block" />
          <img
            data-testid="hero-image"
            src={IMAGES.hero}
            alt="Kundalini Yoga teacher"
            className="w-full h-[440px] md:h-[600px] object-cover rounded-[2rem] shadow-sm"
          />
          <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-sand-50/70 rounded-2xl px-6 py-4 border border-white/40">
            <p className="font-serif text-lg text-ink">ArtJoga</p>
            <p className="text-xs text-ink/60 tracking-wide">Body · Mind · Soul</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
