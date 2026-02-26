"use client";

import { motion } from "framer-motion";

const BOOK_HREF =
  "mailto:events@kaimeaestates.com?subject=Venue%20Inquiry%20%E2%80%93%20Let%27s%20Connect";

const events = [
  {
    title: "Weddings",
    subtitle: "Ceremonies & Receptions",
    description:
      "Exchange your vows with the Pacific Ocean as your witness. From intimate elopements to full receptions under the stars, Hale Punakai is the setting your love story deserves.",
    image:
      "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/73e0150a-1b20-4fce-8f9c-2f9608e96d64/Brit+Image+%282%29.jpg",
    alt: "Bride and groom on the lush lawn at Kaimea Estates",
  },
  {
    title: "Private Celebrations",
    subtitle: "Birthdays · Anniversaries · Milestones",
    description:
      "Mark the moments that matter most against a backdrop of tropical beauty. Our estate elevates every gathering into a memory you'll carry forever.",
    image:
      "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/f749f5f9-35b5-453f-8b27-5cc0a0bd2d8b/IMG_8084.JPG",
    alt: "Champagne tower celebration at Kaimea Estates",
  },
  {
    title: "Corporate & Retreats",
    subtitle: "Team Events · Executive Dinners",
    description:
      "Inspire your team in an environment that moves people. Our lush oceanfront setting creates the perfect balance for meaningful connection and inspired thinking.",
    image:
      "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/279f3da1-a205-4eb7-9db3-16696045e893/IMG_5731.JPG",
    alt: "Corporate event at Kaimea Estates",
  },
];

export default function EventTypes() {
  return (
    <section id="events" className="bg-forest-900 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="label-accent text-gold-400 mb-4">Celebrations We Host</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-white">
            Every Occasion,{" "}
            <em className="text-gold-300">Elevated</em>
          </h2>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

                {/* Text on image */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                    {event.subtitle}
                  </p>
                  <h3 className="font-serif text-white text-2xl sm:text-3xl font-light mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <p className="font-sans text-white/65 text-sm leading-relaxed font-light">
                    {event.description}
                  </p>
                  <a
                    href={BOOK_HREF}
                    className="inline-block mt-5 text-gold-400 border border-gold-400/40 hover:border-gold-400 hover:bg-gold-400/10 px-5 py-2.5 font-sans text-[10px] tracking-[0.25em] uppercase transition-all duration-300"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
