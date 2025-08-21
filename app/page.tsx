"use client";
import Floating from "@/components/floating";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <section className="mx-auto lg:w-full max-md:p-3">
      <Homepage />
      <Floating />
    </section>
  );
}
