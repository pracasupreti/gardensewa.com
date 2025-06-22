import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className="about">
        <div className="container mx-auto max-w-[1200px]">
          <div className="about">
            <h1 className="text-center text-[45px] text-[#008000] font-bold my-10">
              About
            </h1>
            <div className="about-content flex flex-col md:flex-row text-center gap-y-6 px-4 lg:px-0 gap-6 justify-between items-center">
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
              <div className="relative w-[710px] h-[470px] rounded-3xl overflow-hidden">
                <Image
                  className="object-cover rounded-3xl"
                  src="/image/navbar/about/1.jpg"
                  alt=""
                  fill
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

        {/* ..........Mission, Vision, Motive........... */}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
