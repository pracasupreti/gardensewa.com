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
    imageUrl: "/image/navbar/services/service6.jpg",
    altText: "Nursery Services",
  },
];

// Data for the "Recent Services" section
const recentServices: Service[] = [
  {
    id: 1,
    title: "Lawn Care Services",
    description:
      "At Gardenservs, we believe in regular maintenance of grass areas including mowing,...",
    imageUrl: "/image/navbar/services/service7.jpg",
    altText: "Lawn Care Services",
  },
  {
    id: 2,
    title: "Hard Scaping Services",
    description:
      "Construction of non-living elements like patios, walkways, retaining walls, stone features,...",
    imageUrl: "/image/navbar/services/service8.jpg",
    altText: "Hard Scaping Services",
  },
  {
    id: 3,
    title: "Gardening Services",
    description:
      "Planting, pruning, mulching, weeding, and maintaining flower beds, shrubs, and...",
    imageUrl: "/image/navbar/services/service9.jpg",
    altText: "Gardening Services",
  },
  {
    id: 4,
    title: "Landscape Services",
    description:
      "Designing and modifying outdoor spaces with elements like plants, trees, pathways, lighting,...",
    imageUrl: "/image/navbar/services/service10.jpg",
    altText: "Landscape Services",
  },
  {
    id: 5,
    title: "Seasonal Services",
    description:
      "Specialized services based on season such as spring clean-ups, leaf removal in fall, snow...",
    imageUrl: "/image/navbar/services/service11.jpg",
    altText: "Seasonal Services",
  },
  {
    id: 6,
    title: "Turfing Services",
    description:
      "Installation and replacement of natural or artificial turf to create lush green lawns or sports...",
    imageUrl: "/image/navbar/services/service12.jpg",
    altText: "Turfing Services",
  },
];

// Reusable Service Card component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="flex flex-col items-center justify-center px-6 py-8 border-[3px] border-[#C9EDC5] rounded-xl w-[412px] h-[509px] shadow-md transition-shadow duration-300 hover:shadow-lg bg-white">
    <div className="relative w-[230px] h-[230px] rounded-full overflow-hidden mb-4">
      <img
        src={service.imageUrl}
        alt={service.altText}
        className="h-[230px] w-[230px] transition-transform duration-300 hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold text-dark text-center mb-6">
      {service.title}
    </h3>
    <p className="text-dark text-center text-sm mb-4 h-12 overflow-hidden max-w-[364px]">
      {service.description}
    </p>
    <button className="bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] text-white py-2 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors">
      Explore More
    </button>
  </div>
);

// Main Services Page component
const ServicesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header section */}
      <div className="h-full w-full bg-[#F6F9F6]">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-4 text-sm w-full">
            <span className="text-light flex items-center justify-center text-[#616161] text-base">
              Home <ChevronRight width={20} height={20} />
              <span className="text-primary ml-2 font-semibold">Services</span>
            </span>
          </div>

          {/* Section title */}
          <h1 className="mb-4 text-5xl font-bold text-[#008000] md:text- [52px]">
            Our Services
          </h1>

          {/* Section description */}
          <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-[#7C7F7A]">
            At Gardensewa, we believe a beautiful garden is more than just
            plants — it’s a living space that brings peace, purity, and purpose
            to your life. Our expert team delivers thoughtful, plant-based
            garden services that are organic, eco-friendly, and tailored to your
            space and needs.
          </p>
        </div>
      </div>
      <div className="min-h-screen max-w-[1440px]">
        {/* Main content sections */}
        <div className="container mx-auto py-12 space-y-12">
          {/* Top Services Section */}
          <main>
            <h2 className="text-[52px] font-semibold text-secondary text-center mb-10">
              Common Services
            </h2>
            <div className="flex flex-wrap gap-8 w-full items-center justify-center">
              {topServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </main>

          {/* Recent Services Section with Pagination */}
          <main>
            <h2 className="text-[52px] font-semibold text-secondary text-center mb-10">
              Nursery Owner Services
            </h2>
            <div className="flex flex-wrap gap-8 w-full items-center justify-center mb-40">
              {recentServices.map((service) => (
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
