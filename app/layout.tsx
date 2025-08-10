import type { Metadata } from "next";
 import { Mulish } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


    const mulish = Mulish({
      subsets: ['latin'],
      display: 'swap',
    });

export const metadata: Metadata = {
  title: "Gardensewa | Your Trusted Gardening & Nursery Partner ",
  description: "gardensewa.com",
  icons: "/images/logo/gardensewa.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mulish.className}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
