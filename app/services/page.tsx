"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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
    title: 'Lawn Care Services',
    description:
      'At Greenera, we believe in regular maintenance of grass areas including mowing,...',
    imageUrl: '/image/navbar/services/service1.jpg',
    altText: 'Lawn Care Services',
  },
  {
    id: 2,
    title: 'Landscaping Services',
    description:
      'Designing and modifying outdoor spaces with elements like plants, trees, pathways, lighting,...',
    imageUrl: '/image/navbar/services/service2.jpg',
    altText: 'Landscaping Services',
  },
  {
    id: 3,
    title: 'Gardening Services',
    description:
      'Planting, cleaning, mulching, weeding, and maintaining flower beds, shrubs, and...',
    imageUrl: '/image/navbar/services/service3.jpg',
    altText: 'Gardening Services',
  },
  {
    id: 4,
    title: 'Soiling Services',
    description:
      'Testing, improving, and preparing soil for optimal plant growth through amendments,...',
    imageUrl: '/image/navbar/services/service4.jpg',
    altText: 'Soiling Services',
  },
  {
    id: 5,
    title: 'Irrigation Services',
    description:
      'Installation, repair, and maintenance of irrigation systems and drip to improve landscape plant...',
    imageUrl: '/image/navbar/services/service5.jpg',
    altText: 'Irrigation Services',
  },
  {
    id: 6,
    title: 'Nursery Services',
    description:
      'Supplying potted plants, trees, gardening tools, and offering expert advice to landscape projects...',
    imageUrl: '/image/navbar/services/service6.jpg',
    altText: 'Nursery Services',
  },
];

// Data for the "Recent Services" section
const recentServices: Service[] = [
  {
    id: 1,
    title: 'Lawn Care Services',
    description: 'At Gardenservs, we believe in regular maintenance of grass areas including mowing,...',
    imageUrl: '/image/navbar/services/service7.jpg',
    altText: 'Lawn Care Services',
  },
  {
    id: 2,
    title: 'Hard Scaping Services',
    description: 'Construction of non-living elements like patios, walkways, retaining walls, stone features,...',
    imageUrl: '/image/navbar/services/service8.jpg',
    altText: 'Hard Scaping Services',
  },
  {
    id: 3,
    title: 'Gardening Services',
    description: 'Planting, pruning, mulching, weeding, and maintaining flower beds, shrubs, and...',
    imageUrl: '/image/navbar/services/service9.jpg',
    altText: 'Gardening Services',
  },
  {
    id: 4,
    title: 'Landscape Services',
    description: 'Designing and modifying outdoor spaces with elements like plants, trees, pathways, lighting,...',
    imageUrl: '/image/navbar/services/service10.jpg',
    altText: 'Landscape Services',
  },
  {
    id: 5,
    title: 'Seasonal Services',
    description: 'Specialized services based on season such as spring clean-ups, leaf removal in fall, snow...',
    imageUrl: '/image/navbar/services/service11.jpg',
    altText: 'Seasonal Services',
  },
  {
    id: 6,
    title: 'Turfing Services',
    description: 'Installation and replacement of natural or artificial turf to create lush green lawns or sports...',
    imageUrl: '/image/navbar/services/service12.jpg',
    altText: 'Turfing Services',
  },
];

// Reusable Service Card component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="flex flex-col items-center px-0 py-6 border border-green-300 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg bg-white">
    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
      <Image
        src={service.imageUrl}
        alt={service.altText}
        layout="fill"
        objectFit="cover"
        className="h-48 w-48 transition-transform duration-300 hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold text-dark text-center mb-6">
      {service.title}
    </h3>
    <p className="text-dark text-center text-sm mb-4 h-12 overflow-hidden">
      {service.description}
    </p>
    <button className="bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors">
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
    <>
          <Head>
        <title>Our Services</title>
      </Head>

      {/* Header section */}
      <header className="bg-green-50 py-8 text-center border-b border-gray-200">
        <p className="text-sm text-light">Home &gt; <span className='text-primary'>Services</span></p>
        <h1 className="text-4xl font-bold text-primary mt-2">Our Services</h1>
        <p className="max-w-3xl mx-auto mt-4 text-dark px-4">
          At Greenera, we believe a beautiful garden is more than just plants—it’s a living space that brings peace, joy, and purpose to your life. Our expert team delivers thoughtful, plant-based garden services that are organic, eco-friendly, and transform your space and events.
        </p>
      </header>
    <div className="bg-gray-50 min-h-screen max-w-7xl mx-auto px-8">
      {/* Main content sections */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Top Services Section */}
        <main>
          <h2 className="text-3xl font-bold text-secondary text-center mb-10">
            Top Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </main>

        {/* Recent Services Section with Pagination */}
        <main>
          <h2 className="text-3xl font-bold xt-secondary text-center mb-10">
            Recent Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              className="p-2 w-8 h-8 border-1 rounded-lg flex items-center justify-center text-dark rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &lt;
            </button>
            {pageNumbers.map((page) => (
              <button
                key={page}
                className={`p-2 w-8 h-8 border-1 rounded-lg flex items-center justify-center rounded-full font-medium transition-colors duration-200 ${
                  page === currentPage
                    ? 'bg-primary text-white shadow-md'
                    : 'text-dark hover:bg-gray-200'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="p-2 w-8 h-8 border-1 rounded-lg flex items-center justify-center text-dark rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              &gt;
            </button>
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
