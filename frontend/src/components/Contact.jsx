import React, { useState } from "react";
import axios from "axios";
import { useLang } from "../i18n";
import { Reveal, Overline } from "./Reveal";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/bookings`, form);
      toast.success(t.contact.success);
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      toast.error(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-white border border-sand-200 rounded-2xl px-5 py-4 text-ink placeholder:text-ink/35 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-all duration-300";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-sand-100/40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <Overline>{t.contact.tag}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mt-4">{t.contact.title}</h2>
          <p className="text-base lg:text-lg text-ink/65 leading-relaxed mt-6 max-w-md">{t.contact.desc}</p>
          <p className="font-serif italic text-2xl text-terracotta mt-10">{t.footer.slogan}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form data-testid="booking-form" onSubmit={onSubmit} className="bg-white rounded-3xl p-8 md:p-10 border border-sand-100 shadow-sm space-y-5">
            <div>
              <label className="text-sm font-medium text-ink/70 mb-2 block">{t.contact.name}</label>
              <input data-testid="booking-name" name="name" required value={form.name} onChange={onChange} className={inputCls} placeholder={t.contact.name} />
            </div>
            <div>
              <label className="text-sm font-medium text-ink/70 mb-2 block">{t.contact.phone}</label>
              <input data-testid="booking-phone" name="phone" required value={form.phone} onChange={onChange} className={inputCls} placeholder="+ ..." />
            </div>
            <div>
              <label className="text-sm font-medium text-ink/70 mb-2 block">{t.contact.email}</label>
              <input data-testid="booking-email" name="email" type="email" required value={form.email} onChange={onChange} className={inputCls} placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-ink/70 mb-2 block">{t.contact.message}</label>
              <textarea data-testid="booking-message" name="message" rows={4} value={form.message} onChange={onChange} className={`${inputCls} resize-none`} placeholder="..." />
            </div>
            <button
              data-testid="booking-submit"
              type="submit"
              disabled={loading}
              className="w-full bg-ink text-sand-50 rounded-full px-8 py-4 font-medium hover:bg-terracotta transition-colors duration-300 disabled:opacity-60"
            >
              {loading ? t.contact.sending : t.contact.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
