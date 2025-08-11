import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

// Define interfaces for data types
interface Service {
  id: string;
  title: string;
  imageUrl: string;
}

interface Plant {
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  tags: string[];
  difficulty: string;
}

// Dummy data for services
const services: Service[] = [
  {
    id: "1",
    title: "Gardening Service",
    imageUrl: "/image/home/top-services/1.jpg",
  },
  {
    id: "2",
    title: "Landscaping Services",
    imageUrl: "/image/home/top-services/Landscaping.jpg",
  },
  {
    id: "3",
    title: "Turfing Service",
    imageUrl: "/image/home/top-services/Tufring-Services.jpg",
  },
  {
    id: "4",
    title: "Gardening Makeovers",
    imageUrl: "/image/home/top-services/4.jpg",
  },
  {
    id: "5",
    title: "Seasonal Service",
    imageUrl: "/image/home/top-services/Seasonal.jpg",
  },
  {
    id: "6",
    title: "Lawn Care",
    imageUrl: "/image/home/top-services/Lawn Care.jpg",
  },
];

// Dummy data for plants updated to match the image
const plants: Plant[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&h=300&fit=crop",
    name: "Fiddle Leaf Fig",
    price: "890",
    oldPrice: "1289",
    tags: ["Low Light", "Outdoor", "Indoor"],
    difficulty: "bg-green-500",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    name: "Monstera Deliciosa",
    price: "680",
    tags: ["Air Purifier", "Pet Safe", "Outdoor"],
    difficulty: "bg-yellow-500",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=300&fit=crop",
    name: "Succulent",
    price: "890",
    tags: ["Pet Safe", "Low Light", "Indoor"],
    difficulty: "bg-red-500",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=300&fit=crop",
    name: "Succulent",
    price: "890",
    tags: ["Pet Safe", "Low Light", "Indoor"],
    difficulty: "bg-red-500",
  },
];

// Service Card Component
const ServiceCard: React.FC<Service> = ({ title, imageUrl }) => (
  <div className="relative w-[417px] h-[320] rounded-xl overflow-hidden group">
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
  price,
  oldPrice,
  imageUrl,
  tags,
  difficulty,
}) => (
  <div
    className="bg-white rounded-2xl overflow-hidden border-[3px] border-card duration-300"
    style={{ width: "306px", height: "469px" }}
  >
    {/* Image Section */}
    <div className="relative bg-gray-100" style={{ height: "320px" }}>
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/320x224/e5f3e5/4a7c59?text=Plant+Image";
        }}
      />
    </div>

    {/* Content Section */}
    <div className="p-4 relative" style={{ height: "149px" }}>
      {/* Difficulty Indicators in bottom section */}
      <div className="absolute top-4 right-4 flex space-x-1">
        <div className={`w-3 h-3 rounded-full bg-green-500`}></div>
        <div className={`w-3 h-3 rounded-full bg-red-500`}></div>
      </div>

      {/* Title and Price */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">NPR. {price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              NPR. {oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Main Component
const ServicesAndPlants: React.FC = () => {
  return (
    <div className="min-h-screen w-full font-sans text-gray-900 max-w-[1300px]">
      {/* Our Services Section */}
      <section className="mb-30 ">
        <div className="flex flex-row justify-between items-center mb-6 ">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
            Our Services
          </h2>
          <a className="border border-secondary py-2.5 px-6 rounded-md flex text-secondary text-lg gap-1.5 hover:bg-secondary hover:text-white">
            View All <ArrowRight />
          </a>
        </div>
        <div className=" flex gap-6 items-center justify-center flex-wrap">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Explore Plants Section */}
      <section className="mb-20">
        <div className="flex flex-row justify-between items-center  mx-auto ">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
            New Arrivals
          </h2>
          <a className="border border-secondary py-2.5 px-6 rounded-md flex text-secondary text-lg gap-1.5 hover:bg-secondary hover:text-white">
            View All <ArrowRight />
          </a>
        </div>
        <div className="flex gap-6  mx-auto items-center justify-center">
          {plants.map((plant, key) => (
            <PlantCard key={key} {...plant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesAndPlants;
