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
    <div className="bg-white rounded-2xl p-8 w-[380px] h-auto flex flex-col gap-3 justify-between border-2 border-[#F4F4F4] hover:shadow-lg transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="mb-3 sm:mb-4">
        <span className="text-4xl text-primary font-serif font-bold leading-none">
          "
        </span>
      </div>

      {/* Comment */}
      <p className="text-body text-sm leading-relaxed flex-grow">{comment}</p>

      {/* Avatar and User Info */}
      <div className="flex items-center mt-auto">
        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center mb-30">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-8 sm:mb-10 md:mb-12 leading-tight px-4">
          Testimonials
        </h2>

        {/* Responsive Grid */}
        <div className="flex flex-wrap gap-6 items-center justify-center ">
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
      </div>
    </div>
  );
};

export default Testimonial;
