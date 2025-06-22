"use client";
import React, { useState } from "react";
import Image from "next/image";

// Gallery data arrays
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

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const openModal = (img: string) => {
    setSelectedImg(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImg("");
    setShowModal(false);
  };

  const renderGallery = (
    title: string,
    id: string,
    data: { id: string; img: string }[]
  ) => (
    <section id={id} className="bg-[#f3f3f3] px-2 lg:px-0">
      <h2 className="text-[40px] font-thin text-center text-[#008000] py-10 font-serif">
        {title}
      </h2>
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16 p-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-[300px] p-4 border border-gray-200 rounded-md cursor-pointer"
              onClick={() => openModal(item.img)}
            >
              <Image
                src={item.img}
                alt="Gallery"
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {/* Top Navigation */}
      <section className="bg-[#f3f3f3]">
        <h1 className="text-[45px] font-bold text-center text-[#008000] py-10">
          Gallery
        </h1>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 px-2 lg:px-0 gap-4 justify-between py-6">
            <a
              href="#training"
              className="bg-gray-300 text-green-700 rounded-lg px-4 py-2 shadow text-center"
            >
              Training
            </a>
            <a
              href="#field"
              className="bg-gray-300 text-green-700 rounded-lg px-4 py-2 shadow text-center"
            >
              Field Visit
            </a>
            <a
              href="#events"
              className="bg-gray-300 text-green-700 rounded-lg px-4 py-2 shadow text-center"
            >
              Events / Programs
            </a>
            <a
              href="#modern"
              className="bg-gray-300 text-green-700 rounded-lg px-4 py-2 shadow text-center"
            >
              Modern Farming
            </a>
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
        </div>
      </section>

      {/* Gallery Sections */}
      {renderGallery("Training", "training", trainings)}
      {renderGallery("Field Visit", "field", field)}
      {renderGallery("Events / Programs", "events", events)}
      {renderGallery("Modern Farming", "modern", modern)}

      {/* Modal Lightbox */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative w-[90vw] max-w-3xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImg}
              alt="Full View"
              fill
              className="object-contain rounded-md"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
