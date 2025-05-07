import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Harvests | Fresh Fruits and Vegetables Delivered",
  description:
    "Get the freshest fruits and vegetables delivered to your door. Organic, locally-sourced, and seasonal produce at unbeatable prices.",
  keywords: [
    "fresh fruits",
    "organic vegetables",
    "fruit delivery",
    "vegetable box",
    "local produce",
    "seasonal fruits",
    "farm to table",
  ],
  authors: [{ name: "Fresh Harvests", url: "https://freshharvests.com" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Fresh Harvests",
    description:
      "Shop for fresh fruits and vegetables online. Delivered fresh from the farm to your door.",
    url: "https://freshharvests.com",
    siteName: "Fresh Harvests",
    images: [
      {
        url: "https://freshharvests.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh Harvests",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Harvests",
    description:
      "Fresh fruits and vegetables delivered to your home. Order now from Fresh Harvests.",
    images: ["https://freshharvests.com/images/og-image.jpg"],
    creator: "@FreshHarvests",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
