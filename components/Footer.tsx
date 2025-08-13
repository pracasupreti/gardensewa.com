"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Twitter } from "lucide-react";

export default function Footer() {
  const linkHoverClass =
    "inline-block transform transition-transform duration-200 hover:translate-x-2 hover:text-green-600";

  return (
    <div className="relative">
      {/* Main Footer */}
      <footer
        className="bg-card pt-24"
        style={{ height: "auto", minHeight: "502px" }}
      >
        {/* Newsletter Section - Overlapping */}
        <div
          className="absolute top-0 left-0 right-0 z-10"
          style={{ transform: "translateY(-70.5px)" }}
        >
          <div
            className="bg-[#00AA00] text-white px-4 sm:px-8 mx-2 sm:mx-4 md:mx-28 rounded-2xl shadow-2xl"
            style={{ minHeight: "141px", height: "auto" }}
          >
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 py-4 sm:py-6 md:h-full">
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-[52px] font-semibold leading-tight">
                  Subscribe Newsletter
                </h2>
                <p className="text-sm sm:text-base mt-2">
                  Get updates on services, offers, and plant tips straight to
                  your inbox.
                </p>
              </div>
              <form className="flex bg-white rounded-full overflow-hidden w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 sm:px-4 py-2 w-full text-black font-bold focus:outline-none h-[44px] sm:h-[52px] text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] hover:from-[#007000] hover:via-[#007800] hover:to-[#00A400] text-white w-[70px] sm:w-[85px] px-3 sm:px-4 py-2 rounded-full my-1 mx-1 flex items-center justify-center"
                >
                  <ArrowRight className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col justify-between h-full">
          {/* Main Footer Content */}
          <div className="flex flex-wrap text-sm text-gray-800 mb-6 sm:mb-8 max-xl:p-10 justify-between max-xl:gap-10">
            {/* Brand Info */}
            <div className="sm:col-span-2 lg:col-span-1 mr-10 w-[250px]">
              <div className="flex items-center mb-3">
                <Image
                  src="/image/logo/gardensewa.png"
                  alt="Gardensewa"
                  width={32}
                  height={32}
                  priority
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <p className="ml-1 text-lg sm:text-xl text-primary font-bold">
                  GardenSewa
                </p>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
                GardenSewa is your one-stop solution for plants, gardening
                services, and green lifestyle essentials.
              </p>

              {/* App Store Buttons */}
              <div className="space-y-2 flex flex-col items-start">
                <Image
                  src="/image/home/footer/app-store.png"
                  alt="App Store"
                  width={100}
                  height={33}
                  className="cursor-pointer w-[100px] sm:w-[120px] h-auto"
                />
                <Image
                  src="/image/home/footer/play-store.png"
                  alt="Google Play"
                  width={100}
                  height={33}
                  className="cursor-pointer w-[100px] sm:w-[120px] h-auto"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              <div className="w-[150px]">
                <h4 className="font-semibold text-sm sm:text-base mb-3 text-gray-900">
                  Quick Links
                </h4>
                <ul className="space-y-0.5">
                  <li>
                    <Link
                      href="/plants"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Plants</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/testimonials"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Testimonials</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partner"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Our Partner</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/become-client"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Become a Client</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Explore Plants */}
              <div className="col-span-1">
                <h4 className="font-semibold text-sm sm:text-base mb-3 text-gray-900">
                  Explore Plants
                </h4>
                <ul className="space-y-0.5">
                  <li>
                    <Link
                      href="#"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Indoor Plants</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Outdoor Plants</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Pet-Friendly Plants</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Air-Purifying Plants</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Low Maintenance</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Product Help */}
              <div className="col-span-1">
                <h4 className="font-semibold text-sm sm:text-base mb-3 text-gray-900">
                  Product Help
                </h4>
                <ul className="space-y-0.5">
                  <li>
                    <Link
                      href="/book-a-service"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Book a Service</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>FAQs</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conditions"
                      className="group text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      <span>Terms and Conditions</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Get the Latest News */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <h4 className="font-semibold text-sm sm:text-base mb-3 text-gray-900">
                  Get the Latest News
                </h4>
                <div className="space-y-3">
                  {/* News Item 1 */}
                  <div className="flex gap-2 sm:gap-3">
                    <Image
                      src="/image/navbar/navimg1.png"
                      alt="How Flower Brings Happiness"
                      width={40}
                      height={32}
                      className="rounded object-cover flex-shrink-0 w-[40px] h-[32px] sm:w-[50px] sm:h-[40px]"
                    />
                    <div className="min-w-0 flex-1">
                      <h5 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        How Flower Brings Happiness
                      </h5>
                      <p className="text-xs text-gray-500">
                        By Pracas Upreti • 29/07/2025
                      </p>
                    </div>
                  </div>

                  {/* News Item 2 */}
                  <div className="flex gap-2 sm:gap-3">
                    <Image
                      src="/image/navbar/navimg2.png"
                      alt="The Blooming Business of GardenSewa"
                      width={40}
                      height={32}
                      className="rounded object-cover flex-shrink-0 w-[40px] h-[32px] sm:w-[50px] sm:h-[40px]"
                    />
                    <div className="min-w-0 flex-1">
                      <h5 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        The Blooming Business of GardenSewa
                      </h5>
                      <p className="text-xs text-gray-500">
                        By Niranjan Sharma • 29/07/2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 border-t border-secondary pt-4 pb-4">
            <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              Copyright © SRIYOG Consulting Pvt. Ltd. All Rights Reserved.
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <Image
                  src="/image/navbar/fb.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="w-8 sm:h-8"
                />
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <Image
                  src="/image/navbar/ld.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="w-8 sm:h-8"
                />
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <Image
                  src="/image/navbar/twitter.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="w-8 sm:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
