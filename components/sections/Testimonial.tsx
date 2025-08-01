import type { NextPage } from 'next';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// Testimonial Card Props
interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  imageAlt: string;
  imageSrc: string;
  avatarPosition: 'top' | 'bottom';
}

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  comment,
  imageAlt,
  imageSrc,
  avatarPosition,
}) => {
  const renderStars = () => (
    <div className="flex items-center text-yellow-500 text-xs">
      {Array.from({ length: 5 }).map((_, index) =>
        index < rating ? (
          <AiFillStar key={index} />
        ) : (
          <AiOutlineStar key={index} className="text-gray-300" />
        )
      )}
    </div>
  );

  const avatarSection = (
    <div className="flex items-center mb-4">
      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={40}
          width={40}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
        {renderStars()}
      </div>
    </div>
  );

  // Increased pointer size to 24px
  const speechBubbleClasses = `
    relative bg-green-50 rounded-2xl p-6 shadow-md w-full max-w-md mx-auto
    ${avatarPosition === 'top' ? 'mt-4' : 'mb-4'}

    after:absolute after:border-solid after:border-[24px] after:left-1/2 after:-translate-x-1/2

    ${avatarPosition === 'top'
      ? 'after:border-b-green-50 after:border-l-transparent after:border-r-transparent after:border-t-transparent after:top-[-47px]'
      : 'after:border-t-green-50 after:border-l-transparent after:border-r-transparent after:border-b-transparent after:bottom-[-47px]'
    }
  `;

  return (
    <div className="flex flex-col items-center">
      {avatarPosition === 'top' && avatarSection}
      <div className={speechBubbleClasses}>
        <p className="text-primary text-base leading-relaxed">{comment}</p>
      </div>
      {avatarPosition === 'bottom' && avatarSection}
    </div>
  );
};

// Main Testimonials Section
const Testimonial: NextPage = () => {
  return (
    <div className="bg-white py-16 font-['Inter']">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          What Our Users Says
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-start">
          {/* Brooklyn Simmons – Avatar Top */}
          <div className="flex justify-center">
            <TestimonialCard
              name="Brooklyn Simmons"
              rating={3}
              comment="Honestly, searching for plants with the filters was super easy and fun! The cute icons made everything feel friendly and welcoming. It honestly made me so happy to find the perfect plant without any stress."
              imageAlt="Brooklyn Simmons"
              imageSrc="/icons/account - icon.svg"
              avatarPosition="top"
            />
          </div>

          {/* Wade Warren – Avatar Bottom */}
          <div className="flex justify-center mt-20">
            <TestimonialCard
              name="Wade Warren"
              rating={4}
              comment="Didn't expect hiring a gardener online to be this easy. Found one in just a few minutes, and the booking went smoothly. The guy showed up on time and knew what he was doing. Being able to check profiles really helped me choose the right person."
              imageAlt="Wade Warren"
              imageSrc="/icons/account - icon.svg"
              avatarPosition="bottom"
            />
          </div>

          {/* Leslie Alexander – Avatar Top */}
          <div className="flex justify-center">
            <TestimonialCard
              name="Leslie Alexander"
              rating={4}
              comment="As someone new to gardening, this site has been a huge help in managing and selling my plants. It's simple to use and really supports me every step of the way. I'm grateful for how easy it's made sharing my passion with others."
              imageAlt="Leslie Alexander"
              imageSrc="/icons/account - icon.svg"
              avatarPosition="top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
