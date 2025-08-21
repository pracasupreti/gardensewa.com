"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";

const products = [
  {
    id: 1,
    name: "Green & Grey Carbon Steel",
    price: "NPR 250",
    img: "/image/home/products/p1.jpg",
  },
  {
    id: 2,
    name: "Fiskars Bypass Pruning Shears",
    price: "NPR 1600",
    img: "/image/home/products/p2.jpg",
  },
  {
    id: 3,
    name: "Hori Hori Garden Knife",
    price: "NPR 510",
    img: "/image/home/products/p3m.jpg",
  },
  {
    id: 4,
    name: "Rocklin™ Lawn Leveling Rake",
    price: "NPR 425",
    img: "/image/home/products/p4.jpg",
  },
  {
    id: 5,
    name: "Fiskars Planting Soil Scoop",
    price: "NPR 50",
    img: "/image/home/products/p5.jpg",
  },
  {
    id: 6,
    name: "WORKPRO Weed Puller Tool",
    price: "NPR 410",
    img: "/image/home/products/p6.jpg",
  },
  {
    id: 7,
    name: "4 Roll Plant Ties Garden Tape",
    price: "NPR 1815",
    img: "/image/home/products/p7.jpg",
  },
  {
    id: 8,
    name: "WORKPRO 5PCS Garden Tool Set",
    price: "NPR 500",
    img: "/image/home/products/p8.jpg",
  },
  {
    id: 9,
    name: "Vermicompost Fertilizer",
    price: "NPR 300",
    img: "/images/home/products/9.webp",
  },
  {
    id: 10,
    name: "liquid-lawn-tonic",
    price: "NPR 250",
    img: "/images/home/products/10.webp",
  },
  {
    id: 11,
    name: "Neem Oil",
    price: "NPR 180",
    img: "/images/home/products/11.webp",
  },
  {
    id: 12,
    name: "liquid-biofertilizer",
    price: "NPR 220",
    img: "/images/home/products/12.webp",
  },
  {
    id: 13,
    name: "Heavy-Duty Garden Pruner",
    price: "NPR 1350",
    img: "/images/home/products/13.webp",
  },
];

function Products() {
  return (
    <section className="products">
       <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="/images/og/plants.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />

    </Head>
      <div className="container mx-auto max-w-[1200px] py-16">
        <h1 className="text-center font-bold text-[45px] text-[#008000] pb-16">
          Products
        </h1>
        <div className="product-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center px-4 lg:px-0 gap-6 gap-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="image p-6 border-gray-200 shadow-lg rounded-lg w-full h-[350px] overflow-hidden"
            >
              <div className="relative w-full h-[250px] shadow-sm rounded-t-md p-6 lg:p-0 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="title text-green-700 mx-2 font-medium my-2">
                <h5 className="text-base">{product.name}</h5>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
