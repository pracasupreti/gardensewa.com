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
