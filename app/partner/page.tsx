"use client";

import Link from "next/link";

  const partners = [
    {
      name: 'Home Garden Restoration',
      description: 'Home Garden Restoration’s expertise in reviving and transforming outdoor spaces has made them a valuable extension of the GardenSewa mission. Their dedication to quality restoration has brought life and charm back to many residential and commercial gardens.',
      logo: '/image/home/partners/partener1.png',
      link: 'https://homeparkgardens.co.uk/',
    },
    {
      name: 'Home Park Gardens',
      description: 'Home Garden Restoration’s expertise in reviving and transforming outdoor spaces has made them a valuable extension of the GardenSewa mission. Their dedication to quality restoration has brought life and charm back to many residential and commercial gardens.',
      logo: '/image/home/partners/partener2.png',
      link: 'https://homeparkgardens.co.uk/',
    },
    {
      name: 'Pristine Gardens',
      description: 'Home Garden Restoration’s expertise in reviving and transforming outdoor spaces has made them a valuable extension of the GardenSewa mission. Their dedication to quality restoration has brought life and charm back to many residential and commercial gardens.',
      logo: '/image/home/partners/partener3.jpg',
      link: 'https://pristinegardensllc.com/',
    },
  ];
export default function App() { 
    return(
      <>
        <div className="flex flex-col items-center justify-center h-full px-4 py-8 text-center bg-green-50">
    {/* Breadcrumb navigation */}
    <div className="mb-4 text-sm w-full">
      <span className="text-light">
        Home &gt;
        <span className="text-primary ml-2">Our Partners</span>
      </span>
      
      <h2 className="text-4xl font-bold text-center text-primary m-4 mt-4">Our Partners</h2>
    </div>

    {/* Section title */}
    <p className="max-w-3xl mx-auto mt-4 text-dark px-4">At Garden Sewa, we partner with like-minded individuals and organizations to make green living simple and accessible. Together, we bring plants, people, and peace closer than ever.</p>
  </div>
  <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white rounded-lg p-6 flex flex-col items-center justify-between text-center border-2 border-accent"
            style={{ minHeight: '100px' }}
          >
            <div className="flex-grow flex items-center justify-center">
              <div className="relative w-38 h-38"> {/* Adjust size as needed */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  height={128}
                  width={192}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <p className="mb-6 text-left p-2">{partner.description}</p>
            <Link href={partner.link} passHref>
              <button className="mt-auto px-6 py-2 bg-primary text-white rounded-xl hover:bg-secondary transition-colors duration-200 text-sm">
                Visit Site
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
    </>
    );
};