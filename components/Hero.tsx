"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BOOK_HREF =
  "mailto:events@kaimeaestates.com?subject=Venue%20Inquiry%20%E2%80%93%20Let%27s%20Connect";

const HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/1621270292039-UYJEF8W6HNYP6C3UZT3C/kaimea-estate-hero-web.jpg";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: image drifts upward as you scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.4 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <img
          src={HERO_IMAGE}
          alt="Kaimea Estates — Hale Punakai beachfront estate in Kahala, Oahu"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-forest-950/30 to-forest-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/20 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location badge */}
        <motion.p
          variants={fadeUp}
          className="label-accent text-gold-400/90 mb-7 tracking-[0.4em]"
        >
          Kahala &nbsp;·&nbsp; Oahu &nbsp;·&nbsp; Hawai&lsquo;i
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-serif font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 text-balance"
        >
          Where Every Moment
          <br />
          <em className="not-italic text-gold-300">Becomes Forever</em>
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center gap-4 mb-7"
        >
          <div className="h-px w-16 bg-gold-500/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold-500/60" />
          <div className="h-px w-16 bg-gold-500/60" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="font-sans font-light text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          An intimate beachfront estate crafted for life&rsquo;s most meaningful
          celebrations — weddings, gatherings, and everything in between.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={BOOK_HREF}
            className="inline-block bg-gold-600 hover:bg-gold-500 text-forest-950 font-sans text-[11px] tracking-[0.3em] uppercase px-10 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold-600/20"
          >
            Book a Call
          </a>
          <a
            href="#about"
            className="inline-block border border-white/40 hover:border-white/70 text-white font-sans text-[11px] tracking-[0.3em] uppercase px-10 py-4 transition-all duration-300"
          >
            Explore the Estate
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white/40 font-sans text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div> */}
    </section>
  );
}
