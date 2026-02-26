"use client";

import { motion } from "framer-motion";

const BOOK_HREF =
  "mailto:events@kaimeaestates.com?subject=Venue%20Inquiry%20%E2%80%93%20Let%27s%20Connect";

const CTA_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/a3e9fb58-630a-4843-9138-39c1ab849f36/IMG_6205+%281%29.JPG";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Venue", href: "#venue" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      {/* Full-width CTA band */}
      <section className="relative overflow-hidden py-32 lg:py-44">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={CTA_IMAGE}
            alt="Hale Punakai wedding ceremony"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-950/75" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="label-accent text-gold-400 mb-6">Ready to Begin?</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-7xl text-white leading-tight mb-5">
            Begin Your Story
            <br />
            <em className="text-gold-300">Here</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold-500/40" />
            <div className="w-1 h-1 rotate-45 bg-gold-500/50" />
            <div className="h-px w-12 bg-gold-500/40" />
          </div>
          <p className="font-sans font-light text-white/70 text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Every great celebration starts with a conversation. Let&rsquo;s talk
            about your vision for the most meaningful day of your life.
          </p>
          <motion.a
            href={BOOK_HREF}
            className="inline-block bg-gold-600 hover:bg-gold-500 text-forest-950 font-sans text-[11px] tracking-[0.35em] uppercase px-12 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold-600/25"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Book a Call
          </motion.a>
          <p className="mt-5 font-sans text-xs text-white/40 tracking-wide">
            or email us at{" "}
            <a
              href="mailto:events@kaimeaestates.com"
              className="text-gold-400/70 hover:text-gold-400 underline underline-offset-2 transition-colors"
            >
              events@kaimeaestates.com
            </a>
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-950 text-white py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <p className="font-serif text-2xl tracking-[0.25em] uppercase font-light">
                Kaimea{" "}
                <span className="text-gold-400">Estates</span>
              </p>
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/40 mt-1.5">
                Hale Punakai &nbsp;·&nbsp; Kahala, Oahu
              </p>
            </div>

            {/* Nav links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center lg:justify-end gap-x-7 gap-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/45 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="border-t border-white/8 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/kaimeaestates/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-gold-400 transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/kaimeaestates/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-gold-400 transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="mailto:events@kaimeaestates.com"
                aria-label="Email"
                className="text-white/40 hover:text-gold-400 transition-colors duration-200"
              >
                <MailIcon />
              </a>
            </div>

            <p className="font-sans text-[10px] tracking-[0.15em] text-white/25 uppercase">
              &copy; {new Date().getFullYear()} Kaimea Estates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
