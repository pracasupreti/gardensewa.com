import Head from 'next/head';
import Link from 'next/link';

// This is the main component for the 404 Not Found page
const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans p-4">
        <div className="text-center">
          {/* Main 404 Heading */}
          <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-8 md:text-9xl">
            404
          </h1>
          
          {/* Main content container */}
          <div className="max-w-xl mx-auto p-8 border-4 border-primary rounded-2xl bg-white shadow-xl">
            <h2 className="text-3xl md:text-3xl font-extrabold text-primary mb-4">
              OOPS, YOU GOT LOST IN THE GARDEN !!
            </h2>
            <p className="text-gray-600 mb-6">
              We're sorry for the inconvenience. It seems like you are trying to
              reach a page that either doesn't exist or has been deleted.
            </p>
            {/* Back to Homepage Button */}
            <Link href="/" passHref>
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:bg-secondary transition-colors duration-300">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
