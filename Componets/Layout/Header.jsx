"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InfiniteTextSlider from "./InfiniteTextSlider";

const top = [
  "Canned Goods",
  "Rice & Pasta",
  "Grains & Beans",
  "Baking Goods",
  "Oil & Ghee Butter",
  "Nuts & Seeds",
  "Pickels & Olives",
  "Frozen",
  "Smoked Fish",
  "Spices & Herbs",
  "Snacks & Chips",
  "Candy & Wafers",
  "Coffee & Tea",
];

const cats = [
  "Bakery Fresh",
  "Beverages",
  "Canned Goods",
  "Charcoal",
  "Hookah",
  "Cheese & Dairy",
  "Confectionery",
  "Cookies & Wafers",
  "Dried Beans",
  "Dried Fruits",
  "Frozen",
  "Lentils",
  "Grape Leaves",
  "Halva & Tahini",
  "Honey & Molasses",
  "Honey Crunch & Nuts",
  "Jams",
  "Instant Soup",
  "Oils & Ghee",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
  return (
    <header className="header">
      {/* Top categories strip */}
      <div className="bg-brand text-white">
        <div className="container-max h-10 hidden lg:flex items-center overflow-x-auto whitespace-nowrap text-[15px]">
          {top.map((label) => (
            <span
              key={label}
              className="inline-flex items-center h-10 mx-4 font-semibold"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      {/* Utility Navigation Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-max flex items-center justify-end py-2 px-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {/* Order Tracking */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-800 transition-colors">
              <img
                src="/img/Home/24.webp"
                alt="Order Tracking"
                className="w-5 h-5 object-contain"
              />
              <span className="font-medium hidden sm:inline">
                Order Tracking
              </span>
            </div>

            {/* Country Flags */}
            <div className="flex items-center gap-2 hidden md:flex">
              <div className="w-6 h-4 rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-200">
                <img
                  src="/img/Home/arabic.svg"
                  alt="Arabic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-4 rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-200">
                <img
                  src="/img/Home/usa.svg"
                  alt="United States"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-4 rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-gray-200">
                <img
                  src="/img/Home/spanish.svg"
                  alt="Spain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfiniteTextSlider />

      <div className="bg-white border-b">
        <div className="container-max flex items-center justify-between">
          <div className="flex items-center py-[10px]">
            <Link href="/">
              <img
                src="/img/Home/logo.webp"
                alt="EGI logo"
                className="max-w-[150px] w-full h-auto object-contain"
              />
            </Link>
          </div>

          {/* Main container for Wishlist, Account, and Cart */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center self-stretch">
            {/* Wishlist */}
            <div className="relative self-stretch xl:px-12 lg:px-7 px-4 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-300 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-gray-300 flex flex-col items-center justify-center">
              <button className="grid place-items-center w-12 h-12 rounded-md border shadow-sm bg-[#f7f7f7]">
                <img
                  src="https://egifood.com/wp-content/themes/angro/images/svg/header-heart.svg"
                  alt="wishlist icon"
                  className="p-[10px]"
                />
              </button>
              <span className="mt-1 text-xs font-semibold">Wishlist</span>
            </div>

            {/* My Account */}
            <div className="relative self-stretch xl:px-8 lg:px-6 px-4 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-300 flex items-center">
              <Link href="#" className="font-semibold text-sm">
                My Account
              </Link>
            </div>

            {/* Cart */}
            <div className="relative self-stretch flex flex-col items-center justify-center xl:px-12 lg:px-7 px-4 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gray-300 flex items-center">
              <button className="relative grid place-items-center w-12 h-12 rounded-md border shadow-sm bg-[#f7f7f7]">
                <img
                  src="https://egifood.com/wp-content/themes/angro/images/svg/header-cart.svg"
                  alt="wishlist icon"
                  className="p-[10px]"
                />
                <span className="absolute -top-3 -right-3 text-[14px] leading-none grid place-items-center w-6 h-6 rounded-full bg-brand text-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand text-white shadow-sm">
        <nav
          className="container-max h-[60px] flex items-center"
          role="navigation"
          aria-label="Secondary Navigation"
        >
          {/* Left: Hamburger trigger */}
          <div className="flex items-center relative" ref={menuRef}>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="group inline-flex items-center gap-3 px-4 py-2 text-sm font-medium text-white hover:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md"
            >
              <span className="relative w-5 h-3.5">
                <span className="absolute inset-x-0 top-0 h-0.5 bg-white transition-colors group-hover:bg-gray-100"></span>
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white transition-colors group-hover:bg-gray-100"></span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-colors group-hover:bg-gray-100"></span>
              </span>
              <span>All Categories</span>
            </button>
            {menuOpen && (
              <div className="absolute left-0 top-full z-40 mt-2 w-64 rounded-md bg-white text-gray-900 shadow-lg ring-1 ring-black/5">
                <div className="py-2">
                  {[
                    "All Categories",
                    "All Brands",
                    "Deal Of The Day",
                    "Seasonal Items",
                    "Contact Us",
                  ].map((label) => (
                    <Link
                      key={label}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Horizontal quick links (hidden on small screens) */}
          <div className="hidden md:flex items-stretch">
            {[
              "All Brands",
              "Deal Of The Day",
              "Seasonal Items",
              "Contact Us",
            ].map((label) => (
              <Link
                key={label}
                href="#"
                className="px-6 h-[60px] inline-flex items-center text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
