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
  imageUrl: string;
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
    imageUrl: '/image/home/top-services/2.jpg',
  },
  {
    id: '3',
    title: 'Turfing Service',
    imageUrl: '/image/home/top-services/3.jpg',
  },
  {
    id: '4',
    title: 'Gardening Makeovers',
    imageUrl: '/image/home/top-services/4.jpg',
  },
  {
    id: '5',
    title: 'Seasonal Service',
    imageUrl: '/image/home/top-services/5.jpg',
  },
  {
    id: '6',
    title: 'Lawn Care',
    imageUrl: '/image/home/top-services/6.jpg',
  },
];

// Dummy data for plants
const plants: Plant[] = [
  {
    id: 'p1',
    name: 'Plant Name',
    description: 'Air Purifier • Pet Friendly • Indoor Plant',
    price: 890,
    imageUrl: '/image/home/plants/plant1.jpg',
  },
  {
    id: 'p2',
    name: 'Snake Plant',
    description: 'Air Purifier • Pet Friendly • Indoor Plant',
    price: 890,
    imageUrl: '/image/home/plants/plant2.jpg',
  },
  {
    id: 'p3',
    name: 'Plant Name',
    description: 'Air Purifier • Pet Friendly • Indoor Plant',
    price: 890,
    imageUrl: '/image/home/plants/plant3.jpg',
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
const PlantCard: React.FC<Plant> = ({ name, description, price, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
    <div className="relative w-full h-56 overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found';
        }}
      />
      <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform">
        {/* Heart Icon - using inline SVG for simplicity */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
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
    </div>
    <div className="p-4 flex flex-col flex-grow bg-green-50">
      <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <p className="text-xl font-bold text-green-700 mt-2">NPR. {price}</p>
      <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-2xl hover:bg-secondary">
        Add to Cart
      </button>
    </div>
  </div>
);

// Main Component
const ServicesAndPlants: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 p-4 sm:p-6 lg:p-8">
      {/* Our Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Explore Plants Section */}
      <section>
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800">Explore Plants</h2>
          <button className="bg-white text-green-700 border border-green-700 py-2 px-4 rounded-4xl hover:bg-primary hover:text-white transition-colors">
            View All →
          </button>
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
