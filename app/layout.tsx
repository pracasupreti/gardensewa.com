import type { Metadata } from "next";
import { Alef as AlefFont } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Floating from "@/components/floating";

const alef = AlefFont({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // required for Alef
});

export const metadata: Metadata = {
  title: "Gardensewa | Your Trusted Gardening & Nursery Partner",
  description: "gardensewa.com",
  icons: "/gardensewa.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alef.className}>
      <head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa, garden, plants"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/home.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
     </head>
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <Floating />
        <Footer />
      </body>
    </html>
  );
}
