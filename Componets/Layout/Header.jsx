"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InfiniteTextSlider from "./infiniteTextSlider"

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
    <header className="navbar-header">
      {/* Utility Navigation Section */}
      <div className="utility-nav">
        <div className="container-max flex-end">
          <div className="utility-items">
            <div className="utility-item">
              <img src="/img/Header/delivery-truck.svg" alt="Delivery Truck" />
              <span className="utility-label">Order Tracking</span>
            </div>

            <div className="flags">
              {["ar.svg", "en-us.svg", "es.svg"].map((flag, idx) => (
                <div key={idx} className="flag">
                  <img src={`/img/Header/${flag}`} alt="flag" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <InfiniteTextSlider />

      <div className="navbar-main">
        <div className="container-max space-between">
          <div className="logo-box">
            <Link href="/">
              <img
                src="/img/Header/egi-logo.png"
                alt="EGI logo"
                className="logo"
              />
            </Link>
          </div>

          <div className="account-section">
            <div className="wishlist-box">
              <button className="icon-btn">
                <img
                  src="https://egifood.com/wp-content/themes/angro/images/svg/header-heart.svg"
                  alt="wishlist"
                />
              </button>
              <span className="wishlist-label">Wishlist</span>
            </div>

            <div className="account-box">
              <Link href="#">My Account</Link>
            </div>

            <div className="cart-box">
              <button className="icon-btn cart-btn" style={{ position: "relative" }}>
                <img
                  src="https://egifood.com/wp-content/themes/angro/images/svg/header-cart.svg"
                  alt="cart"
                />
                <span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-categories">
        <nav className="container-max nav-bar" role="navigation">
          <div className="menu-trigger" ref={menuRef}>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="menu-btn"
            >
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span>All Categories</span>
            </button>
            {menuOpen && (
              <div className="menu-dropdown">
                <div className="menu-list">
                  {[
                    "All Categories",
                    "All Brands",
                    "Deal Of The Day",
                    "Seasonal Items",
                    "Contact Us",
                  ].map((label) => (
                    <Link key={label} href="#" className="menu-item">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="quick-links">
            {["All Brands", "Deal Of The Day", "Seasonal Items", "Contact Us"].map(
              (label) => (
                <Link key={label} href="#" className="quick-link">
                  {label}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

