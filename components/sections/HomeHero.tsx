"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    img: "/image/home/slider-image/Hero1.jpg",
    alt: "sliderimg1",
    title: "Welcome to GardenSewa",
    subtitle:
      "Growing green, growing together. From garden cleaning to plant shopping, we make your outdoors bloom.",
    button: "Read More",
    button2: "Explore Plants",
  },
  {
    id: 2,
    img: "/image/home/slider-image/Hero2.jpg",
    alt: "sliderimg2",
    title: "Tailored Gardening Services",
    subtitle:
      "From garden vleaning to private gardening, we offer realiable solutions that matches your outdoor needs.",
    button: "Read More",
    button2: "Book a Service",
  },
  {
    id: 3,
    img: "/image/home/slider-image/Hero3.jpg",
    alt: "sliderimg3",
    title: "Green Companions for Every Home",
    subtitle:
      "Discover a variety of plants indoor, outdoor, air purifying, and more, delivered with care",
    button: "Read More",
    button2: "Explore Plants",
  },
  {
    id: 4,
    img: "/image/home/slider-image/Hero4.jpg",
    alt: "sliderimg4",
    title: "Let's Grow Together",
    subtitle:
      "Book a service, ask a question, or just say hello! We're here to help your garden thrive.",
    button: "Read More",
    button2: "Contact Us",
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
    <div className="relative w-full h-screen pt-[80px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <img
            src={slide.img}
            alt={slide.alt}
            height={1080}
            width={1920}
            className="brightness-75 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none"></div>

          {/* Text content */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
            <div className="container max-w-[1250px] mx-auto px-4 md:px-6">
              <div className="text-white max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg font-light mb-6">
                  {slide.subtitle}
                </p>

                <div className="flex gap-4">
                  <button className="bg-primary text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-secondary transition">
                    {slide.button}
                  </button>
                  <button className="text-white font-semibold border border-white px-6 py-2 md:px-8 md:py-3 rounded-full  hover:bg-primary hover:text-white hover:border-0 transition">
                    {slide.button2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots + Arrows Container */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center bg-white/80 backdrop-blur-md px-4 py-0 rounded-full shadow-lg z-10 space-x-3">
        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="text-black text-[26px] font-bold hover:text-gray-700 p-1 rounded-full transition"
          aria-label="Previous Slide"
        >
          &#8249;
        </button>

        {/* Dots */}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-black"
              : "bg-gray-400 hover:bg-gray-600"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="text-black text-[26px] font-bold hover:text-gray-700 p-1 rounded-full transition"
          aria-label="Next Slide"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
