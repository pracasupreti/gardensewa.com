"use client";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Home Garden Restoration",
    description: "LANDSCAPE & HORTICULTURE - Bringing Future Home -",
    logo: "/image/home/partners/partener1.png",
    link: "https://homeparkgardens.co.uk/",
  },
  {
    name: "Home Park Gardens",
    description: "& Landscaping",
    logo: "/image/home/partners/partener2.png",
    link: "https://homeparkgardens.co.uk/",
  },
  {
    name: "Pristine Gardens",
    description: "hello",
    logo: "/image/home/partners/partener3.jpg",
    link: "https://pristinegardensllc.com/",
  },
];
export default function OurPartners() {
  return (
    <section className="flex flex-col gap-8 mb-20  max-w-[1300px]">
      <h2 className="text-[52px] text-secondary font-bold text-center">
        Our Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white flex flex-col items-center gap-2.5  text-center w-[417px] h-[480px] rounded-2xl border-2 border-[#E8E8E8]"
          >
            <div className="relative w-[369px] h-[369px]">
              <img
                src={partner.logo}
                alt={partner.name}
                height={128}
                width={192}
                className="object-contain w-full h-full"
              />
            </div>

            <a className="border border-secondary py-2.5 px-6 rounded-md flex text-secondary text-lg gap-1.5 hover:bg-secondary hover:text-white">
              Visit Site
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
