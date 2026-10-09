import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaimeaestates.com"),
  alternates: { canonical: "/" },
  title: "Kaimea Estates | Luxury Beachfront Venue | Honolulu, Oahu",
  description:
    "An intimate oceanfront estate in Honolulu, Oahu. Say your vows with the Pacific Ocean as your backdrop, surrounded by lush Hawaiian gardens and the warmth of aloha.",
  openGraph: {
    title: "Kaimea Estates | Luxury Beachfront Venue | Honolulu, Oahu",
    description:
      "An intimate oceanfront estate in Honolulu, Oahu. Say your vows with the Pacific Ocean as your backdrop.",
    url: "https://www.kaimeaestates.com",
    siteName: "Kaimea Estates",
    locale: "en_US",
    type: "website",
  },
};

// Business facts for search engines and AI answers. Keep in sync with Google Business Profile and listings.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue"],
  name: "Kaimea Estates",
  url: SITE_URL,
  email: "events@kaimeaestates.com",
  description:
    "An intimate oceanfront estate in Honolulu, Oahu for weddings, elopements, and private events of up to 60 guests.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5221 Kalanianaole Hwy",
    addressLocality: "Honolulu",
    addressRegion: "HI",
    postalCode: "96821",
    addressCountry: "US",
  },
  maximumAttendeeCapacity: 60,
  sameAs: [
    "https://www.instagram.com/kaimeaestates/",
    "https://www.facebook.com/kaimeaestates/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${raleway.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}
