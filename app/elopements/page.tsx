import type { Metadata } from "next";
import VenuePage, { type VenuePageContent } from "@/components/VenuePage";

const IMG = "https://images.squarespace-cdn.com/content/v1/60a29d738b4b396e23140532";

export const metadata: Metadata = {
  title: "Oahu Elopement Venue | Private Beachfront Estate in Honolulu | Kaimea Estates",
  description:
    "Elope on Oahu at Kaimea Estates, a private oceanfront estate in Honolulu. Exchange vows by the Pacific or in tropical gardens, just the two of you or a few loved ones.",
  alternates: { canonical: "/elopements" },
  openGraph: {
    title: "Oahu Elopement Venue | Kaimea Estates",
    description:
      "Elope on Oahu at Kaimea Estates, a private oceanfront estate in Honolulu.",
    url: "/elopements",
  },
};

// TODO: confirm with venue and add — elopement package and price, max guests for
// elopements, time block length, what's included vs. the full wedding rental,
// typical booking lead time, and weekday availability.
const content: VenuePageContent = {
  eyebrow: "Elopements · Honolulu, Oahu",
  title: "Elope on Oahu",
  titleAccent: "at a Private Beachfront Estate",
  intro:
    "Exchange vows with the Pacific as your witness at Kaimea Estates in Honolulu — a private oceanfront estate for couples who want something more personal than a public beach.",
  heroImage: `${IMG}/94a4b433-b81b-4437-8aef-7aa905bcc1c3/IMG_4348.JPG`,
  heroAlt: "Couple eloping at Kaimea Estates in Honolulu, Oahu",
  facts: [
    { label: "Location", value: "Honolulu, Oahu" },
    { label: "Setting", value: "Private & oceanfront" },
    { label: "Ceremony", value: "Ocean or garden" },
    { label: "Vendors", value: "Bring your own" },
  ],
  storyHeading: "All the beauty of Hawai‘i, none of the crowds",
  story: [
    "Public beaches on Oahu come with permits, onlookers, and no place to get ready. At Kaimea Estates, your ceremony happens on a private estate, with oceanfront and garden settings and a suite to prepare in.",
    "Whether it's just the two of you and an officiant or a handful of the people who matter most, the estate gives your elopement the privacy and calm it deserves.",
  ],
  storyImage: `${IMG}/30278659-3f22-4a9d-b8f1-c5bd3596cba6/Brit+Image3+%282%29.JPG`,
  storyAlt: "Bride portrait at Kaimea Estates",
  highlightsHeading: "Why couples elope at Kaimea Estates",
  highlights: [
    {
      title: "Privacy",
      description:
        "A private residential estate rather than a public beach — no passersby in your photos.",
    },
    {
      title: "Ocean or garden vows",
      description:
        "Choose an oceanfront ceremony with the Pacific behind you, or a setting within the tropical gardens.",
    },
    {
      title: "A place to get ready",
      description:
        "A naturally lit bridal suite with seating and mirror space, so you arrive at your ceremony calm and unhurried.",
    },
    {
      title: "Your own vendors",
      description:
        "Bring your own photographer and officiant, or ask for introductions to trusted local vendors.",
    },
    {
      title: "Golden-hour photos",
      description:
        "Oceanfront lawns, gardens, and a poolside setting give your photographer variety in one place.",
    },
    {
      title: "Room to celebrate after",
      description:
        "Follow your vows with a toast or an intimate dinner on the estate.",
    },
  ],
  gallery: [
    { src: `${IMG}/775d86b4-38c7-4280-85e7-38322e83ff31/Brit+Image+2+%281%29.JPG`, alt: "Ocean view at Kaimea Estates" },
    { src: `${IMG}/73e0150a-1b20-4fce-8f9c-2f9608e96d64/Brit+Image+%282%29.jpg`, alt: "Couple on the lawn at Kaimea Estates" },
    { src: `${IMG}/2e018c5a-c5c1-4690-a7b2-4bafc38eb3ba/IMG_6213.JPG`, alt: "Intimate tablescape at Kaimea Estates" },
    { src: `${IMG}/627a8cbb-0b25-425b-88fc-cfca67006601/DSC01878.JPG`, alt: "Celebration cocktails at Kaimea Estates" },
  ],
  faqs: [
    {
      question: "Can we elope at Kaimea Estates with just the two of us?",
      answer:
        "Yes. Kaimea Estates hosts intimate elopements as well as full weddings. Reach out with your date and guest count and we'll tell you what's possible.",
    },
    {
      question: "Where on the estate can we hold the ceremony?",
      answer:
        "Couples can choose an oceanfront ceremony with the Pacific as the backdrop or a garden setting within the estate's tropical landscape.",
    },
    {
      question: "Can we bring our own photographer and officiant?",
      answer:
        "Yes. Outside vendors are welcome, and the venue can introduce you to trusted local photographers, officiants, florists, and caterers.",
    },
    {
      question: "Is there somewhere to get ready?",
      answer:
        "Yes. The estate has a private, naturally lit bridal suite with seating and mirror space for hair and makeup.",
    },
    {
      question: "Why elope at a private estate instead of a public beach?",
      answer:
        "A private estate means no crowds in your photos, a place to get ready, and settings for both the ceremony and a celebration afterward, all in one location.",
    },
  ],
};

export default function ElopementsPage() {
  return <VenuePage content={content} />;
}
