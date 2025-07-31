import React from 'react';
import { ShieldCheck, DollarSign, Leaf, Truck } from 'lucide-react';

// Define types for the props
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ClientCardProps {
  image: string;
  name: string;
  text: string;
}

// FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-green-200 rounded-xl transition-shadow duration-300">
    <div className="bg-white p-4 rounded-full mb-4">
      <Icon className="w-10 h-10 text-black" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center text-nd">{description}</p>
  </div>
);

// ClientCard Component
const ClientCard: React.FC<ClientCardProps> = ({ image, name, text }) => (
  <div className="group flex flex-col items-center justify-center p-2 bg-white rounded-4xl border border-gray-200 hover:shadow-md transition-shadow duration-300 h-[300px] relative overflow-hidden">
    <img
      src={image}
      alt={`${name} Logo`}
      className="max-h-36 object-contain mb-12 h-[300px] w-[300px] transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white bg-opacity-50 transition-opacity duration-300">
      <p className="text-black text-sm font-semibold">{text}</p>
    </div>
    <p className="text-black font-medium text-center">{name}</p>
  </div>
);


// Main App Component
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
      text: 'GardenSewa did an expectional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely Love.',
    },
    {
      image: '/image/home/client/2.png',
      name: 'British Embassy Kathmandu',
      text: 'GardenSewa did an expectional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely Love.',
    },
    {
      image: '/image/home/client/3.png',
      name: 'Aloft',
      text: 'GardenSewa did an expectional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely Love.',
    },
    {
      image: '/image/home/client/4.png',
      name: 'Yak & Yeti',
      text: 'GardenSewa did an expectional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely Love.',
    },
  ];

  return (
    <div className="font-sans antialiased bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      {/* Why Choose Us? Section */}
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
      <section className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold text-green-800">Our Clients</h2>
          <button className="flex items-center text-green-700 font-semibold px-4 py-2 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition-colors duration-300">
            View All
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              image={client.image}
              name={client.name}
              text={client.text}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
