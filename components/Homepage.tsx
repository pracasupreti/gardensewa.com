// components/HeroSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const heroimage = [
  {
    id: 1,
    img: "/image/home/slider-image/1main.jpg",
    alt: "sliderimg1",
    title: "BEST SERVICES FOR GARDENING",
    title2: "Welcome to Gardensewa",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non hic cum aut vitae, dignissimos aliquid excepturi ipsum nostrum culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non hic cum aut vitae, dignissimos aliquid excepturi",
  },
  {
    id: 2,
    img: "/image/home/slider-image/2main.jpg",
    alt: "sliderimg2",
    title: "BEST SERVICES FOR GARDENING",
    title2: "Welcome to Gardensewa",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non hic cum aut vitae, dignissimos aliquid excepturi ipsum nostrum culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non hic cum aut vitae, dignissimos aliquid excepturi",
  },
  {
    id: 3,
    img: "/image/home/slider-image/3main.jpg",
    alt: "sliderimg3",
    title: "BEST SERVICES FOR GARDENING",
    title2: "Welcome to Gardensewa",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non hic cum aut vitae, dignissimos aliquid excepturi ipsum nostrum culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non hic cum aut vitae, dignissimos aliquid excepturi",
  },
  {
    id: 4,
    img: "/image/home/slider-image/4main.jpg",
    alt: "sliderimg4",
    title: "BEST SERVICES FOR GARDENING",
    title2: "Welcome to Gardensewa",
    subtitle: "Agriculture Consulting in Nepal.",
  },
];
const services = [
  {
    title: "Garden Cleaning",
    image: "/image/home/top-services/cleaning.webp",
    alt: "Garden Cleaning",
    href: "/garden-service",
  },
  {
    title: "Garden Training",
    image: "/image/home/top-services/indoor.webp",
    alt: "Garden Training",
    href: "/garden-training",
  },
  {
    title: "Private Garden",
    image: "/image/home/top-services/private.webp",
    alt: "Private Garden",
    href: "/modern-service",
  },
];
const clients = [
  { name: "Arju Rice Mill", src: "/image/home/client/1.jpg", rounded: false },
  { name: "IMS Agro", src: "/image/home/client/2.png", rounded: false },
  { name: "Sudhir Agrawal", src: "/image/home/client/3.png", rounded: false },
  {
    name: "Himalayan Big Bird",
    src: "/image/home/client/4.png",
    rounded: true,
  },
  { name: "Sai Agro Tech", src: "/image/home/client/5.png", rounded: true },
];
const goals = [
  {
    src: "/image/home/sustainable/1.png",
    href: "https://www.undp.org/sustainable-development-goals/no-poverty",
    alt: "No Poverty",
  },
  {
    src: "/image/home/sustainable/2.png",
    href: "https://www.undp.org/sustainable-development-goals/zero-hunger",
    alt: "Zero Hunger",
  },
  {
    src: "/image/home/sustainable/3.png",
    href: "https://www.undp.org/sustainable-development-goals/decent-work-and-economic-growth",
    alt: "Decent Work",
  },
  {
    src: "/image/home/sustainable/4.png",
    href: "https://www.undp.org/sustainable-development-goals/reduced-inequalities",
    alt: "Reduced Inequalities",
  },
  {
    src: "/image/home/sustainable/5.png",
    href: "https://www.undp.org/sustainable-development-goals/responsible-consumption-and-production",
    alt: "Responsible Consumption",
  },
  {
    src: "/image/home/sustainable/6.png",
    href: "https://www.undp.org/sustainable-development-goals/climate-action",
    alt: "Climate Action",
  },
  {
    src: "/image/home/sustainable/7.png",
    href: "https://www.undp.org/sustainable-development-goals/life-on-land",
    alt: "Life on Land",
  },
];
const featuredProducts = [
  {
    name: "Adenia Glaucia",
    tagline: "NPR 1200",
    src: "/image/home/featured/adenia.webp",
  },
  {
    name: "Quadricolor Century Plant",
    tagline: "NPR 1500",
    src: "/image/home/featured/agave.webp",
  },
  {
    name: "Variegated Snake Plant",
    tagline: "NPR 1600",
    src: "/image/home/featured/snake.webp",
  },
  {
    name: "Chaparral Yucca",
    tagline: "NPR 2000",
    src: "/image/home/featured/yuca.webp",
  },
];

const partners = [
  {
    name: "Nepal Agrocenter Pvt. Ltd.",
    src: "/image/home/partners/2.png",
    url: "https://dharmagroupnepal.com/",
    width: 200,
  },
  {
    name: "Locus Agriventures",
    src: "/image/home/partners/1.png",
    url: "https://locusagriventures.com/",
    width: 180,
  },
  {
    name: "Sriyog Consulting",
    src: "/image/home/partners/sriyog-consulting.svg",
    url: "https://sriyog.com/",
    width: 250,
  },
];
const videos = [
  {
    title: "How to Use a Rice Transplanter: Step-by-Step Guide.",
    description:
      "Please visit our YouTube channel to see more videos with tips.",
    src: "https://www.youtube.com/embed/PD-riaSBTQ8",
  },
  {
    title: "Boost Lemon Size with Expert Tips",
    description:
      "Please visit our YouTube channel to see more videos with tips.",
    src: "https://www.youtube.com/embed/L7ITgLsXB0w",
  },
];
const manureStages = [
  {
    title: "At transplanting",
    image: "/image/home/manure-uses/1.jpg",
    alt: "At transplanting",
    className: "h-[130px] md:mt-[210px]",
    info: [
      "D.A.P. 2-2.5 kg/Kattha",
      "Urea 0.5 kg/Kattha",
      "Potash 1.5 kg/Kattha",
      "Borax 5 kg/Bigha",
    ],
  },
  {
    title: "Atillering stage",
    image: "/image/home/manure-uses/2.jpg",
    alt: "Atillering stage",
    className: "h-[150px] md:mt-[182px]",
    info: ["Urea 2-2.5 kg/kattha"],
    note: "After 12-14 days of planting",
  },
  {
    title: "Active tillering stage",
    image: "/image/home/manure-uses/3.jpg",
    alt: "Active tillering stage",
    className: "h-[180px] md:mt-[157px]",
    info: ["Urea 2-2.5 kg/kattha", "Potash 1 kg/kattha"],
    note: "After 30-35 days of planting",
  },
  {
    title: "Booting stage",
    image: "/image/home/manure-uses/4.jpg",
    alt: "Booting stage",
    className: "md:h-[222px] md:mt-12",
    info: ["Spray NPK (0:52:34)"],
  },
  {
    title: "Grain formation stage",
    image: "/image/home/manure-uses/5.jpg",
    alt: "Grain formation stage",
    className: "md:h-[270px]",
    info: ["Spray NPK (0:0:50)"],
  },
];
const manureData = [
  {
    src: "/image/home/manure-uses/1.jpg",
    alt: "At transplanting",
    title: "At transplanting",
    details: [
      "D.A.P. 2-2.5 kg/Kattha",
      "Urea 0.5 kg/Kattha",
      "Potash 1.5 kg/Kattha",
      "Borax 5 kg/Bigha",
    ],
    imgClass:
      "w-[245px] max-md:w-full max-md:h-auto h-[130px] md:mt-[210px] mx-auto max-md:rounded-t-lg",
  },
  {
    src: "/image/home/manure-uses/2.jpg",
    alt: "At tillering stage",
    title: "Atillering stage",
    details: ["Urea 2-2.5 kg/kattha"],
    note: "After 12-14 days of planting",
    noteClass: "md:mt-10 text-[#008000] text-[15px]",
    imgClass:
      "w-[245px] h-[150px] max-md:w-full max-md:h-auto max-md:rounded-t-lg md:mt-[182px] mx-auto",
  },
  {
    src: "/image/home/manure-uses/3.jpg",
    alt: "Active tillering stage",
    title: "Active tillering stage",
    details: ["Urea 2-2.5 kg/kattha", "Potash 1 kg/kattha"],
    note: "After 30-35 days of planting",
    noteClass: "md:mt-5 text-[#008000] text-[15px]",
    imgClass:
      "w-[245px] max-md:w-full max-md:h-auto max-md:rounded-t-lg h-[180px] md:mt-[157px] mx-auto",
  },
  {
    src: "/image/home/manure-uses/4.jpg",
    alt: "Booting stage",
    title: "Booting stage",
    details: ["Spray NPK (0:52:34)"],
    imgClass:
      "md:w-[245px] w-full h-auto md:h-[222px] md:mt-12 max-md:rounded-t-lg mx-auto",
  },
  {
    src: "/image/home/manure-uses/5.jpg",
    alt: "Grain formation stage",
    title: "Grain formation stage",
    details: ["Spray NPK (0:0:50)"],
    imgClass:
      "md:w-[245px] w-full h-auto md:h-[270px] max-md:rounded-t-lg mx-auto",
  },
];
const updates = [
  {
    id: 1,
    img: "/image/home/latest-update/1.jpg",
    date: "21 March, 2025",
    paragraphs: [
      "किसानपेडियाको प्राबिधिक सहयोगमा परम्परागत कृषिलाई आधुनिक कृषि प्रबिधिद्वारा विस्थापन गर्दै रंगेली नगरपालिकाका ब्यबसायिक कृषकहरु",
      "#Promotingmodernfarming",
      "#Gardensewaclient",
      "#RICEFARMING",
    ],
  },
  {
    id: 2,
    img: "/image/home/latest-update/2.jpg",
    date: "5 January, 2025",
    paragraphs: [
      "कृषिप्रधान देश नेपालमा नेपाली किसानहरुले बर्षौ देखि भोग्दै आएका विविध समस्याहरु समाधान गर्दै आत्मनिर्भर कृषिको विकास गर्ने लक्ष्यका साथ संचालित किसानपेडिया सर्भिस प्रा.लि. ले कृषक, बजार ब्यबस्थापन, बैज्ञानिक प्रबिधिमैत्री कृषिलाई डिजिटल प्रविधि संग जोडन ई-कमर्स को उद्घाटन गरेको छ। र उक्त पोर्टलले आउने दिनमा किसानहरुलाई चाहिने सम्पूर्ण गुणस्तरीय कृषि सामग्रीहरु डिजिटलि उपलब्ध गराउनुको साथै कृषकहरुले उत्पादन गरेको कृषि उपजहरुको पनि उचित बजार ब्यबस्थापन गर्ने छ।",
    ],
  },
  {
    id: 3,
    img: "/image/home/latest-update/3.jpg",
    date: "4 March, 2025",
    paragraphs: [
      "उर्लाबारी र हसन्दहमा राखिएको चैते धानको बिउ रोप्नको लागि तयारी अवस्थामा पाईयो ,उक्त बिउहरु अबको एक हप्ता भित्र रोपी सक्ने किसानहरुले जानकारी गराएको छ। साथ साथै मोरंग हसन्दहको किसान नन्दन थापाको मकै बालीमा देखिएको फौजी किरा नियन्त्रण गर्नको लागि Automobile मर्मत केन्द्रमा पाउने ग्रिज़ (grease) को प्रयोग गर्न हामीले सुझाब दिएका थियौ। उक्त सुझाब अनुसार उहाँले प्रयोग गर्नुभएको ग्रिज़ले फौजी किरा नियन्त्रण भएको उहाँको भनाई छ।",
    ],
  },
];
const testimonials = [
  {
    id: 1,
    quote:
      "Gardensewa has significantly improved my farming business, and I strongly suggest their services to other farmers.",
    name: "Anu Poudel",
    location: "Biratnagar-3, Morang",
    img: "/image/home/testimonials/1.png",
  },
  {
    id: 2,
    quote:
      "Their expert advice on crop management and the timely sharing of technology has helped me increase my crop yield by 30%",
    name: "Ram Thapa",
    location: "Rangeli-1, Morang",
    img: "/image/home/testimonials/2.png",
  },
  {
    id: 3,
    quote:
      "Gardensewa's in-depth information and practical suggestions have changed our agricultural methods.",
    name: "Hemlal Adhikari",
    location: "Duhabi-7, Sunsari",
    img: "/image/home/testimonials/3.png",
  },
];
export default function HeroSlider() {
  return (
    <>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        {heroimage.map((a) => (
          <SwiperSlide key={a.id} className="relative">
            {/* Background Image */}
            <div className="relative w-full h-[600px]">
              <Image src={a.img} alt={a.alt} fill className="object-cover" />
            </div>

            {/* Text Container */}
            <div className="absolute top-1/2 w-full transform -translate-y-1/2">
              <div className="container max-w-[1250px] mx-auto px-2 md:px-5 text-center md:text-left text-white">
                <p className="text-sm md:text-base font-medium mb-2 uppercase tracking-widest">
                  {a.title}
                </p>
                <h2 className="text-2xl md:text-6xl font-bold leading-tight mb-4">
                  {a.title2}
                </h2>
                <p className="text-base md:text-lg font-normal max-w-xl mb-8">
                  {a.subtitle}
                </p>
                <button className="bg-white text-[#009000] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <section className="services my-16">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-0">
          <h1 className="py-6 text-center text-[32px] font-semibold text-[#008000]">
            Top Services
          </h1>

          <div className="services-content grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="cursor-pointer shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover h-[220px] w-full"
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={220}
                />
                <div className="flex justify-between items-center px-4 py-3">
                  <p className="text-[18px] font-medium">{service.title}</p>
                  <Link href={service.href}>
                    <div className="flex items-center gap-2 text-[13px] hover:text-green-600">
                      <p>Browse More</p>
                      <i className="fa-solid fa-arrow-right px-[2px] py-[1px]"></i>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="clients text-[green]">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-0 my-16">
          <h1 className="py-6 text-center text-[32px] font-semibold">
            Our Clients
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center gap-3 gap-y-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="clients-section shadow-xl w-full mx-auto max-h-[200px] justify-items-center items-center py-6 rounded-lg cursor-pointer "
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={80}
                  height={80}
                  className={`my-4 w-20 h-20 object-cover ${
                    client.rounded ? "rounded-full" : ""
                  }`}
                />
                <p className="font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text-green-600">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-0">
          <h2 className="py-6 text-center text-[32px] font-semibold">
            What We Do
          </h2>

          {/* === Products Section Title === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 mb-12 text-left">
            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              {/* Background Image with Zoom Effect */}
              <Image
                src="/image/navbar/services/garden.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Gardening Services
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              {/* Background Image with Zoom Effect */}
              <Image
                src="/image/navbar/services/hscaping.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Landscaping Services
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              {/* Background Image with Zoom Effect */}
              <Image
                src="/image/navbar/services/gardenconsultation.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Turfing Services
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              {/* Background Image with Zoom Effect */}
              <Image
                src="/image/navbar/services/gardendesign.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Gardening Makeovers
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>
          </div>

          {/* === Services Section Title === */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 text-left">
            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              <Image
                src="/image/navbar/services/plantsales.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Plants and Samplings
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              {/* Background Image with Zoom Effect */}
              <Image
                src="/image/navbar/services/plantsales.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Plants and Samplings
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              {/* Background Image with Zoom Effect */}
              <Image
                src="/image/navbar/services/plantsales.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Plants and Samplings
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>

            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs h-64">
              {/* Background Image with Zoom Effect */}
              <Image
                src="/image/navbar/services/plantsales.jpg"
                alt="Plants & Saplings"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay Blur + Color */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Content */}
              <div className="absolute bottom-20 left-0 right-0 px-6 text-[#009000] mb-30">
                <h4 className="text-xl font-semibold text-center text-white">
                  Plants and Samplings
                </h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-white">
                  Explore a wide variety of healthy plants and saplings perfect
                  for your home or farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-0 gap-y-6 my-16 py-10">
          <div className="featured-title flex justify-between">
            <h1 className="text-center text-[30px] font-semibold text-[rgb(0,128,0)]">
              New Arrivals
            </h1>
            <Link
              href="/products"
              className="hidden lg:block md:block px-6 bg-[#009000] hover:bg-green-800 font-semibold text-white py-2 rounded-lg text-[16px]"
            >
              View All Products
            </Link>
          </div>

          <div className="Contents text-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16 mt-5">
            {featuredProducts.map((product, index) => (
              <div key={index} className="features">
                <div className="mx-auto featured-content overflow-hidden w-full max-h-[300px] px-6 py-5 mb-5 rounded-lg">
                  <Image
                    src={product.src}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full bg-[#e5e7eb] rounded-lg"
                  />
                </div>
                <div className="text-gray-400 text-[15px]">
                  <p className=" font-semibold">{product.name}</p>
                  <p className="text-[13px]">{product.tagline}</p>
                </div>
              </div>
            ))}
            <Link
              href="/products"
              className="md:hidden lg:hidden block bg-[#009000] hover:bg-green-800 font-semibold text-white py-2 rounded-lg w-[200px] text-[16px] mx-auto"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partner">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-0 my-16">
          <h2 className="text-center my-10 text-[35px] font-semibold text-[green]">
            Our Partners
          </h2>

          <div className="partners-content grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center rounded-xl shadow-2xl p-6"
              >
                <div className="flex-grow flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={200}
                    height={200}
                    className="object-contain h-[150px] w-[200px]"
                  />
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-6">{partner.name}</p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 border-green-700 hover:border-gray-300 hover:bg-[#15803d] hover:text-white px-4 py-2 text-[15px] rounded-lg border-[1px] font-bold"
                  >
                    Browse More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="youtube">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-0 lg:max-w-[1100px] my-16">
          <h1 className="text-center py-8 text-[35px] font-semibold text-[green]">
            YouTube Video
          </h1>

          <div className="youtube-contents grid sm:grid-cols-1 md:grid-cols-2 items-center gap-y-6 justify-center gap-8 my-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="content rounded-lg w-full px-4 pt-4 bg-[#b1ceb5]"
              >
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    className="rounded-lg w-full h-full"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>

                <div className="text px-4 py-4">
                  <h5 className="text-[18px] font-semibold">{video.title}</h5>
                  <p className="my-2 text-[14px]">{video.description}</p>
                  <Link
                    href="https://www.youtube.com/@Gardensewa4489/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-[1px] border-green-700 text-green-700 hover:text-white px-6 hover:bg-green-700 text-[15px] py-1 rounded-lg mt-2 font-semibold">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="manure-uses">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-0 my-16">
          <h1 className="text-[35px] font-semibold text-center text-[green] max-md:mb-4">
            Use of Manure in Rice
          </h1>

          <div className="manure-content flex flex-col md:flex-row text-center items-center gap-y-6 gap-3">
            {manureData.map(
              ({ src, alt, title, details, note, noteClass, imgClass }, i) => (
                <div
                  key={i}
                  className="manure-contents w-[265px] max-md:w-full max-md:border py-2 max-md:py-0 max-md:rounded-lg"
                >
                  <div className="contents">
                    <Image
                      src={src}
                      alt={alt}
                      width={245}
                      height={270}
                      className={imgClass}
                      priority={true}
                    />
                    <div className="font text-center max-md:py-3">
                      <h5 className="font-semibold md:pt-4">{title}</h5>
                      {details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                      {note && <p className={noteClass}>{note}</p>}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="latest-update">
        <div className="container max-w-[1200px] px-4 lg:px-0 mx-auto items-center gap-y-6 my-10">
          <h1 className="text-center text-[35px] font-semibold py-5 my-5 text-[green]">
            Latest Updates
          </h1>

          <div className="updated-contents grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-y-6 justify-between gap-5">
            {updates.map((update) => (
              <div
                key={update.id}
                className="updated-content rounded-lg border border-gray-200 hover:shadow-lg w-full md:h-[500px] md:px-4 md:py-4 overflow-hidden"
              >
                <div className="relative w-full md:h-[200px]">
                  <Image
                    src={update.img}
                    alt={`Update ${update.id}`}
                    fill
                    className="object-cover md:rounded-lg"
                  />
                </div>
                <div className="max-md:p-3">
                  <p className="text-gray-400 text-[14px] my-4">
                    {update.date}
                  </p>
                  {update.paragraphs.map((text, idx) => (
                    <p
                      key={idx}
                      className={`text-[14px] text-gray-600 ${
                        idx === 0 ? "mb-1" : ""
                      } text-justify max-md:px-3 ${
                        idx === update.paragraphs.length - 1
                          ? "max-md:pb-3"
                          : ""
                      }`}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Testimonials">
        <div className="container max-w-[1200px] mx-auto px-6 lg:px-0 text-center items-center gap-y-6 my-16">
          <h1 className="my-5 pb-2 text-center text-[30px] font-bold text-[green]">
            Testimonials
          </h1>

          <div className="testimonials grid sm:grid-cols-2 lg:grid-cols-3 text-center items-center gap-y-6 gap-5">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-content w-full lg:h-[265px] border border-gray-200 px-3 lg:px-8 text-[15px] text-gray-500 py-6 lg:py-10 text-justify shadow-2xl rounded-xl overflow-hidden"
              >
                <p className="mb-4">"{testimonial.quote}"</p>

                <div className="profile flex-none lg:flex text-center lg:justify-start justify-center items-center lg:my-5 gap-5">
                  <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden mx-auto lg:mx-0">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="intro mt-3 lg:mt-0">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="lg:text-[12px]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
