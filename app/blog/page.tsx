"use client";
import { useState } from "react";

// Placeholder image generator
const getPlaceholderImage = (width: number, height: number, text: string) =>
  `https://placehold.co/${width}x${height}/f0fdf4/14532d?text=${encodeURIComponent(
    text
  )}`;

// Blog post type
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  snippet: string;
  imageUrl: string;
}

// Blog post data
const postData: BlogPost[] = [
  {
    id: 1,
    title: "The Blooming Business of Gardening Services",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "8 min read",
    snippet:
      "The gardening industry, once a quiet and niche market, has undergone a significant transformation. Fueled by a new wave of urban gardening, sustainability, and a growing appreciation for green spaces, it has blossomed into a thriving business...",
    imageUrl: "/image/navbar/blog/Blog-1.png",
  },
  {
    id: 2,
    title: "How a Flower Brings Happiness",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "5 min read",
    snippet:
      "A flower’s beauty and elegance inspire serene and soothing emotions, and its presence provides a calming ambiance and a deeper connection to nature...",
    imageUrl: "/image/navbar/blog/Blog-2.png",
  },
  {
    id: 3,
    title: "Impact of a Flower in Mental Health",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "7 min read",
    snippet:
      "Flowers have been part of human life for thousands of years. They are used in ceremonies, decoration, and as gifts. Flowers have always had a special place in our hearts...",
    imageUrl: "/image/navbar/blog/Blog-3.png",
  },
  {
    id: 4,
    title: "Nurturing Your Life Naturally With Everyday Habits",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "3 min read",
    snippet:
      "Nurturing our lives naturally begins with small, consistent habits. It is not about grand gestures but about the daily rituals that connect us to the earth...",
    imageUrl: "/image/navbar/blog/Blog-4.png",
  },
  {
    id: 5,
    title: "Organic Food Homemade - and Homegrown",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "4 min read",
    snippet:
      "Creating your own organic food is a rewarding and delicious way to ensure you are eating the freshest, most nutrient-rich produce...",
    imageUrl: "/image/navbar/blog/Blog-5.png",
  },
  {
    id: 6,
    title: "Meditation and Gardening Go Hand in Hand",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "5 min read",
    snippet:
      "For many, the peaceful act of gardening is a form of meditation. The quiet focus on tending to plants provides a welcome escape from the hustle and bustle of daily life...",
    imageUrl: "/image/navbar/blog/Blog-6.png",
  },
  {
    id: 7,
    title: "Why Gardening Services for the Future of Urban Living",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "6 min read",
    snippet:
      "With the rise of urbanization, green spaces are becoming increasingly rare. Gardening services are helping to combat this trend...",
    imageUrl: "/image/navbar/blog/Blog-7.png",
  },
  {
    id: 8,
    title: "Green Is the New Lifestyle – Embrace the Garden Life",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "4 min read",
    snippet:
      "Adopting a green lifestyle has a profound and positive impact on both personal well-being and the environment...",
    imageUrl: "/image/navbar/blog/Blog-8.png",
  },
  {
    id: 9,
    title: "Plants: Nature’s Timeless Gift For a Healthier, Happier Life",
    author: "Van Praag",
    date: "28/07/2023",
    readTime: "3 min read",
    snippet:
      "Plants offer a myriad of benefits, from purifying the air we breathe to boosting our mood...",
    imageUrl: "/image/navbar/blog/Blog-9.png",
  },
];

// Post Card Component
const PostCard = ({
  post,
  isLarge = false,
}: {
  post: BlogPost;
  isLarge?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl bg-white ${
        isLarge ? "" : ""
      }`}
    >
      <img
        src={post.imageUrl}
      />
      <div className="flex flex-col p-4">
        <h3
          className={`font-bold text-gray-800 hover:text-green-600 transition-colors ${
            isLarge ? "text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <div className="flex items-center text-sm mt-2 text-gray-500">
          <p className="mr-4">by {post.author}</p>
          <span className="text-gray-400">•</span>
          <p className="ml-4">{post.date}</p>
        </div>
        <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3">
          {post.snippet}
        </p>
        <a
          href="#"
          className="mt-4 inline-flex items-center text-green-600 font-semibold hover:translate-x-1 transition-transform"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Main Page Component
export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-gray-600 mb-2">
            HOME &gt; <span className="text-primary"> BLOG </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700">
            Blog
          </h1>
          <div className="relative mt-6 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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

        {/* Popular Posts */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <h2 className="text-xl font-bold text-green-700 mr-4">
              Popular Posts
            </h2>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <PostCard post={postData[0]} isLarge />
        </section>

        {/* Featured Posts */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <h2 className="text-xl font-bold text-green-700 mr-4">
              Featured Posts
            </h2>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PostCard post={postData[1]} />
            <PostCard post={postData[2]} />
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <div className="flex items-center mb-6">
            <h2 className="text-xl font-bold text-green-700 mr-4">
              Recent Posts
            </h2>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PostCard post={postData[3]} />
            <PostCard post={postData[4]} />
             <PostCard post={postData[5]} />
            <PostCard post={postData[6]} />
             <PostCard post={postData[7]} />
            <PostCard post={postData[8]} />
          </div>
        </section>
      </main>
    </div>
  );
}
