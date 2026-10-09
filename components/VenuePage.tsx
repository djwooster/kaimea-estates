import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BOOK_HREF } from "@/lib/site";

export type VenuePageContent = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  facts: { label: string; value: string }[];
  storyHeading: string;
  story: string[];
  storyImage: string;
  storyAlt: string;
  highlightsHeading: string;
  highlights: { title: string; description: string }[];
  gallery: { src: string; alt: string }[];
  faqs: { question: string; answer: string }[];
};

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-12 bg-gold-500/50" />
      <div className="w-1 h-1 rotate-45 bg-gold-500/70" />
      <div className="h-px w-12 bg-gold-500/50" />
    </div>
  );
}

export default function VenuePage({ content }: { content: VenuePageContent }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero — static H1 and priority image keep mobile LCP fast */}
      <section className="relative h-[80svh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src={content.heroImage}
          alt={content.heroAlt}
          className="object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/40 via-forest-950/30 to-forest-950/85" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 text-white">
          <p className="label-accent text-gold-400/90 mb-5 tracking-[0.4em]">
            {content.eyebrow}
          </p>
          <h1 className="font-serif font-light text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 text-balance">
            {content.title}{" "}
            <em className="not-italic text-gold-300">{content.titleAccent}</em>
          </h1>
          <p className="font-sans font-light text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-9">
            {content.intro}
          </p>
          <a
            href={BOOK_HREF}
            className="inline-block bg-gold-600 hover:bg-gold-500 text-forest-950 font-sans text-[11px] tracking-[0.3em] uppercase px-10 py-4 transition-all duration-300"
          >
            Check Your Date
          </a>
        </div>
      </section>

      {/* Key facts — plain, quotable answers for search and AI engines */}
      <section className="bg-forest-900 text-white">
        <dl className="max-w-6xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {content.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-400 mb-2">
                {fact.label}
              </dt>
              <dd className="font-serif text-xl sm:text-2xl font-light">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Story */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-forest-900 mb-8 leading-tight">
              {content.storyHeading}
            </h2>
            {content.story.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="font-sans font-light text-forest-700/80 leading-relaxed mb-5"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative aspect-[4/5]">
            <Image
              src={content.storyImage}
              alt={content.storyAlt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-forest-900">
              {content.highlightsHeading}
            </h2>
            <GoldRule className="mt-6" />
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {content.highlights.map((item) => (
              <li key={item.title}>
                <div className="h-px w-8 bg-gold-500/60 mb-5" />
                <h3 className="font-serif text-2xl text-forest-900 mb-3">{item.title}</h3>
                <p className="font-sans text-sm font-light text-forest-700/75 leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 px-2">
          {content.gallery.map((photo) => (
            <div key={photo.src} className="relative aspect-square">
              <Image
                src={photo.src}
                alt={photo.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — native details/summary so answers are in the HTML without JS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="label-accent mb-4">Common Questions</p>
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-forest-900">
              Before You <em>Inquire</em>
            </h2>
            <GoldRule className="mt-6" />
          </div>
          <div className="divide-y divide-forest-100 border-y border-forest-100">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-forest-900 text-xl leading-snug">
                    {faq.question}
                  </h3>
                  <span
                    className="text-gold-600 text-2xl leading-none transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="font-sans text-sm text-forest-700/75 leading-relaxed font-light pt-4 max-w-3xl">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
