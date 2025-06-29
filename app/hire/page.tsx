import React from "react";

const Page = () => {
  return (
    <>
      <section className="max-w-5xl p-6 mx-auto rounded-md shadow-xl border border-gray-200 shadow-mt mt-20 mb-20">
        <h1 className="text-4xl text-center font-bold text-black ">
          Book a Service
        </h1>
        <h4 className="text-xs text-center font-medium text-gray-500 mt-2 mb-8">
          Please fill this form to book a service
        </h4>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-black text-sm" htmlFor="username">
                Full Name
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="text-black text-sm" htmlFor="emailAddress">
                Email
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="text-black text-sm" htmlFor="emailAddress">
                Address
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="text-black text-sm" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="phone"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="text-black text-sm" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="text-black text-sm" htmlFor="select">
                Select
              </label>
              <select
                id="select"
                className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option className="text-sm">Kathmandu</option>
                <option className="text-sm">Lalitpur</option>
                <option className="text-sm">Bhaktapur</option>
                <option className="text-sm">Ilam</option>
              </select>
            </div>

            <div>
              <label className="text-black text-sm" htmlFor="range">
                Range
              </label>
              <input
                id="range"
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm accent-green-600"
              />
            </div>

            <div>
              <label className="text-black text-sm" htmlFor="date">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="text-black text-sm" htmlFor="textarea">
                Description
              </label>
              <textarea
                id="textarea"
                className="block w-full h-32 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium"
                    >
                      <span className="text-[#009000]">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-[#009000] px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
