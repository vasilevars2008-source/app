import React, { useRef } from "react";
import { useLang } from "../i18n";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const { t } = useLang();
  const trackRef = useRef(null);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-testid^="review-card-"]');
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const Arrow = ({ dir, testid }) => (
    <button
      data-testid={testid}
      onClick={() => scrollByCards(dir === "prev" ? -1 : 1)}
      aria-label={dir}
      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-sand-50 hover:bg-terracotta hover:border-terracotta transition-colors duration-300"
    >
      {dir === "prev" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
    </button>
  );

  return (
    <section id="reviews" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-ink text-sand-50">
      <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-gold">{t.reviews.tag}</span>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight mt-4">{t.reviews.title}</h2>
        </div>
        <div className="hidden sm:flex gap-3 shrink-0">
          <Arrow dir="prev" testid="reviews-prev" />
          <Arrow dir="next" testid="reviews-next" />
        </div>
      </div>

      <div
        ref={trackRef}
        data-testid="reviews-track"
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-1 px-1"
      >
        {t.reviews.items.map((r, i) => (
          <div
            key={i}
            data-testid={`review-card-${i}`}
            className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/[0.04] border border-white/10 rounded-3xl p-8 flex flex-col"
          >
            <Quote className="text-terracotta" size={32} />
            <p className="font-serif text-xl leading-relaxed text-sand-50/90 mt-5 flex-1">"{r.text}"</p>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
              <span className="w-12 h-12 rounded-full bg-terracotta/90 flex items-center justify-center font-serif text-lg text-white shrink-0">
                {r.name.trim().charAt(0)}
              </span>
              <div>
                <p className="font-medium text-sand-50">{r.name}</p>
                <p className="text-sm text-sand-50/50">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex sm:hidden gap-3 mt-8 justify-center">
        <Arrow dir="prev" testid="reviews-prev-mobile" />
        <Arrow dir="next" testid="reviews-next-mobile" />
      </div>
    </section>
  );
};
