"use client";
import { Clock } from "lucide-react";
import { useState } from "react";

// -----------------------
// Blog Post Interface
// -----------------------
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  snippet: string;
  imageUrl: string;
}

// -----------------------
// Mock Blog Data
// -----------------------
const postData: BlogPost[] = [
  {
    id: 1,
    title: "The Blooming Business of Gardening Services",
    author: "Niranjan Sharma",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Gardening is more than just planting flowers or vegetables — it is a full-fledged industry. From selling indoor plants to setting up home gardens, vertical gardens, rooftop greenery, and landscape designing, the gardening business offers multiple income sources. People today are more health-conscious, environmentally aware, and interested in aesthetic living.",
    imageUrl: "/image/navbar/blog/Blog-1.png",
  },
  {
    id: 2,
    title: "How a Flower Brings Happiness",
    author: "Pracas Upreti",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "In today’s fast-paced and digitally driven world, finding moments of peace and happiness can feel challenging. We are constantly surrounded by screens, deadlines",
    imageUrl: "/image/navbar/blog/Blog-2.png",
  },
  {
    id: 3,
    title: "Impact of a Flower in Mental Health",
    author: "Dipak Pahadi",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Flowers have been part of human life for thousands of years. They are used in celebrations, rituals, decorations, and even in medicine. But did you know",
    imageUrl: "/image/navbar/blog/Blog-3.png",
  },
  {
    id: 4,
    title: "How to Detox Your Life Naturally With Everyday Habits",
    author: "Pracas Upreti",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Detoxing isn’t just about green juices and diets. A real detox involves cleansing your environment",
    imageUrl: "/image/navbar/blog/Blog-4.jpg",
  },
  {
    id: 5,
    title: "Happiness is Homemade — and Homegrown",
    author: "Niranjan Sharma",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "True happiness often lies in simple joys — like seeing a seed sprout, harvesting your own vegetables",
    imageUrl: "/image/navbar/blog/Blog-5.jpg",
  },
  {
    id: 6,
    title: "How Mindfulness and Gardening Go Hand in Hand",
    author: "Van Praag",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "In a fast-paced world, mindfulness is the anchor that brings us back to the present. And there’s no better place",
    imageUrl: "/image/navbar/blog/Blog-6.jpg",
  },
  {
    id: 7,
    title: "Why Gardening Services Are the Future of Urban Living",
    author: "Van Praag",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "With shrinking open spaces and busier schedules, urban dwellers are turning to gardening professionals",
    imageUrl: "/image/navbar/blog/Blog-7.jpg",
  },
  {
    id: 8,
    title: "Green is the New Lifestyle — Embrace the Garden Life",
    author: "Van Praag",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Gardening is more than a weekend activity — it’s a lifestyle choice. It's about living closer to nature",
    imageUrl: "/image/navbar/blog/Blog-8.jpg",
  },
  {
    id: 9,
    title: "Plants: Nature’s Timeless Gift for a Healthier, Happier Life",
    author: "Van Praag",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Plants are more than just decorative green companions — they’re living tools for a healthier",
    imageUrl: "/image/navbar/blog/Blog-9.jpg",
  },
];

// -----------------------
// PostCard Component
// -----------------------
const PostCard = ({
  post,
  isLarge = false,
}: {
  post: BlogPost;
  isLarge?: boolean;
}) => (
  <div className="flex flex-col overflow-hidden">
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-56 object-cover rounded-2xl"
    />
    <div className="flex flex-col p-4">
      <div className="flex items-center text-sm mt-2 text-dark">
        <p className="mr-2">by {post.author}</p>
        <span className="text-dark">•</span>
        <p className="ml-2 mr-20">{post.date}</p>

        <p className="ml-4 flex gap-2">
          <Clock />
          {post.readTime}
        </p>
      </div>
      <h3
        className={`font-bold text-secondary transition-colors ${isLarge ? "text-2xl" : "text-lg"}`}
      >
        {post.title}
      </h3>
      <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3">
        {post.snippet}
      </p>
      <a
        href="#"
        className="px-2 w-40 py-2.5 bg-gradient-to-r from-[#00C400] via-[#009800] to-[#009000] rounded-lg inline-flex justify-center items-center gap-1.5 text-white text-lg font-semibold"
      >
        Read More
      </a>
    </div>
  </div>
);

