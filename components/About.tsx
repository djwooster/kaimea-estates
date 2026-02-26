"use client";

import { motion } from "framer-motion";

const VENUE_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/1621270845911-EMFZ9QDTL5PW53WVSBZO/kaimea-estate-background-green.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-forest-900 text-white py-24 lg:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="label-accent text-gold-400 mb-5">The Estate</p>

            <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl leading-tight mb-3">
              Hale Punakai
            </h2>
            <p className="font-serif italic text-gold-300 text-xl mb-8 tracking-wide">
              Kaimea Estates
            </p>

            <div className="h-px w-12 bg-gold-500/50 mb-8" />

            <div className="space-y-5 font-sans font-light text-white/75 text-base leading-relaxed">
              <p>
                Tucked along the sun-drenched shores of Kahala — just beyond
                Waikiki — Hale Punakai is Oahu&rsquo;s most beloved hidden gem.
                A private beachfront estate where verdant tropical gardens meet
                sweeping Pacific Ocean vistas, offering a setting unlike anything
                else on the island.
              </p>
              <p>
                Family-owned and operated by native Hawaiians, every detail of
                the estate reflects a deep{" "}
                <em className="text-gold-300 not-italic font-normal">
                  kuleana
                </em>{" "}
                — a responsibility to the land, to each other, and to the spirit
                of aloha. Guests aren&rsquo;t clients here. They&rsquo;re ohana.
              </p>
              <p>
                Whether you&rsquo;re envisioning barefoot vows at the
                water&rsquo;s edge or an elegant dinner under a canopy of string
                lights, Hale Punakai transforms every occasion into something
                unforgettable.
              </p>
            </div>

            {/* Award badge */}
            <motion.div
              className="mt-10 inline-flex items-center gap-4 border border-gold-500/30 px-6 py-4"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400">
                  Nominee
                </span>
                <span className="font-serif text-white text-base leading-snug">
                  Best Outdoor Venue
                </span>
                <span className="font-sans text-[10px] tracking-[0.15em] text-white/50 uppercase">
                  Hawai&lsquo;i &lsquo;Ekahi Awards 2024
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="relative"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={VENUE_IMAGE}
                alt="Hale Punakai — lush tropical gardens and ocean view at Kaimea Estates"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle gold frame offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/25 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
