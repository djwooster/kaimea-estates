"use client";

import { motion } from "framer-motion";

// Replace with verified quotes from real clients
const testimonials = [
  {
    quote:
      "Hale Punakai was everything we dreamed of and more. The ocean breeze, the lush greenery, the string lights at golden hour — it felt like a fairytale. The team treated us like ohana from the very first call, and our guests are still raving about it.",
    name: "Brodie & Kiana",
    event: "Wedding",
  },
  {
    quote:
      "From the moment we stepped onto the estate, we knew this was the place. The intimate scale made everything feel deeply personal. Having the Pacific as our ceremony backdrop was breathtaking — every photo looks like it came from a magazine.",
    name: "Christie & Tommy",
    event: "Wedding",
  },
  {
    quote:
      "We flew in from the mainland and the Kaimea Estates team made every detail seamless. We streamed our own playlist through the speakers and it created the most genuine, warm atmosphere all evening. It was exactly the magical night we envisioned.",
    name: "Monica & Davis",
    event: "Wedding Reception",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          className="w-3 h-3 fill-gold-500"
          aria-hidden="true"
        >
          <path d="M6 0l1.5 4h4l-3.3 2.4L9.4 11 6 8.7 2.6 11l1.2-4.6L.5 4h4z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-forest-900 py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border-2 border-white" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="label-accent text-gold-400 mb-4">Voices of Our Ohana</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-white">
            Stories From the{" "}
            <em className="text-gold-300">Estate</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-gold-500/40" />
            <div className="w-1 h-1 rotate-45 bg-gold-500/50" />
            <div className="h-px w-12 bg-gold-500/40" />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="relative bg-forest-800/60 border border-white/8 p-8 lg:p-10 flex flex-col"
            >
              {/* Large decorative quote mark */}
              <span
                className="absolute top-5 right-7 font-serif text-8xl text-gold-500/15 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <Stars />

              <blockquote className="mt-6 font-serif text-white/80 text-lg leading-relaxed font-light flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-serif text-white text-base font-medium">
                  {t.name}
                </p>
                <p className="font-sans text-gold-400 text-[11px] tracking-[0.2em] uppercase mt-0.5">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
