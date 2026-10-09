import type { Metadata } from "next";
import VenuePage, { type VenuePageContent } from "@/components/VenuePage";

const IMG = "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532";

export const metadata: Metadata = {
  title: "Oahu Beachfront Wedding Venue in Honolulu | Kaimea Estates",
  description:
    "Intimate oceanfront weddings for up to 60 guests at Kaimea Estates in Honolulu, Oahu. Ceremony and reception spaces, bridal suite, catering kitchen, and outside vendors welcome.",
  alternates: { canonical: "/weddings" },
  openGraph: {
    title: "Oahu Beachfront Wedding Venue in Honolulu | Kaimea Estates",
    description:
      "Intimate oceanfront weddings for up to 60 guests at Kaimea Estates in Honolulu, Oahu.",
    url: "/weddings",
  },
};

// TODO: confirm with venue and add — starting price / minimum spend, rental hours,
// end time / curfew, deposit and cancellation terms, parking, rain plan.
const content: VenuePageContent = {
  eyebrow: "Weddings · Honolulu, Oahu",
  title: "An Oceanfront Wedding Venue on Oahu,",
  titleAccent: "Made for Intimate Celebrations",
  intro:
    "Kaimea Estates is a private beachfront estate in Honolulu for ceremonies and receptions of up to 60 guests, with the Pacific as your backdrop and the whole estate to yourselves.",
  heroImage: `${IMG}/73e0150a-1b20-4fce-8f9c-2f9608e96d64/Brit+Image+%282%29.jpg`,
  heroAlt: "Bride and groom on the lawn at Kaimea Estates in Honolulu, Oahu",
  facts: [
    { label: "Guest count", value: "Up to 60" },
    { label: "Setting", value: "Oceanfront estate" },
    { label: "Vendors", value: "Bring your own" },
    { label: "Book ahead", value: "9–12 months" },
  ],
  storyHeading: "Ceremony and reception, all in one place",
  story: [
    "Say your vows oceanfront or in the tropical gardens, then move to a poolside cocktail hour and a reception under a canopy of string lights — without anyone getting in a car.",
    "Kaimea Estates is designed for meaningful gatherings rather than ballroom-scale events. If you're planning a wedding of 60 guests or fewer and want it to feel like a private home by the sea, this is the setting.",
  ],
  storyImage: `${IMG}/a3e9fb58-630a-4843-9138-39c1ab849f36/IMG_6205+%281%29.JPG`,
  storyAlt: "Wedding ceremony at Kaimea Estates",
  highlightsHeading: "Included with your wedding rental",
  highlights: [
    {
      title: "Exclusive use of the estate",
      description:
        "Outdoor ceremony and reception spaces — oceanfront, garden, and poolside — reserved for your event.",
    },
    {
      title: "Bridal suite",
      description:
        "A private, naturally lit suite with seating and mirror space for hair, makeup, and the bridal party.",
    },
    {
      title: "Tables & chairs",
      description: "Seating for your guests is included, so there's one less rental to coordinate.",
    },
    {
      title: "String light canopy",
      description: "Decorative lighting over the reception area for the evening.",
    },
    {
      title: "Catering kitchen",
      description:
        "A fully equipped kitchen for the caterer of your choice. There's no in-house catering, so the menu is entirely yours.",
    },
    {
      title: "Sound system & event staff",
      description:
        "A premium Bluetooth speaker system for your playlist, and professional staff on-site from setup to send-off.",
    },
  ],
  gallery: [
    { src: `${IMG}/775d86b4-38c7-4280-85e7-38322e83ff31/Brit+Image+2+%281%29.JPG`, alt: "Ocean view wedding reception at Kaimea Estates" },
    { src: `${IMG}/2e018c5a-c5c1-4690-a7b2-4bafc38eb3ba/IMG_6213.JPG`, alt: "Wedding tablescape at Kaimea Estates" },
    { src: `${IMG}/52e4c126-c4ee-4967-9b81-2c523b3e39e0/Kaimea+Estates+-+Brit+Florals+%28Edit%29.jpg`, alt: "Wedding florals at Kaimea Estates" },
    { src: `${IMG}/97dd5ff8-d573-4b10-ab58-48300af28b3f/IMG_6655.JPG`, alt: "Wedding welcome sign at Kaimea Estates" },
  ],
  faqs: [
    {
      question: "How many guests can attend a wedding at Kaimea Estates?",
      answer:
        "Kaimea Estates is best suited to ceremonies and receptions of up to 60 guests. It's an intimate estate rather than a ballroom venue.",
    },
    {
      question: "What's included with the wedding venue rental?",
      answer:
        "Exclusive access to the estate's outdoor ceremony and reception spaces, the bridal suite, a fully equipped catering kitchen, a premium Bluetooth speaker system, tables and chairs, decorative string lighting, and professional event staff on-site.",
    },
    {
      question: "Can we bring our own caterer, photographer, and florist?",
      answer:
        "Yes. Outside vendors are welcome, and the venue can also introduce you to trusted local caterers, photographers, florists, and officiants.",
    },
    {
      question: "Can we have a DJ or live band?",
      answer:
        "The estate is in a residential neighborhood and follows community sound guidelines that limit large PA systems and outdoor DJs. Couples stream their own playlist through the venue's premium Bluetooth speaker system instead.",
    },
    {
      question: "Is catering provided?",
      answer:
        "No. There's no in-house catering team, so you can hire the caterer you want. A fully equipped kitchen is available for them to use.",
    },
    {
      question: "How far in advance should we book our wedding?",
      answer:
        "Weekend evenings and peak-season dates book early, so we recommend inquiring 9–12 months ahead of your wedding date.",
    },
  ],
};

export default function WeddingsPage() {
  return <VenuePage content={content} />;
}
