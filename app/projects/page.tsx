'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa';

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
  {
    image: '/image/home/client/client5.png',
    name: 'Soaltee',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://soaltee.com/',
  },
  {
    image: '/image/home/client/client6.png',
    name: 'Metropolitan Hotel',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: '#',
  },
  {
    image: '/image/home/client/client7.png',
    name: 'Nepal Mediciti',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.nepalmediciti.com/',
  },
  {
    image: '/image/home/client/client8.png',
    name: 'Grande International Hospital',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.grandehospital.com/en',
  },
  {
    image: '/image/home/client/client9.jpg',
    name: 'Mercure Hotel',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: '#',
  },
  {
    image: '/image/home/client/client10.png',
    name: 'Hilton',
    text: 'Aloft Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture with a focus on art, music, and technology. Enjoy our vibrant social spaces, and warm hospitality with us during your stay in Kathmandu.',
    link: 'https://www.hilton.com/en/',
  },
];

export default function ClientPage() {
  return (
    <main>
      <div
        className={`relative w-full h-[360px] flex items-center justify-center text-white`}
      >
        <img
          src="/image/home/client/clientbg1.jpg"
          alt="A large green plant"
          height={400}
          width={400}
          className="absolute inset-0 z-0 object-cover h-90 w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex justify-center w-full text-sm mb-8">
            <span className="text-white">
              Home &gt;<span className="text-green-100"> Projects </span>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            We believe that everyone deserves a little more green in their life.
            Garden Sewa is built to bring plants, people, and peace together
            through simple and thoughtful gardening services.
          </p>
        </div>
      </div>
      {/* Cards */}
      <section className="max-w-7xl mx-auto px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
      {/*image bg */}
      <div className="mb-8 py-12">
        <div
          className={`relative w-full h-[360px] flex items-center justify-center text-white`}
        >
          <img
            src="/image/home/client/clientbg2.jpg"
            alt="A large green plant"
            height={400}
            width={400}
            className="absolute inset-0 z-0 object-cover h-90 w-full"
          />
          <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Want to grow with Gardensewa?
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Join our growing network of satisfied clients.
            </p>
            <Link href="book-a-service">
            <button className="bg-primary text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-secondary transition">
              Book a Service
            </button></Link>
          </div>
        </div>
      </div>
    </main>
  );
}