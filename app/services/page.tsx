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
    title: "Lawn Care",
    description:
      "Professional lawn maintenance including mowing, edging, fertilizing, and regular upkeep to keep your grass healthy and green year-round.",
    imageUrl: "/image/navbar/services/1.png",
    altText: "Lawn Care Services",
  },
  {
    id: 2,
    title: "Planting and Transplanting",
    description:
      "Expert planting services for trees, shrubs, flowers, and vegetables, including transplanting existing plants to new locations for optimal growth.",
    imageUrl: "/image/navbar/services/2.png",
    altText: "Planting and Transplanting Services",
  },
  {
    id: 3,
    title: "Garden Maintenance",
    description:
      "Comprehensive garden care including weeding, pruning, mulching, and seasonal maintenance to keep your garden flourishing throughout the year.",
    imageUrl: "/image/navbar/services/3.png",
    altText: "Garden Maintenance Services",
  },
  {
    id: 4,
    title: "Soil Improvement",
    description:
      "Soil testing, amendment, and preparation services to ensure optimal growing conditions for all your plants and landscaping projects.",
    imageUrl: "/image/navbar/services/4.png",
    altText: "Soil Improvement Services",
  },
  {
    id: 5,
    title: "Irrigation Services",
    description:
      "Installation, repair, and maintenance of irrigation systems including sprinklers and drip systems to ensure efficient water distribution.",
    imageUrl: "/image/navbar/services/5.png",
    altText: "Irrigation Services",
  },
  {
    id: 6,
    title: "Pest and Disease Control",
    description:
      "Integrated pest management and disease prevention services to protect your plants and maintain a healthy landscape environment.",
    imageUrl: "/image/navbar/services/6.png",
    altText: "Pest and Disease Control Services",
  },
  {
    id: 7,
    title: "Hardscaping",
    description:
      "Installation of patios, walkways, retaining walls, stone features, and other non-living landscape elements to enhance outdoor spaces.",
    imageUrl: "/image/navbar/services/7.png",
    altText: "Hardscaping Services",
  },
  {
    id: 8,
    title: "Seasonal Services",
    description:
      "Season-specific maintenance including spring cleanups, fall leaf removal, winter preparation, and holiday decoration services.",
    imageUrl: "/image/navbar/services/8.png",
    altText: "Seasonal Services",
  },
  {
    id: 9,
    title: "Landscape Design",
    description:
      "Professional landscape design and planning services to create beautiful, functional outdoor spaces tailored to your needs and preferences.",
    imageUrl: "/image/navbar/services/9.png",
    altText: "Landscape Design Services",
  },
  {
    id: 10,
    title: "Tree Sales",
    description:
      "Wide selection of quality trees for sale including shade trees, ornamental trees, and fruit trees with expert advice on selection and care.",
    imageUrl: "/image/navbar/services/10.png",
    altText: "Tree Sales Services",
  },
  {
    id: 11,
    title: "Plant Propagation",
    description:
      "Professional plant propagation services including seed starting, cutting propagation, and grafting to expand your plant collection.",
    imageUrl: "/image/navbar/services/11.png",
    altText: "Plant Propagation Services",
  },
  {
    id: 12,
    title: "Soil and Fertilizers",
    description:
      "Premium soil blends, compost, fertilizers, and soil amendments to nourish your plants and improve growing conditions.",
    imageUrl: "/image/navbar/services/12.png",
    altText: "Soil and Fertilizers Services",
  },
  {
    id: 13,
    title: "Consultation Services",
    description:
      "Expert consultation on landscape planning, plant selection, garden design, and maintenance strategies for optimal results.",
    imageUrl: "/image/navbar/services/13.png",
    altText: "Consultation Services",
  },
];

// Data for the "Recent Services" section

// Reusable Service Card component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="flex flex-col items-center w-full rounded-2xl max-w-[280px] sm:max-w-[320px] md:max-w-[380px] border-2 border-border lg:max-w-[412px] h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:h-[509px] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
    <div className="relative w-full h-1/2 overflow-hidden mb-3 sm:mb-4 flex-shrink-0">
      <img
        src={service.imageUrl}
        alt={service.altText}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-2xl"
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

      <button className="buttonColorFill text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
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
      <div className="w-full bg-card-stroke-light">
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
          <h1 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-text leading-tight">
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
