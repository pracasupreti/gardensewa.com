"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { ChevronRight, ChevronDown, RotateCcw } from "lucide-react";



// Plant interface
interface Plant {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

// PlantCard component
const PlantCard: React.FC<Plant> = ({ name, image, description, price }) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col items-center">
    <Image src={image} alt={name} width={150} height={150} className="rounded-md object-cover" />
    <h2 className="mt-2 text-lg font-semibold">{name}</h2>
    <p className="text-sm text-gray-600">{description}</p>
    <span className="mt-2 text-primary font-bold">{price}</span>
  </div>
);

// PlantFilter component (basic placeholder, replace with your actual implementation)
interface PlantFilterProps {
  onFilterChange: (filters: any) => void;
  onApply: (filters: any) => void;
  onClear: (filters: any) => void;
}

const PlantFilter: React.FC<PlantFilterProps> = ({ onFilterChange, onApply, onClear }) => (
  <div className="flex gap-4 items-center justify-center py-4">
    <button
      className="bg-primary text-white px-4 py-2 rounded"
      onClick={() => onApply({})}
    >
      Apply
    </button>
    <button
      className="bg-gray-200 text-black px-4 py-2 rounded"
      onClick={() => onClear({})}
    >
      Clear
    </button>
  </div>
);

const plants = [
  // Example plant objects; replace with your actual data or fetch from API
  {
    id: 1,
    name: "Snake Plant",
    image: "/image/plants/snake-plant.png",
    description: "Easy to care for indoor plant.",
    price: "Rs. 500"
  },
  {
    id: 2,
    name: "Peace Lily",
    image: "/image/plants/peace-lily.png",
    description: "Beautiful flowering indoor plant.",
    price: "Rs. 700"
  }
  // Add more plant objects as needed
];

function Products() {
  return (
    <>
      <Head>
        <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa" />
        <meta property="og:url" content="https://www.gardensewa.com/" />
        <meta property="og:title" content="Gardening Services in Nepal" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
        <meta property="og:image" content="/images/og/plants.jpg" />
        <meta property="og:image:alt" content="Gardening Services in Nepal" />
      </Head>

      {/* Hero Section */}
      <section className="products mb-30 flex flex-col gap-5 rounded-b-2xl">
        <div className="relative w-full h-[511px]">
          <img
            src={"/image/plants/1.png"}
            className="w-full h-full object-cover rounded-b-2xl"
            alt="Hero Background"
          />
          <div className="absolute inset-1 flex flex-col items-center justify-center text-center text-white px-4 gap-12">
            <div className="w-[900px] flex flex-col gap-12">
              <div className="mb-4 text-sm">
                <span className="flex items-center justify-center text-light-body text-base">
                  Home <ChevronRight width={20} height={20} />
                  <span className="text-primary ml-2 font-semibold">About Us</span>
                </span>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-secondary">
                  Discover Plants That Fit Your Space
                </h1>
                <p className="mt-2 text-base text-secondary">
                  Indoor, Outdoor, Flowering, Medicinal & More
                </p>
              </div>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  className="w-full bg-white rounded-full h-10 text-black pl-10 pr-4"
                  placeholder="Search for Rare, Popular, Outdoor and Indoor Plants"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <PlantFilter
        onFilterChange={(filters: any) => console.log("Filter changed:", filters)}
        onApply={(filters: any) => console.log("Apply clicked:", filters)}
        onClear={(filters: any) => console.log("Filters cleared:", filters)}
      />

      {/* Products Grid */}
      <div className="container mx-auto py-16">
        <div className="flex gap-6 mx-auto items-center justify-center flex-wrap">
          {plants.map((plant, key) => (
            <PlantCard key={key} {...plant} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
