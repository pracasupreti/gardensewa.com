import React from "react";
import Link from "next/link";
import Image from "next/image";

function Blog() {
  let post = [
    {
      id: "1",
      img: "/image/navbar/blog/0.jpg",
      title:
        "Top Gardening Services for Nepali Homes",
      description:
        "GardenSewa brings you expert gardening services tailored to Nepali homes — from setup to maintenance, we make your dream garden come alive..",
    },
  ];
  let post1 = [
    {
      id: "2",
      img: "/image/navbar/blog/1.jpg",
      title:
        "Best Gardening Products for Every Nepali Gardener",
      description:
        "Discover high-quality tools, soil, and accessories to boost your gardening experience. GardenSewa's curated products help gardens thrive in any region of Nepal...",
    },
  ];
  let post2 = [
    {
      id: "3",
      img: "/image/navbar/blog/2.jpg",
      title:
        "Creative Gardening Ideas for Small Nepali Spaces",
      description:
        "Maximize limited spaces with clever gardening solutions that bring beauty and greenery to even the smallest areas of your home...",
    },
  ];
  let post3 = [
    {
      id: "4",
      img: "/image/navbar/blog/3.jpg",
      title:
        "How to Start Your Home Garden in Kathmandu",
      description:
        "Want to grow your own vegetables in the city? Here's a beginner’s guide to starting a home garden in urban areas like Kathmandu...",
    },
  ];
  let post4 = [
    {
      id: "5",
      img: "/image/navbar/blog/4.jpg",
      title:
        "Smart Gardening Tips for Urban Nepali Homes",
      description:
        "Living in a city doesn’t mean you have to give up your love for gardening. With limited space and busy routines, urban Nepali homes need smart, low-maintenance solutions. Let’s explore creative tips that help you maintain a thriving garden in the heart of the city...",
    },

    {
      id: "6",
      img: "/image/navbar/blog/5.jpg",
      title:
        "10 Easy-Care Plants Perfect for Nepali Beginners",
      description:
        "New to gardening? Start with these easy-care plants ideal for Nepali climate. They require low maintenance and bring instant freshness to any space..",
    },

    {
      id: "7",
      img: "/image/navbar/blog/6.jpg",
      title:
        "Top Gardening Trends Nepali Gardeners Should Try in 2025",
      description:
        "Gardening is evolving with creative, sustainable, and space-saving techniques. In 2025, Nepali gardeners are embracing new trends that bring beauty efficiency, and eco-friendliness to homes and communities. Explore these popular..",
    },
  ];
  let post5 = [
    {
      id: "8",
      img: "/image/navbar/blog/7.jpg",
      title:
        "Smart Watering Systems for Nepali Gardens: Save Time and Resources.",
      description:
        "Smart watering systems are automated devices that deliver water to plants based on time, soil moisture, and weather conditions. They include drip irrigation kits, automatic timers,..",
    },

    {
      id: "9",
      img: "/image/navbar/blog/8.jpg",
      title:
        "Beginner’s Guide to Growing Tomatoes in Pots",
      description:
        "Tomatoes are a favorite vegetable in Nepali kitchens and gardens alike. However, many urban and small-space gardeners face challenges growing tomatoes in traditional soil beds due...",
    },
  ];
  let post6 = [
    {
      id: "10",
      img: "/image/navbar/blog/9.jpg",
      title:
        "Smart Balcony Gardening Ideas for Urban Nepali Homes",
      description:
        "As urbanization increases in Nepal, many residents live in apartments or houses with limited outdoor space. However, a small balcony can become a lush, productive garden...",
    },

    {
      id: "11",
      img: "/image/navbar/blog/10.jpg",
      title: "Container Gardening: A Smart Solution for Urban Nepali Homes.",
      description:
        "As urbanization increases in Nepal, especially in cities like Kathmandu, Pokhara, and Lalitpur, open spaces for traditional gardening are becoming scarce...",
    },
  ];
  let post7 = [
    {
      id: "12",
      img: "/image/navbar/blog/11.jpg",
      title:
        "Organic Composting at Home: Turn Waste into Garden Gold",
      description:
        "In Nepal, household waste is often discarded without proper segregation, leading to landfill overflow and environmental pollution. But what if you could convert your kitchen waste into a valuable resource..",
    },

    {
      id: "13",
      img: "/image/navbar/blog/12.jpg",
      title: "Rainwater Harvesting for Home Gardens: A Sustainable Practice for Nepali Growers",
      description:
        " Water scarcity is a growing issue in many parts of Nepal, especially during the dry season. For gardeners, maintaining a consistent water supply  Water scarcity is a growing issue in...",
    },

    {
      id: "14",
      img: "/image/navbar/blog/13.jpg",
      title:
        "Natural Pest Control Methods for a Healthy Nepali Garden",
      description:
        "Pests can quickly turn a thriving garden into a struggling one, damaging plants, spreading disease, and reducing yields. Many Nepali gardeners rely...",
    },

    {
      id: "15",
      img: "/image/navbar/blog/14.jpg",
      title:
        "Rooftop Gardening in Nepal: Transforming Spaces into Green Retreats",
      description:
        "With increasing urbanization and limited land availability, rooftops across Nepali cities like Kathmandu, Lalitpur, and Biratnagar are being transformed...",
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
              <div className="relative w-full max-h-[500px] h-[500px] rounded-t-xl overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="blog-text py-2 px-2 text-gray-600">
                <div className="title flex flex-col md:flex-row justify-between">
                  <h5 className="text-[20px] font-semibold text-[#008000] py-2">
                    {a.title}
                  </h5>
                  <Link
                    href={`/blog/${a.id}`}
                    className="hidden sm:block lg:block"
                  >
                    <button className="border border-[#008000] text-[#008000] shadow mt-4 rounded-lg px-2 py-1 my-2 gap-2 hover:bg-green-700 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
                <p>{a.description}</p>
                <Link href={`/blog/${a.id}`}>
                  <button className="border cursor-pointer block sm:hidden lg:hidden border-[#008000] text-[#008000] shadow mt-4 rounded-lg px-2 py-1 my-2 gap-2 hover:bg-green-700 hover:text-white">
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
              <div className="relative w-full h-[210px] lg:h-[310px] rounded-t-xl overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="blog-text px-2 text-gray-600">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000] py-2">
                  {b.title}
                </h5>
                <p className="text-[15px]">{b.description}</p>
                <Link href={`/blog/${b.id}`}>
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
                  <Link href={`/blog/${c.id}`}>
                    <button className="absolute bottom-[10px] border border-[#008000] mt-10 text-[#008000] px-2 py-1 rounded-lg my-1 flex items-center gap-1  hover:bg-green-700 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
                <div className="image relative hidden sm:block md:block lg:block w-[385px] h-[258px] rounded-e-xl overflow-hidden">
                  <Image
                    src="/image/navbar/blog/2.jpg"
                    alt="Description here"
                    fill
                    className="object-cover rounded-e-xl"
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
                  <Link href={`/blog/${d.id}`}>
                    <button className="border absolute bottom-[10px] border-[#008000] mt-10 text-[#008000] px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-green-700 hover:text-white">
                      Read More
                    </button>
                  </Link>
                </div>
                <div className="image relative hidden sm:block md:block lg:block w-full h-[258px] rounded-e-xl overflow-hidden">
                  <Image
                    src="/image/navbar/blog/3.jpg"
                    alt="Description here"
                    fill
                    className="object-cover rounded-e-xl"
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
              <div className="relative w-full lg:h-[280px] h-[210px] rounded-t-xl overflow-hidden">
                <Image
                  src={e.img}
                  alt=""
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="blog-text py-2 px-2 text-gray-600">
                <h5 className="text-[18px] lg:text-[20px] font-semibold text-[#008000]">
                  {e.title}
                </h5>
                <p className="py-2 overflow-hidden">{e.description}</p>
                <Link href={`/blog/${e.id}`}>
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
                <Link href={`/blog/${f.id}`}>
                  <button className="border absolute bottom-2 border-[#008000] text-[#008000] mt-6 px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="image relative hidden lg:block md:block sm:block w-[300px] h-[238px] rounded-e-xl overflow-hidden">
                <Image
                  src={f.img}
                  alt=""
                  fill
                  className="object-cover rounded-e-xl"
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
                <Link href={`/blog/${g.id}`}>
                  <button className="border absolute bottom-2 border-[#008000] text-[#008000] px-2 py-1 rounded-lg flex items-center gap-1 hover:bg-green-700 hover:text-white">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="image relative hidden lg:block md:block sm:block w-[300px] h-[238px] rounded-e-xl overflow-hidden">
                <Image
                  src={g.img}
                  alt=""
                  fill
                  className="object-cover rounded-e-xl"
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
              <div className="relative w-full lg:h-[170px] h-[210px] rounded-t-xl overflow-hidden">
                <Image
                  src={h.img}
                  alt=""
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="blog-text py-2 px-2 text-gray-600">
                <h5 className="text-[18px] lg:text-[16px] font-semibold text-[#008000] py-2">
                  {h.title}
                </h5>
                <p>{h.description}</p>
                <Link href={`/blog/${h.id}`}>
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



