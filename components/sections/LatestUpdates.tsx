"use client";
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

// Define the TypeScript interface for an Article
interface Article {
  id: string;
  image: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  description?: string;
  img: string;
}

// Mock data for the articles, mimicking the content from the image
const articles: Article[] = [
  {
    id: '1',
    image: '/image/home/latest-update/updates1.png',
    title: 'How can small-scale farmers thrive despite having limited land and resources?',
    author: 'Author Name',
    img: '/image/home/latest-update/author.png',
    date: 'July 31, 2025',
    readTime: '5 min',
    description: 'Small-scale farmers in Nepal can thrive despite having limited land and resources by adopting smart, sustainable, and community-based practices that maximize productivity, reduce dependency, and open up new income opportunities...',
  },
  {
    id: '2',
    // Placeholder image URL.
    image: '/image/home/latest-update/updates2.png',
    title: 'What challenges do small farmers face in Nepal today?',
    author: 'Author Name',
    img: '/image/home/latest-update/author.png',
    date: 'July 30, 2025',
    readTime: '5 min',
  },
  {
    id: '3',
    // Placeholder image URL.
    image: '/image/home/latest-update/updates3.png',
    title: 'How can science-backed sustainable practices help?',
    author: 'Author Name',
    img: '/image/home/latest-update/author.png',
    date: 'July 29, 2025',
    readTime: '5 min',
  },
];

// ArticleCard Component: Renders an individual article card
interface ArticleCardProps {
  article: Article;
  large?: boolean; // Prop to determine if it's the large card or a smaller one
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, large = false }) => {
  // Conditional classes based on 'large' prop for different sizing and text styles
  // Increased height for the large card: from h-64 md:h-96 to h-80 md:h-[40rem] (640px)
  const imageContainerClasses = large ? 'h-80 md:h-[30rem]' : 'h-48 md:h-56';
  const titleClasses = large ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl';
  const descriptionClasses = large ? 'text-sm mb-4 line-clamp-3' : 'hidden'; // Description only for large card

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white group cursor-pointer hover:shadow-xl transition-shadow duration-300">
      {/* Image container with responsive height */}
      <div className={`relative w-full ${imageContainerClasses}`}>
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105" // Zoom effect on hover
        />
      </div>

      {/* Gradient overlay for better text readability on image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Text content positioned at the bottom of the card */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className={`font-bold ${titleClasses} mb-2`}>{article.title}</h3>
        {/* Description for the large card */}
        {large && <p className={descriptionClasses}>{article.description}</p>}
        <div className="flex items-center text-sm opacity-90">
          {/* Placeholder for author avatar - you can replace with an actual image */}
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mr-2 text-gray-700 font-semibold text-xs">
             <Image
          src={article.img}
          alt={article.title}
          height={24}
          width={24}
          className="rounded-full"
          layout="fixed"
          objectFit="cover"
        />
          </div>
          <span className="mr-3">{article.author}</span>
          <span className="mr-3">&bull;</span>
          <span className="mr-3">{article.date}</span>
          <span>&bull; {article.readTime}</span>
        </div>
      </div>
    </div>
  );
};

// Home Component: The main page component that renders the Latest Updates section
const LatestUpdates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans"> {/* Using a light gray background */}
      <Head>
        <title>Latest Updates - Farming</title>
        <meta name="description" content="Latest updates and articles on farming practices." />
        <link rel="icon" href="/favicon.ico" />
        {/* Link to Inter font from Google Fonts for a modern, clean look */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-12 tracking-tight">
          Latest Updates
        </h2>

        {/* Grid layout for the articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Large Article Card (first article in the data array) */}
          <div className="md:col-span-1">
            <ArticleCard article={articles[0]} large />
          </div>

          {/* Container for the two smaller article cards */}
          <div className="grid grid-cols-1 gap-8">
            {/* Smaller Article Card 1 */}
            <ArticleCard article={articles[1]} />
            {/* Smaller Article Card 2 */}
            <ArticleCard article={articles[2]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LatestUpdates;
