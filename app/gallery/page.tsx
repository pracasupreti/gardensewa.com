"use client";
import React, { useState } from "react";
import Image from "next/image";

// Gallery data arrays
const trainings = [
  { id: "1", img: "/image/gallery/gardensewa1.jpg" },
  { id: "2", img: "/image/gallery/gardensewa2.jpg" },
  { id: "3", img: "/image//gallery/gardensewa3.jpg" },
  { id: "4", img: "/image//gallery/gardensewa4.jpg" },
  { id: "5", img: "/image//gallery/gardensewa5.jpg" },
  { id: "6", img: "/image//gallery/gardensewa6.jpg" },
  { id: "7", img: "/image//gallery/gardensewa7.jpg" },
  { id: "1", img: "/image/gallery/gardensewa8.jpg" },
  { id: "2", img: "/image/gallery/gardensewa9.jpg" },
  { id: "3", img: "/image//gallery/gardensewa10.jpg" },
  { id: "4", img: "/image//gallery/gardensewa11.jpg" },
  { id: "5", img: "/image//gallery/gardensewa12.jpg" },
  { id: "6", img: "/image//gallery/gardensewa13.jpg" },
  { id: "7", img: "/image//gallery/gardensewa14.jpg" },
  { id: "1", img: "/image/gallery/gardensewa15.jpg" },
  { id: "2", img: "/image/gallery/gardensewa16.jpg" },
  { id: "3", img: "/image//gallery/gardensewa17.jpg" },
  { id: "4", img: "/image//gallery/gardensewa18.jpg" },
  { id: "5", img: "/image//gallery/gardensewa19.jpg" },
  { id: "6", img: "/image//gallery/gardensewa20.jpg" },
];
const field = [
  { id: "7", img: "/image//gallery/gardensewa21.jpg" },
  { id: "22", img: "/image/gallery/gardensewa22.jpg" },
  { id: "23", img: "/image/gallery/gardensewa23.jpg" },
  { id: "24", img: "/image/gallery/gardensewa24.jpg" },
  { id: "25", img: "/image/gallery/gardensewa25.jpg" },
  { id: "26", img: "/image/gallery/gardensewa26.jpg" },
  { id: "27", img: "/image/gallery/gardensewa27.jpg" },
  { id: "28", img: "/image/gallery/gardensewa28.jpg" },
  { id: "29", img: "/image/gallery/gardensewa29.jpg" },
  { id: "30", img: "/image/gallery/gardensewa30.jpg" },
  { id: "31", img: "/image/gallery/gardensewa31.jpg" },
  { id: "32", img: "/image/gallery/gardensewa32.jpg" },
  { id: "33", img: "/image/gallery/gardensewa33.jpg" },
  { id: "34", img: "/image/gallery/gardensewa34.jpg" },
  { id: "35", img: "/image/gallery/gardensewa35.jpg" },
  { id: "36", img: "/image/gallery/gardensewa36.jpg" },
  { id: "37", img: "/image/gallery/gardensewa37.jpg" },
  { id: "38", img: "/image/gallery/gardensewa38.jpg" },
    { id: "39", img: "/image/gallery/gardensewa39.jpg" },
  { id: "40", img: "/image/gallery/gardensewa40.jpg" },
];
const events = [

  { id: "41", img: "/image/gallery/gardensewa41.jpg" },
  { id: "42", img: "/image/gallery/gardensewa42.jpg" },
  { id: "43", img: "/image/gallery/gardensewa43.jpg" },
  { id: "44", img: "/image/gallery/gardensewa44.jpg" },
  { id: "45", img: "/image/gallery/gardensewa45.jpg" },
  { id: "46", img: "/image/gallery/gardensewa46.jpg" },
  { id: "47", img: "/image/gallery/gardensewa47.jpg" },
  { id: "48", img: "/image/gallery/gardensewa48.jpg" },
  { id: "49", img: "/image/gallery/gardensewa49.jpg" },
  { id: "50", img: "/image/gallery/gardensewa50.jpg" },
  { id: "51", img: "/image/gallery/gardensewa51.jpg" },
  { id: "52", img: "/image/gallery/gardensewa52.jpg" },
  { id: "53", img: "/image/gallery/gardensewa53.jpg" },
  { id: "54", img: "/image/gallery/gardensewa54.jpg" },
  { id: "55", img: "/image/gallery/gardensewa55.jpg" },
  { id: "56", img: "/image/gallery/gardensewa56.jpg" },
  { id: "57", img: "/image/gallery/gardensewa57.jpg" },
  { id: "58", img: "/image/gallery/gardensewa58.jpg" },
  { id: "59", img: "/image/gallery/gardensewa59.jpg" },
  { id: "60", img: "/image/gallery/gardensewa60.jpg" },
  { id: "61", img: "/image/gallery/gardensewa61.jpg" },
  { id: "62", img: "/image/gallery/gardensewa62.jpg" },
  { id: "63", img: "/image/gallery/gardensewa63.jpg" },
  
  
];
const modern = [
{ id: "64", img: "/image/gallery/gardensewa64.jpg" },
{ id: "65", img: "/image/gallery/gardensewa65.jpg" },
{ id: "66", img: "/image/gallery/gardensewa66.jpg" },
{ id: "67", img: "/image/gallery/gardensewa67.jpg" },
{ id: "68", img: "/image/gallery/gardensewa68.jpg" },
{ id: "69", img: "/image/gallery/gardensewa69.jpg" },
{ id: "70", img: "/image/gallery/gardensewa70.jpg" },
{ id: "71", img: "/image/gallery/gardensewa71.jpg" },
{ id: "72", img: "/image/gallery/gardensewa72.jpg" },
{ id: "73", img: "/image/gallery/gardensewa73.jpg" },
{ id: "74", img: "/image/gallery/gardensewa74.jpg" },
{ id: "75", img: "/image/gallery/gardensewa75.jpg" },
{ id: "76", img: "/image/gallery/gardensewa76.jpg" },
{ id: "77", img: "/image/gallery/gardensewa77.jpg" },
{ id: "78", img: "/image/gallery/gardensewa78.jpg" },
{ id: "79", img: "/image/gallery/gardensewa79.jpg" },
{ id: "80", img: "/image/gallery/gardensewa80.jpg" },
{ id: "81", img: "/image/gallery/gardensewa81.jpg" },
{ id: "82", img: "/image/gallery/gardensewa82.jpg" },
{ id: "83", img: "/image/gallery/gardensewa83.jpg" },

               
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
