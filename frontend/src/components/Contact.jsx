import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-sand-100/40">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink">Записаться</h2>
        <p className="text-base lg:text-lg text-ink/65 leading-relaxed mt-6">
          Нажмите на кнопку, чтобы перейти к форме записи.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdoHzXBUPBl1Im7u3bVIpImMS_olFuGjJ5MSIrg9A02rRmS8g/viewform?usp=header"
          className="inline-block mt-8 bg-ink text-sand-50 rounded-full px-10 py-4 font-medium hover:bg-terracotta transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Перейти к форме
        </a>
      </div>
    </section>
  );
};
