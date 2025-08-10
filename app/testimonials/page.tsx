import React from 'react';

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
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=DP",
  },
  {
    name: "Rodrig Smith",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=RS",
  },
  {
    name: "Edward Smith",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=ES",
  },
  {
    name: "Alex Junior",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=AJ",
  },
  {
    name: "David Bowie",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=DB",
  },
  {
    name: "James Murphy",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=JM",
  },
  {
    name: "Aman Pathak",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=AP",
  },
  {
    name: "Adarsh Singh",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=AS",
  },
  {
    name: "Raunak Gupta",
    quote: "GardenSewa did an exceptional job revamping our outdoor dining space. The greenery and landscaping they added have created a fresh, natural vibe that our customers absolutely love.",
    image: "https://placehold.co/100x100/16a34a/fff?text=RG",
  },
];

const PartnersTestimonials: React.FC = () => {
  return (
    <><div className="text-center mb-12 bg-green-50 p-12">
          <p className="text-sm text-gray-500 mb-2">Home &gt; <span className='ml-2 text-primary'>Testimonials</span></p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Testimonials
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We..</p>
        </div>
    <div className="min-h-screen p-16">
      <div className="max-w-7xl mx-auto">
        {/* Main heading section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            What Our Partners Say About
          </h2>
          <h1 className="text-3xl md:text-3xl font-bold text-primary mt-2">
            GardenSewa
          </h1>
        </div>

        {/* Testimonial grid container */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
          {testimonials.map((testimonial, index) => (
            // Individual testimonial card
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-2xl border-2 border-accent shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              {/* Profile image */}
              <div className="relative w-34 h-34 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full object-cover w-full h-full shadow-lg"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-dark">
                {testimonial.name}
              </h3>

              {/* Quote section */}
              <div className="text-center text-gray-600">
                
                <p className="text-md text-light text-left p-4">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default PartnersTestimonials;
