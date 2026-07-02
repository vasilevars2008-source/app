import React from "react";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export const FAQ = () => {
  const { t } = useLang();
  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <Overline>{t.faq.tag}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">{t.faq.title}</h2>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-sand-200"
              >
                <AccordionTrigger className="text-left font-serif text-xl md:text-2xl text-ink hover:text-terracotta hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base lg:text-lg text-ink/65 leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 bg-sand-100/60 rounded-3xl p-8 border border-sand-100">
            <p className="font-serif text-xl md:text-2xl text-ink">{t.faq.closingTitle}</p>
            <p className="text-base lg:text-lg text-ink/65 leading-relaxed mt-3">{t.faq.closingText}</p>
            <button
              data-testid="faq-cta-button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 bg-ink text-sand-50 rounded-full px-7 py-3 text-sm font-medium hover:bg-terracotta transition-colors duration-300"
            >
              {t.contact.submit}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
