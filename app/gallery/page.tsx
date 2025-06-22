"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// @ts-ignore
import { initLightboxJS } from "lightbox.js-react";
// @ts-ignore
const SlideshowLightbox = dynamic(
  () => import("lightbox.js-react").then((mod) => mod.SlideshowLightbox),
  { ssr: false }
) as any;
import Image from "next/image";

const trainings = [
  { id: "1", img: "/image/navbar/gallery/training/1.jpg" },
  { id: "2", img: "/image/navbar/gallery/training/6.jpg" },
  { id: "3", img: "/image/navbar/gallery/training/5.jpg" },
  { id: "4", img: "/image/navbar/gallery/training/4.jpg" },
  { id: "5", img: "/image/navbar/gallery/training/3.jpg" },
  { id: "6", img: "/image/navbar/gallery/training/2.jpg" },
  { id: "7", img: "/image/navbar/gallery/training/1.jpg" },
];

const field = [
  { id: "1", img: "/image/navbar/gallery/field-visit/11.jpg" },
  { id: "2", img: "/image/navbar/gallery/field-visit/10.jpg" },
  { id: "3", img: "/image/navbar/gallery/field-visit/9.jpg" },
  { id: "4", img: "/image/navbar/gallery/field-visit/8.jpg" },
  { id: "5", img: "/image/navbar/gallery/field-visit/7.jpg" },
  { id: "6", img: "/image/navbar/gallery/field-visit/6.jpg" },
  { id: "7", img: "/image/navbar/gallery/field-visit/5.jpg" },
  { id: "8", img: "/image/navbar/gallery/field-visit/4.jpg" },
  { id: "9", img: "/image/navbar/gallery/field-visit/3.jpg" },
  { id: "10", img: "/image/navbar/gallery/field-visit/2.jpg" },
  { id: "11", img: "/image/navbar/gallery/field-visit/1.jpg" },
];

const events = [
  { id: "1", img: "/image/navbar/gallery/events/9 (1).jpg" },
  { id: "2", img: "/image/navbar/gallery/events/8.jpg" },
  { id: "3", img: "/image/navbar/gallery/events/7.jpg" },
  { id: "4", img: "/image/navbar/gallery/events/6.jpg" },
  { id: "5", img: "/image/navbar/gallery/events/5.jpg" },
  { id: "6", img: "/image/navbar/gallery/events/4.jpg" },
  { id: "7", img: "/image/navbar/gallery/events/3.jpg" },
  { id: "8", img: "/image/navbar/gallery/events/2.jpg" },
  { id: "9", img: "/image/navbar/gallery/events/1.jpg" },
];

