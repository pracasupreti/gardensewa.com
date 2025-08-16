"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const clients = [
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa1.jpg",
    name: "Bajeko Sekuwa, Kathmandu",
    text: "Maintained a lush green lawn at a residential villa, ensuring every blade of grass stayed healthy through regular mowing, precise watering schedules, and nutrient-rich fertilizing to keep it vibrant all year.",
    link: "https://www.bajekosekuwa.com/",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa2.jpg",
    name: "The British Embassy, Kathmandu",
    text: "Designed and planted a vibrant flower garden at a corporate office, combining seasonal blooms, creative color patterns, and low-maintenance greenery to provide a visually stunning and professional outdoor space.",
    link: "https://www.gov.uk/world/organisations/british-embassy-kathmandu",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa3.jpg",
    name: "Aloft Hotel, Thamel",
    text: "Revitalized a backyard vegetable patch, enriching the soil with organic compost, planting fresh seedlings, and installing proper irrigation to ensure a consistent and healthy supply of homegrown produce.",
    link: "https://www.marriott.com/en-us/hotels/ktmal-aloft-kathmandu-thamel/overview/?nst=paid&cid=PAI_GLB0004YFY_GLE000BHOR_GLF000OCGE&nst=paid&gclsrc=aw.ds&gad_source=1&gad_campaignid=22178666619&gbraid=0AAAAADilnidqVZJVxY377ZINfb9DlsduA&gclid=CjwKCAjw49vEBhAVEiwADnMbbB2ExULZAhvCxIRIOMKWNlEMTC0Sg2F8FSSBwc4FAzV_04N6yDk9qxoCpUIQAvD_BwE",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa4.jpg",
    name: "Hotel Yak and Yeti",
    text: "Installed an automatic irrigation system for a farmhouse, using water-saving technology, adjustable timers, and strategic placement to optimize coverage while maintaining plant health in all weather conditions.",
    link: "https://www.yakandyeti.com/",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa5.jpg",
    name: "Soltee Westend, Itahari",
    text: "Landscaped a beachfront garden with tropical plants, carefully selecting salt-tolerant species, adding decorative pathways, and incorporating shaded seating areas to create a relaxing coastal retreat.",
    link: "https://soaltee.com/",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa81.jpg",
    name: "Metropolis Hotel",
    text: "Pruned and shaped decorative hedges at a luxury hotel, creating artistic patterns, removing overgrowth, and enhancing curb appeal to maintain a polished and inviting outdoor environment for guests.",
    link: "#",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa7.jpg",
    name: "Mediciti Hospital",
    text: "Created a rooftop herb garden for an apartment, using vertical planters, organic soil blends, and smart sun positioning to maximize growth while keeping fresh herbs within easy reach for daily use.",
    link: "https://www.nepalmediciti.com/",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa82.jpg",
    name: "Grande Hospital",
    text: "Renovated a school playground with safe, eco-friendly greenery, replacing worn-out turf, planting soft grass varieties, and adding shaded plant areas to create a healthy and child-friendly outdoor learning space.",
    link: "https://www.grandehospital.com/en",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa9.jpg",
    name: "Mercure Hotel",
    text: "Planted palm trees along a villa driveway, arranging them for symmetrical balance, adding decorative ground cover, and integrating lighting to highlight their beauty both day and night.",
    link: "#",
  },
  {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa10.jpg",
    name: "Hilton Hotel, Kathmandu",
    text: "Restored a community park’s flower beds, removing old and faded plants, introducing fresh seasonal flowers, and enriching the soil to promote long-lasting, healthy blooms throughout the year.",
    link: "https://www.hilton.com/en/",
  },
   {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa11.jpg",
    name: "Hilton Hotel, Kathmandu",
    text: "Added seasonal blooms to a shopping mall entrance, arranging vibrant floral displays, matching colors to brand themes, and ensuring a fresh, welcoming look for shoppers and visitors alike.",
    link: "https://www.hilton.com/en/",
  },
   {
    image: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa12.jpg",
    name: "Hilton Hotel, Kathmandu",
    text: "Built a Zen-style garden at a wellness retreat, incorporating smooth river stones, calming water features, and minimalistic greenery to create a peaceful space for relaxation and meditation.",
    link: "https://www.hilton.com/en/",
  },
];

export default function ClientPage() {
  return (
    <main>
      <div
        className={`relative w-full h-[360px] flex items-center justify-center text-white mb-20`}
      >
        <img
          src="/image/project/projectImage.png"
          alt="A large green plant"
          height={400}
          width={400}
          className="absolute inset-0 z-0 object-cover h-90 w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb navigation */}
            <div className="mb-4 text-sm w-full">
              <span className="text-light flex items-center justify-center text-[#616161] text-base">
                Home <ChevronRight width={20} height={20} />
                <span className="text-primary ml-2 font-semibold">
                  Projects
                </span>
              </span>
            </div>

            {/* Section title */}
            <h1 className="mb-4 text-5xl font-bold text-white md:text- [52px]">
              Our Projects
            </h1>

            {/* Section description */}
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              We believe that everyone deserves a little more green in their
              life. Garden Sewa is built to bring plants, people, and peace
              together through simple and thoughtful gardening services.
            </p>
          </div>
        </div>
      </div>
      {/* Cards */}
     <section className="mx-auto px-8 py-4 flex flex-col gap-6 mb-25 max-w-[1440px] flex-wrap">
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white border-[3px] border-[#C9EDC5] h-[427px] w-[290px] rounded-3xl flex flex-col justify-start items-start text-left relative overflow-hidden cursor-pointer"
          >
            {/* Image section */}
            <div className="w-full flex justify-center h-80 items-center">
              <img
                src={client.image}
                alt={client.name}
                className="h-full w-full object-contain rounded-b-4xl"
              />
            </div>

            {/* Content section */}
            <div className="flex w-full flex-col mt-0 p-8 sm:p-6">
              <div className="flex flex-col items-start w-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
                  {client.name}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mb-4">
                  {client.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
      {/*image bg */}
      <div className="mb-30 py-12">
        <div
          className={`relative w-full h-[360px] flex items-center justify-center text-white`}
        >
          <img
            src="/image/project/projectimage2.png"
            alt="A large green plant"
            height={400}
            width={400}
            className="absolute inset-0 z-0 object-cover h-90 w-full"
          />
          <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Want to grow with Gardensewa?
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Join our growing network of satisfied clients.
            </p>
            <Link href="book-a-service">
              <button className="bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] hover:from-[#007000] hover:via-[#007800] hover:to-[#00A400] text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-secondary transition">
                Become a client
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
