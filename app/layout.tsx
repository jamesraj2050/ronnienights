import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ronnienights.com.au"),
  title: "Ronnie Nights | Cocktail Bar & Live Entertainment in Fremantle",
  description:
    "Ronnie Nights is a boutique cocktail bar and live entertainment venue in Fremantle, Western Australia, serving handcrafted cocktails, food, comedy nights, DJs, and intimate late-night experiences.",
  keywords: [
    "Best Bar Fremantle",
    "Cocktail Bar Fremantle",
    "Small Bar Fremantle",
    "Nightlife Fremantle",
    "DJ Bar Fremantle",
    "Live Music Fremantle",
    "Comedy Night Fremantle"
  ],
  openGraph: {
    title: "Ronnie Nights | For the LOVE of It!",
    description: "A sophisticated, intimate cocktail bar and live entertainment venue in the heart of Fremantle.",
    url: "https://ronnienights.com.au",
    siteName: "Ronnie Nights",
    images: [
      {
        url: "/images/Ronnie1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ronnie Nights cocktail bar in Fremantle"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  alternates: {
    canonical: "https://ronnienights.com.au"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
