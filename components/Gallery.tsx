"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/775d86b4-38c7-4280-85e7-38322e83ff31/Brit+Image+2+%281%29.JPG",
    alt: "Ocean view reception at Hale Punakai",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/30278659-3f22-4a9d-b8f1-c5bd3596cba6/Brit+Image3+%282%29.JPG",
    alt: "Bride portrait at Kaimea Estates",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/2e018c5a-c5c1-4690-a7b2-4bafc38eb3ba/IMG_6213.JPG",
    alt: "Elegant tablescape at Hale Punakai",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/52e4c126-c4ee-4967-9b81-2c523b3e39e0/Kaimea+Estates+-+Brit+Florals+%28Edit%29.jpg",
    alt: "Indoor reception with florals at Kaimea Estates",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/94a4b433-b81b-4437-8aef-7aa905bcc1c3/IMG_4348.JPG",
    alt: "Wedding couple at Kaimea Estates",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/627a8cbb-0b25-425b-88fc-cfca67006601/DSC01878.JPG",
    alt: "Cocktails by Empourium Hawai'i at a Kaimea Estates event",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/f749f5f9-35b5-453f-8b27-5cc0a0bd2d8b/IMG_8084.JPG",
    alt: "Champagne tower celebration",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532/97dd5ff8-d573-4b10-ab58-48300af28b3f/IMG_6655.JPG",
    alt: "Wedding welcome sign at Kaimea Estates",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14 lg:mb-18"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="label-accent text-gold-600 mb-4">A Glimpse of the Estate</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-forest-900">
            Beauty in Every Detail
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6 mb-5">
            <div className="h-px w-12 bg-gold-500/50" />
            <div className="w-1 h-1 rotate-45 bg-gold-500/70" />
            <div className="h-px w-12 bg-gold-500/50" />
          </div>
          <a
            href="https://www.instagram.com/kaimeaestates/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-forest-500 hover:text-gold-600 transition-colors duration-200"
          >
            Follow @kaimeaestates
          </a>
        </motion.div>

        {/* Bento-style grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Feature image — full width on mobile, spans 2 cols × 2 rows on desktop */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 lg:col-span-2 lg:row-span-2 group overflow-hidden relative"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-0 lg:min-h-[480px]">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/10 transition-colors duration-500" />
            </div>
          </motion.div>

          {/* Remaining images */}
          {images.slice(1).map((img) => (
            <motion.div
              key={img.src}
              variants={itemVariants}
              className="group overflow-hidden relative"
            >
              <div className={img.aspect}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
