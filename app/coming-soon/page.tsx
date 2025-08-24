import Head from 'next/head';
import Link from 'next/link';

// This is the main component for the Coming Soon page
const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Coming Soon | Garden Sewa</title>
        <meta name="description" content="This page is coming soon!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa" />
        <meta property="og:url" content="https://www.gardensewa.com/" />
        <meta property="og:title" content="Gardening Services in Nepal" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
        <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
        <meta property="og:image:alt" content="Gardening Services in Nepal" />

      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans p-4">
        <div className="text-center">
          {/* Main 'COMING SOON' text */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white font-extrabold text-4xl md:text-5xl px-12 py-8 rounded-xl inline-block shadow-lg mb-8">
            COMING
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-8">
            SOON
          </h1>

          {/* Main content container */}
          <div className="max-w-xl mx-auto px-12 py-8 border-4 border-primary rounded-2xl bg-white shadow-xl">
            <h2 className="text-lg md:text-xl font-semibold text-gray-400 mb-6">
              We're planting the seeds for something new.
              <br />
              Stay tuned — it's coming soon to Garden Sewa!
            </h2>
            {/* Back to Homepage Button */}
            <Link href="/" passHref>
              <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors duration-300">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
