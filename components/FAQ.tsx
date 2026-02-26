"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How many guests does Hale Punakai accommodate?",
    answer:
      "Hale Punakai is an intimate beachfront estate designed for meaningful gatherings rather than large-scale ballroom events. Our setting is ideally suited for ceremonies and receptions of up to 75 guests. Reach out and we can discuss what layout works best for your vision.",
  },
  {
    question: "What's included with the venue rental?",
    answer:
      "Your rental includes exclusive access to the full estate — outdoor ceremony and reception spaces, the bridal suite, a fully-equipped catering kitchen, our premium Bluetooth speaker system, tables and chairs, a canopy of decorative string lighting, and our professional event staff on-site to ensure everything runs beautifully.",
  },
  {
    question: "Can we bring our own vendors — caterers, photographers, florists?",
    answer:
      "Absolutely. We welcome outside vendors and are happy to work with whomever you love. We also maintain a curated network of exceptional local vendors — from florists and photographers to caterers and officiants — and are glad to make introductions.",
  },
  {
    question: "What is your music policy? Can we have a DJ?",
    answer:
      "As a cherished estate in a peaceful residential neighborhood, we observe community sound guidelines that limit large PA systems and outdoor DJs. In their place, our premium Bluetooth speaker system streams beautifully throughout the venue, letting you curate your own personal playlist for every moment — ceremony, cocktail hour, and reception. Many couples tell us this creates a more intimate and authentic atmosphere than a traditional DJ. It's your love story; set it to your soundtrack.",
  },
  {
    question: "Is there a dedicated bridal suite?",
    answer:
      "Yes. Our bridal suite is a sophisticated, private sanctuary for the bride and bridal party to prepare in style. It features natural lighting, comfortable seating, ample mirror space, and everything you need to feel relaxed and radiant before your ceremony.",
  },
  {
    question: "Do you offer outdoor ceremonies?",
    answer:
      "Yes — and our outdoor spaces are the heart of what makes Hale Punakai so extraordinary. We offer oceanfront ceremony setups with the Pacific as your backdrop, garden settings within our lush tropical landscape, and poolside reception areas. We'll help you design a layout that brings your vision to life.",
  },
  {
    question: "Is catering provided?",
    answer:
      "We don't have an in-house catering team, which means you have complete freedom to bring the culinary experience you envision. Our modern, fully-equipped kitchen is ready for your catering team of choice, and we're happy to recommend some of Oahu's finest local caterers.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "Popular dates — particularly weekend evenings and peak seasons — book well in advance. We recommend reaching out 9–12 months ahead for weddings. For smaller private events and corporate gatherings, 3–6 months is typically sufficient. Don't hesitate to contact us to check availability for your preferred date.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-forest-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <h3 className="font-serif text-forest-900 text-xl group-hover:text-forest-700 transition-colors duration-200 leading-snug pr-2">
          {question}
        </h3>
        <motion.div
          className="flex-shrink-0 w-6 h-6 mt-0.5 text-gold-600"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-full h-full"
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="font-sans text-sm text-forest-700/75 leading-relaxed font-light pb-7 max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 lg:py-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14 lg:mb-18"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="label-accent text-gold-600 mb-4">Common Questions</p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-forest-900 mb-5">
            Everything You&rsquo;d Like{" "}
            <em>to Know</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-gold-500/50" />
            <div className="w-1 h-1 rotate-45 bg-gold-500/70" />
            <div className="h-px w-12 bg-gold-500/50" />
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="divide-y divide-forest-100"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          className="text-center mt-14 pt-10 border-t border-forest-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-serif text-forest-700 text-xl mb-4">
            Still have questions?
          </p>
          <p className="font-sans text-sm text-forest-600/70 mb-7 font-light">
            We&rsquo;d love to hear from you.
          </p>
          <a
            href="mailto:events@kaimeaestates.com?subject=Venue%20Questions"
            className="inline-block bg-forest-800 hover:bg-forest-700 text-white font-sans text-[11px] tracking-[0.3em] uppercase px-9 py-4 transition-all duration-300"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
