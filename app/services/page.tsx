import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Lawn Care",
    description: `
- Mowing the lawn
- Edge trimming and weeding
- Aerating soil
- Fertilization and soil conditioning
- Lawn reseeding
    `,
    image: "/image/navbar/services/lawnmain.webp",
    imageRight: true,
  },
  {
    title: "Garden Maintenance",
    description: `
- Weeding (removing unwanted plants)
- Pruning shrubs, trees, and flowers
- Deadheading flowers to encourage growth
- Mulching garden beds
    `,
    image: "/image/navbar/services/garden.jpg",
    imageRight: false,
  },
  {
    title: "Planting and Transplanting",
    description: `
- Planting flowers, shrubs, trees, or vegetables
- Transplanting plants from one area to another
- Seasonal planting (annuals, perennials)
    `,
    image: "/image/navbar/services/planting.webp",
    imageRight: true,
  },
  {
    title: "Pest and Disease Control",
    description: `
- Identifying garden pests (e.g., aphids, snails)
- Applying eco-friendly pesticides or natural treatments
- Managing garden diseases (e.g., fungus, blight)
    `,
    image: "/image/navbar/services/pesecontrol.jpg",
    imageRight: false,
  },
  {
    title: "Irrigation Services",
    description: `
- Installing and maintaining irrigation systems
- Checking for leaks or blockages in watering systems
- Adjusting water flow and timers
    `,
    image: "/image/navbar/services/irrigation.webp",
    imageRight: true,
  },
  {
    title: "Soil Improvement",
    description: `
- Soil testing and analysis
- Adding compost, organic fertilizers, or soil conditioners
- Preparing garden beds for planting
    `,
    image: "/image/navbar/services/soil.jpg",
    imageRight: false,
  },
  {
    title: "Hardscaping",
    description: `
- Building or repairing garden structures (e.g., paths, patios, walls)
- Installing decorative features like fountains or garden sculptures
    `,
    image: "/image/navbar/services/hscaping.jpg",
    imageRight: true,
  },
  {
    title: "Seasonal Services",
    description: `
- Fall cleanup (removing fallen leaves, cutting back perennials)
- Spring preparation (turning soil, prepping flower beds)
- Winterizing plants (protecting vulnerable plants from frost)
    `,
    image: "/image/navbar/services/seasonal.jpeg",
    imageRight: false,
  },
  {
    title: "Landscape Design",
    description: `
- Designing layouts for new gardens
- Advising on plant placement and color schemes
- Creating theme gardens (e.g., butterfly gardens, Zen gardens)
    `,
    image: "/image/navbar/services/landscape.jpg",
    imageRight: true,
  },
];
const nursery = [
  {
    title: "Plant Sales",
    description: `
- Selling a variety of plants (flowers, shrubs, trees, herbs, vegetables, and indoor plants)
- Offering rare or exotic plant species
- Offering seasonal plants (e.g., poinsettias for winter, hanging baskets in summer)
    `,
    image: "/image/navbar/services/plantsales.jpg",
    imageRight: false,
  },
  {
    title: "Plant Propagation",
    description: `
- Propagating plants from cuttings, seeds, or division
- Selling young plants or seedlings ready for planting
    `,
    image: "/image/navbar/services/plantpropagation.webp",
    imageRight: true,
  },
  {
    title: "Soil and Fertilizers",
    description: `
- Selling potting soil, compost, and garden fertilizers
- Offering specialized soil mixes for specific plants (e.g., cactus, orchids, or azaleas)
    `,
    image: "/image/navbar/services/soilandfertilizers.jpg",
    imageRight: false,
  },
  {
    title: "Plant Care Products",
    description: `
- Offering pest control solutions (organic and chemical)
- Selling plant food, growth enhancers, and plant protection products
    `,
    image: "/image/navbar/services/plantcare.webp",
    imageRight: true,
  },
  {
    title: "Garden Design Advice",
    description: `
- Providing consultations on plant selection and garden layout
- Offering guidance on creating specific types of gardens (e.g., vegetable, flower, or ornamental gardens)
    `,
    image: "/image/navbar/services/gardendesign.jpg",
    imageRight: false,
  },
  {
    title: "Delivery and Plant Installation",
    description: `
- Delivering plants to customers’ homes
- Offering plant installation services for larger plants or garden designs
    `,
    image: "/image/navbar/services/delivery.jpeg",
    imageRight: true,
  },
  {
    title: "Workshops and Classes",
    description: `
- Offering classes on plant care, gardening techniques, and landscaping
- Running workshops on organic gardening or container gardening
    `,
    image: "/image/navbar/services/workshop.jpg",
    imageRight: false,
  },
  {
    title: "Landscape Supply",
    description: `
- Selling hardscape materials like rocks, mulch, gravel, and pavers
- Offering garden tools and other landscaping essentials
    `,
    image: "/image/navbar/services/landscapesupply.jpg",
    imageRight: true,
  },
  {
    title: "Custom Orders",
    description: `
- Specializing in sourcing unique or hard-to-find plants for customers
- Creating custom plant arrangements (e.g., flower baskets, raised bed kits)
    `,
    image: "/image/navbar/services/customorders.jpg",
    imageRight: false,
  },
  {
    title: "Garden Consultation Services",
    description: `
- Providing professional consultation for garden planning and maintenance
- Helping customers create custom garden designs or plant collections based on their space and preferences
    `,
    image: "/image/navbar/services/gardenconsultation.jpg",
    imageRight: true,
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="services bg-[#f3f3f3]">
        <div className="container mx-auto max-w-[1200px] px-1 lg:px-0">
          <h1 className="text-center text-[45px] font-bold py-16 text-[#008000]">
            Services
          </h1>

          {services.map((service, index) => (
            <div
              key={index}
              className={`services-content flex flex-wrap ${
                service.imageRight
                  ? "flex-col md:flex-row"
                  : "flex-col-reverse md:flex-row-reverse"
              } justify-between items-center gap-y-6 pb-10 ${
                index !== 0 ? "mt-10" : ""
              } px-4 lg:px-0`}
            >
              <div className="service-text w-full lg:w-[500px]">
                <h2 className="text-[30px] font-bold text-[#008000] mb-5 font-serif">
                  {service.title}
                </h2>
                <p className="text-justify text-[18px] whitespace-pre-line">
                  {service.description.trim()}
                </p>
              </div>

              <div className="relative w-[650px] h-[400px] rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="services bg-[#f3f3f3]">
        <div className="container mx-auto max-w-[1200px] px-1 lg:px-0">
          <h1 className="text-center text-[45px] font-bold py-16 text-[#008000]">
            Nursery Owner Services
          </h1>

          {nursery.map((nursery, index) => (
            <div
              key={index}
              className={`services-content flex flex-wrap ${
                nursery.imageRight
                  ? "flex-col md:flex-row"
                  : "flex-col-reverse md:flex-row-reverse"
              } justify-between items-center gap-y-6 pb-10 ${
                index !== 0 ? "mt-10" : ""
              } px-4 lg:px-0`}
            >
              <div className="nursery-text w-full lg:w-[500px]">
                <h2 className="text-[30px] font-bold text-[#008000] mb-5 font-serif">
                  {nursery.title}
                </h2>
                <p className="text-justify text-[18px] whitespace-pre-line">
                  {nursery.description.trim()}
                </p>
              </div>

              <div className="relative w-[650px] h-[400px] rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src={nursery.image}
                  alt={nursery.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