// -----------------------
// Main Blog Page Component
// -----------------------
export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <div className="w-full py-12 bg-[#F6F9F6] flex flex-col justify-start items-center gap-8">
        {/* Breadcrumb */}
        <div className="w-full flex flex-col justify-start items-center gap-6 px-4 sm:px-8 md:px-16">
          <div className="w-full flex flex-col justify-start items-center gap-2.5">
            <div className="w-full flex flex-col justify-start items-center gap-2.5">
              <div className="inline-flex justify-start items-center gap-1.5 w-full">
                <div className="flex justify-center items-center gap-1.5 w-full">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    Home &gt; <span className="text-primary ml-2"> Blog </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Title */}
          <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <h1 className="w-full text-center text-primary text-3xl sm:text-4xl md:text-5xl font-bold">
                Blog
              </h1>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-xl px-4 sm:px-0 mt-6">
          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-4 py-3 w-full h-14 bg-white rounded-[30px] outline outline-1 outline-offset-[-1px] outline-green-800"
          />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#FFFFFF] text-gray-800">
        {/* Blog Sections */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          {/* Popular Post */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-6">
              Popular Post
            </h2>
            <div className="flex flex-col rounded-2xl overflow-hidden">
              <img
                src={postData[0].imageUrl}
                alt={postData[0].title}
                className="w-full h-64 sm:h-[485px] object-cover rounded-2xl"
              />
              <div className="p-6 rounded-2xl">
                <div className="flex flex-wrap justify-between items-center mb-4 text-sm text-gray-500">
                  <div className="flex items-center text-dark gap-3">
                    <img
                      src="https://placehold.co/40x40"
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{postData[0].author}</span>
                    <div className="w-1.5 h-1.5 bg-dark rounded-full mx-2" />
                    <span>{postData[0].date}</span>
                  </div>
                  <span className="flex gap-2">
                    <Clock /> {postData[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-3">
                  {postData[0].title}
                </h2>
                <p className="text-dark mb-6 line-clamp-4">
                  {postData[0].snippet}
                </p>
                <a
                  href="#"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#00C400] via-[#009800] to-[#009000] rounded-lg inline-flex justify-center items-center gap-1.5 text-white text-lg font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          </section>

          {/* Featured Posts (Custom Layout) */}
          <section className="w-full inline-flex flex-col justify-start items-start gap-7">
            <div className="self-stretch h-7 text-green-700 text-2xl font-semibold leading-loose">
              Featured Posts
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-6 flex-wrap lg:flex-nowrap">
              {[postData[1], postData[2]].map((post, index) => (
                <div
                  key={post.id}
                  className="flex-1 inline-flex flex-col justify-start items-start"
                >
                  <img
                    className="self-stretch h-96 object-cover rounded-2xl"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <div className="self-stretch py-5 rounded-2xl flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-center gap-4">
                        <div className="self-stretch inline-flex justify-between items-center">
                          <div className="flex justify-start items-center gap-2">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://placehold.co/32x32"
                            />
                            <div className="text-sm">{post.author}</div>
                            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                            <div className="text-sm">{post.date}</div>
                          </div>
                          <div className="flex justify-start items-center gap-2.5">
                            <div className="text-sm flex gap-2">
                              {" "}
                              <Clock /> {post.readTime}
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                          <div className="text-2xl text-secondary font-semibold leading-loose">
                            {post.title}
                          </div>
                          <div className="text-base text-dark leading-normal line-clamp-3">
                            {post.snippet}
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="px-6 py-2.5 bg-gradient-to-r from-[#00C400] via-[#009800] to-[#009000] rounded-lg inline-flex justify-center items-center gap-1.5 text-white text-lg font-semibold"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <h2 className="text-xl font-bold text-green-700 mb-6">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postData.slice(3).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
