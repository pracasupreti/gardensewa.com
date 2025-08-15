import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Define the interface for a gallery item
interface GalleryItem {
  id: number;
  imageUrl: string;
  altText: string;
}

// Dummy data for the two gallery sections
const topServices: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/image/gallery/gallery1.jpg",
    altText: "Gardening Service",
  },
  {
    id: 2,
    imageUrl: "/image/gallery/gallery2.jpg",
    altText: "Watering Plants",
  },
  {
    id: 3,
    imageUrl: "/image/gallery/gallery3.jpg",
    altText: "Garden Maintenance",
  },
  {
    id: 4,
    imageUrl: "/image/gallery/gallery4.jpg",
    altText: "Planting Seedlings",
  },
  {
    id: 5,
    imageUrl: "/image/gallery/gallery5.jpg",
    altText: "Caring for Young Plants",
  },
  {
    id: 6,
    imageUrl: "/image/gallery/gallery6.jpg",
    altText: "Greenhouse Flowers",
  },
];

const indoorOutdoorPlants: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/image/gallery/gallery7.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 2,
    imageUrl: "/image/gallery/gallery8.jpg",
    altText: "Indoor plants in a living room",
  },
  {
    id: 3,
    imageUrl: "/image/gallery/gallery9.jpg",
    altText: "Spring flowers in pots",
  },
  {
    id: 4,
    imageUrl: "/image/gallery/gallery10.jpg",
    altText: "Herbs on a table",
  },
  {
    id: 5,
    imageUrl: "/image/gallery/gallery11.jpg",
    altText: "Potted succulent on the floor",
  },
  {
    id: 6,
    imageUrl: "/image/gallery/gallery12.jpg",
    altText: "Field of cacti",
  },
];

const rarePlants: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/image/gallery/gallery13.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 2,
    imageUrl: "/image/gallery/gallery14.jpg",
    altText: "Indoor plants in a living room",
  },
  {
    id: 3,
    imageUrl: "/image/gallery/gallery15.jpg",
    altText: "Spring flowers in pots",
  },
  {
    id: 4,
    imageUrl: "/image/gallery/gallery16.jpg",
    altText: "Herbs on a table",
  },
  {
    id: 5,
    imageUrl: "/image/gallery/gallery17.jpg",
    altText: "Potted succulent on the floor",
  },
  {
    id: 6,
    imageUrl: "/image/gallery/gallery18.jpg",
    altText: "Field of cacti",
  },
];

const morePlants: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa1.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 2,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa2.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 3,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa3.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 4,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa4.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 5,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa5.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 6,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa6.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 7,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa7.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 8,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa8.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 9,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa9.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 10,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa10.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 11,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa11.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 12,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa12.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 13,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa13.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 14,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa14.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 15,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa15.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 16,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa16.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 17,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa17.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 18,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa18.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 19,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa19.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 20,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa20.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 21,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa21.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 22,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa22.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 23,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa23.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 25,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa25.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 26,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa26.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 27,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa27.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 28,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa28.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 31,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa31.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 32,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa32.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 33,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa33.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 34,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa34.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 35,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa35.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 36,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa36.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 37,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa37.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 38,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa38.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 39,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa39.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 40,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa40.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 41,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa41.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 42,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa42.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 43,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa43.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 44,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa44.jpg",
    altText: "Cactus in a pot",
  },
   {
    id: 45,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa45.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 46,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa46.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 47,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa47.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 48,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa48.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 49,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa49.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 50,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa50.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 51,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa51.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 52,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa52.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 53,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa53.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 54,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa54.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 55,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa55.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 58,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa58.jpg",
    altText: "Cactus in a pot",
  },
    {
    id: 60,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa60.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 61,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa61.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 62,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa62.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 63,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa63.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 64,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa64.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 66,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa66.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 67,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa67.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 68,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa68.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 69,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa69.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 70,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa70.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 71,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa71.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 72,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa72.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 73,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa73.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 74,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa74.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 75,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa75.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 76,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa76.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 77,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa77.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 78,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa78.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 79,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa79.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 80,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa80.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 81,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa81.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 82,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa82.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 83,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa83.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 84,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa84.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 85,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa85.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 86,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa86.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 87,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa87.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 88,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa88.jpg",
    altText: "Cactus in a pot",
  },
  {
    id: 89,
    imageUrl: "/image/gallery/gardensewa-gallery/gardensewa-gallery/gardensewa89.jpg",
    altText: "Cactus in a pot",
  },
];


// Reusable Gallery Grid component
const GalleryGrid: React.FC<{ items: GalleryItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item) => (
      <div
        key={item.id}
        className="relative w-full h-78 rounded-xl overflow-hidden shadow-md"
      >
        <Image
          src={item.imageUrl}
          alt={item.altText}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
);

const GalleryPage: React.FC = () => {
  return (
    <div className="mb-40">
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="h-[209px] bg-green-50">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-full px-4 py-8 text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-4 text-sm w-full">
            <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
              {/* Breadcrumb navigation */}
              <div className="mb-4 text-sm w-full">
                <span className="text-light flex items-center justify-center text-[#616161] text-base">
                  Home <ChevronRight width={20} height={20} />
                  <span className="text-primary ml-2 font-semibold">
                    {" "}
                    Gallery
                  </span>
                </span>
              </div>

              {/* Section title */}
              <h1 className="mb-4 text-5xl font-bold text-[#008000] md:text- [52px]">
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen max-w-7xl mx-auto px-8 ">
        <main className="container mx-auto px-4 py-12 space-y-12 flex flex-col gap-30">
          {/* Top Services Section */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Top Services
            </h2>
            <GalleryGrid items={topServices} />
          </section>

          {/* Indoor Outdoor Plants Section */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Indoor/Outdoor Plants
            </h2>
            <GalleryGrid items={indoorOutdoorPlants} />
          </section>

          {/* Rare Plants */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Rare Plants
            </h2>
            <GalleryGrid items={rarePlants} />
          </section>

           {/* more Plants */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Gallery
            </h2>
            <GalleryGrid items={morePlants} />
          </section>
        </main>
      </div>
      <div
        className={`relative w-full h-[350px] flex items-center justify-center text-white my-12`}
      >
        {/* Background image with a dark overlay */}
        <img
          src="/image/gallery/galleryBg.jpg"
          alt="A large green plant"
          height={350}
          width={400}
          className="absolute inset-0 z-0 object-cover h-[350px] w-full"
        />
        <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>

        {/* Main content container */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          {/* Section title */}
          <h1 className="text-5xl md:text-4xl font-bold mb-4">
            You Can also visit our FAQ page
          </h1>

          {/* Section description */}
          <p className="text-lg md:text-lg text-gray-200 leading-relaxed mb-8">
            get answers to common services questions - save time and stay
            informed{" "}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/faq">
              <button className="bg-primary text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-secondary transition">
                View FAQ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
