"use client";
import Image from 'next/image';

export default function AboutPage() {
  interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
  }

  // A reusable card component to keep the code clean
  const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
    <div className="flex flex-col items-center p-8  m-2 rounded-2xl border border-green-200 bg-white">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 text-green-700 overflow-hidden">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      {/* Card Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      {/* Card Description */}
      <p className="text-center text-gray-500 leading-relaxed">{description}</p>
    </div>
  );

  // Define the data for the cards
  const features = [
    {
      title: "Mission",
      description:
        "Our mission is to provide high-quality plants, gardening resources, and expert support to every corner of Nepal.",
      icon: "/image/navbar/about/mission.png",
    },
    {
      title: "Motive",
      description:
        "We aim to be the go-to place for all gardening needs, offering easy access to plants and expert advice for every gardener and farmer.",
      icon: "/image/navbar/about/motive.png",
    },
    {
      title: "Vision",
      description:
        "Our vision is to cultivate a greener Nepal by promoting responsible gardening practices and reconnecting people with nature.",
      icon: "/image/navbar/about/vision.png",
    },
  ];

  return (
    <main>
      <div className={`relative w-full h-[400px] flex items-center justify-center text-white`}>
        {/* Background image with a dark overlay */}
        <Image
          src="/image/navbar/about/about.jpg"
          alt="A large green plant"
          height={400}
            width={400}
          quality={100}
          className="absolute inset-0 z-0 object-cover h-100 w-full"
        />
        <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>

        {/* Main content container */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          {/* Breadcrumb navigation */}
          <div className="flex justify-center w-full text-sm mb-4">
            <span className="text-white">Home &gt;<span className='text-green-400'> About Us</span></span>
          </div>

          {/* Section title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Us
          </h1>

          {/* Section description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            We believe that everyone deserves a little more green in their life. Garden Sewa is built to bring plants, people, and peace together through simple and thoughtful gardening services.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-primary text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-secondary transition">
              Book a Service
            </button>
            <button className="text-white font-semibold border border-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-primary hover:text-white hover:border-0 transition">
              Explore Plants
            </button>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="px-2 md:px-5 lg:px-8 py-8 md:py-16 lg:py-12">
        <div className="flex flex-col lg:flex-row overflow-hidden">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-between p-6 md:p-10 lg:p-12 bg-white">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 leading-tight">
                Helping You Grow the <br /> Garden You Love
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                Every project we've worked on has been a shared journey — from planting ideas to watching them bloom. Together with our customers, we've grown not just gardens, but meaningful relationships rooted in care, trust, and a love for greenery. Whether it's a small balcony plant or a full backyard transformation, we're here to make every space greener, one plant at a time.
              </p>
            </div>

            {/* Stats Section */}
            <div className="bg-green-100 w-[125%] -ml-4 rounded-xl p-4 md:p-5 grid grid-cols-3 text-start gap-x-10 z-10">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">2+</p>
                <p className="text-black text-sm md:text-base">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
                <p className="text-black text-sm md:text-base">Garden Transformed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">100+</p>
                <p className="text-black text-sm md:text-base">Happy Customers</p>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <Image
              src="/image/navbar/about/two-potted-plants.jpg"
              alt="Two potted plants on a wooden table"
              height={600}
              width={600}
              className="object-cover w-[600px] h-[480px] rounded-2xl lg:mt-8"
            />
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="font-sans bg-gray-50 py-4 px-4 sm:px-6 lg:px-16">
        {/* Section Title */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-green-800 tracking-tight leading-tight">
            Description of Products & Services
          </h2>
        </div>

        {/* Cards Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>


      {/* Mission Section */}
      <div className='py-12'>
      <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-green-800 tracking-tight leading-tight">
            Our Mission
          </h2>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-full">
        <div
          className="relative w-full max-w-full mx-0 overflow-hidden shadow-2xl py-12"
          style={{
            backgroundImage: 'url(/image/navbar/about/OurMission.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', 
          }}
        >
          
          <div className="absolute inset-0 opacity-60"></div>

          <div
            className="relative z-10 flex flex-col items-center justify-center
                       p-8 md:p-16 text-white text-center"
          >
            <h1 className="text-xl md:text-2xl text-green-100 mb-2 font-bold leading-tight">
              To reconnect people with nature
            </h1>
            <h1 className="text-3xl md:text-6xl text-green-50 font-bold mb-6 leading-tight">
              One plant one garden, one moment at a home.
            </h1>
          </div>
        </div>
      </div>      
        </div>


        {/* Call to Action Section */}
        <main className="flex min-h-screen items-center justify-center bg-green-50 p-4">
        <div className="flex w-full max-w-7xl flex-col items-center px-6 py-8 md:flex-row md:items-stretch">
          
          {/* Left Section */}
          <div className="flex flex-1 flex-col justify-center p-4 text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold text-green-900 md:text-5xl mb-8">
              Got Plants to <br className="hidden md:block" /> Share?
            </h1>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Turn your homegrown plants into something more. Join <br className="hidden md:block" />
              GardenSewa and sell your greens to plant lovers across <br className="hidden md:block" />
              Nepal!
            </p>
            <div className="mt-4 md:mt-0">
              <button className="rounded-full bg-primary px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-secondary">
                Start Selling
              </button>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="mt-8 flex flex-1 flex-col items-center gap-4 md:mt-0 md:flex-row md:items-stretch">
            {/* Left Image - Cactus */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-auto md:w-1/2 mt-20">
              <img
                src="/image/navbar/about/cactus.jpg"
                alt="Cactus growing by the sea"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Right Image - Potted Plants */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-auto md:w-1/2">
              <img
                src="/image/navbar/about/two-plants.jpg"
                alt="Two plants in wooden vases"
                className="h-90 w-full object-cover"
              />
            </div>
          </div>

        </div>
      </main>
    </main>
  );
}
