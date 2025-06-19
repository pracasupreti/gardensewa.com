// app/page.tsx
import type { Metadata } from "next";
import Homepage from "@/components/Homepage";

export const metadata: Metadata = {
  title: "Home | Gardensewa",
  description:
    "Welcome to Gardensewa – Agriculture knowledge at your fingertips.",
};

export default function Home() {
  return (
    <section className="mx-auto lg:w-full">
      <Homepage />
    </section>
  );
}
