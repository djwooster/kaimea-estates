"use client";

import { motion } from "framer-motion";

const amenities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path d="M2 18c3-6 5-8 10-8s7 2 10 8" strokeLinecap="round" />
        <path d="M2 22c3-4 5-5 10-5s7 1 10 5" strokeLinecap="round" />
        <circle cx="12" cy="5" r="3" />
      </svg>
    ),
    title: "Oceanfront Setting",
    description:
      "Sweeping Pacific Ocean views from every corner of the estate — your ceremony backdrop is nature itself.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" />
        <path d="M12 10V6M10 8h4" strokeLinecap="round" />
      </svg>
    ),
    title: "Lush Tropical Gardens",
    description:
      "Verdant Hawaiian landscape envelops the property — a living, breathing backdrop of palms, florals, and greenery.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <ellipse cx="12" cy="13" rx="8" ry="4" />
        <path d="M4 13v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4" strokeLinecap="round" />
        <path d="M12 9V6M9 7l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Swimming Pool",
    description:
      "A sparkling private pool perfect for poolside cocktail receptions and golden-hour celebrations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path d="M12 2l2 5h5l-4 3 1.5 5L12 12l-4.5 3L9 10 5 7h5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Bridal Suite",
    description:
      "A sophisticated private sanctuary for the bride and bridal party — with natural light, comfortable seating, and full hair and makeup space.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" strokeLinecap="round" />
      </svg>
    ),
    title: "String Light Canopy",
    description:
      "A warm canopy of decorative Edison lights transforms the estate into a magical setting as evening falls.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <rect x="3" y="11" width="4" height="7" rx="1" />
        <rect x="10" y="8" width="4" height="10" rx="1" />
        <rect x="17" y="5" width="4" height="13" rx="1" />
        <path d="M2 21h20" strokeLinecap="round" />
      </svg>
    ),
    title: "Tables & Chairs Included",
    description:
      "Elegant seating for every guest is included with your rental — one less thing to coordinate.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path d="M7 3v6M17 3v6M5 7h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14h.01M12 14h.01M15 14h.01M9 17h.01M12 17h.01" strokeLinecap="round" />
      </svg>
    ),
    title: "Catering Kitchen",
    description:
      "A fully-equipped modern kitchen ready for your catering team — crafted for seamless service.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <circle cx="8" cy="18" r="3" />
        <circle cx="16" cy="14" r="3" />
        <path d="M11 18V8l8-2v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Your Playlist, Your Way",
    description:
      "Stream your curated soundtrack through our premium Bluetooth speaker system. Intimate, personal, and entirely yours — no DJ required.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeLinecap="round" />
        <path d="M16 3.5c1.5.5 2.5 2 2.5 3.5s-1 3-2.5 3.5M19 21v-2a4 4 0 00-1-2.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Professional Event Staff",
    description:
      "Our attentive, experienced team is by your side every step of the way — from setup to the final toast.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Amenities() {
  return (
    <section id="venue" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="label-accent text-gold-600 mb-4">What&rsquo;s Included</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-forest-900 mb-5">
            Everything You Need,
            <br />
            <em>Nothing You Don&rsquo;t</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-gold-500/50" />
            <div className="w-1 h-1 rotate-45 bg-gold-500/70" />
            <div className="h-px w-12 bg-gold-500/50" />
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {amenities.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group flex flex-col gap-4 p-7 border border-forest-100 bg-white hover:border-gold-400/50 hover:shadow-md transition-all duration-300"
            >
              <div className="text-forest-600 group-hover:text-gold-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-forest-900 text-xl font-medium leading-tight">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-forest-700/70 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
