import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Define the interface for a service item
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

// Dummy data for services
const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Lawn Care Services',
    description:
      'At Greenera, we believe in regular maintenance of grass areas including mowing,...',
    imageUrl: '/images/services/lawn_care.jpg',
    altText: 'Lawn Care Services',
  },
  {
    id: 2,
    title: 'Landscaping Services',
    description:
      'Designing and modifying outdoor spaces with elements like plants, trees, pathways, lighting,...',
    imageUrl: '/images/services/landscaping.jpg',
    altText: 'Landscaping Services',
  },
  {
    id: 3,
    title: 'Gardening Services',
    description:
      'Planting, cleaning, mulching, weeding, and maintaining flower beds, shrubs, and...',
    imageUrl: '/images/services/gardening.jpg',
    altText: 'Gardening Services',
  },
  {
    id: 4,
    title: 'Soiling Services',
    description:
      'Testing, improving, and preparing soil for optimal plant growth through amendments,...',
    imageUrl: '/images/services/soiling.jpg',
    altText: 'Soiling Services',
  },
  {
    id: 5,
    title: 'Irrigation Services',
    description:
      'Installation, repair, and maintenance of irrigation systems and drip to improve landscape plant...',
    imageUrl: '/images/services/irrigation.jpg',
    altText: 'Irrigation Services',
  },
  {
    id: 6,
    title: 'Nursery Services',
    description:
      'Supplying potted plants, trees, gardening tools, and offering expert advice to landscape projects...',
    imageUrl: '/images/services/nursery.jpg',
    altText: 'Nursery Services',
  },
];

const ServiceCard: React.FC<ServiceItem> = ({
  title,
  description,
  imageUrl,
  altText,
}) => (
  <div className="flex flex-col items-center p-6 border border-gray-200 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg">
    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
      <Image
        src={imageUrl}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold text-primary text-center mb-2">
      {title}
    </h3>
    <p className="text-gray-600 text-center text-sm mb-4">{description}</p>
    <button className="bg-primary text-white py-2 px-6 rounded-full font-semibold hover:bg-secondary transition-colors">
      Explore More
    </button>
  </div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Head>
        <title>Our Services</title>
      </Head>
      <header className="bg-white py-8 text-center border-b border-gray-200">
        <p className="text-sm text-gray-500">Home &gt; Services</p>
        <h1 className="text-4xl font-bold text-primary mt-2">Our Services</h1>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600 px-4">
          At Greenera, we believe a beautiful garden is more than just plants—it’s a living space that brings peace, joy, and purpose to your life. Our expert team delivers thoughtful, plant-based garden services that are organic, eco-friendly, and transform your space and events.
        </p>
      </header>
      <div className="container mx-auto px-4 py-12 space-y-12">
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">
          Top Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </main>
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">
          Recent Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </main>
      </div>
    </div>
  );
};

export default ServicesPage;