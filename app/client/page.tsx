"use client";
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa";


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
    {
      image: '/image/home/client/client5.png',
      name: 'Soaltee',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/client6.png',
      name: 'Metropolitan Hotel',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/client7.png',
      name: 'Nepal Mediciti',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/client8.png',
      name: 'Grande International Hospital',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/client9.jpg',
      name: 'Mercure Hotel',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
    {
      image: '/image/home/client/client10.png',
      name: 'Hilton',
      text: 'GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.',
    },
  ];

export default function ClientPage() {
return(
    <main>
        <div className={`relative w-full h-[360px] flex items-center justify-center text-white`}>
                {/* Background image with a dark overlay */}
                <img
                  src="/image/home/client/clientbg1.jpg"
                  alt="A large green plant"
                  height={400}
                  width={400}
                  className="absolute inset-0 z-0 object-cover h-90 w-full"
                />
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        
                {/* Main content container */}
                <div className="relative z-10 max-w-4xl text-center px-4">
                  {/* Breadcrumb navigation */}
                  <div className="flex justify-center w-full text-sm mb-8">
                    <span className="text-white">Home &gt;<span className='text-green-100'> Our Clients </span></span>
                  </div>
        
                  {/* Section title */}
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Our Clients
                  </h1>
        
                  {/* Section description */}
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                    We believe that everyone deserves a little more green in their life. Garden Sewa is built to bring plants, people, and peace together through simple and thoughtful gardening services.
                  </p>
                </div>
              </div>
               {/* Our Clients Section */}
                    <section className="max-w-7xl mx-auto px-4 py-16">
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
                    <div className="mb-8 py-12">
                    <div className={`relative w-full h-[360px] flex items-center justify-center text-white`}>
                {/* Background image with a dark overlay.... */}
                <img
                  src="/image/home/client/clientbg2.jpg"
                  alt="A large green plant"
                  height={400}
                  width={400}
                  className="absolute inset-0 z-0 object-cover h-90 w-full"
                />
                <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>
        
                {/* Main content container */}
                <div className="relative z-10 max-w-4xl text-center px-4">
                  {/* Section title */}
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Want to grow with Gardensewa?
                  </h1>
        
                  {/* Section description */}
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                    Join our growing network of satisfied clients.</p>
                    <button className="bg-primary text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-secondary transition">
              Become a Client
            </button>
                </div>
              </div>
              </div>
    </main>
)
}