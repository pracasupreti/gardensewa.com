export default function FAQPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 p-4">
      <div className="flex w-full max-w-7xl flex-col items-center px-6 py-8 md:flex-row md:items-stretch">
        {/* Left Section */}
        <div className="flex flex-1 flex-col justify-center p-4 text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-green-900 md:text-5xl mb-8">
            Got Plants to <br className="hidden md:block" /> Share?
          </h1>
          <p className="mb-6 text-sm text-gray-600 md:text-base">
            Join us in our mission to make gardening accessible and enjoyable for everyone in Nepal!
          </p>
          <div className="mt-4 md:mt-0">
            <button className="rounded-full bg-primary px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-secondary">
              Start Selling
            </button>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="mt-8 flex flex-1 flex-col items-center gap-4 md:mt-0 md:flex-row md:items-stretch">
          {/* Left Image - Cactus */}
          <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-auto md:w-1/2 mt-20">
            <img
              src="/image/navbar/about/cactus.jpg"
              alt="Cactus growing by the sea"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Image - Two Plants */}
          <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-auto md:w-1/2 mt-20">
            <img
              src="/image/navbar/about/two-plants.jpg"
              alt="Two plants in wooden vases"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}