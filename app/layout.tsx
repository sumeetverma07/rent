import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rentspace.example"),
  title: "RentSpace | Premium Rental Marketplace",
  description:
    "Find rooms, flats, PGs, offices, shops, warehouses, and other rental spaces in minutes.",
  keywords: [
    "rental marketplace",
    "rooms for rent",
    "flats for rent",
    "office spaces",
    "PG accommodation",
    "commercial property"
  ],
  openGraph: {
    title: "RentSpace",
    description: "List your property or discover verified rental spaces near you.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