const modern = [
  { id: "1", img: "/image/navbar/gallery/modern-farmimg/11.jpg" },
  { id: "2", img: "/image/navbar/gallery/modern-farmimg/10.jpg" },
  { id: "3", img: "/image/navbar/gallery/modern-farmimg/9.jpg" },
  { id: "4", img: "/image/navbar/gallery/modern-farmimg/8.jpg" },
  { id: "5", img: "/image/navbar/gallery/modern-farmimg/7.jpg" },
  { id: "6", img: "/image/navbar/gallery/modern-farmimg/6.jpg" },
  { id: "7", img: "/image/navbar/gallery/modern-farmimg/5.jpg" },
  { id: "8", img: "/image/navbar/gallery/modern-farmimg/4.jpg" },
  { id: "9", img: "/image/navbar/gallery/modern-farmimg/3.jpg" },
  { id: "10", img: "/image/navbar/gallery/modern-farmimg/2.jpg" },
  { id: "11", img: "/image/navbar/gallery/modern-farmimg/1.jpg" },
];
const page = () => {
  useEffect(() => {
    initLightboxJS("", "fslightbox");
  }, []);
  return (
    <div>
      <section className="gallery bg-[#f3f3f3]">
        <h1 className="text-[45px] font-bold text-center text-[#008000] py-10">
          Gallery
        </h1>
        <div className="w-full h-[1px] bg-gray-200"></div>

        <div className="container mx-auto max-w-[1200px]">
          <div className="gallery-contents grid grid-cols-2 lg:grid-cols-4 px-2 lg:px-0 gap-y-4 gap-4 justify-between py-6">
            <a
              href="#training"
              className="content-title flex gap-2 text-[green] bg-[#d1d5db] shadow rounded-lg py-1 px-4 cursor-pointer"
            >
              <p className="lg:text-[20px] text-[18px] font-semibold">
                Training
              </p>
            </a>
            <a
              href="#field"
              className="content-title flex gap-2 text-[green] bg-[#d1d5db] shadow rounded-lg py-1 px-4 cursor-pointer"
            >
              <p className="lg:text-[20px] text-[18px] font-semibold">
                Field Visit
              </p>
            </a>
            <a
              href="#events"
              className="content-title flex gap-2 text-[green] bg-[#d1d5db] shadow rounded-lg py-1 px-4 cursor-pointer"
            >
              <p className="lg:text-[20px] text-[18px] font-semibold">
                Events / Programs
              </p>
            </a>
            <a
              href="#modern"
              className="content-title flex gap-2 text-[green] bg-[#d1d5db] shadow rounded-lg py-1 px-4 cursor-pointer"
            >
              <p className="lg:text-[20px] text-[18px] font-semibold">
                Modern Farming
              </p>
            </a>
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
        </div>
      </section>

      <section id="training" className="training bg-[#f3f3f3] px-2 lg:px-0 ">
        <h2 className="text-[40px] font-thin text-center text-[#008000] py-10 font-serif">
          Training
        </h2>
        <div className="container mx-auto max-w-[1200px]">
          <SlideshowLightbox className="gallery-image grid sm:grid-cols-2 lg:grid-cols-3 text-center items-center gap-y-6 gap-7 pb-16 p-4">
            {trainings.map((a) => (
              <img
                className="object-cover p-4 border border-gray-200 cursor-pointer w-full h-[300px] rounded-md"
                src={a.img}
                alt=""
              />
            ))}
          </SlideshowLightbox>
        </div>
      </section>

      <section id="field" className="field-visit bg-[#f3f3f3] px-2 lg:px-0">
        <h2 className="text-[40px] font-thin text-center text-[#008000] py-10 font-serif">
          Field Visit
        </h2>
        <div className="container mx-auto max-w-[1200px]">
          <SlideshowLightbox className="gallery-image grid sm:grid-cols-2 lg:grid-cols-3 text-center items-center gap-y-6 gap-7 pb-16 w-full p-4">
            {field.map((b) => (
              <img
                className="object-cover p-4 border border-gray-200 cursor-pointer w-full h-[300px] rounded-md"
                src={b.img}
                alt=""
              />
            ))}
          </SlideshowLightbox>
        </div>
      </section>

      <section id="events" className="event bg-[#f3f3f3] px-2 lg:px-0">
        <h2 className="text-[40px] font-thin text-center text-[#008000] py-10 font-serif">
          Events / Programs
        </h2>
        <div className="container mx-auto max-w-[1200px]">
          <SlideshowLightbox className="gallery-image grid sm:grid-cols-2 lg:grid-cols-3 text-center items-center gap-y-6 gap-7 pb-16 w-full p-4">
            {events.map((c) => (
              <img
                className="object-cover shadow p-4 border border-gray-200 cursor-pointer w-full h-[300px] rounded-md"
                src={c.img}
                alt=""
              />
            ))}
          </SlideshowLightbox>
        </div>
      </section>

      <section
        id="modern"
        className="mordern-farming bg-[#f3f3f3] px-2 lg:px-0"
      >
        <h2 className="text-[40px] font-thin text-center text-[#008000] py-10 font-serif">
          Modern Farming
        </h2>
        <div className="container mx-auto max-w-[1200px] pb-10">
          <SlideshowLightbox className="gallery-image grid sm:grid-cols-2 lg:grid-cols-3 text-center items-center gap-y-6 gap-7 pb-16 w-full p-4">
            {modern.map((d) => (
              <img
                className="object-cover border border-gray-200 shadow cursor-pointer w-full h-[300px] rounded-md p-4"
                src={d.img}
                alt=""
              />
            ))}
          </SlideshowLightbox>
        </div>
      </section>
    </div>
  );
};

export default page;
