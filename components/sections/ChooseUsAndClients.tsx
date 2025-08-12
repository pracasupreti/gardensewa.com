import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// FeatureCard props and component
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex w-full sm:w-[280px] md:w-[300px] h-auto min-h-[200px] sm:min-h-[220px] md:h-[248px] flex-col items-center p-4 sm:p-6 bg-[#D1F5CB] rounded-xl transition-shadow duration-300">
    <div className="bg-white p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[76px] md:h-[76px]">
      <img
        src={icon}
        className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px]"
      />
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-title mb-2 text-center">
      {title}
    </h3>
    <p className="text-center text-light-body text-sm sm:text-base">
      {description}
    </p>
  </div>
);

// Main Component
const ChooseUs: React.FC = () => {
  const features = [
    {
      icon: "/icons/shield.png",
      title: "Trusted Gardeners",
      description: "All gardeners are verified and experienced.",
    },
    {
      icon: "/icons/solaruser.png",
      title: "Expert Professionals",
      description: "Garden landscaping and design services in Nepal",
    },
    {
      icon: "/icons/Vector.png",
      title: "Hire a Gardener",
      description: "Hire a gardener for your home in Kathmandu",
    },
    {
      icon: "/icons/dig.png",
      title: "Landscapping",
      description: "Best Landscapping & Park Planner in Nepal ",
    },
  ];

  const clients = [
    {
      image: "/image/home/client/soaltee.png",
      name: "Bajeko Sekuwa",
      text: "Alfot Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture right in the heart of Thamel...",
      link: "https://www.bajekosekuwa.com/",
    },
    {
      image: "/image/home/client/british.png",
      name: "British Embassy Kathmandu",
      text: "Alfot Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture right in the heart of Thamel...",
      link: "https://www.gov.uk/world/organisations/british-embassy-kathmandu",
    },
    {
      image: "/image/home/client/bajekosekuwa.png",
      name: "Aloft",
      text: "Alfot Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture right in the heart of Thamel...",
      link: "https://www.marriott.com/en-us/hotels/ktmal-aloft-kathmandu-thamel/overview/?nst=paid&cid=PAI_GLB0004YFY_GLE000BHOR_GLF000OCGE&nst=paid&gclsrc=aw.ds&gad_source=1&gad_campaignid=22178666619&gbraid=0AAAAADilnidqVZJVxY377ZINfb9DlsduA&gclid=CjwKCAjw49vEBhAVEiwADnMbbB2ExULZAhvCxIRIOMKWNlEMTC0Sg2F8FSSBwc4FAzV_04N6yDk9qxoCpUIQAvD_BwE",
    },
    {
      image: "/image/home/client/aloft.png",
      name: "Yak & Yeti",
      text: "Alfot Kathmandu Thamel offers a unique blend of modern hospitality and authentic Nepali culture right in the heart of Thamel...",
      link: "https://www.yakandyeti.com/",
    },
  ];

  return (
    <div className="font-sans antialiased mt-4 w-full max-w-[1300px]">
      {/* Why Choose Us Section */}
      <section className="mx-auto mb-20 sm:mb-32 lg:mb-40">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[52px] font-bold text-secondary text-center mb-8 sm:mb-10 lg:mb-12 px-2">
          Why Choose Us?
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="mx-auto flex flex-col gap-6 mb-20 sm:mb-25">
        <h2 className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4">
          <div className="text-secondary font-bold text-xl sm:text-2xl lg:text-4xl">
            Our Clients
          </div>
          <a className="border border-secondary py-2 sm:py-2.5 px-4 sm:px-6 rounded-md flex items-center justify-center text-secondary text-base sm:text-lg gap-1.5 hover:bg-secondary hover:text-white transition-colors self-start sm:self-auto">
            View All <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <div
                key={index}
                className="bg-white border-[3px] border-[#C9EDC5] rounded-3xl p-4 sm:p-6 flex flex-col items-start text-left relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Logo - hidden on hover */}
                <div
                  className={`w-full flex justify-center mb-4 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-24 sm:h-28 md:h-32 w-auto object-contain"
                  />
                </div>

                {/* Original text - hidden on hover */}
                <p
                  className={`text-black text-xs sm:text-sm text-left leading-relaxed mt-4 mb-4 pb-2 flex-1 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                >
                  {client.text}
                </p>

                {/* Divider line - always visible */}
                <span className="border-t-2 border-t-card w-full p-2"></span>

                {/* Button - always in same position */}
                <a
                  href={client.link}
                  className="w-full bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] text-white font-semibold px-4 sm:px-6 py-3 rounded-lg hover:opacity-90 transition text-sm sm:text-base text-center relative z-10"
                >
                  Browse More
                </a>

                {/* Hover text content - positioned in the text area */}
                <div
                  className={`absolute left-4 sm:left-6 right-4 sm:right-6 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                    isHovered
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8"
                  }`}
                  style={{
                    bottom: "150px",
                  }}
                >
                  <div className="text-green-600 text-4xl sm:text-5xl font-bold leading-none mb-2">
                    "
                  </div>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    {client.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
