import React from 'react';
import { ShieldCheck, DollarSign, Leaf, Truck } from 'lucide-react';
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
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.bajekosekuwa.com/',
  },
  {
    image: '/image/home/client/2.png',
    name: 'British Embassy Kathmandu',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.gov.uk/world/organisations/british-embassy-kathmandu',
  },
  {
    image: '/image/home/client/3.png',
    name: 'Aloft',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.marriott.com/en-us/hotels/ktmal-aloft-kathmandu-thamel/overview/?nst=paid&cid=PAI_GLB0004YFY_GLE000BHOR_GLF000OCGE&nst=paid&gclsrc=aw.ds&gad_source=1&gad_campaignid=22178666619&gbraid=0AAAAADilnidqVZJVxY377ZINfb9DlsduA&gclid=CjwKCAjw49vEBhAVEiwADnMbbB2ExULZAhvCxIRIOMKWNlEMTC0Sg2F8FSSBwc4FAzV_04N6yDk9qxoCpUIQAvD_BwE',
  },
  {
    image: '/image/home/client/4.png',
    name: 'Yak & Yeti',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.yakandyeti.com/',
  },
  ];

  return (
    <div className="font-sans antialiased bg-gray-50 py-4 px-4 sm:px-6 lg:px-16 mt-4">
      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary text-center mb-12">Why Choose Us?</h2>
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
      <section className="max-w-7xl mx-auto px-8 py-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 rounded-3xl p-6 flex flex-col items-start text-left"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <p className="text-black text-sm text-left leading-relaxed mt-4 mb-4">
                {client.text}
              </p>
              <a
                href={client.link}
                className="mt-auto self-center bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-secondary transition"
              >
                Browse More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
