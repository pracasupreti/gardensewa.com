import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Still importing in case you want to add them back

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
    <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[417px] h-auto min-h-[280px] sm:min-h-[300px] md:min-h-[325px] flex flex-col justify-between border-2 border-[#F4F4F4] hover:shadow-lg transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="mb-3 sm:mb-4">
        <span className="text-2xl sm:text-3xl md:text-4xl text-primary font-serif font-bold leading-none">
          "
        </span>
      </div>

      {/* Comment */}
      <p className="text-body text-xs sm:text-sm md:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-grow">
        {comment}
      </p>

      {/* Avatar and User Info */}
      <div className="flex items-center mt-auto">
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-full"
            // Fallback in case the image fails to load
            onError={(e) =>
              (e.currentTarget.src =
                "https://placehold.co/48x48/000/FFF?text=P")
            }
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 truncate">{title}</p>
        </div>
      </div>
    </div>
  );
};

// Main Testimonials Section
const Testimonial: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center mb-12 sm:mb-20 md:mb-30">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-8 sm:mb-10 md:mb-12 leading-tight px-4">
          What Our Users Say
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center items-stretch">
          {/* Testimonial 1 */}
          <TestimonialCard
            name="Ramesh Sharma"
            title="Hilton Hotel"
            comment="I contacted GardenSewa to manage my home garden, and I am very satisfied with their work. They cleaned everything, planted new flowers, and even gave tips on how to take care of plants. Now, my small garden looks very beautiful and well maintained."
            imageAlt="Ramesh Sharma"
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

        {/* Mobile scroll hint - only visible on mobile */}
        <div className="flex md:hidden justify-center mt-6 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
            <span>Scroll to see all testimonials</span>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
