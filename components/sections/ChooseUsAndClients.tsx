import React from 'react';
import { ShieldCheck, DollarSign, Leaf, Truck, Quote } from 'lucide-react';
import { FaQuoteLeft } from 'react-icons/fa';

// FeatureCard props and component
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-[#D1F5CB] rounded-xl transition-shadow duration-300">
    <div className="bg-white p-4 rounded-full mb-4">
      <Icon className="w-10 h-10 text-black" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

// Main Component
const ChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Trusted Gardeners',
      description: 'All gardeners are verified and experienced.',
    },
    {
      icon: DollarSign,
      title: 'Fair & Clear Pricing',
      description: 'Pay exactly what you see.',
    },
    {
      icon: Leaf,
      title: 'Healthy Plants Only',
      description: 'Fresh, thriving, and ready to grow.',
    },
    {
      icon: Truck,
      title: 'On-Time Delivery',
      description: 'Timely delivery, always.',
    },
  ];

  const clients = [
    {
      image: '/image/home/client/1.png',
      name: 'Bajeko Sekuwa',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/2.png',
      name: 'British Embassy Kathmandu',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/3.png',
      name: 'Aloft',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/4.png',
      name: 'Yak & Yeti',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
  ];

  return (
    <div className="font-sans antialiased bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-6xl font-bold text-center text-green-800 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative group bg-white border border-green-200 rounded-2xl p-6 h-[320px] flex flex-col items-center justify-center text-center overflow-hidden transition duration-300"
            >
              {/* Logo */}
              <img
                src={client.image}
                alt={client.name}
                className="h-24 object-contain mb-4 transition duration-300 group-hover:opacity-0"
              />
              {/* Name */}
              <p className="text-black text-lg font-semibold transition duration-300 group-hover:opacity-0">{client.name}</p>

              {/* Hover testimonial */}
              <div className="absolute inset-0 bg-white border border-green-300 rounded-2xl p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <FaQuoteLeft className="text-green-600 w-6 h-6 mb-3" />
                <p className="text-black text-base text-left leading-relaxed">{client.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
