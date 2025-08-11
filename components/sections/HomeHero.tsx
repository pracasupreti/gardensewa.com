"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    img: "/image/home/slider-image/Hero1.png",
    alt: "sliderimg1",
    title: "Gardening Services in Nepal ",
    subtitle:
      "Our team offers personalized gardening services from one time cleanups to regular maintenance, tailored to keep your garden fresh, vibrant, and well cared for.",
    button: "Read More",
    button2: "Explore Plants",
    button2link: "/plants",
  },
  {
    id: 2,
    img: "/image/home/slider-image/Hero2.png",
    alt: "sliderimg2",
    title: "Gardening Services for Hotels and Resorts in Nepal",
    subtitle:
      "We help hotels and resorts maintain inviting green spaces with plant care, landscaping, and seasonal upkeep that enhance guest experiences.",
    button: "Read More",
    button2: "Book a Service",
    button2link: "/book-a-service",
  },
  {
    id: 3,
    img: "/image/home/slider-image/Hero3.png",
    alt: "sliderimg3",
    title: "Green Companions for Every Home",
    subtitle:
      "Discover a variety of plants indoor, outdoor, air purifying, and more, delivered with care",
    button: "Read More",
    button2: "Explore Plants",
    button2link: "/plants",
  },
];

const HomeHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gradient-to-l from-[#1F1F1F] via-[#39393980] to-[#39393900]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.alt}
            className="object-cover w-full h-[600px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F] via-[#39393980] to-[#39393900] z-5 pointer-events-none"></div>
          {/* Text content */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
            <div className="container max-w-[1250px] mx-auto px-4 md:px-6">
              <div className="w-[611px]">
                <h2
                  className="text-3xl md:text-5xl font-bold mb-4 tiktok-sans drop-shadow-lg"
                  style={{ color: "#ffffff" }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-sm md:text-lg font-light mb-6 drop-shadow-md"
                  style={{ color: "#ffffff" }}
                >
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <button className="font-semibold px-6 py-2 md:px-8 md:py-3 rounded-lg transition bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] text-white">
                    {slide.button}
                  </button>
                  <Link href={slide.button2link}>
                    <button
                      className="font-semibold border px-6 py-2 md:px-8 md:py-3 rounded-lg transition"
                      style={{ color: "#ffffff", borderColor: "#ffffff" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--primary, #22c55e)";
                        e.currentTarget.style.borderColor =
                          "var(--primary, #22c55e)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = "#ffffff";
                      }}
                    >
                      {slide.button2}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots + Arrows Container */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center z-20 space-x-3">
        {/* Dots */}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
