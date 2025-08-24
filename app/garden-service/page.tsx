import Head from "next/head";
import React from "react";

function Gardenservice() {
  return (
    <section className="agricultureservice my-16">
       <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
    </Head>
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h1 className="text-[36px] max-md:flex max-md:gap-2 sm:text-[45px] md:text-[60px] font-serif text-[#006800]">
              <p>Garden</p>
              <p>Service.</p>
            </h1>
          </div>

          {[
            {
              title: "SOIL TESTING AND FERTILITY MANAGEMENT",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/1.png",
            },
            {
              title: "Soil Health & Fertility Boosting",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/2.png",
            },
            {
              title: "Garden Plant Care & Advice",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/3.png",
            },
            {
              title: "Garden Tools & Equipment Rental",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/4.png",
            },
            {
              title: "Garden Market Linkage",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/5.png",
            },
            {
              title: "Urban Garden Research & Innovation",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/6.png",
            },
            {
              title: "Pest & Disease Protection",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/7.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative border-2 border-gray-400 rounded-md p-6 bg-white shadow hover:shadow-md transition flex flex-col"
            >
              <img
                className="absolute top-[-25px] left-6 bg-white w-auto px-3 h-[50px]"
                src={item.img}
                alt={item.title}
              />
              <div className="mt-8 flex flex-col h-full">
                <h5 className="font-semibold text-sm text-gray-700 uppercase">
                  {item.title}
                </h5>
                <p className="text-gray-500 text-sm mt-2 flex-grow">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gardenservice;
