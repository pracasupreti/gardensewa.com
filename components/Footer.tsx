"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section className="footer bg-[#f1fff1]">
        <div className="container max-w-[1200px] mx-auto py-5">
          {/* Newsletter */}
          <div className="footer-main py-2 flex flex-col md:flex-row text-center items-center gap-y-6 justify-between">
            <p className="text-[20px] font-semibold text-[#008000]">
              Subscribe to Our Newsletter
            </p>
            <form
              className="border border-[#009000] bg-white ps-2 rounded-lg"
              action="#"
            >
              <input
                type="text"
                placeholder="Enter your email address"
                className="focus:outline-none"
              />
              <button className="bg-[#009000] px-4 rounded-e-md py-2 text-white hover:bg-green-800 font-semibold">
                Subscribe
              </button>
            </form>
          </div>

          <hr />

          {/* Footer Sections */}
          <div className="footer-contents flex flex-col md:flex-row gap-y-6 items-center text-center lg:text-start justify-between py-5">
            {/* Contact */}
            <div className="footer-contact text-[15px]">
              <Image
                className="mx-auto"
                src="/image/logo/Gardensewa-LOGO.png"
                alt="Gardensewa Logo"
                width={75}
                height={75}
              />
              <p className="my-2 flex items-center gap-1 hover:text-green-500 cursor-pointer">
                <Image
                  src="/image/icons/phone.svg"
                  alt="Phone"
                  width={15}
                  height={15}
                />
                +977-9852025735
              </p>
              <p className="my-2 flex items-center gap-1 hover:text-green-500 cursor-pointer">
                <Image
                  src="/image/icons/email.png"
                  alt="Email"
                  width={15}
                  height={15}
                />
                info@gardensewa.com
              </p>
            </div>

            {/* Nav Links */}
            <div className="footer-nav">
              <ul className="nav-link text-[15px]">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Contact", href: "/contact" },
                  { label: "Products", href: "/products" },
                ].map((item) => (
                  <li
                    key={item.href}
                    className="hover:text-green-500 cursor-pointer pb-2"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div className="footer-service">
              <ul className="service text-[15px]">
                {[
                  { label: "Services", href: "/services" },
                  { label: "Blog", href: "/blog" },
                  { label: "Message", href: "/message" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Privacy", href: "/privacy" },
                ].map((item) => (
                  <li
                    key={item.href}
                    className="hover:text-green-500 cursor-pointer pb-2"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="footer-Social">
              <h5 className="font-semibold text-center text-[18px]">Connect</h5>
              <div className="social-links my-3 flex gap-3 justify-center">
                {[
                  "facebook-footer-icon.svg",
                  "instagram-footer-icon.svg",
                  "linkedin-footer-icon.svg",
                  "youtube-footer-icon.svg",
                ].map((icon, i) => (
                  <Image
                    key={i}
                    src={`/image/icons/${icon}`}
                    alt="Social Icon"
                    width={25}
                    height={25}
                    className="cursor-pointer"
                  />
                ))}
              </div>
              <div className="store flex my-5 gap-2">
                <Image
                  src="/image/home/footer/app-store.png"
                  alt="App Store"
                  width={80}
                  height={25}
                />
                <Image
                  src="/image/home/footer/play-store.png"
                  alt="Play Store"
                  width={80}
                  height={25}
                />
              </div>
            </div>
          </div>

          <hr />

          {/* Bottom Copy */}
          <div className="footer-end">
            <div className="container max-w-[1200px] mx-auto overflow-visible">
              <p className="text-[15px] text-center my-1 pt-4 px-2 lg:mt-0 mt-2">
                © 2025 Garden Sewa Pvt. Ltd. Kamalpokhari, Kathmandu, Nepal. All
                Rights Reserved. Technology Partner :{" "}
                <a
                  className="hover:text-green-700"
                  href="https://sriyog.com/"
                  target="_blank"
                >
                  Sriyog Consulting, Kathmandu
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bg-[#4fc95d] bottom-1 right-4 md:bottom-16 md:right-6 z-50 p-2 rounded-full">
        <a
          href="https://wa.me/9779746608593?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.kesanpedia.com.%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/image/icons/whatsapp.svg"
            alt="Whatsapp Icon"
            width={30}
            height={30}
          />
        </a>
      </div>
    </>
  );
}
