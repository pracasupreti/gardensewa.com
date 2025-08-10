import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  img: string;
  title: string;
  description: string;
}

const allPosts: BlogPost[] = [
  // Popular Posts
  {
    id: "1",
    img: "/images/blog/popular-1.jpg",
    title: "The Blooming Business of Gardening Services",
    description:
      "Explore the rise of gardening services and their benefits for both urban and rural communities. Discover how professional gardeners bring beauty and sustainability to every space.",
  },
  {
    id: "2",
    img: "/images/blog/popular-2.jpg",
    title: "Flower Brings Happiness",
    description:
      "Flowers are not only beautiful to look at but also uplift the mood and bring happiness into our lives. Learn how to use flowers to brighten up your day.",
  },
  {
    id: "3",
    img: "/images/blog/popular-3.jpg",
    title: "Impact of Flowers on Mental Health",
    description:
      "Studies have shown that flowers have a positive impact on mental health, reducing stress and anxiety while boosting overall well-being.",
  },

  // Featured Posts
  {
    id: "4",
    img: "/images/blog/featured-1.jpg",
    title: "Flower Brings Happiness",
    description:
      "Flowers are not only beautiful to look at but also uplift the mood and bring happiness into our lives. Learn how to use flowers to brighten up your day.",
  },
  {
    id: "5",
    img: "/images/blog/featured-2.jpg",
    title: "Impact of Flowers on Mental Health",
    description:
      "Studies have shown that flowers have a positive impact on mental health, reducing stress and anxiety while boosting overall well-being.",
  },

  // Recent Posts
  {
    id: "6",
    img: "/images/blog/recent-1.jpg",
    title: "How to Care for Orchids",
    description:
      "A step-by-step guide to caring for orchids, ensuring they bloom beautifully year after year.",
  },
  {
    id: "7",
    img: "/images/blog/recent-2.jpg",
    title: "Transform Your Garden with These Design Ideas",
    description:
      "Discover creative ways to redesign your garden for a fresh and vibrant look.",
  },
  {
    id: "8",
    img: "/images/blog/recent-3.jpg",
    title: "Top Indoor Plants for Air Purification",
    description:
      "These indoor plants not only add beauty to your home but also help purify the air naturally.",
  },
  {
    id: "9",
    img: "/images/blog/recent-4.jpg",
    title: "Outdoor Furniture Ideas for This Summer",
    description:
      "Upgrade your outdoor space with stylish and comfortable furniture perfect for summer gatherings.",
  },
  {
    id: "10",
    img: "/images/blog/recent-5.jpg",
    title: "How to Grow a Lily in a Pot",
    description:
      "Learn how to plant, care for, and enjoy lilies in containers, even if you have limited space.",
  },
  {
    id: "11",
    img: "/images/blog/recent-6.jpg",
    title: "The Beauty of Lotus Flowers",
    description:
      "Lotus flowers are not only beautiful but also hold cultural and spiritual significance in many traditions.",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="bg-[#f9f9f9] text-gray-800 font-sans">
      {/* Blog Header */}
      <div className="container mx-auto max-w-[1200px] py-10 px-4 lg:px-0">
        <h1 className="text-center text-4xl font-bold text-[#008000] mb-4">
          Blog
        </h1>
        <div className="relative flex items-center max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:border-green-500 transition-colors"
          />
          <Search className="absolute left-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200"></div>

      {/* Popular Posts */}
      <div className="container mx-auto max-w-[1200px] mt-10 mb-10 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Posts</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Popular */}
          <Link href={`/blog/${allPosts[0].id}`} className="flex-1 block">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-[300px] md:h-[500px] lg:h-[450px]">
                <Image
                  src={allPosts[0].img}
                  alt={allPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 bg-white">
                <h5 className="text-xl md:text-2xl font-bold text-[#008000] mb-2">
                  {allPosts[0].title}
                </h5>
                <p className="text-gray-600 text-sm md:text-base">
                  {allPosts[0].description}
                </p>
              </div>
            </div>
          </Link>

          {/* Side Popular */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {allPosts.slice(1, 3).map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="block">
                <div className="border border-gray-200 rounded-xl overflow-hidden flex flex-col sm:flex-row shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full sm:w-1/2 h-[200px] sm:h-auto min-h-[200px] flex-shrink-0">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white flex-grow">
                    <h5 className="text-lg font-bold text-[#008000] mb-2">
                      {post.title}
                    </h5>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto max-w-[1200px] py-10 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allPosts.slice(3, 5).map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="block">
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-[250px]">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h5 className="text-xl font-bold text-[#008000] mb-2">
                    {post.title}
                  </h5>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="container mx-auto max-w-[1200px] py-10 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.slice(5).map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="block">
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-[200px]">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h5 className="text-lg font-bold text-[#008000] mb-2">
                    {post.title}
                  </h5>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
