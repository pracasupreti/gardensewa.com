import Head from "next/head";
import React from "react";

// Define a TypeScript interface for a single testimonial
interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

// Dummy data for the testimonials
const testimonials: Testimonial[] = [
  {
    name: "Dinesh Pathak",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t1.png",
  },
  {
    name: "Rodrig Smith",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t2.png",
  },
  {
    name: "Edward Smith",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t3.png",
  },
  {
    name: "Alex Junior",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t4.png",
  },
  {
    name: "David Bowie",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t5.png",
  },
  {
    name: "James Murphy",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t6.png",
  },
  {
    name: "Aman Pathak",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t7.png",
  },
  {
    name: "Adarsh Singh",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t8.png",
  },
  {
    name: "Raunak Gupta",
    quote:
      "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "/image/home/testimonials/t9.png",
  },
];

const PartnersTestimonials: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br mb-30">
       <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="/images/og/testimonials.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />

    </Head>
      {/* Hero Section */}
      <div className="bg-card-stroke-light px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <nav className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            Home <span className="mx-2">›</span>
            <span className="text-primary font-medium">Testimonials</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Testimonials
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We're here to help your garden grow smoothly. Whether you have
            questions, feedback, or want to partner with us, feel free to reach
            out.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
              What Our Partners Say About
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">
              GardenSewa
            </h3>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white  flex flex-col justify-center items-center rounded-2xl h-[500px] sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-border relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-20 h-20  rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-500"></div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary transition-colors duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Content Container */}
                <div className="relative z-10 ">
                  {/* Profile Image */}
                  <div className="flex justify-center items-center mb-4 sm:mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-green-100 transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
                    {testimonial.name}
                  </h4>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-base text-gray-600 leading-relaxed text-center relative">
                    <p className="italic">"{testimonial.quote}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;
