import React from "react";

function Modernservice() {
  return (
    <section className="agricultureservice my-16">
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
              title: "Crop Advisory Service",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/2.png",
            },
            {
              title: "Pest and Disease Control",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/3.png",
            },
            {
              title: "Irrigation and Water Management",
              text: "Eum ratione earum qui amet quae suscipit, incidunt quasi, quia deserunt explicabo delectus non, consequuntur porro officiis aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga repudiandae optio aliquid excepturi non repellat.",
              img: "/image/home/top-services/services/agricultureservices/4.png",
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

export default Modernservice;
