"use client";

import React from "react";
import Image from "next/image";

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
    name: "PRARAMVA TRICHODERMA (trichodermaviride) - 1KG",
    price: "NPR 350",
    img: "/image/home/products/9.jpeg",
  },
  {
    id: 10,
    name: "Super AcroBAT Fungicide - 100GM",
    price: "NPR 350",
    img: "/image/home/products/10.jpeg",
  },
  {
    id: 11,
    name: "Bullet 505 Insecticide - 100 ML",
    price: "NPR 140",
    img: "/image/home/products/11.jpeg",
  },
  {
    id: 12,
    name: "Grow plus, Plant booster",
    price: "NPR 200",
    img: "/image/home/products/12.jpeg",
  },
  {
    id: 13,
    name: "Secateur 8 deluxe prunner",
    price: "NPR 1350",
    img: "/image/home/products/13.jpeg",
  },
];

function Products() {
  return (
    <section className="products">
      <div className="container mx-auto max-w-[1200px] py-16">
        <h1 className="text-center font-bold text-[45px] text-[#008000] pb-16">
          Products
        </h1>
        <div className="product-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center px-4 lg:px-0 gap-6 gap-y-6">
          {products.map((product) => (
            <div className="image border border-gray-200 shadow-lg rounded-lg w-full h-[350px] overflow-hidden">
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
