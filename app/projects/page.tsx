"use client";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const clients = [
  {
    image: "/image/home/client/bajekosekuwa.png",
    name: "Bajeko Sekuwa",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "https://www.bajekosekuwa.com/",
  },
  {
    image: "/image/home/client/british.png",
    name: "British Embassy Kathmandu",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "https://www.gov.uk/world/organisations/british-embassy-kathmandu",
  },
  {
    image: "/image/home/client/aloft.png",
    name: "Aloft",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "https://www.marriott.com/en-us/hotels/ktmal-aloft-kathmandu-thamel/overview/?nst=paid&cid=PAI_GLB0004YFY_GLE000BHOR_GLF000OCGE&nst=paid&gclsrc=aw.ds&gad_source=1&gad_campaignid=22178666619&gbraid=0AAAAADilnidqVZJVxY377ZINfb9DlsduA&gclid=CjwKCAjw49vEBhAVEiwADnMbbB2ExULZAhvCxIRIOMKWNlEMTC0Sg2F8FSSBwc4FAzV_04N6yDk9qxoCpUIQAvD_BwE",
  },
  {
    image: "/image/project/yakandyeti.png",
    name: "Yak & Yeti",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "https://www.yakandyeti.com/",
  },
  {
    image: "/image/home/client/soaltee.png",
    name: "Soaltee",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "https://soaltee.com/",
  },
  {
    image: "/image/project/hotel.png",
    name: "Metropolitan Hotel",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "#",
  },
  {
    image: "/image/project/nepal_med.png",
    name: "Nepal Mediciti",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "https://www.nepalmediciti.com/",
  },
  {
    image: "/image/project/grande.png",
    name: "Grande International Hospital",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "https://www.grandehospital.com/en",
  },
  {
    image: "/image/project/Mercure.png",
    name: "Mercure Hotel",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
    link: "#",
  },
  {
    image: "/image/project/hilton.png",
    name: "Hilton",
    text: "Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clients.map((client, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={index}
                className="bg-white border-[3px] border-[#C9EDC5] rounded-3xl p-4 sm:p-6 flex flex-col items-start text-left relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Your existing content - unchanged */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                  />
                </div>
                <p className="text-black text-xs sm:text-sm text-left leading-relaxed mt-4 mb-4 pb-2 flex-1">
                  {client.text}
                </p>
                <span className="border-t-2 border-t-card w-full p-2"></span>
                <a
                  href={client.link}
                  className="mt-auto self-center bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] text-white font-semibold px-4 sm:px-6 py-2 rounded-lg hover:bg-secondary transition text-sm sm:text-base"
                >
                  Browse More
                </a>

                {/* Hover content - slides up from bottom to cover full card */}
                <div
                  className={`absolute inset-0 bg-white rounded-3xl p-4 sm:p-6 flex flex-col transition-transform duration-500 ease-in-out ${
                    isHovered
                      ? "transform translate-y-0"
                      : "transform translate-y-full"
                  }`}
                >
                  <div className="text-green-600 text-4xl sm:text-5xl font-bold leading-none mb-4">
                    "
                  </div>
                  <p className="text-black text-sm sm:text-base leading-relaxed flex-1 mb-6">
                    {client.text}
                  </p>
                  <a
                    href={client.link}
                    className="w-full bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:opacity-90 transition text-sm sm:text-base text-center"
                  >
                    Browse More
                  </a>
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
              <button className="bg-primary text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-secondary transition">
                become a client
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
