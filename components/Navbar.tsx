"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Venue", href: "#venue" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// Replace with your Calendly or booking link
const BOOK_HREF =
  "mailto:events@kaimeaestates.com?subject=Venue%20Inquiry%20%E2%80%93%20Let%27s%20Connect";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-900/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" aria-label="Kaimea Estates home">
          <span className="font-serif text-white text-lg tracking-[0.25em] uppercase font-light leading-none">
            Kaimea{" "}
            <span className="text-gold-400">Estates</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-gold-400 font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={BOOK_HREF}
          className="hidden lg:inline-block text-gold-400 border border-gold-400/50 hover:border-gold-400 hover:bg-gold-400/10 px-6 py-2.5 font-sans text-[11px] tracking-[0.25em] uppercase transition-all duration-300"
        >
          Book a Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block h-px bg-white w-6 origin-center"
            animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px bg-white w-6"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-px bg-white w-6 origin-center"
            animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="lg:hidden bg-forest-900/98 backdrop-blur-sm overflow-hidden"
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-gold-400 font-sans text-sm tracking-[0.2em] uppercase transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-white/10 pt-5 mt-1">
            <a
              href={BOOK_HREF}
              className="block text-center text-gold-400 border border-gold-400/50 px-6 py-3 font-sans text-[11px] tracking-[0.25em] uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
