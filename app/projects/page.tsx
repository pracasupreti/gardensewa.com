"use client";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const clients = [
  {
    image: "/image/home/client/bajekosekuwa.png",
    name: "Bajeko Sekuwa, Kathmandu",
    text: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    link: "https://www.bajekosekuwa.com/",
  },
  {
    image: "/image/home/client/british.png",
    name: "The British Embassy, Kathmandu",
    text: "We were impressed by GardenSewa's professionalism and discretion during the embassy’s landscaping project. Their team delivered a refined and elegant garden space that reflects our institutional values.",
    link: "https://www.gov.uk/world/organisations/british-embassy-kathmandu",
  },
  {
    image: "/image/home/client/aloft.png",
    name: "Aloft Hotel, Thamel",
    text: "GardenSewa’s team turned our hotel courtyard into a lively urban oasis. The vertical gardens and curated plant selections blend beautifully with our brand’s modern aesthetic.",
    link: "https://www.marriott.com/en-us/hotels/ktmal-aloft-kathmandu-thamel/overview/?nst=paid&cid=PAI_GLB0004YFY_GLE000BHOR_GLF000OCGE&nst=paid&gclsrc=aw.ds&gad_source=1&gad_campaignid=22178666619&gbraid=0AAAAADilnidqVZJVxY377ZINfb9DlsduA&gclid=CjwKCAjw49vEBhAVEiwADnMbbB2ExULZAhvCxIRIOMKWNlEMTC0Sg2F8FSSBwc4FAzV_04N6yDk9qxoCpUIQAvD_BwE",
  },
  {
    image: "/image/project/yakandyeti.png",
    name: "Hotel Yak and Yeti",
    text: "Our heritage property required careful landscaping to match its historical charm. GardenSewa managed to enhance the natural beauty of our grounds while preserving the cultural ambiance.",
    link: "https://www.yakandyeti.com/",
  },
  {
    image: "/image/home/client/soaltee.png",
    name: "Soltee Westend, Itahari",
    text: "GardenSewa transformed our exterior into a vibrant, inviting space. Their regular maintenance and seasonal updates keep our hotel frontage always looking fresh and lush.",
    link: "https://soaltee.com/",
  },
  {
    image: "/image/project/hotel.png",
    name: "Metropolis Hotel",
    text: "We’ve received countless compliments on our rooftop garden and entrance greenery, all thanks to GardenSewa. Their creativity and attention to detail are top-notch.",
    link: "#",
  },
  {
    image: "/image/project/nepal_med.png",
    name: "Mediciti Hospital",
    text: "Healing environments matter, and GardenSewa helped us create tranquil green spaces around the hospital. Their low-maintenance, therapeutic garden designs make a real difference for our patients and staff.",
    link: "https://www.nepalmediciti.com/",
  },
  {
    image: "/image/project/grande.png",
    name: "Grande Hospital",
    text: "GardenSewa’s landscaping around our hospital has significantly improved the outdoor ambiance for visitors and staff. Their team is efficient, responsive, and highly professional.",
    link: "https://www.grandehospital.com/en",
  },
  {
    image: "/image/project/Mercure.png",
    name: "Mercure Hotel",
    text: "We entrusted GardenSewa with the landscaping for both our lobby and outdoor areas. Their elegant plant styling and modern approach to greenery matched our global brand standards perfectly.",
    link: "#",
  },
  {
    image: "/image/project/hilton.png",
    name: "Hilton Hotel, Kathmandu",
    text: "GardenSewa’s work at our property was exceptional. From consultation to installation and upkeep, their team demonstrated world-class service. The gardens they’ve created now complement the Hilton experience beautifully.",
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
      <section className="mx-auto px-8 py-4 flex flex-col gap-6 mb-25 max-w-[1440px] flex-warp">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {clients.map((client, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <div
                key={index}
                className="bg-white border-[3px] border-[#C9EDC5] h-[427px] w-[290px] rounded-3xl p-4 sm:p-6 flex flex-col justify-between items-start text-left relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Logo - hidden on hover */}
                <div
                  className={`w-full flex justify-center h-full items-center transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-64 w-auto object-contain"
                  />
                </div>

                {/* Divider line - always visible */}
                <div className="flex w-full flex-col">
                  <span className="border-t-2 border-t-card w-full p-2"></span>

                  {/* Button - always in same position */}
                  <a
                    href={client.link}
                    className="w-full bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:opacity-90 transition text-sm sm:text-base text-center relative z-10"
                  >
                    Browse More
                  </a>
                </div>

                {/* Hover text content - positioned in the text area */}
                <div
                  className={`absolute left-4 sm:left-6 right-4 sm:right-6 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                    isHovered
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8"
                  }`}
                  style={{
                    bottom: "150px",
                  }}
                >
                  <div className="text-green-600 text-4xl sm:text-5xl font-bold leading-none mb-2">
                    "
                  </div>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    {client.text}
                  </p>
                </div>
              </div>
            );
          })}
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
