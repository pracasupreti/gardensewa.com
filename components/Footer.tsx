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
      <footer className="bg-card pt-24" style={{ height: "502px" }}>
        {/* Newsletter Section - Overlapping */}
        <div
          className="absolute top-0 left-0 right-0 z-10"
          style={{ transform: "translateY(-70.5px)" }}
        >
          <div
            className="bg-[#00AA00] text-white px-8 mx-4 md:mx-28 rounded-2xl shadow-2xl"
            style={{ height: "141px" }}
          >
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 h-full">
              <div className="text-center md:text-left">
                <h2 className="text-[52px] font-semibold">
                  Subscribe Newsletter
                </h2>
                <p className="text-base">
                  Get updates on services, offers, and plant tips straight to
                  your inbox.
                </p>
              </div>
              <form className="flex bg-white rounded-full overflow-hidden w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full text-black font-bold focus:outline-none h-[52px]"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] hover:bg-secondary text-white w-[85px] px-4 py-2 rounded-full my-1 mx-1 flex items-center justify-center"
                >
                  <ArrowRight className="w-[26px] h-[26px]" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col justify-between h-full">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-800 mb-8 p-10">
            {/* Brand Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-3">
                <Image
                  src="/image/logo/gardensewa.png"
                  alt="Gardensewa"
                  width={24}
                  height={24}
                  priority
                  className="w-6 h-6"
                />
                <p className="ml-2 text-lg text-primary font-bold">
                  GardenSewa
                </p>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                GardenSewa is your one-stop solution for plants, gardening
                services, and green lifestyle essentials.
              </p>

              {/* App Store Buttons */}
              <div className="space-y-2">
                <Image
                  src="/image/home/footer/app-store.png"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="cursor-pointer"
                />
                <Image
                  src="/image/home/footer/play-store.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-base mb-3 text-gray-900">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/plants"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Plants
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partner"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Our Partner
                  </Link>
                </li>
                <li>
                  <Link
                    href="/become-client"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Become a Client
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore Plants */}
            <div>
              <h4 className="font-semibold text-base mb-3 text-gray-900">
                Explore Plants
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Indoor Plants
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Outdoor Plants
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Pet-Friendly Plants
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Air-Purifying Plants
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Low Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product Help */}
            <div>
              <h4 className="font-semibold text-base mb-3 text-gray-900">
                Product Help
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/book-a-service"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Book a Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conditions"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get the Latest News */}
            <div>
              <h4 className="font-semibold text-base mb-3 text-gray-900">
                Get the Latest News
              </h4>
              <div className="space-y-3">
                {/* News Item 1 */}
                <div className="flex gap-3">
                  <Image
                    src="/image/blog/flower-happiness.jpg"
                    alt="How Flower Brings Happiness"
                    width={50}
                    height={40}
                    className="rounded object-cover flex-shrink-0"
                  />
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
                      How Flower Brings Happiness
                    </h5>
                    <p className="text-xs text-gray-500">
                      By Pracas Upreti • 29/07/2025
                    </p>
                  </div>
                </div>

                {/* News Item 2 */}
                <div className="flex gap-3">
                  <Image
                    src="/image/blog/gardensewa-business.jpg"
                    alt="The Blooming Business of GardenSewa"
                    width={50}
                    height={40}
                    className="rounded object-cover flex-shrink-0"
                  />
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-1">
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

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-secondary">
            <div className="text-sm text-gray-600">
              Copyright © SRIYOG Consulting Pvt. Ltd. All Rights Reserved.
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <Image
                  src="/image/icons/facebook-footer-icon.svg"
                  alt="Facebook"
                  width={16}
                  height={16}
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <Image
                  src="/image/icons/linkedin-footer-icon.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <Twitter height={16} width={16} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
