import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className="about">
        <div className="container mx-auto max-w-[1200px]">
          <div className="about">
            <h1 className="text-center text-[45px] text-[#008000] font-bold mt-10">
              About Gardensewa
            </h1>
            <div className="flex justify-center">
              <Image
                src="/image/logo/gardensewa.png"
                width={100}
                height={100}
                alt="logo"
              />
            </div>
            <p className="text-center text-gray-700 mt-2 sm:mt-4 mb-8 md:mb-12 ">
              A contemporary garden center to meet all of your plant needs.
              Whether you’re looking to purchase indoor plants, outdoor plants,
              flowerpots, or any other nursery equipment, we have got you
              covered! Our mission is to lead the way to raise the horticulture
              standards in Nepal.
            </p>
          </div>
          <section className="pt-12 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                {/* Left Image Grid */}
                <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                  <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <div className="relative w-full h-84">
                      <Image
                        src="/image/navbar/about/garden1.webp"
                        alt="About Us"
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative w-full h-84">
                    <Image
                      src="/image/navbar/about/garden2.webp"
                      alt="About Us"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>

                {/* Right Text Content */}
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-[#009000] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        Helping You Grow the Garden You Love
                      </h2>
                      <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                        Every project we’ve worked on has been a shared journey
                        — from planting ideas to watching them bloom. Together
                        with our customers, we’ve grown not just gardens, but
                        meaningful relationships rooted in care, trust, and a
                        love for greenery. Whether it's a small balcony plant or
                        a full backyard transformation, we’re here to make every
                        space greener, one plant at a time.
                      </p>
                    </div>

                    {/* Stats Section */}
                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <h3 className="text-[#009000] text-4xl font-bold font-manrope leading-normal">
                          2+
                        </h3>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Years of Experience
                        </h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-[#009000] text-4xl font-bold font-manrope leading-normal">
                          15+
                        </h4>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Gardens Transformed
                        </h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-[#009000] text-4xl font-bold font-manrope leading-normal">
                          100+
                        </h4>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                          Happy Customers
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="sm:w-fit cursor-pointer w-full px-3.5 py-2 bg-[#009000] hover:bg-green-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="description px-4 lg:px-0">
            <h1 className="text-[35px] font-bold mt-16 py-5 text-[#008000]">
              Description of Products & Services
            </h1>
            <div className="w-full h-[1px] bg-gray-200"></div>

            <div className="description-content my-10 gap-y-5 text-justify">
              At GardenSewa, we provide everything you need to grow a thriving
              garden—whether it's a balcony, rooftop, or backyard. Our range
              includes premium organic soils, eco-friendly tools, stylish
              planters, and expert gardening accessories designed for Nepali
              homes. From sustainable fertilizers to space-saving solutions like
              vertical planters and raised beds, each product is selected to
              support healthy plants and greener lifestyles. Whether you're a
              beginner or a seasoned grower, GardenSewa is your trusted partner
              for affordable, beautiful, and eco-conscious gardening.
            </div>
          </div>
          <div className="container mx-auto max-w-[1200px] my-16 flex justify-center">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center items-center gap-y-6">
              <div className="w-[300px] text-justify pt-2 pb-5 px-5 rounded-3xl border border-gray-200 overflow-hidden shadow">
                <div className="relative w-[55px] h-[55px] rounded-lg bg-[#d1d5db] shadow p-2 my-5 overflow-hidden">
                  <Image
                    src="/image/navbar/about/mission.png"
                    alt="mission"
                    fill
                    className="object-contain"
                  />
                </div>
                <h5 className="font-semibold text-[20px] text-[#008000] py-2">
                  Mission
                </h5>
                <p>
                  Our goal is to provide quality plants and expert support that
                  help Nepal grow greener gardens and happier farmers.
                </p>
              </div>
              <div className="w-[300px] text-justify pt-2 pb-5 px-5 rounded-3xl border border-gray-200 overflow-hidden shadow">
                <div className="relative w-[55px] h-[55px] rounded-lg bg-[#d1d5db] shadow p-2 my-5 overflow-hidden">
                  <Image
                    src="/image/navbar/about/motive.png"
                    alt="mission"
                    fill
                    className="object-contain"
                  />
                </div>
                <h5 className="font-semibold text-[20px] text-[#008000] py-2">
                  Motive
                </h5>
                <p>
                  We aim to be the go-to place for all gardening needs, offering
                  easy access to plants and expert advice for every gardener and
                  farmer.
                </p>
              </div>
              <div className="w-[300px] h-[270px] text-justify pt-2 pb-5 px-5 rounded-3xl border border-gray-200 overflow-hidden shadow">
                <div className="relative w-[55px] h-[55px] rounded-lg bg-[#d1d5db] shadow p-2 my-5 overflow-hidden">
                  <Image
                    src="/image/navbar/about/vision.png"
                    alt="mission"
                    fill
                    className="object-contain"
                  />
                </div>
                <h5 className="font-semibold text-[20px] text-[#008000] py-2">
                  Vision
                </h5>
                <p>
                  Cultivating a greener Nepal by inspiring sustainable gardening
                  and empowering every farmer and plant lover to thrive.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="about-content flex flex-col md:flex-row text-center gap-y-6 px-4 lg:px-0 gap-6 justify-between items-center">
              <div className="content lg:w-[450px] mx-auto text-justify">
                <p className="my-10">
                  Established <br />
                  8 October , 2021 A.D. | 2078/06/22 B.S. <br />
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  ratione earum qui amet quae suscipit, incidunt quasi, quia
                  deserunt explicabo delectus non, consequuntur porro officiis
                  aliquid beatae! Asperiores, sequi porro! Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Fuga repudiandae optio
                  aliquid excepturi non repellat. <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ab quos exercitationem quas quaerat quam excepturi
                  maxime, expedita consequuntur, odit rem ex pariatur aperiam
                  tempora perferendis repudiandae qui, sequi vel laborum
                  similique nulla obcaecati provident! Suscipit vel assumenda
                  eaque harum!
                </p>
              </div>
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[470px] rounded-3xl overflow-hidden">
                <Image
                  src="/image/navbar/about/1.jpg"
                  alt="About Image"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 
              (max-width: 1024px) 80vw, 
              710px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="description px-4 lg:px-0">
            <h1 className="text-[35px] font-bold mt-16 py-5 text-[#008000]">
              Description of Products & Services
            </h1>
            <div className="w-full h-[1px] bg-gray-200 my-6"></div>

            <div className="description-content my-10 gap-y-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              esse excepturi suscipit dicta fuga dolorum nihil explicabo quidem
              eius debitis animi reiciendis eum odit laboriosam minima veniam
              optio, nobis fugiat. Perferendis, non veniam molestiae quisquam
              mollitia maiores aperiam, autem placeat excepturi vero eos!
              Placeat, totam maxime. Ullam incidunt et quis?
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        <div className="container mx-auto max-w-[1200px] my-16 flex justify-center">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center items-center gap-y-6">
            <div className="w-[300px] text-justify pt-2 pb-5 px-5 rounded-3xl border border-gray-200 overflow-hidden shadow">
              <div className="relative w-[55px] h-[55px] rounded-lg bg-[#d1d5db] shadow p-2 my-5 overflow-hidden">
                <Image
                  src="/image/navbar/about/mission.png"
                  alt="mission"
                  fill
                  className="object-contain"
                />
              </div>
              <h5 className="font-semibold text-[20px] text-[#008000] py-2">
                Mission
              </h5>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aliquam ex maxime. Incidunt, temporibus blanditiis!"
              </p>
            </div>
            <div className="w-[300px] text-justify pt-2 pb-5 px-5 rounded-3xl border border-gray-200 overflow-hidden shadow">
              <div className="relative w-[55px] h-[55px] rounded-lg bg-[#d1d5db] shadow p-2 my-5 overflow-hidden">
                <Image
                  src="/image/navbar/about/motive.png"
                  alt="mission"
                  fill
                  className="object-contain"
                />
              </div>
              <h5 className="font-semibold text-[20px] text-[#008000] py-2">
                Motive
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ipsum obcaecati aspernatur ea veritatis eaque expedita repellat.
              </p>
            </div>
            <div className="w-[300px] h-[270px] text-justify pt-2 pb-5 px-5 rounded-3xl border border-gray-200 overflow-hidden shadow">
              <div className="relative w-[55px] h-[55px] rounded-lg bg-[#d1d5db] shadow p-2 my-5 overflow-hidden">
                <Image
                  src="/image/navbar/about/vision.png"
                  alt="mission"
                  fill
                  className="object-contain"
                />
              </div>
              <h5 className="font-semibold text-[20px] text-[#008000] py-2">
                Vision
              </h5>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                ipsum obcaecati aspernatur ea veritatis eaque"
              </p>
            </div> */}
        </div>
      </section>
    </div>
  );
};

export default page;
