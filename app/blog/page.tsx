import React from "react";
import Link from "next/link";

function Blog() {
  let post = [
    {
      id: "1",
      img: "/image/navbar/blog/0.jpg",
      title:
        "Sustainable Farming Practices in Nepal: How Consulting Services Can Help",
      description:
        "Sharing of right agriculture knowledge and technology to the growers at right time motivates them to improve their crop productivity...",
    },
  ];
  let post1 = [
    {
      id: "2",
      img: "/image/navbar/blog/1.jpg",
      title:
        "Organic Farming in Nepal: Benefits and Expert Guidance for Farmers",
      description:
        "In the heart of the Himalayas, where lush landscapes and fertile soil meet, Nepal is increasingly embracing organic farming. As a country where agriculture plays a pivotal role in the economy, the shift towards organic practices offers a refreshing solution for both farmers and consumers...",
    },
  ];
  let post2 = [
    {
      id: "3",
      img: "/image/navbar/blog/2.jpg",
      title:
        "The Role of Agriculture Consultants in Boosting Local Farm Productivity",
      description:
        "Agriculture is the backbone of many economies worldwide, and Nepal is no exception. The country’s vast farming community...",
    },
  ];
  let post3 = [
    {
      id: "4",
      img: "/image/navbar/blog/3.jpg",
      title:
        "Smart Irrigation Solutions for Nepalese Farmers: A Consultant’s Perspective",
      description:
        "Water is one of the most critical resources for farming in Nepal, especially as climate change and erratic rainfall patterns continue to....",
    },
  ];
  let post4 = [
    {
      id: "5",
      img: "/image/navbar/blog/4.jpg",
      title:
        "How Modern Technology is Transforming Traditional Farming in Nepal",
      description:
        "Agriculture has been the backbone of Nepal’s economy for centuries. However, traditional farming methods, while effective in the past, have often been inefficient...",
    },

    {
      id: "6",
      img: "/image/navbar/blog/5.jpg",
      title:
        "Precision Farming in Nepal: How Consulting Services Can Make a Difference",
      description:
        "Agriculture is a vital part of Nepal’s economy, but farmers in the country face numerous challenges, including unpredictable weather, limited resources and traditional farming practices..",
    },

    {
      id: "7",
      img: "/image/navbar/blog/6.jpg",
      title:
        "Livestock Farming Consultation: Improving Dairy and Poultry Productivity.",
      description:
        "Livestock farming is a cornerstone of Nepal’s agricultural economy, with dairy and poultry farming playing a significant role in providing nutrition..",
    },
  ];
  let post5 = [
    {
      id: "8",
      img: "/image/navbar/blog/7.jpg",
      title:
        "Government Policies and Subsidies for Nepalese Farmers: What You Need to Know.",
      description:
        "Agriculture remains the backbone of Nepal’s economy, with the majority of the population relying on farming for their livelihood. Recognizing this,...",
    },

    {
      id: "9",
      img: "/image/navbar/blog/8.jpg",
      title:
        "Climate Change and Its Impact on Agriculture: How Farmers Can Adapt",
      description:
        "Climate change is one of the biggest challenges facing agriculture today. Rising temperatures, unpredictable rainfall, and extreme weather events are making...",
    },
  ];
  let post6 = [
    {
      id: "10",
      img: "/image/navbar/blog/9.jpg",
      title:
        "Choosing the Right Crops for Your Region: Expert Advice for Nepalese Farmers.",
      description:
        "Selecting the right crops is crucial for successful farming, especially in a country like Nepal, where diverse climates and terrains influence agricultural productivity...",
    },

    {
      id: "11",
      img: "/image/navbar/blog/10.jpg",
      title: "Post-Harvest Management and Storage Solutions for Small Farmers.",
      description:
        "For small farmers in Nepal, harvesting crops is only half the battle. Without proper post-harvest management and storage solutions, a significant portion of produce..",
    },
  ];
  let post7 = [
    {
      id: "12",
      img: "/image/navbar/blog/11.jpg",
      title:
        "Organic Certification in Nepal: How Consultants Can Help Farmers Meet Standards.",
      description:
        "Organic farming is gaining popularity in Nepal as consumers become more conscious of their health and the environment...",
    },

    {
      id: "13",
      img: "/image/navbar/blog/12.jpg",
      title: "Maximizing Crop Yields: Expert Tips for Farmers in Nepal.",
      description:
        "For Nepalese farmers, maximizing crop yields is key to improving livelihoods and ensuring food security. With challenges like unpredictable weather, soil degradation, and limited...",
    },

    {
      id: "14",
      img: "/image/navbar/blog/13.jpg",
      title:
        "The Business Side of Farming: How Agriculture Consulting Can Increase Profits.",
      description:
        "Farming isn’t just about growing crops, it’s a business that requires smart decision-making to ensure profitability...",
    },

    {
      id: "15",
      img: "/image/navbar/blog/14.jpg",
      title:
        "Youth in Agriculture: How Consulting Services Can Encourage the Next Generation.",
      description:
        "Agriculture has long been the backbone of Nepal’s economy, but in recent years, fewer young people are choosing farming as a career...",
    },
  ];

  return (
    <>
      <section className="blog bg-[#f9f9f9]">
        <h1 className="text-center text-[45px] font-bold text-[#008000] py-10">
          Blog
        </h1>
        <div className="w-full h-[1px] bg-gray-200"></div>

        <div className="container mx-auto max-w-[1200px] mt-5 mb-10 px-4 lg:px-0">
          {post.slice(0, 1).map((a) => (
            <div
              key={a.id}
              className="blog-content max-h-[650px] border border-gray-200 lg:border-none rounded-xl"
            >
              <img
                className="object-cover w-full max-h-[500px] rounded-t-xl"
                src={a.img}
                alt=""
              />
              <div className="blog-text py-2 px-2 text-gray-600">
                <div className="title flex flex-col md:flex-row justify-between">
                  <h5 className="text-[20px] font-semibold text-[#008000] py-2">
                    {a.title}
                  </h5>
                  <Link href="/blog/1">
                    <button className="border hidden sm:block lg:block border-[#008000] text-[#008000] shadow mt-4 rounded-lg px-2 py-1 my-2 gap-2 hover:bg-green-700 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
                <p>{a.description}</p>
                <Link href="/blog/1">
                  <button className="border block sm:hidden lg:hidden border-[#008000] text-[#008000] shadow mt-4 rounded-lg px-2 py-1 my-2 gap-2 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto max-w-[1200px] py-10 flex flex-wrap flex-col md:flex-row items-center  gap-y-6 justify-between px-4 lg:px-0">
          {/* .................2nd content....................*/}
          {post1.map((b) => (
            <div
              key={b.id}
              className="blog-content max-w-[590px] flex flex-wrap max-h-[545x] border border-gray-200 rounded-xl"
            >
              <img
                className="w-full lg:h-[310px] h-[210px] object-cover rounded-t-xl"
                src={b.img}
                alt=""
              />
              <div className="blog-text px-2 text-gray-600">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000] py-2">
                  {b.title}
                </h5>
                <p className="text-[15px]">{b.description}</p>
                <Link href="/blog/1">
                  <button className="border border-[#008000] mt-4 text-[#008000] shadow rounded-lg px-2 py-1 my-2 flex gap-2 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* ...................3rd content................................ */}
          <div className="blog-contents">
            {post2.map((c) => (
              <div
                key={c.id}
                className="blog-content overflow-hidden max-w-[590px] h-[300px] lg:h-[260px] border border-gray-200 rounded-xl flex text-gray-600 mb-4"
              >
                <div className="text w-full relative p-4">
                  <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000] pb-2">
                    {c.title}
                  </h5>
                  <p className="">{c.description}</p>
                  <Link href="/blog/1">
                    <button className="absolute bottom-[10px] border border-[#008000] mt-10 text-[#008000] px-2 py-1 rounded-lg my-1 flex items-center gap-1  hover:bg-green-700 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
                <div className="image">
                  <img
                    className="hidden lg:block md:block sm:block w-[385px] h-[258px] object-cover rounded-e-xl"
                    src="/image/navbar/blog/2.jpg"
                    alt=""
                  />
                </div>
              </div>
            ))}

            {/* .....................4th content....................... */}
            {post3.map((d) => (
              <div
                key={d.id}
                className="blog-content  max-w-[590px] h-[300px] lg:h-[260px] border border-gray-200 rounded-xl flex text-gray-600"
              >
                <div className="text overflow-hidden w-full relative p-4">
                  <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000] pb-2">
                    {d.title}
                  </h5>
                  <p className="">{d.description}</p>
                  <Link href="/blog/1">
                    <button className="border absolute bottom-[10px] border-[#008000] mt-10 text-[#008000] px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-green-700 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
                <div className="image">
                  <img
                    className="hidden lg:block md:block sm:block w-full h-[258px] object-cover rounded-e-xl"
                    src="/image/navbar/blog/3.jpg"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ......................5th content........................ */}
        <div className="container mx-auto max-w-[1200px] gap-6 grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between mb-10 px-4 lg:px-0">
          {post4.slice(0, 3).map((e) => (
            <div
              key={e.id}
              className="blog-content w-full border border-gray-200 rounded-xl"
            >
              <img
                className="w-full object-cover lg:h-[280px] h-[210px] rounded-t-xl"
                src={e.img}
                alt=""
              />
              <div className="blog-text py-2 px-2 text-gray-600">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000]">
                  {e.title}
                </h5>
                <p className="py-2 overflow-hidden">{e.description}</p>
                <Link href="/blog/1">
                  <button className="border shadow border-[#008000] text-[#008000] mt-8 rounded-lg px-2 py-1 flex gap-2 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* .................................6th Content......................... */}
        <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center gap-y-6 gap-4 px-4 lg:px-0">
          {post5.slice(0, 2).map((f) => (
            <div
              key={f.id}
              className="blog-content max-w-[600px] h-[300px] lg:h-[240px] border border-gray-200 overflow-hidden rounded-xl flex text-gray-600 mb-4"
            >
              <div className="text w-full relative px-4 py-2">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000]">
                  {f.title}
                </h5>
                <p className="text-[15px]">{f.description}</p>
                <Link href="/blog/1">
                  <button className="border absolute bottom-2 border-[#008000] text-[#008000] mt-6 px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="image">
                <img
                  className="hidden lg:block md:block sm:block w-[300px] h-[238px] object-cover rounded-e-xl"
                  src={f.img}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        {/* ......................................7th Content................................ */}
        <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center gap-y-6 gap-4 px-4 lg:px-0">
          {post6.slice(0, 2).map((g) => (
            <div
              key={g.id}
              className="blog-content max-w-[600px] h-[300px] lg:h-[240px] border border-gray-200 rounded-xl overflow-hidden flex text-gray-600 mb-6"
            >
              <div className="text w-full relative px-4 py-2">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000]">
                  {g.title}
                </h5>
                <p className="text-[15px]">{g.description}</p>
                <Link href="/blog/1">
                  <button className="border absolute bottom-2 border-[#008000] text-[#008000] px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="image">
                <img
                  className="hidden lg:block md:block sm:block w-[300px]  h-[238px] object-cover rounded-e-xl"
                  src={g.img}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        {/* .........................................8th Content.................................... */}
        <div className="container mx-auto max-w-[1200px] gap-4 grid sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 items-center gap-y-6 justify-between justify py-5">
          {post7.map((h) => (
            <div
              key={h.id}
              className="blog-content overflow-hidden w-full lg:h-[450px] h-[470px] items-center relative border border-gray-200 rounded-xl"
            >
              <img
                className="w-full lg:h-[170px] h-[210px] object-cover rounded-t-xl"
                src={h.img}
                alt=""
              />
              <div className="blog-text py-2 px-2 text-gray-600">
                <h5 className="text-[18px] lg:text-[16px] font-semibold text-[#008000] py-2">
                  {h.title}
                </h5>
                <p>{h.description}</p>
                <Link href="/blog/1">
                  <button className="border absolute bottom-[10px] border-[#008000] text-[#008000] shadow mt-8 rounded-lg px-2 py-1 flex gap-2 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
