import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Lawn Care",
    description: `
Keep your lawn lush, healthy, and well-manicured with our expert lawn care services. From regular mowing and precise edge trimming to thorough weeding and aeration, we ensure your turf gets the attention it deserves. Our fertilization and soil conditioning techniques enhance soil health, while lawn reseeding fills in patchy areas for a vibrant, even green. Trust us to give your outdoor space a fresh, polished look all year round.
    `,
    image: "/image/navbar/services/lawnmain.webp",
    imageRight: true,
  },
  {
    title: "Landscaping Services",
    description: `
Enhance the beauty and functionality of your outdoor space with our expert landscaping services. We offer customized solutions including garden design, lawn installation, stone pathways, plant selection, and decorative features to suit your personal style and space. Whether you’re looking to create a peaceful garden retreat, a stylish patio area, or a lush green lawn, our skilled team ensures every detail is thoughtfully crafted. Let us bring your landscape vision to life and boost the overall appeal and value of your property.
    `,
    image: "/image/navbar/services/garden.jpg",
    imageRight: false,
  },
  {
    title: "Turfing Services",
    description: `Achieve a picture-perfect lawn with GardenSewa’s professional turfing services. We take care of the entire process—from clearing and leveling the ground to installing fresh, healthy turf that’s well-suited to Nepal’s diverse climates. Whether you want to upgrade your backyard, school ground, resort lawn, or office frontage, our team ensures proper drainage, soil preparation, and seamless turf laying for long-lasting results. With our expert care, your outdoor area quickly transforms into a soft, green carpet that adds comfort, beauty, and value to your space.
    `,
    image: "/image/navbar/services/planting.webp",
    imageRight: true,
  },
  {
    title: "Gardening Makeovers",
    description: `
Give your outdoor space a refreshing transformation with GardenSewa’s customized gardening makeovers. We assess your existing garden and bring it back to life with well-planned layouts, improved soil quality, curated plant selections, and creative design touches—from vertical features and decorative paths to eco-friendly accents. Whether you're working with a tiny balcony or a full backyard, our makeovers are tailored to match your taste, needs, and lifestyle. The result is a functional, beautiful garden that enhances your home environment and brings year-round greenery and joy.


    `,
    image: "/image/navbar/services/pesecontrol.jpg",
    imageRight: false,
  },
  {
    title: "Irrigation Services",
    description: `
Keep your garden healthy and thriving with GardenSewa’s smart irrigation solutions. From drip systems for precision watering to automated sprinklers for larger lawns, we design and install systems that suit your space, soil, and plant types. Our efficient setups help conserve water while ensuring your plants get just the right amount of moisture—especially during Nepal’s dry months. Say goodbye to manual watering and enjoy a greener, more sustainable garden all year round.
    `,
    image: "/image/navbar/services/irrigation.webp",
    imageRight: true,
  },
  {
    title: "Soil Improvement",
    description: `
Healthy soil is the secret to a flourishing garden. Our soil improvement services focus on testing, enriching, and balancing your soil using organic compost, vermicompost, and biofertilizers tailored to Nepali soil conditions. Whether your soil is too sandy, compacted, or nutrient-poor, we work to restore its texture, moisture retention, and fertility—giving your plants the perfect foundation to grow stronger and healthier.
    `,
    image: "/image/navbar/services/soil.jpg",
    imageRight: false,
  },
  {
    title: "Hardscaping",
    description: `
Define your garden’s structure and style with our hardscaping services. From stone walkways and retaining walls to patios, edging, and garden borders, we combine function and beauty to shape your outdoor space. Using quality materials that complement your garden’s natural elements, GardenSewa creates long-lasting hardscape features that not only look stunning but also help manage slopes, drainage, and traffic flow in your yard.
    `,
    image: "/image/navbar/services/hscaping.jpg",
    imageRight: true,
  },
  {
    title: "Seasonal Services",
    description: `
Each season brings unique gardening needs, and we’re here to support you through them all. GardenSewa’s seasonal services include planting and pruning in spring, monsoon-proofing and pest control in summer, cleanup and mulching in autumn, and protective care for winter. Whether it’s preparing your garden for a festival or refreshing it after heavy rains, our team ensures it stays vibrant and ready throughout the year.
    `,
    image: "/image/navbar/services/seasonal.jpeg",
    imageRight: false,
  },
  {
    title: "Landscape Design",
    description: `
Turn your outdoor vision into reality with GardenSewa’s expert landscape design services. We collaborate with you to create personalized garden layouts that reflect your style, space, and climate. From plant selection and lighting plans to functional zones like seating areas or water features, every element is designed to harmonize aesthetics and practicality. Whether you dream of a serene retreat or a lively family garden, we craft landscapes that are both beautiful and sustainable.


    `,
    image: "/image/navbar/services/landscape.jpg",
    imageRight: true,
  },
];
const nursery = [
  {
    title: "Plant Sales",
    description: `
Explore a diverse selection of healthy, vibrant plants suited for every Nepali garden—from flowering shrubs and native trees to indoor foliage and seasonal favorites. GardenSewa carefully sources all plants to ensure high quality and adaptability to local climates, helping you bring life and color to your outdoor or indoor spaces with confidence.
    `,
    image: "/image/navbar/services/plantsales.jpg",
    imageRight: false,
  },
  {
    title: "Plant Propagation",
    description: `
Grow your garden sustainably with our expert plant propagation services. Using techniques like cuttings, grafting, and seed sowing, we multiply your favorite plants, preserving unique varieties and expanding your green collection. This service is perfect for gardeners wanting to nurture rare or heirloom plants while promoting eco-friendly gardening practices.
    `,
    image: "/image/navbar/services/plantpropagation.webp",
    imageRight: true,
  },
  {
    title: "Soil and Fertilizers",
    description: `
Boost your garden’s productivity with our range of nutrient-rich soils and organic fertilizers. GardenSewa offers customized soil mixes and biofertilizers designed to improve texture, moisture retention, and nutrient availability. Our products support healthy root development and sustainable growth, tailored to Nepal’s varied agricultural regions.
    `,
    image: "/image/navbar/services/soilandfertilizers.jpg",
    imageRight: false,
  },
  {
    title: "Plant Care Products",
    description: `
Maintain vibrant, disease-free plants with our carefully selected plant care products. From natural pest repellents and organic fungicides to growth enhancers and soil conditioners, our range is safe for both your garden and the environment. We provide solutions that help your plants thrive while minimizing chemical use.
    `,
    image: "/image/navbar/services/plantcare.webp",
    imageRight: true,
  },
  {
    title: "Garden Design Advice",
    description: `
Need help planning your dream garden? Our garden design advice service offers personalized recommendations based on your space, style, and goals. Whether you want to maximize a small balcony, create a family-friendly backyard, or start a kitchen garden, our experts guide you step-by-step to achieve a beautiful, functional garden.
    `,
    image: "/image/navbar/services/gardendesign.jpg",
    imageRight: false,
  },
  {
    title: "Delivery and Plant Installation",
    description: `
Enjoy hassle-free gardening with our reliable delivery and professional plant installation service. We safely transport your selected plants, pots, and accessories right to your doorstep and ensure proper planting and setup according to best horticultural practices. This service guarantees your garden starts off on the right foot with healthy, well-placed plants.
    `,
    image: "/image/navbar/services/delivery.jpeg",
    imageRight: true,
  },
  {
    title: "Workshops and Classes",
    description: `
Join our hands-on workshops and classes designed for gardeners of all skill levels. Learn essential gardening skills like pruning, propagation, composting, and pest management, all tailored to Nepal’s unique environment. These interactive sessions empower you with knowledge and confidence to nurture your own green spaces effectively.
    `,
    image: "/image/navbar/services/workshop.jpg",
    imageRight: false,
  },
  {
    title: "Landscape Supply",
    description: `
GardenSewa stocks a wide variety of premium landscaping materials including stones, mulches, edging, decorative gravel, and garden fabrics. Whether you’re constructing pathways, creating borders, or mulching beds, our quality supplies ensure your landscaping projects are durable, attractive, and easy to maintain.
    `,
    image: "/image/navbar/services/landscapesupply.jpg",
    imageRight: true,
  },
  {
    title: "Custom Orders",
    description: `
Looking for something special? We accept custom orders for rare plants, unique planters, garden furniture, or tailored garden accessories. Share your vision with us, and our team will source or create bespoke solutions to perfectly fit your garden’s theme and your personal preferences.
    `,
    image: "/image/navbar/services/customorders.jpg",
    imageRight: false,
  },
  {
    title: "Garden Consultation Services",
    description: `
Get expert advice tailored to your garden’s needs with our consultation services. Our horticulturists and landscape designers assess your space, soil, and climate to provide actionable recommendations for plant selection, pest control, irrigation, and design improvements. Whether starting fresh or troubleshooting, our consultations help you achieve a thriving garden.
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
                <p className="text-justify text-[16px] whitespace-pre-line">
                  {service.description.trim()}
                </p>
              </div>

              <div className="relative w-full max-w-[650px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl shadow-xl overflow-hidden mx-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 650px"
                  priority={index === 0}
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

              <div className="relative w-full max-w-[650px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl shadow-xl overflow-hidden mx-auto">
                <Image
                  src={nursery.image}
                  alt={nursery.title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 650px"
                  priority={index === 0}
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
