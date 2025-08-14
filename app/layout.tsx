import type { Metadata } from "next";
import { Alef as AlefFont } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const alef = AlefFont({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // required for Alef
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alef.className}>
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
