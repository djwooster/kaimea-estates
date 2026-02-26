import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

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
  title: "Kaimea Estates | Luxury Beachfront Venue | Kahala, Oahu",
  description:
    "An intimate oceanfront estate in Kahala, Oahu. Say your vows with the Pacific Ocean as your backdrop, surrounded by lush Hawaiian gardens and the warmth of aloha.",
  openGraph: {
    title: "Kaimea Estates | Luxury Beachfront Venue | Kahala, Oahu",
    description:
      "An intimate oceanfront estate in Kahala, Oahu. Say your vows with the Pacific Ocean as your backdrop.",
    url: "https://kaimeaestates.com",
    siteName: "Kaimea Estates",
    locale: "en_US",
    type: "website",
  },
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
      <body>{children}</body>
    </html>
  );
}
