import type { Metadata } from "next";
import { Suspense } from "react";
import { Marcellus, DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "../features/components/layout/navbar";
import Footer from "../features/components/layout/footer";

const serif = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shrivandana – Online Puja, Chadhava & Panchang",
  description: "Book pujas in your name at sacred temples, offer chadhava and read today's panchang.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} bg-[#fff5ea] font-[family-name:var(--font-sans)] text-[#2a1740] antialiased`}>
        <Navbar />
        <Suspense fallback={null}>

          {children}
        </Suspense>

        <Footer />
      </body>
    </html>
  );
}