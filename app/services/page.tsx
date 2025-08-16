"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Type definitions for service data
interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

// Data for the "Top Services" section
const topServices: Service[] = [
  {
    id: 1,
    title: "Lawn Care Services",
    description:
      "At Greenera, we believe in regular maintenance of grass areas including mowing,...",
    imageUrl: "/image/navbar/services/service1.jpg",
    altText: "Lawn Care Services",
  },
  {
    id: 2,
    title: "Landscaping Services",
    description:
      "Designing and modifying outdoor spaces with elements like plants, trees, pathways, lighting,...",
    imageUrl: "/image/navbar/services/service2.jpg",
    altText: "Landscaping Services",
  },
  {
    id: 3,
    title: "Gardening Services",
    description:
      "Planting, cleaning, mulching, weeding, and maintaining flower beds, shrubs, and...",
    imageUrl: "/image/navbar/services/service3.jpg",
    altText: "Gardening Services",
  },
  {
    id: 4,
    title: "Soiling Services",
    description:
      "Testing, improving, and preparing soil for optimal plant growth through amendments,...",
    imageUrl: "/image/navbar/services/service4.jpg",
    altText: "Soiling Services",
  },
  {
    id: 5,
    title: "Irrigation Services",
    description:
      "Installation, repair, and maintenance of irrigation systems and drip to improve landscape plant...",
    imageUrl: "/image/navbar/services/service5.jpg",
    altText: "Irrigation Services",
  },
  {
    id: 6,
    title: "Nursery Services",
    description:
      "Supplying potted plants, trees, gardening tools, and offering expert advice to landscape projects...",
    imageUrl: "/image/navbar/services/service13.jpg",
    altText: "Nursery Services",
  },
  {
    id: 7,
    title: "Lawn Care Services",
    description:
      "At Gardenservs, we believe in regular maintenance of grass areas including mowing,...",
    imageUrl: "/image/navbar/services/service7.jpg",
    altText: "Lawn Care Services",
  },
  {
    id: 8,
    title: "Hard Scaping Services",
    description:
      "Construction of non-living elements like patios, walkways, retaining walls, stone features,...",
    imageUrl: "/image/navbar/services/service8.jpg",
    altText: "Hard Scaping Services",
  },
  {
    id: 9,
    title: "Gardening Services",
    description:
      "Planting, pruning, mulching, weeding, and maintaining flower beds, shrubs, and...",
    imageUrl: "/image/navbar/services/service9.jpg",
    altText: "Gardening Services",
  },
  {
    id: 10,
    title: "Landscape Services",
    description:
      "Designing and modifying outdoor spaces with elements like plants, trees, pathways, lighting,...",
    imageUrl: "/image/navbar/services/service10.jpg",
    altText: "Landscape Services",
  },
  {
    id: 11,
    title: "Seasonal Services",
    description:
      "Specialized services based on season such as spring clean-ups, leaf removal in fall, snow...",
    imageUrl: "/image/navbar/services/service11.jpg",
    altText: "Seasonal Services",
  },
  {
    id: 12,
    title: "Turfing Services",
    description:
      "Installation and replacement of natural or artificial turf to create lush green lawns or sports...",
    imageUrl: "/image/navbar/services/service12.jpg",
    altText: "Turfing Services",
  },
];

// Data for the "Recent Services" section

// Reusable Service Card component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="flex flex-col items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[412px] h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:h-[509px] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
    <div className="relative w-full h-1/2 overflow-hidden mb-3 sm:mb-4 flex-shrink-0">
      <img
        src={service.imageUrl}
        alt={service.altText}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        style={{
          clipPath: "ellipse(100% 95% at 50% 0%)",
        }}
      />
    </div>

    <div className=" flex flex-col items-center justify-center">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark text-center mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
        {service.title}
      </h3>

      <p className="text-dark text-center text-xs sm:text-sm md:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2 flex-grow">
        {service.description}
      </p>

      <button className="bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] hover:from-[#007000] hover:via-[#007800] hover:to-[#00A400] text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
        Explore More
      </button>
    </div>
  </div>
);

// Main Services Page component
const ServicesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Header section */}
      <div className="w-full bg-[#F6F9F6]">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[277px] px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8 text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-3 sm:mb-4 text-sm w-full">
            <div className="text-[#616161] flex items-center justify-center text-sm sm:text-base">
              <span>Home</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mx-1" />
              <span className="text-primary font-semibold">Services</span>
            </div>
          </div>

          {/* Section title */}
          <h1 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-[#008000] leading-tight">
            Our Services
          </h1>

          {/* Section description */}
          <p className="max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[858px] mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-[#7C7F7A] px-2">
            At Gardensewa, we believe a beautiful garden is more than just
            plants — it's a living space that brings peace, purity, and purpose
            to your life. Our expert team delivers thoughtful, plant-based
            garden services that are organic, eco-friendly, and tailored to your
            space and needs.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
        {/* Main content sections */}
        <div className="container mx-auto py-8 sm:py-10 md:py-12 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 xl:space-y-40 mb-30">
          {/* Top Services Section */}
          <main>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-semibold text-secondary text-center mb-6 sm:mb-8 md:mb-10 leading-tight px-4">
              Common Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {topServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
