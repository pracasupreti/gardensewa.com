"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Gallery", link: "/gallery" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if the current pathname is active
  const isActive = (href: string) => pathname === href;

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-20">
      {/* Top Contact Bar */}
      <section
        className={`header bg-primary border-b-1 border-gray-200 py-1 transition-all duration-300 ${
          isScrolled ? "hidden" : ""
        }`}
      >
        <div className="container max-w-[1250px] mx-auto flex flex-wrap md:flex-row text-center justify-between lg:px-5 text-white py-0 px-2 rounded-t-2xl">
          <div className="contact flex items-center gap-1 text-[14px]">
            <a className="hover:text-green-500" href="tel:+977-9852025735">
              Call Support: +977-9852025735
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Nav */}
      <section className="nav-header bg-white block border-b-1 border-gray-500">
        <div className="container mx-auto max-w-[1250px] px-5 py-0">
          <div className="nav-bar flex flex-wrap justify-between items-center">

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
            {/* Desktop Nav Links */}
            <ul className="nav-list lg:flex gap-8 text-[15px] hidden">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className={isActive(item.link)
                      ? "bg-primary text-white font-semibold rounded-lg px-2 py-1"
                      : "hover:text-[#009000] hover:bg-accent rounded-lg px-2 py-1"
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
                <Link href="/book-a-service">
                  <button className="hidden cursor-pointer lg:block bg-primary hover:bg-secondary text-white py-2 px-4 rounded-xl font-bold">
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
                      src={menuOpen
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
          className={`lg:hidden fixed left-4 right-4 top-[90px] z-40 rounded-xl bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="text-center text-[#008000] text-[16px] py-4 space-y-3 px-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 rounded-md transition-colors duration-200 ${
                    isActive(item.link)
                      ? "text-green-600 font-semibold bg-green-100"
                      : "hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book-a-service" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-primary hover:bg-secondary text-white py-2 mt-2 rounded-lg font-semibold">
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
