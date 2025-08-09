import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // Still importing in case you want to add them back

// Testimonial Card Props
interface TestimonialCardProps {
  name: string;
  title: string;
  comment: string;
  imageAlt: string;
  imageSrc: string;
}

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  comment,
  imageAlt,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg max-w-sm w-full h-full flex flex-col justify-between">
      {/* Quote Icon */}
      <div className="mb-4">
        <span className="text-4xl text-primary font-serif font-bold leading-none">“</span>
      </div>

      {/* Comment */}
      <p className="text-gray-600 text-md leading-relaxed mb-6 flex-grow">
        {comment}
      </p>

      {/* Avatar and User Info */}
      <div className="flex items-center mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-full"
            // Fallback in case the image fails to load
            onError={(e) => (e.currentTarget.src = 'https://placehold.co/48x48/000/FFF?text=P')}
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

// Main Testimonials Section
const Testimonial: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen max-w-7xl mx-auto px-8 py-16 font-['Inter'] flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-stretch">
          {/* Testimonial 1 */}
          <TestimonialCard
            name="Ramesh Sharma "
            title="Hilton Hotel"
            comment="I contacted GardenSewa to manage my home garden, and I am very satisfied with their work. They cleaned everything, planted new flowers, and even gave tips on how to take care of plants. Now, my small garden looks very beautiful and well maintained."
            imageAlt="Ramesh Sharma "
            imageSrc="/image/home/testimonials/Ramesh.png"
          />

          {/* Testimonial 2 */}
          <TestimonialCard
            name="Sujata Bhatkhal"
            title="Aloft Hotel"
            comment="We recently renovated our backyard with the help of GardenSewa. The team was very friendly, and they understood exactly what we wanted. They added fresh grass, some lovely plants, and proper lighting. It feels like a little resort now. Highly recommended!"
            imageAlt="Sujata Bhatkhal"
            imageSrc="/image/home/testimonials/Sujata.png"
          />

          {/* Testimonial 3 */}
          <TestimonialCard
            name="Dipendra Lankil"
            title="Bajeko Sekuwa"
            comment="My front lawn was in very bad condition, full of weeds and dry patches. GardenSewa came and did turfing and regular lawn care. Within a few weeks, everything changed. The grass is green, and the area feels fresh again. Thank you for the excellent service!"
            imageAlt="Dipendra Lankil"
            imageSrc="/image/home/testimonials/Dipendra.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
