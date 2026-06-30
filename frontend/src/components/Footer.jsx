import React from "react";
import { useLang } from "../i18n";
import { Instagram, Send, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const { t, lang } = useLang();
  const contacts = [
    { icon: Instagram, label: "Instagram", value: "@artjoga", href: "https://instagram.com", id: "instagram" },
    { icon: Send, label: "Telegram", value: "@artjoga", href: "https://t.me/artjoga", id: "telegram" },
    { icon: Mail, label: "Email", value: "hello@artjoga.com", href: "mailto:hello@artjoga.com", id: "email" },
    { icon: Phone, label: lang === "en" ? "Phone" : "Телефон", value: "+000 000 0000", href: "tel:+0000000000", id: "phone" },
  ];

  return (
    <footer data-testid="site-footer" className="bg-ink text-sand-50 pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="font-serif text-4xl tracking-tight">Art<span className="text-terracotta">Joga</span></p>
          <p className="font-serif italic text-xl text-gold mt-5">{t.footer.slogan}</p>
          <p className="text-sand-50/55 mt-4 max-w-sm">{t.footer.desc}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-gold mb-6">{t.footer.contacts}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <a
                key={c.id}
                data-testid={`footer-${c.id}`}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-terracotta group-hover:border-terracotta transition-colors duration-300">
                  <c.icon size={18} />
                </span>
                <span>
                  <span className="block text-sm text-sand-50/50">{c.label}</span>
                  <span className="block text-sand-50 group-hover:text-terracotta transition-colors duration-300">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-sm text-sand-50/45">
        <p>© {new Date().getFullYear()} ArtJoga. {t.footer.rights}</p>
        <p>Made with love & consciousness</p>
      </div>
    </footer>
  );
};
