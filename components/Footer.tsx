"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const linkHoverClass =
    "inline-block transform transition-transform duration-200 hover:translate-x-2 hover:text-green-600";

  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-primary text-white py-6 px-8 mx-4 md:mx-28 rounded-2xl shadow-lg">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold">Subscribe Newsletter</h2>
            <p className="text-base">
              Get updates on services, offers, and plant tips straight to your inbox.
            </p>
          </div>
          <form className="flex bg-white rounded-full overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-full"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#f1fff1] pt-10 pb-10">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-x-16 gap-y-8 text-sm text-gray-800">
          {/* Brand Info */}
          <div className="col-span-2 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <Link href="/" className="flex items-center">
                <Image
                  src="/image/logo/gardensewa.png"
                  alt="Gardensewa"
                  width={75}
                  height={75}
                  priority
                />
                <p className="ml-2 text-[20px] text-primary font-bold">GardenSewa</p>
              </Link>
            </div>
            <p className="mb-3">
              GardenSewa is your one-stop solution for plants, gardening services, and green lifestyle essentials.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {["facebook", "instagram", "linkedin"].map((platform) => (
                <Image
                  key={platform}
                  src={`/image/icons/${platform}-footer-icon.svg`}
                  alt={platform}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul className="space-y-1">
              <li><Link href="/plants" className={linkHoverClass}>Plants</Link></li>
              <li><Link href="/services" className={linkHoverClass}>Book a Service</Link></li>
              <li><Link href="/blog" className={linkHoverClass}>Blog</Link></li>
              <li><Link href="/testimonials" className={linkHoverClass}>Testimonials</Link></li>
              <li><Link href="/client" className={linkHoverClass}>Our Clients</Link></li>
            </ul>
          </div>

          {/* Explore Plants */}
          <div>
            <h4 className="font-semibold mb-2">Explore Plants</h4>
            <ul className="space-y-1">
              {[
                "Indoor Plants",
                "Outdoor Plants",
                "Pet-Friendly Plants",
                "Air-Purifying Plants",
                "Low Maintenance",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className={linkHoverClass}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Help */}
          <div>
            <h4 className="font-semibold mb-2">Product Help</h4>
            <ul className="space-y-1">
              <li><Link href="/services" className={linkHoverClass}>Book a Service</Link></li>
              <li><Link href="/faqs" className={linkHoverClass}>FAQs</Link></li>
              <li><Link href="/contact" className={linkHoverClass}>Contact</Link></li>
              <li><Link href="/privacy-policy" className={linkHoverClass}>Privacy Policy</Link></li>
              <li><Link href="/testimonials" className={linkHoverClass}>Testimonials</Link></li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h4 className="font-semibold mb-2">Download</h4>
            <div className="space-y-2">
              <Image
                src="/image/home/footer/play-store.png"
                alt="Google Play"
                width={140}
                height={40}
                className="cursor-pointer h-16 w-36"
              />
              <Image
                src="/image/home/footer/play-store.png"
                alt="Google Play"
                width={140}
                height={40}
                className="cursor-pointer h-16 w-36"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>

        {/* Bottom Footer */}
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4 md:gap-8">
          <div className="flex flex-wrap justify-center md:justify-between w-full text-center md:text-left">
            {/* Legal */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-sm text-black">Legal & Credits</p>
              <p>© 2025 Garden Sewa. All rights reserved.</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Image src="/image/icons/email.png" alt="Email" width={20} height={20} />
              <div className="flex flex-col">
                <p className="text-xs text-black">Email</p>
                <p className="text-xs">info@gardensewa.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Image src="/image/icons/phone.svg" alt="Phone" width={20} height={20} />
              <div className="flex flex-col">
                <p className="text-xs text-black">Phone</p>
                <p className="text-xs">+977-9852025735</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <Image src="/image/icons/location.png" alt="Location" width={20} height={20} />
              <div className="flex flex-col">
                <p className="text-xs text-black">Location</p>
                <p className="text-xs">Maitidevi, Kathmandu</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
