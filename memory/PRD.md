# ArtJoga — PRD

## Original Problem Statement
Premium, minimalist modern website for a Kundalini Yoga school "ArtJoga" (style à la Apple / Aesop). Palette: white, beige, sand, terracotta with gold accents. Smooth animations, beautiful scroll, rounded blocks. Slogan: "Find Harmony. Feel Love. Live Consciously." Sections: Hero (teacher photo + "Kundalini Yoga for Body, Mind & Soul" + Записаться / Узнать больше), About teacher (Aleksandra Vasileuskaya), Why ArtJoga (8 cards), Benefits (8 checklist), Gallery, Testimonials, FAQ (5), Booking form (Name/Phone/Email/Message), Footer with Instagram/Telegram/Email/Phone. Fully responsive, SEO, premium look.

## User Choices
- Booking form: send submissions to email (Resend).
- Footer contacts: placeholders.
- Images: quality stock yoga photos.
- Language: Russian + English (switcher).
- Testimonials: generated examples.

## Architecture
- Frontend: React 19 (CRACO) + Tailwind, framer-motion, Lenis smooth scroll, shadcn/ui, sonner. Single-page composed of section components in /app/frontend/src/components. i18n via React context (/app/frontend/src/i18n.js). Fonts: Cormorant Garamond + Manrope.
- Backend: FastAPI + MongoDB (motor). Resend for email.
- Endpoints: POST /api/bookings (saves to Mongo, emails studio if Resend configured), GET /api/bookings.

## Implemented (2026-06-30)
- Full premium responsive landing page with all requested sections, RU/EN switcher, animations, smooth scroll, SEO meta.
- Booking form persists to MongoDB; optional Resend email forwarding (graceful skip when keys absent).
- Verified end-to-end by testing agent: backend 6/6, frontend 9/9 flows. 100% pass.

## User Personas
- Prospective yoga students (RU/EN) seeking Kundalini classes, browsing on mobile/desktop, submitting booking requests.

## Backlog / Remaining
- P1: Configure Resend (RESEND_API_KEY + STUDIO_EMAIL) to actually deliver booking emails.
- P2: Admin view / auth-protect GET /api/bookings (currently public — PII).
- P2: Real social/contact links replacing placeholders.
- P2: Online class scheduling / payment integration.

## Next Tasks
- Collect Resend key + studio email from user and enable email delivery.
