import Image from 'next/image';
import Link from 'next/link';

export function OurPartners() {
  const partners = [
    {
      name: 'Pristine Gardens',
      description: 'LANDSCAPE & HORTICULTURE - Bringing Future Home -',
      logo: '/image/home/partners/partener1.png',
      link: '#',
    },
    {
      name: 'Home Park Gardens',
      description: '& Landscaping',
      logo: '/image/home/partners/partener2.png',
      link: '#',
    },
    {
      name: 'Home Garden Restoration',
      description: 'hello',
      logo: '/image/home/partners/partener3.jpg',
      link: '#',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white rounded-lg p-6 flex flex-col items-center justify-between text-center border border-gray-200"
            style={{ minHeight: '300px' }}
          >
            <div className="flex-grow flex items-center justify-center mb-4">
              <div className="relative w-48 h-32"> {/* Adjust size as needed */}
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <Link href={partner.link} passHref>
              <button className="mt-auto px-6 py-2 border border-black text-black rounded-4xl hover:bg-gray-50 transition-colors duration-200 text-sm">
                Visit Site
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}