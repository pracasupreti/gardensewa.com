import Head from "next/head";
import Link from "next/link";

// This is the main component for the 404 Not Found page
const Custom404 = () => {
  return (
    <div>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center  bg-[#F6F9F6] font-sans h-screen">
        <div className="text-center mx-auto px-4">
          {/* Main container with dotted border */}
          <div className="rounded-lg p-8 ">
            {/* Large 404 text */}
            <h1 className="text-8xl font-bold text-green-700 mb-6">404</h1>

            {/* Main message container with solid border */}
            <div className="border-2 border-[#009100] rounded-lg p-6 sm:w-[613px]">
              <h2 className="text-3xl font-bold text-green-700 mb-4 uppercase">
                OOPS, YOU GOT LOST IN THE GARDEN !!
              </h2>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We're sorry for the inconvenience. It seems like you are trying
                to reach a page that either doesn't exist or has been deleted
              </p>

              {/* Back to Homepage Button */}
              <Link href="/" passHref>
                <button className="px-6 py-2 bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] hover:from-[#007000] hover:via-[#007800] hover:to-[#00A400] text-white font-medium rounded transition-colors duration-300">
                  Back to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
