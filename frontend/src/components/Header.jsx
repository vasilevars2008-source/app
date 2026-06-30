import React, { useEffect, useState } from "react";
import { useLang } from "../i18n";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", key: "about" },
  { id: "why", key: "why" },
  { id: "benefits", key: "benefits" },
  { id: "gallery", key: "gallery" },
  { id: "reviews", key: "reviews" },
  { id: "faq", key: "faq" },
];

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-sand-50/80 border-b border-sand-100/60 py-4" : "py-6"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <button
          data-testid="logo-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-2xl tracking-tight text-ink"
        >
          Art<span className="text-terracotta">Joga</span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-ink/70 hover:text-terracotta transition-colors duration-300"
            >
              {t.nav[item.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center text-sm font-medium border border-sand-200 rounded-full overflow-hidden">
            {["ru", "en"].map((l) => (
              <button
                key={l}
                data-testid={`lang-${l}`}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 transition-colors duration-300 ${
                  lang === l ? "bg-ink text-sand-50" : "text-ink/60 hover:text-ink"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            data-testid="header-book-button"
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex bg-ink text-sand-50 rounded-full px-6 py-2.5 text-sm font-medium hover:bg-terracotta transition-colors duration-300"
          >
            {t.nav.book}
          </button>

          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden mt-4 px-6 pb-6 flex flex-col gap-1 bg-sand-50/95 backdrop-blur-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-testid={`mobile-nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="text-left py-3 border-b border-sand-100 text-ink/80 font-medium"
            >
              {t.nav[item.key]}
            </button>
          ))}
          <button
            data-testid="mobile-book-button"
            onClick={() => scrollTo("contact")}
            className="mt-4 bg-ink text-sand-50 rounded-full px-6 py-3 font-medium"
          >
            {t.nav.book}
          </button>
        </nav>
      )}
    </header>
  );
};
