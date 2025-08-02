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

// Mock data for the articles
const articles: Article[] = [
  {
    id: '1',
    image: 'public/image/home/latest-update/updates1.png',
    title: 'How can small-scale farmers thrive despite having limited land and resources?',
    author: 'Author Name',
    img: '/image/home/latest-update/author.png',
    date: 'July 31, 2025',
    readTime: '5 min',
    description:
      'Small-scale farmers in Nepal can thrive despite having limited land and resources by adopting smart, sustainable, and community-based practices that maximize productivity, reduce dependency, and open up new income opportunities...',
  },
  {
    id: '2',
    image: '/image/home/latest-update/updates2.png',
    title: 'What challenges do small farmers face in Nepal today?',
    author: 'Author Name',
    img: '/image/home/latest-update/author.png',
    date: 'July 30, 2025',
    readTime: '5 min',
  },
  {
    id: '3',
    image: '/image/home/latest-update/updates3.png',
    title: 'How can science-backed sustainable practices help?',
    author: 'Author Name',
    img: '/image/home/latest-update/author.png',
    date: 'July 29, 2025',
    readTime: '5 min',
  },
];

// ArticleCard Component
interface ArticleCardProps {
  article: Article;
  large?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, large = false }) => {
  const imageContainerClasses = large ? 'h-80 md:h-[30rem]' : 'h-48 md:h-56';
  const titleClasses = large ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl';
  const descriptionClasses = large ? 'text-sm mb-4 line-clamp-3' : 'hidden';

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white group cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <div className={`relative w-full ${imageContainerClasses}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className={`font-bold ${titleClasses} mb-2`}>{article.title}</h3>
        {large && <p className={descriptionClasses}>{article.description}</p>}
        <div className="flex items-center text-sm opacity-90 mt-2">
          <Image
            src={article.img}
            alt={`${article.author} avatar`}
            width={24}
            height={24}
            className="rounded-full object-cover mr-2"
          />
          <span className="mr-3">{article.author}</span>
          <span className="mr-3">&bull;</span>
          <span className="mr-3">{article.date}</span>
          <span>&bull; {article.readTime}</span>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const LatestUpdates: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Head>
        <title>Latest Updates - Farming</title>
        <meta name="description" content="Latest updates and articles on farming practices." />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-12 tracking-tight">
          Latest Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Large Article Card */}
          <div className="md:col-span-1">
            <ArticleCard article={articles[0]} large />
          </div>

          {/* Two Smaller Article Cards */}
          <div className="grid grid-cols-1 gap-8">
            <ArticleCard article={articles[1]} />
            <ArticleCard article={articles[2]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LatestUpdates;
