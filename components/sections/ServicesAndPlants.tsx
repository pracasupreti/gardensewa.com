import Link from 'next/link';
import React from 'react';

// Define interfaces for data types
interface Service {
  id: string;
  title: string;
  imageUrl: string;
}

interface Plant {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  labels?: string[];
}

// Dummy data for services
const services: Service[] = [
  {
    id: '1',
    title: 'Gardening Service',
    imageUrl: '/image/home/top-services/1.jpg',
  },
  {
    id: '2',
    title: 'Landscaping Services',
    imageUrl: '/image/home/top-services/Landscaping.jpg',
  },
  {
    id: '3',
    title: 'Turfing Service',
    imageUrl: '/image/home/top-services/Tufring-Services.jpg',
  },
  {
    id: '4',
    title: 'Gardening Makeovers',
    imageUrl: '/image/home/top-services/4.jpg',
  },
  {
    id: '5',
    title: 'Seasonal Service',
    imageUrl: '/image/home/top-services/Seasonal.jpg',
  },
  {
    id: '6',
    title: 'Lawn Care',
    imageUrl: '/image/home/top-services/Lawn Care.jpg',
  },
];

// Dummy data for plants updated to match the image
const plants: Plant[] = [
  {
    id: 'p1',
    name: 'Snake Plant',
    description: 'Air Purifier • Pet Safe • Low Light',
    price: 890,
    imageUrl:'/image/home/plants/plant-1.jpg',
    labels: ['Popular'],
  },
  {
    id: 'p2',
    name: 'Monstera Deliciosa',
    description: 'Air Purifier • Pet Safe • Low Light',
    price: 890,
    oldPrice: 1289,
    imageUrl: '/image/home/plants/plant-2.jpg',
    labels: ['Limited'],
  },
  {
    id: 'p3',
    name: 'Fiddle Leaf Fig',
    description: 'Air Purifier • Pet Safe • Low Light',
    price: 890,
    oldPrice: 1289,
    imageUrl: '/image/home/plants/plant-3.jpg',
  },
];

// Service Card Component
const ServiceCard: React.FC<Service> = ({ title, imageUrl }) => (
  <div className="relative w-full h-58 rounded-xl overflow-hidden group">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
    <div className="absolute top-3 left-3 bg-white bg-opacity-80 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
      {title}
    </div>
  </div>
);

// Plant Card Component
const PlantCard: React.FC<Plant> = ({
  name,
  description,
  price,
  oldPrice,
  imageUrl,
  labels,
}) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <div className="relative w-full h-56 overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found';
        }}
      />
      {labels && (
        <div className="absolute top-3 right-3 bg-green-200 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          {labels.join(', ')}
        </div>
      )}
    </div>
    <div className="p-4 bg-gray-50 flex flex-col items-start">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <div className="flex items-center space-x-2 mt-1">
        <p className="text-lg font-bold text-gray-900">NPR. {price}</p>
        {oldPrice && (
          <p className="text-sm text-gray-400 line-through">NPR. {oldPrice}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {description.split(' • ').map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 w-full flex space-x-2">
        <button className="flex-grow flex items-center justify-center p-3 rounded-full border border-primary text-primary hover:bg-gray-100 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button className="flex-grow-2 bg-primary text-white py-3 px-4 rounded-full font-semibold hover:secondary transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

// Main Component
const ServicesAndPlants: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 p-4 sm:p-6 lg:p-8">
      {/* Our Services Section */}
      <section className="mb-12">
        <div className="flex flex-row justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">Our Services</h2>
          <Link href="/services"><button className="bg-white text-primary border border-primary py-2 px-6 rounded-lg hover:bg-secondary hover:text-white transition-colors flex items-center space-x-2">
            <span>View All</span>
            <span>→</span>
          </button></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Explore Plants Section */}
      <section>
        <div className="flex flex-row justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">Explore Plants</h2>
          <Link href="/plants"><button className="bg-white text-primary border border-primary py-2 px-6 rounded-lg hover:bg-secondary hover:text-white transition-colors flex items-center space-x-2">
            <span>View All</span>
            <span>→</span>
          </button></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plants.map((plant) => (
            <PlantCard key={plant.id} {...plant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesAndPlants;