"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const heroimage = [
  {
    id: 1,
    img: "/image/home/slider-image/gardenslider1.webp",
    alt: "sliderimg1",
    title: "Welcome to GardenSewa",
    subtitle:
      "Growing green, growing together. From garden cleaning to plant shopping, we make your outdoors bloom.",
  },
  {
    id: 2,
    img: "/image/home/slider-image/gardenslider2.webp",
    alt: "sliderimg2",
    title: "Welcome to GardenSewa",
    subtitle:
      "Growing green, growing together. From garden cleaning to plant shopping, we make your outdoors bloom.",
  },
  {
    id: 3,
    img: "/image/home/slider-image/gardenslider3.jpg",
    alt: "sliderimg3",
    title: "Welcome to GardenSewa",
    subtitle:
      "Growing green, growing together. From garden cleaning to plant shopping, we make your outdoors bloom.",
  },
  {
    id: 4,
    img: "/image/home/slider-image/3main.jpg",
    alt: "sliderimg4",
    title: "Welcome to GardenSewa",
    subtitle:
      "Growing green, growing together. From garden cleaning to plant shopping, we make your outdoors bloom.",
  },
];

export default function HomeHero() {
  return (
    <section className="home-hero relative">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
      >
        {heroimage.map((a) => (
          <SwiperSlide key={a.id} className="relative">
            {/* Background Image */}
            <div className="relative w-full h-[600px]">
              <Image
                src={a.img}
                alt={a.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Left gradient overlay */}
              <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
            </div>

            {/* Text Container */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
              <div className="container max-w-[1250px] mx-auto px-4 md:px-6">
                <div className="text-white max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {a.title}
                  </h2>
                  <p className="text-sm md:text-lg font-light mb-6">
                    {a.subtitle}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-primary text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-secondary transition">
                      Read More
                    </button>
                    <button className="text-white border border-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                      Explore Plants
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination Dots Custom Position */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
          text-align: center;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #444;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

