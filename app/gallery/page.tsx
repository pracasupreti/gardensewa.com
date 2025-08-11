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

// Reusable Gallery Grid component
const GalleryGrid: React.FC<{ items: GalleryItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item) => (
      <div
        key={item.id}
        className="relative w-full h-64 rounded-xl overflow-hidden shadow-md"
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
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="h-full bg-green-50">
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
      <div className="bg-white min-h-screen max-w-7xl mx-auto px-8">
        <main className="container mx-auto px-4 py-12 space-y-12">
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
        </main>
      </div>
      <div
        className={`relative w-full h-[400px] flex items-center justify-center text-white my-12`}
      >
        {/* Background image with a dark overlay */}
        <img
          src="/image/gallery/galleryBg.jpg"
          alt="A large green plant"
          height={400}
          width={400}
          className="absolute inset-0 z-0 object-cover h-100 w-full"
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
    </>
  );
};

export default GalleryPage;
