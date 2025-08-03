"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CgGitCommit } from "react-icons/cg";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Gallery", link: "/gallery" },
  { name: "Services", link: "/services" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 left-0 right-0 z-20">
      {/* Top Contact Bar */}
      <section className="header bg-white border-b-1 border-gray-200">
        <div className="container max-w-[1250px] mx-auto flex flex-wrap md:flex-row text-center justify-between lg:px-5 text-white py-0 px-2 rounded-t-2xl">
          
            {/* Logo */}
            <div className="logo flex items-center text-[28px] font-semibold text-[#8a8c8a] py-0">
              <Link href="/" className="flex items-center">
                <Image
                  className="cursor-pointer"
                  src="/image/logo/gardensewa.png"
                  alt="Gardensewa"
                  width={75}
                  height={75}
                  priority
                />
                <p className="cursor-pointer text-[#008000] ml-2">GardenSewa</p>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
                <button
                  aria-label="Search"
                  className="p-2 hover:text-green-700 cursor-pointer"
                >
                  <Image
                    src="/icons/Favorite - icon.svg"
                    alt="Search"
                    width={32}
                    height={32}
                    loading="lazy"
                    className="hover:scale-140 transition-transform duration-200"
                  />
                </button>
                <button
                  aria-label="Search"
                  className="p-2 hover:text-green-700 cursor-pointer"
                >
                  <Image
                    src="/icons/cart - icon.svg"
                    alt="Search"
                    width={32}
                    height={32}
                    loading="lazy"
                    className="hover:scale-140 transition-transform duration-200"
                  />
                </button>
                <button
                  aria-label="Search"
                  className="p-2 hover:text-green-700 cursor-pointer"
                >
                  <Image
                    src="/icons/account - icon.svg"
                    alt="Search"
                    width={32}
                    height={32}
                    loading="lazy"
                    className="hover:scale-140 transition-transform duration-200"
                  />
                </button>
                
              </div>
        </div>
      </section>

      {/* Main Nav */}
      <section className="nav-header bg-white block border-b-1 border-gray-500">
        <div className="container mx-auto max-w-[1250px] px-5 py-2">
          <div className="nav-bar flex flex-wrap justify-between items-center">

          <div className="contact flex items-center gap-1 text-[14px]">
            <a className="hover:text-green-500" href="tel:+977-9852025735">
              Call Support: +977-9852025735
            </a>
          </div>
            {/* Desktop Nav Links */}
            <ul className="nav-list lg:flex gap-8 text-[15px] hidden">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className={
                      isActive(item.link)
                        ? "bg-[#009000] text-white font-semibold rounded-4xl px-2 py-1"
                        : "hover:text-[#009000] hover:bg-green-100 rounded-4xl px-2 py-1"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              
              {/* Right Section (Hire Button + Mobile Menu Icon) */}
              <div className="flex items-center">
                <Link href="/hire">
                  <button className="hidden cursor-pointer lg:block md:block bg-primary hover:bg-secondary text-white py-2 px-4 rounded-4xl font-bold">
                    Book a Service
                  </button>
                </Link>

                {/* Mobile Hamburger */}
                <div className="lg:hidden relative z-50">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                  >
                    <Image
                      className="w-[25px] h-[25px]"
                      src={
                        menuOpen
                          ? "/image/icons/cross-circle-svgrepo-com.svg"
                          : "/image/icons/hamburger.svg"
                      }
                      alt={menuOpen ? "Close menu" : "Open menu"}
                      width={25}
                      height={25}
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed top-32 left-0 w-full h-[300px] block md:hidden lg:hidden bg-[#f1fff1] transform transition-transform duration-300 ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <ul className="px-4 text-[#008000] text-center text-[15px] my-3">
                {navItems.map((item) => (
                  <li key={item.name} className="py-2">
                    <Link
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className={
                        isActive(item.link)
                          ? "text-green-500 font-semibold"
                          : "hover:text-green-500"
                      }
                    >
                      {item.name}
                    </Link>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                  </li>
                ))}
                <li>
                  <Link href="/hire" onClick={() => setMenuOpen(false)}>
                    <button className="block lg:hidden md:hidden bg-[#008000] hover:bg-green-800 text-white py-2 mt-2 px-4 mx-auto rounded-lg">
                      Book a Service
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
